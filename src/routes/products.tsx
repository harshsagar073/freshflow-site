import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck,Heart,Sparkles,Star,ArrowRight,} from "lucide-react";
import SiteNav from "@/components/ui/SiteNav";
import SiteFooter from "@/components/ui/SiteFooter";
import productsCottony from "@/assets/products-cottony.jpg";
import productsDrymax from "@/assets/products-drymax.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Girleen" },
      { name: "description", content: "Explore Girleen's range of sanitary napkins designed for superior protection and comfort." },
    ],
  }),
  component: ProductsPage,
});

const navy = "#1e2b8f";
const pink = "#e6007e";
const blueLight = "#eaf3fb";

const products = [
  { name: "Girleen Secure Nights", desc: "Worry-free sleep with up to 100% leakage protection.", cat: "Overnight", img: productsCottony },
  { name: "Girleen Secure Cottony XL", desc: "Soft cottony cover for everyday comfort.", cat: "Day Use", img: productsCottony },
  { name: "Girleen Dry-Max All Night", desc: "Dry net cover for all-round overnight protection.", cat: "Overnight", img: productsDrymax },
  { name: "Girleen Secure Dry XL", desc: "Dry cover for fast absorbency on heavy days.", cat: "Heavy Flow", img: productsDrymax },
  { name: "Girleen Cottony Regular", desc: "Gentle comfort for light-to-medium flow days.", cat: "Regular", img: productsCottony },
  { name: "Girleen Dry-Max XXXL", desc: "Maximum coverage for the longest days.", cat: "Heavy Flow", img: productsDrymax },
];

function ProductsPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', system-ui, sans-serif", color: navy }}>
      <SiteNav />
      <header className="relative overflow-hidden bg-gradient-to-br from-[#F05A3A]/10 via-white to-[#1CC7D8]/10">

  <div className="absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full bg-pink-300/30 blur-[130px]" />

  <div className="absolute -bottom-40 right-0 w-[420px] h-[420px] rounded-full bg-purple-300/30 blur-[130px]" />

  <div className="absolute top-24 left-1/2 w-52 h-52 rounded-full bg-pink-200/20 blur-[80px]" />

  <div className="relative z-10 px-6 lg:px-16 py-24">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .8 }}
      className="max-w-5xl mx-auto text-center"
    >

      <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink-100 text-[#F05A3A] font-semibold shadow-lg">

        <Sparkles size={18} />

        Premium Women's Care

      </span>

      <h1 className="text-6xl lg:text-7xl font-black leading-tight mt-8 text-gray-900">

        Comfort You
        <br />

        <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">

          Can Trust

        </span>

      </h1>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8 leading-relaxed">

        Every Girleen product is carefully designed with advanced
        absorbent technology, skin-friendly materials and superior
        protection to help women feel confident every single day.

      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-12">


        <Link
          to="/about-us"
          className="px-10 py-5 rounded-2xl border-2 border-pink-300 bg-white hover:bg-pink-50 font-bold text-[#F05A3A] transition hover:scale-105"
        >

          Learn More

        </Link>

      </div>

    </motion.div>

    <div className="grid md:grid-cols-4 gap-8 mt-24">

      {[
        {
          icon: ShieldCheck,
          title: "100%",
          text: "Leak Protection",
        },
        {
          icon: Heart,
          title: "Soft",
          text: "Cotton Comfort",
        },
        {
          icon: Star,
          title: "55+",
          text: "Years of Trust",
        },
        {
          icon: Sparkles,
          title: "1M+",
          text: "Happy Customers",
        },
      ].map((item, i) => {

        const Icon = item.icon;

        return (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * .15 }}
            whileHover={{
              y: -12,
              scale: 1.04,
            }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white shadow-[0_20px_60px_rgba(236,72,153,0.15)] text-center"
          >

            <div className="mx-auto w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-6">

              <Icon className="text-[#F05A3A]" size={30} />

            </div>

            <h3 className="text-3xl font-black text-gray-900">

              {item.title}

            </h3>

            <p className="text-gray-600 mt-2">

              {item.text}

            </p>

          </motion.div>

        );

      })}

    </div>

  </div>

</header>

     <section
  id="products-section"
  className="relative px-6 lg:px-16 py-24 bg-gradient-to-b from-white via-pink-50/40 to-white"
