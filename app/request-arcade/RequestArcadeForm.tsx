// app/request-arcade/RequestArcadeForm.tsx
"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const INPUT_CLASS =
  "w-full rounded-xl border-2 border-zinc-700 bg-zinc-900/60 px-5 py-4 text-white placeholder-zinc-500 outline-none transition-all duration-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 focus:bg-zinc-900/80";

const LABEL_CLASS =
  "block text-sm font-bold uppercase tracking-wider text-pink-400 mb-2";

export default function RequestArcadeForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const organization = data.get("organization") as string;
    const location = data.get("location") as string;
    const message = data.get("message") as string;
    const referral = data.get("referral") as string;

    const subject = encodeURIComponent(
      `Arcade Request from ${name} — ${organization}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\nLocation: ${location}\nReferral: ${referral || "N/A"}\n\nMessage:\n${message}`
    );

    // Open the user's email client with pre-filled content
    window.location.href = `mailto:hello@proto7ype.events?subject=${subject}&body=${body}`;

    // Brief delay then show success
    setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 500);
  }

  if (status === "success") {
    return (
      <div className="bg-zinc-900/50 border-2 border-pink-500/40 rounded-2xl p-10 text-center rave-glow">
        <div className="text-5xl mb-6">🕹️</div>
        <h3 className="text-2xl font-bold text-white mb-4">
          Request Ready!
        </h3>
        <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
          Your email client should have opened with your request details.
          Send it off and we&apos;ll get back to you soon!
        </p>
        <p className="text-zinc-400 text-sm mb-6">
          If your email client didn&apos;t open, email us directly at{" "}
          <a
            href="mailto:hello@proto7ype.events"
            className="text-pink-400 hover:text-pink-300 underline"
          >
            hello@proto7ype.events
          </a>
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-pink-400 hover:text-pink-300 font-semibold transition-colors underline underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className={LABEL_CLASS}>
          Name <span className="text-pink-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your full name"
          className={INPUT_CLASS}
        />
      </div>

      <div>
        <label htmlFor="email" className={LABEL_CLASS}>
          Email <span className="text-pink-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="you@example.com"
          className={INPUT_CLASS}
        />
      </div>

      <div>
        <label htmlFor="organization" className={LABEL_CLASS}>
          Organization / Venue <span className="text-pink-600">*</span>
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          required
          placeholder="Company, hackerspace, venue, bar, event, etc."
          className={INPUT_CLASS}
        />
      </div>

      <div>
        <label htmlFor="location" className={LABEL_CLASS}>
          Location / City <span className="text-pink-600">*</span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          required
          placeholder="San Francisco, CA"
          className={INPUT_CLASS}
        />
      </div>

      <div>
        <label htmlFor="message" className={LABEL_CLASS}>
          Message / Use Case <span className="text-pink-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your event, space, or vision. What kind of arcade experience are you looking for?"
          className={`${INPUT_CLASS} resize-y`}
        />
      </div>

      <div>
        <label htmlFor="referral" className={LABEL_CLASS}>
          How did you hear about us?
        </label>
        <select
          id="referral"
          name="referral"
          defaultValue=""
          className={`${INPUT_CLASS} appearance-none`}
        >
          <option value="" disabled className="text-zinc-500">
            Select an option…
          </option>
          <option value="Social Media">Social Media</option>
          <option value="Word of Mouth">Word of Mouth</option>
          <option value="Saw Us at an Event">Saw Us at an Event</option>
          <option value="Search Engine">Search Engine</option>
          <option value="GitHub">GitHub</option>
          <option value="Press / Article">Press / Article</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {status === "error" && (
        <div className="bg-red-950/40 border border-red-500/40 rounded-xl p-4 text-red-300 text-sm">
          Something went wrong. Please try again or email us directly at{" "}
          <a
            href="mailto:hello@proto7ype.events"
            className="text-pink-400 hover:text-pink-300 underline"
          >
            hello@proto7ype.events
          </a>
          .
        </div>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="button-primary w-full text-lg px-12 py-5 font-bold tracking-widest hover:scale-[1.02] transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {status === "submitting" ? (
            <span className="inline-flex items-center gap-3">
              <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              OPENING EMAIL…
            </span>
          ) : (
            "SUBMIT REQUEST"
          )}
        </button>
      </div>
    </form>
  );
}
