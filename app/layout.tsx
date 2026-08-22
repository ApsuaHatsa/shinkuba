import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#060D1A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shinkuba.apsny.dev"),
  title: "Баграт Уасыл-иԥа Шьынқәба имемориалтә аҩны-музеи | shinkuba.apsny.dev",
  description:
    "Баграт Уасыл-иԥа Шьынқәба имемориалтә аҩны-музеи: абиографиа, аҭоурых, афотогалереиа, алитературатә ҭынха, амемориалтә музей Ҷлоу ақыҭа, Аԥсны.",
  keywords: [
    "Баграт Шьынқәба",
    "Баграт Шинкуба",
    "Шьынқәба",
    "Ҷлоу",
    "Аԥсны",
    "аҩны-музеи",
    "дом-музей Шинкуба",
    "Ацынҵәарах",
    "Последний из ушедших",
    "Аԥсуа литература",
    "shinkuba.apsny.dev",
  ],
  authors: [{ name: "Apsny Production Inc.", url: "https://apsny.dev" }],
  creator: "Apsny Production Inc.",
  publisher: "Баграт Уасыл-иԥа Шьынқәба имемориалтә аҩны-музеи",
  alternates: {
    canonical: "https://shinkuba.apsny.dev",
  },
  openGraph: {
    type: "website",
    locale: "ab_GE",
    url: "https://shinkuba.apsny.dev",
    siteName: "Баграт Шьынқәба имемориалтә аҩны-музеи",
    title: "Баграт Уасыл-иԥа Шьынқәба имемориалтә аҩны-музеи",
    description:
      "Баграт Уасыл-иԥа Шьынқәба имемориалтә аҩны-музеи Ҷлоу ақыҭа: абиографиа, аҭоурых, афотогалереиа, алитературатә ҭынха.",
    images: [
      {
        url: "/images/image_04.jpg",
        width: 1200,
        height: 630,
        alt: "Баграт Уасыл-иԥа Шьынқәба",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Баграт Уасыл-иԥа Шьынқәба имемориалтә аҩны-музеи",
    description:
      "Баграт Уасыл-иԥа Шьынқәба имемориалтә аҩны-музеи Ҷлоу ақыҭа: абиографиа, афотогалереиа, аҭынха.",
    images: ["/images/image_04.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Museum",
        "@id": "https://shinkuba.apsny.dev/#museum",
        name: "Баграт Уасыл-иԥа Шьынқәба имемориалтә аҩны-музеи",
        alternateName: "Мемориальный дом-музей Баграта Шинкуба",
        description:
          "Аԥсны жәлар рпоет, академик Баграт Уасыл-иԥа Шьынқәба имемориалтә аҩны-музеи Ҷлоу ақыҭа.",
        url: "https://shinkuba.apsny.dev",
        telephone: "+79409924744",
        email: "bshinkuba@yandex.ru",
        image: "https://shinkuba.apsny.dev/images/image_04.jpg",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ҷлоу (Лаганиахәы аҳабла)",
          addressRegion: "Очамчыра араион",
          addressCountry: "GE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "42.887",
          longitude: "41.602",
        },
      },
      {
        "@type": "Person",
        "@id": "https://shinkuba.apsny.dev/#author",
        name: "Баграт Уасыл-иԥа Шьынқәба",
        alternateName: "Баграт Васильевич Шинкуба",
        birthDate: "1916-05-12",
        deathDate: "2004-02-25",
        birthPlace: {
          "@type": "Place",
          name: "Ҷлоу, Очамчыра араион, Аԥсны",
        },
        jobTitle: "Аԥсны жәлар рпоет, ашәҟәыҩҩы, аҳәынҭқарратә усзуҩы, дакадемикуп",
        sameAs: [
          "https://ru.wikipedia.org/wiki/Шинкуба,_Баграт_Васильевич",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://shinkuba.apsny.dev/#website",
        name: "Баграт Уасыл-иԥа Шьынқәба имемориалтә аҩны-музеи",
        url: "https://shinkuba.apsny.dev",
        publisher: {
          "@id": "https://shinkuba.apsny.dev/#museum",
        },
      },
    ],
  };

  return (
    <html lang="ab" className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#060D1A] text-slate-100 antialiased selection:bg-[#00E5C0]/20 selection:text-[#00E5C0]">
        {children}
      </body>
    </html>
  );
}
