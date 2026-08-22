"use client";

import React from "react";
import { BookOpen, Star, Quote, Award, Sparkles, Feather } from "lucide-react";

export const WorksSection: React.FC = () => {
  const books = [
    {
      title: "Ацынҵәарах",
      type: "Аҭоурыхтә роман",
      year: "1974",
      desc: "Убыхаа рҭоурыхтә трагедиа зну, адуней ахь зыхьӡ нназ ароман шедевр. Адуней бызшәақәа рацәала еиҭагоуп.",
      badge: "Адунейтә шедевр",
      highlight: true,
    },
    {
      title: "Шьхақәа ирыԥхьаӡоит",
      type: "Апоема",
      year: "1954",
      desc: "Аԥсны ашьхақәеи аԥсуа жәлар рыфырхаҵареи ирызку апоема-епос.",
      badge: "Апоезиа",
      highlight: false,
    },
    {
      title: "Ашыцқәа реибашьра",
      type: "Апоема",
      year: "1950",
      desc: "Афырхаҵареи ахаҭареи ирызку, акьыԥхь аҿы зыхьӡ ҵәцаз апоема.",
      badge: "Аклассика",
      highlight: false,
    },
    {
      title: "Иалкаау иоымҭақәа",
      type: "Ашәҟәы",
      year: "1980+",
      desc: "Баграт Шьынқәба ипоезиатәи ипрозатәи иусумҭақәа зегьы реизга.",
      badge: "Аизга",
      highlight: false,
    },
    {
      title: "Чанта кәашама",
      type: "Асатира / Аповест",
      year: "1968",
      desc: "Ажәлар рсатирикатә фольклори ахаҿбзиарақәеи зныԥшуа аусумҭа.",
      badge: "Апроза",
      highlight: false,
    },
    {
      title: "Ҳашьцәа адыгьаа",
      type: "Апублицистика",
      year: "1975+",
      desc: "Аԥсуа-адыга жәларқәа рыбжьара иҟоу аишьаратә еимадарақәа рҭоурых.",
      badge: "Аҭоурых",
      highlight: false,
    },
  ];

  return (
    <section id="works" className="py-24 relative bg-[#0B1528]/40 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#00E5C0]/30 text-xs font-semibold text-[#00E5C0] mb-4">
            <Feather className="w-3.5 h-3.5" />
            <span>Алитературатә шедеврқәа</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Алитературатә ҭынха
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Баграт Шьынқәба ироманқәа, ипоемақәа, ипоезиатә усумҭақәа: аԥсуа литература ахьтәы фонд.
          </p>
        </div>

        {/* Famous Quote Banner */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0F1E38] via-[#0B1528] to-[#0F1E38] border border-[#00E5C0]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Quote className="w-32 h-32 text-[#00E5C0]" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#00E5C0] uppercase tracking-wider mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Баграт Шьынқәба иажәақәа рҟынтә</span>
            </div>
            <blockquote className="text-lg sm:text-2xl font-serif italic text-slate-100 leading-relaxed mb-4">
              &laquo;Ҳара ҳжәлар рҭоурых, рыбызшәа, рыкультура: уи ҳара ҳнасыпуп, ҳхақәиҭроуп.&raquo;
            </blockquote>
            <div className="text-xs sm:text-sm font-semibold text-slate-400">
              Баграт Уасыл-иԥа Шьынқәба: Аԥсны жәлар рпоет
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between group ${
                book.highlight
                  ? "bg-gradient-to-b from-[#0F2444] to-[#0B1528] border-2 border-[#00E5C0]/60 shadow-glow-teal -translate-y-1"
                  : "bg-[#060D1A]/80 border border-slate-800 hover:border-[#00E5C0]/30 hover:-translate-y-1"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-[11px] font-bold px-3 py-1 rounded-full ${
                      book.highlight
                        ? "bg-[#00E5C0] text-[#060D1A]"
                        : "bg-slate-800 text-[#00E5C0] border border-[#00E5C0]/20"
                    }`}
                  >
                    {book.badge}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    {book.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#00E5C0] transition-colors mb-1">
                  &laquo;{book.title}&raquo;
                </h3>
                <div className="text-xs font-medium text-[#6366F1] mb-3">
                  {book.type}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {book.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Ашәҟәыҩҩы:</span>
                <span className="font-semibold text-slate-200">Б. У. Шьынқәба</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
