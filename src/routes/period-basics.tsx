import { createFileRoute, Link } from "@tanstack/react-router";
import SiteNav from "@/components/ui/SiteNav";
import SiteFooter from "@/components/ui/SiteFooter";
import blogPuberty from "@/assets/blog-puberty.jpg";
import blogCycle from "@/assets/blog-cycle.jpg";
import blogFamily from "@/assets/blog-family.jpg";
import { useState } from "react";

export const Route = createFileRoute("/period-basics")({
  head: () => ({
    meta: [
      { title: "Period Basics — Girleen" },
      { name: "description", content: "Learn about puberty, the menstrual cycle, and how to talk about periods." },
    ],
  }),
  component: PeriodBasicsPage,
});

const navy = "#1e2b8f";
const pink = "#e6007e";
const blueLight = "#eaf3fb";

const articles = [
  { img: blogPuberty, cat: "GROWING UP", title: "Puberty", text: "Puberty is a key stage in the transition from childhood to adulthood. Your body goes through many changes, typically between ages 10 and 14." },
  { img: blogCycle, cat: "EVERYTHING PERIODS", title: "Menstrual Cycle Stages & More", text: "There are four phases within the menstrual cycle, which can last between 24 to 38 days. Learn how each phase affects you." },
  { img: blogFamily, cat: "GROWING UP", title: "Having the period conversation", text: "Tips for talking to your daughter about menstruation and breaking the stigma around periods." },
  { img: blogCycle, cat: "EVERYTHING PERIODS", title: "Cramps & Pain Relief", text: "Practical ways to ease cramps — heat, hydration, gentle movement, and when to seek help." },
  { img: blogPuberty, cat: "GROWING UP", title: "Your First Period", text: "What to expect, how to prepare, and how to feel confident through the change." },
  { img: blogFamily, cat: "WELLNESS", title: "Nutrition during your cycle", text: "Foods that support energy and mood across each phase of your cycle." },
];

const faqs = [
  { q: "What's puberty?", a: "Puberty is when your body changes from a child's into an adult's, typically starting between ages 8–14." },
  { q: "What is a period?", a: "A period is the monthly shedding of the uterine lining, usually lasting 3–7 days." },
  { q: "When will my period start?", a: "Most girls start their periods between ages 10 and 15, but it can vary." },
  { q: "How long will my periods last?", a: "Periods typically last between 3 to 7 days." },
  { q: "How can I get rid of cramps?", a: "Try a heating pad, gentle exercise, hydration, and over-the-counter pain relief if needed." },
];

function PeriodBasicsPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', system-ui, sans-serif", color: navy }}>
      <SiteNav />
     <header className="relative overflow-hidden px-6 lg:px-16 py-20 bg-[#f8f9ff]">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0">
    <div className="absolute w-[500px] h-[500px] bg-pink-400/10 blur-[120px] top-[-120px] left-[-120px]"></div>
    <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[120px] bottom-[-120px] right-[-120px]"></div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-3xl">

    {/* TAG */}
    <p className="text-xs font-bold tracking-widest mb-4" style={{ color: pink }}>
      LEARN • PERIOD BASICS
    </p>

    {/* TITLE */}
    <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
      Period Basics:  
      <span style={{ color: pink }}> Know More</span>
    </h1>

    {/* DESCRIPTION */}
    <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
      Honest, friendly guides to puberty, periods, and everything in between — designed to help you feel confident and informed.
    </p>

    {/* BUTTONS */}
    <div className="flex flex-wrap gap-4 mt-8">

      <button
        className="px-8 py-4 bg-[#F05A3A] text-white font-bold rounded-xl
        hover:scale-105 transition shadow-lg"
      >
        START LEARNING
      </button>

      <button
        className="px-8 py-4 border border-gray-300 rounded-xl font-bold
        hover:bg-white hover:scale-105 transition"
      >
        EXPLORE TOPICS
      </button>

    </div>

  </div>
</header>

      <section className="px-6 lg:px-16 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((b) => (
            <article key={b.title} className="bg-gray-50">
              <img src={b.img} alt={b.title} className="w-full aspect-[4/3] object-cover" loading="lazy" />
              <div className="p-6">
                <p className="text-xs font-bold tracking-wider text-gray-500 mb-3">{b.cat}</p>
                <h3 className="text-xl font-bold mb-3" style={{ color: navy }}>{b.title}</h3>
                <p className="text-sm text-gray-700 mb-5 leading-relaxed">{b.text}</p>
                <Link to="/period-basics" className="font-bold tracking-wider text-sm" style={{ color: pink }}>READ MORE →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-16 py-16" style={{ background: blueLight }}>
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl">
          {faqs.map((f, i) => (
            <div key={f.q} className="border border-gray-200 mb-3 bg-white">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center text-left p-5 font-bold" style={{ color: "#1a1a1a" }}>
                <span>{f.q}</span>
                <span className="text-xl" style={{ color: pink }}>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <div className="px-5 pb-5 text-gray-700 text-sm">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
