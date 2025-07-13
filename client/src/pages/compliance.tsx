import { CheckCircle, Shield, Globe, FileText, Users, Lock } from 'lucide-react';

export default function Compliance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Compliance
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We maintain the highest standards of compliance to protect your data and ensure service reliability.
          </p>
        </div>

        {/* Compliance Overview */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Compliance Standards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">SOC 2 Type II</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Security, availability, processing integrity, confidentiality, and privacy</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">GDPR</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">European Union General Data Protection Regulation compliance</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">CCPA</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">California Consumer Privacy Act compliance</p>
            </div>
            
            <div className="text-center p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <FileText className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">ISO 27001</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Information security management systems</p>
            </div>
            
            <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <Lock className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">HIPAA Ready</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Healthcare information protection standards</p>
            </div>
            
            <div className="text-center p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <CheckCircle className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">FERPA</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Family Educational Rights and Privacy Act compliance</p>
            </div>
          </div>
        </div>

        {/* Detailed Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* GDPR Compliance */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">GDPR Compliance</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Data Subject Rights</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Right to access, rectification, erasure, portability, and restriction</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Lawful Basis</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Clear legal basis for all data processing activities</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Data Protection Officer</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Dedicated DPO for privacy oversight and compliance</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Breach Notification</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">72-hour breach notification procedures</p>
                </div>
              </div>
            </div>
          </div>

          {/* SOC 2 Compliance */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">SOC 2 Type II</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Security</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Logical and physical access controls protect data</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Availability</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">System uptime and operational performance standards</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Processing Integrity</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">System processing is complete, accurate, and authorized</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Confidentiality</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Information is protected as committed or agreed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry-Specific Compliance */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Industry-Specific Compliance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Education (FERPA)</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Student privacy protection</li>
                <li>• Educational record confidentiality</li>
                <li>• Consent management for data sharing</li>
                <li>• Directory information handling</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Healthcare (HIPAA Ready)</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Protected health information (PHI) security</li>
                <li>• Administrative safeguards</li>
                <li>• Physical and technical safeguards</li>
                <li>• Business associate agreements</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Financial Services</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• PCI DSS compliance ready</li>
                <li>• Financial data protection</li>
                <li>• Fraud prevention measures</li>
                <li>• Regulatory reporting capabilities</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Government</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• FedRAMP authorization ready</li>
                <li>• FISMA compliance</li>
                <li>• NIST framework alignment</li>
                <li>• Government data handling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Compliance Monitoring */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Compliance Monitoring</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Continuous Monitoring</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Real-time compliance monitoring and alerting</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Audit Success Rate</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Consistent compliance audit performance</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">Annual</div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Third-Party Audits</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Independent verification of compliance</p>
            </div>
          </div>
        </div>

        {/* Compliance Resources */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Compliance Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Documentation</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• SOC 2 Type II report available</li>
                <li>• Data processing agreements</li>
                <li>• Security and privacy policies</li>
                <li>• Compliance questionnaires</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Dedicated compliance team</li>
                <li>• Customer compliance support</li>
                <li>• Regular compliance updates</li>
                <li>• Training and resources</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Need Compliance Documentation?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Contact our compliance team for SOC 2 reports, security questionnaires, and other compliance documentation.
            </p>
            <a href="/contact" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Contact Compliance Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}