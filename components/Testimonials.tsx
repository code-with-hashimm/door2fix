"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Priya M.",
    initials: "PM",
    color: "bg-violet-500",
    device: "iPhone 13 – Screen Replacement",
    rating: 5,
    review:
      "Absolutely seamless experience! The technician arrived within 30 minutes, fixed my cracked screen in under an hour, and the display looks brand new. Highly recommend Door2Fix to everyone.",
  },
  {
    name: "Arjun S.",
    initials: "AS",
    color: "bg-emerald-500",
    device: "Samsung S22 – Battery Replacement",
    rating: 5,
    review:
      "My phone was barely lasting 2 hours on a charge. Door2Fix replaced the battery at my office desk during my lunch break. Now it lasts all day again. Super professional service.",
  },
  {
    name: "Neha T.",
    initials: "NT",
    color: "bg-amber-500",
    device: "OnePlus 11 – Charging Port Repair",
    rating: 5,
    review:
      "I was skeptical about doorstep repair but they completely won me over. The tech was knowledgeable, clean, and had my phone charging perfectly in 45 minutes. 10/10 experience.",
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-3"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Customer Stories
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            What Our Customers Say
          </h2>
        </div>

        {/* Cards */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="bg-white rounded-2xl border border-slate-200 p-7 flex flex-col gap-4 hover:shadow-lg hover:shadow-slate-200/60 transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review */}
              <p
                className="text-slate-600 text-sm leading-relaxed flex-1"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div
                  className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    className="text-sm font-semibold text-slate-900"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs text-slate-400"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {t.device}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
