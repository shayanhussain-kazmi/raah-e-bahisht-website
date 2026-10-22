import type { Config } from "tailwindcss";

// Design tokens extracted directly from the Raah-e-Bahisht mobile app
// (theme.js references in App.js / HomeScreen.js / ProfileScreen.js,
// and the literal COLORS palette in SearchScreen.js).
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#05061A", // deepest night — splash / outer background
          900: "#0D1030",
          800: "#011C44", // primary app background (SearchScreen bg)
          700: "#04264F", // bgAlt
          600: "#0E2F5C", // card / surface
          500: "#15206C", // radial menu accent, royal indigo
        },
        gold: {
          DEFAULT: "#E3D7B3", // primary accent (SearchScreen gold)
          bright: "#FFD54F", // active / CTA gold
          pale: "#F6E7BE", // gradient highlight
        },
        ivory: "#F5F1E6", // textPrimary
        rust: "#E5734A", // danger / rare warm accent
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "10px",
        md: "16px",
        lg: "22px",
        xl: "30px",
      },
      backgroundImage: {
        "grad-night": "linear-gradient(180deg, #05061A 0%, #0D1030 55%, #181C42 100%)",
        "grad-dusk": "linear-gradient(180deg, #2E1A3D 0%, #6B2F4F 55%, #A5493F 100%)",
        "grad-dawn": "linear-gradient(180deg, #241B3D 0%, #4A3566 55%, #8A6A8F 100%)",
      },
      boxShadow: {
        gold: "0 8px 30px -8px rgba(227, 215, 179, 0.35)",
        card: "0 20px 60px -20px rgba(0,0,0,0.6)",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
