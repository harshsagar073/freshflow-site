import { createFileRoute } from "@tanstack/react-router";
import SiteNav from "@/components/ui/SiteNav";
import SiteFooter from "@/components/ui/SiteFooter";
import blogFamily from "@/assets/blog-family.jpg";

export const Route = createFileRoute("/itsjustaperiod")({
  head: () => ({
    meta: [
      { title: "#ItsJustAPeriod — Girleen" },
      { name: "description", content: "Breaking the silence around periods, one conversation at a time." },
    ],
  }),
  component: Page,
});

const navy = "#1e2b8f";
const pink = "#e6007e";
const blueLight = "#eaf3fb";

function Page() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', system-ui, sans-serif", color: navy }}>
      <SiteNav />
      <header className="px-6 lg:px-16 py-16" style={{ background: blueLight }}>
        <p className="text-xs font-bold tracking-widest mb-3" style={{ color: pink }}>OUR MOVEMENT</p>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">It's Normal. #ItsJustAPeriod</h1>
        <p className="max-w-2xl text-gray-700">A campaign to normalize period conversations at home, in school and at work.</p>
      </header>

      <section className="grid md:grid-cols-2 gap-12 px-6 lg:px-16 py-16 items-center">
        <img src={blogFamily} alt="Family conversation" className="w-full aspect-video object-cover" />
        <div>
          <h2 className="text-3xl font-bold mb-4">Why we started</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">When parents avoid the period conversation, daughters get the unstated message that the subject is taboo. We believe she'll be more comfortable about her period when both parents are comfortable talking about it.</p>
          <p className="text-gray-700 leading-relaxed">For Daughters Day 2021, we invited fathers to be part of this conversation — and the response started a movement.</p>
        </div>
      </section>

      <section className="px-6 lg:px-16 py-16" style={{ background: blueLight }}>
        <h2 className="text-3xl font-bold mb-10">By the numbers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { n: "71%", t: "of girls don't know about menstruation before their first period" },
            { n: "1 in 5", t: "drop out of school after starting their periods" },
            { n: "50M+", t: "conversations sparked by our campaigns" },
          ].map((s) => (
            <div key={s.n} className="bg-white p-8">
              <div className="text-5xl font-bold mb-3" style={{ color: pink }}>{s.n}</div>
              <p className="text-gray-700">{s.t}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}