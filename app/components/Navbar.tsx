"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About Me", href: "#about" },
  { label: "Core Skills", href: "#skills" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on resize to tablet/desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="w-full flex items-center justify-between relative z-50">
        {/* Logo */}
        <Link
          href="/"
          className="font-satoshi text-text-primary font-semibold text-lg leading-none tracking-tight md:text-xl lg:text-3xl"
        >
          Tahaberk Soysal
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-text-secondary text-[20px] leading-none transition-colors duration-200 hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Button — mobile only */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-0 relative z-50"
        >
          {/* Top bar */}
          <span
            className={`block h-[1.5px] bg-text-primary transition-all duration-300 ease-in-out origin-center ${
              isOpen ? "w-5 translate-y-0.75 rotate-45" : "w-5"
            }`}
          />
          {/* Middle bar */}
          <span
            className={`block h-[1.5px] bg-text-primary transition-all duration-300 ease-in-out mt-1.25 ${
              isOpen ? "w-5 opacity-0 scale-x-0" : "w-5 opacity-100"
            }`}
          />
          {/* Bottom bar */}
          <span
            className={`block h-[1.5px] bg-text-primary transition-all duration-300 ease-in-out mt-1.25 origin-center ${
              isOpen ? "w-5 -translate-y-2.75 -rotate-45" : "w-5"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-4 bg-background z-40 transition-all duration-300 ease-in-out overflow-hidden rounded-2xl ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="z-50 text-text-secondary text-lg font-semibold py-4 leading-none transition-colors duration-200 hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
