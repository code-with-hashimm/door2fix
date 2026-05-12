"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarCheck, UserCheck, CheckCircle2 } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const STEPS = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Book Online",
    desc: "Select your device, describe the issue, and pick a convenient time slot — all in under 2 minutes.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Technician Visits You",
    desc: "A certified technician arrives at your home or office at the scheduled time, fully equipped.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Device Fixed & Tested",
    desc: "Repair is done on-site in most cases. We test thoroughly before leaving — guaranteed.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-3"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Simple Process
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Get Repaired in 3 Simple Steps
          </h2>
        </div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connecting dotted line — desktop only */}
          <div className="hidden lg:block absolute top-12 left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-px border-t-2 border-dashed border-blue-200 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {STEPS.map(({ number, icon: Icon, title, desc }, idx) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.18, ease: EASE }}
                className="flex flex-col items-center text-center"
              >
                {/* Number circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white border-2 border-blue-100 rounded-full flex items-center justify-center shadow-md shadow-blue-100/50">
                    <div className="w-14 h-14 bg-[#2563EB] rounded-full flex items-center justify-center">
                      <Icon size={26} className="text-white" />
                    </div>
                  </div>
                  {/* Step number badge */}
                  <span
                    className="absolute -top-1 -right-1 w-6 h-6 bg-white border-2 border-blue-200 rounded-full text-[10px] font-bold text-[#2563EB] flex items-center justify-center"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {idx + 1}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold text-slate-900 mb-3"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-slate-500 text-sm leading-relaxed max-w-xs"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
