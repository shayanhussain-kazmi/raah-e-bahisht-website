import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Raah-e-Bahisht",
  description:
    "How Raah-e-Bahisht collects, stores and protects your information.",
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

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="bg-navy-950 pb-28 pt-36 md:pt-44">
        <div className="container-page max-w-3xl">
          <p className="text-[0.72rem] uppercase tracking-[0.24em] text-gold/60">
            Legal
          </p>
          <h1 className="mt-4 text-balance font-serif text-display text-ivory">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-xl text-lede text-ivory/55">
            Raah-e-Bahisht was built as a quiet, personal companion for
            faith. This page explains, in plain language, what information
            the app uses and why.
          </p>
          <p className="mt-3 text-sm text-ivory/40">
            Last updated: October 22, 2026
          </p>

          <div className="mt-10">
            <Section title="The short version">
              <p>
                Raah-e-Bahisht works mainly on your own device. There is no
                account or sign-up. Your favourites, bookmarks, tasbeeh
                counts, display name and profile photo are stored on your
                phone, not on a server we run. We do not sell your data, we
                do not show ads, and we do not use analytics or tracking
                tools.
              </p>
            </Section>

            <Section title="Information stored on your device">
              <p>
                To make the app work, the following is saved locally on your
                phone and never uploaded to us:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Favourites, bookmarks and reading progress.</li>
                <li>Tasbeeh counter values.</li>
                <li>
                  Your display name and profile photo, if you choose to set
                  them. The photo is picked from your own photo library and
                  only a reference to it is kept inside the app.
                </li>
                <li>
                  App settings, such as your Hijri date adjustment and
                  notification preferences.
                </li>
                <li>
                  Messages you write under &ldquo;Report a Problem.&rdquo;
                  These are saved on your device only. If a future version
                  lets you send them to us, this policy will be updated
                  first.
                </li>
              </ul>
              <p>
                Deleting the app, or clearing its data in your phone
                settings, removes all of this.
              </p>
            </Section>

            <Section title="Permissions the app may ask for">
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  <span className="text-ivory/85">Location</span> &mdash; to
                  work out accurate prayer times for where you are. You can
                  decline and the rest of the app still works.
                </li>
                <li>
                  <span className="text-ivory/85">Photo library</span> &mdash;
                  only when you choose to set a profile picture. The app
                  does not browse your photos.
                </li>
                <li>
                  <span className="text-ivory/85">Notifications</span> &mdash;
                  for prayer reminders and app alerts. They are scheduled by
                  your phone&rsquo;s own notification system, and we do not
                  receive information about whether you open or dismiss
                  them.
                </li>
                <li>
                  <span className="text-ivory/85">Motion &amp; compass sensors</span> 
                  &mdash; used on your device to point the Qibla finder. This
                  sensor data is not stored or sent anywhere.
                </li>
              </ul>
              <p>
                You can change or withdraw any permission at any time in
                your phone&rsquo;s Settings.
              </p>
            </Section>

            <Section title="Services the app connects to">
              <p>
                Some content and calculations come from public online
                services. When the app contacts them, they can see standard
                technical details of the request, such as your IP address
                and device type. We do not send them your name, profile
                photo or favourites.
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  <span className="text-ivory/85">Quran text and audio</span> 
                  &mdash; loaded from the Quran Foundation&rsquo;s public
                  Quran API.
                </li>
                <li>
                  <span className="text-ivory/85">Prayer times &amp; Hijri date</span> 
                  &mdash; calculated using the Aladhan API. To do this, your
                  approximate location or chosen city may be sent with the
                  request.
                </li>
                <li>
                  <span className="text-ivory/85">Resources</span> &mdash;
                  the Resources section opens third-party websites (such as
                  Duas.org and Al-Islam.org) inside the app. Those sites are
                  run by others and have their own privacy practices.
                </li>
              </ul>
              <p>
                We do not control these services and cannot speak for their
                policies; please see their own privacy notices for details.
              </p>
            </Section>

            <Section title="Ask Raahib">
              <p>
                Ask Raahib helps you find a hadith by describing it in your
                own words. Your question is used only to find a matching
                entry in the app&rsquo;s library, and is not stored by us or
                linked to you.
              </p>
            </Section>

            <Section title="Analytics & crash reports">
              <p>
                The app does not include analytics, advertising or
                crash-reporting tools. Apple and Google may provide us with
                general, anonymous download and crash statistics through the
                App Store and Play Store; these do not identify you.
              </p>
            </Section>

            <Section title="What we don't do">
              <ul className="list-disc space-y-2 pl-5">
                <li>We don&rsquo;t sell or rent your information to anyone.</li>
                <li>We don&rsquo;t show third-party ads inside the app.</li>
                <li>
                  We don&rsquo;t require an account or personal details to
                  use the app.
                </li>
                <li>We don&rsquo;t track you across other apps or websites.</li>
              </ul>
            </Section>

            <Section title="Children">
              <p>
                Raah-e-Bahisht is a religious and educational app for a
                general audience, including families. We do not knowingly
                collect personal information from anyone, including
                children. Everything you personalise stays on your device.
              </p>
            </Section>

            <Section title="Changes to this policy">
              <p>
                If this policy changes in a meaningful way, we&rsquo;ll
                update the date at the top of this page. Significant changes
                will also be mentioned in the app&rsquo;s update notes.
              </p>
            </Section>

            <Section title="Contact us">
              <p>
                Questions about this policy or your data can be sent to{" "}
                <a
                  href="mailto:official.rahebahish@gmail.com"
                  className="text-gold underline underline-offset-4 hover:text-gold-bright"
                >
                  official.rahebahish@gmail.com
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
