import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export default function SiteFooter() {
  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(135deg, #F05A3A 0%, #1CC7D8 100%)",
      }}
    >
      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-white/10 blur-[160px] -top-40 -left-40 rounded-full" />
        <div className="absolute w-[500px] h-[500px] bg-white/10 blur-[160px] -bottom-40 -right-40 rounded-full" />
      </div>

      <div className="relative z-10 px-6 lg:px-16 py-20">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-16">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={logo} alt="Girleen" className="h-16 mb-6" />

            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Comfort. Care. Confidence.
            </h2>

            <p className="text-white/80 max-w-md leading-relaxed">
              Supporting women with trusted protection, education and confidence.
              Every dream deserves uninterrupted progress.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6">

              {["📘", "📸", "▶️"].map((icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.15, y: -4 }}
                  href="#"
                  className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-xl flex items-center justify-center text-xl shadow-lg"
                >
                  {icon}
                </motion.a>
              ))}

            </div>
          </motion.div>

          {/* RIGHT - NEWSLETTER */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold mb-3">Stay Connected</h3>

            <p className="text-white/80 mb-6">
              Get updates, wellness tips & product launches.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 outline-none text-white placeholder-white/60"
              />

              <button className="px-6 py-4 rounded-xl bg-white text-[#F05A3A] font-bold hover:scale-105 transition">
                Subscribe
              </button>
            </div>
          </motion.div>

        </div>

        {/* LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/20 pt-12">

          {[
            {
              title: "Products",
              links: ["All Products", "Cottony Comfort", "Night Protection"],
            },
            {
              title: "Learn",
              links: ["Period Basics", "#ItsJustAPeriod", "Women’s Health"],
            },
            {
              title: "Company",
              links: ["About Us", "Contact Us"],
            },
            {
              title: "Legal",
              links: ["Privacy Policy", "Terms", "FAQs"],
            },
          ].map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h4 className="font-bold mb-4 text-white">
                {col.title}
              </h4>

              <ul className="space-y-3">
                {col.links.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>

        {/* BOTTOM */}
        <div className="mt-14 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between text-white/60 text-sm gap-3">
          <p>© 2026 Girleen. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}