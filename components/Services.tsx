"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Smartphone,
  BatteryCharging,
  Zap,
  Droplets,
  Camera,
  Code2,
} from "lucide-react";

const SERVICES = [
  {
    icon: Smartphone,
    title: "Screen Replacement",
    desc: "Cracked or shattered display? Get a crystal-clear replacement fast.",
  },
  {
    icon: BatteryCharging,
    title: "Battery Replacement",
    desc: "Restore full-day battery life with a genuine capacity cell.",
  },
  {
    icon: Zap,
    title: "Charging Port Repair",
    desc: "Won't charge? We clean and replace ports for all device types.",
  },
  {
    icon: Droplets,
    title: "Water Damage Recovery",
    desc: "Liquid intrusion treated with professional ultrasonic cleaning.",
  },
  {
    icon: Camera,
    title: "Camera Repair",
    desc: "Blurry, cracked, or non-functional cameras fixed to factory spec.",
  },
  {
    icon: Code2,
    title: "Software Issues",
    desc: "Boot loops, crashes, OS updates and data-loss recovery handled.",
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-3"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Our Expertise
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            What We Fix
          </h2>
          <p
            className="text-slate-500 max-w-xl mx-auto text-base"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            From screen cracks to software glitches — our certified technicians
            handle it all, right at your doorstep.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -10px rgba(37,99,235,0.12)" }}
              className="group relative bg-white rounded-2xl border border-slate-200 p-7 cursor-default transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-blue-50 group-hover:bg-[#2563EB] rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <Icon className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Text */}
              <h3
                className="text-lg font-semibold text-slate-900 mb-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {title}
              </h3>
              <p
                className="text-slate-500 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {desc}
              </p>

              {/* Hover accent border */}
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#2563EB] rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
