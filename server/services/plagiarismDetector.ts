import { openAIService } from './openai';
import { aiProviderManager } from './aiProviders';
import type { PlagiarismMatch, PlagiarismAnalysis } from '@shared/schema';

export class PlagiarismDetector {
  private webSources = [
    'wikipedia.org',
    'arxiv.org',
    'scholar.google.com',
    'researchgate.net',
    'jstor.org',
    'pubmed.ncbi.nlm.nih.gov'
  ];

  async analyzePlagiarism(text: string): Promise<PlagiarismAnalysis> {
    const startTime = Date.now();
    
    try {
      // Split text into sentences for analysis
      const sentences = this.splitIntoSentences(text);
      const matches: PlagiarismMatch[] = [];
      
      // Use AI provider manager for robust AI detection with failsafe
      const aiAnalysis = await aiProviderManager.analyzeForPlagiarism(text);
      
      // Simulate web search and semantic analysis
      const webMatches = await this.performWebSearch(sentences);
      matches.push(...webMatches);
      
      // Calculate overall score
      const overallScore = this.calculateOverallScore(matches, aiAnalysis.confidence * 100);
      
      // Calculate statistics
      const wordCount = this.countWords(text);
      const uniqueText = this.calculateUniqueText(text, matches);
      
      const processingTime = Date.now() - startTime;
      
      return {
        overallScore,
        matches,
        aiGenerated: aiAnalysis.aiGenerated,
        processingTime,
        wordCount,
        uniqueText
      };
    } catch (error) {
      console.error('Plagiarism analysis failed:', error);
      throw new Error('Failed to analyze plagiarism');
    }
  }

  private splitIntoSentences(text: string): string[] {
    return text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 10);
  }

  private async performWebSearch(sentences: string[]): Promise<PlagiarismMatch[]> {
    const matches: PlagiarismMatch[] = [];
    
    // Simulate web search results
    for (let i = 0; i < Math.min(sentences.length, 5); i++) {
      const sentence = sentences[i];
      const similarity = Math.random() * 100;
      
      if (similarity > 60) {
        const source = this.webSources[Math.floor(Math.random() * this.webSources.length)];
        
        matches.push({
          id: `match-${i}`,
          text: sentence.trim(),
          similarity,
          source: `https://${source}/article/${Math.random().toString(36).substr(2, 9)}`,
          startIndex: i * 50,
          endIndex: (i + 1) * 50,
          lineNumbers: `${i + 1}-${i + 2}`,
          type: similarity > 85 ? 'exact' : similarity > 70 ? 'paraphrased' : 'similar'
        });
      }
    }
    
    return matches;
  }

  private calculateOverallScore(matches: PlagiarismMatch[], semanticSimilarity: number): number {
    if (matches.length === 0) return 0;
    
    const avgSimilarity = matches.reduce((sum, match) => sum + match.similarity, 0) / matches.length;
    const weightedScore = (avgSimilarity * 0.7) + (semanticSimilarity * 0.3);
    
    return Math.round(Math.max(0, Math.min(100, weightedScore)));
  }

  private countWords(text: string): number {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  }

  private calculateUniqueText(text: string, matches: PlagiarismMatch[]): number {
    const totalWords = this.countWords(text);
    if (totalWords === 0) return 100;
    
    const plagiarizedWords = matches.reduce((sum, match) => sum + this.countWords(match.text), 0);
    const uniqueWords = totalWords - plagiarizedWords;
    
    return Math.max(0, Math.round((uniqueWords / totalWords) * 100));
  }

  async generateDetailedReport(analysis: PlagiarismAnalysis): Promise<string> {
    // This would integrate with a PDF generation library
    // For now, return a summary
    return `
Plagiarism Analysis Report
==========================

Overall Score: ${analysis.overallScore}%
AI Generated: ${analysis.aiGenerated ? 'Yes' : 'No'}
Processing Time: ${analysis.processingTime}ms
Word Count: ${analysis.wordCount}
Unique Text: ${analysis.uniqueText}%

Matches Found: ${analysis.matches.length}
${analysis.matches.map(match => `
- ${match.type.toUpperCase()} (${match.similarity}%)
  Text: "${match.text.substring(0, 100)}..."
  Source: ${match.source}
  Lines: ${match.lineNumbers}
`).join('')}
    `;
  }
}

export const plagiarismDetector = new PlagiarismDetector();
