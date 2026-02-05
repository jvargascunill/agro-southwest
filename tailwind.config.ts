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
        primary: {
          DEFAULT: "#b8d430",
          light: "#d4e87a",
          dark: "#9bb82a",
        },
        secondary: {
          DEFAULT: "#1a3d2e",
          light: "#2d5a47",
          dark: "#0f261c",
        },
        accent: {
          white: "#fafbf9",
          gray: "#e8ebe6",
          "gray-dark": "#6b7280",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
