import { apiRequest } from './queryClient';
import type { PlagiarismAnalysis, ParaphraseSuggestion, AnalysisResult } from '@/types/plagiarism';

export const api = {
  async analyzeText(text: string): Promise<AnalysisResult> {
    const response = await apiRequest('POST', '/api/analyze', { text });
    return response.json();
  },

  async analyzeFile(file: File): Promise<AnalysisResult> {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch('/api/analyze', {
      method: 'POST',
      body: formData,
      credentials: 'include',
    });
    
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`${response.status}: ${error}`);
    }
    
    return response.json();
  },

  async getReport(reportId: number): Promise<any> {
    const response = await apiRequest('GET', `/api/report/${reportId}`);
    return response.json();
  },

  async generateParaphrase(text: string): Promise<ParaphraseSuggestion[]> {
    const response = await apiRequest('POST', '/api/paraphrase', { text });
    return response.json();
  },

  async exportReport(reportId: number): Promise<Blob> {
    const response = await fetch(`/api/export/${reportId}`, {
      credentials: 'include',
    });
    
    if (!response.ok) {
      throw new Error(`Export failed: ${response.statusText}`);
    }
    
    return response.blob();
  },

  async checkHealth(): Promise<{ status: string; timestamp: string }> {
    const response = await apiRequest('GET', '/api/health');
    return response.json();
  }
};
