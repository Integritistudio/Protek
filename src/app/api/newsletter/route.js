import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(input = "") {
  return String(input)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function sanitizeHeader(input = "") {
  return String(input).replace(/[\r\n]+/g, " ").trim();
}

export async function POST(request) {
  try {
    const body = await request.json();
    const email = String(body?.email || "").trim();

    if (!email) {
      return NextResponse.json(
        { ok: false, message: "Email is required." },
        { status: 400 },
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = String(process.env.SMTP_SECURE || "true") === "true";
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.MAIL_FROM || user;

    if (!host || !user || !pass || !to || !from) {
      return NextResponse.json(
        { ok: false, message: "SMTP configuration is incomplete." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    const safeEmail = escapeHtml(email);
    const senderAddress = sanitizeHeader(email);

    const mailBase = {
      to,
      replyTo: senderAddress,
      subject: `${email}`,
      text: `Newsletter subscription email: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; color:#111827;">
          <p style="margin:0 0 8px;"><strong>Newsletter Email:</strong> ${safeEmail}</p>
        </div>
      `,
    };

    try {
      await transporter.sendMail({
        ...mailBase,
        from: senderAddress,
        sender: from,
      });
    } catch {
      await transporter.sendMail({
        ...mailBase,
        from,
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Failed to subscribe. Please try again." },
      { status: 500 },
    );
  }
}
