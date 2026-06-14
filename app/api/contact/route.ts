import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resendKey = process.env.RESEND_API_KEY;
if (!resendKey) {
  throw new Error("RESEND_API_KEY is not set");
}
const resend = new Resend(resendKey);

export async function POST(req: NextRequest) {
  try {
    const { name, email, story } = await req.json();

    if (!name || !email || !story) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "not_configured" }, { status: 503 });
    }

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
