/**
 * Hola International College - bespoke icon system.
 *
 * Hand-drawn line icons, 1.5px stroke, rounded caps and joins, on a
 * 24x24 grid. Designed to read as one consistent visual voice across
 * the site - distinct from the default Lucide / Heroicons aesthetic
 * that signals "Tailwind template."
 *
 * Each icon accepts the standard `size` prop and inherits color from
 * the parent (uses currentColor).
 */

type IconProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

function base(props: IconProps & { children: React.ReactNode }) {
  const { size = 24, className, strokeWidth = 1.5, children } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <path d="M4 12h15" />
        <path d="M13 6l7 6-7 6" />
      </>
    ),
  });

export const ArrowUpRight = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <path d="M7 17L17 7" />
        <path d="M9 7h8v8" />
      </>
    ),
  });

export const MapPin = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z" />
        <circle cx="12" cy="9" r="2.5" />
      </>
    ),
  });

export const Phone = (p: IconProps) =>
  base({
    ...p,
    children: (
      <path d="M5.5 4h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A18 18 0 0 1 3.5 6.2 2 2 0 0 1 5.5 4z" />
    ),
  });

export const Mail = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  });

export const Menu = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <path d="M4 7h16" />
        <path d="M4 17h16" />
      </>
    ),
  });

export const X = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <path d="M6 6l12 12" />
        <path d="M18 6L6 18" />
      </>
    ),
  });

export const ChevronDown = (p: IconProps) =>
  base({
    ...p,
    children: <path d="M5 9l7 7 7-7" />,
  });

export const MessageCircle = (p: IconProps) =>
  base({
    ...p,
    children: (
      <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.1-5.4A8.5 8.5 0 1 1 21 11.5z" />
    ),
  });

export const Sparkles = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6z" />
        <path d="M19 16.5l.7 1.8 1.8.7-1.8.7L19 21.5l-.7-1.8-1.8-.7 1.8-.7z" />
      </>
    ),
  });

export const BookOpen = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z" />
        <path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z" />
      </>
    ),
  });

export const Clock = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2.5" />
      </>
    ),
  });

export const Users = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M3 20c.6-3.5 3-5.5 6-5.5s5.4 2 6 5.5" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M17 14c2.5 0 4.2 1.6 4.7 4" />
      </>
    ),
  });

export const Briefcase = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        <path d="M3 13h18" />
      </>
    ),
  });

export const Award = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <circle cx="12" cy="9" r="6" />
        <path d="M8.5 14L6 21l6-3 6 3-2.5-7" />
      </>
    ),
  });

export const Shield = (p: IconProps) =>
  base({
    ...p,
    children: (
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z" />
    ),
  });

export const Lightbulb = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <path d="M9 18h6" />
        <path d="M10 21h4" />
        <path d="M9 16c-1.8-1-3-2.8-3-5a6 6 0 1 1 12 0c0 2.2-1.2 4-3 5" />
      </>
    ),
  });

export const Heart = (p: IconProps) =>
  base({
    ...p,
    children: (
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
    ),
  });

export const TrendingUp = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M14 7h7v7" />
      </>
    ),
  });

export const Coffee = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <path d="M4 9h13v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
        <path d="M17 11h2a2 2 0 0 1 0 4h-2" />
        <path d="M7 5c0 1 1 1 1 2s-1 1-1 2" />
        <path d="M11 5c0 1 1 1 1 2s-1 1-1 2" />
      </>
    ),
  });

export const Compass = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M14.5 9.5L13 13l-3.5 1.5L11 11z" />
      </>
    ),
  });

export const ExternalLink = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <path d="M14 4h6v6" />
        <path d="M10 14L20 4" />
        <path d="M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
      </>
    ),
  });

export const GraduationCap = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <path d="M2 9l10-4 10 4-10 4z" />
        <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
        <path d="M22 9v5" />
      </>
    ),
  });

export const ShieldCheck = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  });

export const Globe = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </>
    ),
  });

export const Lock = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <rect x="4.5" y="11" width="15" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </>
    ),
  });
