// Simple, solid UBA-style logo for Book Ride

export default function BookRideLogo({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Book Ride Logo"
    >
      <rect width="100" height="100" rx="16" fill="#D21F3C" />
      <text
        x="50"
        y="68"
        fill="white"
        fontSize="56"
        fontWeight="900"
        fontFamily="sans-serif"
        textAnchor="middle"
        letterSpacing="-2"
      >
        BR
      </text>
    </svg>
  );
}
