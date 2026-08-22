"use client";

import React from "react";
import Image from "next/image";
import { BookOpen, Award, GraduationCap, Building2, ScrollText, CheckCircle2 } from "lucide-react";
import { content } from "../data/content";

export const Biography: React.FC = () => {
  const milestones = content.biography.milestones.map((ms, index) => {
    // Map icons manually based on the original structure or just use strings if possible,
    // but since we need Lucide icons, we can add a lookup or keep the original array mapping
    // Since the original was exactly this array, I'll keep the icons mapping here for simplicity
    const icons = [ScrollText, GraduationCap, BookOpen, GraduationCap, Building2, Award, Award, Award];
    return { ...ms, icon: icons[index] };
  });

  return (
    <section id="biography" className="py-24 relative bg-[#060D1A]">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00E5C0]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#00E5C0]/30 text-xs font-semibold text-[#00E5C0] mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{content.biography.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {content.biography.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {content.biography.desc}
          </p>
        </div>

        {/* 100% Authentic Original Biography Text Block */}
        <div className="mb-16">
          <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0B1528] via-[#0F1E38] to-[#0B1528] border border-[#00E5C0]/25 shadow-2xl overflow-hidden">
            {/* Top Accent bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#00E5C0] via-[#6366F1] to-[#00E5C0]" />
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Portrait mini */}
              <div className="w-full md:w-64 flex-shrink-0 flex flex-col items-center">
                <div className="relative w-44 h-56 sm:w-52 sm:h-64 rounded-2xl overflow-hidden border border-[#00E5C0]/40 shadow-glow-teal bg-slate-900">
                  <Image
                    src="/images/image_01.jpg"
                    alt="Баграт Шьынқәба"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 text-center">
                  <div className="text-sm font-bold text-white">{content.biography.portraitName}</div>
                  <div className="text-xs text-[#00E5C0]">{content.biography.portraitYears}</div>
                </div>
              </div>

              {/* Exact Uncut Original Text */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-700/60">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00E5C0]">
                    {content.biography.textBadge}
                  </span>
                </div>

                <div className="prose prose-invert max-w-none text-slate-200 text-base sm:text-lg leading-relaxed space-y-4">
                  <p className="font-light text-slate-100 first-letter:text-4xl first-letter:font-bold first-letter:text-[#00E5C0] first-letter:mr-2 first-letter:float-left">
                    {content.biography.paragraphs[0]}
                  </p>
                  <p>
                    {content.biography.paragraphs[1]}
                  </p>
                  <p>
                    {content.biography.paragraphs[2]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Milestones Grid */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {content.biography.milestonesTitle}
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              {content.biography.milestonesDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0B1528]/80 border border-slate-800 hover:border-[#00E5C0]/40 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#00E5C0]/10 text-[#00E5C0] border border-[#00E5C0]/20">
                      {item.year}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 group-hover:text-[#00E5C0] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#00E5C0] transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
