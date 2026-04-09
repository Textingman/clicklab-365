'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  MessageSquare, Mail, Bell, CheckCircle, XCircle,
  Clock, AlertCircle, ArrowLeft, Search, Download, RefreshCw
} from 'lucide-react';

const allLogs = [
  { id: 'msg_001', channel: 'SMS', recipient: '+1 (555) 234-5678', subject: 'Order Confirmation #4821', type: 'Order Confirmation', status: 'delivered', sentAt: '2026-04-09 03:18:22', deliveredAt: '2026-04-09 03:18:23', latency: '1.1s' },
  { id: 'msg_002', channel: 'Email', recipient: 'sarah@example.com', subject: 'Your receipt from 365', type: 'Payment Receipt', status: 'opened', sentAt: '2026-04-09 03:17:10', deliveredAt: '2026-04-09 03:17:11', latency: '0.9s' },
  { id: 'msg_003', channel: 'Push', recipient: 'Device: iPhone 15 Pro', subject: 'Your package is out for delivery', type: 'Shipping Update', status: 'delivered', sentAt: '2026-04-09 03:15:44', deliveredAt: '2026-04-09 03:15:45', latency: '0.7s' },
  { id: 'msg_004', channel: 'SMS', recipient: '+1 (555) 987-6543', subject: 'Your OTP code: 847291', type: 'OTP / 2FA Code', status: 'delivered', sentAt: '2026-04-09 03:14:02', deliveredAt: '2026-04-09 03:14:03', latency: '0.8s' },
  { id: 'msg_005', channel: 'Email', recipient: 'james@corp.com', subject: 'Password reset request', type: 'Password Reset', status: 'bounced', sentAt: '2026-04-09 03:12:55', deliveredAt: '—', latency: '—' },
  { id: 'msg_006', channel: 'Push', recipient: 'Device: Pixel 8', subject: 'Payment received: $129.00', type: 'Payment Receipt', status: 'delivered', sentAt: '2026-04-09 03:11:30', deliveredAt: '2026-04-09 03:11:31', latency: '0.6s' },
  { id: 'msg_007', channel: 'SMS', recipient: '+1 (555) 321-0987', subject: 'Appointment reminder: Tomorrow 2pm', type: 'Appointment Reminder', status: 'failed', sentAt: '2026-04-09 03:10:15', deliveredAt: '—', latency: '—' },
  { id: 'msg_008', channel: 'Email', recipient: 'billing@acme.com', subject: 'Invoice #INV-2026-0041', type: 'Payment Receipt', status: 'delivered', sentAt: '2026-04-09 03:09:00', deliveredAt: '2026-04-09 03:09:02', latency: '1.8s' },
  { id: 'msg_009', channel: 'SMS', recipient: '+1 (555) 654-3210', subject: 'Shipping update: In transit', type: 'Shipping Update', status: 'delivered', sentAt: '2026-04-09 03:07:44', deliveredAt: '2026-04-09 03:07:45', latency: '0.9s' },
  { id: 'msg_010', channel: 'Push', recipient: 'Device: Samsung S24', subject: 'New login detected on your account', type: 'Account Alert', status: 'delivered', sentAt: '2026-04-09 03:06:20', deliveredAt: '2026-04-09 03:06:21', latency: '0.7s' },
  { id: 'msg_011', channel: 'Email', recipient: 'mike@startup.io', subject: 'Welcome to 365!', type: 'Account Alert', status: 'opened', sentAt: '2026-04-09 03:05:10', deliveredAt: '2026-04-09 03:05:11', latency: '1.0s' },
  { id: 'msg_012', channel: 'SMS', recipient: '+1 (555) 111-2222', subject: 'Your order has shipped!', type: 'Shipping Update', status: 'delivered', sentAt: '2026-04-09 03:04:00', deliveredAt: '2026-04-09 03:04:01', latency: '0.8s' },
  { id: 'msg_013', channel: 'Push', recipient: 'Device: iPad Pro', subject: 'Your subscription renews tomorrow', type: 'Account Alert', status: 'delivered', sentAt: '2026-04-09 03:02:45', deliveredAt: '2026-04-09 03:02:46', latency: '0.6s' },
  { id: 'msg_014', channel: 'Email', recipient: 'anna@company.com', subject: 'Fraud alert: Unusual activity', type: 'Fraud Alert', status: 'delivered', sentAt: '2026-04-09 03:01:30', deliveredAt: '2026-04-09 03:01:31', latency: '1.2s' },
  { id: 'msg_015', channel: 'SMS', recipient: '+1 (555) 333-4444', subject: 'Your delivery is arriving today', type: 'Delivery Alert', status: 'delivered', sentAt: '2026-04-09 03:00:15', deliveredAt: '2026-04-09 03:00:16', latency: '0.9s' },
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

export default function LogsPage() {
  const [search, setSearch] = useState('');
  const [filterChannel, setFilterChannel] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = allLogs.filter((m) => {
    const channelMatch = filterChannel === 'All' || m.channel === filterChannel;
    const statusMatch = filterStatus === 'All' || m.status === filterStatus;
    const typeMatch = filterType === 'All' || m.type === filterType;
    const searchMatch =
      search === '' ||
      m.recipient.toLowerCase().includes(search.toLowerCase()) ||
      m.subject.toLowerCase().includes(search.toLowerCase()) ||
      m.id.toLowerCase().includes(search.toLowerCase());
    return channelMatch && statusMatch && typeMatch && searchMatch;
  });

  const uniqueTypes = Array.from(new Set(allLogs.map((m) => m.type)));

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
              <Link href="/logs" className="text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">Logs</Link>
              <Link href="/send" className="bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white hover:opacity-90 px-4 py-2 rounded-md text-sm font-semibold">
                Send Notification
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back link */}
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-[#555555] hover:text-[#1A1A1A] mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-[#1A1A1A]">Delivery Logs</h1>
            <p className="text-[#555555] mt-1">Full message history with delivery status and latency</p>
          </div>
          <div className="flex gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E5E7EB] rounded-lg text-sm font-medium text-[#555555] hover:border-[#EFE810] transition-colors">
              <RefreshCw className="w-4 h-4" /> Refresh
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E5E7EB] rounded-lg text-sm font-medium text-[#555555] hover:border-[#EFE810] transition-colors">
              <Download className="w-4 h-4" /> Export CSV
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          {[
            { label: 'Total', count: allLogs.length, color: 'text-[#1A1A1A]' },
            { label: 'Delivered', count: allLogs.filter(m => m.status === 'delivered').length, color: 'text-green-600' },
            { label: 'Opened', count: allLogs.filter(m => m.status === 'opened').length, color: 'text-blue-600' },
            { label: 'Failed', count: allLogs.filter(m => m.status === 'failed').length, color: 'text-red-600' },
            { label: 'Bounced', count: allLogs.filter(m => m.status === 'bounced').length, color: 'text-orange-600' },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm border border-[#E5E7EB] text-center">
              <p className={`text-2xl font-extrabold ${s.color}`}>{s.count}</p>
              <p className="text-xs text-[#555555] mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] p-4 mb-4">
          <div className="flex flex-wrap gap-3 items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by recipient, message, or ID..."
                className="w-full pl-9 pr-4 py-2 text-sm border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EFE810]"
              />
            </div>
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
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="text-sm border border-[#E5E7EB] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#EFE810]"
            >
              <option value="All">All Types</option>
              {uniqueTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Logs Table */}
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F9F9F9] border-b border-[#E5E7EB]">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#555555] uppercase tracking-wider">ID</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#555555] uppercase tracking-wider">Channel</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#555555] uppercase tracking-wider">Recipient</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#555555] uppercase tracking-wider">Message</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#555555] uppercase tracking-wider">Type</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#555555] uppercase tracking-wider">Status</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#555555] uppercase tracking-wider">Latency</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#555555] uppercase tracking-wider">Sent At</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {filtered.map((msg) => {
                  const sc = statusConfig[msg.status];
                  const isExpanded = expanded === msg.id;
                  return (
                    <>
                      <tr
                        key={msg.id}
                        className="hover:bg-[#F9F9F9] transition-colors cursor-pointer"
                        onClick={() => setExpanded(isExpanded ? null : msg.id)}
                      >
                        <td className="px-6 py-4 font-mono text-xs text-[#555555]">{msg.id}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 bg-[#EFE810] rounded-full flex items-center justify-center flex-shrink-0">
                              {channelIcon[msg.channel]}
                            </div>
                            <span className="font-medium text-[#1A1A1A]">{msg.channel}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-[#555555] font-mono text-xs">{msg.recipient}</td>
                        <td className="px-6 py-4 text-[#1A1A1A] max-w-[200px] truncate">{msg.subject}</td>
                        <td className="px-6 py-4 text-xs text-[#555555]">{msg.type}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${sc.color}`}>
                            {sc.icon} {sc.label}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-xs text-[#555555]">{msg.latency}</td>
                        <td className="px-6 py-4 text-[#555555] text-xs whitespace-nowrap">{msg.sentAt}</td>
                      </tr>
                      {isExpanded && (
                        <tr key={`${msg.id}-detail`} className="bg-[#FFFDE7]">
                          <td colSpan={8} className="px-6 py-4">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                              <div>
                                <p className="font-semibold text-[#1A1A1A] mb-1">Message ID</p>
                                <p className="font-mono text-[#555555]">{msg.id}</p>
                              </div>
                              <div>
                                <p className="font-semibold text-[#1A1A1A] mb-1">Sent At</p>
                                <p className="text-[#555555]">{msg.sentAt}</p>
                              </div>
                              <div>
                                <p className="font-semibold text-[#1A1A1A] mb-1">Delivered At</p>
                                <p className="text-[#555555]">{msg.deliveredAt}</p>
                              </div>
                              <div>
                                <p className="font-semibold text-[#1A1A1A] mb-1">Delivery Latency</p>
                                <p className="text-[#555555]">{msg.latency}</p>
                              </div>
                              <div className="col-span-2">
                                <p className="font-semibold text-[#1A1A1A] mb-1">Full Message</p>
                                <p className="text-[#555555]">{msg.subject}</p>
                              </div>
                              <div>
                                <p className="font-semibold text-[#1A1A1A] mb-1">Notification Type</p>
                                <p className="text-[#555555]">{msg.type}</p>
                              </div>
                              <div>
                                <p className="font-semibold text-[#1A1A1A] mb-1">Final Status</p>
                                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-semibold ${sc.color}`}>
                                  {sc.icon} {sc.label}
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  );
                })}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={8} className="px-6 py-12 text-center text-[#555555]">
                      No messages match the selected filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 border-t border-[#E5E7EB] flex items-center justify-between text-sm text-[#555555]">
            <span>Showing {filtered.length} of {allLogs.length} messages · Click a row to expand details</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
