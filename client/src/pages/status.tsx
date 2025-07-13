import { CheckCircle, AlertCircle, XCircle, Clock } from 'lucide-react';

export default function SystemStatus() {
  const services = [
    {
      name: 'API Service',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      lastUpdate: '2 minutes ago'
    },
    {
      name: 'AI Detection Engine',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '450ms',
      lastUpdate: '1 minute ago'
    },
    {
      name: 'File Processing',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '200ms',
      lastUpdate: '3 minutes ago'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '50ms',
      lastUpdate: '1 minute ago'
    },
    {
      name: 'Web Search',
      status: 'degraded',
      uptime: '98.5%',
      responseTime: '800ms',
      lastUpdate: '5 minutes ago'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'degraded':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'down':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      case 'degraded':
        return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20';
      case 'down':
        return 'text-red-600 bg-red-50 dark:bg-red-900/20';
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            System Status
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-time status and performance monitoring of all PlagiarismGuard AI services
          </p>
        </div>

        {/* Overall Status */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">All Systems Operational</h2>
                <p className="text-gray-600 dark:text-gray-300">Last updated: 2 minutes ago</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-600">99.8%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Overall Uptime</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">342ms</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Average Response Time</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-2xl font-bold text-green-600">1.2M</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Requests Today</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">5</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Active Regions</div>
            </div>
          </div>
        </div>

        {/* Service Status */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Service Status</h2>
          
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center">
                  {getStatusIcon(service.status)}
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{service.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Last updated: {service.lastUpdate}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{service.uptime}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{service.responseTime}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Response Time</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                    {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Incidents */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent Incidents</h2>
          
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Web Search Performance Degradation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    We're experiencing slower response times for web search functionality
                  </p>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Started: 45 minutes ago
                </div>
              </div>
            </div>
            
            <div className="p-4 border-l-4 border-green-400 bg-green-50 dark:bg-green-900/20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Database Maintenance Completed</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Scheduled maintenance successfully completed with no service interruption
                  </p>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Resolved: 2 hours ago
                </div>
              </div>
            </div>
            
            <div className="p-4 border-l-4 border-green-400 bg-green-50 dark:bg-green-900/20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">API Rate Limiting Issue</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Temporary rate limiting issue affecting some API requests has been resolved
                  </p>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Resolved: 1 day ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}