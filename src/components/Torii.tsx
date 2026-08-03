export function Torii({
  className = "",
  uid = "t",
  opacity = 1,
}: {
  className?: string;
  uid?: string;
  opacity?: number;
}) {
  const p = `${uid}-pillar`;
  const b = `${uid}-beam`;
  const h = `${uid}-highlight`;
  const glow = `${uid}-glow`;

  return (
    <svg
      viewBox="0 0 480 560"
      className={className}
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <linearGradient id={p} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#701822" />
          <stop offset="0.28" stopColor="#c73e3a" />
          <stop offset="0.5" stopColor="#e06a5f" />
          <stop offset="0.72" stopColor="#c73e3a" />
          <stop offset="1" stopColor="#701822" />
        </linearGradient>
        <linearGradient id={b} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e8786b" />
          <stop offset="0.35" stopColor="#c73e3a" />
          <stop offset="1" stopColor="#7c1d29" />
        </linearGradient>
        <linearGradient id={h} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={glow} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#c73e3a" stopOpacity="0.55" />
          <stop offset="0.6" stopColor="#c73e3a" stopOpacity="0.18" />
          <stop offset="1" stopColor="#c73e3a" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="240" cy="546" rx="210" ry="26" fill={`url(#${glow})`} />

      <g strokeLinecap="round" fill="none">
        {/* kasagi (upper beam, upturned ends) */}
        <path
          d="M44 100 C44 30 80 26 84 26 L396 26 C400 26 436 30 436 100"
          stroke={`url(#${b})`}
          strokeWidth="26"
        />
        <path
          d="M44 100 C44 30 80 26 84 26 L396 26 C400 26 436 30 436 100"
          stroke={`url(#${h})`}
          strokeWidth="8"
          opacity="0.35"
        />

        {/* nuki (lower beam) */}
        <path d="M58 196 H422" stroke={`url(#${b})`} strokeWidth="24" />
        <path d="M58 190 H422" stroke={`url(#${h})`} strokeWidth="4" opacity="0.3" />

        {/* gakuzuka (central plaque) */}
        <rect x="210" y="64" width="60" height="132" rx="5" fill={`url(#${p})`} />
        <rect x="210" y="70" width="60" height="3" fill="#ffffff" opacity="0.35" />
        <rect x="233" y="84" width="14" height="60" rx="2" fill="#ffffff" opacity="0.22" />
        <rect x="234.5" y="86" width="11" height="56" rx="1.5" fill="#000000" opacity="0.18" />
        <rect x="210" y="188" width="60" height="3" fill="#000000" opacity="0.3" />

        {/* pillars */}
        <rect x="92" y="208" width="32" height="320" rx="8" fill={`url(#${p})`} />
        <rect x="356" y="208" width="32" height="320" rx="8" fill={`url(#${p})`} />
        <rect x="94" y="212" width="6" height="300" rx="3" fill={`url(#${h})`} opacity="0.35" />
        <rect x="388" y="212" width="6" height="300" rx="3" fill={`url(#${h})`} opacity="0.2" />

        {/* pillar bands */}
        <rect x="92" y="232" width="32" height="4" fill="#000000" opacity="0.28" />
        <rect x="356" y="232" width="32" height="4" fill="#000000" opacity="0.28" />
        <rect x="92" y="498" width="32" height="4" fill="#000000" opacity="0.28" />
        <rect x="356" y="498" width="32" height="4" fill="#000000" opacity="0.28" />

        {/* pillar feet */}
        <path d="M90 520 H126 L134 552 H82 Z" fill={`url(#${p})`} />
        <path d="M354 520 H390 L398 552 H346 Z" fill={`url(#${p})`} />
        <rect x="90" y="514" width="36" height="4" rx="2" fill="#000000" opacity="0.25" />
        <rect x="354" y="514" width="36" height="4" rx="2" fill="#000000" opacity="0.25" />
      </g>
    </svg>
  );
}
