'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  MessageSquare, Mail, Bell, BarChart3, CheckCircle,
  XCircle, Clock, AlertCircle, Send, TrendingUp, Users, Zap
} from 'lucide-react';

const mockMessages = [
  { id: 'msg_001', channel: 'SMS', recipient: '+1 (555) 234-5678', subject: 'Order Confirmation #4821', status: 'delivered', sentAt: '2026-04-09 03:18:22', deliveredAt: '2026-04-09 03:18:23' },
  { id: 'msg_002', channel: 'Email', recipient: 'sarah@example.com', subject: 'Your receipt from 365', status: 'opened', sentAt: '2026-04-09 03:17:10', deliveredAt: '2026-04-09 03:17:11' },
  { id: 'msg_003', channel: 'Push', recipient: 'Device: iPhone 15 Pro', subject: 'Your package is out for delivery', status: 'delivered', sentAt: '2026-04-09 03:15:44', deliveredAt: '2026-04-09 03:15:45' },
  { id: 'msg_004', channel: 'SMS', recipient: '+1 (555) 987-6543', subject: 'Your OTP code: 847291', status: 'delivered', sentAt: '2026-04-09 03:14:02', deliveredAt: '2026-04-09 03:14:03' },
  { id: 'msg_005', channel: 'Email', recipient: 'james@corp.com', subject: 'Password reset request', status: 'bounced', sentAt: '2026-04-09 03:12:55', deliveredAt: '—' },
  { id: 'msg_006', channel: 'Push', recipient: 'Device: Pixel 8', subject: 'Payment received: $129.00', status: 'delivered', sentAt: '2026-04-09 03:11:30', deliveredAt: '2026-04-09 03:11:31' },
  { id: 'msg_007', channel: 'SMS', recipient: '+1 (555) 321-0987', subject: 'Appointment reminder: Tomorrow 2pm', status: 'failed', sentAt: '2026-04-09 03:10:15', deliveredAt: '—' },
  { id: 'msg_008', channel: 'Email', recipient: 'billing@acme.com', subject: 'Invoice #INV-2026-0041', status: 'delivered', sentAt: '2026-04-09 03:09:00', deliveredAt: '2026-04-09 03:09:02' },
  { id: 'msg_009', channel: 'SMS', recipient: '+1 (555) 654-3210', subject: 'Shipping update: In transit', status: 'delivered', sentAt: '2026-04-09 03:07:44', deliveredAt: '2026-04-09 03:07:45' },
  { id: 'msg_010', channel: 'Push', recipient: 'Device: Samsung S24', subject: 'New login detected on your account', status: 'delivered', sentAt: '2026-04-09 03:06:20', deliveredAt: '2026-04-09 03:06:21' },
];

const statusConfig: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
  delivered: { label: 'Delivered', color: 'text-green-600 bg-green-50', icon: <CheckCircle className="w-3.5 h-3.5" /> },
  opened: { label: 'Opened', color: 'text-blue-600 bg-blue-50', icon: <CheckCircle className="w-3.5 h-3.5" /> },
  sent: { label: 'Sent', color: 'text-yellow-600 bg-yellow-50', icon: <Clock className="w-3.5 h-3.5" /> },
  failed: { label: 'Failed', color: 'text-red-600 bg-red-50', icon: <XCircle className="w-3.5 h-3.5" /> },
  bounced: { label: 'Bounced', color: 'text-orange-600 bg-orange-50', icon: <AlertCircle className="w-3.5 h-3.5" /> },
};

const channelIcon: Record<string, React.ReactNode> = {
  SMS: <MessageSquare className="w-4 h-4 text-[#1A1A1A]" />,
  Email: <Mail className="w-4 h-4 text-[#1A1A1A]" />,
  Push: <Bell className="w-4 h-4 text-[#1A1A1A]" />,
};

