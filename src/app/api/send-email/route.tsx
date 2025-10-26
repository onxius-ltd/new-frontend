import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
      try {
            const { name, email, phone, project, subject, message } = await req.json();

            // ✅ Configure your SMTP transporter
            const transporter = nodemailer.createTransport({
                  host: process.env.SMTP_HOST, // e.g. mail.onxius.com
                  port: Number(process.env.SMTP_PORT) || 465,
                  secure: true, // true for port 465
                  auth: {
                        user: process.env.SMTP_USER, // e.g. no-reply@onxius.com
                        pass: process.env.SMTP_PASS,
                  },
            });

            // ✅ Email details
            await transporter.sendMail({
                  from: `"${name}" <${email}>`,
                  to: process.env.RECEIVER_EMAIL, // your business inbox
                  subject: subject || "New Contact Message",
                  html: `
        <h3>New Message from Onxius Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project:</strong> ${project}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
            });

            return NextResponse.json({ success: true, message: "Email sent successfully!" });
      } catch (error) {
            console.error("Email sending error:", error);
            return NextResponse.json(
                  { success: false, message: "Email failed to send" },
                  { status: 500 }
            );
      }
}
