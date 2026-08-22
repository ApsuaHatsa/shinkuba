import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/%D0%B0%D0%B3%D0%B0%D0%BB%D0%B5%D1%80%D0%B5%D0%B8%D0%B0",
        destination: "/#gallery",
      },
      {
        source: "/%D0%B0%D0%B6%D3%99%D0%B0%D0%B1%D0%B6%D1%8C%D2%9B%D3%99%D0%B0",
        destination: "/#news",
      },
      {
        source: "/%D0%B0%D1%85%D0%B0%D0%BB%D0%B0%D0%B3%D0%B0%D1%80%D0%B0%D1%82%C9%99",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;
