import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import SiteNav from "@/components/ui/SiteNav";
import SiteFooter from "@/components/ui/SiteFooter";

export const Route = createFileRoute("/Period Pain")({
  component: PeriodPainPage,
});

function PeriodPainPage() {
  return (
    <>
      <SiteNav />

      <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#F05A3A]/10 via-white to-[#1CC7D8]/10 px-6 lg:px-16 py-20">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300/30 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/30 blur-[140px] rounded-full"></div>

        <div className="relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <div className="inline-block px-5 py-2 rounded-full bg-pink-100 text-[#F05A3A] font-bold mb-6">
              🌸 Everything Periods
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
              Understanding
              <span className="text-[#F05A3A]"> Period Pain</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Period cramps are common and happen when the uterus contracts.
              Understanding period pain can help you manage discomfort and stay active.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                icon: "💗",
                title: "Why Cramps Happen",
                text: "The uterus contracts to shed its lining, which can cause pain or discomfort."
              },
              {
                icon: "🌷",
                title: "Relief Tips",
                text: "Heat therapy, exercise, rest and staying hydrated can help ease cramps."
              },
              {
                icon: "✨",
                title: "Listen To Your Body",
                text: "Severe pain isn't normal. Talk to a healthcare professional if needed."
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -15,
                  scale: 1.05
                }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-[32px] bg-white/70 backdrop-blur-xl border border-white shadow-[0_20px_60px_rgba(236,72,153,0.15)] p-8"
              >

                <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-200 blur-3xl opacity-40 rounded-full"></div>

                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#F05A3A]/10 to-rose-400 flex items-center justify-center text-4xl shadow-xl mb-6">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {card.text}
                </p>

              </motion.div>
            ))}
          </div>

          {/* Bottom Card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24"
          >
            <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-xl rounded-[40px] p-10 shadow-[0_20px_60px_rgba(236,72,153,0.15)] text-center">

              <div className="text-6xl mb-4">
                🌷
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-5">
                Caring For Yourself During Periods
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Mild cramps are common, but taking care of yourself with proper
                rest, hydration and comfort can make your period experience easier.
                Always seek medical advice if pain becomes severe.
              </p>

            </div>
          </motion.div>

        </div>

      </section>

      <SiteFooter />
    </>
  );
}