>

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: .8 }}
    className="text-center mb-16"
  >
    <span className="inline-block px-5 py-2 rounded-full bg-pink-100 text-[#F05A3A] font-bold">
      OUR COLLECTION
    </span>

    <h2 className="text-5xl font-black mt-6 text-gray-900">
      Find Your Perfect
      <span className="text-[#F05A3A]"> Girleen Product</span>
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
      Every woman deserves comfort, confidence and protection.
      Explore our premium collection designed for every flow and every lifestyle.
    </p>
  </motion.div>

  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

    {products.map((p, i) => (

      <motion.div
        key={p.name}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * .12 }}
        whileHover={{
          y: -15,
          scale: 1.03
        }}
        className="group rounded-[35px] overflow-hidden bg-white shadow-xl border border-pink-100 hover:shadow-[0_25px_70px_rgba(236,72,153,.20)] transition-all duration-500"
      >

        <div className="relative overflow-hidden">

          <div className="absolute top-5 left-5 z-20">

            <span className="px-4 py-2 rounded-full bg-[#F05A3A]s text-white text-xs font-bold">

              {p.cat}

            </span>

          </div>

          <img
            src={p.img}
            alt={p.name}
            className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        </div>

        <div className="p-8">

          <div className="flex items-center gap-1 mb-4">

            ⭐⭐⭐⭐⭐

            <span className="text-gray-500 text-sm ml-2">

              (4.9)

            </span>

          </div>

          <h3 className="text-2xl font-bold text-gray-900">

            {p.name}

          </h3>

          <p className="text-gray-600 mt-4 leading-relaxed">

            {p.desc}

          </p>

          <div className="flex flex-wrap gap-2 mt-6">

            <span className="px-3 py-2 rounded-full bg-pink-100 text-[#F05A3A] text-sm">

              Soft Cotton

            </span>

            <span className="px-3 py-2 rounded-full bg-blue-100 text-blue-600 text-sm">

              Leak Protection

            </span>

            <span className="px-3 py-2 rounded-full bg-green-100 text-green-600 text-sm">

              Skin Friendly

            </span>

          </div>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-3 font-bold text-[#F05A3A] hover:text-pink-500"
          >

            Learn More →

          </Link>

        </div>

      </motion.div>

    ))}

  </div>

</section>

{/* WHY CHOOSE GIRLEEN */}

<section className="px-6 lg:px-16 py-24 bg-gradient-to-r from-pink-600 to-purple-600">

<div className="max-w-7xl mx-auto">

<h2 className="text-5xl font-black text-white text-center mb-16">

Why Women Love Girleen 💕

</h2>

<div className="grid md:grid-cols-4 gap-8">

{[
{
icon:"🛡️",
title:"Maximum Protection",
desc:"Advanced absorbent core prevents leakage."
},
{
icon:"🌸",
title:"Cotton Comfort",
desc:"Soft breathable material for everyday freshness."
},
{
icon:"⚡",
title:"Fast Absorption",
desc:"Keeps you dry throughout the day."
},
{
icon:"💖",
title:"Dermatologically Tested",
desc:"Gentle on sensitive skin."
}
].map((item,i)=>(

<motion.div

key={i}

whileHover={{
y:-15,
scale:1.05
}}

className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20"

>

<div className="text-6xl mb-5">

{item.icon}

</div>

<h3 className="text-2xl font-bold text-white mb-4">

{item.title}

</h3>

<p className="text-pink-100">

{item.desc}

</p>

</motion.div>

))}

</div>

</div>

</section>
{/* CUSTOMER REVIEWS */}

<section className="px-6 lg:px-16 py-24 bg-pink-50">

<motion.div
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:.8}}
className="text-center mb-16"
>

<h2 className="text-5xl font-black text-gray-900">

Loved By Thousands of Women 💕

</h2>

<p className="text-gray-600 mt-5 max-w-3xl mx-auto">

Real experiences from women who trust Girleen every month.

</p>

</motion.div>

<div className="grid md:grid-cols-3 gap-8">

