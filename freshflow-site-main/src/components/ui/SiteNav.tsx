import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navy = "linear-gradient(135deg, #F05A3A 0%, #1CC7D8 100%)";

type MenuCol = { title: string; items: { label: string; to: string }[] };

const productsMenu: MenuCol[] = [
  {
    title: "Girleen®",
    items: [
      { label: "Girleen®", to: "/products" },
      { label: "Cottony Comfort Napkins", to: "/products" },
    ],
  },

];

const basicsMenu: MenuCol[] = [
  {
    title: "Growing Up",
    items: [
      { label: "Growing Up", to: "/period-basics" },
      { label: "Puberty", to: "/puberty" },
      { label: "First Period", to: "/first-period" },
    ],
  },
  {
    title: "Everything Periods",
    items: [
      { label: "Everything Periods", to: "/Everything Periods" },
      { label: "What are Periods?", to: "/ what-are-periods" },
      { label: "Period Pain", to: "/Period Pain" },
    ],
  },
  {
    title: "Other Problems",
    items: [
      { label: "Other Problems", to: "/Other Problems" },
      { label: "Spotting", to: "/Spotting" },
      { label: "Irregular Periods", to: "/Irregular Periods" },
    ],
  },
  {
    title: "Feminine Hygiene Products",
    items: [
      { label: "Feminine Hygiene Products", to: "/Feminine Hygiene Products" },
      { label: "What are sanitary pads", to: "/what are sanitary  pads" },
      { label: "Choose the right Garllen product for you", to: "/Choose the right Garllen product for you" },
    ],
  },
];

