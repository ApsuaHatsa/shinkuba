import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Biography } from "@/components/Biography";
import { MuseumSection } from "@/components/MuseumSection";
import { GallerySection } from "@/components/GallerySection";
import { WorksSection } from "@/components/WorksSection";
import { NewsSection } from "@/components/NewsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#060D1A] text-slate-100 selection:bg-[#00E5C0]/20 selection:text-[#00E5C0]">
      <Header />
      <Hero />
      <Biography />
      <MuseumSection />
      <GallerySection />
      <WorksSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
