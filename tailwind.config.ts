import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      primary: '#FE7817',
      black: '#000000',
      white: '#ffffff'
    },
    extend: {
      padding: {
        btx: '69px',
        bty: '19px',
      },
      fontFamily: {
        display: ["Work Sans"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "inner": "-250px 0px 98px 0px rgba(0,0,0, 1) inset"
      }
    },
  },
  plugins: [],
};
export default config;

