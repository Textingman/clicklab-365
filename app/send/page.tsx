'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { MessageSquare, Mail, Bell, Send, CheckCircle, ArrowLeft } from 'lucide-react';

type Channel = 'SMS' | 'Email' | 'Push';

const channelConfig: Record<Channel, { icon: React.ReactNode; label: string; recipientLabel: string; recipientPlaceholder: string; recipientType: string }> = {
  SMS: {
    icon: <MessageSquare className="w-5 h-5" />,
    label: 'SMS',
    recipientLabel: 'Phone Number',
    recipientPlaceholder: '+1 (555) 234-5678',
    recipientType: 'tel',
  },
  Email: {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    recipientLabel: 'Email Address',
    recipientPlaceholder: 'customer@example.com',
    recipientType: 'email',
  },
  Push: {
    icon: <Bell className="w-5 h-5" />,
    label: 'Push',
    recipientLabel: 'Device Token / User ID',
    recipientPlaceholder: 'user_id_or_device_token',
    recipientType: 'text',
  },
};

const notificationTypes = [
  'Order Confirmation',
  'Shipping Update',
  'Delivery Alert',
  'Payment Receipt',
  'Password Reset',
  'OTP / 2FA Code',
  'Account Alert',
  'Appointment Reminder',
  'Fraud Alert',
  'Custom Message',
];

export default function SendPage() {
  const [channel, setChannel] = useState<Channel>('SMS');
  const [recipient, setRecipient] = useState('');
  const [notifType, setNotifType] = useState('Order Confirmation');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [priority, setPriority] = useState('normal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [messageId, setMessageId] = useState('');

  const cfg = channelConfig[channel];

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    const id = `msg_${Date.now().toString(36).toUpperCase()}`;
    setMessageId(id);
    setIsSubmitting(false);
    setSent(true);
  };

  const handleReset = () => {
    setSent(false);
    setRecipient('');
    setMessage('');
    setSubject('');
    setMessageId('');
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-[#E5E7EB] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex-shrink-0">
              <Image src="/logo.png" alt="365" width={80} height={40} className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex items-baseline space-x-4">
              <Link href="/" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link href="/dashboard" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
              <Link href="/send" className="text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">Send</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back link */}
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-[#555555] hover:text-[#1A1A1A] mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] overflow-hidden">
          {/* Header */}
          <div className="bg-[#1A1A1A] px-8 py-6">
            <h1 className="text-2xl font-extrabold text-white">Send Notification</h1>
            <p className="text-white/60 mt-1 text-sm">Compose and send a transactional message to your customer</p>
          </div>

          {sent ? (
            <div className="p-10 text-center">
              <div className="w-20 h-20 bg-[#EFE810] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-[#1A1A1A]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">Message Sent!</h2>
              <p className="text-[#555555] mb-2">Your {channel} notification has been queued for delivery.</p>
              <p className="text-xs text-[#555555] font-mono bg-gray-50 inline-block px-3 py-1 rounded-full mb-8">
                Message ID: {messageId}
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-[#EFE810] text-[#1A1A1A] font-semibold rounded-lg hover:bg-[#d4cd00] transition-colors"
                >
                  Send Another
                </button>
                <Link
                  href="/dashboard"
                  className="px-6 py-3 bg-white text-[#1A1A1A] font-semibold rounded-lg hover:bg-[#F9F9F9] transition-colors border-2 border-[#1A1A1A]"
                >
                  View Dashboard
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSend} className="p-8 space-y-6">
              {/* Channel Selector */}
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-3">Channel *</label>
                <div className="grid grid-cols-3 gap-3">
                  {(Object.keys(channelConfig) as Channel[]).map((ch) => (
                    <button
                      key={ch}
                      type="button"
                      onClick={() => setChannel(ch)}
                      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 font-semibold text-sm transition-all ${
                        channel === ch
                          ? 'border-[#EFE810] bg-[#EFE810] text-[#1A1A1A]'
                          : 'border-[#E5E7EB] bg-white text-[#555555] hover:border-[#EFE810]'
                      }`}
                    >
                      {channelConfig[ch].icon}
                      {channelConfig[ch].label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notification Type */}
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Notification Type *</label>
                <select
                  value={notifType}
                  onChange={(e) => setNotifType(e.target.value)}
                  className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#EFE810] bg-white"
                >
                  {notificationTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Recipient */}
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">{cfg.recipientLabel} *</label>
                <input
                  type={cfg.recipientType}
                  required
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder={cfg.recipientPlaceholder}
                  className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#EFE810]"
                />
              </div>

              {/* Subject (Email only) */}
              {channel === 'Email' && (
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Subject *</label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Your order has been confirmed"
                    className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#EFE810]"
                  />
                </div>
              )}

              {/* Message Body */}
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    channel === 'SMS'
                      ? 'Hi {{name}}, your order #{{order_id}} has been confirmed. Track it at: {{link}}'
                      : channel === 'Email'
                      ? 'Dear {{name}},\n\nYour order has been confirmed...'
                      : 'Your package is out for delivery. Tap to track.'
                  }
                  className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#EFE810] resize-none"
                />
                {channel === 'SMS' && (
                  <p className="text-xs text-[#555555] mt-1">{message.length}/160 characters · {Math.ceil(message.length / 160) || 1} segment(s)</p>
                )}
              </div>

              {/* Priority */}
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Priority</label>
                <div className="flex gap-3">
                  {['normal', 'high', 'critical'].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPriority(p)}
                      className={`flex-1 py-2 px-3 rounded-lg border-2 text-sm font-medium capitalize transition-all ${
                        priority === p
                          ? p === 'critical'
                            ? 'border-red-500 bg-red-50 text-red-600'
                            : p === 'high'
                            ? 'border-orange-400 bg-orange-50 text-orange-600'
                            : 'border-[#EFE810] bg-[#EFE810] text-[#1A1A1A]'
                          : 'border-[#E5E7EB] text-[#555555] hover:border-gray-300'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Compliance notice for SMS */}
              {channel === 'SMS' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-xs text-blue-700">
                  <strong>Compliance reminder:</strong> Only send to customers who have opted in to receive SMS notifications. Include STOP instructions for marketing messages. Transactional messages are exempt but must be relevant to the customer&apos;s action.
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2 transition-all ${
                  isSubmitting
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white hover:opacity-90 shadow-md hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Send {channel} Notification
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
