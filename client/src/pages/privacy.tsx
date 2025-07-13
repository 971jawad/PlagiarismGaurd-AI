import { Shield, Lock, Eye, Database } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Last updated: January 1, 2024
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Data Protection</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">End-to-end encryption</p>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <Lock className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Secure Storage</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Encrypted databases</p>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <Eye className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 dark:text-white">No Sharing</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Your data stays private</p>
            </div>
            <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <Database className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Data Control</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Delete anytime</p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>We collect information you provide directly to us, including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Account information (email, username, password)</li>
                  <li>Documents and text you upload for analysis</li>
                  <li>Usage data and analytics</li>
                  <li>Communication preferences</li>
                  <li>Payment information (processed securely by third parties)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and improve our plagiarism detection services</li>
                  <li>Process your documents and generate reports</li>
                  <li>Communicate with you about your account and our services</li>
                  <li>Protect against fraud and unauthorized access</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Data Security</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>We implement appropriate technical and organizational measures to protect your data:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encryption in transit and at rest</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Access controls and authentication</li>
                  <li>Secure data centers with physical security</li>
                  <li>Regular security training for our team</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your Rights</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your account and data</li>
                  <li>Export your data</li>
                  <li>Restrict processing of your data</li>
                  <li>Object to processing</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Data Retention</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>We retain your data only as long as necessary to provide our services and comply with legal obligations:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Account data: Until you delete your account</li>
                  <li>Document analysis: 30 days after processing</li>
                  <li>Usage analytics: 2 years</li>
                  <li>Legal compliance: As required by law</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>If you have questions about this Privacy Policy, please contact us:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Email: privacy@plagiarismguard.ai</li>
                  <li>Phone: +1 (555) 123-4567</li>
                  <li>Address: 123 Tech Street, San Francisco, CA 94105</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}