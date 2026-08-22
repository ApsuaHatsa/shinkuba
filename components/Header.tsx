"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, BookOpen, Landmark, Camera, Newspaper, Mail } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Ахалагаратə", href: "#hero" },
    { label: "Абиографиа", href: "#biography" },
    { label: "Амузеи", href: "#museum" },
    { label: "Агалереиа", href: "#gallery" },
    { label: "Алитература", href: "#works" },
    { label: "Ажәабжьқәа", href: "#news" },
    { label: "Аконтактқәа", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#060D1A]/90 backdrop-blur-md border-b border-[#00E5C0]/15 py-3 shadow-xl"
          : "bg-gradient-to-b from-[#060D1A]/90 via-[#060D1A]/50 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E5C0] to-[#6366F1] flex items-center justify-center p-[1.5px] shadow-glow-teal group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#060D1A] rounded-[10px] flex items-center justify-center">
              <Landmark className="w-5 h-5 text-[#00E5C0]" />
            </div>
          </div>
          <div>
            <div className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-[#00E5C0] transition-colors leading-tight">
              Баграт Шьынқәба
            </div>
            <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
              Амемориалтә аҩны-музеи
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-[#00E5C0] rounded-lg hover:bg-white/5 transition-all duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+79409924744"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#00E5C0]/10 hover:bg-[#00E5C0]/20 text-[#00E5C0] border border-[#00E5C0]/30 transition-all hover:scale-105"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+7 940 992-47-44</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-200 hover:text-white"
            aria-label="Амениу"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#060D1A]/95 backdrop-blur-2xl border-b border-[#00E5C0]/20 p-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-[#00E5C0] hover:bg-slate-800/60 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-3">
              <a
                href="tel:+79409924744"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-[#00E5C0] text-[#060D1A] font-bold shadow-glow-teal"
              >
                <Phone className="w-4 h-4" />
                <span>+7 940 992-47-44</span>
              </a>
              <a
                href="mailto:bshinkuba@yandex.ru"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>bshinkuba@yandex.ru</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
