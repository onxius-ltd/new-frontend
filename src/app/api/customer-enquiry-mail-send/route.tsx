import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ─── Types ────────────────────────────────────────────────────────────────────
interface CallSchedule {
  date: string;
  time: string;
}

interface FormPayload {
  // Personal info
  name: string;
  email: string;
  countryCode: string;          // e.g. "+44"
  phone: string;                // raw number digits
  phoneCountryCode: string;     // same as countryCode, sent explicitly
  phoneNumber: string;          // same as phone, sent explicitly
  phoneFullNumber: string;      // e.g. "+447911123456" — assembled by the form

  // Project
  "business-name": string;
  project: string;
  "service-type": string;                       // "Yes, update existing" | "No, build new"
  "existing-app-web-link-update"?: string;
  "business-logo"?: string | null;              // filename only (File stripped client-side)

  // Business details
  "business-location": string;
  "business-scope": string;

  // Technical
  "domain-and-hosting": string;                 // "Yes" | "No"
  "want-hosting-from-us"?: string;              // "Yes" | "No" — only present when domain-and-hosting === "No"
  "existing-domain-link"?: string;              // only present when domain-and-hosting === "Yes"
  "application-type": string[];                 // multi-select array
  "other-application-type"?: string;

  // Features
  "website-features": string[];
  "language-options": string[];

  // Design
  "sample-sites": string[];

  // Content & media
  "website-content": string;
  "media-content": string;
  "project-brief": string;

  // Admin & support
  "admin-panel": string;
  "on-going-maintenance": string;
  "admin-panel-brief": string;

  // Budget
  budget: string;
  message?: string;

  // Schedule & captcha
  "call-schedule": CallSchedule;
  captchaToken: string;
}

// ─── reCAPTCHA Verification Types ─────────────────────────────────────────────
interface RecaptchaResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  score?: number;
  action?: string;
  error_codes?: string[];
}

// ─── Helper: standard data row ────────────────────────────────────────────────
const row = (label: string, value: string | undefined | null, highlight = false) => {
  if (!value) return "";
  return `
    <tr>
      <td width="200" style="padding:10px 14px;background:${highlight ? "#fff7f0" : "#f8fafc"};font-weight:600;color:#5c606d;font-size:13px;border-bottom:1px solid #ede9e3;vertical-align:top;">
        ${label}
      </td>
      <td style="padding:10px 14px;color:#303347;font-size:13px;border-bottom:1px solid #ede9e3;vertical-align:top;">
        ${value}
      </td>
    </tr>`;
};

// ─── Helper: tag pills ────────────────────────────────────────────────────────
const tagList = (items: string[]) =>
  items.length === 0
    ? "<em style='color:#9ca3af;font-size:13px;'>None selected</em>"
    : items
      .map(
        (item) =>
          `<span style="display:inline-block;background:#fff4f0;color:#e8521a;border:1px solid #fbc9b2;border-radius:20px;padding:3px 10px;font-size:11px;margin:2px 3px 2px 0;">${item}</span>`
      )
      .join("");

// ─── Helper: section heading ──────────────────────────────────────────────────
const section = (title: string) => `
  <tr>
    <td colspan="2"
      style="padding:18px 14px 8px 18px;background:#ffffff;border-left:4px solid #e8521a;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#e8521a;">
      ${title}
    </td>
  </tr>`;

