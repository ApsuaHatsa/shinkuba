"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, ZoomIn, Layers } from "lucide-react";
import { Lightbox, GalleryImage } from "./Lightbox";
import { content } from "../data/content";

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Зегьы");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const imagesData: GalleryImage[] = content.gallery.imagesData;

  const categories = content.gallery.categories;

  const filteredImages =
    selectedCategory === content.gallery.allCategory
      ? imagesData
      : imagesData.filter((img) => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 relative bg-[#060D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#00E5C0]/30 text-xs font-semibold text-[#00E5C0] mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>{content.gallery.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {content.gallery.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {content.gallery.desc}
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
              {cat === content.gallery.allCategory && ` (${imagesData.length})`}
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
