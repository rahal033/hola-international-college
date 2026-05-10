/**
 * Decorative SVG composition for the homepage hero. Echoes the brand's
 * H + care-dot motif as scattered overlapping circles being cradled by
 * arcs - the visual language of "people being supported." Tan-on-green
 * for the dark hero background.
 *
 * Pure SVG, zero raster, no copyright concerns. Replaces "empty dark
 * green right half" with on-brand decoration until real photography
 * is shot.
 */
export default function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      role="presentation"
      aria-hidden="true"
      viewBox="0 0 600 600"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="hicGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4A574" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#D4A574" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* soft glow halo behind composition */}
      <circle cx="300" cy="300" r="280" fill="url(#hicGlow)" />

      {/* large back arc - community embrace */}
      <path
        d="M 100 400 Q 300 540 500 400 L 500 430 Q 300 580 100 430 Z"
        fill="#D4A574"
        opacity="0.3"
      />

      {/* mid arc */}
      <path
        d="M 140 360 Q 300 470 460 360 L 460 380 Q 300 500 140 380 Z"
        fill="#E8C896"
        opacity="0.5"
      />

      {/* care dots - different sizes, scattered */}
      <circle cx="220" cy="280" r="42" fill="#D4A574" opacity="0.85" />
      <circle cx="320" cy="240" r="56" fill="#E8C896" />
      <circle cx="420" cy="290" r="38" fill="#D4A574" opacity="0.9" />
      <circle cx="170" cy="200" r="22" fill="#E8C896" opacity="0.7" />
      <circle cx="470" cy="200" r="28" fill="#D4A574" opacity="0.6" />
      <circle cx="380" cy="180" r="18" fill="#E8C896" opacity="0.8" />
      <circle cx="260" cy="180" r="20" fill="#D4A574" opacity="0.5" />

      {/* H pillars - barely there, tying composition to brand */}
      <rect x="80" y="150" width="14" height="280" rx="3" fill="#D4A574" opacity="0.18" />
      <rect x="506" y="150" width="14" height="280" rx="3" fill="#D4A574" opacity="0.18" />

      {/* small accent dots */}
      <circle cx="100" cy="120" r="4" fill="#E8C896" />
      <circle cx="510" cy="100" r="6" fill="#D4A574" opacity="0.6" />
      <circle cx="120" cy="500" r="5" fill="#E8C896" opacity="0.5" />
      <circle cx="490" cy="510" r="4" fill="#D4A574" opacity="0.7" />
    </svg>
  );
}
