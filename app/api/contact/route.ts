import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, story } = await req.json();

    if (!name || !email || !story) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;

    if (!resendKey) {
      // Signal to client to fall back to mailto
      return NextResponse.json({ error: "not_configured" }, { status: 503 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "YNS Website <contact@yourneighborhoodstories.com>",
        to: "info@yourneighborhoodstories.com",
        subject: `New Story Submission: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nStory:\n${story}`,
        reply_to: email,
      }),
    });

    if (!res.ok) {
      const data = await res.json();
      console.error("Resend error:", data);
      return NextResponse.json({ error: "send_failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
