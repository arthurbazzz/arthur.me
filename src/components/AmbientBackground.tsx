export default function AmbientBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5eead4" stopOpacity="0.10" />
            <stop offset="1" stopColor="#5eead4" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g fill="#0e1620">
          <rect x="60" y="520" width="90" height="380" />
          <rect x="170" y="460" width="60" height="440" />
          <rect x="250" y="560" width="120" height="340" />
          <rect x="1200" y="500" width="80" height="400" />
          <rect x="1300" y="430" width="70" height="470" />
          <rect x="1390" y="540" width="110" height="360" />
        </g>
        <g fill="url(#g1)">
          <rect x="60" y="520" width="90" height="380" />
          <rect x="1300" y="430" width="70" height="470" />
        </g>
        <g fill="#5eead4" opacity="0.35">
          <circle cx="95" cy="560" r="2" />
          <circle cx="95" cy="600" r="2" />
          <circle cx="130" cy="580" r="2" />
          <circle cx="200" cy="500" r="2" />
          <circle cx="200" cy="540" r="2" />
          <circle cx="1230" cy="540" r="2" />
          <circle cx="1330" cy="470" r="2" />
          <circle cx="1420" cy="580" r="2" />
        </g>
      </svg>
    </div>
  );
}
