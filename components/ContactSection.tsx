"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle2, Landmark } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", phone: "", message: "" });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0B1528]/80 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#00E5C0]/30 text-xs font-semibold text-[#00E5C0] mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Аимадара</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Аконтактқәа
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Аҩны-музеи аҭаареи, аекскурсиақәа раԥҵареи, аимадареи рзы ҳара сынтә хабар ҳаҳәа.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-[#060D1A] border border-slate-800 hover:border-[#00E5C0]/40 transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00E5C0]/10 border border-[#00E5C0]/30 text-[#00E5C0] flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  Ателефон
                </div>
                <a
                  href="tel:+79409924744"
                  className="text-xl sm:text-2xl font-bold text-white hover:text-[#00E5C0] transition-colors block mb-1"
                >
                  +7 940 992-47-44
                </a>
                <p className="text-xs text-slate-400">
                  Аҭаареи аекскурсиақәа раԥҵареи рзы
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-[#060D1A] border border-slate-800 hover:border-[#00E5C0]/40 transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#6366F1] flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  Аелектронтә почта
                </div>
                <a
                  href="mailto:bshinkuba@yandex.ru"
                  className="text-lg sm:text-xl font-bold text-white hover:text-[#00E5C0] transition-colors block mb-1"
                >
                  bshinkuba@yandex.ru
                </a>
                <p className="text-xs text-slate-400">
                  Аофициалтә шәҟәыҩра
                </p>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-[#060D1A] border border-slate-800 hover:border-[#F59E0B]/40 transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  Аҭыӡҭыԥ
                </div>
                <div className="text-base sm:text-lg font-bold text-white mb-1">
                  Ҷлоу ақыҭа (Лаганиахәы аҳабла)
                </div>
                <p className="text-xs text-slate-400">
                  Очамчыра араион, Аԥсны Аҳәынҭқарра
                </p>
              </div>
            </div>

            {/* Direct Messengers */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://wa.me/79409924744"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] font-bold text-sm transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://t.me/+79409924744"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-[#0088CC]/10 hover:bg-[#0088CC]/20 border border-[#0088CC]/30 text-[#0088CC] font-bold text-sm transition-all hover:scale-105"
              >
                <Send className="w-4 h-4" />
                <span>Telegram</span>
              </a>
            </div>

          </div>

          {/* Right: Excursion & Message Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#060D1A] border border-slate-800 shadow-2xl relative">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Аҭаареи аекскурсиеи раԥҵара
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Аформа анаҭәышь, ҳара уахынла ҳауаԥшып.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#00E5C0]/10 border border-[#00E5C0]/40 text-center animate-in fade-in">
                  <CheckCircle2 className="w-12 h-12 text-[#00E5C0] mx-auto mb-3" />
                  <div className="text-lg font-bold text-white mb-1">
                    Иҭабуп! Ҳауцәажәоит
                  </div>
                  <p className="text-xs text-slate-300">
                    Узыҳәаз ҭаҳагалеит, иаарласны ҳшәаԥшып.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Ухьӡ
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иҭажәгал ухьӡ"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5C0] text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Ателефон ма WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 940 ..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5C0] text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Аҳабар / Аекскурсиа
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Аекскурсиа амш, ауаа рхыԥхьаӡара..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5C0] text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#00E5C0] hover:bg-[#5EEAD4] text-[#060D1A] font-bold text-sm transition-all shadow-glow-teal flex items-center justify-center gap-2 hover:scale-[1.02]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Анашьҭра</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
