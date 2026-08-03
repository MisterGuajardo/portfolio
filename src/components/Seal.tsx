export function Seal({
  className = "h-10 w-10",
  glyph = "全",
}: {
  className?: string;
  glyph?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Sello Matias Guajardo"
    >
      <rect width="64" height="64" rx="12" fill="#c73e3a" />
      <text
        x="32"
        y="44"
        fontFamily="'Noto Serif JP', 'Yu Mincho', serif"
        fontSize="40"
        fontWeight="600"
        fill="#f6f1ea"
        textAnchor="middle"
      >
        {glyph}
      </text>
    </svg>
  );
}
