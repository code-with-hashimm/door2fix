"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const repairs = [
  { label: "Screen", file: "screen.png" },
  { label: "Back Panel", file: "back-panel.png" },
  { label: "Battery", file: "battery.png" },
  { label: "Body", file: "body.png" },
  { label: "Camera", file: "camera.png" },
  { label: "Charging Jack", file: "charging-jack.png" },
  { label: "Ear Speaker", file: "ear-speaker.png" },
  { label: "Glass Damage", file: "glass-damage.png" },
  { label: "Liquid Damage", file: "liquid-damage.png" },
  { label: "Mic", file: "mic.png" },
  { label: "Power Button", file: "power-button.png" },
  { label: "Volume Button", file: "volume-button.png" },
];

export default function NeedRepair() {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-12"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          What Needs Repair in Your Phone?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {repairs.map((repair, index) => (
            <motion.div
              key={repair.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center p-4 aspect-square"
            >
              <div className="relative w-full h-[70%] mb-3">
                <Image
                  src={`/Need-Repaires-png/${encodeURIComponent(repair.file)}`}
                  alt={`${repair.label} Repair`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-contain"
                />
              </div>
              <span
                className="font-medium text-sm text-slate-800 text-center"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {repair.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
