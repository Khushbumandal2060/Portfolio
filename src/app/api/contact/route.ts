import { Resend } from "resend";

export const runtime = "nodejs";

type ContactRequestBody = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactRequestBody;

  // Parse JSON safely
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

  // Validate input
  if (!name || !email || !message) {
    return Response.json(
      { success: false, message: "Missing required fields" },
      { status: 400 }
    );
  }

  // Environment variables
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.RESEND_TO;

  if (!apiKey) {
    return Response.json(
      { success: false, message: "Missing RESEND_API_KEY" },
      { status: 500 }
    );
  }

  if (!toEmail) {
    return Response.json(
      { success: false, message: "Missing RESEND_TO email" },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    // Send email
    const result = await resend.emails.send({
      from: "Portfolio <contact@khushbumandal.com.np>", // FIXED (important)
      to: toEmail,
      subject: `📬 New message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family:Arial;padding:20px;background:#f9fafb;border-radius:10px">
          
          <h2 style="color:#111827;">New Contact Message</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> 
            <a href="mailto:${email}">${email}</a>
          </p>

          <p><strong>Message:</strong></p>

          <div style="padding:12px;background:white;border-left:4px solid #6366f1;">
            ${message}
          </div>

        </div>
      `,
    });

    console.log("EMAIL SENT SUCCESS:", result);

    return Response.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to send email",
      },
      { status: 500 }
    );
  }
}