// ─── Admin email ──────────────────────────────────────────────────────────────
function buildAdminEmail(d: FormPayload): string {
  const schedule = d["call-schedule"];
  const hasSchedule = schedule?.date && schedule?.time;

  const isUpdating = d["service-type"] === "Yes, update existing";
  const hasOwnDomain = d["domain-and-hosting"] === "Yes";
  const hasNoDomain = d["domain-and-hosting"] === "No";
  const isOtherApp = (d["application-type"] ?? []).includes("Other");
  const hasSampleSites = (d["sample-sites"] ?? []).length > 0;

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
  <tr>
    <td align="center">
      <table width="640" cellpadding="0" cellspacing="0"
        style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 5px 20px rgba(0,0,0,0.07);">

        <!-- Header -->
        <tr>
          <td style="background:#e8521a;padding:28px 30px;text-align:center;">
            <img src="cid:logo-image" alt="Onxius" width="140"
              style="display:block;margin:0 auto 14px;"/>
            <h2 style="color:#fff;margin:0;font-size:20px;font-weight:600;">New Project Enquiry</h2>
            <p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:13px;">
              Received ${new Date().toLocaleString("en-GB", { dateStyle: "full", timeStyle: "short" })}
            </p>
          </td>
        </tr>

        ${hasSchedule ? `
        <!-- Call Schedule banner -->
        <tr>
          <td style="background:#fff4f0;padding:14px 20px;border-left:4px solid #e8521a;">
            <strong style="color:#e8521a;font-size:13px;">📞 Preferred Call Time:</strong>
            <span style="color:#303347;font-size:13px;margin-left:8px;">${schedule.date} &nbsp;·&nbsp; ${schedule.time}</span>
          </td>
        </tr>` : ""}

        <!-- Data table -->
        <tr>
          <td style="padding:10px 0 20px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">

              ${section("Personal Info")}
              ${row("Name", d.name)}
              ${row("Email", `<a href="mailto:${d.email}" style="color:#e8521a;">${d.email}</a>`)}
              ${row("Phone", `<a href="tel:${d.phoneFullNumber}" style="color:#e8521a;">${d.phoneFullNumber}</a> &nbsp;<span style="color:#9ca3af;font-size:11px;">(${d.phoneCountryCode} ${d.phoneNumber})</span>`)}
              ${row("Business Name", d["business-name"])}

              ${section("Project Type")}
              ${row("Service Needed", d.project, true)}
              ${row("New Build or Update?", d["service-type"])}
              ${isUpdating ? row("Existing Site URL", d["existing-app-web-link-update"] ? `<a href="${d["existing-app-web-link-update"]}" style="color:#e8521a;">${d["existing-app-web-link-update"]}</a>` : undefined) : ""}
              ${d["business-logo"] ? row("Business Logo (filename)", d["business-logo"]) : ""}

              ${section("Business Details")}
              ${row("Location", d["business-location"])}
              ${row("Scope", d["business-scope"])}

              ${section("Technical Requirements")}
              ${row("Domain & Hosting", d["domain-and-hosting"])}
              ${hasNoDomain ? row("Purchase Hosting via Us?", d["want-hosting-from-us"]) : ""}
              ${hasOwnDomain ? row("Domain URL", d["existing-domain-link"] ? `<a href="${d["existing-domain-link"]}" style="color:#e8521a;">${d["existing-domain-link"]}</a>` : undefined) : ""}
              <tr>
                <td colspan="2" style="padding:10px 14px;border-bottom:1px solid #ede9e3;">
                  <div style="font-weight:600;color:#5c606d;font-size:13px;margin-bottom:8px;">Application Type(s)</div>
                  <div>${tagList(d["application-type"] ?? [])}</div>
                </td>
              </tr>
              ${isOtherApp ? row("Other App Type (described)", d["other-application-type"]) : ""}

              ${section("Features & Functionality")}
              <tr>
                <td colspan="2" style="padding:10px 14px;border-bottom:1px solid #ede9e3;">
                  <div style="font-weight:600;color:#5c606d;font-size:13px;margin-bottom:8px;">Selected Features</div>
                  <div>${tagList(d["website-features"] ?? [])}</div>
                </td>
              </tr>
              <tr>
                <td colspan="2" style="padding:10px 14px;border-bottom:1px solid #ede9e3;">
                  <div style="font-weight:600;color:#5c606d;font-size:13px;margin-bottom:8px;">Language Options</div>
                  <div>${tagList(d["language-options"] ?? [])}</div>
                </td>
              </tr>

              ${hasSampleSites ? `
              ${section("Design Inspiration")}
              <tr>
                <td colspan="2" style="padding:10px 14px;border-bottom:1px solid #ede9e3;">
                  <div style="font-weight:600;color:#5c606d;font-size:13px;margin-bottom:8px;">Sample Sites</div>
                  <div>${tagList(d["sample-sites"])}</div>
                </td>
              </tr>` : ""}

              ${section("Content & Media")}
              ${row("Write Website Content?", d["website-content"])}
              ${row("Professional Photos / Graphics?", d["media-content"])}
              <tr>
                <td colspan="2" style="padding:10px 14px;border-bottom:1px solid #ede9e3;">
                  <div style="font-weight:600;color:#5c606d;font-size:13px;margin-bottom:8px;">Project Brief</div>
                  <div style="background:#f8fafc;padding:12px;border-radius:8px;color:#303347;font-size:13px;line-height:1.7;white-space:pre-wrap;">${d["project-brief"]}</div>
                </td>
              </tr>

              ${section("Admin & Support")}
              ${row("Admin Panel Needed?", d["admin-panel"])}
              ${row("Ongoing Maintenance?", d["on-going-maintenance"])}
              <tr>
                <td colspan="2" style="padding:10px 14px;border-bottom:1px solid #ede9e3;">
                  <div style="font-weight:600;color:#5c606d;font-size:13px;margin-bottom:8px;">Admin Panel Brief</div>
                  <div style="background:#f8fafc;padding:12px;border-radius:8px;color:#303347;font-size:13px;line-height:1.7;white-space:pre-wrap;">${d["admin-panel-brief"]}</div>
                </td>
              </tr>

              ${section("Budget & Notes")}
              ${row("Budget Range", d.budget, true)}
              ${d.message ? `
              <tr>
                <td colspan="2" style="padding:10px 14px;border-bottom:1px solid #ede9e3;">
                  <div style="font-weight:600;color:#5c606d;font-size:13px;margin-bottom:8px;">Additional Notes</div>
                  <div style="background:#f8fafc;padding:12px;border-radius:8px;color:#303347;font-size:13px;line-height:1.7;white-space:pre-wrap;">${d.message}</div>
                </td>
              </tr>` : ""}

            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;padding:18px 30px;text-align:center;font-size:12px;color:#64748b;border-top:1px solid #ede9e3;">
            © ${new Date().getFullYear()} Onxius Studio · Project Enquiry System<br/>
            This message was submitted via the website quotation form.
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

// ─── Customer confirmation email ──────────────────────────────────────────────
function buildConfirmationEmail(name: string, schedule: CallSchedule): string {
  const hasSchedule = schedule?.date && schedule?.time;

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
  <tr>
    <td align="center">
      <table width="580" cellpadding="0" cellspacing="0"
        style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 5px 20px rgba(0,0,0,0.07);">

        <!-- Header -->
        <tr>
          <td style="background:#e8521a;padding:32px 40px;text-align:center;">
            <img src="cid:logo-image" alt="Onxius" width="140"
              style="display:block;margin:0 auto 14px;"/>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;color:#303347;">
            <h2 style="margin:0 0 8px;font-size:22px;font-weight:600;">Thank you, ${name}! 🎉</h2>
            <p style="margin:0 0 20px;color:#5c606d;font-size:14px;line-height:1.75;">
              We've received your project enquiry and we're excited to learn more about your vision.
            </p>

            <!-- Key message -->
            <div style="background:#fff4f0;border-left:4px solid #e8521a;border-radius:0 10px 10px 0;padding:16px 20px;margin-bottom:24px;">
              <p style="margin:0;color:#303347;font-size:14px;font-weight:500;line-height:1.7;">
                We will review your business needs and our team member will contact you with a
                full, tailored quotation plan within
                <strong style="color:#e8521a;">1–2 working days</strong>.
              </p>
            </div>

            ${hasSchedule ? `
            <!-- Call schedule confirmation -->
            <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:14px 18px;margin-bottom:24px;">
              <p style="margin:0;font-size:13px;color:#15803d;">
                📞 <strong>Your preferred call time has been noted:</strong><br/>
                <span style="margin-top:4px;display:inline-block;">${schedule.date} &nbsp;·&nbsp; ${schedule.time}</span>
              </p>
            </div>` : ""}

            <!-- Next steps -->
            <p style="margin:0 0 14px;font-size:14px;color:#5c606d;">Here's what happens next:</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="36" valign="top" style="padding-bottom:14px;">
                  <div style="width:28px;height:28px;background:#fff4f0;border-radius:50%;text-align:center;line-height:28px;font-size:12px;font-weight:700;color:#e8521a;">1</div>
                </td>
                <td style="padding-bottom:14px;padding-left:10px;font-size:13px;color:#303347;line-height:1.6;">
                  <strong>Our team reviews your brief</strong> — we carefully read every detail you've shared to understand your goals.
                </td>
              </tr>
              <tr>
                <td width="36" valign="top" style="padding-bottom:14px;">
                  <div style="width:28px;height:28px;background:#fff4f0;border-radius:50%;text-align:center;line-height:28px;font-size:12px;font-weight:700;color:#e8521a;">2</div>
                </td>
                <td style="padding-bottom:14px;padding-left:10px;font-size:13px;color:#303347;line-height:1.6;">
                  <strong>We prepare your quotation</strong> — a fully customised plan and pricing tailored specifically to your project.
                </td>
              </tr>
              <tr>
                <td width="36" valign="top">
                  <div style="width:28px;height:28px;background:#fff4f0;border-radius:50%;text-align:center;line-height:28px;font-size:12px;font-weight:700;color:#e8521a;">3</div>
                </td>
                <td style="padding-left:10px;font-size:13px;color:#303347;line-height:1.6;">
                  <strong>We contact you</strong>${hasSchedule ? ` at your preferred time (${schedule.date}, ${schedule.time})` : ""} to walk you through the plan and answer any questions.
                </td>
              </tr>
            </table>

            <p style="margin:24px 0 4px;font-size:14px;color:#5c606d;">
              If you have any urgent questions, feel free to reply to this email.
            </p>
            <p style="margin:0;font-size:14px;color:#303347;font-weight:600;">The Onxius Team</p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;padding:18px 40px;text-align:center;font-size:12px;color:#64748b;border-top:1px solid #ede9e3;line-height:1.8;">
            © ${new Date().getFullYear()} Onxius Studio · All rights reserved<br/>
            You received this email because you submitted an enquiry on our website.
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

// ─── Helper: Verify reCAPTCHA v2 with proper implementation ──────────────────
async function verifyRecaptcha(token: string): Promise<RecaptchaResponse> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    throw new Error("RECAPTCHA_SECRET_KEY is not set in environment variables");
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
      }
    );

    if (!response.ok) {
      throw new Error(`reCAPTCHA API returned status ${response.status}`);
    }

    const data: RecaptchaResponse = await response.json();

    // Log detailed response for debugging
    console.log("reCAPTCHA Response:", {
      success: data.success,
      score: data.score,
      action: data.action,
      challenge_ts: data.challenge_ts,
      hostname: data.hostname,
      error_codes: data.error_codes,
    });

    // Validate response
    if (!data.success) {
      console.error("reCAPTCHA verification failed:", data.error_codes);
      return data;
    }

    // Optional: Check score for v3 (if using reCAPTCHA v3)
    // Adjust threshold as needed (0.0 to 1.0, higher = more likely human)
    if (data.score !== undefined && data.score < 0.5) {
      console.warn("reCAPTCHA score too low:", data.score);
      return { ...data, success: false };
    }

    return data;
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    throw error;
  }
}

