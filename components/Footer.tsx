import { Wrench, Phone, Mail, MessageCircle, MapPin } from "lucide-react";

const SERVICES = [
  "Screen Replacement",
  "Battery Replacement",
  "Charging Port Repair",
  "Water Damage Recovery",
  "Camera Repair",
  "Software Issues",
];

const CITIES = ["Mumbai", "Pune", "Nashik", "Jalgaon", "Aurangabad"];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
                <Wrench size={16} className="text-white" />
              </div>
              <span
                className="text-xl font-bold text-white tracking-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Door<span className="text-[#60A5FA]">2</span>Fix
              </span>
            </a>
            <p
              className="text-slate-400 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Your Device, Fixed at Your Door. Professional smartphone and tablet
              repair service delivered right to your doorstep.
            </p>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4
              className="text-sm font-semibold text-white uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-150"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Cities */}
          <div>
            <h4
              className="text-sm font-semibold text-white uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Cities Served
            </h4>
            <ul className="space-y-2.5">
              {CITIES.map((city) => (
                <li key={city} className="flex items-center gap-2">
                  <MapPin size={12} className="text-[#60A5FA] flex-shrink-0" />
                  <span
                    className="text-slate-400 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {city}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div id="contact-footer">
            <h4
              className="text-sm font-semibold text-white uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Contact
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="tel:+919100000000"
                  className="flex items-center gap-2.5 text-slate-400 hover:text-white text-sm transition-colors duration-150 group"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  <Phone size={14} className="text-[#60A5FA] group-hover:text-[#2563EB] transition-colors" />
                  +91 91000 00000
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@door2fix.in"
                  className="flex items-center gap-2.5 text-slate-400 hover:text-white text-sm transition-colors duration-150 group"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  <Mail size={14} className="text-[#60A5FA] group-hover:text-[#2563EB] transition-colors" />
                  hello@door2fix.in
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/9100000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-400 hover:text-white text-sm transition-colors duration-150 group"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  <MessageCircle size={14} className="text-[#25D366] group-hover:text-[#1EBE5B] transition-colors" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-slate-500 text-xs"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            © 2025 Door2Fix. All rights reserved.
          </p>
          <p
            className="text-slate-600 text-xs"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Your Device, Fixed at Your Door.
          </p>
        </div>
      </div>
    </footer>
  );
}
