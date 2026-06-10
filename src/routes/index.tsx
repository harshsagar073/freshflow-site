import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroWomen from "@/assets/hero-women.jpg";
import productsCottony from "@/assets/products-cottony.jpg";
import productsDrymax from "@/assets/products-drymax.jpg";
import blogPuberty from "@/assets/blog-puberty.jpg";
import blogCycle from "@/assets/blog-cycle.jpg";
import blogFamily from "@/assets/blog-family.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FreshFlow - Designed for a comfortable protection experience" },
      { name: "description", content: "FreshFlow offers safe, comfortable & effective sanitary pads so you stay protected wherever the day takes you." },
    ],
  }),
  component: Index,
});

const navy = "#1e2b8f";
const navyDark = "#16207a";
const pink = "#e6007e";
const blueLight = "#eaf3fb";

function Index() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', system-ui, sans-serif", color: navy }}>
      {/* Language bar */}
      <div className="border-b border-gray-100 py-2 px-6 flex justify-end text-xs text-gray-600">
        <span>🌐 Language</span>
      </div>

      {/* Nav */}
      <nav style={{ background: navy }} className="px-6 lg:px-16 py-5 flex items-center gap-10">
        <a href="/" className="text-white text-3xl font-bold italic tracking-tight" style={{ fontFamily: "'Brush Script MT', cursive" }}>
          FreshFlow<sup className="text-xs">®</sup>
        </a>
        <ul className="hidden md:flex gap-8 text-white text-sm font-bold tracking-wide">
          <li><a href="#products" className="hover:opacity-80">PRODUCTS</a></li>
          <li><a href="#basics" className="hover:opacity-80">PERIOD BASICS</a></li>
          <li><a href="#itsjustaperiod" className="hover:opacity-80">#ITSJUSTAPERIOD</a></li>
          <li><a href="#planet" className="hover:opacity-80">FOR THE PLANET</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="grid md:grid-cols-2 items-stretch">
        <div className="px-6 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: navy }}>
            Designed for a comfortable<br/> protection experience
          </h1>
          <p className="text-gray-700 text-base lg:text-lg max-w-lg mb-8 leading-relaxed">
            In today's world, every step that you don't take forward is infact a step back. Give your best foot forward with FreshFlow<sup>®</sup>
          </p>
          <button className="self-start px-8 py-3 text-white font-bold text-sm tracking-wider" style={{ background: pink }}>
            LEARN MORE
          </button>
        </div>
        <img src={heroWomen} alt="Two friends sitting in a field" className="w-full h-full object-cover min-h-[400px]" />
      </section>

      {/* Dreams of Progress */}
      <section className="grid md:grid-cols-2 gap-12 px-6 lg:px-16 py-20 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-5" style={{ color: navy }}>#DreamsOfProgress</h2>
          <p className="text-gray-700 mb-8 leading-relaxed max-w-lg">
            FreshFlow<sup>®</sup> believes that nothing should hold you back from pursuing your Dreams of Progress – not even your periods. That's why it is dedicated to create sanitary pads that are safe, comfortable & effective, so you stay protected, for wherever the day takes you.
          </p>
          <button className="px-8 py-3 font-bold text-sm tracking-wider border-2" style={{ borderColor: pink, color: pink }}>
            LEARN MORE
          </button>
        </div>
        <div className="aspect-video bg-gray-100 flex items-center justify-center text-gray-400 text-sm rounded">
          <span>▶ Video Content</span>
        </div>
      </section>

      <hr className="border-gray-200 mx-6 lg:mx-16" />

      {/* Heritage */}
      <section className="px-6 lg:px-16 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: navy }}>
          FreshFlow<sup>®</sup> has been in India since 1968
        </h2>
        <p className="text-gray-700 max-w-4xl leading-relaxed">
          Since then we have been striving to build a healthy relationship between a young girl and her periods so that they can continue to pursue their dreams. We offer superior and comfortable protection experience to give peace of mind during their periods
        </p>

        <div className="grid md:grid-cols-3 gap-12 mt-16">
          {[
            { icon: "🍃", title: "Quality & Safety", text: "We have always believed in providing highest levels of quality and safety to our consumers" },
            { icon: "🛡️", title: "Superior Protection", text: "Enabling women to feel comfortable during periods – both physical and emotional so that they can focus on what matters to them" },
            { icon: "♻️", title: "Social Responsibility", text: "We are always pushing our selves to improve – our products, our communities and our impact on the planet" },
          ].map((f) => (
            <div key={f.title}>
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: navy }}>{f.title}</h3>
              <p className="text-gray-700 leading-relaxed text-sm">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product callouts */}
      <section id="products" className="px-6 lg:px-16 pb-16 grid md:grid-cols-2 gap-8">
        {[
          { img: productsCottony, title: "Protection with Cottony Comfort", text: "Don't ever let your period get in the way of how you want to spend your day, with FreshFlow's superior comfortable protection" },
          { img: productsDrymax, title: "Superior Dry Feel", text: "These pads with dry net cover give you superior dry feel so that you can carry on with your long days" },
        ].map((c) => (
          <div key={c.title} className="overflow-hidden" style={{ background: blueLight }}>
            <img src={c.img} alt={c.title} className="w-full aspect-[4/3] object-cover" loading="lazy" />
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#1a1a1a" }}>{c.title}</h3>
              <p className="text-gray-700 mb-5 leading-relaxed">{c.text}</p>
              <a href="#" className="font-bold tracking-wider text-sm" style={{ color: pink }}>EXPLORE →</a>
            </div>
          </div>
        ))}
      </section>

      {/* Featured Products */}
      <section className="px-6 lg:px-16 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-10" style={{ color: navy }}>Featured Products</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "FreshFlow® Secure Nights", desc: "Get worry free sleep with up to 100% leakage protection^" },
            { name: "FreshFlow® Secure Cottony XL", desc: "The Best Ever* FreshFlow® Secure with Cottony Cover" },
            { name: "FreshFlow® Dry-Max All Night", desc: "All round leakage protection through the night*" },
            { name: "FreshFlow® Secure Dry XL", desc: "The Best Ever* FreshFlow® Secure with Dry Cover" },
          ].map((p, i) => (
            <article key={p.name} className="border border-gray-200 p-5">
              <div className="aspect-square flex items-center justify-center mb-5" style={{ background: i % 2 ? "#f3eaff" : "#e9f2ff" }}>
                <img src={i % 2 ? productsDrymax : productsCottony} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <p className="text-xs font-bold tracking-wider text-gray-500 mb-2">SANITARY NAPKINS</p>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#1a1a1a" }}>{p.name}</h3>
              <p className="text-sm text-gray-700">{p.desc}</p>
            </article>
          ))}
        </div>
        <div className="h-1 mt-8" style={{ background: `linear-gradient(to right, ${pink} 70%, #e5e7eb 70%)` }} />
      </section>

      {/* Period Basics */}
      <section id="basics" className="px-6 lg:px-16 py-16">
        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
          <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: navy }}>Period Basics: Know More</h2>
          <button className="px-6 py-3 border-2 font-bold text-sm tracking-wider" style={{ borderColor: pink, color: pink }}>ALL BLOGS</button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { img: blogPuberty, cat: "GROWING UP", title: "Puberty", text: "Puberty is a key stage in the transition from childhood to adulthood. During puberty, your body goes through lots of changes, which happens between ages 10 and 14 for girls." },
            { img: blogCycle, cat: "EVERYTHING PERIODS", title: "Menstrual Cycle Stages & More", text: "There are four phases within menstrual cycle and can last between 24 to 38 days. Let's get to know the way each phase can affect you with FreshFlow® India." },
            { img: blogFamily, cat: "GROWING UP", title: "Having the period conversation with your daughter", text: "Talk to your daughter that a getting period is normal and healthy. Here are some tips for talking to your daughter about menstruation cycle to break society stigma around period." },
          ].map((b) => (
            <article key={b.title} className="bg-gray-50">
              <img src={b.img} alt={b.title} className="w-full aspect-[4/3] object-cover" loading="lazy" />
              <div className="p-6">
                <p className="text-xs font-bold tracking-wider text-gray-500 mb-3">{b.cat}</p>
                <h3 className="text-xl font-bold mb-3" style={{ color: navy }}>{b.title}</h3>
                <p className="text-sm text-gray-700 mb-5 leading-relaxed">{b.text}</p>
                <a href="#" className="font-bold tracking-wider text-sm" style={{ color: pink }}>READ MORE →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* #ItsJustAPeriod */}
      <section id="itsjustaperiod" style={{ background: blueLight }} className="px-6 lg:px-16 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-500">▶ Video Content</div>
          <div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#1a1a1a" }}>Its Normal. #ItsJustAPeriod</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              When a key partner in parenting is absent in one of the most critical conversations in their daughter's life, she gets an unstated message that this subject is taboo. FreshFlow believes that she will be more comfortable about her periods, when both parents will get comfortable talking about it. For Daughters Day 2021, we urged fathers to be a part of this conversation
            </p>
            <button className="px-8 py-3 font-bold text-sm tracking-wider border-2" style={{ borderColor: pink, color: pink }}>READ MORE</button>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 px-6 lg:px-16 py-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: navy }}>Its Normal. #ItsJustAPeriod</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We realized that like everything else in the world, challenges around menstruation had multiplied under the impact of the Covid-19 pandemic too. This meant that we needed to revisit how young girls were going to experience their first period amidst their families.
          </p>
          <button className="px-8 py-3 font-bold text-sm tracking-wider border-2" style={{ borderColor: pink, color: pink }}>READ MORE</button>
        </div>
        <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-500">▶ Video Content</div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Follow us */}
      <section className="px-6 lg:px-16 py-16">
        <h2 className="text-3xl font-bold mb-10" style={{ color: navy }}>Follow us on @freshflowindia</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square" style={{ background: `linear-gradient(135deg, ${navy}, #4a5fd8)` }}>
              <div className="w-full h-full flex items-center justify-center text-white text-center p-4 font-bold">
                {["Period Cycle Stages", "Ways to Relieve Stress", "Women's Day", "Sapnon Ke"][i - 1]}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: navy }} className="text-white px-6 lg:px-16 py-16">
        <div className="flex gap-4 mb-10 text-2xl">
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="Instagram">📷</a>
          <a href="#" aria-label="YouTube">▶️</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {[
            { title: "Products", links: ["All Products", "Cottony Comfort Napkins", "Dry Feel Napkins"] },
            { title: "Company", links: ["Contact Us"] },
            { title: "Learn", links: ["Period Basics", "#ItsJustAPeriod", "For the Planet"] },
            { title: "Legal", links: ["FAQs", "Privacy Notice", "Consent Withdrawal", "Legal Notice"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-xl font-bold mb-5">{col.title}</h4>
              <ul className="space-y-3 text-sm">
                {col.links.map((l) => <li key={l}><a href="#" className="hover:underline">{l}</a></li>)}
              </ul>
              {col.title === "Legal" && (
                <button className="mt-5 px-4 py-2 bg-white text-xs font-bold rounded" style={{ color: navy }}>⚙ Cookies Settings</button>
              )}
            </div>
          ))}
        </div>
        <hr className="border-white/20 my-8" />
        <div className="text-xs text-white/80 space-y-4 max-w-5xl leading-relaxed">
          <p>© FreshFlow Consumer Health (India) Private Limited 2023-25.</p>
          <p>This site is published by FreshFlow Consumer Health (India) Private Limited which is solely responsible for its content. It is intended for visitors from India. This site may contain links to websites to which our Privacy Notice do not apply. We encourage you to read the Terms of Use and Privacy Notice of every website you visit.</p>
          <p>Disclaimer: Health information and advice is provided solely as a general educational aid. It is not intended as medical or healthcare advice, or to be used for medical diagnosis or treatment, for any individual problem. Always seek the advice of your physician or other qualified healthcare provider regarding any medical condition.</p>
        </div>
      </footer>
    </div>
  );
}

