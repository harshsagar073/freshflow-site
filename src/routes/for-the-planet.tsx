import { createFileRoute } from "@tanstack/react-router";
import SiteNav from "@/components/ui/SiteNav";
import SiteFooter from "@/components/ui/SiteFooter";

export const Route = createFileRoute("/for-the-planet")({
  head: () => ({
    meta: [
      { title: "For The Planet — Girleen" },
      { name: "description", content: "Our commitments to sustainable materials, packaging, and manufacturing." },
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
        <p className="text-xs font-bold tracking-widest mb-3" style={{ color: pink }}>SUSTAINABILITY</p>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">For the Planet</h1>
        <p className="max-w-2xl text-gray-700">Small steps in our products and operations that add up to a healthier planet.</p>
      </header>

      <section className="px-6 lg:px-16 py-16 grid md:grid-cols-3 gap-12">
        {[
          { icon: "🌱", title: "Responsible Materials", text: "Sourcing fibers from certified, responsibly-managed forests." },
          { icon: "📦", title: "Lighter Packaging", text: "Reducing plastic in our wrappers and outer cartons year-on-year." },
          { icon: "💧", title: "Cleaner Manufacturing", text: "Lowering water and energy use across our production sites." },
        ].map((f) => (
          <div key={f.title}>
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{f.text}</p>
          </div>
        ))}
      </section>

      <section className="px-6 lg:px-16 py-16" style={{ background: blueLight }}>
        <h2 className="text-3xl font-bold mb-8">Our 2030 commitments</h2>
        <ul className="space-y-4 max-w-3xl text-gray-700">
          <li>✅ 100% recyclable or reusable packaging</li>
          <li>✅ 50% reduction in virgin plastic use</li>
          <li>✅ Carbon-neutral operations at all production sites</li>
          <li>✅ Zero manufacturing waste sent to landfill</li>
        </ul>
      </section>

      <SiteFooter />
    </div>
  );
}