import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Zap, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image 
                  src="/Vlogo.svg"
                  alt="Volt" 
                  width={160} 
                  height={58}
                  className="h-10 w-auto"
                  priority
                />
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-[#1A1A1A] sm:text-6xl md:text-7xl">
            Stay Compliant
            <span className="block text-[#1A1A1A]">Stay Confident</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-[#555555]">
            Streamline your Know Your Customer (KYC) compliance with instant SMS-based identity verification. Meet regulatory requirements while delivering a seamless customer experience.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-4 bg-[#EFE810] text-[#1A1A1A] text-lg font-semibold rounded-lg hover:bg-[#d4cd00] transition-colors shadow-md"
            >
              Get Started Free
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

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A1A1A]">Why Volt Verify Rocks</h2>
          <p className="mt-4 text-xl text-[#555555]">
            Built for businesses that value real connections over fake accounts
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-[#E5E7EB]">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-[#EFE810] rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-[#1A1A1A]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#1A1A1A] text-center mb-3">
              Dead Simple
            </h3>
            <p className="text-[#555555] text-center">
              Your customers verify in seconds. No friction, no confusion, just smooth sailing.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-[#E5E7EB]">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-[#EFE810] rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-[#1A1A1A]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#1A1A1A] text-center mb-3">
              Blazing Fast
            </h3>
            <p className="text-[#555555] text-center">
              Sub-2-second load times. Because nobody&apos;s got time to wait around.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-[#E5E7EB]">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-[#EFE810] rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-[#1A1A1A]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#1A1A1A] text-center mb-3">
              Your Brand, Your Way
            </h3>
            <p className="text-[#555555] text-center">
              White-label ready with custom styling. Make it yours without the dev headache.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="bg-[#F9F9F9] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A1A1A]">What We Do</h2>
            <p className="mt-4 text-xl text-[#555555]">
              Three ways to level up your customer game
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Solutions List */}
            <div className="space-y-12">
              {/* Solution 1 */}
              <div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Instant Identity Checks</h3>
                <p className="text-lg text-[#555555] leading-relaxed">
                  Send a quick verification ping. Your users confirm who they are in seconds, and you get peace of mind.
                </p>
              </div>

              {/* Solution 2 */}
              <div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Smart Document Delivery</h3>
                <p className="text-lg text-[#555555] leading-relaxed">
                  Drop docs straight into your customers&apos; texts for e-signatures. Way better conversion than email ever dreamed of.
                </p>
              </div>

              {/* Solution 3 */}
              <div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Win Back Drop-Offs</h3>
                <p className="text-lg text-[#555555] leading-relaxed">
                  Customers bail on your form? Fire off automated nudges that actually bring them back to finish what they started.
                </p>
              </div>
            </div>

            {/* Single Image */}
            <div className="rounded-lg overflow-hidden sticky top-8 flex items-start justify-center">
              <Image 
                src="/Phone.png" 
                alt="Volt Verify Solutions"
                width={350} 
                height={350}
                className="w-auto h-auto object-contain max-w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#1A1A1A] rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join businesses that trust Volt Verify for SMS verification and improved customer engagement.
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-4 bg-[#EFE810] text-[#1A1A1A] text-lg font-semibold rounded-lg hover:bg-[#d4cd00] transition-colors shadow-lg"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image 
                src="/Vlogo.svg"
                alt="Volt"
                width={120}
                height={44}
                className="h-8 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400">
                SMS verification for businesses.
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
                support@voltverify.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Volt Verify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
