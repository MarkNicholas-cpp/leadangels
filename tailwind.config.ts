import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'rgb(0,29,33)',

      },
      textColor: {
        primary: 'rgb(0,29,33)'
      },
      backgroundImage: {
        'logo': "url('/logo.png')"
      },
      borderColor: {
        primary: 'rgb(0,29,33)'
      },
      colors: {
        primary: 'rgb(0,29,33)'
      }
    },
  },
  plugins: [],
};
export default config;
