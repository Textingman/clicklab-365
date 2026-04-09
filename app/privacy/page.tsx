import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPage() {
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
                <Link href="/privacy" className="text-[#1A1A1A] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
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
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last Updated: April 9, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-6">
            365 ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our transactional messaging platform at <a href="https://getnotifications365.com" className="text-[#F97316] hover:text-[#DC2626]">getnotifications365.com</a>. 365 provides SMS, Email, and Push notification delivery services to businesses and their customers.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Information You Provide</h3>
          <p className="text-gray-600 mb-4">When you sign up for our service, we may collect:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Name and contact information (email address, phone number)</li>
            <li>Company name and business information</li>
            <li>Account credentials</li>
            <li>Payment information (processed by third-party payment processors)</li>
            <li>Messaging channel preferences (SMS, Email, Push)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Messaging & Notification Data</h3>
          <p className="text-gray-600 mb-4">When you use our transactional messaging platform, we collect data to deliver and track notifications, including:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Message content, recipients, and delivery status</li>
            <li>Delivery timestamps, latency, and carrier routing data</li>
            <li>Open rates, click-through rates, and bounce data (Email)</li>
            <li>Device tokens and push notification delivery receipts</li>
            <li>Opt-in and opt-out records for SMS communications</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.3 Information Collected Automatically</h3>
          <p className="text-gray-600 mb-4">When you use our platform, we automatically collect:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Device information (browser type, operating system)</li>
            <li>IP address and approximate location data</li>
            <li>Usage data (pages visited, API calls, dashboard activity)</li>
            <li>Platform performance and error analytics</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.4 Mobile & SMS Information</h3>
          <p className="text-gray-600 mb-6">
            <strong>No mobile information will be shared or sold to third parties for marketing or promotional purposes.</strong> SMS opt-in data and consent records are never shared with third parties. We use mobile information solely to deliver transactional notifications you have requested and to maintain compliance with TCPA and carrier regulations. All SMS communications include opt-out instructions (reply STOP to unsubscribe).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Deliver SMS, Email, and Push notifications on your behalf</li>
            <li>Provide real-time delivery tracking and analytics</li>
            <li>Route messages through optimal carrier paths for maximum deliverability</li>
            <li>Process your account and manage billing</li>
            <li>Send you service-related communications and account updates</li>
            <li>Maintain compliance with TCPA, CAN-SPAM, GDPR, and carrier regulations</li>
            <li>Detect and prevent fraud, abuse, or spam</li>
            <li>Improve platform performance and reliability</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Information Sharing and Disclosure</h2>
          <p className="text-gray-600 mb-4">We may share your information with:</p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.1 Telecommunications Carriers</h3>
          <p className="text-gray-600 mb-6">
            To deliver SMS messages, we share necessary message data (recipient phone number, message content) with telecommunications carriers and aggregators. This sharing is required to fulfill the transactional messaging service you have requested.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.2 Service Providers</h3>
          <p className="text-gray-600 mb-6">
            Third-party vendors who perform services on our behalf, such as cloud hosting, analytics, payment processing, and customer support. These providers are contractually obligated to protect your information and may not use it for their own purposes.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.3 Business Transfers</h3>
          <p className="text-gray-600 mb-6">
            In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.4 Legal Requirements</h3>
          <p className="text-gray-600 mb-6">
            When required by law, court order, or government regulation, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.5 With Your Consent</h3>
          <p className="text-gray-600 mb-6">
            We may share your information for any other purpose with your explicit consent.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. SMS Compliance & Opt-Out</h2>
          <p className="text-gray-600 mb-4">We are committed to full compliance with the Telephone Consumer Protection Act (TCPA) and carrier guidelines:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>We only send SMS messages to recipients who have provided explicit opt-in consent</li>
            <li>Every SMS includes opt-out instructions — reply <strong>STOP</strong> to unsubscribe at any time</li>
            <li>Reply <strong>HELP</strong> for assistance or contact support@getnotifications365.com</li>
            <li>Message and data rates may apply depending on your carrier plan</li>
            <li>Opt-out requests are processed immediately and honored permanently</li>
            <li>We maintain records of all opt-in and opt-out events for compliance purposes</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Data Security</h2>
          <p className="text-gray-600 mb-6">
            We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Encryption of data in transit (HTTPS/TLS 1.3)</li>
            <li>Encryption of sensitive data at rest (AES-256)</li>
            <li>Secure cloud infrastructure with regular security audits</li>
            <li>Role-based access controls and multi-factor authentication</li>
            <li>Regular penetration testing and vulnerability assessments</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data Retention</h2>
          <p className="text-gray-600 mb-6">
            We retain message logs and delivery data for up to 90 days by default to support delivery tracking and compliance audits. Account information is retained while your account is active and for a reasonable period thereafter for legal and business purposes. You may request earlier deletion of your data by contacting us.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Your Rights and Choices</h2>
          <p className="text-gray-600 mb-4">Depending on your location, you may have the following rights:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
            <li><strong>Objection:</strong> Object to certain processing of your information</li>
            <li><strong>SMS Opt-Out:</strong> Reply STOP to any SMS message to unsubscribe immediately</li>
          </ul>
          <p className="text-gray-600 mb-6">
            To exercise these rights, please contact us at <a href="mailto:privacy@getnotifications365.com" className="text-[#F97316] hover:text-[#DC2626]">privacy@getnotifications365.com</a>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Cookies and Tracking Technologies</h2>
          <p className="text-gray-600 mb-6">
            We use cookies and similar tracking technologies to track activity on our platform and improve your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Third-Party Links</h2>
          <p className="text-gray-600 mb-6">
            Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Children&apos;s Privacy</h2>
          <p className="text-gray-600 mb-6">
            Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. California Privacy Rights (CCPA)</h2>
          <p className="text-gray-600 mb-6">
            If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your information, and the right to opt-out of the sale of your personal information. <strong>We do not sell personal information.</strong>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Changes to This Privacy Policy</h2>
          <p className="text-gray-600 mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <div className="bg-[#FFF7ED] border border-[#FCA5A5] rounded-lg p-6 mb-8">
            <p className="text-gray-600 mb-2"><strong>Privacy:</strong> <a href="mailto:privacy@getnotifications365.com" className="text-[#F97316] hover:text-[#DC2626]">privacy@getnotifications365.com</a></p>
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
