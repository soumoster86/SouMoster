import { NextResponse } from "next/server";
import { submitToFormSubmit } from "@/lib/formsubmit";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const type = body.type;
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const app = typeof body.app === "string" ? body.app.trim() : "";
    const description = typeof body.description === "string" ? body.description.trim() : "";

    if (type !== "bug" && type !== "feature") {
      return NextResponse.json({ error: "Invalid submission type." }, { status: 400 });
    }

    if (!email || !app || !description) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    const label = type === "bug" ? "Bug Report" : "Feature Request";
    const result = await submitToFormSubmit({
      _subject: `[${label}] ${app}`,
      _replyto: email,
      email,
      type: label,
      app,
      description,
    });

    if (!result.ok) {
      return NextResponse.json(
        { error: result.message, needsActivation: result.needsActivation },
        { status: 422 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Support form error:", error);
    return NextResponse.json(
      { error: "Unable to submit right now. Please email us directly." },
      { status: 500 },
    );
  }
}