export default function DashboardPage() {
  const [filterChannel, setFilterChannel] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  const filtered = mockMessages.filter((m) => {
    const channelMatch = filterChannel === 'All' || m.channel === filterChannel;
    const statusMatch = filterStatus === 'All' || m.status === filterStatus;
    return channelMatch && statusMatch;
  });

  const totalSent = mockMessages.length;
  const delivered = mockMessages.filter((m) => m.status === 'delivered' || m.status === 'opened').length;
  const failed = mockMessages.filter((m) => m.status === 'failed' || m.status === 'bounced').length;
  const deliveryRate = Math.round((delivered / totalSent) * 100);

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-[#E5E7EB] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image src="/logo.png" alt="365" width={80} height={40} className="h-10 w-auto" />
              </Link>
            </div>
            <div className="hidden md:flex items-baseline space-x-4">
              <Link href="/" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/dashboard" className="text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </Link>
              <Link href="/send" className="bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white hover:opacity-90 px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-1">
                <Send className="w-4 h-4" /> Send Notification
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-[#1A1A1A]">Messaging Dashboard</h1>
            <p className="text-[#555555] mt-1">Real-time delivery tracking across all channels</p>
          </div>
          <Link
            href="/send"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-sm"
          >
            <Send className="w-4 h-4" /> Send Notification
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-[#555555] font-medium">Total Sent</p>
              <div className="w-8 h-8 bg-gradient-to-br from-[#F59E0B] to-[#F97316] rounded-full flex items-center justify-center">
                <Send className="w-4 h-4 text-white" />
              </div>
            </div>
            <p className="text-3xl font-extrabold text-[#1A1A1A]">24,891</p>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> +12% today</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-[#555555] font-medium">Delivery Rate</p>
              <div className="w-8 h-8 bg-[#EFE810] rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-[#1A1A1A]" />
              </div>
            </div>
            <p className="text-3xl font-extrabold text-[#1A1A1A]">{deliveryRate}%</p>
            <p className="text-xs text-green-600 mt-1">{delivered}/{totalSent} delivered</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-[#555555] font-medium">Active Channels</p>
              <div className="w-8 h-8 bg-[#EFE810] rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-[#1A1A1A]" />
              </div>
            </div>
            <p className="text-3xl font-extrabold text-[#1A1A1A]">3</p>
            <p className="text-xs text-[#555555] mt-1">SMS · Email · Push</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-[#555555] font-medium">Failed / Bounced</p>
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <XCircle className="w-4 h-4 text-red-500" />
              </div>
            </div>
            <p className="text-3xl font-extrabold text-[#1A1A1A]">{failed}</p>
            <p className="text-xs text-red-500 mt-1">Needs attention</p>
          </div>
        </div>

        {/* Channel Breakdown */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {['SMS', 'Email', 'Push'].map((ch) => {
            const chMsgs = mockMessages.filter((m) => m.channel === ch);
            const chDelivered = chMsgs.filter((m) => m.status === 'delivered' || m.status === 'opened').length;
            const chRate = chMsgs.length > 0 ? Math.round((chDelivered / chMsgs.length) * 100) : 0;
            return (
              <div key={ch} className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#EFE810] rounded-full flex items-center justify-center">
                    {channelIcon[ch]}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">{ch}</p>
                    <p className="text-xs text-[#555555]">{chMsgs.length} messages</p>
                  </div>
                  <span className="ml-auto text-lg font-extrabold text-[#1A1A1A]">{chRate}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-[#EFE810] h-2 rounded-full transition-all"
                    style={{ width: `${chRate}%` }}
                  ></div>
                </div>
                <p className="text-xs text-[#555555] mt-2">Delivery rate</p>
              </div>
            );
          })}
        </div>

        {/* Message Log */}
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB]">
          <div className="p-6 border-b border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#1A1A1A]" />
              <h2 className="text-lg font-bold text-[#1A1A1A]">Message Log</h2>
            </div>
            <div className="flex gap-3 sm:ml-auto flex-wrap">
              <select
                value={filterChannel}
                onChange={(e) => setFilterChannel(e.target.value)}
                className="text-sm border border-[#E5E7EB] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#EFE810]"
              >
                <option value="All">All Channels</option>
                <option value="SMS">SMS</option>
                <option value="Email">Email</option>
                <option value="Push">Push</option>
              </select>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="text-sm border border-[#E5E7EB] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#EFE810]"
              >
                <option value="All">All Statuses</option>
                <option value="delivered">Delivered</option>
                <option value="opened">Opened</option>
                <option value="sent">Sent</option>
                <option value="failed">Failed</option>
                <option value="bounced">Bounced</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F9F9F9] border-b border-[#E5E7EB]">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#555555] uppercase tracking-wider">Channel</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#555555] uppercase tracking-wider">Recipient</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#555555] uppercase tracking-wider">Message</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#555555] uppercase tracking-wider">Status</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#555555] uppercase tracking-wider">Sent At</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {filtered.map((msg) => {
                  const sc = statusConfig[msg.status];
                  return (
                    <tr key={msg.id} className="hover:bg-[#F9F9F9] transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 bg-[#EFE810] rounded-full flex items-center justify-center flex-shrink-0">
                            {channelIcon[msg.channel]}
                          </div>
                          <span className="font-medium text-[#1A1A1A]">{msg.channel}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[#555555] font-mono text-xs">{msg.recipient}</td>
                      <td className="px-6 py-4 text-[#1A1A1A] max-w-xs truncate">{msg.subject}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${sc.color}`}>
                          {sc.icon} {sc.label}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[#555555] text-xs whitespace-nowrap">{msg.sentAt}</td>
                    </tr>
                  );
                })}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-[#555555]">
                      No messages match the selected filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 border-t border-[#E5E7EB] flex items-center justify-between text-sm text-[#555555]">
            <span>Showing {filtered.length} of {mockMessages.length} messages</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live updates</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <Link href="/send" className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB] hover:border-[#EFE810] transition-colors flex items-center gap-4">
            <div className="w-12 h-12 bg-[#EFE810] rounded-full flex items-center justify-center flex-shrink-0">
              <Send className="w-6 h-6 text-[#1A1A1A]" />
            </div>
            <div>
              <p className="font-semibold text-[#1A1A1A]">Send Notification</p>
              <p className="text-sm text-[#555555]">Compose and send a new message</p>
            </div>
          </Link>
          <Link href="/logs" className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB] hover:border-[#EFE810] transition-colors flex items-center gap-4">
            <div className="w-12 h-12 bg-[#EFE810] rounded-full flex items-center justify-center flex-shrink-0">
              <BarChart3 className="w-6 h-6 text-[#1A1A1A]" />
            </div>
            <div>
              <p className="font-semibold text-[#1A1A1A]">Delivery Logs</p>
              <p className="text-sm text-[#555555]">Full history with advanced filters</p>
            </div>
          </Link>
          <Link href="/signup" className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB] hover:border-[#EFE810] transition-colors flex items-center gap-4">
            <div className="w-12 h-12 bg-[#EFE810] rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-[#1A1A1A]" />
            </div>
            <div>
              <p className="font-semibold text-[#1A1A1A]">Manage Contacts</p>
              <p className="text-sm text-[#555555]">Opt-in lists and segments</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
