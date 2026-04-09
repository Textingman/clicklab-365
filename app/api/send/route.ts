import { NextRequest, NextResponse } from 'next/server';

export interface SendMessageRequest {
  channel: 'SMS' | 'Email' | 'Push';
  recipient: string;
  subject?: string;
  message: string;
  type: string;
  priority?: 'normal' | 'high' | 'critical';
}

export interface SendMessageResponse {
  success: boolean;
  messageId: string;
  channel: string;
  recipient: string;
  status: 'queued' | 'sent' | 'failed';
  timestamp: string;
  estimatedDelivery: string;
  error?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: SendMessageRequest = await request.json();

    // Validate required fields
    if (!body.channel || !body.recipient || !body.message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: channel, recipient, message' },
        { status: 400 }
      );
    }

    // Validate channel
    if (!['SMS', 'Email', 'Push'].includes(body.channel)) {
      return NextResponse.json(
        { success: false, error: 'Invalid channel. Must be SMS, Email, or Push.' },
        { status: 400 }
      );
    }

    // Validate recipient format per channel
    if (body.channel === 'SMS') {
      const phoneRegex = /^\+?[\d\s\-().]{7,20}$/;
      if (!phoneRegex.test(body.recipient)) {
        return NextResponse.json(
          { success: false, error: 'Invalid phone number format for SMS channel.' },
          { status: 400 }
        );
      }
    }

    if (body.channel === 'Email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.recipient)) {
        return NextResponse.json(
          { success: false, error: 'Invalid email address format.' },
          { status: 400 }
        );
      }
      if (!body.subject) {
        return NextResponse.json(
          { success: false, error: 'Subject is required for Email channel.' },
          { status: 400 }
        );
      }
    }

    // Simulate message ID generation
    const messageId = `msg_${Date.now().toString(36).toUpperCase()}_${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    const now = new Date();
    const estimatedDelivery = new Date(now.getTime() + 1500);

    // Simulate occasional failures for realism (5% failure rate)
    const shouldFail = Math.random() < 0.05;

    if (shouldFail) {
      return NextResponse.json(
        {
          success: false,
          messageId,
          channel: body.channel,
          recipient: body.recipient,
          status: 'failed',
          timestamp: now.toISOString(),
          estimatedDelivery: '—',
          error: 'Carrier temporarily unavailable. Please retry.',
        } satisfies SendMessageResponse,
        { status: 503 }
      );
    }

    const response: SendMessageResponse = {
      success: true,
      messageId,
      channel: body.channel,
      recipient: body.recipient,
      status: 'queued',
      timestamp: now.toISOString(),
      estimatedDelivery: estimatedDelivery.toISOString(),
    };

    return NextResponse.json(response, { status: 200 });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    service: '365 Messaging API',
    version: '1.0.0',
    channels: ['SMS', 'Email', 'Push'],
    status: 'operational',
    endpoints: {
      send: 'POST /api/send',
      status: 'GET /api/status/:messageId',
      logs: 'GET /api/logs',
    },
  });
}
