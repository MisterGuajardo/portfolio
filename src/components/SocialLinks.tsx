import { site } from "@/lib/site";

const ICON_CLASS = "h-5 w-5";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={ICON_CLASS}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.42-2.7 5.39-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={ICON_CLASS}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={ICON_CLASS}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function SocialLinks({
  className = "flex items-center gap-3",
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <a
        href={site.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="grid h-11 w-11 place-items-center rounded-full border border-ink-700 text-paper-dim transition-colors hover:border-sakura-400 hover:text-sakura-300"
      >
        <GithubIcon />
      </a>
      <a
        href={site.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="grid h-11 w-11 place-items-center rounded-full border border-ink-700 text-paper-dim transition-colors hover:border-sakura-400 hover:text-sakura-300"
      >
        <LinkedinIcon />
      </a>
      <a
        href={`mailto:${site.email}`}
        aria-label="Email"
        className="grid h-11 w-11 place-items-center rounded-full border border-ink-700 text-paper-dim transition-colors hover:border-sakura-400 hover:text-sakura-300"
      >
        <MailIcon />
      </a>
    </div>
  );
}
