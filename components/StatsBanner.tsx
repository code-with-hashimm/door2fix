"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const STATS = [
  { value: 10000, suffix: "+", label: "Repairs Done" },
  { value: 4.9, suffix: "★", label: "Average Rating", decimal: true },
  { value: 30, suffix: " Min", label: "Response Time" },
  { value: 6, suffix: " Month", label: "Warranty" },
];

function useCountUp(target: number, isActive: boolean, decimal = false, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = decimal
        ? Math.round(ease * target * 10) / 10
        : Math.round(ease * target);
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isActive, target, decimal, duration]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  decimal,
  isActive,
}: {
  value: number;
  suffix: string;
  label: string;
  decimal?: boolean;
  isActive: boolean;
}) {
  const count = useCountUp(value, isActive, decimal);

  return (
    <div className="flex flex-col items-center gap-2 py-2">
      <p
        className="text-4xl sm:text-5xl font-extrabold text-white tabular-nums"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        {decimal ? count.toFixed(1) : count.toLocaleString()}
        <span className="text-blue-200">{suffix}</span>
      </p>
      <p
        className="text-blue-100 text-sm font-medium tracking-wide"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        {label}
      </p>
    </div>
  );
}

export default function StatsBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-16 overflow-hidden bg-[#2563EB]">
      {/* Decorative blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} isActive={inView} />
        ))}
      </div>
    </section>
  );
}
