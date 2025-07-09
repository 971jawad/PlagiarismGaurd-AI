import { useState } from 'react';
import { Languages, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

interface TextInputProps {
  text: string;
  onTextChange: (text: string) => void;
  onAnalyze: () => void;
  isAnalyzing: boolean;
}

export function TextInput({ text, onTextChange, onAnalyze, isAnalyzing }: TextInputProps) {
  const [checkAI, setCheckAI] = useState(false);
  
  const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
  const isTextEmpty = text.trim().length === 0;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Or Paste Your Text
        </h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {wordCount} words
          </span>
          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
            <Languages className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <Textarea
        id="text-input"
        placeholder="Paste your text here for plagiarism analysis..."
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        className="min-h-64 p-4 border border-slate-200 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        disabled={isAnalyzing}
      />
      
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="check-ai"
              checked={checkAI}
              onCheckedChange={(checked) => setCheckAI(checked as boolean)}
              disabled={isAnalyzing}
            />
            <label
              htmlFor="check-ai"
              className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer"
            >
              Check for AI-generated content
            </label>
          </div>
        </div>
        
        <Button
          onClick={onAnalyze}
          disabled={isTextEmpty || isAnalyzing}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isAnalyzing ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
              Analyzing...
            </>
          ) : (
            <>
              <Search className="mr-2 h-5 w-5" />
              Analyze for Plagiarism
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
