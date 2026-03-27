import Link from 'next/link';
import { Gift, Star, TrendingUp, Users, Award, BarChart3, Repeat, Zap } from 'lucide-react';

export default function HomePage() {
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
                <Link href="/" className="text-[#1A1A1A] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="inline-flex items-center bg-[#EFE810] text-[#1A1A1A] px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Star className="w-4 h-4 mr-2" />
            The Future of Customer Loyalty
          </div>
          <h1 className="text-5xl font-extrabold text-[#1A1A1A] sm:text-6xl md:text-7xl leading-tight">
            Turn Customers Into
            <span className="block text-[#EFE810] [-webkit-text-stroke:2px_#1A1A1A]">Loyal Fans</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-[#555555]">
            Drive repeat business and deepen customer relationships with our powerful loyalty tracking platform. Reward engagement, track behavior, and grow revenue — all in one place.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-4 bg-[#EFE810] text-[#1A1A1A] text-lg font-semibold rounded-lg hover:bg-[#d4cd00] transition-colors shadow-md"
            >
              Start for Free
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white text-[#1A1A1A] text-lg font-semibold rounded-lg hover:bg-[#F9F9F9] transition-colors border-2 border-[#1A1A1A]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#1A1A1A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-extrabold text-[#EFE810]">5x</p>
              <p className="text-white/70 mt-2">More likely to repurchase</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-[#EFE810]">67%</p>
              <p className="text-white/70 mt-2">Higher spend from loyal customers</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-[#EFE810]">80%</p>
              <p className="text-white/70 mt-2">Revenue from top 20% of customers</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-[#EFE810]">25%</p>
              <p className="text-white/70 mt-2">Profit boost from 5% retention increase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A1A1A]">Everything You Need to Build Loyalty</h2>
          <p className="mt-4 text-xl text-[#555555]">
            A complete loyalty platform built for modern businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-[#E5E7EB]">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-[#EFE810] rounded-full flex items-center justify-center">
                <Gift className="w-8 h-8 text-[#1A1A1A]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#1A1A1A] text-center mb-3">
              Points & Rewards
            </h3>
            <p className="text-[#555555] text-center">
              Create flexible points programs that reward purchases, referrals, reviews, and any custom action that matters to your business.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-[#E5E7EB]">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-[#EFE810] rounded-full flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-[#1A1A1A]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#1A1A1A] text-center mb-3">
              Real-Time Analytics
            </h3>
            <p className="text-[#555555] text-center">
              Track engagement, redemption rates, customer lifetime value, and churn risk with live dashboards and actionable insights.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-[#E5E7EB]">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-[#EFE810] rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-[#1A1A1A]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#1A1A1A] text-center mb-3">
              Customer Segmentation
            </h3>
            <p className="text-[#555555] text-center">
              Automatically segment customers by tier, spend, frequency, and behavior to deliver personalized experiences at scale.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#F9F9F9] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A1A1A]">How Loyalty Works</h2>
            <p className="mt-4 text-xl text-[#555555]">
              Get up and running in minutes, not months
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#EFE810] rounded-full flex items-center justify-center font-bold text-[#1A1A1A] text-lg mr-6">1</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Set Up Your Program</h3>
                  <p className="text-lg text-[#555555] leading-relaxed">
                    Define your rewards structure, tiers, and earning rules. Customize the experience to match your brand in minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#EFE810] rounded-full flex items-center justify-center font-bold text-[#1A1A1A] text-lg mr-6">2</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Engage Your Customers</h3>
                  <p className="text-lg text-[#555555] leading-relaxed">
                    Customers earn points for every interaction — purchases, referrals, social shares, birthdays, and more.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#EFE810] rounded-full flex items-center justify-center font-bold text-[#1A1A1A] text-lg mr-6">3</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Watch Revenue Grow</h3>
                  <p className="text-lg text-[#555555] leading-relaxed">
                    Track results in real time. See which rewards drive the most repeat visits and optimize your program for maximum ROI.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-2xl p-10 text-white">
              <div className="space-y-6">
                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4">
                  <div className="flex items-center">
                    <Award className="w-8 h-8 text-[#EFE810] mr-3" />
                    <div>
                      <p className="font-semibold">Gold Tier Unlocked</p>
                      <p className="text-white/60 text-sm">Sarah M. — 2,500 pts</p>
                    </div>
                  </div>
                  <span className="text-[#EFE810] font-bold">+250 pts</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4">
                  <div className="flex items-center">
                    <Repeat className="w-8 h-8 text-[#EFE810] mr-3" />
                    <div>
                      <p className="font-semibold">Repeat Purchase</p>
                      <p className="text-white/60 text-sm">James K. — 3rd visit</p>
                    </div>
                  </div>
                  <span className="text-[#EFE810] font-bold">+100 pts</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4">
                  <div className="flex items-center">
                    <TrendingUp className="w-8 h-8 text-[#EFE810] mr-3" />
                    <div>
                      <p className="font-semibold">Revenue This Month</p>
                      <p className="text-white/60 text-sm">From loyalty members</p>
                    </div>
                  </div>
                  <span className="text-[#EFE810] font-bold">+34%</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4">
                  <div className="flex items-center">
                    <Zap className="w-8 h-8 text-[#EFE810] mr-3" />
                    <div>
                      <p className="font-semibold">Referral Bonus</p>
                      <p className="text-white/60 text-sm">Maria L. referred 3 friends</p>
                    </div>
                  </div>
                  <span className="text-[#EFE810] font-bold">+300 pts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A1A1A]">Built for Every Business</h2>
          <p className="mt-4 text-xl text-[#555555]">
            Whether you&apos;re a local shop or a national brand, loyalty scales with you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-2 border-[#E5E7EB] rounded-xl p-8 hover:border-[#EFE810] transition-colors">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Retail & E-Commerce</h3>
            <p className="text-[#555555] mb-6">
              Reward purchases, reduce cart abandonment, and turn one-time buyers into lifelong customers with automated loyalty flows.
            </p>
            <ul className="space-y-2 text-[#555555]">
              <li className="flex items-center"><span className="w-2 h-2 bg-[#EFE810] rounded-full mr-3"></span>Purchase-based points</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-[#EFE810] rounded-full mr-3"></span>Abandoned cart recovery</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-[#EFE810] rounded-full mr-3"></span>Birthday rewards</li>
            </ul>
          </div>

          <div className="border-2 border-[#EFE810] rounded-xl p-8 bg-[#FFFDE7]">
            <div className="inline-block bg-[#EFE810] text-[#1A1A1A] text-xs font-bold px-3 py-1 rounded-full mb-4">MOST POPULAR</div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Restaurants & Hospitality</h3>
            <p className="text-[#555555] mb-6">
              Drive repeat visits, increase average ticket size, and build a community of regulars who keep coming back.
            </p>
            <ul className="space-y-2 text-[#555555]">
              <li className="flex items-center"><span className="w-2 h-2 bg-[#EFE810] rounded-full mr-3"></span>Visit-based rewards</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-[#EFE810] rounded-full mr-3"></span>SMS re-engagement</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-[#EFE810] rounded-full mr-3"></span>Tiered VIP programs</li>
            </ul>
          </div>

          <div className="border-2 border-[#E5E7EB] rounded-xl p-8 hover:border-[#EFE810] transition-colors">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Services & Subscriptions</h3>
            <p className="text-[#555555] mb-6">
              Reduce churn, reward long-term subscribers, and incentivize referrals to grow your customer base organically.
            </p>
            <ul className="space-y-2 text-[#555555]">
              <li className="flex items-center"><span className="w-2 h-2 bg-[#EFE810] rounded-full mr-3"></span>Retention bonuses</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-[#EFE810] rounded-full mr-3"></span>Referral programs</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-[#EFE810] rounded-full mr-3"></span>Milestone rewards</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#1A1A1A] rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Real Loyalty?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using Loyalty to turn customers into their biggest advocates. Start free, scale as you grow.
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-4 bg-[#EFE810] text-[#1A1A1A] text-lg font-semibold rounded-lg hover:bg-[#d4cd00] transition-colors shadow-lg"
            >
              Get Started Free
            </Link>
          </div>
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
