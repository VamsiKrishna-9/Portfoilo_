import React, { useState, useEffect, useRef } from 'react';

export const HeroOrbitalCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0, rotX: 0, rotY: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth - 0.5) * 2;
      const normY = (e.clientY / innerHeight - 0.5) * 2;

      setOffset({
        x: normX * 10,
        y: normY * 10,
        rotX: -normY * 5,
        rotY: normX * 5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  const centerX = 260;
  const centerY = 260;

  // 10 distinct technologies clearly distributed across 3 non-overlapping orbital tracks
  // Selected technologies with subtle orange highlights
  const track1Nodes = [
    { name: 'RAG', angle: 0, isOrange: true },
    { name: 'SQL', angle: 180, isOrange: false },
  ];

  const track2Nodes = [
    { name: 'Python', angle: 45, isOrange: true },
    { name: 'Machine Learning', angle: 135, isOrange: false },
    { name: 'Power BI', angle: 225, isOrange: false },
    { name: 'Deep Learning', angle: 315, isOrange: true },
  ];

  const track3Nodes = [
    { name: 'LangChain', angle: 20, isOrange: true },
    { name: 'TensorFlow', angle: 110, isOrange: false },
    { name: 'Generative AI', angle: 200, isOrange: true },
    { name: 'LangGraph', angle: 290, isOrange: false },
  ];

  const r1 = 82;
  const r2 = 142;
  const r3 = 205;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[510px] aspect-square mx-auto flex items-center justify-center select-none"
      style={{
        transform: isMobile
          ? 'none'
          : `perspective(1000px) rotateX(${offset.rotX}deg) rotateY(${offset.rotY}deg) translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      aria-label="Interactive AI & Data Engineering Orbital Visualization"
    >
      {/* Ambient background soft glow */}
      <div
        className="absolute inset-12 rounded-full bg-[#E17A43]/10 dark:bg-[#E17A43]/15 blur-[65px] pointer-events-none"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 520 520"
        className="w-full h-full drop-shadow-xs overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Radial glow for central node */}
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E17A43" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#CF6B35" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#E17A43" stopOpacity="0" />
          </radialGradient>

          {/* Orange node gradient */}
          <radialGradient id="orangeNodeGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFAA75" />
            <stop offset="100%" stopColor="#E17A43" />
          </radialGradient>

          {/* Dark node gradient */}
          <radialGradient id="darkNodeGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#4A4742" />
            <stop offset="100%" stopColor="#171615" />
          </radialGradient>

          <filter id="nodeDropShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodOpacity="0.12" floodColor="#171615" />
          </filter>
        </defs>

        {/* ================= 1. STATIC ORBITAL GUIDES ================= */}
        {/* Track 1 - Inner (radius 82) */}
        <circle
          cx={centerX}
          cy={centerY}
          r={r1}
          fill="none"
          stroke="#E6E0D7"
          strokeWidth="1"
          strokeDasharray="3 4"
          className="dark:stroke-[#2E2B27]"
        />

        {/* Track 2 - Middle (radius 142) */}
        <circle
          cx={centerX}
          cy={centerY}
          r={r2}
          fill="none"
          stroke="#E6E0D7"
          strokeWidth="1.1"
          className="dark:stroke-[#332F2A]"
        />

        {/* Track 3 - Outer (radius 205) */}
        <circle
          cx={centerX}
          cy={centerY}
          r={r3}
          fill="none"
          stroke="#E6E0D7"
          strokeWidth="1"
          strokeDasharray="4 6"
          className="dark:stroke-[#2E2B27]"
        />

        {/* Subtle tilted trajectory ellipse */}
        <ellipse
          cx={centerX}
          cy={centerY}
          rx={r3 - 15}
          ry={r2 - 25}
          fill="none"
          stroke="#E17A43"
          strokeWidth="0.75"
          strokeDasharray="2 5"
          opacity="0.25"
          transform={`rotate(-20 ${centerX} ${centerY})`}
        />

        {/* ================= 2. TRACK 1 (Inner): 50s Clockwise Orbit ================= */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${centerX} ${centerY}`}
            to={`360 ${centerX} ${centerY}`}
            dur="48s"
            repeatCount="indefinite"
          />

          {track1Nodes.map((item, idx) => {
            const rad = (item.angle * Math.PI) / 180;
            const nx = centerX + r1 * Math.cos(rad);
            const ny = centerY + r1 * Math.sin(rad);

            return (
              <g key={idx} transform={`translate(${nx}, ${ny})`}>
                {/* Counter-rotate so labels stay horizontal and readable */}
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 0 0"
                    to="-360 0 0"
                    dur="48s"
                    repeatCount="indefinite"
                  />

                  {/* Node Circle */}
                  <circle
                    cx="0"
                    cy="0"
                    r="4.5"
                    fill={item.isOrange ? 'url(#orangeNodeGrad)' : 'url(#darkNodeGrad)'}
                    filter="url(#nodeDropShadow)"
                  />
                  <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />

                  {/* Label Pill */}
                  <g transform="translate(8, -8)">
                    <rect
                      x="0"
                      y="0"
                      width={item.name.length * 7 + 10}
                      height="16"
                      rx="4"
                      fill="#FFFFFF"
                      stroke={item.isOrange ? '#E17A43' : '#E6E0D7'}
                      strokeWidth="1"
                      className="dark:fill-[#1A1917] dark:stroke-[#332F2A]"
                    />
                    <text
                      x="5"
                      y="11.5"
                      fill={item.isOrange ? '#E17A43' : '#171615'}
                      fontSize="9.5"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      fontWeight="600"
                      className="dark:fill-white"
                    >
                      {item.name}
                    </text>
                  </g>
                </g>
              </g>
            );
          })}
        </g>

        {/* ================= 3. TRACK 2 (Middle): 64s Counter-Clockwise Orbit ================= */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`360 ${centerX} ${centerY}`}
            to={`0 ${centerX} ${centerY}`}
            dur="64s"
            repeatCount="indefinite"
          />

          {track2Nodes.map((item, idx) => {
            const rad = (item.angle * Math.PI) / 180;
            const nx = centerX + r2 * Math.cos(rad);
            const ny = centerY + r2 * Math.sin(rad);

            return (
              <g key={idx} transform={`translate(${nx}, ${ny})`}>
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 0 0"
                    to="360 0 0"
                    dur="64s"
                    repeatCount="indefinite"
                  />

                  {/* Node Circle */}
                  <circle
                    cx="0"
                    cy="0"
                    r="5"
                    fill={item.isOrange ? 'url(#orangeNodeGrad)' : 'url(#darkNodeGrad)'}
                    filter="url(#nodeDropShadow)"
                  />
                  <circle cx="0" cy="0" r="1.6" fill="#FFFFFF" />

                  {/* Label Pill */}
                  <g transform="translate(8, -8)">
                    <rect
                      x="0"
                      y="0"
                      width={item.name.length * 6.8 + 12}
                      height="17"
                      rx="4"
                      fill="#FFFFFF"
                      stroke={item.isOrange ? '#E17A43' : '#E6E0D7'}
                      strokeWidth="1"
                      className="dark:fill-[#1A1917] dark:stroke-[#332F2A]"
                    />
                    <text
                      x="6"
                      y="12"
                      fill={item.isOrange ? '#E17A43' : '#171615'}
                      fontSize="9.5"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      fontWeight="600"
                      className="dark:fill-white"
                    >
                      {item.name}
                    </text>
                  </g>
                </g>
              </g>
            );
          })}
        </g>

        {/* ================= 4. TRACK 3 (Outer): 78s Clockwise Orbit ================= */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${centerX} ${centerY}`}
            to={`360 ${centerX} ${centerY}`}
            dur="78s"
            repeatCount="indefinite"
          />

          {track3Nodes.map((item, idx) => {
            const rad = (item.angle * Math.PI) / 180;
            const nx = centerX + r3 * Math.cos(rad);
            const ny = centerY + r3 * Math.sin(rad);

            return (
              <g key={idx} transform={`translate(${nx}, ${ny})`}>
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 0 0"
                    to="-360 0 0"
                    dur="78s"
                    repeatCount="indefinite"
                  />

                  {/* Node Circle */}
                  <circle
                    cx="0"
                    cy="0"
                    r="5"
                    fill={item.isOrange ? 'url(#orangeNodeGrad)' : 'url(#darkNodeGrad)'}
                    filter="url(#nodeDropShadow)"
                  />
                  <circle cx="0" cy="0" r="1.6" fill="#FFFFFF" />

                  {/* Label Pill */}
                  <g transform="translate(8, -8)">
                    <rect
                      x="0"
                      y="0"
                      width={item.name.length * 6.8 + 12}
                      height="17"
                      rx="4"
                      fill="#FFFFFF"
                      stroke={item.isOrange ? '#E17A43' : '#E6E0D7'}
                      strokeWidth="1"
                      className="dark:fill-[#1A1917] dark:stroke-[#332F2A]"
                    />
                    <text
                      x="6"
                      y="12"
                      fill={item.isOrange ? '#E17A43' : '#171615'}
                      fontSize="9.5"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      fontWeight="600"
                      className="dark:fill-white"
                    >
                      {item.name}
                    </text>
                  </g>
                </g>
              </g>
            );
          })}
        </g>

        {/* ================= 5. CENTRAL ATTRACTIVE GLOWING AI NODE ================= */}
        {/* Breathing ambient glow */}
        <circle cx={centerX} cy={centerY} r="36" fill="url(#centerGlow)" className="animate-pulse-glow" />

        {/* Outer dashed halo ring */}
        <circle
          cx={centerX}
          cy={centerY}
          r="26"
          fill="none"
          stroke="#E17A43"
          strokeWidth="1"
          strokeDasharray="2 3"
          opacity="0.6"
        />

        {/* Core outer shield */}
        <circle
          cx={centerX}
          cy={centerY}
          r="20"
          fill="#FFFFFF"
          stroke="#E17A43"
          strokeWidth="2.5"
          filter="url(#nodeDropShadow)"
          className="dark:fill-[#1A1917]"
        />

        {/* Inner vibrant orange core */}
        <circle
          cx={centerX}
          cy={centerY}
          r="13"
          fill="url(#orangeNodeGrad)"
        />

        {/* Central white spark dot */}
        <circle cx={centerX} cy={centerY} r="4.5" fill="#FFFFFF" />

        {/* Central Core Label */}
        <text
          x={centerX}
          y={centerY + 34}
          fill="#E17A43"
          fontSize="9"
          fontFamily="monospace"
          fontWeight="700"
          textAnchor="middle"
          letterSpacing="0.08em"
        >
          AI & DATA CORE
        </text>

        {/* Engineering corner tick brackets around orbital boundary */}
        <g opacity="0.4" className="dark:opacity-30">
          <path d="M 30,45 L 30,30 L 45,30" fill="none" stroke="#625E58" strokeWidth="1" />
          <path d="M 490,45 L 490,30 L 475,30" fill="none" stroke="#625E58" strokeWidth="1" />
          <path d="M 30,475 L 30,490 L 45,490" fill="none" stroke="#625E58" strokeWidth="1" />
          <path d="M 490,475 L 490,490 L 475,490" fill="none" stroke="#625E58" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
};
