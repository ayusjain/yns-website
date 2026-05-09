import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Got a Story?",
  description: "Think you have a story worth telling on Your Neighbourhood Stories? We want to hear from you.",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="section-label mb-3">Got a Story?</p>
        <h1 className="font-heading font-black uppercase text-teal text-4xl md:text-5xl leading-none mb-6">
          We&apos;re Listening.
        </h1>
        <p className="font-body italic text-teal/70 text-xl max-w-xl leading-relaxed">
          If you&apos;ve built something, survived something, or chose something different —
          your story might belong here. Tell us about yourself.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Form */}
        <div className="lg:col-span-3">
          <ContactForm />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <p className="section-label mb-3">Email Us Directly</p>
            <a
              href="mailto:info@yourneighborhoodstories.com"
              className="font-body text-teal hover:text-amber transition-colors break-all"
            >
              info@yourneighborhoodstories.com
            </a>
          </div>

          <div>
            <p className="section-label mb-3">Follow Along</p>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.instagram.com/ynstories_podcast/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading uppercase text-sm tracking-wider text-teal hover:text-amber transition-colors"
              >
                Instagram →
              </a>
              <a
                href="https://www.youtube.com/@YourNeighborhoodStories"
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading uppercase text-sm tracking-wider text-teal hover:text-amber transition-colors"
              >
                YouTube →
              </a>
            </div>
          </div>

          <div className="bg-teal text-cream p-6">
            <p className="font-body italic text-cream/80 text-sm leading-relaxed">
              &ldquo;Every person has a story worth telling. We just listen.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
