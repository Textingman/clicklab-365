import Link from 'next/link';
import Image from 'next/image';
import { Shield, Target, Zap, MessageSquare, Mail, Bell, BarChart3, Globe } from 'lucide-react';

export default function AboutPage() {
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
                <Link href="/about" className="text-[#1A1A1A] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/dashboard" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/privacy" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
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

      {/* Hero Section */}
      <section className="bg-[#F9F9F9] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-[#1A1A1A] mb-6">
              About 365
            </h1>
            <p className="text-xl text-[#555555] max-w-3xl mx-auto">
              We&apos;re building the most reliable transactional messaging platform — ensuring every notification, alert, and confirmation reaches your customers, every single day of the year.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">Our Mission</h2>
            <p className="text-lg text-[#555555] mb-4">
              365 was built to solve a critical problem: businesses send millions of transactional notifications every day — order confirmations, OTPs, fraud alerts, shipping updates — and too many of them never arrive.
            </p>
            <p className="text-lg text-[#555555] mb-4">
              We provide a unified messaging infrastructure that routes SMS, Email, and Push notifications through the most reliable paths, with real-time delivery tracking and automatic fallback routing built in.
            </p>
            <p className="text-lg text-[#555555]">
              Our goal is simple: every message you send should reach its destination. 365 days a year, 24 hours a day.
            </p>
          </div>
          <div className="bg-[#F9F9F9] rounded-2xl p-8 border border-[#E5E7EB]">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#F59E0B] to-[#F97316] rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Deliverability First</h3>
                  <p className="text-[#555555]">
                    Every routing decision, every carrier partnership, every feature is built to maximize the chance your message gets delivered.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#EFE810] rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Compliance Built In</h3>
                  <p className="text-[#555555]">
                    TCPA, CAN-SPAM, GDPR, and HIPAA-ready infrastructure. Opt-out handling, consent management, and audit logs included.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#EFE810] rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Sub-Second Delivery</h3>
                  <p className="text-[#555555]">
                    Average delivery time under 1 second. Critical notifications like OTPs and fraud alerts reach customers before they even notice a delay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Channels Section */}
      <section className="bg-[#F9F9F9] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Three Channels, One Platform</h2>
            <p className="text-xl text-[#555555]">
              Manage all your transactional messaging from a single dashboard and API
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#EFE810] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-[#1A1A1A]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">SMS</h3>
              <p className="text-[#555555] text-sm">
                Carrier-grade SMS delivery with long code, short code, and toll-free number support. TCPA compliant.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#EFE810] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-[#1A1A1A]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Email</h3>
              <p className="text-[#555555] text-sm">
                High inbox placement with SPF, DKIM, and DMARC authentication. Full open and click tracking.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#EFE810] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-[#1A1A1A]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Push</h3>
              <p className="text-[#555555] text-sm">
                iOS APNs and Android FCM support with rich media, action buttons, and delivery analytics.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#EFE810] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-[#1A1A1A]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Analytics</h3>
              <p className="text-[#555555] text-sm">
                Real-time delivery dashboards, latency tracking, bounce analysis, and full message logs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Why Businesses Choose 365</h2>
          <p className="text-xl text-[#555555]">
            Trusted by teams that can&apos;t afford for their notifications to fail
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-2 border-[#E5E7EB] rounded-xl p-8 hover:border-[#EFE810] transition-colors">
            <div className="w-12 h-12 bg-[#EFE810] rounded-full flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-[#1A1A1A]" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Global Infrastructure</h3>
            <p className="text-[#555555]">
              Send to 190+ countries with local carrier partnerships. Intelligent routing selects the fastest, most reliable path for every message.
            </p>
          </div>

          <div className="border-2 border-[#EFE810] rounded-xl p-8 bg-[#FFFDE7]">
            <div className="inline-block bg-[#EFE810] text-[#1A1A1A] text-xs font-bold px-3 py-1 rounded-full mb-4">CORE FEATURE</div>
            <div className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-[#EFE810]" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Fallback Routing</h3>
            <p className="text-[#555555]">
              If the primary channel or carrier fails, 365 automatically retries through alternative routes — ensuring your message gets through no matter what.
            </p>
          </div>

          <div className="border-2 border-[#E5E7EB] rounded-xl p-8 hover:border-[#EFE810] transition-colors">
            <div className="w-12 h-12 bg-[#EFE810] rounded-full flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-[#1A1A1A]" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Enterprise Security</h3>
            <p className="text-[#555555]">
              End-to-end encryption, SOC 2 Type II compliance, role-based access controls, and full audit logs for every message sent.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Ensure Deliverability?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join businesses that rely on 365 to deliver millions of transactional notifications every day with 99.9% uptime.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/signup"
              className="inline-block px-8 py-4 bg-[#EFE810] text-[#1A1A1A] text-lg font-semibold rounded-lg hover:bg-[#d4cd00] transition-colors shadow-lg"
            >
              Get Started Free
            </Link>
            <Link
              href="/dashboard"
              className="inline-block px-8 py-4 bg-white/10 text-white text-lg font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-extrabold text-white tracking-tight">365</span>
              <p className="text-gray-400 mt-3">
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
