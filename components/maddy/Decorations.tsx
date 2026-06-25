export function CornerFlourish({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M4 4C20 8 32 20 36 36M4 4C8 20 20 32 36 36M4 20C12 24 18 30 20 38M4 36C10 38 14 42 16 48"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M4 4C14 6 22 14 24 24M4 12C10 14 16 20 18 28"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function WeddingRings({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="16" cy="20" r="10" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="28" cy="20" r="10" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M28 10L30 6L32 10"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30 6V8" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

export function BowAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M12 8C10 4 6 2 2 4C4 8 8 10 12 8ZM12 8C14 4 18 2 22 4C20 8 16 10 12 8Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="8" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function DividerLine({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px w-full max-w-md bg-current opacity-20 ${className}`}
      aria-hidden
    />
  );
}
