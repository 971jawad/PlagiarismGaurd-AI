import { motion } from 'framer-motion';
import { Zap, Code, Layers, Bot, FileText, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const integrations = [
  {
    icon: Code,
    name: 'REST API',
    description: 'Complete REST API for custom integrations',
    category: 'API',
    features: ['Text analysis', 'File upload', 'Report generation', 'Webhooks'],
    status: 'available'
  },
  {
    icon: Layers,
    name: 'LMS Integration',
    description: 'Seamless integration with learning management systems',
    category: 'Education',
    features: ['Canvas', 'Blackboard', 'Moodle', 'Google Classroom'],
    status: 'available'
  },
  {
    icon: Bot,
    name: 'Slack Bot',
    description: 'Check plagiarism directly from Slack channels',
    category: 'Productivity',
    features: ['Text checking', 'File analysis', 'Team notifications'],
    status: 'beta'
  },
  {
    icon: FileText,
    name: 'Google Docs',
    description: 'Add-on for real-time plagiarism checking',
    category: 'Writing',
    features: ['Real-time analysis', 'Inline suggestions', 'Export reports'],
    status: 'coming-soon'
  },
  {
    icon: Zap,
    name: 'Zapier',
    description: 'Connect with 3000+ apps through Zapier',
    category: 'Automation',
    features: ['Automated workflows', 'Trigger actions', 'Data sync'],
    status: 'available'
  },
  {
    icon: Settings,
    name: 'WordPress Plugin',
    description: 'Plugin for WordPress content management',
    category: 'CMS',
    features: ['Post checking', 'Bulk analysis', 'Dashboard widget'],
    status: 'beta'
  }
];

const statusColors = {
  available: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  beta: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  'coming-soon': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
};

export default function Integrations() {
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
            Integrations
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Connect PlagiarismGuard AI with your favorite tools and workflows
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <integration.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge className={statusColors[integration.status as keyof typeof statusColors]}>
                      {integration.status.replace('-', ' ')}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{integration.name}</CardTitle>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{integration.category}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {integration.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {integration.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full"
                    variant={integration.status === 'available' ? 'default' : 'outline'}
                    disabled={integration.status === 'coming-soon'}
                  >
                    {integration.status === 'available' && 'Get Started'}
                    {integration.status === 'beta' && 'Join Beta'}
                    {integration.status === 'coming-soon' && 'Coming Soon'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold mb-4">
                Need a Custom Integration?
              </h3>
              <p className="text-blue-100 mb-6">
                Our team can build custom integrations for your specific workflow
              </p>
              <Button variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">
                Contact Our Team
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}