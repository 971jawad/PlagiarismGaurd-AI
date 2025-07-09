import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wand2, Copy, RefreshCw, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { api } from '@/lib/api';
import type { ParaphraseSuggestion } from '@/types/plagiarism';

interface ParaphraseSuggestionsProps {
  selectedText: string;
  onTextReplace: (originalText: string, newText: string) => void;
}

export function ParaphraseSuggestions({ selectedText, onTextReplace }: ParaphraseSuggestionsProps) {
  const [suggestions, setSuggestions] = useState<ParaphraseSuggestion[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { toast } = useToast();

  const generateSuggestions = async () => {
    if (!selectedText.trim()) {
      toast({
        title: "No text selected",
        description: "Please select some text to generate paraphrase suggestions",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const newSuggestions = await api.generateParaphrase(selectedText);
      setSuggestions(newSuggestions);
      
      if (newSuggestions.length === 0) {
        toast({
          title: "No suggestions generated",
          description: "Unable to generate paraphrase suggestions for this text",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Failed to generate suggestions:', error);
      toast({
        title: "Generation failed",
        description: "Failed to generate paraphrase suggestions. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
      
      toast({
        title: "Copied to clipboard",
        description: "The paraphrased text has been copied to your clipboard",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Failed to copy text to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleApply = (suggestion: ParaphraseSuggestion) => {
    onTextReplace(suggestion.originalText, suggestion.paraphrasedText);
    toast({
      title: "Text replaced",
      description: "The original text has been replaced with the paraphrased version",
    });
  };

  const getUniquenessColor = (score: number) => {
    if (score >= 90) return 'text-green-600 dark:text-green-400';
    if (score >= 70) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  return (
    <Card className="bg-white dark:bg-slate-900 shadow-lg border border-slate-200 dark:border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-slate-900 dark:text-white flex items-center">
            <Wand2 className="mr-2 h-5 w-5 text-purple-600" />
            AI Paraphrasing Suggestions
          </CardTitle>
          <Button
            onClick={generateSuggestions}
            disabled={isGenerating || !selectedText.trim()}
            variant="outline"
            size="sm"
            className="text-purple-600 hover:text-purple-700"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-purple-600 border-t-transparent mr-2"></div>
                Generating...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                Generate
              </>
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {!selectedText.trim() ? (
          <div className="text-center py-8 text-slate-500 dark:text-slate-400">
            Select text from your document to generate paraphrase suggestions
          </div>
        ) : suggestions.length === 0 && !isGenerating ? (
          <div className="text-center py-8 text-slate-500 dark:text-slate-400">
            Click "Generate" to get AI-powered paraphrase suggestions
          </div>
        ) : (
          <div className="space-y-4">
            {suggestions.map((suggestion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4"
              >
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  Original:
                </div>
                <p className="text-sm text-slate-900 dark:text-white mb-3 bg-red-50 dark:bg-red-900/20 p-2 rounded">
                  {suggestion.originalText}
                </p>
                
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  Suggested revision:
                </div>
                <p className="text-sm text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-2 rounded mb-3">
                  {suggestion.paraphrasedText}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className={getUniquenessColor(suggestion.uniquenessScore)}>
                      {suggestion.uniquenessScore}% Unique
                    </Badge>
                    {suggestion.improvement > 0 && (
                      <Badge variant="outline" className="text-green-600 dark:text-green-400">
                        +{suggestion.improvement}% Improvement
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(suggestion.paraphrasedText, index)}
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    >
                      {copiedIndex === index ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleApply(suggestion)}
                      className="text-purple-600 hover:text-purple-700"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
