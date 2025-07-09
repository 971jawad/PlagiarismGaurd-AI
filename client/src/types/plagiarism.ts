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

export interface AnalysisResult {
  documentId: number;
  reportId: number;
  analysis: PlagiarismAnalysis;
}
