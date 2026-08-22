"use client";

import React from "react";
import { Newspaper, Calendar, ArrowUpRight, Sparkles, MapPin } from "lucide-react";

export const NewsSection: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      date: "12 Лаҵара",
      year: "Есышықәса",
      title: "Баграт Шьынқәба диит: Агәалашәара амш Ҷлоу",
      desc: "Есышықәса 12 лаҵара рзы Ҷлоу ақыҭа аҿы имҩаԥысуеит Аԥсны жәлар рпоет Баграт Шьынқәба иира амш иазкыу акультуратә еизарақәеи аԥхьарақәеи.",
      category: "Ахҭыс хада",
      location: "Ҷлоу ақыҭа",
    },
    {
      id: 2,
      date: "Ашықәсзегьтә",
      year: "2026",
      title: "Алитературатә еизарақәеи аҭҵаарадыррақәеи",
      desc: "Баграт Шьынқәба иԥсҭазаареи иусумҭақәеи ирызку аҭҵаарадырратә еизарақәеи, арукописқәа реиқәырхареи.",
      category: "Аҭҵаарадырра",
      location: "Аҩны-музеи",
    },
    {
      id: 3,
      date: "Ашықәсзегьтә",
      year: "2026",
      title: "Алитературатә аԥхьарақәеи апоезиа амшынқәеи",
      desc: "Баграт Шьынқәба ипоемқәеи иажәеинраалақәеи рзы аконкурсқәеи алитературатә аԥхьарақәеи рхылаԥшра.",
      category: "Алитература",
      location: "Ҷлоутәи амузей",
    },
  ];

  return (
    <section id="news" className="py-24 relative bg-[#060D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#00E5C0]/30 text-xs font-semibold text-[#00E5C0] mb-4">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Амузеитә ԥсҭазаара</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ажәабжьқәа
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Амемориалтә аҩны-музеи аҿы имҩаԥысуа ахҭысқәеи, акультуратә еизарақәеи, агәалашәаратә мшқәеи.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <div
              key={news.id}
              className="p-7 rounded-3xl bg-[#0B1528]/80 border border-slate-800 hover:border-[#00E5C0]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Date & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#00E5C0]">
                    <Calendar className="w-4 h-4" />
                    <span>{news.date} ({news.year})</span>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#00E5C0]/10 text-[#00E5C0] border border-[#00E5C0]/20">
                    {news.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#00E5C0] transition-colors mb-3 leading-snug">
                  {news.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {news.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>{news.location}</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-800 group-hover:bg-[#00E5C0] text-slate-300 group-hover:text-[#060D1A] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
