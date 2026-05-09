import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, story } = await req.json();

    if (!name || !email || !story) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Option A (default): Use Resend — set RESEND_API_KEY in Vercel env vars
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "YNS Website <onboarding@resend.dev>",
          to: "info@yourneighborhoodstories.com",
          subject: `New Story Submission: ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nStory:\n${story}`,
          reply_to: email,
        }),
      });

      if (!res.ok) throw new Error("Resend error");
      return NextResponse.json({ ok: true });
    }

    // Option B (fallback): log to console (replace with your preferred method)
    console.log("Contact form submission:", { name, email, story });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
