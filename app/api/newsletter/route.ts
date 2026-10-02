import { NextResponse } from "next/server";
import { submitToFormSubmit } from "@/lib/formsubmit";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim() : "";

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const result = await submitToFormSubmit({
      _subject: `[Newsletter Signup] ${email}`,
      _replyto: email,
      email,
      source: "Homepage newsletter",
      signup_timestamp: new Date().toISOString(),
    });

    if (!result.ok) {
      return NextResponse.json(
        { error: result.message, needsActivation: result.needsActivation },
        { status: 422 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json(
      {
        error:
          "Unable to subscribe right now. Please email soumoster@gmail.com directly.",
      },
      { status: 500 },
    );
  }
}
