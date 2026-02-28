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
          DEFAULT: "#0f261c",
          light: "#1a3d2e",
          dark: "#07150f",
        },
        accent: {
          white: "#fafbf9",
          gray: "#e8ebe6",
          "gray-dark": "#6b7280",
        },
      },
      fontFamily: {
        sans: ["Tiffany", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
