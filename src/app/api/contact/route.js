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

function formatAddress(name = "", email = "") {
  const safeName = sanitizeHeader(name).replaceAll('"', "'");
  const safeEmail = sanitizeHeader(email);
  if (!safeName) {
    return safeEmail;
  }
  return `"${safeName}" <${safeEmail}>`;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const phone = String(body?.phone || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { ok: false, message: "All fields are required." },
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

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br/>");
    const senderAddress = formatAddress(name, email);

    const mailBase = {
      to,
      replyTo: senderAddress,
      subject: `${name} (${email})`,
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n\n` +
        `Message:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; color:#111827;">
          <p style="margin:0 0 8px;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin:0 0 8px;"><strong>Email:</strong> ${safeEmail}</p>
          <p style="margin:0 0 8px;"><strong>Phone:</strong> ${safePhone}</p>
          <p style="margin:10px 0 6px;"><strong>Message:</strong></p>
          <p style="margin:0; line-height:1.6;">${safeMessage}</p>
        </div>
      `,
    };

    try {
      // Attempt to show visitor details in the inbox From field.
      await transporter.sendMail({
        ...mailBase,
        from: senderAddress,
        sender: from,
      });
    } catch {
      // Fallback for providers that block unverified From addresses.
      await transporter.sendMail({
        ...mailBase,
        from,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
