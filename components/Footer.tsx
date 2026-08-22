"use client";

import React from "react";
import Link from "next/link";
import { Landmark, ArrowUp } from "lucide-react";
import { content } from "../data/content";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#040810] text-slate-400 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="#hero" className="flex items-center gap-3 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00E5C0] to-[#6366F1] flex items-center justify-center p-[1.5px]">
                <div className="w-full h-full bg-[#060D1A] rounded-[10px] flex items-center justify-center">
                  <Landmark className="w-4 h-4 text-[#00E5C0]" />
                </div>
              </div>
              <div>
                <div className="text-base font-bold text-white group-hover:text-[#00E5C0] transition-colors leading-tight">
                  {content.footer.brandTitle}
                </div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                  {content.footer.brandSubtitle}
                </div>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-4">
              {content.footer.desc}
            </p>

            <div className="text-xs text-slate-500 font-mono">
              {content.footer.domain}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              {content.footer.navTitle}
            </div>
            <ul className="space-y-2 text-xs">
              {content.footer.nav.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-[#00E5C0] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contacts & Hours */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              {content.footer.contactTitle}
            </div>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-500 block">{content.footer.phoneLabel}</span>
                <a href={`tel:${content.footer.phoneValue.replace(/ /g, '')}`} className="text-white hover:text-[#00E5C0] transition-colors">
                  {content.footer.phoneValue}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block">{content.footer.emailLabel}</span>
                <a href={`mailto:${content.footer.emailValue}`} className="text-white hover:text-[#00E5C0] transition-colors">
                  {content.footer.emailValue}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block">{content.footer.addressLabel}</span>
                <span className="text-slate-300">{content.footer.addressValue}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            &copy; {new Date().getFullYear()} {content.footer.copyright}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://apsny.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#00E5C0] transition-colors flex items-center gap-1.5"
            >
              <span>{content.footer.developedByLabel}</span>
              <span className="font-bold text-slate-300">{content.footer.developedByValue}</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label={content.footer.scrollTopAria}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