function FAQ() {
  const faqs = [
    { q: "What's puberty?", a: "Puberty is when your body changes from a child's into an adult's, typically starting between ages 8–14." },
    { q: "What is a period?", a: "A period is the monthly shedding of the uterine lining, usually lasting 3–7 days." },
    { q: "When will my period start?", a: "Most girls start their periods between ages 10 and 15, but it can vary." },
    { q: "How long will my periods last?", a: "Periods typically last between 3 to 7 days." },
    { q: "How can I get rid of cramps and pain during my period?", a: "Try a heating pad, gentle exercise, hydration, and over-the-counter pain relief if needed." },
  ];
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="px-6 lg:px-16 py-16 grid md:grid-cols-2 gap-12">
      <div>
        <div className="text-6xl mb-8">🦋</div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-3" style={{ color: navy }}>Frequently Asked Questions</h2>
        <p className="text-gray-700 mb-6">More Answers, Fewer doubts</p>
        <a href="#" className="font-bold tracking-wider text-sm" style={{ color: pink }}>ALL FAQS →</a>
      </div>
      <div>
        {faqs.map((f, i) => (
          <div key={f.q} className="border border-gray-200 mb-3">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center text-left p-5 font-bold" style={{ color: "#1a1a1a" }}>
              <span>{f.q}</span>
              <span className="text-xl" style={{ color: pink }}>{open === i ? "−" : "+"}</span>
            </button>
            {open === i && <div className="px-5 pb-5 text-gray-700 text-sm">{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
