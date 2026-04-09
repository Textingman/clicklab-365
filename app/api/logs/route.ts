import { NextRequest, NextResponse } from 'next/server';

const mockLogs = [
  { id: 'msg_001', channel: 'SMS', recipient: '+1 (555) 234-5678', subject: 'Order Confirmation #4821', type: 'Order Confirmation', status: 'delivered', sentAt: '2026-04-09T03:18:22Z', deliveredAt: '2026-04-09T03:18:23Z', latency: '1.1s' },
  { id: 'msg_002', channel: 'Email', recipient: 'sarah@example.com', subject: 'Your receipt from 365', type: 'Payment Receipt', status: 'opened', sentAt: '2026-04-09T03:17:10Z', deliveredAt: '2026-04-09T03:17:11Z', latency: '0.9s' },
  { id: 'msg_003', channel: 'Push', recipient: 'Device: iPhone 15 Pro', subject: 'Your package is out for delivery', type: 'Shipping Update', status: 'delivered', sentAt: '2026-04-09T03:15:44Z', deliveredAt: '2026-04-09T03:15:45Z', latency: '0.7s' },
  { id: 'msg_004', channel: 'SMS', recipient: '+1 (555) 987-6543', subject: 'Your OTP code: 847291', type: 'OTP / 2FA Code', status: 'delivered', sentAt: '2026-04-09T03:14:02Z', deliveredAt: '2026-04-09T03:14:03Z', latency: '0.8s' },
  { id: 'msg_005', channel: 'Email', recipient: 'james@corp.com', subject: 'Password reset request', type: 'Password Reset', status: 'bounced', sentAt: '2026-04-09T03:12:55Z', deliveredAt: null, latency: null },
  { id: 'msg_006', channel: 'Push', recipient: 'Device: Pixel 8', subject: 'Payment received: $129.00', type: 'Payment Receipt', status: 'delivered', sentAt: '2026-04-09T03:11:30Z', deliveredAt: '2026-04-09T03:11:31Z', latency: '0.6s' },
  { id: 'msg_007', channel: 'SMS', recipient: '+1 (555) 321-0987', subject: 'Appointment reminder: Tomorrow 2pm', type: 'Appointment Reminder', status: 'failed', sentAt: '2026-04-09T03:10:15Z', deliveredAt: null, latency: null },
  { id: 'msg_008', channel: 'Email', recipient: 'billing@acme.com', subject: 'Invoice #INV-2026-0041', type: 'Payment Receipt', status: 'delivered', sentAt: '2026-04-09T03:09:00Z', deliveredAt: '2026-04-09T03:09:02Z', latency: '1.8s' },
  { id: 'msg_009', channel: 'SMS', recipient: '+1 (555) 654-3210', subject: 'Shipping update: In transit', type: 'Shipping Update', status: 'delivered', sentAt: '2026-04-09T03:07:44Z', deliveredAt: '2026-04-09T03:07:45Z', latency: '0.9s' },
  { id: 'msg_010', channel: 'Push', recipient: 'Device: Samsung S24', subject: 'New login detected on your account', type: 'Account Alert', status: 'delivered', sentAt: '2026-04-09T03:06:20Z', deliveredAt: '2026-04-09T03:06:21Z', latency: '0.7s' },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const channel = searchParams.get('channel');
  const status = searchParams.get('status');
  const type = searchParams.get('type');
  const limit = parseInt(searchParams.get('limit') || '50', 10);
  const offset = parseInt(searchParams.get('offset') || '0', 10);

  let filtered = [...mockLogs];

  if (channel && channel !== 'all') {
    filtered = filtered.filter((m) => m.channel.toLowerCase() === channel.toLowerCase());
  }
  if (status && status !== 'all') {
    filtered = filtered.filter((m) => m.status.toLowerCase() === status.toLowerCase());
  }
  if (type && type !== 'all') {
    filtered = filtered.filter((m) => m.type.toLowerCase() === type.toLowerCase());
  }

  const total = filtered.length;
  const paginated = filtered.slice(offset, offset + limit);

  return NextResponse.json({
    success: true,
    total,
    limit,
    offset,
    data: paginated,
    stats: {
      total: mockLogs.length,
      delivered: mockLogs.filter((m) => m.status === 'delivered').length,
      opened: mockLogs.filter((m) => m.status === 'opened').length,
      failed: mockLogs.filter((m) => m.status === 'failed').length,
      bounced: mockLogs.filter((m) => m.status === 'bounced').length,
      deliveryRate: `${Math.round(
        (mockLogs.filter((m) => m.status === 'delivered' || m.status === 'opened').length / mockLogs.length) * 100
      )}%`,
    },
  });
}
