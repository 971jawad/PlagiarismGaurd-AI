import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedHero } from '@/components/hero/animated-hero';
import { UploadArea } from '@/components/plagiarism/upload-area';
import { TextInput } from '@/components/plagiarism/text-input';
import { ProgressIndicator } from '@/components/plagiarism/progress-indicator';
import { ResultsPanel } from '@/components/plagiarism/results-panel';
import { ParaphraseSuggestions } from '@/components/plagiarism/paraphrase-suggestions';
import { useToast } from '@/hooks/use-toast';
import { api } from '@/lib/api';
import type { PlagiarismAnalysis } from '@/types/plagiarism';

export default function Home() {
  const [text, setText] = useState('');
  const [selectedText, setSelectedText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<PlagiarismAnalysis | null>(null);
  const [reportId, setReportId] = useState<number | undefined>();
  const { toast } = useToast();

  const handleFileSelect = async (file: File) => {
    setIsAnalyzing(true);
    try {
      const result = await api.analyzeFile(file);
      setAnalysis(result.analysis);
      setReportId(result.reportId);
      
      toast({
        title: "Analysis complete",
        description: `Plagiarism analysis completed in ${result.analysis.processingTime}ms`,
      });
    } catch (error) {
      console.error('File analysis failed:', error);
      toast({
        title: "Analysis failed",
        description: "Failed to analyze the uploaded file. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleTextAnalyze = async () => {
    if (!text.trim()) {
      toast({
        title: "No text provided",
        description: "Please enter some text to analyze",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    try {
      const result = await api.analyzeText(text);
      setAnalysis(result.analysis);
      setReportId(result.reportId);
      
      toast({
        title: "Analysis complete",
        description: `Plagiarism analysis completed in ${result.analysis.processingTime}ms`,
      });
    } catch (error) {
      console.error('Text analysis failed:', error);
      toast({
        title: "Analysis failed",
        description: "Failed to analyze the text. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleTextReplace = (originalText: string, newText: string) => {
    setText(text.replace(originalText, newText));
  };

  // Handle text selection for paraphrasing
  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim()) {
      setSelectedText(selection.toString().trim());
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <AnimatedHero />
      
      {/* Main Application Interface */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Check Your Content Now
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Upload documents or paste text to get instant plagiarism analysis
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <UploadArea onFileSelect={handleFileSelect} isAnalyzing={isAnalyzing} />
              
              <div onMouseUp={handleTextSelection}>
                <TextInput
                  text={text}
                  onTextChange={setText}
                  onAnalyze={handleTextAnalyze}
                  isAnalyzing={isAnalyzing}
                />
              </div>
            </motion.div>
            
            {/* Results Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <ProgressIndicator isVisible={isAnalyzing} />
              <ResultsPanel analysis={analysis} reportId={reportId} />
              <ParaphraseSuggestions 
                selectedText={selectedText} 
                onTextReplace={handleTextReplace}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Advanced Detection Features
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Powered by cutting-edge AI technology for the most accurate results
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Features grid will be populated with feature cards */}
          </div>
        </div>
      </section>
    </div>
  );
}
