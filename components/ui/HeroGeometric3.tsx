export default function HeroGeometric3() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full max-w-[380] h-auto text-primary/30 dark:text-primary/20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hexágono central */}
      <polygon
        points="200,60 340,140 340,260 200,340 60,260 60,140"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Triángulos exteriores */}
      <polygon
        points="200,10 140,100 260,100"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <polygon
        points="200,390 140,300 260,300"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <polygon
        points="10,200 100,140 100,260"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <polygon
        points="390,200 300,140 300,260"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
