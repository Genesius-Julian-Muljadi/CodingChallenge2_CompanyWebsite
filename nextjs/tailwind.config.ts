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
        wobble: {
          "0%": { transform: 'translateX(0%)', transformOrigin: '50% 50%' },
          "15%": { transform: 'translateX(-30px) rotate(-6deg)' },
          "30%": { transform: 'translateX(15px) rotate(-6deg)' },
          "45%": { transform: 'translateX(-15px) rotate(-3.6deg)' },
          "60%": { transform: 'translateX(9px) rotate(2.4deg)' },
          "75%": { transform: 'translateX(-6px) rotate(-1.2deg)' },
          "100%": { transform: 'translateX(0%)', transformOrigin: '50% 50%' },
        },
      },
      animation: {
        'icon-extend': 'extend 0.4s cubic-bezier(0.25, 1, 0.5, 1) 1 both',
        'icon-fade-in': 'fadein 0.15s ease 0.15s 1 normal both',
        'icon-fade-out': 'fadeout 0.2s ease 1 normal both',
        'slide-in-left': 'slideInLeft 0.3s ease 0s 1 normal both',
        'slight-dim': 'slightDim 0.2s ease 0s 1 normal forwards',
        'icon-wobble': 'wobble 0.8s ease 0s 1 normal forwards',
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
