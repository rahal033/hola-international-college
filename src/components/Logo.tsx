type LogoProps = {
  variant?: "color" | "reverse" | "mono";
  className?: string;
  size?: number;
  ariaLabel?: string;
};

/**
 * Hola International College mark - H + care dot + cradling arc.
 * Eucalypt palette by default. Use variant="reverse" on dark backgrounds
 * and variant="mono" for single-color (e.g. emails, embossing).
 */
export default function Logo({
  variant = "color",
  className,
  size = 40,
  ariaLabel = "Hola International College",
}: LogoProps) {
  const colors = (() => {
    switch (variant) {
      case "reverse":
        return { stroke: "#FFFFFF", dot: "#E8C896", arc: "#FFFFFF", arcOpacity: 0.85 };
      case "mono":
        return { stroke: "currentColor", dot: "currentColor", arc: "currentColor", arcOpacity: 0.7 };
      case "color":
      default:
        return { stroke: "#1F5A3D", dot: "#D4A574", arc: "#1F5A3D", arcOpacity: 0.85 };
    }
  })();

  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* H pillars */}
      <rect x="18" y="18" width="12" height="64" rx="2" fill={colors.stroke} />
      <rect x="70" y="18" width="12" height="64" rx="2" fill={colors.stroke} />
      {/* Care dot */}
      <circle cx="50" cy="50" r="9" fill={colors.dot} />
      {/* Cradling arc */}
      <path
        d="M 30 50 Q 50 70 70 50 L 70 56 Q 50 76 30 56 Z"
        fill={colors.arc}
        opacity={colors.arcOpacity}
      />
    </svg>
  );
}
