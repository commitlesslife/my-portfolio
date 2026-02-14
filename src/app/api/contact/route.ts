import { NextResponse } from 'next/server';

// This function handles POST requests to /api/contact
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // 1. Validation (The "Senior" Check)
    // Never trust client-side data. Always validate on the server.
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 2. Simulate Sending Email (The Logic)
    // In a real app, you would use a service like 'Resend' or 'Nodemailer' here.
    // For now, we log it to the server console to prove it works.
    console.log('--- NEW MESSAGE RECEIVED ---');
    console.log(`From: ${name} (${email})`);
    console.log(`Message: ${message}`);
    console.log('----------------------------');

    // 3. Return Success Response
    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
