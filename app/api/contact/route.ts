import { NextResponse } from "next/server";
import { submitToFormSubmit } from "@/lib/formsubmit";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    const result = await submitToFormSubmit({
      _subject: `[Contact] ${subject}`,
      _replyto: email,
      email,
      name,
      subject,
      message,
    });

    if (!result.ok) {
      return NextResponse.json(
        { error: result.message, needsActivation: result.needsActivation },
        { status: 422 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Unable to send right now. Please email us directly." },
      { status: 500 },
    );
  }
}