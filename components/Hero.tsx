"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Landmark, BookOpen, Camera, Sparkles, MapPin, Calendar } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-[#00E5C0]/15 via-[#6366F1]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#6366F1]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#00e5c00a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-[#00E5C0]/30 shadow-glow-teal mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#00E5C0]" />
              <span className="text-xs font-semibold text-slate-200 tracking-wide">
                Аԥсны жәлар рпоет, ашәҟәыҩҩы, дакадемикуп
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Баграт Уасыл-иԥа <br />
              <span className="bg-gradient-to-r from-[#00E5C0] via-[#5EEAD4] to-[#6366F1] bg-clip-text text-transparent">
                Шьынқәба
              </span>
            </h1>

            {/* Subtitle / Museum Name */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl mb-6 w-full max-w-2xl">
              <div className="text-lg sm:text-xl font-bold text-slate-100 flex items-center gap-2 mb-1.5">
                <Landmark className="w-5 h-5 text-[#00E5C0] flex-shrink-0" />
                <span>Имемориалтә аҩны-музеи</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Аԥсны акультуреи алитературеи рҭоурых аҿы зынӡа идуу аҭыԥ збо, аклассик, жәлар рпоет Баграт Шьынқәба ихьӡ зху амемориалтә музей Ҷлоу ақыҭа.
              </p>
            </div>

            {/* Location & Year Metadata Badges */}
            <div className="flex flex-wrap gap-3 mb-8 text-xs sm:text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <Calendar className="w-4 h-4 text-[#00E5C0]" />
                <span>1916 - 2004</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <MapPin className="w-4 h-4 text-[#F59E0B]" />
                <span>Ҷлоу ақыҭа (Лаганиахәы аҳабла)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                href="#biography"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#00E5C0] hover:bg-[#5EEAD4] text-[#060D1A] transition-all duration-200 shadow-glow-teal hover:scale-105"
              >
                <BookOpen className="w-4 h-4" />
                <span>Абиографиа аԥхьара</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#gallery"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-800/80 hover:bg-slate-700/90 text-slate-200 hover:text-white border border-slate-700/60 transition-all hover:scale-105"
              >
                <Camera className="w-4 h-4 text-[#00E5C0]" />
                <span>Агалереиа (24 фото)</span>
              </Link>

              <Link
                href="#museum"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white border border-slate-800 transition-all"
              >
                <Landmark className="w-4 h-4 text-[#6366F1]" />
                <span>Амузеи аҭаара</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00E5C0] via-[#6366F1] to-[#00E5C0] rounded-3xl blur-md opacity-40 animate-pulse-slow" />

              {/* Card Container */}
              <div className="relative rounded-3xl bg-[#0B1528] border border-slate-700/80 overflow-hidden shadow-2xl p-3 sm:p-4">
                
                {/* Portrait Image */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/image_04.jpg"
                    alt="Баграт Уасыл-иԥа Шьынқәба"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                    <span className="text-xs font-semibold text-white">Баграт Шьынқәба</span>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#00E5C0]/20 text-[#00E5C0] border border-[#00E5C0]/30">
                      1916 - 2004
                    </span>
                  </div>
                </div>

                {/* Stat Grid below image */}
                <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-lg font-bold text-[#00E5C0]">1916</div>
                    <div className="text-[11px] text-slate-400">Диит Ҷлоу</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-lg font-bold text-[#6366F1]">1967</div>
                    <div className="text-[11px] text-slate-400">Жәлар рпоет</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-lg font-bold text-[#F59E0B]">24</div>
                    <div className="text-[11px] text-slate-400">Афотоқәа</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
