import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import type { PlagiarismAnalysis } from '@/types/plagiarism';
import { useToast } from '@/hooks/use-toast';
import { api } from '@/lib/api';

interface ResultsPanelProps {
  analysis: PlagiarismAnalysis | null;
  reportId?: number;
}

export function ResultsPanel({ analysis, reportId }: ResultsPanelProps) {
  const [isExporting, setIsExporting] = useState(false);
  const { toast } = useToast();

  const handleExport = async () => {
    if (!reportId) return;
    
    setIsExporting(true);
    try {
      const blob = await api.exportReport(reportId);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `plagiarism-report-${reportId}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      toast({
        title: "Report exported successfully",
        description: "Your plagiarism report has been downloaded",
      });
    } catch (error) {
      console.error('Export failed:', error);
      toast({
        title: "Export failed",
        description: "Failed to export the report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  };

  const getSeverityColor = (score: number) => {
    if (score >= 70) return 'text-red-600 dark:text-red-400';
    if (score >= 40) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-green-600 dark:text-green-400';
  };

  const getSeverityBg = (score: number) => {
    if (score >= 70) return 'from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20';
    if (score >= 40) return 'from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20';
    return 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20';
  };

  if (!analysis) {
    return (
      <Card className="bg-white dark:bg-slate-900 shadow-lg border border-slate-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-lg text-slate-900 dark:text-white">
            Plagiarism Analysis Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <AlertCircle className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-600 dark:text-slate-400">
              Upload a file or paste text to see plagiarism analysis results
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <Card className="bg-white dark:bg-slate-900 shadow-lg border border-slate-200 dark:border-slate-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg text-slate-900 dark:text-white">
              Plagiarism Analysis Results
            </CardTitle>
            <Button
              onClick={handleExport}
              disabled={isExporting || !reportId}
              variant="outline"
              size="sm"
              className="text-blue-600 hover:text-blue-700"
            >
              {isExporting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent mr-2"></div>
                  Exporting...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Export Report
                </>
              )}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Overall Score */}
          <div className={`bg-gradient-to-r ${getSeverityBg(analysis.overallScore)} rounded-lg p-4 mb-6`}>
            <div className="flex items-center justify-between">
              <div>
                <div className={`text-2xl font-bold ${getSeverityColor(analysis.overallScore)}`}>
                  {analysis.overallScore}% Plagiarism Detected
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {analysis.matches.length} potential matches found
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {analysis.wordCount} words • {analysis.uniqueText}% unique • {analysis.processingTime}ms
                </div>
              </div>
              <div className="w-16 h-16 relative">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle 
                    cx="32" 
                    cy="32" 
                    r="28" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    fill="none" 
                    className="text-slate-200 dark:text-slate-800"
                  />
                  <circle 
                    cx="32" 
                    cy="32" 
                    r="28" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    fill="none" 
                    strokeDasharray="175.9" 
                    strokeDashoffset={175.9 - (175.9 * analysis.overallScore / 100)} 
                    className={getSeverityColor(analysis.overallScore)}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-xs font-semibold ${getSeverityColor(analysis.overallScore)}`}>
                    {analysis.overallScore}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Detection */}
          {analysis.aiGenerated && (
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                <span className="font-semibold text-orange-600 dark:text-orange-400">
                  AI-Generated Content Detected
                </span>
              </div>
              <p className="text-sm text-orange-600 dark:text-orange-400 mt-2">
                This content appears to be generated by artificial intelligence.
              </p>
            </div>
          )}

          {/* Matches */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">
              Potential Matches ({analysis.matches.length})
            </h4>
            
            {analysis.matches.length === 0 ? (
              <div className="text-center py-4 text-slate-500 dark:text-slate-400">
                No plagiarism matches found
              </div>
            ) : (
              analysis.matches.map((match, index) => (
                <motion.div
                  key={match.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`border rounded-lg p-4 ${
                    match.similarity >= 70 
                      ? 'border-red-200 dark:border-red-800' 
                      : match.similarity >= 40 
                      ? 'border-yellow-200 dark:border-yellow-800' 
                      : 'border-green-200 dark:border-green-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${
                        match.similarity >= 70 
                          ? 'bg-red-500' 
                          : match.similarity >= 40 
                          ? 'bg-yellow-500' 
                          : 'bg-green-500'
                      }`} />
                      <span className={`font-semibold ${getSeverityColor(match.similarity)}`}>
                        {match.similarity.toFixed(0)}% Match
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {match.type}
                      </Badge>
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      Lines {match.lineNumbers}
                    </span>
                  </div>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    "{match.text.length > 100 ? match.text.substring(0, 100) + '...' : match.text}"
                  </p>
                  
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-3 w-3 text-blue-600" />
                    <a 
                      href={match.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      {match.source.length > 50 ? match.source.substring(0, 50) + '...' : match.source}
                    </a>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
