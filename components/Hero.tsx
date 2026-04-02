// components/landing/Hero.tsx
"use client";
import Link from "next/link";
import { useInView } from "@/lib/hooks/Useinview";
import CardsGrid from "./CardsGrid";

export default function Hero() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden text-center bg-gradient-to-b from-[#e8ecf2] to-[#f0f2f5] pt-[clamp(100px,15vw,140px)] pb-[clamp(40px,6vw,70px)]"
    >
      {/* Grid texture overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-[clamp(16px,5vw,32px)]">
        {/* Badge */}
        <div
          className={`fade-up inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-black/[0.08] rounded-full px-4 py-1.5 mb-6 ${inView ? "visible" : ""}`}
        >
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-xs font-semibold text-[#555] tracking-wide uppercase">
            Egypt&apos;s #1 Vehicle Protection
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`fade-up tracking-[-0.03em] leading-[1.08] ${inView ? "visible" : ""}`}
          style={{ transitionDelay: "0.05s" }}
        >
          {/* Line 2 — hero word */}
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-b from-[#0f1117] to-[#40444f] bg-clip-text text-transparent">
            Protect Me
          </span>

          {/* Line 3 — accent line */}
          <span className="block text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Premium
            </span>
            <span className="text-[#0f1117]">
              {" "}
              Vehicle Protection, Redefined.
            </span>
          </span>
        </h1>

        <p
          className={`fade-up text-[#666] leading-relaxed max-w-lg mx-auto mt-6 mb-9 text-base font-medium ${inView ? "visible" : ""}`}
          style={{ transitionDelay: "0.15s" }}
        >
          Egypt&apos;s most trusted platform for vehicle protection — combining
          cutting-edge AI with 24/7 expert support to keep you covered, always.
        </p>

        <div
          className={`fade-up flex items-center justify-center gap-3 ${inView ? "visible" : ""}`}
          style={{ transitionDelay: "0.25s" }}
        >
          <Link href="" className="btn">
            Book a Demo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link href="" className="btn bg-white text-black">
            Learn More
          </Link>
        </div>
      </div>

      <CardsGrid />

      <style>{`
        .fade-up { opacity: 0; transform: translateY(24px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </section>
  );
}
