"use client";
import { useState, useEffect, useRef } from "react";

const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const integrationIcons = [
  {
    bg: "#5865F2",
    label: "Discord",
    svg: (
      <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
      </svg>
    ),
  },
  {
    bg: "#4A154B",
    label: "Slack",
    svg: (
      <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
      </svg>
    ),
  },
  {
    bg: "#EA4335",
    label: "Calendar",
    svg: (
      <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.89 4 3 4.9 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V9h14v11zM7 11h5v5H7z" />
      </svg>
    ),
  },
];

const avatars = [
  { initials: "A", color: "#f472b6" },
  { initials: "B", color: "#60a5fa" },
  { initials: "C", color: "#34d399" },
];

export default function SamfundLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroRef, heroInView] = useInView(0.1);
  const [gridRef, gridInView] = useInView(0.05);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Instrument Sans','DM Sans',sans-serif",
        background: "#f0f2f5",
        minHeight: "100vh",
        color: "#0f1117",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #f0f2f5; overflow-x: hidden; }

        .nav-link { font-size: 14px; color: #444; text-decoration: none; font-weight: 400; transition: color 0.2s; }
        .nav-link:hover { color: #0f1117; }

        .btn-demo {
          display: inline-flex; align-items: center; gap: 8px;
          background: #0f1117; color: #fff;
          font-family: 'Instrument Sans', sans-serif;
          font-size: 15px; font-weight: 500;
          padding: 14px 28px; border-radius: 100px;
          border: none; cursor: pointer; text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.18);
        }
        .btn-demo:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,0.22); }

        .card {
          background: #fff;
          border-radius: 22px;
          border: 0.5px solid rgba(0,0,0,0.07);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.1); }

        .fade-up { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }

        /* Hamburger */
        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          cursor: pointer; background: none; border: none; padding: 4px;
        }
        .hamburger span { display: block; width: 22px; height: 2px; background: #0f1117; border-radius: 2px; transition: all 0.25s; }
        .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

        /* Mobile menu */
        .mobile-menu {
          display: none; position: fixed; top: 60px; left: 0; right: 0;
          background: rgba(240,242,245,0.97); backdrop-filter: blur(14px);
          border-bottom: 0.5px solid rgba(0,0,0,0.08);
          padding: 20px 24px 28px; flex-direction: column; gap: 18px;
          z-index: 99; animation: slideDown 0.22s ease;
        }
        .mobile-menu.open { display: flex; }
        @keyframes slideDown { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }

        /* Nav scroll state */
        .nav-scrolled {
          background: rgba(240,242,245,0.88) !important;
          backdrop-filter: blur(14px);
          box-shadow: 0 1px 0 rgba(0,0,0,0.06);
        }

        /* Hero headline scales with viewport */
        .hero-title {
          font-family: 'Instrument Sans', sans-serif;
          font-size: clamp(1.85rem, 5.5vw, 3.8rem);
          font-weight: 700; line-height: 1.12; letter-spacing: -0.03em; color: #0f1117;
        }

        /* ─── BENTO GRID ─── */
        /* Desktop (>900px): 4-col layout matching original */
        .grid-bento {
          display: grid;
          grid-template-columns: 1fr 1.5fr 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 14px;
        }
        .card-integrations { grid-row: 1; grid-column: 1; }
        .card-transcript   { grid-row: 1 / 3; grid-column: 2; min-height: 360px; }
        .card-stat         { grid-row: 1; grid-column: 3; }
        .card-person       { grid-row: 1; grid-column: 4; min-height: 180px; }
        .card-big          { grid-row: 2; grid-column: 1; }
        .card-auto         { grid-row: 2; grid-column: 3; }
        .card-map          { grid-row: 2; grid-column: 4; min-height: 160px; }

        /* Tablet (601–900px): 2-col, transcript full width first */
        @media (max-width: 900px) {
          .grid-bento { grid-template-columns: 1fr 1fr; grid-template-rows: auto; }
          .card-transcript { grid-row: auto; grid-column: 1 / 3; min-height: 280px !important; }
          .card-integrations, .card-stat, .card-person,
          .card-big, .card-auto, .card-map {
            grid-row: auto; grid-column: auto;
          }
          .card-person { min-height: 200px; }
          .hamburger { display: flex; }
          .desktop-nav, .desktop-login { display: none !important; }
        }

        /* Mobile (≤600px): single column */
        @media (max-width: 600px) {
          .grid-bento { grid-template-columns: 1fr; }
          .card-transcript { grid-column: 1 !important; min-height: 260px !important; }
          .card-person { min-height: 200px; }
          .btn-demo { font-size: 14px; padding: 12px 22px; }
          .stat-num { font-size: 40px !important; }
          .stat-big-num { font-size: 34px !important; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav
        className={scrollY > 20 ? "nav-scrolled" : ""}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(16px, 4vw, 40px)",
          height: 60,
          background: "transparent",
          transition: "background 0.3s, box-shadow 0.3s",
        }}
      >
        <div
          style={{
            fontFamily: "'Instrument Sans',sans-serif",
            fontWeight: 700,
            fontSize: 17,
            letterSpacing: "-0.02em",
          }}
        >
          Samfund
        </div>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display: "flex", gap: 32 }}>
          {["Features", "How it works", "Pricing", "FAQ"].map((item) => (
            <a key={item} href="#" className="nav-link">
              {item}
            </a>
          ))}
        </div>

        {/* Desktop login */}
        <button
          className="desktop-login"
          style={{
            background: "#0f1117",
            color: "#fff",
            border: "none",
            borderRadius: 100,
            padding: "9px 22px",
            fontSize: 14,
            fontFamily: "'Instrument Sans',sans-serif",
            fontWeight: 500,
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Log in
        </button>

        {/* Hamburger — shown via CSS on mobile/tablet */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* ── MOBILE MENU ── */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {["Features", "How it works", "Pricing", "FAQ"].map((item) => (
          <a
            key={item}
            href="#"
            className="nav-link"
            style={{ fontSize: 16 }}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
        <button
          style={{
            background: "#0f1117",
            color: "#fff",
            border: "none",
            borderRadius: 100,
            padding: "11px 24px",
            fontSize: 14,
            fontFamily: "'Instrument Sans',sans-serif",
            fontWeight: 500,
            cursor: "pointer",
            alignSelf: "flex-start",
          }}
        >
          Log in
        </button>
      </div>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        style={{
          paddingTop: "clamp(100px, 15vw, 140px)",
          paddingBottom: "clamp(40px, 6vw, 70px)",
          textAlign: "center",
          background: "linear-gradient(180deg,#e8ecf2 0%,#f0f2f5 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.35,
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.05) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: 820,
            margin: "0 auto",
            padding: "0 clamp(16px,5vw,32px)",
          }}
        >
          <h1 className={`hero-title fade-up ${heroInView ? "visible" : ""}`}>
            AI-Driven Support To Boost
            <br />
            Your Business Growth
          </h1>
          <p
            className={`fade-up delay-1 ${heroInView ? "visible" : ""}`}
            style={{
              fontSize: "clamp(13px,2vw,15px)",
              color: "#666",
              lineHeight: 1.75,
              maxWidth: 500,
              margin: "20px auto 36px",
            }}
          >
            A platform that helps customer service leaders provide efficient,
            high-quality support at scale with an AI agent, improving speed and
            quality across all channels, 24/7.
          </p>
          <div className={`fade-up delay-2 ${heroInView ? "visible" : ""}`}>
            <a href="#" className="btn-demo">
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
      </section>

      {/* ── BENTO GRID ── */}
      <section
        ref={gridRef}
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 clamp(14px,3vw,28px) clamp(60px,10vw,100px)",
        }}
      >
        <div className={`grid-bento fade-up ${gridInView ? "visible" : ""}`}>
          {/* Integrations */}
          <div
            className="card card-integrations"
            style={{ padding: "28px 24px" }}
          >
            <div
              style={{
                display: "flex",
                gap: 10,
                marginBottom: 20,
                flexWrap: "wrap",
              }}
            >
              {integrationIcons.map((ic, i) => (
                <div
                  key={i}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: ic.bg,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  }}
                >
                  {ic.svg}
                </div>
              ))}
            </div>
            <div
              style={{
                fontWeight: 600,
                fontSize: 18,
                marginBottom: 8,
                letterSpacing: "-0.02em",
              }}
            >
              Integrations
            </div>
            <div style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>
              way better at getting things done than human agents
            </div>
          </div>

          {/* Transcript — tall */}
          <div
            className="card card-transcript"
            style={{
              position: "relative",
              background:
                "linear-gradient(160deg,#b8dff0 0%,#c8eed8 50%,#e8f8d0 100%)",
            }}
          >
            <div style={{ padding: "22px 22px 0" }}>
              <span
                style={{
                  background: "rgba(255,255,255,0.55)",
                  backdropFilter: "blur(8px)",
                  borderRadius: 8,
                  padding: "5px 12px",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#1a4a3a",
                }}
              >
                Transcript
              </span>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                top: 52,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "min(160px, 50%)",
                  aspectRatio: "160/220",
                  borderRadius: "80px 80px 0 0",
                  background: "linear-gradient(160deg,#c8d8e8 0%,#a8c0b0 100%)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "8%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "35%",
                    aspectRatio: "1",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(160deg,#e8c8a0 0%,#d4a870 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "35%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "56%",
                    height: "50%",
                    borderRadius: "45px 45px 0 0",
                    background:
                      "linear-gradient(160deg,#d4a060 0%,#c08040 100%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* 83% */}
          <div
            className="card card-stat"
            style={{
              padding: "28px 24px",
              background: "linear-gradient(135deg,#d8f0d0 0%,#c0e8c0 100%)",
            }}
          >
            <div
              className="stat-num"
              style={{
                fontFamily: "'Instrument Sans',sans-serif",
                fontSize: 52,
                fontWeight: 700,
                color: "#1a3a1a",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              83%
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#3a5a3a",
                marginTop: 12,
                lineHeight: 1.5,
              }}
            >
              Up to 83% of conversations autonomously resolved
            </div>
          </div>

          {/* Headphone person */}
          <div
            className="card card-person"
            style={{
              position: "relative",
              overflow: "hidden",
              background:
                "linear-gradient(160deg,#f5d0c0 0%,#e8b8c0 50%,#d0c8f0 100%)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(160deg,#f0c0a0 0%,#e0a080 100%)",
                    margin: "0 auto",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: -10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 80,
                    height: 50,
                    border: "6px solid rgba(255,150,120,0.7)",
                    borderBottom: "none",
                    borderRadius: "40px 40px 0 0",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    left: -6,
                    width: 14,
                    height: 22,
                    borderRadius: 4,
                    background: "rgba(255,150,120,0.8)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    right: -6,
                    width: 14,
                    height: 22,
                    borderRadius: 4,
                    background: "rgba(255,150,120,0.8)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* 5.5B */}
          <div className="card card-big" style={{ padding: "28px 24px" }}>
            <div
              className="stat-big-num"
              style={{
                fontFamily: "'Instrument Sans',sans-serif",
                fontSize: 42,
                fontWeight: 700,
                color: "#0f1117",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              5.5B
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#888",
                marginTop: 12,
                lineHeight: 1.5,
              }}
            >
              more efficient than human representatives
            </div>
          </div>

          {/* Automated CS Quality */}
          <div className="card card-auto" style={{ padding: "28px 24px" }}>
            <div
              style={{
                fontWeight: 600,
                fontSize: 18,
                letterSpacing: "-0.02em",
                lineHeight: 1.3,
                marginBottom: 20,
              }}
            >
              Automated Customer Service Quality
            </div>
            <div style={{ display: "flex" }}>
              {avatars.map((av, i) => (
                <div
                  key={i}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: av.color,
                    border: "2.5px solid #fff",
                    marginLeft: i > 0 ? -8 : 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#fff",
                    zIndex: 3 - i,
                    position: "relative",
                  }}
                >
                  {av.initials}
                </div>
              ))}
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: "#e8f0fe",
                  border: "2.5px solid #fff",
                  marginLeft: -8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  color: "#555",
                }}
              >
                +4
              </div>
            </div>
          </div>

          {/* Network map */}
          <div
            className="card card-map"
            style={{
              padding: 24,
              position: "relative",
              overflow: "hidden",
              background: "linear-gradient(135deg,#d0e8f8 0%,#c8d8f0 100%)",
            }}
          >
            {[
              { x: 30, y: 40, s: 28 },
              { x: 65, y: 25, s: 20 },
              { x: 75, y: 65, s: 24 },
              { x: 45, y: 70, s: 18 },
            ].map((dot, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: `${dot.x}%`,
                  top: `${dot.y}%`,
                  width: dot.s,
                  height: dot.s,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.75)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#5090d0",
                  }}
                />
              </div>
            ))}
            <svg
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
              }}
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <line
                x1="30"
                y1="40"
                x2="65"
                y2="25"
                stroke="rgba(80,144,208,0.35)"
                strokeWidth="0.8"
              />
              <line
                x1="65"
                y1="25"
                x2="75"
                y2="65"
                stroke="rgba(80,144,208,0.35)"
                strokeWidth="0.8"
              />
              <line
                x1="75"
                y1="65"
                x2="45"
                y2="70"
                stroke="rgba(80,144,208,0.35)"
                strokeWidth="0.8"
              />
              <line
                x1="45"
                y1="70"
                x2="30"
                y2="40"
                stroke="rgba(80,144,208,0.35)"
                strokeWidth="0.8"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
