import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero.jpg";
import productsCottony from "@/assets/products-cottony.jpg";
import productsDrymax from "@/assets/products-drymax.jpg";
import blogPuberty from "@/assets/blog-puberty.jpg";
import blogCycle from "@/assets/blog-cycle.jpg";
import blogFamily from "@/assets/blog-family.jpg";
import SiteNav from "@/components/ui/SiteNav";
import SiteFooter from "@/components/ui/SiteFooter";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Girleen - Designed for a comfortable protection experience" },
      { name: "description", content: "Girleen offers safe, comfortable & effective sanitary pads so you stay protected wherever the day takes you." },
    ],
  }),
  component: Index,
});

const navy = "#1e2b8f";
const pink = "#e6007e";
const blueLight = "#eaf3fb";

function Index() {
  return (
   <div
  className="min-h-screen"
  style={{
    background:
      "linear-gradient(135deg,#FFF6F2 0%,#FFF9F7 40%,#F1FCFD 75%,#E5FAFC 100%)",
    fontFamily: "'Inter', system-ui, sans-serif",
    color: navy,
  }}
>
    <SiteNav />

   <section className="relative min-h-[90vh] overflow-hidden flex items-center">

  {/* BACKGROUND IMAGE (REALISTIC DEPTH) */}
  <motion.img
    src={hero}
    alt="hero"
    className="absolute inset-0 w-full h-full object-cover object-center scale-110"
    initial={{ scale: 1.15 }}
    animate={{ scale: 1.05 }}
    transition={{ duration: 6, ease: "easeOut" }}
  />

  {/* SOFT CINEMATIC OVERLAY (FIXED NATURAL LIGHTING) */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#07163D]/85 via-[#07163D]/55 to-[#07163D]/30" />

  {/* LIGHT BLOOM (REDUCED FOR REALISM) */}
  <div className="absolute inset-0">
   <div className="absolute w-[650px] h-[650px] bg-[#F46A3A]/20 blur-[180px] top-[-200px] left-[-200px]" />
    <div className="absolute w-[550px] h-[550px] bg-[#1CB7C9]/20 blur-[180px] bottom-[-200px] right-[-200px]" />
  </div>

  {/* CONTENT */}
  <div className="relative z-10 w-full px-6 lg:px-16">

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-2xl text-white"
    >

      {/* TAG */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-pink-300 font-semibold tracking-[0.3em] mb-5"
      >
        GIRLEEN • SINCE 1968
      </motion.p>

      {/* HEADING */}
      <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
        Designed for a
        <span className="text-pink-400"> Comfortable</span>
        <br />
        Protection Experience
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-200 text-lg lg:text-xl mb-10 leading-relaxed">
        Safe, comfortable & effective sanitary pads designed to give women confidence every day without compromise.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-wrap gap-5">

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
         className="px-8 py-4 text-white rounded-xl shadow-xl"
style={{
background:
"linear-gradient(135deg,#F46A3A,#FF8459)"
}}
        >
          LEARN MORE
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-4 border border-white/40 text-white rounded-xl backdrop-blur-md hover:bg-white/10"
        >
          WATCH VIDEO
        </motion.button>

      </div>

    </motion.div>

  </div>

</section>
     {/* ================= DREAMS OF PROGRESS ================= */}
<section
  className="relative py-28 px-6 lg:px-16 overflow-hidden"
  style={{
    background:
      "linear-gradient(135deg, #FFF5EF 0%, #FFF9F6 35%, #F4FEFE 70%, #EAFBFC 100%)",
  }}
>

 {/* FLOATING BACKGROUND GLOW */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {/* Coral Glow */}
  <div
    className="absolute w-[650px] h-[650px] rounded-full blur-[180px] opacity-30 -top-56 -left-56"
    style={{
      background: "#F46A3A",
    }}
  />

  {/* Aqua Glow */}
  <div
    className="absolute w-[600px] h-[600px] rounded-full blur-[180px] opacity-30 -bottom-52 -right-52"
    style={{
      background: "#1CB7C9",
    }}
  />

  {/* Soft Cream Center Glow */}
  <div
    className="absolute w-[500px] h-[500px] rounded-full blur-[150px] opacity-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    style={{
      background: "#FFF5E8",
    }}
  />

</div>

<div className="relative grid md:grid-cols-2 gap-16 items-center">

  {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="max-w-xl"
    >

{/* TAG */}
<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="text-pink-500 font-semibold tracking-[0.3em] mb-4"
>
  #DREAMSOFPROGRESS
</motion.p>

{/* HEADING */}
<h2
  className="text-3xl lg:text-5xl font-bold mb-6 leading-tight"
  style={{ color: navy }}
>
  Nothing Should Hold You Back
</h2>

{/* TEXT */}
<p className="text-gray-700 text-lg leading-relaxed mb-10">
  Girleen® believes that nothing should hold you back from pursuing your Dreams of Progress – not even your periods. That's why it is dedicated to create sanitary pads that are safe, comfortable & effective, so you stay protected, for wherever the day takes you.
</p>

  {/* BUTTON */}
<motion.button
  whileHover={{
    scale: 1.06,
    y: -3,
    boxShadow: "0 20px 40px rgba(244,106,58,0.35)",
  }}
  whileTap={{ scale: 0.96 }}
  className="relative overflow-hidden px-8 py-4 rounded-xl text-white font-bold shadow-xl transition-all duration-300"
  style={{
    background: "linear-gradient(135deg, #F46A3A 0%, #FF8459 100%)",
  }}
>
  {/* Shine Effect */}
  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full hover:translate-x-full transition-transform duration-700" />

  <span className="relative z-10 flex items-center gap-2">
    LEARN MORE
    <span className="text-lg">→</span>
  </span>
</motion.button> </motion.div>

    {/* ================= RIGHT VISUAL CARD ================= */}
<motion.div
  initial={{ opacity: 0, x: 80, scale: 0.9 }}
  whileInView={{ opacity: 1, x: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9 }}
  whileHover={{ scale: 1.05, rotateY: 5 }}
  className="relative"
  style={{ transformStyle: "preserve-3d" }}
>

  <div
    className="relative rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl"
    style={{
      background: "rgba(255,248,243,0.75)",
      border: "1px solid rgba(244,106,58,.18)",
    }}
  >

    {/* IMAGE PLACEHOLDER */}
    <div
      className="aspect-[4/3] flex items-center justify-center font-semibold text-lg"
      style={{
        background:
          "linear-gradient(135deg,#FFF7F2 0%,#FFE5D8 50%,#FFF1EA 100%)",
        color: "#6B4D3A",
      }}
    >
      ▶ Video / Image Content
    </div>

  </div>

  {/* Floating Badge */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity }}
    className="absolute -top-5 -right-5 rounded-full px-5 py-2 text-sm font-bold shadow-xl"
    style={{
      background: "linear-gradient(135deg,#F46A3A,#FF8459)",
      color: "#fff",
    }}
  >
    Safe • Soft • Secure
  </motion.div>

</motion.div>

</div>
</section>

<hr className="mx-6 lg:mx-16 border-[#F4D6CA]" />

{/* ================= TRUST STATS ================= */}
<section
  className="py-20 px-6 lg:px-16"
  style={{
    background:
      "linear-gradient(180deg,#FFF8F3 0%,#FFEFE6 100%)",
  }}
>

  {/* TITLE */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12"
  >
    <h2
      className="text-4xl lg:text-5xl font-bold mb-4"
      style={{ color: "#1E2B8F" }}
    >
      Trusted by Women Across India
    </h2>

    <p
      className="max-w-2xl mx-auto"
      style={{ color: "#6B4D3A" }}
    >
      Delivering comfort, protection and confidence for generations.
    </p>
  </motion.div>

  {/* STATS */}
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

    {[
      { num: "58+", label: "Years of Trust" },
      { num: "10M+", label: "Women Protected" },
      { num: "100%", label: "Quality Focused" },
      { num: "24/7", label: "Comfort & Care" },
    ].map((item, i) => (
      <motion.div
        key={item.num}
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.15 }}
        whileHover={{ scale: 1.08, y: -8 }}
        className="rounded-3xl py-8 px-4 shadow-xl"
        style={{
          background: "#FFFFFF",
          border: "1px solid rgba(244,106,58,.12)",
        }}
      >
        <h3
          className="text-5xl font-bold mb-2"
          style={{ color: "#F46A3A" }}
        >
          {item.num}
        </h3>

        <p style={{ color: "#6B4D3A" }}>
          {item.label}
        </p>
      </motion.div>
    ))}

  </div>
</section>
    {/* ================= SINCE 1968 PREMIUM SECTION ================= */}
<section
  className="px-6 lg:px-16 py-28"
  style={{
    background:
      "linear-gradient(180deg,#FFF8F3 0%,#FFEFE6 50%,#FFF8F3 100%)",
  }}
>
  {/* HEADER */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="text-center max-w-3xl mx-auto mb-16"
  >
    <h2
      className="text-4xl lg:text-6xl font-bold mb-5"
      style={{ color: "#1E2B8F" }}
    >
      Girleen® Since 1968
    </h2>

    <p
      className="leading-relaxed text-lg"
      style={{ color: "#6B4D3A" }}
    >
      Since then we have been striving to build a healthy relationship between
      a young girl and her periods so that they can continue to pursue their
      dreams. We offer superior and comfortable protection experience to give
      peace of mind during their periods.
    </p>
  </motion.div>

  {/* CARDS */}
  <div className="grid md:grid-cols-3 gap-10">

    {[
      {
        icon: "🍃",
        title: "Quality & Safety",
        text: "We have always believed in providing highest levels of quality and safety to our consumers.",
        glow: "#F46A3A"
      },
      {
        icon: "🛡️",
        title: "Superior Protection",
        text: "Enabling women to feel comfortable during periods – physically and emotionally so they can focus on what matters.",
        glow: "#FF8459"
      },
      {
        icon: "♻️",
        title: "Social Responsibility",
        text: "We are always pushing ourselves to improve — our products, our communities and our impact on the planet.",
        glow: "#F7B267"
      }
    ].map((item, i) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: i * 0.2 }}
        whileHover={{
          scale: 1.05,
          y: -8,
        }}
        className="relative rounded-3xl p-8 shadow-2xl overflow-hidden backdrop-blur-xl"
        style={{
          background: "rgba(255,255,255,.78)",
          border: "1px solid rgba(244,106,58,.15)",
        }}
      >
        <div
          className="absolute inset-0 blur-3xl opacity-15"
          style={{ background: item.glow }}
        />

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-5xl mb-5 relative z-10"
        >
          {item.icon}
        </motion.div>

        <h3
          className="text-xl font-bold mb-3 relative z-10"
          style={{ color: "#1E2B8F" }}
        >
          {item.title}
        </h3>

        <p
          className="leading-relaxed relative z-10"
          style={{ color: "#6B4D3A" }}
        >
          {item.text}
        </p>

        <div
          className="absolute top-4 right-4 text-2xl animate-pulse"
          style={{ color: "#F46A3A" }}
        >
          ✦
        </div>
      </motion.div>
    ))}
  </div>
