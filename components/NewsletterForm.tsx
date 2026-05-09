"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("idle");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-teal text-cream p-8 md:p-12">
      <p className="section-label text-amber mb-3">Stay in the Loop</p>
      <h2 className="font-heading font-black uppercase text-2xl md:text-3xl mb-2">
        New episode, every 2nd Thursday.
      </h2>
      <p className="font-body italic text-cream/70 mb-6">
        Get notified when a new story drops. No spam — ever.
      </p>

      {status === "success" ? (
        <p className="font-heading uppercase tracking-wider text-amber">
          You&apos;re in. See you Thursday. 🎧
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 bg-teal-dark text-cream placeholder-cream/40 border border-cream/20 px-4 py-3 font-sans text-sm focus:outline-none focus:border-amber"
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Notify Me
          </button>
          {status === "error" && (
            <p className="text-red-400 text-sm mt-1">Something went wrong. Try again.</p>
          )}
        </form>
      )}
    </div>
  );
}