function MegaPanel({ cols }: { cols: MenuCol[] }) {
  return (
    <div className="absolute left-0 right-0 top-full bg-white shadow-xl border-t border-gray-100 z-50">
      <div className="px-6 lg:px-16 py-10 grid gap-10" style={{ gridTemplateColumns: `repeat(${cols.length}, minmax(0, 1fr))` }}>
        {cols.map((c) => (
          <div key={c.title} className="border-l first:border-l-0 border-gray-200 pl-6 first:pl-0">
            <h3 className="font-bold mb-4" style={{ color: "#1a1a1a" }}>{c.title}</h3>
            <ul className="space-y-3">
              {c.items.map((it) => (
                <li key={it.label}>
                  <Link to={it.to} className="text-sm text-[#F05A3A] hover:text-[#E14B2E] transition-colors duration-300 font-medium">{it.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// One leaf definitions block, shared by every corner via <use>, so gradients/shadows
// only need to be defined once no matter how many leaves are drawn.
function LeafDefs() {
  return (
    <defs>
      {/* Orange -> teal gradient so leaves pick up the header's own colors */}
      <linearGradient id="leafGradA" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#F05A3A" />
        <stop offset="100%" stopColor="#1CC7D8" />
      </linearGradient>
      <linearGradient id="leafGradB" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#1CC7D8" />
      </linearGradient>

      {/* Soft drop shadow for a lifted, 3D look */}
      <filter id="leafShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="1.5" dy="2.5" stdDeviation="1.6" floodColor="#00222a" floodOpacity="0.35" />
      </filter>

      {/* Reusable leaf blade shape */}
      <path
        id="leafShape"
        d="M0 0
           C 22 -6, 40 -26, 46 -58
           C 14 -50, -6 -30, -8 -6
           C -8 -2, -4 1, 0 0 Z"
      />
    </defs>
  );
}

function Leaf({
  x,
  y,
  rotate,
  scale,
  fill,
  opacity,
  delay,
  duration,
  motion = "leaf-sway",
}: {
  x: number;
  y: number;
  rotate: number;
  scale: number;
  fill: string;
  opacity: number;
  delay: number;
  duration: number;
  motion?: "leaf-sway" | "leaf-float" | "leaf-flutter";
}) {
  return (
    <g
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
      opacity={opacity}
      filter="url(#leafShadow)"
    >
      {/* Inner group carries only the sway animation, composed on top of the
          static positioning above, so the animation never fights the layout. */}
      <g
        className={motion}
        style={{
          transformOrigin: "0px 0px",
          animationDelay: `${delay}s, ${delay * 0.7}s`,
          animationDuration: `${duration}s, 20s`,
        }}
      >
        <use href="#leafShape" fill={fill} />
        {/* highlight sliver for extra dimensionality */}
        <use href="#leafShape" fill="rgba(255,255,255,0.25)" transform="scale(0.55) translate(2 -4)" />
        {/* veins */}
        <path d="M-2 -4 C 14 -22, 30 -40, 44 -56" stroke="rgba(0,0,0,0.22)" strokeWidth="1.5" fill="none" />
        <path d="M4 -14 L 18 -24" stroke="rgba(0,0,0,0.16)" strokeWidth="1" fill="none" />
        <path d="M12 -26 L 26 -34" stroke="rgba(0,0,0,0.16)" strokeWidth="1" fill="none" />
        <path d="M20 -38 L 32 -44" stroke="rgba(0,0,0,0.16)" strokeWidth="1" fill="none" />
      </g>
    </g>
  );
}

function LeafCluster({
  corner,
}: {
  corner: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const flipX = corner.includes("right") ? -1 : 1;
  const flipY = corner.includes("bottom") ? -1 : 1;

  const leaves = [
    { x: 0, y: 0, rotate: 0, scale: 1.5, fill: "url(#leafGradA)", opacity: 0.95, delay: 0, duration: 3.4, motion: "leaf-sway" as const },
    { x: 6, y: -2, rotate: 32, scale: 1.25, fill: "url(#leafGradB)", opacity: 0.9, delay: 0.5, duration: 4, motion: "leaf-float" as const },
    { x: -4, y: 6, rotate: -28, scale: 1.1, fill: "#ffffff", opacity: 0.85, delay: 1, duration: 3.7, motion: "leaf-flutter" as const },
    { x: 10, y: 10, rotate: 62, scale: 0.9, fill: "url(#leafGradA)", opacity: 0.7, delay: 1.4, duration: 4.3, motion: "leaf-sway" as const },
  ];

  return (
    <svg
      className="pointer-events-none absolute"
      style={{
        [corner.includes("top") ? "top" : "bottom"]: 0,
        [corner.includes("left") ? "left" : "right"]: 0,
        width: 110,
        height: 110,
      }}
      // Symmetric viewBox (centered on 0,0) so mirroring for left/right
      // corners never pushes the artwork outside the visible box.
      viewBox="-70 -80 140 140"
      preserveAspectRatio="xMidYMid meet"
    >
      <LeafDefs />
      <g transform={`scale(${flipX} ${flipY})`}>
        {leaves.map((l, i) => (
          <Leaf key={i} {...l} />
        ))}
      </g>
    </svg>
  );
}

// A single free-roaming leaf that drifts across the full width of the header
// and dips down toward the hero section before returning "home" to its
// starting spot — placed OUTSIDE the header's overflow-hidden box so the dip
// into the hero area isn't clipped.
function TravelingLeaf({
  top,
  left,
  right,
  size = 42,
  gradientId,
  gradientFrom,
  gradientTo,
  animationClass,
}: {
  top: number;
  left?: number;
  right?: number;
  size?: number;
  gradientId: string;
  gradientFrom: string;
  gradientTo: string;
  animationClass: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute z-20 ${animationClass}`}
      style={{ top, left, right }}
    >
      <svg width={size} height={size * 1.33} viewBox="-10 -62 60 66">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={gradientFrom} />
            <stop offset="100%" stopColor={gradientTo} />
          </linearGradient>
        </defs>
        <path
          d="M0 0 C 22 -6, 40 -26, 46 -58 C 14 -50, -6 -30, -8 -6 C -8 -2, -4 1, 0 0 Z"
          fill={`url(#${gradientId})`}
          opacity={0.92}
        />
        <path d="M-2 -4 C 14 -22, 30 -40, 44 -56" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
}

export default function SiteNav() {
const [open, setOpen] = useState<null | "products" | "basics">(null);
const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <style>{`
        @keyframes leafSway {
          0%, 100% { transform: rotate(0deg) translateY(0px) scale(1); }
          50% { transform: rotate(8deg) translateY(-5px) scale(1.03); }
        }
        @keyframes leafFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-7px) rotate(-5deg); }
        }
        @keyframes leafFlutter {
          0%, 100% { transform: rotate(-6deg) scale(1); }
          50% { transform: rotate(6deg) scale(1.05); }
        }
        @keyframes leafGlow {
          0%, 100% { filter: drop-shadow(0 0 0px rgba(255,255,255,0)); }
          50% { filter: drop-shadow(0 0 4px rgba(255,255,255,0.55)); }
        }
        .leaf-sway {
          animation-name: leafSway, leafGlow;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        .leaf-float {
          animation-name: leafFloat, leafGlow;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        .leaf-flutter {
          animation-name: leafFlutter, leafGlow;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        @keyframes leafJourney {
          0%   { transform: translate(0vw, 0px) rotate(-10deg); }
          20%  { transform: translate(28vw, 12px) rotate(12deg); }
          40%  { transform: translate(58vw, 55px) rotate(-8deg); }
          50%  { transform: translate(82vw, 85px) rotate(14deg); }
          60%  { transform: translate(58vw, 35px) rotate(-10deg); }
          80%  { transform: translate(24vw, -6px) rotate(9deg); }
          100% { transform: translate(0vw, 0px) rotate(-10deg); }
        }
        .travel-leaf-1 {
          animation: leafJourney 18s ease-in-out infinite;
        }

        /* Right-to-left journey, dips less deep, different rhythm */
        @keyframes leafJourney2 {
          0%   { transform: translate(0vw, 0px) rotate(8deg); }
          25%  { transform: translate(-30vw, 20px) rotate(-10deg); }
          50%  { transform: translate(-62vw, 45px) rotate(6deg); }
          75%  { transform: translate(-30vw, 10px) rotate(-8deg); }
          100% { transform: translate(0vw, 0px) rotate(8deg); }
        }
        .travel-leaf-2 {
          animation: leafJourney2 22s ease-in-out infinite;
        }

        /* Short, floaty back-and-forth that dips the deepest into the hero */
        @keyframes leafJourney3 {
          0%   { transform: translate(0vw, 0px) rotate(-6deg); }
          30%  { transform: translate(20vw, 70px) rotate(10deg); }
          50%  { transform: translate(40vw, 110px) rotate(-12deg); }
          70%  { transform: translate(20vw, 60px) rotate(8deg); }
          100% { transform: translate(0vw, 0px) rotate(-6deg); }
        }
        .travel-leaf-3 {
          animation: leafJourney3 15s ease-in-out infinite;
        }

        @keyframes navFadeIn {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-fade-in {
          animation: navFadeIn 0.7s ease-out both;
        }

        @keyframes logoPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        .logo-pulse:hover {
          animation: logoPulse 1s ease-in-out infinite;
        }
      `}</style>
      <div className="border-b border-gray-100 py-2 px-6 flex justify-end text-xs text-gray-600">
        <span>🌐 Language</span>
      </div>
      <div className="relative" onMouseLeave={() => setOpen(null)}>
        <nav
          style={{ backgroundImage: navy }}
          className="nav-fade-in relative overflow-hidden px-6 lg:px-16 py-5 flex items-center justify-between"
        >
          {/* Corner leaf decorations */}
          <LeafCluster corner="top-left" />
          <LeafCluster corner="bottom-left" />
          <LeafCluster corner="top-right" />
          <LeafCluster corner="bottom-right" />

   {/* LEFT SIDE MENU */}
<ul className="relative z-10 hidden md:flex gap-8 text-white text-sm font-bold tracking-wide ml-20">

  <li onMouseEnter={() => setOpen("products")}>
    <Link
      to="/products"
      className="relative inline-block hover:opacity-90 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
      activeProps={{ className: "underline" }}
    >
      PRODUCTS
    </Link>
  </li>

  <li onMouseEnter={() => setOpen("basics")}>
    <Link
      to="/period-basics"
      className="relative inline-block hover:opacity-90 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
      activeProps={{ className: "underline" }}
    >
      PERIOD BASICS
    </Link>
  </li>
<Link
  to="/about-us"
  className="relative inline-block hover:opacity-90 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
>
  ABOUT US
</Link>
  {/* NEW MENU */}
  <li onMouseEnter={() => setOpen(null)}>
    <Link
      to="/period-calculator"
      className="relative inline-block hover:opacity-90 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
      activeProps={{ className: "underline" }}
    >
      PERIOD CALCULATOR
    </Link>
  </li>

  <li onMouseEnter={() => setOpen(null)}>
    <Link
      to="/itsjustaperiod"
      className="relative inline-block hover:opacity-90 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
      activeProps={{ className: "underline" }}
    >
      #ITSJUSTAPERIOD
    </Link>
  </li>

  <li onMouseEnter={() => setOpen(null)}>
    <Link
      to="/for-the-planet"
      className="relative inline-block hover:opacity-90 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
      activeProps={{ className: "underline" }}
    >
      FOR THE PLANET
    </Link>
  </li>

</ul>

          {/* RIGHT SIDE LOGO */}
          {/* Right edge stays put; increasing w- and the matching negative -ml-
              together makes the logo stretch further to the left without
              shifting its right edge. Bump both in tandem to stretch more. */}
        <div className="relative z-10 flex items-center">

  {/* Mobile Menu */}
  <button
    onClick={() => setMobileMenu(!mobileMenu)}
    className="md:hidden text-white mr-4"
  >
    {mobileMenu ? <X size={30} /> : <Menu size={30} />}
  </button>

  {/* Logo */}
  <Link to="/" className="logo-pulse">
    <img
      src={logo}
      alt="Girleen"
      className="w-44 md:w-80 object-contain md:-ml-32"
    />
  </Link>

</div>
        </nav>
        <TravelingLeaf
          top={55}
          left={24}
          size={42}
          gradientId="travelLeafGrad1"
          gradientFrom="#ffffff"
          gradientTo="#1CC7D8"
          animationClass="travel-leaf-1"
        />
        <TravelingLeaf
          top={30}
          right={40}
          size={34}
          gradientId="travelLeafGrad2"
          gradientFrom="#ffffff"
          gradientTo="#F05A3A"
          animationClass="travel-leaf-2"
        />
        <TravelingLeaf
          top={90}
          left={140}
          size={28}
          gradientId="travelLeafGrad3"
          gradientFrom="#EAF7EE"
          gradientTo="#1CC7D8"
          animationClass="travel-leaf-3"
        />
        {open === "products" && <MegaPanel cols={productsMenu} />}
        {open === "basics" && <MegaPanel cols={basicsMenu} />}
        {mobileMenu && (
  <div className="md:hidden bg-white shadow-xl border-t">
    <div className="flex flex-col py-4">

      <Link
        to="/products"
        className="px-6 py-4 border-b"
        onClick={() => setMobileMenu(false)}
      >
        PRODUCTS
      </Link>

      <Link
        to="/period-basics"
        className="px-6 py-4 border-b"
        onClick={() => setMobileMenu(false)}
      >
        PERIOD BASICS
      </Link>

      <Link
        to="/period-calculator"
        className="px-6 py-4 border-b"
        onClick={() => setMobileMenu(false)}
      >
        PERIOD CALCULATOR
      </Link>

      <Link
        to="/itsjustaperiod"
        className="px-6 py-4 border-b"
        onClick={() => setMobileMenu(false)}
      >
        #ITSJUSTAPERIOD
      </Link>

      <Link
        to="/for-the-planet"
        className="px-6 py-4"
        onClick={() => setMobileMenu(false)}
      >
        FOR THE PLANET
      </Link>

    </div>
  </div>
)}
      </div>
    </>
  );
}