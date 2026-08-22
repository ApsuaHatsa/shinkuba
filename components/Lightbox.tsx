"use client";

import React, { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  description?: string;
}

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const nextIndex = (currentIndex - 1 + images.length) % images.length;
    onNavigate(nextIndex);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIndex = (currentIndex + 1) % images.length;
    onNavigate(nextIndex);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || currentIndex === null || !mounted) return null;

  const currentImage = images[currentIndex];

  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-200 cursor-pointer"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div 
        className="absolute top-0 inset-x-0 flex items-center justify-between p-4 md:p-6 z-10 bg-gradient-to-b from-black/80 to-transparent cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00E5C0]/20 text-[#00E5C0] border border-[#00E5C0]/30">
            {currentImage.category}
          </span>
          <span className="text-sm font-medium text-slate-300">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700/50 cursor-pointer"
          aria-label="Ааркра"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Area */}
      <div className="relative w-full h-full max-w-6xl max-h-[85vh] p-4 flex flex-col items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={currentImage.src}
            alt={currentImage.title}
            fill
            className="object-contain select-none"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>

        {/* Caption */}
        <div 
          className="mt-3 text-center max-w-2xl px-4 cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-base md:text-lg font-semibold text-white">
            {currentImage.title}
          </h3>
          {currentImage.description && (
            <p className="text-xs md:text-sm text-slate-400 mt-1">
              {currentImage.description}
            </p>
          )}
        </div>
      </div>

      {/* Nav Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-[#00E5C0] text-white hover:text-slate-950 transition-all border border-slate-700/50 hover:border-[#00E5C0] shadow-lg cursor-pointer"
        aria-label="Аԥхьаҟа"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-[#00E5C0] text-white hover:text-slate-950 transition-all border border-slate-700/50 hover:border-[#00E5C0] shadow-lg cursor-pointer"
        aria-label="Аҵыхәтәантәи"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>,
    document.body
  );
};
