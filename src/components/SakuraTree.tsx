const TRUNK = [
  { d: "M260 620 C260 545 258 475 256 420", w: 46 },
  { d: "M256 420 C255 390 254 360 253 330", w: 30 },
  { d: "M253 330 C253 300 252 280 251 260", w: 20 },
  { d: "M251 260 C251 240 250 230 249 215", w: 13 },
];

const BRANCHES = [
  { d: "M256 420 C220 395 175 350 140 300", w: 24 },
  { d: "M140 300 C120 270 100 240 88 205", w: 12 },
  { d: "M88 205 C82 190 78 178 76 165", w: 7 },
  { d: "M88 205 C94 192 100 182 106 172", w: 5 },
  { d: "M140 300 C155 275 168 250 172 225", w: 9 },
  { d: "M172 225 C176 213 180 204 183 195", w: 5 },
  { d: "M254 400 C290 375 340 335 375 285", w: 22 },
  { d: "M375 285 C395 255 415 225 425 195", w: 11 },
  { d: "M425 195 C430 182 434 170 436 158", w: 7 },
  { d: "M425 195 C419 182 414 172 411 162", w: 5 },
  { d: "M375 285 C360 260 348 235 343 210", w: 9 },
  { d: "M343 210 C340 200 338 192 337 183", w: 5 },
  { d: "M251 260 C250 235 249 215 248 195", w: 10 },
  { d: "M248 195 C247 180 246 170 245 158", w: 6 },
  { d: "M251 260 C265 240 282 225 300 212", w: 8 },
  { d: "M300 212 C315 202 330 194 342 188", w: 6 },
];

const BARK = [
  { d: "M252 610 C250 570 250 520 253 470", w: 3 },
  { d: "M268 600 C266 555 263 500 260 455", w: 2.5 },
  { d: "M258 455 C256 430 255 410 254 390", w: 2 },
];

const CLUSTERS = [
  { x: 76, y: 165, s: 1.25, dur: "6.4s", delay: "-1.2s" },
  { x: 106, y: 172, s: 0.9, dur: "5.9s", delay: "-3.4s" },
  { x: 183, y: 195, s: 0.95, dur: "6.8s", delay: "-0.8s" },
  { x: 172, y: 222, s: 1.05, dur: "6.1s", delay: "-2.6s" },
  { x: 140, y: 296, s: 1.3, dur: "7.3s", delay: "-4.1s" },
  { x: 88, y: 200, s: 0.85, dur: "5.6s", delay: "-1.9s" },
  { x: 436, y: 158, s: 1.2, dur: "6.3s", delay: "-0.5s" },
  { x: 411, y: 162, s: 0.85, dur: "5.8s", delay: "-3.0s" },
  { x: 337, y: 183, s: 0.9, dur: "6.6s", delay: "-2.2s" },
  { x: 343, y: 207, s: 1.0, dur: "6.0s", delay: "-1.4s" },
  { x: 375, y: 280, s: 1.3, dur: "7.1s", delay: "-3.6s" },
  { x: 425, y: 190, s: 0.8, dur: "5.5s", delay: "-4.4s" },
  { x: 245, y: 158, s: 1.1, dur: "6.2s", delay: "-0.3s" },
  { x: 342, y: 188, s: 0.8, dur: "5.7s", delay: "-2.8s" },
  { x: 300, y: 208, s: 1.0, dur: "6.5s", delay: "-1.7s" },
  { x: 251, y: 215, s: 1.15, dur: "6.9s", delay: "-3.9s" },
  { x: 253, y: 330, s: 1.05, dur: "6.2s", delay: "-2.5s" },
  { x: 253, y: 280, s: 0.8, dur: "5.9s", delay: "-1.0s" },
];

const BUDS = [
  { x: 215, y: 390, s: 0.4 },
  { x: 180, y: 350, s: 0.36 },
  { x: 330, y: 330, s: 0.4 },
  { x: 240, y: 300, s: 0.34 },
  { x: 160, y: 275, s: 0.38 },
  { x: 300, y: 290, s: 0.36 },
  { x: 250, y: 240, s: 0.32 },
  { x: 256, y: 380, s: 0.42 },
];

