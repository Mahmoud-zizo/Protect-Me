// components/landing/CardsGrid.tsx
"use client";

import { useRef, useEffect, useState } from "react";

const CARDS = [
  {
    id: 1,
    title: "Smart Integrations",
    description:
      "Connect your favorite tools like Slack, Discord, and Calendar in seconds.",
    icon: "⚡",
  },
  {
    id: 2,
    title: "83% Resolved",
    description: "Most conversations handled autonomously — no human needed.",
    icon: "📊",
  },
  {
    id: 3,
    title: "Always On",
    description:
      "AI agents work 24/7 across every channel without breaking a sweat.",
    icon: "🌐",
  },
  {
    id: 4,
    title: "5.5B Efficiency",
    description: "Outperforms human reps at scale, every single time.",
    icon: "🚀",
  },
  {
    id: 5,
    title: "Team Quality",
    description:
      "Consistent, high-quality support delivered to every customer.",
    icon: "✅",
  },
  {
    id: 6,
    title: "Global Reach",
    description:
      "Reach customers wherever they are, in any language, at any time.",
    icon: "🗺️",
  },
];

export default function CardsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-[#fcfbf9] to-[#f0ede8]">
      <div className="max-w-5xl mx-auto px-6 pb-24 pt-10">
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {CARDS.map((card, i) => (
          <div
            key={card.id}
            className="group bg-white rounded-[20px] p-7 border border-black/[0.06] flex flex-col gap-4 cursor-default
              shadow-[0_2px_12px_rgba(0,0,0,0.06)]
              hover:shadow-[0_8px_30px_rgba(0,0,0,0.13)]
              hover:-translate-y-1
              transition-all duration-300"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms, box-shadow 0.3s ease, translate 0.3s ease`,
            }}
          >
            <div className="w-11 h-11 rounded-xl bg-[#f0f2f5] flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
              {card.icon}
            </div>
            <div>
              <h3 className="font-semibold text-[#0f1117] text-base tracking-tight mb-1.5">
                {card.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
