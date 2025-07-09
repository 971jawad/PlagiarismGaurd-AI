import OpenAI from "openai";
import type { PlagiarismMatch, ParaphraseSuggestion } from "@shared/schema";
import { aiProviderManager } from './aiProviders';

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "default_key" 
});

export class OpenAIService {
  async analyzeTextForPlagiarism(text: string): Promise<{
    aiGenerated: boolean;
    semanticSimilarity: number;
    confidence: number;
  }> {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: `You are an expert plagiarism detection system. Analyze the given text for:
1. Whether it appears to be AI-generated (check for patterns, repetitiveness, lack of human errors)
2. Semantic similarity patterns that might indicate plagiarism
3. Overall confidence in the analysis

Respond with JSON in this format: {
  "aiGenerated": boolean,
  "semanticSimilarity": number (0-100),
  "confidence": number (0-1),
  "reasoning": string
}`
          },
          {
            role: "user",
            content: text
          }
        ],
        response_format: { type: "json_object" },
      });

      const result = JSON.parse(response.choices[0].message.content || "{}");
      
      return {
        aiGenerated: result.aiGenerated || false,
        semanticSimilarity: Math.max(0, Math.min(100, result.semanticSimilarity || 0)),
        confidence: Math.max(0, Math.min(1, result.confidence || 0.5))
      };
    } catch (error) {
      console.error("OpenAI plagiarism analysis failed:", error);
      return {
        aiGenerated: false,
        semanticSimilarity: 0,
        confidence: 0
      };
    }
  }

  async generateParaphraseSuggestions(originalText: string): Promise<ParaphraseSuggestion[]> {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: `You are an expert writing assistant. Generate 3 high-quality paraphrasing suggestions for the given text. 
Each suggestion should:
1. Maintain the original meaning
2. Use different vocabulary and sentence structure
3. Be more unique and original
4. Improve readability

Respond with JSON in this format: {
  "suggestions": [
    {
      "paraphrasedText": string,
      "uniquenessScore": number (0-100),
      "improvement": number (0-100)
    }
  ]
}`
          },
          {
            role: "user",
            content: originalText
          }
        ],
        response_format: { type: "json_object" },
      });

      const result = JSON.parse(response.choices[0].message.content || "{}");
      
      return (result.suggestions || []).map((suggestion: any) => ({
        originalText,
        paraphrasedText: suggestion.paraphrasedText || "",
        uniquenessScore: Math.max(0, Math.min(100, suggestion.uniquenessScore || 0)),
        improvement: Math.max(0, Math.min(100, suggestion.improvement || 0))
      }));
    } catch (error) {
      console.error("OpenAI paraphrase generation failed:", error);
      return [];
    }
  }

  async compareTextSimilarity(text1: string, text2: string): Promise<number> {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: `Compare the semantic similarity between these two texts. Consider meaning, concepts, and structure.
Respond with JSON: { "similarity": number (0-100) }`
          },
          {
            role: "user",
            content: `Text 1: ${text1}\n\nText 2: ${text2}`
          }
        ],
        response_format: { type: "json_object" },
      });

      const result = JSON.parse(response.choices[0].message.content || "{}");
      return Math.max(0, Math.min(100, result.similarity || 0));
    } catch (error) {
      console.error("OpenAI similarity comparison failed:", error);
      return 0;
    }
  }

  async generateEmbeddings(text: string): Promise<number[]> {
    try {
      const response = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: text,
      });

      return response.data[0].embedding;
    } catch (error) {
      console.error("OpenAI embeddings generation failed:", error);
      return [];
    }
  }
}

export const openAIService = new OpenAIService();
