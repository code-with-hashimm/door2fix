"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function BookingCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-20 bg-[#EFF6FF] relative overflow-hidden">
      {/* Decorative blur circles */}
      <div className="absolute top-[-60px] left-[-60px] w-80 h-80 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-40px] w-96 h-96 bg-[#2563EB]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/40 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: EASE }}
        >
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-blue-200 text-[#2563EB] text-xs font-semibold rounded-full mb-6 shadow-sm"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <ShieldCheck size={13} />
            No Fix, No Fee — Guaranteed
          </span>

          {/* Headline */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Ready to Get Your Device Fixed?
          </h2>

          {/* Subtext */}
          <p
            className="text-slate-600 text-lg mb-8 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Same-day service available. No fix, no fee. Book in under 2 minutes
            and a certified technician will be at your door.
          </p>

          {/* CTA Button */}
          <motion.a
            href="https://wa.me/9100000000"
            id="cta-book-repair-btn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-base rounded-full shadow-xl shadow-blue-400/30 hover:shadow-blue-400/50 transition-all duration-200"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Book a Repair Now
            <ArrowRight size={20} />
          </motion.a>

          {/* Sub-note */}
          <p
            className="text-xs text-slate-400 mt-4"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Available Mon–Sun, 9 AM – 8 PM · Mumbai, Pune, Nashik & more
          </p>
        </motion.div>
      </div>
    </section>
  );
}
