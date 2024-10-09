import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components_desktop/**/*.{js,ts,jsx,tsx}",
    "./src/components_mobile/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        extend: {
          '0%': { transform: 'scale(1, 1)', transformOrigin: '0% 0%' },
          '100%': { transform: 'scale(8, 1)', transformOrigin: '0% 0%'},
        },
        extend2: {
          '0%': { transform: '' }
        },
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeout: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideInLeft: {
          "0%": {
            transform: "translateX(-250px)",
          },        
          "100%": {
            transform: "translateX(0)",
          }
        },
        slightDim: {
          "0%": { opacity: '1' },
          "100%": { opacity: "0.9"},
        },
      },
      animation: {
        'icon-extend': 'extend 0.4s cubic-bezier(0.25, 1, 0.5, 1) 1 both',
        'icon-fade-in': 'fadein 0.15s ease 0.2s 1 normal both',
        'icon-fade-out': 'fadeout 0.2s ease 1 normal both',
        'slide-in-left': 'slideInLeft 0.3s ease 0s 1 normal both',
        'slight-dim': 'slightDim 0.2s ease 0s 1 normal forwards',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        whatsappgreen: "#084d17",
      },
    },
  },
  plugins: [],
};
export default config;
