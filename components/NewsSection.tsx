"use client";

import React from "react";
import { Newspaper, ArrowRight, ExternalLink, CalendarDays, MapPin } from "lucide-react";
import { content } from "../data/content";

export const NewsSection: React.FC = () => {
  const newsItems = content.news.newsItems;

  return (
    <section id="news" className="py-24 relative bg-[#060D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#00E5C0]/30 text-xs font-semibold text-[#00E5C0] mb-4">
            <Newspaper className="w-3.5 h-3.5" />
            <span>{content.news.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {content.news.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {content.news.desc}
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((news: any) => (
            <div
              key={news.id}
              className="p-7 rounded-3xl bg-[#0B1528]/80 border border-slate-800 hover:border-[#00E5C0]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Date & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#00E5C0]">
                    <CalendarDays className="w-4 h-4" />
                    <span>{news.date} ({news.year})</span>
                  </div>
                  <span className="text-xs font-bold text-[#00E5C0] tracking-wider uppercase">
                    {news.category}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#00E5C0] transition-colors line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {news.desc}
                </p>
              </div>

              <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-800">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>{news.location}</span>
                </div>
                <div className="flex items-center gap-1 text-[#00E5C0] text-xs font-semibold group/btn">
                  <span>{content.news.readMoreBtn}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
