import type { SVGProps } from 'react';

type SocialIconProps = SVGProps<SVGSVGElement>;

export function YouTubeIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 5h10a5 5 0 0 1 5 5v4a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-4a5 5 0 0 1 5-5Zm3 4v6l5-3-5-3Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function InstagramIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.15" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.65 22v-8.5h2.85l.43-3.32h-3.28V8.06c0-.96.27-1.62 1.65-1.62h1.76V3.47a23.5 23.5 0 0 0-2.57-.14c-2.54 0-4.28 1.55-4.28 4.39v2.46H7.33v3.32h2.88V22h3.44Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20.4 11.7a8.4 8.4 0 0 1-12.3 7.4L3.5 20.5l1.4-4.4A8.4 8.4 0 1 1 20.4 11.7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8.6 7.8c.2-.3.4-.4.7-.4h.8l.8 2.2-1 1c.7 1.4 1.8 2.5 3.2 3.2l1-1 2.2.8v.8c0 .3-.1.5-.4.7-.5.3-1 .4-1.6.3-3.4-.7-5.9-3.2-6.6-6.6-.1-.6 0-1.1.3-1.6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
