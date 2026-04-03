// components/landing/Navbar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = ["Home", "Services", "About us", "FAQ"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
    <>
      <nav
        className={[
          "flex items-center justify-between",
          "sticky top-0 left-0 right-0 z-100 h-15",
          "px-4 sm:px-6 lg:px-10",
          "transition-all duration-300",
          scrolled
            ? "bg-[rgba(240,242,245,0.88)] backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : "bg-transparent",
        ].join(" ")}
      >
        {/* Logo */}
        <Link href="/" className="flex flex-row items-center gap-2">
          <Image
            src="/images/logo2.jpg"
            alt="logo"
            width={40}
            height={40}
            className="rounded-[15px] object-cover"
          />
          <p className="text-xl font-bold  ">Pro Sign</p>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map((item) => (
            <li key={item}>
              <Link
                href="#"
                className="text-normal font-medium text-[#444] no-underline transition-colors duration-200 hover:text-[#0f1117]"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button className="hidden md:block btn">Log in</button>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.25 bg-transparent border-none cursor-pointer p-1"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-5.5 h-0.5 bg-[#0f1117] rounded-sm transition-all duration-250"
              style={{
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(5px,5px)"
                    : menuOpen && i === 2
                      ? "rotate(-45deg) translate(5px,-5px)"
                      : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed top-15 left-0 right-0 z-99 bg-[rgba(240,242,245,0.97)] backdrop-blur-md border-b border-black/8 px-6 pt-5 pb-7 flex flex-col gap-4.5"
          style={{ animation: "slideDown 0.22s ease" }}
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-base text-[#444] no-underline"
            >
              {item}
            </a>
          ))}
          <button className="btn">Log in</button>
        </div>
      )}
    </>
  );
}
