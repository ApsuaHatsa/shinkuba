"use client";

import React from "react";
import Link from "next/link";
import { Landmark, Heart, ArrowUp } from "lucide-react";

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
                  Баграт Шьынқәба
                </div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                  Амемориалтә аҩны-музеи
                </div>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-4">
              Аԥсны жәлар рпоет, академик Баграт Уасыл-иԥа Шьынқәба имемориалтә аҩны-музеи. Ҷлоу ақыҭа, Очамчыра араион, Аԥсны.
            </p>

            <div className="text-xs text-slate-500 font-mono">
              shinkuba.apsny.dev
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Абжьагарақәа
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#hero" className="hover:text-[#00E5C0] transition-colors">
                  Ахалагаратə
                </Link>
              </li>
              <li>
                <Link href="#biography" className="hover:text-[#00E5C0] transition-colors">
                  Абиографиа
                </Link>
              </li>
              <li>
                <Link href="#museum" className="hover:text-[#00E5C0] transition-colors">
                  Амузеи
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-[#00E5C0] transition-colors">
                  Агалереиа (24 фото)
                </Link>
              </li>
              <li>
                <Link href="#works" className="hover:text-[#00E5C0] transition-colors">
                  Алитература
                </Link>
              </li>
              <li>
                <Link href="#news" className="hover:text-[#00E5C0] transition-colors">
                  Ажәабжьқәа
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacts & Hours */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Аконтактқәа
            </div>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-500 block">Ателефон:</span>
                <a href="tel:+79409924744" className="text-white hover:text-[#00E5C0] transition-colors">
                  +7 940 992-47-44
                </a>
              </div>
              <div>
                <span className="text-slate-500 block">Апочта:</span>
                <a href="mailto:bshinkuba@yandex.ru" className="text-white hover:text-[#00E5C0] transition-colors">
                  bshinkuba@yandex.ru
                </a>
              </div>
              <div>
                <span className="text-slate-500 block">Аҭыӡҭыԥ:</span>
                <span className="text-slate-300">Ҷлоу ақыҭа, Аԥсны</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            &copy; {new Date().getFullYear()} Баграт Уасыл-иԥа Шьынқәба имемориалтә аҩны-музеи. Зегьзинқәа еиқәырхоуп.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://apsny.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#00E5C0] transition-colors flex items-center gap-1.5"
            >
              <span>Иаԥҵоуп:</span>
              <span className="font-bold text-slate-300">Apsny Production Inc.</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="Хыхьыла"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
