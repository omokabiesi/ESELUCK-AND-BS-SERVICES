interface LogoProps {
  className?: string;
}

export default function Logo({ className = 'w-12 h-12' }: LogoProps) {
  return (
    <svg data-ev-id="ev_063137a444"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}>

      <defs data-ev-id="ev_8c4fdcdf50">
        <linearGradient data-ev-id="ev_4a298c3782" id="logoGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop data-ev-id="ev_9324440527" offset="0%" stopColor="#D4B76A" />
          <stop data-ev-id="ev_1702bd391a" offset="50%" stopColor="#C4A052" />
          <stop data-ev-id="ev_69aa7382b2" offset="100%" stopColor="#A68A3C" />
        </linearGradient>
        <linearGradient data-ev-id="ev_3236334db0" id="logoGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop data-ev-id="ev_5fad57ca04" offset="0%" stopColor="#1A4D2E" />
          <stop data-ev-id="ev_df239a5216" offset="100%" stopColor="#0D2818" />
        </linearGradient>
      </defs>
      {/* Global Circle */}
      <circle data-ev-id="ev_ec389892d2"
      cx="32"
      cy="32"
      r="30"
      fill="url(#logoGreenGrad)"
      stroke="url(#logoGoldGrad)"
      strokeWidth="2" />

      {/* Leaf */}
      <path data-ev-id="ev_b7c369e747"
      d="M32 12 C22 20 18 32 24 44 C28 38 32 30 32 22 C32 30 36 38 40 44 C46 32 42 20 32 12Z"
      fill="url(#logoGoldGrad)" />

      {/* Grain dots */}
      <circle data-ev-id="ev_6c06156a07" cx="26" cy="48" r="3" fill="url(#logoGoldGrad)" />
      <circle data-ev-id="ev_0111a2f735" cx="32" cy="50" r="3" fill="url(#logoGoldGrad)" />
      <circle data-ev-id="ev_1c69bb1704" cx="38" cy="48" r="3" fill="url(#logoGoldGrad)" />
    </svg>);

}