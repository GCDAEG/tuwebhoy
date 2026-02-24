export default function HeroGeometric2() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="
        absolute
        w-[320px] sm:w-[380px] md:w-[420px] lg:w-[480px]
        h-auto
        text-primary
      "
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Fondo suave */}
      <rect
        x="40"
        y="40"
        width="320"
        height="320"
        rx="28"
        fill="currentColor"
        opacity="0.08"
      />

      {/* Layout principal */}
      <rect
        x="70"
        y="80"
        width="260"
        height="240"
        rx="20"
        fill="currentColor"
        opacity="0.15"
      />

      {/* Columna izquierda */}
      <rect
        x="90"
        y="110"
        width="90"
        height="170"
        rx="14"
        fill="currentColor"
        opacity="0.35"
      />

      {/* Columna derecha - bloque 1 */}
      <rect
        x="200"
        y="110"
        width="110"
        height="70"
        rx="14"
        fill="currentColor"
        opacity="0.25"
      />

      {/* Columna derecha - bloque 2 */}
      <rect
        x="200"
        y="195"
        width="110"
        height="85"
        rx="14"
        fill="currentColor"
        opacity="0.18"
      />
    </svg>
  );
}
