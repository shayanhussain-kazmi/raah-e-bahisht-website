// Set to true once the app is live and you have real store URLs.
export const APP_IS_LIVE = false;
export const APP_STORE_URL = "#";
export const PLAY_STORE_URL = "#";

function BadgeShell({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-2.5 rounded-xl border border-gold/25 bg-navy-600/60 px-4 py-2.5 transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-gold active:translate-y-0"
      aria-disabled={!APP_IS_LIVE}
    >
      {children}
    </a>
  );
}

function AppleMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M17.05 12.5c-.03-2.14 1.75-3.17 1.83-3.22-1-1.46-2.56-1.66-3.11-1.68-1.32-.13-2.58.78-3.25.78-.68 0-1.72-.76-2.83-.74-1.45.02-2.8.85-3.55 2.15-1.51 2.62-.39 6.5 1.09 8.62.72 1.04 1.58 2.2 2.71 2.16 1.09-.04 1.5-.7 2.82-.7 1.31 0 1.68.7 2.83.68 1.17-.02 1.91-1.05 2.62-2.1.83-1.2 1.17-2.36 1.19-2.42-.03-.01-2.29-.88-2.35-3.53Z"
        fill="currentColor"
      />
      <path
        d="M14.9 6.06c.6-.72 1-1.72.89-2.72-.86.04-1.9.58-2.52 1.29-.55.63-1.04 1.65-.91 2.63.96.07 1.94-.49 2.54-1.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 3.5c-.3.3-.5.7-.5 1.2v14.6c0 .5.2.9.5 1.2l.1.1L12.8 12 4.1 3.4 4 3.5Z"
        fill="currentColor"
      />
      <path d="M15.7 14.9 12.8 12l2.9-2.9 3.5 2c.6.3.6 1.1 0 1.4l-3.5 2.4Z" fill="currentColor" />
      <path d="M4.1 3.4l8.7 8.6-8.7 8.6c-.2-.1-.4-.3-.5-.5L4.1 3.4Z" fill="currentColor" />
    </svg>
  );
}

export default function StoreBadges() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <BadgeShell href={APP_IS_LIVE ? APP_STORE_URL : "#download"}>
        <span className="text-ivory transition-transform duration-300 group-hover:scale-110">
          <AppleMark />
        </span>
        <span className="text-left leading-tight">
          <span className="block text-[0.62rem] text-ivory/55">
            {APP_IS_LIVE ? "Download on the" : "Coming soon to the"}
          </span>
          <span className="block text-[0.92rem] font-semibold text-ivory">
            App Store
          </span>
        </span>
      </BadgeShell>

      <BadgeShell href={APP_IS_LIVE ? PLAY_STORE_URL : "#download"}>
        <span className="text-ivory transition-transform duration-300 group-hover:scale-110">
          <PlayMark />
        </span>
        <span className="text-left leading-tight">
          <span className="block text-[0.62rem] text-ivory/55">
            {APP_IS_LIVE ? "Get it on" : "Coming soon to"}
          </span>
          <span className="block text-[0.92rem] font-semibold text-ivory">
            Google Play
          </span>
        </span>
      </BadgeShell>
    </div>
  );
}
