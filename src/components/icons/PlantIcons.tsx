type IconProps = {
  className?: string;
  size?: number;
};

export function SproutLogoIcon({ className = '', size = 40 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="10"
        y="24"
        width="28"
        height="18"
        rx="6"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M24 24V14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24 18C18 16 14 12 12 8C16 12 20 14 24 18Z"
        fill="currentColor"
      />
      <path
        d="M24 18C30 16 34 12 36 8C32 12 28 14 24 18Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SmallPlantIcon({ className = '', size = 80 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="38"
        y="72"
        width="44"
        height="28"
        rx="8"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M60 72V38"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M60 50C48 46 40 36 34 24C44 34 52 40 60 50Z"
        fill="#4faf6d"
      />
      <path
        d="M60 58C72 54 80 44 86 32C76 42 68 48 60 58Z"
        fill="#8fbe82"
      />
    </svg>
  );
}

export function PlantWithBranches({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="118"
        y="210"
        width="84"
        height="52"
        rx="14"
        stroke="#242e2b"
        strokeWidth="4"
      />
      <path
        d="M160 210V120"
        stroke="#242e2b"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M160 150C130 140 110 118 96 88C118 112 138 128 160 150Z"
        fill="#4faf6d"
      />
      <path
        d="M160 165C190 155 210 133 224 103C202 127 182 143 160 165Z"
        fill="#8fbe82"
      />
      <path
        className="branch-path"
        d="M160 130 C110 110, 70 90, 40 70"
        stroke="#4faf6d"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        className="branch-path"
        d="M160 145 C210 125, 250 105, 280 85"
        stroke="#8fbe82"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        className="branch-path"
        d="M160 160 C160 200, 160 230, 160 250"
        stroke="#d6a85f"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MatureTreeIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 360 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="180" cy="110" rx="95" ry="70" fill="#8fbe82" opacity="0.85" />
      <ellipse cx="150" cy="95" rx="55" ry="45" fill="#4faf6d" opacity="0.9" />
      <ellipse cx="215" cy="100" rx="60" ry="48" fill="#4faf6d" opacity="0.75" />
      <path
        d="M180 180V250"
        stroke="#242e2b"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <rect
        x="138"
        y="250"
        width="84"
        height="48"
        rx="12"
        stroke="#242e2b"
        strokeWidth="4"
      />
      <path d="M180 250 C150 270, 120 285, 90 295" stroke="#a1bab1" strokeWidth="4" />
      <path d="M180 250 C210 270, 240 285, 270 295" stroke="#a1bab1" strokeWidth="4" />
      <path d="M180 250 C180 280, 180 300, 180 315" stroke="#a1bab1" strokeWidth="4" />
    </svg>
  );
}