</section>

{/* ================= PRODUCTS ================= */}
<section
  id="products"
  className="px-6 lg:px-16 py-24"
  style={{
    background:
      "linear-gradient(180deg,#FFF8F3 0%,#FFE7DC 100%)",
  }}
>
  {/* TITLE */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="text-center mb-16"
  >
    <h2
      className="text-4xl lg:text-6xl font-bold mb-5"
      style={{ color: "#1E2B8F" }}
    >
      Protection That Feels Real
    </h2>

    <p
      className="max-w-2xl mx-auto text-lg"
      style={{ color: "#6B4D3A" }}
    >
      Designed with comfort, care and confidence — every layer matters.
    </p>
  </motion.div>

  {/* CARDS */}
  <div className="grid md:grid-cols-2 gap-12">

    {[
      {
        img: productsCottony,
        title: "Cottony Comfort Protection",
        text: "Soft touch technology designed to feel natural, breathable and stress-free all day long."
      },
      {
        img: productsDrymax,
        title: "Superior Dry Feel",
        text: "Advanced absorbent layers keep you dry, fresh and confident even on your busiest days."
      }
    ].map((c, i) => (
      <motion.div
        key={c.title}
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: i * 0.2 }}
        whileHover={{ scale: 1.03 }}
        className="relative rounded-3xl overflow-hidden shadow-2xl"
        style={{
          background: "#FFFFFF",
          border: "1px solid rgba(244,106,58,.12)",
        }}
      >
        <div className="relative overflow-hidden">
          <motion.img
            src={c.img}
            className="w-full aspect-[4/3] object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.8 }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#F46A3A]/20 via-transparent to-transparent"></div>
        </div>

        <div className="p-8">

          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold mb-3"
            style={{ color: "#1E2B8F" }}
          >
            {c.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 leading-relaxed"
            style={{ color: "#6B4D3A" }}
          >
            {c.text}
          </motion.p>

          <motion.a
            whileHover={{ x: 8 }}
            className="font-bold tracking-wider text-sm cursor-pointer"
            style={{ color: "#F46A3A" }}
          >
            EXPLORE →
          </motion.a>

        </div>
      </motion.div>
    ))}
  </div>
