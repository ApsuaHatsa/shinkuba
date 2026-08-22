"use client";

import React from "react";
import Image from "next/image";
import { BookOpen, Award, GraduationCap, Building2, ScrollText, CheckCircle2 } from "lucide-react";

export const Biography: React.FC = () => {
  const milestones = [
    {
      year: "1916",
      title: "Адиит Ҷлоу ақыҭа",
      desc: "12 лаҵара рзы Ҷлоу ақыҭа (Лаганиахәы аҳабла) Очамчыра араион аҿы диит.",
      icon: ScrollText,
      accent: "teal",
    },
    {
      year: "1926 - 1930",
      title: "Алагарҭатә школқәа",
      desc: "1926 шықәсазы дҭалоит Ҷлоутәи алагарҭатә школ, далгоит 1928 шықәсазы. 1930 дласуеит Џьгьардатәи быжь-шықәсатәи ашкол ахь.",
      icon: GraduationCap,
      accent: "indigo",
    },
    {
      year: "1935",
      title: "Аҟәатәи арҵаҩратә техникум",
      desc: "Далгоит Аҟәатәи арҵаҩратә техникум. Акьыԥхь аҿы дцәырҵуеит 1935 ш. инаркны. Даанахуоит Аҟәатәи аҳәынҭқарратә арҵаҩратә институт абызшәеи литературеи рыҟәша.",
      icon: BookOpen,
      accent: "gold",
    },
    {
      year: "1939 - 1944",
      title: "Аспирантураи акандидатраи",
      desc: "Қырҭтәылатәи аҭҵаарадыррақәа Ракадемиа аинститут аспирантура. 1941 ш. Аԥсныҟа дхынҳәеит, аус иуеит агазет 'Аԥсны Ҟапшь' аредакциаҿ, Аԥсуа институтаҿы, Ашәҟәыҩҩцәа Реидгылаҿы. 1944 ш. афилологиатә аҭҵаарадыррақәа дыркандидатуп.",
      icon: GraduationCap,
      accent: "teal",
    },
    {
      year: "1953 - 1958",
      title: "Ашәҟәыҩҩцәа Реидгыла анапхгара",
      desc: "Б. Шьынқәба Аԥснытәи Ашьҟәыҩҩцәа Реидгыла напхгара азиуеит.",
      icon: Building2,
      accent: "indigo",
    },
    {
      year: "1958 - 1979",
      title: "Асовет Апрезидиум Дахантәаҩуп",
      desc: "Аԥснытәи АССР Иреихаӡоу Асовет Апрезидиум дахантәаҩуп.",
      icon: Award,
      accent: "gold",
    },
    {
      year: "1967",
      title: "Аԥсны жәлар рпоет",
      desc: "Баграт Шьынқәба Аԥсны жәлар рпоет ҳәа аҳаҭыр хьӡы иаҭәаршьоит.",
      icon: Award,
      accent: "teal",
    },
    {
      year: "1989",
      title: "СССР жәлар рдепутат, Дакадемикуп",
      desc: "СССР жәлар рдепутат. Баграт Шьынқәба дакадемикуп; ихҵоуп Ҟабарда-Балҟартәылеи Адыгьеиаи жәлар рышәҟәыҩҩы ҳәа ахьӡ.",
      icon: Award,
      accent: "gold",
    },
  ];

  return (
    <section id="biography" className="py-24 relative bg-[#060D1A]">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00E5C0]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#00E5C0]/30 text-xs font-semibold text-[#00E5C0] mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Баграт Уасыл-иԥа Шьынқәба имемориалтә аҩны-музеи</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Баграт Шьынқәба : Абиографиа
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Аԥсны жәлар рпоет, ашәҟәыҩҩы, аҳәынҭқарратә усзуҩы, академик Баграт Уасыл-иԥа Шьынқәба иԥсҭазаареи иусуреи рхыҵхырҭа.
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
                  <div className="text-sm font-bold text-white">Б. У. Шьынқәба</div>
                  <div className="text-xs text-[#00E5C0]">1916 - 2004</div>
                </div>
              </div>

              {/* Exact Uncut Original Text */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-700/60">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00E5C0]">
                    Аофициалтә абиографиатә текст
                  </span>
                </div>

                <div className="prose prose-invert max-w-none text-slate-200 text-base sm:text-lg leading-relaxed space-y-4">
                  <p className="font-light text-slate-100 first-letter:text-4xl first-letter:font-bold first-letter:text-[#00E5C0] first-letter:mr-2 first-letter:float-left">
                    Баграт Уасыл-иԥа Шьынқәба диит 1916 шықәса 12 лаҵара рзы Ҷлоу ақыҭа (Лаганиахәы аҳабла) Очамчыра араион аҿы. 1926 шықәсазы дҭалоит Ҷлоутәи алагарҭатә школ, далгоит 1928 шықәсазы. 1930 дласуеит Џьгьардатәи быжь-шықәсатәи ашкол ахь. Абраҟа ҵарашықәск анынаигӡа, дцоит Аҟәаҟа, дҭалоит Аҟәатәи арҵаҩратә техникум. Далгоит 1935 шықәсазы. Иара убасҟан 1935 рзы, даанахуоит Аҟәатәи аҳәынҭқарратә арҵаҩратә институт абызшәеи литературеи рыҟәша.
                  </p>
                  <p>
                    Абраҟа иҵара анихыркуша, 1939 шықәсазы, Баграт Шьынқәба дҵоит Қарҭҟа, дрыдылкылоит Қырҭтәылатәи аҭҵаарадыррақәа Ракадемиа иатәу Абызшәаҭҵаара аинститут аспирантураҿ. 1941 шықәсазы, аибашьра ианалага, аамҭала Аԥсныҟа дхынҳәеит, зны аус иуеит рҵаҩыс, нас агазет &quot;Аԥсны Ҟапшь&quot; аредакциаҿ Аԥсуа институтаҿы, Ашәҟәыҩҩцәа Реидгылаҿы. 1943 шықәсазы ҩаԥхьа Қарҭҟа дхынҳәуеит, дызҭаз аспирантураҿ иҵара наигӡоит иагьхиркушоит 1944 шықәсазы. Афилологиатә аҭҵаарадыррақәа дыркандидатуп.
                  </p>
                  <p>
                    Акьыԥхь аҿы дцәырҵуеит 1935 ш. инаркны. 1953-1958 шықәсқәа рзы Б. Шьынқәба Аԥснытәи Ашьҟәыҩҩцәа Реидгыла напхгара азиуеит. 1958-1979 ш. рзы Аԥснытәи АССР Иреихаӡоу Асовет Апрезидиум дахантәаҩуп. 1967 Баграт Шьынқәба Аԥсны жәлар рпоет ҳәа аҳаҭыр хьӡы иаҭәаршьоит. 1959, 1978, 1984 шықәсқуа рзы СССР Иреиҳаӡоу Асовет ашҟа депутатс далырхуеит, 1989 шықәсазы - СССР жәлар рдепутат. Баграт Шьынқәба дакадемикуп; ихҵоуп Ҟабарда-Балҟартәылеи Адыгьеиаи жәлар рышәҟәыҩҩы ҳәа ахьӡ.
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
              Аԥсҭазаара ахҭыс хадақәа
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Баграт Шьынқәба иҭоурыхтә мҩа (1916 - 1989+)
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
