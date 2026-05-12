import Image from "next/image";

const LOGOS = [
  { file: "apple.svg", alt: "Apple" },
  { file: "samsung.svg", alt: "Samsung" },
  { file: "xiaomi.svg", alt: "Xiaomi" },
  { file: "realme.svg", alt: "Realme" },
  { file: "oppo.svg", alt: "Oppo" },
  { file: "vivo.svg", alt: "Vivo" },
  { file: "motorola.svg", alt: "Motorola" },
  { file: "nokia.svg", alt: "Nokia" },
  { file: "huawei.svg", alt: "Huawei" },
  { file: "sony.svg", alt: "Sony" },
];

// Duplicate arrays for seamless infinite loop
const ROW1 = [...LOGOS, ...LOGOS];
const ROW2 = [...LOGOS.slice(5), ...LOGOS.slice(0, 5), ...LOGOS.slice(5), ...LOGOS.slice(0, 5)];

function LogoPill({ file, alt }: { file: string; alt: string }) {
  return (
    <div className="flex-shrink-0 mx-3 w-[120px] h-[52px] bg-white rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-center px-4 hover:border-blue-200 hover:shadow-md transition-all duration-200">
      <Image
        src={`/brand-logos/${file}`}
        alt={alt}
        width={90}
        height={36}
        className="object-contain max-h-8"
        unoptimized
      />
    </div>
  );
}

export default function BrandCarousel() {
  return (
    <section id="brands" className="py-16 bg-slate-50 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-10 px-4">
        <p
          className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-2"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Trusted Expertise
        </p>
        <h2
          className="text-2xl sm:text-3xl font-bold text-slate-900"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          We Repair All Major Brands
        </h2>
      </div>

      {/* Carousel rows */}
      <div className="space-y-4">
        {/* Row 1 — scrolls left */}
        <div className="carousel-fade-mask overflow-hidden">
          <div
            className="animate-scroll-left flex"
            style={{ width: "max-content" }}
          >
            {ROW1.map((logo, i) => (
              <LogoPill key={`r1-${i}`} file={logo.file} alt={logo.alt} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="carousel-fade-mask overflow-hidden">
          <div
            className="animate-scroll-right flex"
            style={{ width: "max-content" }}
          >
            {ROW2.map((logo, i) => (
              <LogoPill key={`r2-${i}`} file={logo.file} alt={logo.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
