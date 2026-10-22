import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use — Raah-e-Bahisht",
  description: "The terms that govern your use of Raah-e-Bahisht.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-gold/10 py-10 first:border-t-0 first:pt-0">
      <h2 className="font-serif text-heading text-ivory">{title}</h2>
      <div className="mt-4 space-y-4 text-[1.02rem] leading-relaxed text-ivory/65">
        {children}
      </div>
    </section>
  );
}

export default function TermsOfUse() {
  return (
    <>
      <Navbar />
      <main className="bg-navy-950 pb-28 pt-36 md:pt-44">
        <div className="container-page max-w-3xl">
          <p className="text-[0.72rem] uppercase tracking-[0.24em] text-gold/60">
            Legal
          </p>
          <h1 className="mt-4 text-balance font-serif text-display text-ivory">
            Terms of Use
          </h1>
          <p className="mt-5 max-w-xl text-lede text-ivory/55">
            The plain-language version of what governs your use of
            Raah-e-Bahisht.
          </p>
          <p className="mt-3 text-sm text-ivory/40">
            Last updated: October 22, 2026
          </p>


          <div className="mt-4">
            <Section title="Using the app">
              <p>
                Raah-e-Bahisht is provided for personal, non-commercial
                use as a companion for daily religious practice. By using
                the app, you agree to use it respectfully and lawfully —
                not to copy, redistribute or resell its content, and not
                to attempt to disrupt or reverse-engineer the app.
              </p>
            </Section>

            <Section title="Religious content & accuracy">
              <p>
                We take care to present Quranic text, duas, ziyarat and
                other religious material accurately, drawing on
                established sources. Translations and transliterations
                are provided to aid understanding, not as a substitute
                for scholarly guidance. For matters of jurisprudence
                (fiqh) or anything you intend to rely on formally, please
                consult a qualified scholar.
              </p>
            </Section>

            <Section title="Your content">
              <p>
                Anything you personalise within the app — favourites,
                bookmarks, a display name, tasbeeh counts — belongs to
                you. We don&rsquo;t claim ownership over it.
              </p>
            </Section>

            <Section title="Intellectual property">
              <p>
                The Raah-e-Bahisht name, logo and app design are owned by
                the developer of Raah-e-Bahisht. Underlying religious texts
                are, to the best of our knowledge, in the public domain or
                used with appropriate permission.
              </p>
            </Section>

            <Section title="No warranty">
              <p>
                Raah-e-Bahisht is provided &ldquo;as is.&rdquo; Prayer times,
                Islamic calendar dates and similar calculated information
                are provided as a convenience and should be verified
                locally where precision matters (for example, moon-sighting
                dependent dates).
              </p>
            </Section>

            <Section title="Limitation of liability">
              <p>
                To the fullest extent permitted by law, the developer of
                Raah-e-Bahisht is not liable for any indirect or incidental
                damages arising from your use of the app. The app is a free,
                non-commercial project offered in good faith.
              </p>
            </Section>

            <Section title="Changes to these terms">
              <p>
                If these terms change in a meaningful way, we&rsquo;ll update
                the date at the top of this page.
              </p>
            </Section>


            <Section title="Contact us">
              <p>
                Questions about these terms can be sent to{" "}
                <a
                  href="mailto:official.raahebahisht@gmail.com"
                  className="text-gold underline underline-offset-4 hover:text-gold-bright"
                >
                  official.raahebahisht@gmail.com
                </a>
                .
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
