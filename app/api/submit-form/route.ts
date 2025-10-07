import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const data = {
      product: formData.get('product') as string,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };

    const subject = data.product
      ? `Quote request for ${data.product}`
      : 'General quote request from website';

    const emailHtml = `
      <h2>${subject}</h2>
      <p><strong>Product:</strong> ${data.product || 'General Quote'}</p>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message || 'N/A'}</p>
    `;

    const emailTo = process.env.NEXT_PUBLIC_FORM_EMAIL || '';

    if (!emailTo) {
      return NextResponse.json(
        { success: false, message: 'Form email not configured' },
        { status: 500 }
      );
    }

    const emailOptions = {
      from: 'Next Level Promotions <noreply@notifications.nextlevelpromotions.com.au>',
      to: emailTo,
      subject: subject,
      html: emailHtml,
      replyTo: data.email, // Allow replying directly to the customer
    };

    const result = await resend.emails.send(emailOptions);

    console.log('Email sent:', result);

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Form submission error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Error submitting form';
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}
