import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize:{
        '10': '10px',
        '11': '11px',
        '13': '13px',
        '15': '15px',
        '17': '17px',
        '19': '19px',
      },
      colors:{
        "primary": "#4DB24D",
        "secondary": "#1E4F70",
        "background": "",
        "stroke": "#EDEFF2",
        "subText": "#5090A0",
        "sellOff": "",
        "fadeOff": "",
        "fadeText": "#8996A9"
      },
      backgroundColor:{
        "primary": "#4DB24D",
        "secondary": "#1E4F70",
        "background": "",
        "stroke": "#EDEFF2",
        "subText": "#5090A0",
        "sellOff": "",
        "fadeOff": "",
        "fadeText": "#8996A9"
      },
      
    },
  },
  plugins: [],
};
export default config;
