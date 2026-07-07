
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import SiteNav from "@/components/ui/SiteNav";
import SiteFooter from "@/components/ui/SiteFooter";

export const Route = createFileRoute("/contact-us")({
component: ContactUsPage,
});

function ContactUsPage() {

return (

<>

<SiteNav />

<section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#F05A3A]/10 via-white to-[#1CC7D8]/10">

{/* Background Glow */}

<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#F05A3A]/20 blur-[150px] rounded-full"></div>

<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1CC7D8]/20 blur-[150px] rounded-full"></div>

<div className="relative z-10 px-6 lg:px-16 py-20">

{/* Hero */}

<motion.div

initial={{ opacity: 0, y: 60 }}

animate={{ opacity: 1, y: 0 }}

transition={{ duration: 0.8 }}

className="text-center max-w-4xl mx-auto mb-20"

>

<span className="px-6 py-3 rounded-full bg-pink-100 text-[#F05A3A] font-bold shadow-lg">

💬 Get in Touch

</span>

<h1 className="text-6xl lg:text-8xl font-black mt-8 leading-tight">

Contact

<span className="bg-gradient-to-r from-[#F05A3A]/10  via-rose-500 to-purple-600 bg-clip-text text-transparent">

FreshFlow

</span>

</h1>

<p className="mt-8 text-xl text-gray-600 leading-relaxed">

We're here to help. Whether you have questions about our products, feedback, or need support, our team is ready to assist you.

</p>

</motion.div>

{/* Contact Cards */}

<div className="grid md:grid-cols-3 gap-8 mb-20">

{[

{ icon: "📞", title: "Call Us", info: "+91 98765 43210" },

{ icon: "✉️", title: "Email Us", info: "support@freshflow.com" },

{ icon: "📍", title: "Visit Us", info: "Ranchi, Jharkhand, India" },

].map((item, i) => (

<motion.div

key={i}

whileHover={{ y: -10, scale: 1.03 }}

className="bg-white/70 backdrop-blur-xl rounded-[35px] p-10 border border-white shadow-[0_20px_60px_rgba(236,72,153,0.15)] text-center"

>

<div className="text-6xl mb-6">{item.icon}</div>

<h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>

<p className="text-gray-600 text-lg">{item.info}</p>

</motion.div>

))}

</div>

{/* Contact Form */}

<motion.div

initial={{ opacity: 0, y: 60 }}

whileInView={{ opacity: 1, y: 0 }}

transition={{ duration: 0.8 }}

className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl rounded-[40px] p-10 shadow-[0_20px_60px_rgba(236,72,153,0.15)]"

>

<h2 className="text-4xl font-bold text-center mb-10">Send Us a Message 💕</h2>

<div className="grid md:grid-cols-2 gap-6">

<input type="text" placeholder="Your Name" className="w-full px-5 py-4 rounded-2xl border border-pink-200 focus:border-pink-500 outline-none bg-white/80" />

<input type="email" placeholder="Your Email" className="w-full px-5 py-4 rounded-2xl border border-pink-200 focus:border-pink-500 outline-none bg-white/80" />

</div>

<div className="mt-6">

<input type="text" placeholder="Subject" className="w-full px-5 py-4 rounded-2xl border border-pink-200 focus:border-pink-500 outline-none bg-white/80" />

</div>

<div className="mt-6">

<textarea rows={6} placeholder="Write your message..." className="w-full px-5 py-4 rounded-2xl border border-pink-200 focus:border-pink-500 outline-none bg-white/80 resize-none" />

</div>

<div className="text-center mt-8">

<motion.button

whileHover={{ scale: 1.05 }}

whileTap={{ scale: 0.95 }}

className="px-10 py-4 rounded-2xl bg-gradient-to-r from-[#F05A3A]/10 to-rose-500 text-white font-bold text-lg shadow-xl"

>

🚀 Send Message

</motion.button>

</div>

</motion.div>

{/* Bottom CTA */}

<div className="text-center mt-24">

<h2 className="text-4xl font-bold mb-6 text-gray-800">

We'd Love to Hear From You 🌸

</h2>

<p className="text-gray-600 text-lg max-w-2xl mx-auto">

Your questions, feedback and suggestions help us create better experiences for women across India. Let's connect!

</p>

</div>

</div>

</section>

<SiteFooter />

</>

);

}