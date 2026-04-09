'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Mail, Building, Phone, User, MessageSquare, Bell } from 'lucide-react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    channels: [] as string[],
    message: ''
  });
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [termsConsent, setTermsConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', channels: [], message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleChannel = (ch: string) => {
    setFormData((prev) => ({
      ...prev,
      channels: prev.channels.includes(ch)
        ? prev.channels.filter((c) => c !== ch)
        : [...prev.channels, ch],
    }));
  };

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
                <Link href="/" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/about" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="/dashboard" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                <Link href="/privacy" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">Privacy</Link>
                <Link href="/terms" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">Terms</Link>
                <Link href="/signup" className="bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white hover:opacity-90 px-4 py-2 rounded-md text-sm font-semibold">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#F9F9F9] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-[#1A1A1A] mb-4">
              Start Sending Notifications
            </h1>
            <p className="text-xl text-[#555555] max-w-2xl mx-auto">
              Tell us about your business and we&apos;ll set up your 365 account with the channels you need — SMS, Email, and Push.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-[#E5E7EB]">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-[#EFE810] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">You&apos;re In!</h2>
              <p className="text-lg text-[#555555] mb-8">
                We&apos;ve received your request. Our team will contact you within 24 hours to activate your 365 account and configure your messaging channels.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link href="/dashboard" className="inline-block px-6 py-3 bg-[#EFE810] text-[#1A1A1A] font-semibold rounded-lg hover:bg-[#d4cd00] transition-colors">
                  View Dashboard
                </Link>
                <Link href="/" className="inline-block px-6 py-3 bg-white text-[#1A1A1A] font-semibold rounded-lg hover:bg-[#F9F9F9] transition-colors border-2 border-[#1A1A1A]">
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">Get Started with 365</h2>
                <p className="text-[#555555]">
                  Tell us about your business and which messaging channels you need.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1A1A1A] mb-2">Full Name *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text" id="name" name="name" required
                      value={formData.name} onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EFE810] focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A] mb-2">Business Email *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email" id="email" name="email" required
                      value={formData.email} onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EFE810] focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                {/* Company Field */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#1A1A1A] mb-2">Company Name *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text" id="company" name="company" required
                      value={formData.company} onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EFE810] focus:border-transparent"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1A1A1A] mb-2">Phone Number (Optional)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel" id="phone" name="phone"
                      value={formData.phone} onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EFE810] focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Channels */}
                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-3">Channels You Need</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'SMS', icon: <MessageSquare className="w-5 h-5" />, label: 'SMS' },
                      { id: 'Email', icon: <Mail className="w-5 h-5" />, label: 'Email' },
                      { id: 'Push', icon: <Bell className="w-5 h-5" />, label: 'Push' },
                    ].map((ch) => (
                      <button
                        key={ch.id}
                        type="button"
                        onClick={() => toggleChannel(ch.id)}
                        className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 font-semibold text-sm transition-all ${
                          formData.channels.includes(ch.id)
                            ? 'border-[#EFE810] bg-[#EFE810] text-[#1A1A1A]'
                            : 'border-[#E5E7EB] bg-white text-[#555555] hover:border-[#EFE810]'
                        }`}
                      >
                        {ch.icon} {ch.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1A1A1A] mb-2">Tell us about your use case (Optional)</label>
                  <textarea
                    id="message" name="message" rows={4}
                    value={formData.message} onChange={handleChange}
                    className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EFE810] focus:border-transparent"
                    placeholder="What types of notifications do you need to send? How many messages per month? What industry are you in?"
                  />
                </div>

                {/* Consent Checkboxes */}
                <div className="space-y-4">
                  <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
                    <div className="flex items-start">
                      <input
                        type="checkbox" id="sms-optin"
                        checked={smsOptIn}
                        onChange={(e) => setSmsOptIn(e.target.checked)}
                        className="mt-1 h-4 w-4 text-[#EFE810] focus:ring-[#EFE810] border-gray-300 rounded flex-shrink-0"
                      />
                      <label htmlFor="sms-optin" className="ml-3 text-sm leading-relaxed text-[#555555]">
                        By checking this box, you agree to receive transactional account notification text messages from 365. You may opt out at any time by replying STOP. Reply HELP or email support@getnotifications365.com for assistance. Message and data rates may apply. Message frequency varies. Carriers are not liable for delayed or undelivered messages. Opting in to SMS is optional and not required to submit this form.
                      </label>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
                    <div className="flex items-start">
                      <input
                        type="checkbox" id="terms-consent" required
                        checked={termsConsent}
                        onChange={(e) => setTermsConsent(e.target.checked)}
                        className="mt-1 h-4 w-4 text-[#EFE810] focus:ring-[#EFE810] border-gray-300 rounded flex-shrink-0"
                      />
                      <label htmlFor="terms-consent" className="ml-3 text-sm leading-relaxed text-[#555555]">
                        I agree with the{' '}
                        <Link href="/terms" className="text-[#1A1A1A] hover:text-[#555555] font-medium underline">Terms &amp; Conditions</Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="text-[#1A1A1A] hover:text-[#555555] font-medium underline">Privacy Policy</Link>.
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-all ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed text-white'
                      : 'bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white hover:opacity-90 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Activate My 365 Account'
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-extrabold text-white tracking-tight">365</span>
              <p className="text-gray-400 mt-3">Transactional messaging with guaranteed deliverability.</p>
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
