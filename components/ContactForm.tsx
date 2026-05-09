"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  story: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", story: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", story: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-teal text-cream p-10">
        <p className="font-heading font-black uppercase text-2xl mb-3">Got it. Thank you.</p>
        <p className="font-body italic text-cream/80 text-lg">
          Ayush reads every message personally. If your story fits, he&apos;ll reach out.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="section-label block mb-2" htmlFor="name">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="What do people call you?"
          className="w-full border-2 border-cream-dark bg-white text-teal px-4 py-3 font-sans text-base focus:outline-none focus:border-teal"
        />
      </div>

      <div>
        <label className="section-label block mb-2" htmlFor="email">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="Where should we write back?"
          className="w-full border-2 border-cream-dark bg-white text-teal px-4 py-3 font-sans text-base focus:outline-none focus:border-teal"
        />
      </div>

      <div>
        <label className="section-label block mb-2" htmlFor="story">
          Your Story (in brief)
        </label>
        <textarea
          id="story"
          required
          rows={6}
          value={form.story}
          onChange={(e) => update("story", e.target.value)}
          placeholder="Tell us the short version. What did you build, survive, or choose differently? Why does it matter to you?"
          className="w-full border-2 border-cream-dark bg-white text-teal px-4 py-3 font-sans text-base focus:outline-none focus:border-teal resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 font-body text-sm">
          Something went wrong. Email us directly at info@yourneighborhoodstories.com
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Your Story"}
      </button>
    </form>
  );
}
