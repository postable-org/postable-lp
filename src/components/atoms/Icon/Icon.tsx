import { IconProps, IconName } from "./Icon.types";

const paths: Record<IconName, React.ReactNode> = {
  check: (
    <polyline points="20 6 9 17 4 12" />
  ),
  x: (
    <>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </>
  ),
  "chevron-down": (
    <polyline points="6 9 12 15 18 9" />
  ),
  "chevron-up": (
    <polyline points="18 15 12 9 6 15" />
  ),
  "arrow-right": (
    <>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </>
  ),
  zap: (
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  ),
  chart: (
    <>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  star: (
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  ),
  menu: (
    <>
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </>
  ),
  play: (
    <polygon points="5 3 19 12 5 21 5 3" />
  ),
  twitter: (
    <path d="M22 4s-1 2.17-2.49 3.51c-.13 13.15-8.2 21.06-19.51 21.06-2.58 0-4.81-.66-6.72-1.9 2.11.2 4.47-.46 6.13-1.84-2.25-.13-3.67-1.33-4.39-3.3.7.07 1.39.07 2.08-.08C3.1 16.2 1.91 14.15 2 11.72c.62.4 1.25.53 1.91.55-2.21-1.33-2.61-4.22-1.45-6.33C4.85 8.55 8.16 10.51 12 10.74c-.04-.36-.06-.74-.06-1.13C11.94 6.25 14.22 4 17 4c1.56 0 2.97.69 4.05 1.81 1.01-.2 1.97-.56 2.82-1.08-.33 1.01-1 1.87-1.87 2.45.91-.1 1.77-.35 2.57-.7-.61.92-1.31 1.72-2.13 2.35l.01-.01" />
  ),
  "x-twitter": (
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" fill="currentColor" stroke="none" />
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </>
  ),
  linkedin: (
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
  ),
  tiktok: (
    <path d="M9 12a4 4 0 1 0 4 4V2a5 5 0 0 0 5 5" />
  ),
};

export const Icon = ({ name, size = 20, className = "", ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
};
