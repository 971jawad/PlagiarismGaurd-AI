import { motion } from 'framer-motion';
import { Code, Key, BookOpen, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ApiDocs() {
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
            API Documentation
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Integrate plagiarism detection into your applications with our powerful REST API
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Key className="h-5 w-5 mr-2 text-blue-600" />
                  Authentication
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  All API requests require authentication using your API key in the header:
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm">
                  Authorization: Bearer YOUR_API_KEY
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-green-600" />
                  Rate Limits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  API rate limits by plan:
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Basic:</span>
                    <Badge variant="outline">100 requests/hour</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Professional:</span>
                    <Badge variant="outline">1,000 requests/hour</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Enterprise:</span>
                    <Badge variant="outline">Unlimited</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="h-5 w-5 mr-2 text-purple-600" />
                Analyze Text Endpoint
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Badge variant="outline" className="mb-2">POST</Badge>
                  <span className="ml-2 font-mono text-sm">/api/analyze</span>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Request Body:</h4>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm">
                    {`{
  "text": "Your text content here...",
  "checkAI": true,
  "language": "en"
}`}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Response:</h4>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm">
                    {`{
  "documentId": 123,
  "reportId": 456,
  "analysis": {
    "overallScore": 23,
    "matches": [...],
    "aiGenerated": false,
    "processingTime": 1247,
    "wordCount": 150,
    "uniqueText": 77
  }
}`}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                Need Help?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Check out our comprehensive documentation and code examples
              </p>
              <div className="flex justify-center space-x-4">
                <a href="/docs" className="text-blue-600 hover:text-blue-700">
                  Full Documentation
                </a>
                <a href="/examples" className="text-blue-600 hover:text-blue-700">
                  Code Examples
                </a>
                <a href="/support" className="text-blue-600 hover:text-blue-700">
                  Get Support
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
