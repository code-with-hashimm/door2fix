"use client";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Shield, Clock, Star, Smartphone, Wrench } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: EASE },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20"
    >
      {/* Animated background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-pulse-mesh absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,_#DBEAFE_0%,_transparent_70%)] opacity-60" />
        <div
          className="animate-pulse-mesh absolute bottom-[-15%] left-[-8%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,_#EFF6FF_0%,_transparent_70%)] opacity-50"
          style={{ animationDelay: "3s" }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTYzRUIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgNHYyaC0ydi0yaDJ6bTIgMGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-100" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left — Text */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-[#2563EB] text-xs font-semibold rounded-full border border-blue-100 tracking-wide">
              <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
              Same-Day Service Available
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Fast, Reliable Repairs —{" "}
            <span className="text-[#2563EB] relative inline-block">
              Right at Your Doorstep
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="6"
                viewBox="0 0 300 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4 C80 0 220 0 298 4"
                  stroke="#2563EB"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.35"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            {...fadeUp(0.3)}
            className="text-lg text-slate-600 leading-relaxed max-w-[480px]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            We fix cracked screens, dead batteries, charging ports and more.
            Our certified technicians come to you — no travel, no hassle.
          </motion.p>

          {/* Trust badges */}
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 text-sm text-slate-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
            {[
              { icon: Shield, text: "6-Month Warranty" },
              { icon: Clock, text: "30-Min Response" },
              { icon: Star, text: "4.9★ Rated" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5">
                <Icon size={15} className="text-[#2563EB]" />
                {text}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              id="hero-book-repair-btn"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold rounded-full shadow-lg hover:shadow-blue-400/40 transition-all duration-200 active:scale-95"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Book a Repair
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              id="hero-view-services-btn"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-slate-200 hover:border-[#2563EB] text-slate-700 hover:text-[#2563EB] font-semibold rounded-full transition-all duration-200 bg-white hover:bg-blue-50"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              View Services
              <ChevronRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right — Floating Repair Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="relative flex items-center justify-center"
        >
          {/* Glow behind card */}
          <div className="absolute w-72 h-72 bg-[#2563EB]/10 rounded-full blur-3xl" />

          {/* Phone mockup + status card */}
          <div className="animate-float relative z-10">
            {/* Phone frame */}
            <div className="relative w-52 h-[420px] bg-slate-900 rounded-[36px] border-4 border-slate-800 shadow-2xl shadow-slate-900/30 overflow-hidden mx-auto">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-slate-900 rounded-b-2xl z-10" />
              {/* Screen content */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
                {/* Cracked screen effect */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-40"
                  viewBox="0 0 208 420"
                >
                  <path d="M104 60 L90 110 L120 130 L85 200 L110 240 L75 320 L95 380" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.6" />
                  <path d="M104 60 L115 95 L95 120 L125 170 L100 210" stroke="#ffffff" strokeWidth="1" fill="none" opacity="0.4" />
                  <path d="M90 110 L60 140 L80 160" stroke="#ffffff" strokeWidth="0.8" fill="none" opacity="0.3" />
                  <path d="M120 130 L150 155 L135 185 L160 210" stroke="#ffffff" strokeWidth="0.8" fill="none" opacity="0.3" />
                </svg>
                {/* App-like UI overlay */}
                <div className="absolute inset-x-4 bottom-6 space-y-2">
                  <div className="bg-white/10 backdrop-blur rounded-xl p-3">
                    <p className="text-white/50 text-[9px] mb-1" style={{ fontFamily: "var(--font-dm-sans)" }}>DIAGNOSIS</p>
                    <p className="text-white text-xs font-semibold" style={{ fontFamily: "var(--font-dm-sans)" }}>Screen Damaged</p>
                    <div className="mt-1.5 bg-white/20 rounded-full h-1">
                      <div className="bg-[#2563EB] h-1 rounded-full w-3/4" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Home bar */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full" />
            </div>

            {/* Status card floating top-right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              className="absolute -top-4 -right-6 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 w-44"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 bg-[#2563EB] rounded-full flex items-center justify-center text-white text-[10px] font-bold">RK</div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-800" style={{ fontFamily: "var(--font-dm-sans)" }}>Rahul K.</p>
                  <p className="text-[9px] text-slate-500" style={{ fontFamily: "var(--font-dm-sans)" }}>Certified Technician</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-slate-500" style={{ fontFamily: "var(--font-dm-sans)" }}>ETA</span>
                <span className="text-[10px] font-bold text-[#2563EB]" style={{ fontFamily: "var(--font-dm-sans)" }}>~25 min</span>
              </div>
              <div className="mt-1.5 flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={9} className="fill-amber-400 text-amber-400" />
                ))}
                <span className="text-[9px] text-slate-500 ml-1" style={{ fontFamily: "var(--font-dm-sans)" }}>4.9</span>
              </div>
            </motion.div>

            {/* Repair progress card floating bottom-left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.4 }}
              className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 w-40"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Wrench size={12} className="text-green-600" />
                </div>
                <span className="text-[10px] font-semibold text-slate-800" style={{ fontFamily: "var(--font-dm-sans)" }}>In Progress</span>
              </div>
              <p className="text-[9px] text-slate-500 mb-1.5" style={{ fontFamily: "var(--font-dm-sans)" }}>Screen Replacement</p>
              <div className="bg-slate-100 rounded-full h-1.5">
                <motion.div
                  className="bg-[#2563EB] h-1.5 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "65%" }}
                  transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
                />
              </div>
              <p className="text-[9px] text-slate-400 mt-1" style={{ fontFamily: "var(--font-dm-sans)" }}>65% complete</p>
            </motion.div>

            {/* Small device icon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="absolute top-1/2 -right-12 bg-blue-50 rounded-xl p-2.5 shadow-md border border-blue-100"
            >
              <Smartphone size={20} className="text-[#2563EB]" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
