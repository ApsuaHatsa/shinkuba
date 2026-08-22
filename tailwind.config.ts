import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#060D1A",
        surface: {
          DEFAULT: "#0B1528",
          card: "#0F1E38",
          hover: "#15284A",
          glass: "rgba(11, 21, 40, 0.75)",
          border: "rgba(0, 229, 192, 0.15)",
        },
        brand: {
          teal: "#00E5C0",
          tealLight: "#5EEAD4",
          tealDark: "#0D9488",
          indigo: "#6366F1",
          gold: "#F59E0B",
          goldLight: "#FDE68A",
          navy: "#0A1428",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 50% 30%, rgba(0, 229, 192, 0.12), rgba(99, 102, 241, 0.08) 45%, transparent 70%)",
        "card-glass": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      boxShadow: {
        "glow-teal": "0 0 25px -5px rgba(0, 229, 192, 0.3)",
        "glow-indigo": "0 0 25px -5px rgba(99, 102, 241, 0.3)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
