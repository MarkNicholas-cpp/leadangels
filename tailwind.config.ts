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
        primary: 'rgb(26,38,80)',

      },
      textColor: {
        primary: 'rgb(26,38,80)'
      },
      backgroundImage: {
        'logo': "url('/Lead Invest Logo-1_page-0001.jpg')"
      },
      borderColor: {
        primary: 'rgb(26,38,80)'
      },
      colors: {
        primary: 'rgb(26,38,80)'
      }
    },
  },
  plugins: [],
};
export default config;
