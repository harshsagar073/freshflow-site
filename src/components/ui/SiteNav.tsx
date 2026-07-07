import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { useState } from "react";

const navy = "linear-gradient(135deg,#F05A3A,#1CC7D8)";

type MenuCol = { title: string; items: { label: string; to: string }[] };

const productsMenu: MenuCol[] = [
  {
    title: "Garllen®",
    items: [
      { label: "Garllen®", to: "/products" },
      { label: "Cottony Comfort Napkins", to: "/products" },
    ],
  },
  {
    title: "Carefree®",
    items: [
      { label: "Carefree®", to: "/products" },
      { label: "Carefree® Sanitary Napkins", to: "/products" },
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
                  <Link to={it.to} className="text-sm text-gray-700 hover:text-[#F05A3A]">{it.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SiteNav() {
  const [open, setOpen] = useState<null | "products" | "basics">(null);

  return (
    <>
      <div className="border-b border-gray-100 py-2 px-6 flex justify-end text-xs text-gray-600">
        <span>🌐 Language</span>
      </div>
      <div className="relative" onMouseLeave={() => setOpen(null)}>
        <nav style={{ background: navy }} className="px-6 lg:px-16 py-5 flex items-center gap-10">
          <Link to="/" className="flex items-center">
  <img
    src={logo}
    alt="Garllen Logo"
    className="h-20 w-auto object-contain hover:scale-105 transition duration-300"
  />
</Link>
          <ul className="hidden md:flex gap-8 text-white text-sm font-bold tracking-wide">
            <li onMouseEnter={() => setOpen("products")}>
              <Link to="/products" className="hover:opacity-80" activeProps={{ className: "underline" }}>PRODUCTS</Link>
            </li>
            <li onMouseEnter={() => setOpen("basics")}>
              <Link to="/period-basics" className="hover:opacity-80" activeProps={{ className: "underline" }}>PERIOD BASICS</Link>
            </li>
            <li onMouseEnter={() => setOpen(null)}>
              <Link to="/itsjustaperiod" className="hover:opacity-80" activeProps={{ className: "underline" }}>#ITSJUSTAPERIOD</Link>
            </li>
            <li onMouseEnter={() => setOpen(null)}>
              <Link to="/for-the-planet" className="hover:opacity-80" activeProps={{ className: "underline" }}>FOR THE PLANET</Link>
            </li>
          </ul>
        </nav>
        {open === "products" && <MegaPanel cols={productsMenu} />}
        {open === "basics" && <MegaPanel cols={basicsMenu} />}
      </div>
    </>
  );
}

