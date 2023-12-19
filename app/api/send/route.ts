import { EmailTemplate } from './../../_components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const response = await request.json()
console.log(response, 'I am request')
  const name = response.userEmail.split("@")[0]
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['wwwdonus@gmail.com'],
      subject: 'A file has been shared with you from Filesharing App',
      react: EmailTemplate({ data:response }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
