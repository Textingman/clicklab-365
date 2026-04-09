import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, Mail, Bell, CheckCircle, BarChart3, Shield, Zap, Globe, Clock, ArrowRight } from 'lucide-react';

export default function HomePage() {
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
                <Link href="/" className="text-[#1A1A1A] hover:text-[#F97316] px-3 py-2 rounded-md text-sm font-medium">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-[#FEF3C7] to-[#FEE2E2] text-[#DC2626] px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-[#FCA5A5]">
            <Zap className="w-4 h-4 mr-2 text-[#F97316]" />
            Guaranteed Deliverability, Every Message
          </div>
          <h1 className="text-5xl font-extrabold text-[#1A1A1A] sm:text-6xl md:text-7xl leading-tight">
            Reach Customers
            <span className="block bg-gradient-to-r from-[#F59E0B] to-[#DC2626] bg-clip-text text-transparent">365 Days a Year</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-[#555555]">
            The transactional messaging platform that ensures your notifications — SMS, Email, and Push — actually reach your customers. Real-time delivery tracking, intelligent routing, and compliance built in.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/signup"
              className="px-8 py-4 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white text-lg font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-md"
            >
              Start Sending Free
            </Link>
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-white text-[#1A1A1A] text-lg font-semibold rounded-lg hover:bg-[#FFF7ED] transition-colors border-2 border-[#F97316] flex items-center gap-2"
            >
              View Dashboard <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#1A1A1A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-extrabold bg-gradient-to-r from-[#F59E0B] to-[#F97316] bg-clip-text text-transparent">99.9%</p>
              <p className="text-white/70 mt-2">Delivery rate</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold bg-gradient-to-r from-[#F59E0B] to-[#F97316] bg-clip-text text-transparent">&lt;1s</p>
              <p className="text-white/70 mt-2">Average send time</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold bg-gradient-to-r from-[#F59E0B] to-[#F97316] bg-clip-text text-transparent">3</p>
              <p className="text-white/70 mt-2">Channels: SMS, Email, Push</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold bg-gradient-to-r from-[#F59E0B] to-[#F97316] bg-clip-text text-transparent">24/7</p>
              <p className="text-white/70 mt-2">Real-time monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Channels Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A1A1A]">Every Channel, One Platform</h2>
          <p className="mt-4 text-xl text-[#555555]">
            Send transactional notifications across all channels with a single API
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-[#E5E7EB] hover:border-[#F97316]">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#F59E0B] to-[#F97316] rounded-full flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#1A1A1A] text-center mb-3">SMS Notifications</h3>
            <p className="text-[#555555] text-center">
              Send order confirmations, shipping updates, OTPs, and alerts via SMS with carrier-grade deliverability and STOP/HELP compliance built in.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#555555]">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0" /> TCPA compliant opt-in/opt-out</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0" /> Long code & short code support</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0" /> Delivery receipts in real time</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-[#E5E7EB] hover:border-[#F97316]">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#F97316] to-[#DC2626] rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#1A1A1A] text-center mb-3">Email Notifications</h3>
            <p className="text-[#555555] text-center">
              Deliver transactional emails — receipts, password resets, account alerts — with high inbox placement rates and full open/click tracking.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#555555]">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0" /> SPF, DKIM & DMARC authentication</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0" /> Open & click tracking</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0" /> Bounce & spam management</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-[#E5E7EB] hover:border-[#F97316]">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#DC2626] to-[#9B1C1C] rounded-full flex items-center justify-center">
                <Bell className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#1A1A1A] text-center mb-3">Push Notifications</h3>
            <p className="text-[#555555] text-center">
              Reach customers instantly on iOS and Android with rich push notifications for time-sensitive alerts, reminders, and updates.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#555555]">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0" /> iOS APNs & Android FCM</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0" /> Rich media & action buttons</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0" /> Delivery & open analytics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#FFF7ED] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A1A1A]">How 365 Works</h2>
            <p className="mt-4 text-xl text-[#555555]">
              From trigger to delivery in milliseconds
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#F97316] rounded-full flex items-center justify-center font-bold text-white text-lg mr-6">1</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Trigger a Notification</h3>
                  <p className="text-lg text-[#555555] leading-relaxed">
                    Connect your app or platform via our REST API or dashboard. Trigger notifications on any event — order placed, payment received, account activity, and more.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#F97316] to-[#DC2626] rounded-full flex items-center justify-center font-bold text-white text-lg mr-6">2</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Intelligent Routing</h3>
                  <p className="text-lg text-[#555555] leading-relaxed">
                    365 automatically selects the best carrier and channel path to maximize deliverability. Fallback routing ensures messages get through even if the primary channel fails.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#DC2626] to-[#9B1C1C] rounded-full flex items-center justify-center font-bold text-white text-lg mr-6">3</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Track Every Delivery</h3>
                  <p className="text-lg text-[#555555] leading-relaxed">
                    Monitor delivery status in real time. Get webhooks for every status change — sent, delivered, failed, opened — and view full logs in your dashboard.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-2xl p-10 text-white">
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    <div>
                      <p className="font-semibold text-sm">Order Confirmation SMS</p>
                      <p className="text-white/60 text-xs">+1 (555) 234-5678 · just now</p>
                    </div>
                  </div>
                  <span className="text-green-400 text-xs font-bold bg-green-400/10 px-2 py-1 rounded-full">DELIVERED</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    <div>
                      <p className="font-semibold text-sm">Password Reset Email</p>
                      <p className="text-white/60 text-xs">user@example.com · 2s ago</p>
                    </div>
                  </div>
                  <span className="text-green-400 text-xs font-bold bg-green-400/10 px-2 py-1 rounded-full">OPENED</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#F97316] rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold text-sm">Shipping Update Push</p>
                      <p className="text-white/60 text-xs">Device: iPhone 15 · 5s ago</p>
                    </div>
                  </div>
                  <span className="text-[#F97316] text-xs font-bold bg-[#F97316]/10 px-2 py-1 rounded-full">SENT</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    <div>
                      <p className="font-semibold text-sm">Payment Receipt Email</p>
                      <p className="text-white/60 text-xs">billing@corp.com · 12s ago</p>
                    </div>
                  </div>
                  <span className="text-green-400 text-xs font-bold bg-green-400/10 px-2 py-1 rounded-full">DELIVERED</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-sm">
                  <span className="text-white/60">Today&apos;s messages</span>
                  <span className="text-[#F97316] font-bold">24,891 sent · 99.8% delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A1A1A]">Built for Deliverability</h2>
          <p className="mt-4 text-xl text-[#555555]">
            Every feature is designed to ensure your messages reach their destination
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="bg-gradient-to-br from-[#F59E0B] to-[#F97316] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Compliance Built In</h3>
            <p className="text-[#555555] text-sm">
              TCPA, CAN-SPAM, and GDPR compliance with automatic opt-out handling and consent management.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-gradient-to-br from-[#F97316] to-[#DC2626] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Real-Time Analytics</h3>
            <p className="text-[#555555] text-sm">
              Live delivery dashboards, bounce tracking, open rates, and full message logs with filtering.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-gradient-to-br from-[#DC2626] to-[#9B1C1C] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Global Reach</h3>
            <p className="text-[#555555] text-sm">
              Send to 190+ countries with local carrier partnerships that maximize in-country delivery rates.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-gradient-to-br from-[#F59E0B] to-[#DC2626] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Scheduled & Instant</h3>
            <p className="text-[#555555] text-sm">
              Send immediately or schedule for the perfect time. Timezone-aware delivery for global audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-[#FFF7ED] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A1A1A]">Built for Every Use Case</h2>
            <p className="mt-4 text-xl text-[#555555]">
              Transactional messaging for every industry and workflow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-[#E5E7EB] rounded-xl p-8 hover:border-[#F97316] transition-colors bg-white">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">E-Commerce</h3>
              <p className="text-[#555555] mb-6">
                Order confirmations, shipping updates, delivery alerts, and return notifications that keep customers informed at every step.
              </p>
              <ul className="space-y-2 text-[#555555] text-sm">
                <li className="flex items-center"><span className="w-2 h-2 bg-[#F97316] rounded-full mr-3 flex-shrink-0"></span>Order & payment confirmations</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#F97316] rounded-full mr-3 flex-shrink-0"></span>Shipping & delivery updates</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#F97316] rounded-full mr-3 flex-shrink-0"></span>Return & refund notifications</li>
              </ul>
            </div>

            <div className="border-2 border-[#F97316] rounded-xl p-8 bg-gradient-to-br from-[#FEF3C7] to-[#FEE2E2]">
              <div className="inline-block bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">MOST POPULAR</div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Financial Services</h3>
              <p className="text-[#555555] mb-6">
                Transaction alerts, fraud notifications, OTP codes, and account activity messages with bank-grade security and compliance.
              </p>
              <ul className="space-y-2 text-[#555555] text-sm">
                <li className="flex items-center"><span className="w-2 h-2 bg-[#DC2626] rounded-full mr-3 flex-shrink-0"></span>Transaction & balance alerts</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#DC2626] rounded-full mr-3 flex-shrink-0"></span>OTP & 2FA codes</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#DC2626] rounded-full mr-3 flex-shrink-0"></span>Fraud & security alerts</li>
              </ul>
            </div>

            <div className="border-2 border-[#E5E7EB] rounded-xl p-8 hover:border-[#F97316] transition-colors bg-white">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Healthcare & SaaS</h3>
              <p className="text-[#555555] mb-6">
                Appointment reminders, prescription alerts, account notifications, and system status updates with HIPAA-ready infrastructure.
              </p>
              <ul className="space-y-2 text-[#555555] text-sm">
                <li className="flex items-center"><span className="w-2 h-2 bg-[#F97316] rounded-full mr-3 flex-shrink-0"></span>Appointment reminders</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#F97316] rounded-full mr-3 flex-shrink-0"></span>Account & billing alerts</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#F97316] rounded-full mr-3 flex-shrink-0"></span>System status notifications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2D1B00] rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Start Sending in Minutes
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Connect your first channel, send your first notification, and see real-time delivery tracking — all in under 5 minutes.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/signup"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white text-lg font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg"
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
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
