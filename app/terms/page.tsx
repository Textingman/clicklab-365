import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-3xl font-extrabold text-[#1A1A1A] tracking-tight">loyalty</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" className="text-[#1A1A1A] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/signup" className="bg-[#EFE810] text-[#1A1A1A] hover:bg-[#d4cd00] px-4 py-2 rounded-md text-sm font-semibold">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-[#F9F9F9] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Last Updated: March 27, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6">
            By accessing or using Loyalty&apos;s loyalty tracking platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service. These Terms apply to all users of the Service, including businesses, developers, and end users.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
          <p className="text-gray-600 mb-6">
            Loyalty provides a customer engagement and loyalty tracking platform that allows businesses to create, manage, and optimize loyalty programs. The Service includes:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Points and rewards program management</li>
            <li>Customer tier and segmentation tools</li>
            <li>Real-time analytics and engagement dashboards</li>
            <li>Referral and re-engagement campaign tools</li>
            <li>Multi-brand and multi-location support</li>
            <li>Integration capabilities with POS, e-commerce, and CRM systems</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Account Registration and Security</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.1 Account Creation</h3>
          <p className="text-gray-600 mb-6">
            To use the Service, you must create an account by providing accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.2 Account Security</h3>
          <p className="text-gray-600 mb-6">
            You agree to immediately notify us of any unauthorized use of your account or any other breach of security. We will not be liable for any loss or damage arising from your failure to comply with these security obligations.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.3 Account Eligibility</h3>
          <p className="text-gray-600 mb-6">
            You must be at least 18 years old and have the legal capacity to enter into contracts to use the Service. By using the Service, you represent and warrant that you meet these requirements.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Acceptable Use Policy</h2>
          <p className="text-gray-600 mb-4">You agree not to use the Service to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Violate any applicable laws, regulations, or third-party rights</li>
            <li>Send spam, unsolicited messages, or engage in fraudulent activities</li>
            <li>Transmit malware, viruses, or other harmful code</li>
            <li>Interfere with or disrupt the Service or servers</li>
            <li>Attempt to gain unauthorized access to any part of the Service</li>
            <li>Impersonate any person or entity or misrepresent your affiliation</li>
            <li>Collect or harvest personal information without consent</li>
            <li>Use the Service for any illegal or unauthorized purpose</li>
            <li>Manipulate loyalty points or rewards in a fraudulent manner</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Loyalty Program Rules</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.1 Program Configuration</h3>
          <p className="text-gray-600 mb-6">
            You are responsible for configuring your loyalty program in compliance with all applicable laws and regulations. You must clearly communicate your program&apos;s terms, earning rules, and redemption policies to your customers.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.2 Customer Consent</h3>
          <p className="text-gray-600 mb-6">
            You must obtain appropriate consent from your customers before enrolling them in your loyalty program and before sending them any communications related to the program.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.3 Rewards Fulfillment</h3>
          <p className="text-gray-600 mb-6">
            You are solely responsible for fulfilling any rewards, discounts, or benefits promised to your customers through your loyalty program. Loyalty is not responsible for any rewards or benefits offered through your program.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Fees and Payment</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.1 Service Fees</h3>
          <p className="text-gray-600 mb-6">
            Fees for the Service will be specified in your account dashboard or service agreement. You agree to pay all applicable fees in accordance with the payment terms presented to you.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.2 Payment Terms</h3>
          <p className="text-gray-600 mb-6">
            All fees are non-refundable unless otherwise stated. We reserve the right to change our fees at any time with reasonable notice. Continued use of the Service after fee changes constitutes acceptance of the new fees.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.3 Late Payment</h3>
          <p className="text-gray-600 mb-6">
            If payment is not received when due, we may suspend or terminate your access to the Service. You will be responsible for all costs of collection, including reasonable attorney fees.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Intellectual Property Rights</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7.1 Our Rights</h3>
          <p className="text-gray-600 mb-6">
            The Service and all content, features, and functionality are owned by Loyalty and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works based on the Service without our express written permission.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7.2 Your Content</h3>
          <p className="text-gray-600 mb-6">
            You retain ownership of any content you submit through the Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content solely for the purpose of providing the Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Service Availability and Support</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8.1 Uptime</h3>
          <p className="text-gray-600 mb-6">
            We strive to maintain 99.9% uptime for the Service, but we do not guarantee uninterrupted access. We may perform scheduled maintenance with advance notice when possible.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8.2 Support</h3>
          <p className="text-gray-600 mb-6">
            We provide email support during business hours. Response times may vary based on your service plan and the nature of your inquiry.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Data and Privacy</h2>
          <p className="text-gray-600 mb-6">
            Your use of the Service is also governed by our <Link href="/privacy" className="text-[#1A1A1A] hover:text-[#555555] font-medium underline">Privacy Policy</Link>. By using the Service, you consent to our collection and use of information as described in the Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Disclaimers and Limitations of Liability</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10.1 Service &quot;As Is&quot;</h3>
          <p className="text-gray-600 mb-6">
            THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10.2 Limitation of Liability</h3>
          <p className="text-gray-600 mb-6">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, LOYALTY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10.3 Maximum Liability</h3>
          <p className="text-gray-600 mb-6">
            Our total liability to you for all claims arising from or related to the Service shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Indemnification</h2>
          <p className="text-gray-600 mb-6">
            You agree to indemnify, defend, and hold harmless Loyalty and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable attorney fees) arising from:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Your use of the Service</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any rights of another party</li>
            <li>Your violation of applicable laws or regulations</li>
            <li>Your loyalty program and any rewards or benefits you offer to customers</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Termination</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">12.1 Termination by You</h3>
          <p className="text-gray-600 mb-6">
            You may terminate your account at any time by contacting us. Upon termination, your right to use the Service will immediately cease.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">12.2 Termination by Us</h3>
          <p className="text-gray-600 mb-6">
            We may suspend or terminate your access to the Service at any time, with or without cause, with or without notice. Reasons for termination may include violation of these Terms, non-payment, or any conduct that we believe is harmful to other users or the Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Dispute Resolution</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">13.1 Informal Resolution</h3>
          <p className="text-gray-600 mb-6">
            Before filing a claim, you agree to contact us and attempt to resolve the dispute informally by sending a written notice describing the dispute and your proposed resolution.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">13.2 Arbitration</h3>
          <p className="text-gray-600 mb-6">
            If we cannot resolve the dispute informally, any dispute arising from these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">13.3 Class Action Waiver</h3>
          <p className="text-gray-600 mb-6">
            You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. General Provisions</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">14.1 Governing Law</h3>
          <p className="text-gray-600 mb-6">
            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">14.2 Entire Agreement</h3>
          <p className="text-gray-600 mb-6">
            These Terms, together with our Privacy Policy, constitute the entire agreement between you and Loyalty regarding the Service and supersede all prior agreements.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">14.3 Severability</h3>
          <p className="text-gray-600 mb-6">
            If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Changes to Terms</h2>
          <p className="text-gray-600 mb-6">
            We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the &quot;Last Updated&quot; date. Your continued use of the Service after changes become effective constitutes acceptance of the modified Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">16. Contact Information</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about these Terms, please contact us:
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-gray-600 mb-2"><strong>Email:</strong> <a href="mailto:legal@loyalty.com" className="text-[#1A1A1A] hover:text-[#555555]">legal@loyalty.com</a></p>
            <p className="text-gray-600 mb-2"><strong>Support:</strong> <a href="mailto:support@loyalty.com" className="text-[#1A1A1A] hover:text-[#555555]">support@loyalty.com</a></p>
            <p className="text-gray-600"><strong>Website:</strong> <a href="/" className="text-[#1A1A1A] hover:text-[#555555]">https://loyalty.com</a></p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-extrabold text-white tracking-tight">loyalty</span>
              <p className="text-gray-400 mt-3">
                Loyalty tracking software that drives real engagement.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-gray-400 hover:text-white">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                support@loyalty.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Loyalty. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
