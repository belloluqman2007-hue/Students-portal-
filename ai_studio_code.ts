import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e3a8a", // Deep Blue
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#10b981", // Emerald Green
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#fbbf24", // Gold
          foreground: "#1e3a8a",
        },
      },
    },
  },
  plugins: [],
};
export default config;