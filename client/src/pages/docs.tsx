import { Book, Code, FileText, Search, Shield, Users } from 'lucide-react';

export default function Documentation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Documentation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Complete guide to using PlagiarismGuard AI for accurate plagiarism detection
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Start */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                <Book className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Quick Start</h2>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• Upload your document (.txt, .docx, .pdf)</li>
              <li>• Or paste text directly</li>
              <li>• Click "Analyze" to start detection</li>
              <li>• Review results and matches</li>
              <li>• Export detailed report</li>
            </ul>
          </div>

          {/* API Usage */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3">
                <Code className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">API Usage</h2>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• REST API endpoints available</li>
              <li>• Authentication required</li>
              <li>• Rate limiting applied</li>
              <li>• JSON response format</li>
              <li>• See API documentation</li>
            </ul>
          </div>

          {/* Features */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-3">
                <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Features</h2>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• AI-powered detection</li>
              <li>• Real-time web search</li>
              <li>• Paraphrase suggestions</li>
              <li>• Detailed reports</li>
              <li>• Multi-format support</li>
            </ul>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="mt-12 space-y-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Text Analysis</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our AI analyzes your text for semantic similarity, paraphrasing patterns, and potential plagiarism using advanced machine learning algorithms.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Web Search</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Real-time web search verification checks against billions of online sources to identify potential matches and similarities.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">File Formats</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Text Files (.txt)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Plain text documents</p>
              </div>
              <div className="text-center">
                <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Word Documents (.docx)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Microsoft Word files</p>
              </div>
              <div className="text-center">
                <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">PDF Files (.pdf)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Portable Document Format</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}