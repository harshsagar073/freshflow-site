import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import SiteNav from "@/components/ui/SiteNav";
import SiteFooter from "@/components/ui/SiteFooter";

export const Route = createFileRoute("/about-us")({
  component: AboutUsPage,
});

function AboutUsPage() {
  return (
    <>
      <SiteNav />

      <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#F05A3A]/10 via-white to-[#1CC7D8]/10">

        {/* Background Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#F05A3A]/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1CC7D8]/20 blur-[150px] rounded-full"></div>

        <div className="relative z-10 px-6 lg:px-16 py-20">

          {/* HERO */}
<motion.div
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative text-center max-w-6xl mx-auto"
>

  {/* Floating circles */}
  <motion.div
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 5, repeat: Infinity }}
    className="absolute -left-10 top-10 w-28 h-28 rounded-full bg-[#F05A3A]/20 blur-2xl"
  />

  <motion.div
    animate={{ y: [0, 20, 0] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="absolute right-0 top-24 w-36 h-36 rounded-full bg-[#1CC7D8]/20 blur-2xl"
  />

  <span className="inline-block px-6 py-3 rounded-full bg-pink-100 text-[#F05A3A] font-bold shadow-lg">
    💖 Welcome to FreshFlow
  </span>

  <h1 className="text-6xl lg:text-8xl font-black mt-8 leading-tight">
    Empowering Every
    <br />
    <span className="bg-gradient-to-r from-[#F05A3A]/10 via-rose-500 to-purple-600 bg-clip-text text-transparent">
      Woman's Journey
    </span>
  </h1>

  <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
    FreshFlow believes every woman deserves confidence, comfort and freedom.
    We create premium feminine hygiene products that combine advanced protection,
    soft comfort and trusted quality so every woman can pursue her dreams without limits.
  </p>

  <div className="flex flex-wrap justify-center gap-6 mt-12">

    <Link
      to="/products"
      className="px-10 py-4 rounded-2xl bg-[#F05A3A] text-white font-bold shadow-2xl hover:scale-105 hover:bg-[#E14B2E] transition-all duration-300"
    >
      🌸 Explore Products
    </Link>

    <Link
      to="/contact-us"
      className="px-10 py-4 rounded-2xl border-2 border-[#F05A3A] text-[#F05A3A] font-bold hover:bg-[#E14B2E] hover:text-white transition-all duration-300"
    >
      💬 Contact Us
    </Link>

  </div>

</motion.div>

{/* Mission + Vision */}

<div className="grid lg:grid-cols-2 gap-10 mt-28">

  <motion.div
    whileHover={{ y: -10 }}
    className="rounded-[35px] bg-white/70 backdrop-blur-xl p-10 shadow-[0_20px_60px_rgba(236,72,153,0.15)]"
  >

    <div className="text-6xl mb-6">
      💖
    </div>

    <h2 className="text-3xl font-bold mb-5">
      Our Mission
    </h2>

    <p className="text-gray-600 leading-8">
      Our mission is to empower women with premium feminine hygiene
      products that deliver unmatched comfort, superior protection,
      and confidence. We strive to educate communities, normalize
      conversations around menstrual health, and inspire women to
      pursue every opportunity without hesitation.
    </p>

  </motion.div>

  <motion.div
    whileHover={{ y: -10 }}
    className="rounded-[35px] bg-white/70 backdrop-blur-xl p-10 shadow-[0_20px_60px_rgba(236,72,153,0.15)]"
  >

    <div className="text-6xl mb-6">
      🌍
    </div>

    <h2 className="text-3xl font-bold mb-5">
      Our Vision
    </h2>

    <p className="text-gray-600 leading-8">
      We envision a world where every woman has access to safe,
      comfortable and sustainable menstrual care products.
      Through innovation and awareness, we aim to break the stigma
      surrounding periods and build a future where confidence
      comes naturally.
    </p>

  </motion.div>

</div>

          {/* STORY */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="
              mt-24
              bg-white/60
              backdrop-blur-xl
              rounded-[40px]
              p-12
              shadow-[0_20px_60px_rgba(236,72,153,0.15)]
            "
          >

            <h2 className="text-4xl font-bold mb-8 text-center">
              Our Story
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              Since 1968, Girleen has worked to normalize conversations
              around menstruation and women's health. We believe periods
              should never stop women from pursuing education, careers,
              dreams and opportunities. Through innovation, awareness
              programs and trusted feminine care products, we continue
              to support millions of women across India.
            </p>

          </motion.div>

          {/* STATS */}
          <div className="grid md:grid-cols-4 gap-6 mt-20">

            {[
              { number: "55+", label: "Years of Trust" },
              { number: "1M+", label: "Women Supported" },
              { number: "100%", label: "Quality Focused" },
              { number: "24/7", label: "Care & Support" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                className="
                  text-center
                  p-8
                  rounded-3xl
                  bg-gradient-to-br
                 from-[#F05A3A]/10
                  to-rose-400
                  text-white
                  shadow-xl
                "
              >
                <h3 className="text-4xl font-bold mb-2">
                  {item.number}
                </h3>

                <p>
                  {item.label}
                </p>
              </motion.div>
            ))}

          </div>

          {/* CTA */}
          <div className="text-center mt-24">

            <h2 className="text-4xl font-bold mb-6">
              Together For Every Dream 💕
            </h2>

            <p className="text-gray-600 mb-8">
              Because confidence begins with comfort.
            </p>

           <Link
  to="/products"
  className="
    inline-block
    px-10 py-4
    rounded-2xl
    bg-[#F05A3A]
    hover:bg-[#E14B2E]
    text-white
    font-bold
    shadow-xl
    transition-all
    hover:scale-105
  "
>
  Explore Products
</Link>

          </div>

        </div>

      </section>

      <SiteFooter />
    </>
  );
}