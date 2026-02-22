import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, project, message, budget, captchaToken } = await req.json();

    if (!captchaToken) {
      return NextResponse.json(
        { success: false, message: "Captcha is required" },
        { status: 400 }
      );
    }

    // -------------------------------
    // 1️⃣ Verify reCAPTCHA v2 token
    // -------------------------------
    const secretKey = process.env.RECAPTCHA_SECRET_KEY!;
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

    const captchaRes = await fetch(verificationUrl, { method: "POST" });
    const captchaData = await captchaRes.json();

    if (!captchaData.success) {
      return NextResponse.json(
        { success: false, message: "Captcha verification failed" },
        { status: 400 }
      );
    }

    // -------------------------------
    // 2️⃣ Send Email
    // -------------------------------
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Contact Message",
      html: `
<div style="margin:0; padding:0; background-color:#f4f6f9; font-family:Arial, Helvetica, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" 
          style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 5px 20px rgba(0,0,0,0.05);">
          
          <!-- Header -->
          <tr>
            <td style="background:#1E3A8A; padding:30px; text-align:center;">
              <img 
                src="https://onxius.com/assets%2Flogo%2flight-logo.png" 
                alt="Onxius Logo" 
                width="150"
                style="display:block; margin:0 auto 15px auto;"
              />
              <h2 style="color:#ffffff; margin:0; font-weight:500;">
                New Contact Form Submission
              </h2>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px; color:#333333; font-size:15px; line-height:1.6;">
              <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
                <tr><td style="background:#f8fafc;"><strong>Name</strong></td><td>${name}</td></tr>
                <tr><td style="background:#f8fafc;"><strong>Email</strong></td><td>${email}</td></tr>
                <tr><td style="background:#f8fafc;"><strong>Phone</strong></td><td>${phone}</td></tr>
                <tr><td style="background:#f8fafc;"><strong>Project</strong></td><td>${project}</td></tr>
                <tr><td style="background:#f8fafc;"><strong>Budget</strong></td><td>£${budget}</td></tr>
              </table>

              <div style="margin-top:25px;">
                <h3 style="margin-bottom:10px;">Message</h3>
                <div style="background:#f1f5f9; padding:15px; border-radius:8px;">
                  ${message}
                </div>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc; padding:20px; text-align:center; font-size:13px; color:#64748b;">
              © ${new Date().getFullYear()} Onxius. All rights reserved. <br/>
              This message was sent from your website contact form.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</div>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error in send-email API:", error);
    return NextResponse.json(
      { success: false, message: "Server error occurred" },
      { status: 500 }
    );
  }
}