import { EmailTemplate } from './../../_components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const response = await req.json()
  try {
    const { data, error } = await resend.emails.send({
      from: 'Shaheb Ali [Fullstack NextJS developer] <filesharingapp@resend.dev>',
      to: [`${response.receiverEmail}`],
      subject: "A File shared with you by " + response.receiverEmail,
      react: EmailTemplate({ response }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}