const DRIFT = [
  { x: 380, y: 300, rot: 24, dur: "12s", delay: "-3s" },
  { x: 120, y: 255, rot: -42, dur: "13s", delay: "-7s" },
  { x: 300, y: 360, rot: 60, dur: "11s", delay: "-1s" },
  { x: 200, y: 195, rot: -16, dur: "12.5s", delay: "-5s" },
];

const PETALS = [
  "#f6d4dd",
  "#eeb0c1",
  "#e08ca3",
  "#d06c89",
];

const FLOWER_OFFSETS: [number, number, number, number][] = [
  [0, 0, 1, 0],
  [-1.3, -0.5, 0.82, 24],
  [1.25, -0.35, 0.86, -30],
  [-0.4, -1.15, 0.7, 50],
  [0.95, -1.05, 0.75, 12],
  [-1.05, 0.45, 0.62, -60],
  [0.7, 0.5, 0.66, 40],
];

export function SakuraTree({
  className = "",
  uid = "tree",
}: {
  className?: string;
  uid?: string;
}) {
  const flowerId = `${uid}-flower`;
  return (
    <svg viewBox="0 0 520 620" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${uid}-trunk`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3b2a33" />
          <stop offset="0.5" stopColor="#241820" />
          <stop offset="1" stopColor="#140d11" />
        </linearGradient>
        <g id={flowerId}>
          <g fill="currentColor">
            <ellipse cx="0" cy="-8.5" rx="4.6" ry="8.6" />
            <ellipse cx="0" cy="-8.5" rx="4.6" ry="8.6" transform="rotate(72)" />
            <ellipse cx="0" cy="-8.5" rx="4.6" ry="8.6" transform="rotate(144)" />
            <ellipse cx="0" cy="-8.5" rx="4.6" ry="8.6" transform="rotate(216)" />
            <ellipse cx="0" cy="-8.5" rx="4.6" ry="8.6" transform="rotate(288)" />
          </g>
          <circle r="2.7" fill="#a63a4e" />
        </g>
      </defs>

      <ellipse cx="260" cy="612" rx="155" ry="16" fill="#000000" opacity="0.5" />

      <g fill="none" strokeLinecap="round">
        <g stroke={`url(#${uid}-trunk)`}>
          {TRUNK.map((b, i) => (
            <path key={`t${i}`} d={b.d} strokeWidth={b.w} />
          ))}
          {BRANCHES.map((b, i) => (
            <path key={`b${i}`} d={b.d} strokeWidth={b.w} />
          ))}
        </g>
        {BARK.map((b, i) => (
          <path key={`k${i}`} d={b.d} stroke="#000000" strokeWidth={b.w} opacity="0.22" />
        ))}
      </g>

      {CLUSTERS.map((c, i) => (
        <g
          key={`c${i}`}
          className="sakura-cluster"
          style={
            {
              animationDuration: c.dur,
              animationDelay: c.delay,
            } as React.CSSProperties
          }
        >
          {FLOWER_OFFSETS.map(([dx, dy, sf, rot], j) => (
            <use
              key={j}
              href={`#${flowerId}`}
              color={PETALS[(i + j) % PETALS.length]}
              transform={`translate(${c.x + dx * c.s}, ${c.y + dy * c.s}) scale(${c.s * sf}) rotate(${rot})`}
            />
          ))}
        </g>
      ))}

      {BUDS.map((b, i) => (
        <use
          key={`bd${i}`}
          href={`#${flowerId}`}
          color="#d06c89"
          transform={`translate(${b.x}, ${b.y}) scale(${b.s})`}
          opacity="0.85"
        />
      ))}

      {DRIFT.map((p, i) => (
        <g key={`d${i}`} transform={`translate(${p.x}, ${p.y}) rotate(${p.rot})`}>
          <ellipse
            className="tree-petal"
            rx="4.6"
            ry="2.4"
            fill="#d06c89"
            style={
              {
                animationDuration: p.dur,
                animationDelay: p.delay,
              } as React.CSSProperties
            }
          />
        </g>
      ))}
    </svg>
  );
}
