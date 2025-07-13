import { FileText, Users, Shield, AlertTriangle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Last updated: January 1, 2024
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Service Agreement</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Legal terms of use</p>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 dark:text-white">User Rights</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Your responsibilities</p>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Limitations</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Service boundaries</p>
            </div>
            <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <AlertTriangle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Liability</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Legal disclaimers</p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>By accessing and using PlagiarismGuard AI, you accept and agree to be bound by the terms and provision of this agreement.</p>
                <p>If you do not agree to these terms, please do not use our service.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Use License</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>Permission is granted to temporarily access and use PlagiarismGuard AI for personal and commercial purposes subject to these terms:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>This license shall automatically terminate if you violate any restrictions and may be terminated by us at any time</li>
                  <li>You may not reverse engineer, decompile, or disassemble the service</li>
                  <li>You may not use the service for any unlawful purpose</li>
                  <li>You may not attempt to gain unauthorized access to our systems</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. User Accounts</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>To access certain features, you may need to create an account. You are responsible for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Maintaining the confidentiality of your login credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized access</li>
                  <li>Providing accurate and complete information</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Prohibited Uses</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>You may not use our service:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload viruses or any other type of malicious code</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Service Availability</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>We strive to provide continuous service availability but cannot guarantee 100% uptime. We may:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Perform maintenance that may temporarily interrupt service</li>
                  <li>Modify or discontinue features with reasonable notice</li>
                  <li>Suspend service for security or legal reasons</li>
                  <li>Limit usage to prevent system abuse</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Payment and Billing</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>For paid services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Prices are subject to change with 30 days notice</li>
                  <li>Payments are processed securely by third-party providers</li>
                  <li>Refunds are provided according to our refund policy</li>
                  <li>Subscription cancellations take effect at the end of the billing period</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Limitation of Liability</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>In no event shall PlagiarismGuard AI be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses.</p>
                <p>Our total liability to you for all claims shall not exceed the amount you paid us in the 12 months prior to the claim.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Governing Law</h2>
              <div className="space-pevchado y-4 text-gray-600 dark:text-gray-300">
                <p>These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.</p>
                <p>Any disputes shall be resolved in the courts of San Francisco, California.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Contact Information</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Email: legal@plagiarismguard.ai</li>
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