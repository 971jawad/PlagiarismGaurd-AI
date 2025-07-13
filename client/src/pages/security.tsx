import { Shield, Lock, Key, Eye, Server, AlertTriangle } from 'lucide-react';

export default function Security() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Security
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your data security is our top priority. Learn about our comprehensive security measures.
          </p>
        </div>

        {/* Security Overview */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Security Framework</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">End-to-End Encryption</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">All data is encrypted in transit and at rest using AES-256 encryption</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <Lock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Secure Infrastructure</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Cloud infrastructure with SOC 2 Type II compliance</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <Key className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Access Controls</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Multi-factor authentication and role-based permissions</p>
            </div>
            
            <div className="text-center p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <Eye className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Monitoring</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">24/7 security monitoring and threat detection</p>
            </div>
            
            <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <Server className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Data Centers</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Tier 3 data centers with physical security measures</p>
            </div>
            
            <div className="text-center p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <AlertTriangle className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Incident Response</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Dedicated security team with 24/7 incident response</p>
            </div>
          </div>
        </div>

        {/* Detailed Security Measures */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Data Protection */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Data Protection</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Shield className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Encryption at Rest</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">All stored data is encrypted using AES-256 encryption with regularly rotated keys</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Lock className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Encryption in Transit</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">All data transmission uses TLS 1.3 with perfect forward secrecy</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Key className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Key Management</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Hardware security modules (HSMs) for secure key storage and management</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Eye className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Data Minimization</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">We only collect and store data necessary for service operation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Security Compliance */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Compliance & Certifications</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">SOC 2 Type II</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Annual audits for security, availability, and confidentiality</p>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">GDPR Compliant</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Full compliance with EU General Data Protection Regulation</p>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">CCPA Compliant</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">California Consumer Privacy Act compliance</p>
              </div>
              
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">ISO 27001</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Information security management system certification</p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Practices */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Security Practices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Regular Security Audits</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Quarterly penetration testing</li>
                <li>• Annual third-party security assessments</li>
                <li>• Continuous vulnerability scanning</li>
                <li>• Code security reviews</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Access Management</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Role-based access control (RBAC)</li>
                <li>• Multi-factor authentication (MFA)</li>
                <li>• Regular access reviews</li>
                <li>• Principle of least privilege</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Employee Security</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Security awareness training</li>
                <li>• Background checks for all staff</li>
                <li>• Regular security policy updates</li>
                <li>• Incident response training</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Infrastructure Security</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Network segmentation</li>
                <li>• Intrusion detection systems</li>
                <li>• Regular security updates</li>
                <li>• Backup and disaster recovery</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Report Security Issues */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Report Security Issues</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Responsible Disclosure</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We encourage security researchers to report vulnerabilities responsibly. We will work with you to understand and resolve issues quickly.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Email: security@plagiarismguard.ai</li>
                <li>• Response time: Within 24 hours</li>
                <li>• Bug bounty program available</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What to Include</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Detailed description of the vulnerability</li>
                <li>• Steps to reproduce the issue</li>
                <li>• Potential impact assessment</li>
                <li>• Your contact information</li>
                <li>• Any supporting materials (screenshots, logs)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}