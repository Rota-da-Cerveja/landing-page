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
      primary: {
        100: '#F2B705',
        200: '#F28F16',
        500: '#D9601A',
        700: '#BF2B0A',
        900: '#8C0303',
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff'
    },
    extend: {
      padding: {
        btx: '69px',
        bty: '19px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "inner": "-1px 8px 400px -1px rgba(0,0,0,0.75) inset;",
        "footer": "-1px -26px 38px 6px rgba(0,0,0,1);"
      }
    },
  },
  plugins: [],
};
export default config;

