import { NextResponse } from "next/server";
import { submitToFormSubmit } from "@/lib/formsubmit";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const device = typeof body.device === "string" ? body.device.trim() : "";
    const discord = typeof body.discord === "string" ? body.discord.trim() : "";
    const notes = typeof body.notes === "string" ? body.notes.trim() : "";

    // Games array or fallback
    let gamesList: string[] = [];
    if (Array.isArray(body.games)) {
      gamesList = body.games.filter((g: unknown) => typeof g === "string");
    } else if (typeof body.game === "string" && body.game.trim()) {
      gamesList = [body.game.trim()];
    }

    if (gamesList.length === 0) {
      gamesList = ["Bank Hopper"];
    }

    if (!email) {
      return NextResponse.json(
        { error: "Google Play email is required for closed testing access." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid Google Play email address (e.g. yourname@gmail.com).",
        },
        { status: 400 },
      );
    }

    const selectedGamesStr = gamesList.join(", ");

    const result = await submitToFormSubmit({
      _subject: `[Closed Beta Signup] ${selectedGamesStr} - ${name || email}`,
      _replyto: email,
      email,
      tester_name: name || "Anonymous Hopper",
      selected_games: selectedGamesStr,
      android_device: device || "Not provided",
      community_handle: discord || "Not provided",
      tester_notes: notes || "Ready to test!",
      signup_timestamp: new Date().toISOString(),
    });

    if (!result.ok) {
      return NextResponse.json(
        { error: result.message, needsActivation: result.needsActivation },
        { status: 422 },
      );
    }

    return NextResponse.json({
      success: true,
      message: `You're signed up! We'll invite ${email} to the Google Play Closed Testing track soon.`,
    });
  } catch (error) {
    console.error("Closed Beta signup error:", error);
    return NextResponse.json(
      {
        error:
          "Unable to process signup right now. Please email soumoster@gmail.com directly.",
      },
      { status: 500 },
    );
  }
}
