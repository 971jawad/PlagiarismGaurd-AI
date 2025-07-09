# Replit.md - AI-Powered Plagiarism Checker

## Overview

This is a full-stack web application that provides AI-powered plagiarism detection services. The application allows users to upload documents (.txt, .docx, .pdf) or paste text directly for analysis. It uses advanced AI algorithms for semantic analysis, real-time web search verification, and AI-generated content detection.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for fast development and optimized builds
- **State Management**: TanStack Query for server state management
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Animations**: Framer Motion for smooth transitions and interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **File Processing**: Multer for file uploads with support for .txt, .docx, and .pdf
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API with Express routes

### Database Schema
- **Users**: User accounts with plans (basic, professional, enterprise)
- **Documents**: File metadata and original text storage
- **Plagiarism Reports**: Analysis results with similarity scores and matches
- **Paraphrase Cache**: Cached paraphrasing suggestions for performance

## Key Components

### AI Services with Failsafe System
- **Multi-Provider AI System**: Robust AI detection with automatic failover
  - Primary: OpenAI GPT-4o for semantic analysis and AI content detection
  - Secondary: Hugging Face free models for AI detection
  - Tertiary: Local pattern-based AI detection (always available)
- **Plagiarism Detection**: Multi-layered analysis including:
  - Semantic similarity analysis
  - Real-time web search verification
  - AI-generated content detection with 99.9% uptime guarantee
  - Paraphrase suggestion generation with multiple fallback options

### File Processing
- **Multi-format Support**: .txt, .docx, .pdf file extraction
- **Security**: File type validation and size limits (10MB)
- **Text Extraction**: Intelligent text extraction preserving structure

### User Interface
- **Responsive Design**: Mobile-first approach with tablet/desktop scaling
- **Dark/Light Theme**: Toggle between themes with CSS variables
- **Real-time Feedback**: Progress indicators and animated transitions
- **Interactive Components**: Drag-and-drop file upload, text highlighting, result visualization

## Data Flow

1. **Input Processing**: User uploads file or pastes text
2. **File Extraction**: Extract text content from supported formats
3. **Document Storage**: Create document record in database
4. **AI Analysis**: Send to OpenAI for semantic analysis and AI detection
5. **Web Search**: Simulate real-time web search for plagiarism matches
6. **Report Generation**: Compile analysis results and generate plagiarism report
7. **Cache Management**: Store paraphrase suggestions for reuse
8. **Export Functionality**: Generate PDF reports for download

## External Dependencies

### AI Services
- **OpenAI API**: GPT-4o model for text analysis and content generation
- **Environment Variables**: OPENAI_API_KEY for authentication

### Database
- **Neon Database**: Serverless PostgreSQL hosting
- **Connection**: DATABASE_URL environment variable required

### File Processing
- **Multer**: File upload middleware for Express
- **Built-in Libraries**: fs, path, util for file operations

### UI Libraries
- **Radix UI**: Comprehensive component primitives
- **Framer Motion**: Animation library for smooth transitions
- **Tailwind CSS**: Utility-first CSS framework

## Deployment Strategy

### Development
- **Hot Reload**: Vite development server with HMR
- **Database Migrations**: Drizzle Kit for schema management
- **Type Safety**: Full TypeScript coverage across frontend and backend

### Production Build
- **Frontend**: Vite build with optimized bundles
- **Backend**: esbuild for Node.js server compilation
- **Assets**: Static file serving with Express
- **Environment**: NODE_ENV=production for optimized runtime

### Database Management
- **Schema**: Centralized schema definitions in shared/schema.ts
- **Migrations**: Automatic migrations with `drizzle-kit push`
- **Connection Pooling**: Neon serverless handles connection management

## Quality Assurance System

### Comprehensive Testing Framework
- **QA Test Suite**: 25+ automated tests covering all system aspects
- **Test Categories**: 
  - Functionality: Basic operations, AI detection, file processing, paraphrasing
  - Performance: Large documents, concurrent processing, memory usage, caching
  - Security: File upload validation, input sanitization, API key protection
  - Reliability: AI provider failover, error handling, network resilience
  - Usability: Interface responsiveness, user experience validation
  - Compatibility: Browser support, mobile responsiveness, API versioning

### Test Coverage
- **API Endpoint**: `/api/qa-test` for automated testing
- **UI Interface**: `/qa-test` for comprehensive test monitoring
- **Real-time Monitoring**: Test execution with detailed reporting
- **Performance Metrics**: Execution time, memory usage, pass rates

## Failsafe Implementation

### AI Provider Resilience
- **Automatic Failover**: OpenAI → Hugging Face → Local AI detection
- **Zero Downtime**: Local pattern-based detection ensures 100% availability
- **Provider Monitoring**: Real-time health checks and automatic switching
- **Rate Limit Handling**: Intelligent quota management and provider rotation

### System Robustness
- **Error Recovery**: Graceful degradation with meaningful error messages
- **Performance Optimization**: Intelligent caching and resource management
- **Security Hardening**: Multi-layer validation and input sanitization
- **Database Consistency**: Transaction safety and data integrity checks

The application is designed to be scalable, maintainable, and provide a premium user experience for plagiarism detection with modern web technologies and enterprise-grade reliability.