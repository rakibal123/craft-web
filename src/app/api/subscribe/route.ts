import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Thanks for subscribing! 💚', email },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Subscription failed. Please try again later.' },
      { status: 500 }
    );
  }
}