</section>

{/* ================= FEATURED ================= */}
<section
  className="px-6 lg:px-16 py-24"
  style={{
    background:
      "linear-gradient(135deg,#FFF7F2 0%,#FFFDFB 55%,#F7FCFF 100%)",
  }}
>

  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-4xl lg:text-6xl font-bold text-center mb-16"
    style={{ color: "#223A8F" }}
  >
    Featured Products
  </motion.h2>

  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

    {[
      { name: "Secure Nights", desc: "Leak protection for peaceful sleep" },
      { name: "Cottony XL", desc: "Soft comfort for daily use" },
      { name: "Dry-Max All Night", desc: "Long-lasting dry protection" },
      { name: "Secure Dry XL", desc: "Advanced absorbent safety layers" },
    ].map((p, i) => (
      <motion.article
        key={p.name}
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: i * 0.15 }}
        whileHover={{
          scale: 1.05,
          y: -8,
          boxShadow: "0 30px 60px rgba(244,106,58,0.18)",
        }}
        className="rounded-3xl overflow-hidden border border-[#FFE5D8]"
        style={{
          background: "rgba(255,255,255,0.82)",
          backdropFilter: "blur(18px)",
        }}
      >

        {/* IMAGE */}
        <div className="aspect-square overflow-hidden relative">
          <motion.img
            src={i % 2 ? productsDrymax : productsCottony}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.12 }}
            transition={{ duration: 0.8 }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top,rgba(244,106,58,.20),transparent)",
            }}
          />
        </div>

        {/* CONTENT */}
        <div className="p-6">

          <p className="text-xs font-bold tracking-[0.22em] text-[#F46A3A] mb-2 uppercase">
            SANITARY NAPKINS
          </p>

          <h3
            className="text-xl font-bold mb-3"
            style={{ color: "#223A8F" }}
          >
            {p.name}
          </h3>

          <p className="text-[#64748B] leading-7">
            {p.desc}
          </p>

        </div>

      </motion.article>
    ))}

  </div>

  {/* Bottom Accent Line */}
  <div
    className="h-1 rounded-full mt-14"
    style={{
      background:
        "linear-gradient(to right,#F46A3A,#FF9B73,#FFD6C6)",
    }}
  />

