"use client";

import React from "react";
import Image from "next/image";
import { Landmark, MapPin, Clock, Phone, Mail, Compass, Navigation } from "lucide-react";
import { content } from "../data/content";

export const MuseumSection: React.FC = () => {
  return (
    <section id="museum" className="py-24 relative bg-[#0B1528]/60 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#00E5C0]/30 text-xs font-semibold text-[#00E5C0] mb-4">
            <Landmark className="w-3.5 h-3.5" />
            <span>{content.museum.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {content.museum.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {content.museum.desc}
          </p>
        </div>

        {/* 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left: Photos collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-700/80 group">
              <Image
                src="/images/image_03.jpg"
                alt={content.museum.photos[0].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-semibold text-white">{content.museum.photos[0].caption}</span>
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-700/80 group mt-6">
              <Image
                src="/images/image_05.jpg"
                alt={content.museum.photos[1].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-semibold text-white">{content.museum.photos[1].caption}</span>
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-700/80 group -mt-6">
              <Image
                src="/images/image_07.jpg"
                alt={content.museum.photos[2].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-semibold text-white">{content.museum.photos[2].caption}</span>
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-700/80 group">
              <Image
                src="/images/image_10.jpg"
                alt={content.museum.photos[3].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-semibold text-white">{content.museum.photos[3].caption}</span>
              </div>
            </div>
          </div>

          {/* Right: Description & Features */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#060D1A]/90 border border-slate-800 backdrop-blur-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#00E5C0]" />
                <span>{content.museum.infoTitle}</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                {content.museum.infoP1}
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                {content.museum.infoP2}
              </p>

              {/* Info Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800 text-xs">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Clock className="w-4 h-4 text-[#00E5C0] flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">{content.museum.hoursLabel}</div>
                    <div className="text-slate-400">{content.museum.hoursValue}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <MapPin className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">{content.museum.addressLabel}</div>
                    <div className="text-slate-400">{content.museum.addressValue}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Phone className="w-4 h-4 text-[#6366F1] flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">{content.museum.phoneLabel}</div>
                    <a href="tel:+79409924744" className="text-[#00E5C0] hover:underline">
                      {content.museum.phoneValue}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Mail className="w-4 h-4 text-[#00E5C0] flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">{content.museum.emailLabel}</div>
                    <a href="mailto:bshinkuba@yandex.ru" className="text-slate-300 hover:text-white truncate">
                      {content.museum.emailValue}
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Map & Direction Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0F1E38] to-[#0B1528] border border-[#00E5C0]/30 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00E5C0]/20 text-[#00E5C0] flex items-center justify-center flex-shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{content.museum.mapTitle}</div>
                  <div className="text-xs text-slate-400">{content.museum.mapDesc}</div>
                </div>
              </div>

              <a
                href="https://yandex.ru/maps/?text=Члоу+Шинкуба"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#00E5C0] text-[#060D1A] hover:bg-[#5EEAD4] transition-colors flex-shrink-0 shadow-glow-teal"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{content.museum.mapBtn}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
