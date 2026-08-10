import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1360px" },
    },
    extend: {
      colors: {
        // Ancrée sur le bleu du logo Finotech (#093A57)
        navy: {
          50: "#f1f6f8",
          100: "#dfeaf1",
          200: "#bbd7e7",
          300: "#88bddd",
          400: "#459ed3",
          500: "#227eb4",
          600: "#17618c",
          700: "#093b58",
          800: "#072b40",
          900: "#031a28",
          950: "#021018",
        },
        // Ancrée sur le gris du logo Finotech (#5E5F5F)
        anthracite: {
          50: "#f7f7f7",
          100: "#ededed",
          200: "#d9d9d9",
          300: "#babbbb",
          400: "#939494",
          500: "#5e5f5f",
          600: "#4c4d4d",
          700: "#3d3e3e",
          800: "#2b2c2c",
          900: "#1e1f1f",
          950: "#141515",
        },
        // Ancrée sur le rouge du logo Finotech (#E23226) — accent unique de la marque
        scarlet: {
          50: "#f9f1f0",
          100: "#f5dddb",
          200: "#efc0bd",
          300: "#ea9590",
          400: "#e6655c",
          500: "#e23226",
          600: "#cf2317",
          700: "#a51c12",
          800: "#7d1912",
          900: "#57140f",
        },
        paper: "#fbfbfa",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(2.75rem, 5vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-xl": ["clamp(2.25rem, 4vw, 3.75rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(1.875rem, 3vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(3,26,40,0.04), 0 8px 24px -12px rgba(3,26,40,0.12)",
        elevated: "0 4px 12px rgba(3,26,40,0.06), 0 24px 48px -16px rgba(3,26,40,0.18)",
        scarlet: "0 8px 30px -10px rgba(226,50,38,0.35)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(136,189,221,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(136,189,221,0.10) 1px, transparent 1px)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        marquee: "marquee 32s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
