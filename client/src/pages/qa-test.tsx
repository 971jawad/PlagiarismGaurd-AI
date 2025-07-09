import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CheckCircle, XCircle, Clock, AlertTriangle } from 'lucide-react';

interface QATestResult {
  summary: {
    totalTests: number;
    passed: number;
    failed: number;
    skipped: number;
    passRate: string;
    executionTime: number;
    coverage: {
      functionality: number;
      performance: number;
      security: number;
      usability: number;
      reliability: number;
      compatibility: number;
    };
  };
  details: Array<{
    name: string;
    description: string;
    category: string;
    priority: string;
    status: string;
    executionTime: number;
    actualResult: string;
    errorDetails?: string;
  }>;
  report: string;
}

export default function QATest() {
  const [testResults, setTestResults] = useState<QATestResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const runQATests = async () => {
    setIsRunning(true);
    setError(null);
    setTestResults(null);

    try {
      const response = await fetch('/api/qa-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to run QA tests');
      }

      const results = await response.json();
      setTestResults(results);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to run QA tests');
    } finally {
      setIsRunning(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'failed':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'skipped':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'passed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'failed':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'skipped':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            QA Test Suite
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Comprehensive quality assurance testing for the plagiarism detection system
          </p>
        </motion.div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Test Execution
                <Button
                  onClick={runQATests}
                  disabled={isRunning}
                  className="min-w-[120px]"
                >
                  {isRunning ? 'Running...' : 'Run QA Tests'}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
                  <p className="text-red-800 dark:text-red-300">{error}</p>
                </div>
              )}
              
              {isRunning && (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-slate-600 dark:text-slate-400">Running comprehensive QA tests...</p>
                </div>
              )}
            </CardContent>
          </Card>

          {testResults && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Test Results Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">
                        {testResults.summary.totalTests}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Total Tests</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {testResults.summary.passed}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Passed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">
                        {testResults.summary.failed}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Failed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {testResults.summary.passRate}%
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Pass Rate</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Coverage Analysis</h3>
                    {Object.entries(testResults.summary.coverage).map(([category, percentage]) => (
                      <div key={category} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="capitalize">{category}</span>
                          <span>{percentage.toFixed(1)}%</span>
                        </div>
                        <Progress value={percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Detailed Test Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-4">
                      {testResults.details.map((test, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              {getStatusIcon(test.status)}
                              <span className="font-medium">{test.name}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge className={getPriorityColor(test.priority)}>
                                {test.priority}
                              </Badge>
                              <Badge className={getStatusColor(test.status)}>
                                {test.status}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            {test.description}
                          </p>
                          <div className="text-sm">
                            <span className="font-medium">Category:</span> {test.category}
                          </div>
                          <div className="text-sm">
                            <span className="font-medium">Execution Time:</span> {test.executionTime}ms
                          </div>
                          <div className="text-sm">
                            <span className="font-medium">Result:</span> {test.actualResult}
                          </div>
                          {test.errorDetails && (
                            <div className="text-sm text-red-600 dark:text-red-400 mt-2">
                              <span className="font-medium">Error:</span> {test.errorDetails}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Full Test Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <pre className="text-sm whitespace-pre-wrap font-mono">
                      {testResults.report}
                    </pre>
                  </ScrollArea>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
}