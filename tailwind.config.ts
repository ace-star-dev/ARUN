import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-obsidian": "#050505",
        burgundy: "#800020",
        "burgundy-light": "#9e1b32",
        "axis-gold": "#CFB53B",
        "text-primary": "#f5f0e8",
        "text-secondary": "#b8b0a0",
        "text-muted": "#6b6560",
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)"],
        playfair: ["var(--font-playfair)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;