type GuideBackgroundProps = {
  className?: string;
};

export function GuideBackground({ className }: GuideBackgroundProps) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 -z-10 overflow-hidden bg-background ${className ?? ""}`}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(0,0,0,0.05)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
