import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact — Raah-e-Bahisht",
  description:
    "Get in touch with the team behind Raah-e-Bahisht — questions, feedback and bug reports are welcome.",
};

const EMAIL = "official.raahebahisht@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/shayan-hussain51214/";

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.84v1.54h.05c.54-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.66 4.8 6.13V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.59V21h-4V9.75Z" />
    </svg>
  );
}

const cardClass =
  "group flex flex-col rounded-lg border border-gold/15 bg-navy-900/60 p-7 shadow-card transition-colors hover:border-gold/40";
const iconClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 text-gold";
const linkClass =
  "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors group-hover:text-gold-bright";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-navy-950 pb-28 pt-36 md:pt-44">
        <div className="container-page max-w-3xl">
          <p className="text-[0.72rem] uppercase tracking-[0.24em] text-gold/60">
            Contact
          </p>
          <h1 className="mt-4 text-balance font-serif text-display text-ivory">
            Get in touch
          </h1>
          <p className="mt-5 max-w-xl text-lede text-ivory/55">
            Questions, feedback, a correction in the content, or a bug you
            found &mdash; we&rsquo;d love to hear from you. Raah-e-Bahisht is
            built with care, and every message is read.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <a href={`mailto:${EMAIL}`} className={cardClass}>
              <span className={iconClass}>
                <MailIcon />
              </span>
              <h2 className="mt-5 font-serif text-xl text-ivory">Email</h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ivory/60">
                The best way to reach us for support, feedback or reporting
                an issue.
              </p>
              <p className="mt-4 break-all text-sm text-ivory/80">{EMAIL}</p>
              <span className={linkClass}>Send an email &rarr;</span>
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              <span className={iconClass}>
                <LinkedInIcon />
              </span>
              <h2 className="mt-5 font-serif text-xl text-ivory">
                Shayan Hussain
              </h2>
              <p className="mt-1 text-[0.72rem] uppercase tracking-[0.2em] text-gold/60">
                Head &amp; Developer
              </p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ivory/60">
                Connect on LinkedIn to follow the project or get in touch
                about collaboration.
              </p>
              <span className={linkClass}>View LinkedIn profile &rarr;</span>
            </a>
          </div>

          <p className="mt-10 text-sm leading-relaxed text-ivory/45">
            When reporting a problem, it helps to mention your phone model,
            its Android or iOS version, and what you were doing in the app.
            Please never send passwords or payment details by email.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
