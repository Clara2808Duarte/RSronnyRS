export function RSLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="RS Intermediações e Negócios"
    >
      <text x="0" y="30" fontFamily="'Playfair Display', serif" fontSize="32" fontWeight="700" fill="#C9A030">
        RS
      </text>
      <rect x="52" y="8" width="1.5" height="24" fill="#C9A030" opacity="0.5" />
      <text x="60" y="19" fontFamily="'DM Sans', sans-serif" fontSize="7.5" fontWeight="600" fill="#F0EBE0" letterSpacing="1.5">
        INTERMEDIAÇÕES
      </text>
      <text x="60" y="30" fontFamily="'DM Sans', sans-serif" fontSize="7.5" fontWeight="400" fill="#9A9080" letterSpacing="1.5">
        E NEGÓCIOS
      </text>
    </svg>
  );
}
