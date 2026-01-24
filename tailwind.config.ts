import type { Config } from "tailwindcss";

const config: Config = {
  // 1. THIS IS THE FIX: Tells Tailwind to toggle manually via class
  darkMode: "class",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Add this if you have files outside src
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 2. Defines 'text-primary' and 'bg-primary'
        // I used the yellow-500 hex code based on your previous design
        primary: "#EAB308",
      },
    },
  },
  plugins: [],
};
export default config;