</section>

     {/* ================= TESTIMONIALS ================= */}
<section
  className="px-6 lg:px-16 py-28"
  style={{
    background:
      "linear-gradient(135deg,#FFF7F2 0%,#FFFDFC 55%,#F2FCFF 100%)",
  }}
>

  {/* HEADER */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="text-center mb-16"
  >
    <h2
      className="text-4xl lg:text-6xl font-bold mb-4"
      style={{ color: "#223A8F" }}
    >
      What Women Say About Girleen
    </h2>

    <p className="text-[#5B6B8C] text-lg">
      Trusted by women across India.
    </p>
  </motion.div>

  {/* CARDS */}
  <div className="grid md:grid-cols-3 gap-10">

    {[
      {
        name: "Priya Sharma",
        text: "Very comfortable and reliable. I can use it throughout my workday without worries.",
        glow: "#FFD5C4",
      },
      {
        name: "Ananya Singh",
        text: "Soft, comfortable and gives great protection during long travel.",
        glow: "#DDF4FF",
      },
      {
        name: "Riya Verma",
        text: "One of the best sanitary pads I have used. Highly recommended.",
        glow: "#FFE7D7",
      },
    ].map((t, i) => (
      <motion.div
        key={t.name}
        initial={{ opacity: 0, y: 80, rotateX: 20 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: i * 0.15 }}
        whileHover={{
          scale: 1.05,
          rotateY: 8,
          rotateX: -6,
        }}
        className="relative rounded-3xl p-8 bg-white border border-[#F6D9CB] shadow-[0_25px_60px_rgba(245,140,90,.18)]"
        style={{
          transformStyle: "preserve-3d",
        }}
      >

        {/* glow background */}
        <div
          className="absolute inset-0 rounded-3xl opacity-30 blur-3xl"
          style={{ background: t.glow }}
        />

                {/* floating avatar (3D illusion circle) */}
        <div className="flex items-center gap-4 mb-5 relative z-10">

          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F46A3A] to-[#6FCBFF] shadow-xl flex items-center justify-center text-white font-bold text-lg"
          >
            {t.name.charAt(0)}
          </motion.div>

          <div>
            <h4
              className="font-bold"
              style={{ color: "#223A8F" }}
            >
              {t.name}
            </h4>

            {/* stars */}
            <div className="text-[#F6B100] text-sm">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>

        {/* text */}
        <p className="text-[#5B6B8C] leading-relaxed relative z-10">
          {t.text}
        </p>

        {/* floating decorative dots */}
        <div className="absolute top-4 right-4 text-[#F46A3A] text-2xl animate-pulse">
          ✦
        </div>

      </motion.div>
    ))}
  </div>
</section>

<section
  id="basics"
  className="px-6 lg:px-16 py-20"
  style={{
    background:
      "linear-gradient(135deg,#FFF7F2 0%,#FFFDFC 55%,#F2FCFF 100%)",
  }}
>

  {/* HEADER */}
  <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
    <div>
      <h2
        className="text-3xl lg:text-4xl font-bold"
        style={{ color: "#223A8F" }}
      >
        Period Basics: Know More
      </h2>

      <p className="text-[#5B6B8C] mt-2">
        Simple guides to understand your body better
      </p>
    </div>

    <button
      className="px-6 py-3 rounded-xl font-bold text-sm tracking-wider transition hover:scale-105 text-white shadow-lg"
      style={{
        background: "linear-gradient(135deg,#F46A3A,#FF8B5E)",
      }}
    >
      ALL BLOGS →
    </button>
  </div>
  
  {/* CARDS */}
<div className="grid md:grid-cols-3 gap-8">

  {[
    {
      img: blogPuberty,
      tag: "GROWING UP",
      title: "Puberty",
      desc: "Puberty is a key stage in the transition from childhood to adulthood. Your body changes between ages 10–14.",
    },
    {
      img: blogCycle,
      tag: "EVERYTHING PERIODS",
      title: "Menstrual Cycle Stages & More",
      desc: "There are four phases in a menstrual cycle lasting 24–38 days. Learn how each phase affects you.",
    },
    {
      img: blogFamily,
      tag: "GROWING UP",
      title: "Talking to Your Daughter",
      desc: "Help your daughter understand periods naturally and break social stigma with open conversations.",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="
        group relative overflow-hidden rounded-3xl
        bg-white/90 backdrop-blur-xl
        border border-[#D8E8FF]
        shadow-[0_20px_60px_rgba(34,58,143,0.12)]
        hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(244,106,58,0.18)]
        transition-all duration-500
      "
    >

      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="
            w-full aspect-[4/3] object-cover
            group-hover:scale-110
            transition duration-700
          "
        />

        {/* Orange Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#223A8F]/60 via-transparent to-transparent"></div>
      </div>

      {/* CONTENT */}
      <div className="p-6">

        <p className="text-xs font-bold tracking-wider text-[#F46A3A] mb-2">
          {item.tag}
        </p>

        <h3 className="text-xl font-bold mb-3 text-[#223A8F]">
          {item.title}
        </h3>

        <p className="text-sm text-[#5B6B8C] mb-5 leading-relaxed">
          {item.desc}
        </p>

        <a
          href="#"
          className="font-bold text-sm tracking-wider transition hover:tracking-[0.18em]"
          style={{ color: "#F46A3A" }}
        >
          READ MORE →
        </a>

      </div>

        {/* glow effect */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>
      </div>
    ))}
  </div>
</section>

     {/* ================= ITS JUST A PERIOD ================= */}
<section
  className="relative py-28 px-6 lg:px-16 overflow-hidden"
  style={{
    background:
      "linear-gradient(180deg,#F8FCFF 0%,#EEF7FF 45%,#FFF5EF 100%)",
  }}
>
  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0">
    <div
      className="absolute w-[600px] h-[600px] blur-[170px] rounded-full top-[-180px] left-[-180px]"
      style={{ background: "#6FCBFF22" }}
    />
    <div
      className="absolute w-[500px] h-[500px] blur-[170px] rounded-full bottom-[-150px] right-[-150px]"
      style={{ background: "#F46A3A18" }}
    />
  </div>

  <div className="relative grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT VISUAL */}
    <motion.div
      initial={{ opacity: 0, x: -80, scale: 0.9 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      whileHover={{ scale: 1.03 }}
      className="relative"
    >
      <div
        className="rounded-3xl overflow-hidden shadow-2xl border"
        style={{
          background: "#ffffff",
          borderColor: "#D8E9FF",
        }}
      >
        {/* VIDEO / IMAGE PLACEHOLDER */}
        <div
          className="aspect-video flex items-center justify-center font-semibold text-lg"
          style={{
            background:
              "linear-gradient(135deg,#EAF7FF,#FFFFFF,#FFF2EA)",
            color: "#45607D",
          }}
        >
          ▶ Video Content
        </div>
      </div>

      {/* FLOATING BADGE */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -bottom-5 -right-5 rounded-full px-5 py-2 shadow-xl font-semibold"
        style={{
          background: "#fff",
          color: "#223A8F",
          border: "1px solid #D8E9FF",
        }}
      >
        Awareness • Care • Education
      </motion.div>
    </motion.div>

    {/* RIGHT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="max-w-xl"
    >
      {/* TAG */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-semibold tracking-[0.3em] mb-4"
        style={{ color: "#4B74E6" }}
      >
        #ITSJUSTAPERIOD
      </motion.p>

      {/* HEADING */}
      <h2
        className="text-3xl lg:text-5xl font-bold mb-6 leading-tight"
        style={{ color: "#223A8F" }}
      >
        It’s Normal. It’s Natural.
      </h2>

      {/* TEXT */}
      <p
        className="text-lg leading-relaxed mb-10"
        style={{ color: "#5B6B8C" }}
      >
        When a key partner in parenting is absent in one of the most critical
        conversations in their daughter's life, she gets an unstated message
        that this subject is taboo. Girleen believes every girl deserves open,
        honest conversations and confidence throughout her journey.
      </p>

      {/* BUTTON */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="px-8 py-4 text-white rounded-xl shadow-xl"
        style={{
          background:
            "linear-gradient(135deg,#F46A3A,#FF8459)",
        }}
      >
        READ MORE
      </motion.button>
    </motion.div>

  </div>
</section>

      {/* ================= ITS NORMAL (COVID STORY) ================= */}
<section
  className="relative py-28 px-6 lg:px-16 overflow-hidden"
  style={{
    background:
      "linear-gradient(180deg,#F8FCFF 0%,#EEF7FF 45%,#FFF5EF 100%)",
  }}
>
  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0">
    <div
      className="absolute w-[650px] h-[650px] rounded-full blur-[170px] top-[-180px] left-[-180px]"
      style={{ background: "#6FCBFF22" }}
    />
    <div
      className="absolute w-[550px] h-[550px] rounded-full blur-[170px] bottom-[-180px] right-[-180px]"
      style={{ background: "#F46A3A18" }}
    />
  </div>

  <div className="relative grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="max-w-xl"
    >
      {/* TAG */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-semibold tracking-[0.3em] mb-4"
        style={{ color: "#4B74E6" }}
      >
        #ITSJUSTAPERIOD
      </motion.p>

      {/* HEADING */}
      <h2
        className="text-3xl lg:text-5xl font-bold mb-6 leading-tight"
        style={{ color: "#223A8F" }}
      >
        Relearning Comfort in Difficult Times
      </h2>

      {/* TEXT */}
      <p
        className="text-lg leading-relaxed mb-10"
        style={{ color: "#5B6B8C" }}
      >
        We realized that like everything else in the world, challenges around
        menstruation had multiplied during the Covid-19 pandemic. This meant
        rethinking how young girls experience their first period—with greater
        support, awareness, and confidence from their families.
      </p>

      {/* BUTTON */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="px-8 py-4 text-white rounded-xl shadow-xl"
        style={{
          background:
            "linear-gradient(135deg,#F46A3A,#FF8459)",
        }}
      >
        READ MORE
      </motion.button>
    </motion.div>

    {/* RIGHT VISUAL CARD */}
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 0.9 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      whileHover={{ scale: 1.03 }}
      className="relative"
    >
      <div
        className="rounded-3xl overflow-hidden shadow-2xl border"
        style={{
          background: "#ffffff",
          borderColor: "#D8E9FF",
        }}
      >
        {/* VIDEO / IMAGE PLACEHOLDER */}
        <div
          className="aspect-video flex items-center justify-center font-semibold text-lg"
          style={{
            background:
              "linear-gradient(135deg,#EAF7FF,#FFFFFF,#FFF2EA)",
            color: "#45607D",
          }}
        >
          ▶ Video Content
        </div>
      </div>

      {/* FLOATING BADGE */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -top-5 -right-5 rounded-full px-5 py-2 shadow-xl font-semibold"
        style={{
          background: "#fff",
          color: "#223A8F",
          border: "1px solid #D8E9FF",
        }}
      >
        Care • Awareness • Support
      </motion.div>
    </motion.div>

  </div>
</section>

     <FAQ />

{/* ================= FOLLOW US ================= */}
<section
  className="px-6 lg:px-16 py-20"
  style={{
    background: "linear-gradient(180deg,#F8FCFF 0%,#EEF7FF 55%,#FFF5EF 100%)",
  }}
>
  <h2
    className="text-3xl lg:text-5xl font-bold mb-12 text-center"
    style={{ color: "#223A8F" }}
  >
    Follow us on @freshflowindia
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {[
      { text: "Period Cycle Stages", icon: "🌸" },
      { text: "Ways to Relieve Stress", icon: "🧘‍♀️" },
      { text: "Women's Day", icon: "💙" },
      { text: "Sapnon Ke", icon: "✨" },
    ].map((item, i) => (
      <div
        key={i}
        className="
          relative aspect-square rounded-3xl
          flex flex-col items-center justify-center
          text-center overflow-hidden
          transition-all duration-300
          hover:scale-105 hover:-translate-y-2
        "
        style={{
          background: "#FFFFFF",
          border: "1px solid #D8E9FF",
          boxShadow: "0 20px 45px rgba(34,58,143,0.08)",
        }}
      >
        {/* Glow */}
        <div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl"
          style={{ background: "#6FCBFF22" }}
        />

        <div className="relative z-10 text-5xl mb-4">
          {item.icon}
        </div>

        <div
          className="relative z-10 font-semibold text-sm lg:text-base px-4 leading-relaxed"
          style={{ color: "#223A8F" }}
        >
          {item.text}
        </div>

        <div
          className="absolute bottom-5 w-16 h-1 rounded-full"
          style={{
            background: "linear-gradient(90deg,#6FCBFF,#F46A3A)",
          }}
        />
      </div>
    ))}
  </div>
</section>

<SiteFooter />

{/* ================= WHATSAPP ================= */}
<a
  href="https://wa.me/919876543210"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-[9999] group"
>
  <span
    className="absolute inset-0 rounded-full animate-ping opacity-20"
    style={{ background: "#6FCBFF" }}
  ></span>

  <div
    className="
      relative w-16 h-16 rounded-full
      flex items-center justify-center
      hover:scale-110 hover:-translate-y-1
      transition-all duration-300
      shadow-2xl
    "
    style={{
      background:
        "linear-gradient(135deg,#F46A3A 0%,#FF8459 100%)",
      border: "2px solid rgba(255,255,255,.4)",
    }}
  >
    <div className="absolute top-2 left-2 w-5 h-5 rounded-full bg-white/40 blur-sm"></div>

    <div className="text-3xl">💬</div>
  </div>
</a>

</div>
);
}

function FAQ() {
  const faqs = [
    {
      q: "What's puberty?",
      a: "Puberty is when your body changes from a child's into an adult's, typically starting between ages 8–14.",
    },
    {
      q: "What is a period?",
      a: "A period is the monthly shedding of the uterine lining, usually lasting 3–7 days.",
    },
    {
      q: "When will my period start?",
      a: "Most girls start their periods between ages 10 and 15, but it can vary.",
    },
    {
      q: "How long will my periods last?",
      a: "Periods typically last between 3 to 7 days.",
    },
    {
      q: "How can I get rid of cramps and pain during my period?",
      a: "Try a heating pad, gentle exercise, hydration and over-the-counter pain relief if needed.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="px-6 lg:px-16 py-24"
      style={{
        background:
          "linear-gradient(180deg,#F8FCFF 0%,#EEF7FF 45%,#FFF5EF 100%)",
      }}
    >
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>
          <div
            className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mb-8 shadow-lg"
            style={{
              background: "linear-gradient(135deg,#6FCBFF,#A9DFFF)",
            }}
          >
            💙
          </div>

          <h2
            className="text-4xl lg:text-5xl font-bold mb-5"
            style={{ color: "#223A8F" }}
          >
            Frequently Asked Questions
          </h2>

          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ color: "#5B6B8C" }}
          >
            Everything you need to know about periods, puberty and women's health.
          </p>

          <button
            className="px-8 py-4 rounded-xl text-white font-bold shadow-xl hover:scale-105 transition"
            style={{
              background:
                "linear-gradient(135deg,#F46A3A,#FF8459)",
            }}
          >
            ALL FAQS →
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: "#ffffff",
                border: "1px solid #D8E9FF",
                boxShadow: "0 15px 35px rgba(34,58,143,.08)",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span
                  className="font-semibold text-lg"
                  style={{ color: "#223A8F" }}
                >
                  {f.q}
                </span>

                <span
                  className="text-3xl font-bold transition-all duration-300"
                  style={{
                    color: "#F46A3A",
                    transform:
                      open === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              {open === i && (
                <div
                  className="px-6 pb-6 text-base leading-8"
                  style={{ color: "#5B6B8C" }}
                >
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}