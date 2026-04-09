import Link from 'next/link';
import Image from 'next/image';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-[#E5E7EB] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image src="/logo.png" alt="365" width={80} height={40} className="h-10 w-auto" />
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
                <Link href="/dashboard" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/privacy" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" className="text-[#1A1A1A] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/signup" className="bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white hover:opacity-90 px-4 py-2 rounded-md text-sm font-semibold">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-[#FFF7ED] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Last Updated: April 9, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6">
            By accessing or using the 365 transactional messaging platform ("Service") at <a href="https://getnotifications365.com" className="text-[#F97316] hover:text-[#DC2626]">getnotifications365.com</a>, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service. These Terms apply to all users of the Service, including businesses, developers, and administrators.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
          <p className="text-gray-600 mb-6">
            365 provides a transactional messaging infrastructure platform that allows businesses to send, track, and manage notifications across multiple channels. The Service includes:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>SMS notification delivery with carrier-grade routing and TCPA compliance tools</li>
            <li>Email notification delivery with SPF/DKIM/DMARC authentication and inbox placement optimization</li>
            <li>Push notification delivery for iOS (APNs) and Android (FCM) devices</li>
            <li>Real-time delivery tracking, logs, and analytics dashboard</li>
            <li>REST API for programmatic message sending and status retrieval</li>
            <li>Opt-in/opt-out management and compliance reporting</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Account Registration and Security</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.1 Account Creation</h3>
          <p className="text-gray-600 mb-6">
            To use the Service, you must create an account by providing accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and API keys, and for all activities that occur under your account.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.2 Account Security</h3>
          <p className="text-gray-600 mb-6">
            You agree to immediately notify us of any unauthorized use of your account, API keys, or any other breach of security. We will not be liable for any loss or damage arising from your failure to comply with these security obligations.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.3 Account Eligibility</h3>
          <p className="text-gray-600 mb-6">
            You must be at least 18 years old and have the legal capacity to enter into contracts to use the Service. By using the Service, you represent and warrant that you meet these requirements and that your use of the Service complies with all applicable laws.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Acceptable Use Policy</h2>
          <p className="text-gray-600 mb-4">You agree not to use the Service to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Send spam, unsolicited messages, or bulk marketing communications without proper consent</li>
            <li>Send messages to recipients who have opted out or requested to stop receiving communications</li>
            <li>Violate the Telephone Consumer Protection Act (TCPA), CAN-SPAM Act, GDPR, or any other applicable law</li>
            <li>Transmit malware, phishing content, or fraudulent messages</li>
            <li>Impersonate any person, business, or entity</li>
            <li>Interfere with or disrupt the Service, servers, or networks</li>
            <li>Attempt to gain unauthorized access to any part of the Service or other accounts</li>
            <li>Use the Service for any illegal, harmful, or abusive purpose</li>
            <li>Send messages containing illegal content, hate speech, or content that violates carrier guidelines</li>
            <li>Exceed rate limits or abuse the API in ways that degrade service for other users</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. SMS Messaging Rules & Compliance</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.1 Consent Requirements</h3>
          <p className="text-gray-600 mb-6">
            You are solely responsible for obtaining and maintaining proper written consent from all SMS recipients before sending messages through the Service. You must comply with all applicable laws, including the TCPA, and maintain records of consent for all recipients.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.2 Opt-Out Compliance</h3>
          <p className="text-gray-600 mb-6">
            You must honor all opt-out requests immediately. Recipients who reply STOP must not receive further messages. The Service provides automatic opt-out handling, but you are responsible for ensuring your systems respect opt-out records. Failure to honor opt-outs may result in immediate account suspension.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.3 Transactional vs. Marketing Messages</h3>
          <p className="text-gray-600 mb-6">
            The Service is designed for transactional notifications (order confirmations, OTPs, shipping updates, account alerts, appointment reminders, etc.). Marketing or promotional messages require additional consent and compliance measures. You are responsible for correctly classifying your messages and obtaining appropriate consent.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.4 Message Content</h3>
          <p className="text-gray-600 mb-6">
            All messages sent through the Service must comply with carrier content policies. Messages containing prohibited content (adult content, illegal substances, gambling, etc.) will be blocked and may result in account termination.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Email Messaging Rules</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.1 CAN-SPAM Compliance</h3>
          <p className="text-gray-600 mb-6">
            All email messages sent through the Service must comply with the CAN-SPAM Act, including accurate sender information, clear subject lines, and a functioning unsubscribe mechanism for marketing emails.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.2 Sending Domain Authentication</h3>
          <p className="text-gray-600 mb-6">
            You are responsible for properly configuring SPF, DKIM, and DMARC records for your sending domains. Failure to authenticate your domain may result in reduced deliverability or message blocking.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Fees and Payment</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7.1 Service Fees</h3>
          <p className="text-gray-600 mb-6">
            Fees for the Service are based on message volume and channel usage as specified in your account plan or service agreement. You agree to pay all applicable fees in accordance with the payment terms presented to you.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7.2 Payment Terms</h3>
          <p className="text-gray-600 mb-6">
            All fees are non-refundable unless otherwise stated. We reserve the right to change our fees at any time with reasonable notice. Continued use of the Service after fee changes constitutes acceptance of the new fees.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7.3 Late Payment</h3>
          <p className="text-gray-600 mb-6">
            If payment is not received when due, we may suspend or terminate your access to the Service. You will be responsible for all costs of collection, including reasonable attorney fees.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Intellectual Property Rights</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8.1 Our Rights</h3>
          <p className="text-gray-600 mb-6">
            The Service and all content, features, and functionality are owned by 365 and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works based on the Service without our express written permission.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8.2 Your Content</h3>
          <p className="text-gray-600 mb-6">
            You retain ownership of the message content you send through the Service. By using the Service, you grant us a limited license to process, transmit, and store your message content solely for the purpose of providing the Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Service Availability and Support</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">9.1 Uptime</h3>
          <p className="text-gray-600 mb-6">
            We strive to maintain 99.9% uptime for the Service, but we do not guarantee uninterrupted access. We may perform scheduled maintenance with advance notice when possible. Carrier-side delays or outages are outside our control.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">9.2 Support</h3>
          <p className="text-gray-600 mb-6">
            We provide email support at support@getnotifications365.com. Response times may vary based on your service plan and the nature of your inquiry.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Data and Privacy</h2>
          <p className="text-gray-600 mb-6">
            Your use of the Service is also governed by our <Link href="/privacy" className="text-[#F97316] hover:text-[#DC2626] font-medium underline">Privacy Policy</Link>. By using the Service, you consent to our collection and use of information as described in the Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Disclaimers and Limitations of Liability</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">11.1 Service &quot;As Is&quot;</h3>
          <p className="text-gray-600 mb-6">
            THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT ALL MESSAGES WILL BE DELIVERED, AS DELIVERY IS SUBJECT TO CARRIER AND DEVICE AVAILABILITY.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">11.2 Limitation of Liability</h3>
          <p className="text-gray-600 mb-6">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, 365 SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE SERVICE.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">11.3 Maximum Liability</h3>
          <p className="text-gray-600 mb-6">
            Our total liability to you for all claims arising from or related to the Service shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Indemnification</h2>
          <p className="text-gray-600 mb-6">
            You agree to indemnify, defend, and hold harmless 365 and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable attorney fees) arising from:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Your use of the Service</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any applicable laws, including TCPA, CAN-SPAM, or GDPR</li>
            <li>Your failure to obtain proper consent from message recipients</li>
            <li>Any claims by recipients of messages you sent through the Service</li>
            <li>Your violation of any rights of another party</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Termination</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">13.1 Termination by You</h3>
          <p className="text-gray-600 mb-6">
            You may terminate your account at any time by contacting us at support@getnotifications365.com. Upon termination, your right to use the Service will immediately cease.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">13.2 Termination by Us</h3>
          <p className="text-gray-600 mb-6">
            We may suspend or terminate your access to the Service at any time, with or without cause, with or without notice. Reasons for termination may include violation of these Terms, non-payment, sending prohibited content, TCPA violations, or any conduct that we believe is harmful to recipients, carriers, or the Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Dispute Resolution</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">14.1 Informal Resolution</h3>
          <p className="text-gray-600 mb-6">
            Before filing a claim, you agree to contact us at legal@getnotifications365.com and attempt to resolve the dispute informally by sending a written notice describing the dispute and your proposed resolution.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">14.2 Arbitration</h3>
          <p className="text-gray-600 mb-6">
            If we cannot resolve the dispute informally, any dispute arising from these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">14.3 Class Action Waiver</h3>
          <p className="text-gray-600 mb-6">
            You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. General Provisions</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">15.1 Governing Law</h3>
          <p className="text-gray-600 mb-6">
            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">15.2 Entire Agreement</h3>
          <p className="text-gray-600 mb-6">
            These Terms, together with our Privacy Policy, constitute the entire agreement between you and 365 regarding the Service and supersede all prior agreements.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">15.3 Severability</h3>
          <p className="text-gray-600 mb-6">
            If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">16. Changes to Terms</h2>
          <p className="text-gray-600 mb-6">
            We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the &quot;Last Updated&quot; date. Your continued use of the Service after changes become effective constitutes acceptance of the modified Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">17. Contact Information</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about these Terms, please contact us:
          </p>
          <div className="bg-[#FFF7ED] border border-[#FCA5A5] rounded-lg p-6 mb-8">
            <p className="text-gray-600 mb-2"><strong>Legal:</strong> <a href="mailto:legal@getnotifications365.com" className="text-[#F97316] hover:text-[#DC2626]">legal@getnotifications365.com</a></p>
            <p className="text-gray-600 mb-2"><strong>Support:</strong> <a href="mailto:support@getnotifications365.com" className="text-[#F97316] hover:text-[#DC2626]">support@getnotifications365.com</a></p>
            <p className="text-gray-600"><strong>Website:</strong> <a href="https://getnotifications365.com" className="text-[#F97316] hover:text-[#DC2626]">https://getnotifications365.com</a></p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image src="/logo.png" alt="365" width={80} height={40} className="h-10 w-auto mb-3" />
              <p className="text-gray-400 mt-1">
                Transactional messaging with guaranteed deliverability.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link></li>
                <li><Link href="/signup" className="text-gray-400 hover:text-white">Get Started</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">support@getnotifications365.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 365. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