{[
{
name:"Priya Sharma",
city:"Delhi",
review:"The softest sanitary pads I've ever used. Extremely comfortable and no leakage."
},
{
name:"Ananya Roy",
city:"Kolkata",
review:"Perfect for heavy flow. I can sleep peacefully throughout the night."
},
{
name:"Sneha Patel",
city:"Ahmedabad",
review:"Highly recommend Girleen to every woman. Great quality and affordable."
}
].map((item,i)=>(

<motion.div

key={i}

whileHover={{
y:-12,
scale:1.04
}}

className="bg-white rounded-[30px] p-8 shadow-xl"

>

<div className="text-yellow-400 text-2xl">

⭐⭐⭐⭐⭐

</div>

<p className="text-gray-600 mt-5 italic">

"{item.review}"

</p>

<div className="mt-8">

<h4 className="font-bold text-xl">

{item.name}

</h4>

<p className="text-gray-500">

{item.city}

</p>

</div>

</motion.div>

))}

</div>

</section>

{/* STATISTICS */}

<section className="px-6 lg:px-16 py-24 bg-white">

<div className="grid md:grid-cols-4 gap-8">

{[
{
number:"55+",
label:"Years of Trust"
},
{
number:"1M+",
label:"Happy Customers"
},
{
number:"100%",
label:"Quality Tested"
},
{
number:"24/7",
label:"Customer Support"
}
].map((item,i)=>(

<motion.div

key={i}

whileHover={{
scale:1.08
}}

className="text-center p-10 rounded-3xl bg-gradient-to-br from-[#F05A3A]/10  to-[#1CC7D8]/10 text-white shadow-xl"

>

<h2 className="text-5xl font-black">

{item.number}

</h2>

<p className="mt-3">

{item.label}

</p>

</motion.div>

))}

</div>

</section>

{/* SUSTAINABILITY */}

<section className="px-6 lg:px-16 py-24 bg-gradient-to-r from-purple-50 to-pink-50">

<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>

<h2 className="text-5xl font-black mb-8">

Committed To A Better Future 🌍

</h2>

<p className="text-gray-600 text-lg leading-relaxed">

At Girleen, we believe caring for women also means caring for the environment.
We continuously improve our products using safe materials,
responsible manufacturing and sustainable practices.

</p>

<div className="space-y-5 mt-10">

<div className="flex gap-4">

<div className="text-3xl">🌱</div>

<div>

<h4 className="font-bold">

Eco Conscious Materials

</h4>

<p className="text-gray-600">

Designed with sustainability in mind.

</p>

</div>

</div>

<div className="flex gap-4">

<div className="text-3xl">♻️</div>

<div>

<h4 className="font-bold">

Responsible Manufacturing

</h4>

<p className="text-gray-600">

Reducing waste and improving efficiency.

</p>

</div>

</div>

<div className="flex gap-4">

<div className="text-3xl">💖</div>

<div>

<h4 className="font-bold">

Women's Wellness

</h4>

<p className="text-gray-600">

Empowering women through education and awareness.

</p>

</div>

</div>

</div>

</div>

<motion.div

animate={{
y:[0,-20,0]
}}

transition={{
repeat:Infinity,
duration:5
}}

className="bg-gradient-to-br from-[#F05A3A]/10 to-[#1CC7D8]/10 rounded-[40px] p-14 text-white shadow-2xl"

>

<h3 className="text-4xl font-bold">

Making Every Period Better

</h3>

<p className="mt-6 text-pink-100">

Innovation, comfort and confidence come together to create products women can trust every single day.

</p>

</motion.div>

</div>

</section>

{/* CTA */}

<section className="relative overflow-hidden px-6 lg:px-16 py-28 bg-gradient-to-r from-pink-600 to-purple-600 text-white">

<div className="absolute -left-32 top-0 w-96 h-96 rounded-full bg-white/10 blur-[100px]" />

<div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-white/10 blur-[100px]" />

<div className="relative z-10 text-center max-w-5xl mx-auto">

<h2 className="text-6xl font-black">

Experience Comfort Like Never Before

</h2>

<p className="mt-8 text-xl text-pink-100">

Join millions of women who trust Girleen every month.

</p>

<div className="flex flex-wrap justify-center gap-6 mt-12">

<a
  href="#products-section"
  className="px-10 py-5 rounded-2xl bg-white text-[#F05A3A] font-bold hover:scale-105 transition shadow-xl"
>
  Explore Products
</a>

<Link

to="/contact-us"

className="px-10 py-5 rounded-2xl border-2 border-white font-bold hover:bg-white hover:text-[#F05A3A] transition"

>

Contact Us

</Link>

</div>

</div>

</section>
      <SiteFooter />
    </div>
  );
}