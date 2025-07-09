import { 
  users, 
  documents, 
  plagiarismReports, 
  paraphraseCache,
  type User, 
  type InsertUser,
  type Document,
  type InsertDocument,
  type PlagiarismReport,
  type InsertPlagiarismReport,
  type ParaphraseCache,
  type InsertParaphraseCache,
  type PlagiarismMatch
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Document operations
  getDocument(id: number): Promise<Document | undefined>;
  getDocumentsByUser(userId: number): Promise<Document[]>;
  createDocument(document: InsertDocument): Promise<Document>;
  deleteDocument(id: number): Promise<void>;
  
  // Plagiarism report operations
  getPlagiarismReport(id: number): Promise<PlagiarismReport | undefined>;
  getReportByDocument(documentId: number): Promise<PlagiarismReport | undefined>;
  createPlagiarismReport(report: InsertPlagiarismReport): Promise<PlagiarismReport>;
  
  // Paraphrase cache operations
  getParaphraseFromCache(originalText: string): Promise<ParaphraseCache | undefined>;
  saveParaphraseToCache(paraphrase: InsertParaphraseCache): Promise<ParaphraseCache>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private documents: Map<number, Document>;
  private plagiarismReports: Map<number, PlagiarismReport>;
  private paraphraseCache: Map<string, ParaphraseCache>;
  private currentUserId: number;
  private currentDocumentId: number;
  private currentReportId: number;
  private currentParaphraseId: number;

  constructor() {
    this.users = new Map();
    this.documents = new Map();
    this.plagiarismReports = new Map();
    this.paraphraseCache = new Map();
    this.currentUserId = 1;
    this.currentDocumentId = 1;
    this.currentReportId = 1;
    this.currentParaphraseId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { 
      ...insertUser, 
      id, 
      plan: insertUser.plan || 'basic',
      createdAt: new Date() 
    };
    this.users.set(id, user);
    return user;
  }

  async getDocument(id: number): Promise<Document | undefined> {
    return this.documents.get(id);
  }

  async getDocumentsByUser(userId: number): Promise<Document[]> {
    return Array.from(this.documents.values()).filter(doc => doc.userId === userId);
  }

  async createDocument(insertDocument: InsertDocument): Promise<Document> {
    const id = this.currentDocumentId++;
    const document: Document = { 
      ...insertDocument, 
      id, 
      userId: insertDocument.userId || null,
      createdAt: new Date() 
    };
    this.documents.set(id, document);
    return document;
  }

  async deleteDocument(id: number): Promise<void> {
    this.documents.delete(id);
  }

  async getPlagiarismReport(id: number): Promise<PlagiarismReport | undefined> {
    return this.plagiarismReports.get(id);
  }

  async getReportByDocument(documentId: number): Promise<PlagiarismReport | undefined> {
    return Array.from(this.plagiarismReports.values()).find(report => report.documentId === documentId);
  }

  async createPlagiarismReport(insertReport: InsertPlagiarismReport): Promise<PlagiarismReport> {
    const id = this.currentReportId++;
    const report: PlagiarismReport = { 
      ...insertReport, 
      id, 
      documentId: insertReport.documentId || null,
      matches: insertReport.matches as PlagiarismMatch[] || null,
      aiGenerated: insertReport.aiGenerated || null,
      processingTime: insertReport.processingTime || null,
      createdAt: new Date() 
    };
    this.plagiarismReports.set(id, report);
    return report;
  }

  async getParaphraseFromCache(originalText: string): Promise<ParaphraseCache | undefined> {
    return this.paraphraseCache.get(originalText);
  }

  async saveParaphraseToCache(insertParaphrase: InsertParaphraseCache): Promise<ParaphraseCache> {
    const id = this.currentParaphraseId++;
    const paraphrase: ParaphraseCache = { 
      ...insertParaphrase, 
      id, 
      createdAt: new Date() 
    };
    this.paraphraseCache.set(insertParaphrase.originalText, paraphrase);
    return paraphrase;
  }
}

export const storage = new MemStorage();
