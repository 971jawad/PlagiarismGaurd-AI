import { pgTable, text, serial, integer, boolean, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  plan: text("plan").notNull().default("basic"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const documents = pgTable("documents", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  filename: text("filename").notNull(),
  originalText: text("original_text").notNull(),
  fileType: text("file_type").notNull(),
  fileSize: integer("file_size").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const plagiarismReports = pgTable("plagiarism_reports", {
  id: serial("id").primaryKey(),
  documentId: integer("document_id").references(() => documents.id),
  overallScore: integer("overall_score").notNull(),
  matches: json("matches").$type<PlagiarismMatch[]>(),
  aiGenerated: boolean("ai_generated").default(false),
  processingTime: integer("processing_time"), // in milliseconds
  createdAt: timestamp("created_at").defaultNow(),
});

export const paraphraseCache = pgTable("paraphrase_cache", {
  id: serial("id").primaryKey(),
  originalText: text("original_text").notNull(),
  paraphrasedText: text("paraphrased_text").notNull(),
  uniquenessScore: integer("uniqueness_score").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Zod schemas
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertDocumentSchema = createInsertSchema(documents).omit({
  id: true,
  createdAt: true,
});

export const insertPlagiarismReportSchema = createInsertSchema(plagiarismReports).omit({
  id: true,
  createdAt: true,
});

export const insertParaphraseSchema = createInsertSchema(paraphraseCache).omit({
  id: true,
  createdAt: true,
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type Document = typeof documents.$inferSelect;
export type InsertDocument = z.infer<typeof insertDocumentSchema>;

export type PlagiarismReport = typeof plagiarismReports.$inferSelect;
export type InsertPlagiarismReport = z.infer<typeof insertPlagiarismReportSchema>;

export type ParaphraseCache = typeof paraphraseCache.$inferSelect;
export type InsertParaphraseCache = z.infer<typeof insertParaphraseSchema>;

// Additional types for plagiarism detection
export interface PlagiarismMatch {
  id: string;
  text: string;
  similarity: number;
  source: string;
  startIndex: number;
  endIndex: number;
  lineNumbers: string;
  type: 'exact' | 'paraphrased' | 'similar';
}

export interface PlagiarismAnalysis {
  overallScore: number;
  matches: PlagiarismMatch[];
  aiGenerated: boolean;
  processingTime: number;
  wordCount: number;
  uniqueText: number;
}

export interface ParaphraseSuggestion {
  originalText: string;
  paraphrasedText: string;
  uniquenessScore: number;
  improvement: number;
}
