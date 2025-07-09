import { motion } from 'framer-motion';
import { Brain, Search, Bot, FileText, BarChart3, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Brain,
    title: 'Semantic Analysis',
    description: 'Advanced AI algorithms detect paraphrased and restructured content beyond simple text matching.',
    color: 'from-blue-600 to-purple-600'
  },
  {
    icon: Search,
    title: 'Real-time Web Search',
    description: 'Live comparison against billions of web pages, academic papers, and published content.',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: Bot,
    title: 'AI Content Detection',
    description: 'Identify AI-generated content using advanced perplexity and burstiness analysis.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: FileText,
    title: 'Multi-Format Support',
    description: 'Support for .txt, .docx, .pdf files with intelligent text extraction and formatting.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: BarChart3,
    title: 'Detailed Analytics',
    description: 'Comprehensive reports with source citations, similarity scores, and improvement suggestions.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Privacy Protection',
    description: 'Secure processing with temporary file storage and complete data privacy protection.',
    color: 'from-indigo-500 to-purple-500'
  }
];

export default function Features() {
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
            Advanced Detection Features
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Powered by cutting-edge AI technology for the most accurate plagiarism detection results
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
