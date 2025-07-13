import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import bcrypt from 'bcrypt';
import passport from "./auth";
import { requireAuth, optionalAuth } from "./auth";
import { storage } from "./storage";
import { fileProcessor } from "./services/fileProcessor";
import { plagiarismDetector } from "./services/plagiarismDetector";
import { openAIService } from "./services/openai";
import { aiProviderManager } from "./services/aiProviders";
import { qaTestSuite } from "./services/qaTestSuite";
import { insertDocumentSchema, insertPlagiarismReportSchema, type ParaphraseSuggestion } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Authentication routes
  app.get('/auth/google', (req, res) => {
    if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
      passport.authenticate('google', { scope: ['profile', 'email'] })(req, res);
    } else {
      res.status(400).json({ error: 'Google OAuth not configured' });
    }
  });
  
  app.get('/auth/google/callback', (req, res) => {
    if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
      passport.authenticate('google', { failureRedirect: '/login' })(req, res, () => {
        res.redirect('/');
      });
    } else {
      res.redirect('/login');
    }
  });
  
  app.post('/auth/register', async (req, res) => {
    try {
      const { username, email, password } = req.body;
      
      // Check if user already exists
      const existingUser = await storage.getUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({ error: 'User with this email already exists' });
      }
      
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      
      // Create user
      const user = await storage.createUser({
        username,
        email,
        password: hashedPassword,
        plan: 'basic'
      });
      
      // Log user in
      req.login(user, (err) => {
        if (err) {
          return res.status(500).json({ error: 'Login failed after registration' });
        }
        res.json({ user: { id: user.id, username: user.username, email: user.email, plan: user.plan } });
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ error: 'Registration failed' });
    }
  });
  
  app.post('/auth/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    (req, res) => {
      res.json({ user: req.user });
    }
  );
  
  app.post('/auth/logout', (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ error: 'Logout failed' });
      }
      res.json({ message: 'Logged out successfully' });
    });
  });
  
  app.get('/auth/user', (req, res) => {
    if (req.user) {
      res.json({ user: req.user });
    } else {
      res.json({ user: null });
    }
  });

  // File upload and analysis endpoint (now with optional auth)
  app.post('/api/analyze', optionalAuth, fileProcessor.getUploadMiddleware(), async (req, res) => {
    try {
      let text = '';
      let filename = '';
      let fileType = 'text';
      let fileSize = 0;

      if (req.file) {
        // Process uploaded file
        fileProcessor.validateFile(req.file);
        text = await fileProcessor.extractTextFromFile(req.file);
        const metadata = fileProcessor.getFileMetadata(req.file);
        filename = metadata.filename;
        fileType = metadata.extension;
        fileSize = metadata.size;
      } else if (req.body.text) {
        // Process pasted text
        text = req.body.text;
        filename = 'pasted-text.txt';
        fileType = 'text';
        fileSize = Buffer.byteLength(text, 'utf8');
      } else {
        return res.status(400).json({ error: 'No text or file provided' });
      }

      if (!text.trim()) {
        return res.status(400).json({ error: 'No text content found' });
      }

      // Create document record
      const document = await storage.createDocument({
        userId: req.user?.id || null, // Associate with authenticated user if available
        filename,
        originalText: text,
        fileType,
        fileSize
      });

      // Analyze for plagiarism
      const analysis = await plagiarismDetector.analyzePlagiarism(text);

      // Save analysis results
      const report = await storage.createPlagiarismReport({
        documentId: document.id,
        overallScore: analysis.overallScore,
        matches: analysis.matches,
        aiGenerated: analysis.aiGenerated,
        processingTime: analysis.processingTime
      });

      res.json({
        documentId: document.id,
        reportId: report.id,
        analysis: {
          overallScore: analysis.overallScore,
          matches: analysis.matches,
          aiGenerated: analysis.aiGenerated,
          processingTime: analysis.processingTime,
          wordCount: analysis.wordCount,
          uniqueText: analysis.uniqueText
        }
      });
    } catch (error) {
      console.error('Analysis error:', error);
      res.status(500).json({ error: error instanceof Error ? error.message : 'Analysis failed' });
    }
  });

  // Get plagiarism report
  app.get('/api/report/:id', async (req, res) => {
    try {
      const reportId = parseInt(req.params.id);
      const report = await storage.getPlagiarismReport(reportId);
      
      if (!report) {
        return res.status(404).json({ error: 'Report not found' });
      }

      res.json(report);
    } catch (error) {
      console.error('Get report error:', error);
      res.status(500).json({ error: 'Failed to fetch report' });
    }
  });

  // Generate paraphrase suggestions
  app.post('/api/paraphrase', async (req, res) => {
    try {
      const { text } = req.body;
      
      if (!text || typeof text !== 'string') {
        return res.status(400).json({ error: 'Text is required' });
      }

      // Check cache first
      const cached = await storage.getParaphraseFromCache(text);
      if (cached) {
        return res.json([{
          originalText: cached.originalText,
          paraphrasedText: cached.paraphrasedText,
          uniquenessScore: cached.uniquenessScore,
          improvement: 0
        }]);
      }

      // Generate new suggestions using AI provider manager
      const suggestions = await aiProviderManager.generateParaphrase(text);
      
      // Cache the best suggestion
      if (suggestions.length > 0) {
        const bestSuggestion = suggestions.reduce((best: ParaphraseSuggestion, current: ParaphraseSuggestion) => 
          current.uniquenessScore > best.uniquenessScore ? current : best
        );
        
        await storage.saveParaphraseToCache({
          originalText: text,
          paraphrasedText: bestSuggestion.paraphrasedText,
          uniquenessScore: bestSuggestion.uniquenessScore
        });
      }

      res.json(suggestions);
    } catch (error) {
      console.error('Paraphrase error:', error);
      res.status(500).json({ error: 'Failed to generate paraphrase suggestions' });
    }
  });

  // Export report as PDF
  app.get('/api/export/:reportId', async (req, res) => {
    try {
      const reportId = parseInt(req.params.reportId);
      const report = await storage.getPlagiarismReport(reportId);
      
      if (!report) {
        return res.status(404).json({ error: 'Report not found' });
      }

      const document = await storage.getDocument(report.documentId!);
      if (!document) {
        return res.status(404).json({ error: 'Document not found' });
      }

      const analysis = {
        overallScore: report.overallScore,
        matches: report.matches || [],
        aiGenerated: report.aiGenerated || false,
        processingTime: report.processingTime || 0,
        wordCount: document.originalText.split(/\s+/).length,
        uniqueText: 100 - report.overallScore
      };

      const pdfContent = await plagiarismDetector.generateDetailedReport(analysis);
      
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="plagiarism-report-${reportId}.pdf"`);
      res.send(pdfContent);
    } catch (error) {
      console.error('Export error:', error);
      res.status(500).json({ error: 'Failed to export report' });
    }
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ 
      status: 'healthy',
      timestamp: new Date().toISOString(),
      service: 'plagiarism-checker-api',
      aiProviders: aiProviderManager.getAvailableProviders(),
      currentProvider: aiProviderManager.getCurrentProvider()
    });
  });

  // QA Test Suite endpoint
  app.post('/api/qa-test', async (req, res) => {
    try {
      console.log('🔍 Starting comprehensive QA test suite...');
      const testResults = await qaTestSuite.runAllTests();
      const report = qaTestSuite.getTestReport();
      
      res.json({
        summary: {
          totalTests: testResults.totalTests,
          passed: testResults.passed,
          failed: testResults.failed,
          skipped: testResults.skipped,
          passRate: ((testResults.passed / testResults.totalTests) * 100).toFixed(1),
          executionTime: testResults.executionTime,
          coverage: testResults.coverage
        },
        details: testResults.details,
        report: report
      });
    } catch (error) {
      console.error('QA test suite error:', error);
      res.status(500).json({ error: 'QA test suite failed to execute' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
