// components/landing/Hero.tsx
"use client";

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

      <div className="relative max-w-[820px] mx-auto px-[clamp(16px,5vw,32px)]">
        <h1
          className={`fade-up font-bold leading-[1.12] tracking-[-0.03em] text-[#0f1117] text-[clamp(1.85rem,5.5vw,3.8rem)] ${inView ? "visible" : ""}`}
        >
          AI-Driven Support To Boost
          <br />
          Your Business Growth
        </h1>

        <p
          className={`fade-up text-[#666] leading-[1.75] max-w-[500px] mx-auto mt-5 mb-9 text-[clamp(13px,2vw,15px)] ${inView ? "visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          A platform that helps customer service leaders provide efficient,
          high-quality support at scale with an AI agent, improving speed and
          quality across all channels, 24/7.
        </p>

        <div
          className={`fade-up ${inView ? "visible" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#0f1117] text-white text-[15px] font-medium px-7 py-[14px] rounded-full no-underline shadow-[0_4px_20px_rgba(0,0,0,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.22)]"
          >
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
          </a>
        </div>
      </div>
      <CardsGrid />
    </section>
  );
}
