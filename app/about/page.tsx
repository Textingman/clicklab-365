import Link from 'next/link';
import { Shield, Target, Users, TrendingUp, Gift, BarChart3 } from 'lucide-react';

export default function AboutPage() {
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
                <Link href="/about" className="text-[#1A1A1A] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
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

      {/* Hero Section */}
      <section className="bg-[#F9F9F9] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-[#1A1A1A] mb-6">
              About Loyalty
            </h1>
            <p className="text-xl text-[#555555] max-w-3xl mx-auto">
              We&apos;re building the future of customer engagement — helping businesses of all sizes create loyalty programs that actually work, drive repeat revenue, and turn customers into advocates.
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
              Loyalty was built to solve a fundamental business problem: acquiring a new customer costs 5–7x more than retaining an existing one, yet most businesses invest almost nothing in keeping customers coming back.
            </p>
            <p className="text-lg text-[#555555] mb-4">
              We provide a simple, powerful loyalty tracking platform that makes it easy to reward engagement, understand customer behavior, and build lasting relationships that drive real revenue growth.
            </p>
            <p className="text-lg text-[#555555]">
              Our goal is to make enterprise-grade loyalty programs accessible to every business — from local shops to national brands.
            </p>
          </div>
          <div className="bg-[#F9F9F9] rounded-2xl p-8 border border-[#E5E7EB]">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#EFE810] rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Results-Driven</h3>
                  <p className="text-[#555555]">
                    Every feature is built to drive measurable outcomes — repeat visits, higher spend, and lower churn.
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
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Privacy First</h3>
                  <p className="text-[#555555]">
                    Your customers&apos; data is protected with enterprise-grade security. We never sell customer data.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#EFE810] rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Built to Scale</h3>
                  <p className="text-[#555555]">
                    Start with a simple points program and grow into advanced tiers, segmentation, and automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#F9F9F9] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Why Businesses Choose Loyalty</h2>
            <p className="text-xl text-[#555555]">
              Trusted by businesses that understand the value of keeping customers coming back
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#EFE810] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-[#1A1A1A]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Flexible Rewards</h3>
              <p className="text-[#555555]">
                Points, tiers, cashback, free items — build the program that fits your business model.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#EFE810] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-[#1A1A1A]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Deep Analytics</h3>
              <p className="text-[#555555]">
                Understand exactly which rewards drive the most engagement and revenue.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#EFE810] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#1A1A1A]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Multi-Brand Support</h3>
              <p className="text-[#555555]">
                Run loyalty programs across multiple locations or brands from a single dashboard.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#EFE810] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#1A1A1A]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Easy Integration</h3>
              <p className="text-[#555555]">
                Connect with your existing POS, e-commerce, or CRM system in minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Real Loyalty?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using Loyalty to drive repeat revenue and deeper customer relationships.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-[#EFE810] text-[#1A1A1A] text-lg font-semibold rounded-lg hover:bg-[#d4cd00] transition-colors shadow-lg"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
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