// ─── Helper: Download and convert image to base64 ────────────────────────────
async function getLogoAsBase64(): Promise<{ content: string; contentType: string }> {
  try {
    const response = await fetch("https://onxius.com/assets%2Flogo%2Flight-logo.png");
    if (!response.ok) {
      throw new Error(`Failed to fetch logo: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");
    const contentType = response.headers.get("content-type") || "image/png";

    return { content: base64, contentType };
  } catch (error) {
    console.error("Error fetching logo:", error);
    // Return a placeholder or fallback
    return {
      content: "",
      contentType: "image/png",
    };
  }
}

// ─── Route handler ────────────────────────────────────────────────────────────
export async function POST(req: Request) {
  try {
    const data: FormPayload = await req.json();
    const { name, email, captchaToken, phoneFullNumber } = data;

    // 1. Presence check
    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required" },
        { status: 400 }
      );
    }

    if (!phoneFullNumber) {
      return NextResponse.json(
        { success: false, message: "Phone number is required" },
        { status: 400 }
      );
    }

    if (!captchaToken) {
      return NextResponse.json(
        { success: false, message: "Captcha is required" },
        { status: 400 }
      );
    }

    // 2. Verify reCAPTCHA v2 with proper implementation
    const captchaData = await verifyRecaptcha(captchaToken);

    if (!captchaData.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Captcha verification failed",
          errors: captchaData.error_codes,
        },
        { status: 400 }
      );
    }

    // 3. Fetch and prepare logo image
    const logoData = await getLogoAsBase64();

    // 4. Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 5. Admin notification with image attachment
    await transporter.sendMail({
      from: `"Onxius Enquiries" <${process.env.SMTP_USER}>`,
      replyTo: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `🎯 New Enquiry from ${name} — ${data["business-name"]}`,
      html: buildAdminEmail(data),
      attachments: logoData.content
        ? [
            {
              filename: "logo.png",
              content: logoData.content,
              encoding: "base64",
              cid: "logo-image",
              contentType: logoData.contentType,
            },
          ]
        : [],
    });

    // 6. Customer confirmation with image attachment
    await transporter.sendMail({
      from: `"Onxius Studio" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We've received your enquiry, ${name}! ✓`,
      html: buildConfirmationEmail(name, data["call-schedule"]),
      attachments: logoData.content
        ? [
            {
              filename: "logo.png",
              content: logoData.content,
              encoding: "base64",
              cid: "logo-image",
              contentType: logoData.contentType,
            },
          ]
        : [],
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error in customer-enquiry-mail-send API:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Server error occurred",
        error: process.env.NODE_ENV === "development" ? String(error) : undefined,
      },
      { status: 500 }
    );
  }
}
