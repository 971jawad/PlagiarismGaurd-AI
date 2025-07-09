import { motion } from 'framer-motion';
import { Upload, FileText, Brain, Globe, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OrbitAnimation } from './orbit-animation';

export function AnimatedHero() {
  return (
    <section className="relative gradient-bg min-h-screen flex items-center justify-center overflow-hidden">
      <OrbitAnimation />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="animate-float"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI-Powered <span className="text-yellow-300">Plagiarism Detection</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Detect plagiarism with advanced AI algorithms, semantic analysis, and real-time web search verification
          </motion.p>
          
          {/* Main CTA */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
              onClick={() => document.getElementById('upload-area')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Upload className="mr-2 h-5 w-5" />
              Upload Document
            </Button>
            <Button 
              variant="outline"
              className="glass-effect text-white border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all transform hover:scale-105"
              onClick={() => document.getElementById('text-input')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FileText className="mr-2 h-5 w-5" />
              Paste Text
            </Button>
          </motion.div>
          
          {/* Features preview */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div 
              className="glass-effect p-6 rounded-xl text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Brain className="h-12 w-12 text-yellow-300 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">AI-Powered Detection</h3>
              <p className="text-blue-100 text-sm">Advanced semantic analysis beyond simple text matching</p>
            </motion.div>
            
            <motion.div 
              className="glass-effect p-6 rounded-xl text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Globe className="h-12 w-12 text-green-300 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Web Search</h3>
              <p className="text-blue-100 text-sm">Live comparison against billions of web sources</p>
            </motion.div>
            
            <motion.div 
              className="glass-effect p-6 rounded-xl text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <BarChart3 className="h-12 w-12 text-purple-300 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Detailed Analytics</h3>
              <p className="text-blue-100 text-sm">Comprehensive reports with source citations</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
