import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        bg: "#EEF7FF",
        ink: "#082B4F",
        sub: "#6B7C8F",
        btn: "#0B5CAD",
        footer: "#0B3F7A",
      },
    },
  },
  plugins: [],
};

export default config;
