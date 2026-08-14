import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, story } = await req.json();

    if (!name || !email || !story) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      return NextResponse.json({ error: "not_configured" }, { status: 503 });
    }

    const resend = new Resend(resendKey);

    await resend.emails.send({
      from: "YNS Website <info@yourneighborhoodstories.com>",
      to: "yourneighborhoodstories@gmail.com",
      subject: `New Story Submission: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nStory:\n${story}`,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "send_failed" }, { status: 500 });
  }
}
