import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

    // Connect your Mailchimp list here.
    // Set MAILCHIMP_API_KEY, MAILCHIMP_LIST_ID, MAILCHIMP_DC in Vercel env vars.
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_LIST_ID;
    const dc = process.env.MAILCHIMP_DC; // e.g. "us21"

    if (apiKey && listId && dc) {
      const res = await fetch(
        `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`,
        {
          method: "POST",
          headers: {
            Authorization: `apikey ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email_address: email, status: "subscribed" }),
        }
      );

      const data = await res.json();
      // 400 with "Member Exists" is fine — treat as success
      if (!res.ok && data.title !== "Member Exists") {
        throw new Error(data.detail || "Mailchimp error");
      }
    } else {
      // Mailchimp not configured — log and return success
      console.log("Newsletter signup:", email);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
