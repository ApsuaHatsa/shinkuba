"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, ZoomIn, Layers, Sparkles } from "lucide-react";
import { Lightbox, GalleryImage } from "./Lightbox";

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Зегьы");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const imagesData: GalleryImage[] = [
    {
      id: 1,
      src: "/images/image_01.jpg",
      title: "Баграт Уасыл-иԥа Шьынқәба",
      category: "Аҭоурых",
      description: "Аԥсны жәлар рпоет, академик Б. У. Шьынқәба ипортрет.",
    },
    {
      id: 2,
      src: "/images/image_02.jpg",
      title: "Амемориалтә стенд",
      category: "Адокументқәа",
      description: "Ашәҟәыҩҩы иԥсҭазаареи иусуреи ирызку афотостенд.",
    },
    {
      id: 3,
      src: "/images/image_03.jpg",
      title: "Амемориалтә аҩны-музеи ахыбра",
      category: "Аҩны-музеи",
      description: "Ҷлоу ақыҭа, аҩны-музеи аҭаӡара.",
    },
    {
      id: 4,
      src: "/images/image_04.jpg",
      title: "Баграт Шьынқәба - Апортрет",
      category: "Аҭоурых",
      description: "Аклассик ифотосахьа.",
    },
    {
      id: 5,
      src: "/images/image_05.jpg",
      title: "Амузеитә зал аекспозициа",
      category: "Аарԥшырақәа",
      description: "Аҩны-музеи азалтә экспозициа.",
    },
    {
      id: 6,
      src: "/images/image_06.jpg",
      title: "Ашәҟәыҩҩы ирукописқәеи ишәҟәқәеи",
      category: "Аекспонатқәа",
      description: "Баграт Шьынқәба иҭыжьымҭақәеи ирукописқәеи.",
    },
    {
      id: 7,
      src: "/images/image_07.jpg",
      title: "Аҭоурыхтә фотоархив",
      category: "Адокументқәа",
      description: "Аԥсны аҳәынҭқарратәи акультуратәи усзуҩцәа рыбжьара.",
    },
    {
      id: 8,
      src: "/images/image_08.jpg",
      title: "Амемориалтә ҭаацәаратә архив",
      category: "Адокументқәа",
      description: "Аҭаацәара рфотоқәеи аҭоурыхтә документқәеи.",
    },
    {
      id: 9,
      src: "/images/image_09.jpg",
      title: "Ҷлоу ақыҭа: аҩны-музеи иаакәыршаны",
      category: "Аҩны-музеи",
      description: "Амузеи аҭыԥ, Ҷлоу ақыҭа аԥсбара.",
    },
    {
      id: 10,
      src: "/images/image_10.jpg",
      title: "Алитературатә шәҟәқәа",
      category: "Аекспонатқәа",
      description: "Б. Шьынқәба иочеркқәа, иповестқәа, ироманқәа.",
    },
    {
      id: 11,
      src: "/images/image_11.jpg",
      title: "Амузеитә витринақәа",
      category: "Аекспонатқәа",
      description: "Ашәҟәыҩҩы ихаҭалатә малқәа.",
    },
    {
      id: 12,
      src: "/images/image_12.jpg",
      title: "Аекспозициатә аҭыԥ",
      category: "Аарԥшырақәа",
      description: "Аҩны-музеи азалқәа рҿы аекспонатқәа.",
    },
    {
      id: 13,
      src: "/images/image_14.jpg",
      title: "Аҩны-музеи аҩналарҭа",
      category: "Аҩны-музеи",
      description: "Аҩны-музеи аҩналарҭеи амемориалтә дахьеи.",
    },
    {
      id: 14,
      src: "/images/image_15.jpg",
      title: "Аҳәынҭқарратә усзуҩы",
      category: "Аҭоурых",
      description: "СССР Иреиҳаӡоу Асовет адепутат, Асовет Апрезидиум дахантәаҩуп.",
    },
    {
      id: 15,
      src: "/images/image_16.jpg",
      title: "Ашәҟәқәеи аброшиурақәеи",
      category: "Аекспонатқәа",
      description: "Б. Шьынқәба иусумҭақәа зну аҭыжьымҭақәа.",
    },
    {
      id: 16,
      src: "/images/image_17.jpg",
      title: "Амемориалтә фотоматериалқәа",
      category: "Адокументқәа",
      description: "Аԥсны ашәҟәыҩҩцәа реизарақәа рҿы.",
    },
    {
      id: 17,
      src: "/images/image_18.jpg",
      title: "Асахьақәеи аарԥшырақәеи",
      category: "Аарԥшырақәа",
      description: "Амузеи аекспозициатә материалқәа.",
    },
    {
      id: 18,
      src: "/images/image_19.jpg",
      title: "Аиҿкаарақәеи ахҭысқәеи",
      category: "Адокументқәа",
      description: "Ашәҟәыҩҩы иусқәа рхроника.",
    },
    {
      id: 19,
      src: "/images/image_20.jpg",
      title: "Амузеи аҩныҵҟатәи аԥшра",
      category: "Аарԥшырақәа",
      description: "Амемориалтә аҩны-музеи аинтериер.",
    },
    {
      id: 20,
      src: "/images/image_21.jpg",
      title: "Баграт Шьынқәба иҭынха",
      category: "Аҭоурых",
      description: "Аклассик иҳаҭырқәҵара.",
    },
    {
      id: 21,
      src: "/images/image_22.jpg",
      title: "Арукописқәеи адипломқәеи",
      category: "Аекспонатқәа",
      description: "Баграт Шьынқәба ихьӡ зху аҳаҭыр шәҟәқәа.",
    },
    {
      id: 22,
      src: "/images/image_23.jpg",
      title: "Алитературатә архив",
      category: "Адокументқәа",
      description: "Апоэмқәеи ароманқәеи рархив.",
    },
    {
      id: 23,
      src: "/images/image_24.jpg",
      title: "Амемориалтә комплекс",
      category: "Аҩны-музеи",
      description: "Ҷлоутәи амемориалтә комплекс.",
    },
    {
      id: 24,
      src: "/images/image_26.jpg",
      title: "Акультуратә ҭынха",
      category: "Аарԥшырақәа",
      description: "Амузеи аекспозициатә коллекциа.",
    },
  ];

  const categories = [
    "Зегьы",
    "Аҩны-музеи",
    "Аекспонатқәа",
    "Аарԥшырақәа",
    "Адокументқәа",
    "Аҭоурых",
  ];

  const filteredImages =
    selectedCategory === "Зегьы"
      ? imagesData
      : imagesData.filter((img) => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 relative bg-[#060D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#00E5C0]/30 text-xs font-semibold text-[#00E5C0] mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>24 оригинальтә фотоматериал</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Агалереиа
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Баграт Уасыл-иԥа Шьынқәба имемориалтә аҩны-музеи афотосахьақәеи аекспонатқәеи.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-[#00E5C0] text-[#060D1A] shadow-glow-teal scale-105"
                  : "bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat}
              {cat === "Зегьы" && ` (${imagesData.length})`}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredImages.map((img, idx) => {
            const originalIndex = imagesData.findIndex((i) => i.id === img.id);
            return (
              <div
                key={img.id}
                onClick={() => setActiveImageIndex(originalIndex)}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-[#00E5C0]/50 transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-1"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Category tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[#00E5C0] border border-[#00E5C0]/30">
                    {img.category}
                  </span>
                </div>

                {/* Zoom Icon on hover */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#00E5C0]/20 text-[#00E5C0] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Bottom text */}
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <h3 className="text-sm font-bold text-white line-clamp-1 group-hover:text-[#00E5C0] transition-colors">
                    {img.title}
                  </h3>
                  {img.description && (
                    <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                      {img.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        <Lightbox
          images={imagesData}
          currentIndex={activeImageIndex}
          onClose={() => setActiveImageIndex(null)}
          onNavigate={(newIdx) => setActiveImageIndex(newIdx)}
        />

      </div>
    </section>
  );
};
