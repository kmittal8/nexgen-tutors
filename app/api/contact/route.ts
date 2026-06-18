import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { parentName, childName, grade, location, program, phone, email, message } = body;

  if (!parentName || !childName || !grade || !location || !program || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Log to console (visible in Docker logs) until email is wired
  console.log("=== NEW ENQUIRY ===");
  console.log(`Parent: ${parentName} | Child: ${childName} | Grade: ${grade}`);
  console.log(`Location: ${location} | Program: ${program}`);
  console.log(`Phone: ${phone} | Email: ${email || "n/a"}`);
  console.log(`Message: ${message || "n/a"}`);
  console.log("==================");

  // TODO: wire up email (Resend / nodemailer) or WhatsApp API
  // const NOTIFY_PHONE = process.env.NOTIFY_PHONE; // +91 99401 99563

  return NextResponse.json({ ok: true });
}
