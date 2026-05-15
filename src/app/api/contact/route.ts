import { Resend } from "resend";

export const runtime = "nodejs";

type ContactRequestBody = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactRequestBody;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, message: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return Response.json(
      { success: false, message: "Missing required fields" },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.RESEND_TO ?? process.env.EMAIL;
  const fromEmail = process.env.RESEND_FROM;

  if (!apiKey) {
    return Response.json(
      { success: false, message: "Server email is not configured" },
      { status: 500 }
    );
  }

  if (!toEmail) {
    return Response.json(
      { success: false, message: "Server email is not configured" },
      { status: 500 }
    );
  }

  if (!fromEmail) {
    return Response.json(
      {
        success: false,
        message:
          "Server email is not configured (missing RESEND_FROM sender address)",
      },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return Response.json({ success: true, message: "Email sent" });
  } catch (error) {
    console.error("Error sending contact email", error);
    return Response.json(
      { success: false, message: "Error sending email" },
      { status: 500 }
    );
  }
}
