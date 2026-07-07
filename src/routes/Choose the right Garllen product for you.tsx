import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import SiteNav from "@/components/ui/SiteNav";
import SiteFooter from "@/components/ui/SiteFooter";

export const Route = createFileRoute("/Choose the right Garllen product for you")({
  component: ChooseGarllenProductPage,
});

function ChooseGarllenProductPage() {
  return (
    <>
      <SiteNav />

      <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#F05A3A]/10 via-white to-[#1CC7D8]/10 px-6 lg:px-16 py-20">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300/30 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/30 blur-[140px] rounded-full"></div>

        <div className="relative z-10">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-pink-100 text-[#F05A3A] font-bold mb-8 shadow-lg">
              💖 Personalized Care
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Choose the Right
              <span className="text-[#F05A3A]"> Garllen® Product</span>
              <br />
              For You
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every body is different. Whether you need everyday comfort,
              overnight protection or extra absorbency, Garllen® offers products
              designed to match your unique needs and lifestyle.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                icon: "🌸",
                title: "Light Flow",
                desc: "Soft and comfortable pads for everyday freshness and light flow protection."
              },
              {
                icon: "🩷",
                title: "Regular Protection",
                desc: "Balanced absorbency for normal flow and all-day confidence."
              },
              {
                icon: "🌙",
                title: "Night Protection",
                desc: "Extra-long and highly absorbent pads for peaceful nights."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -15,
                  scale: 1.04,
                }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden bg-white/70 backdrop-blur-xl rounded-[35px] p-10 border border-white shadow-[0_25px_70px_rgba(236,72,153,0.15)]"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200/30 blur-3xl rounded-full"></div>

                <div className="w-20 h-20 rounded-3xl bg-gradient-to-brfrom-[#F05A3A]/10  to-rose-400 text-4xl flex items-center justify-center shadow-xl mb-8">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24"
          >
            <div className="max-w-5xl mx-auto rounded-[40px] bg-white/60 backdrop-blur-xl p-12 shadow-[0_20px_60px_rgba(236,72,153,0.15)] text-center">

              <div className="text-6xl mb-6">
                ✨
              </div>

              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Find Your Perfect Match
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                From light flow to overnight protection, Garllen® products are
                created to provide comfort, safety and confidence every day.
                Choose the one that fits your needs and enjoy worry-free protection.
              </p>

            </div>
          </motion.div>

        </div>
      </section>

      <SiteFooter />
    </>
  );
}