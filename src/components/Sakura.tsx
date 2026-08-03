const PETALS = [
  { left: "4%", size: 10, delay: "0s", duration: "13s", sway: "6vw", rotate: "300deg", opacity: 0.7 },
  { left: "12%", size: 14, delay: "-4s", duration: "17s", sway: "-7vw", rotate: "360deg", opacity: 0.6 },
  { left: "21%", size: 8, delay: "-8s", duration: "14s", sway: "9vw", rotate: "280deg", opacity: 0.8 },
  { left: "29%", size: 12, delay: "-2s", duration: "18s", sway: "-5vw", rotate: "320deg", opacity: 0.55 },
  { left: "37%", size: 9, delay: "-11s", duration: "15s", sway: "8vw", rotate: "260deg", opacity: 0.7 },
  { left: "44%", size: 15, delay: "-6s", duration: "19s", sway: "-9vw", rotate: "340deg", opacity: 0.5 },
  { left: "52%", size: 10, delay: "-13s", duration: "13s", sway: "7vw", rotate: "300deg", opacity: 0.7 },
  { left: "59%", size: 8, delay: "-1s", duration: "16s", sway: "-6vw", rotate: "280deg", opacity: 0.6 },
  { left: "66%", size: 13, delay: "-9s", duration: "18s", sway: "10vw", rotate: "360deg", opacity: 0.55 },
  { left: "74%", size: 9, delay: "-5s", duration: "14s", sway: "-8vw", rotate: "320deg", opacity: 0.75 },
  { left: "81%", size: 12, delay: "-12s", duration: "17s", sway: "6vw", rotate: "280deg", opacity: 0.6 },
  { left: "89%", size: 10, delay: "-3s", duration: "15s", sway: "-7vw", rotate: "340deg", opacity: 0.7 },
  { left: "95%", size: 14, delay: "-10s", duration: "19s", sway: "8vw", rotate: "300deg", opacity: 0.5 },
];

export function Sakura({ count = 13 }: { count?: number }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {PETALS.slice(0, count).map((p, i) => (
        <span
          key={i}
          className="sakura-petal"
          style={
            {
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              "--petal-delay": p.delay,
              "--petal-duration": p.duration,
              "--petal-sway": p.sway,
              "--petal-rotate": p.rotate,
              "--petal-opacity": String(p.opacity),
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
