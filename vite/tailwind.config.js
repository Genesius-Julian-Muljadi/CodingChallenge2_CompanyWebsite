/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
      },
      animation: {
        'icon-extend': 'extend 0.4s cubic-bezier(0.25, 1, 0.5, 1) 1 both',
        'icon-fade-in': 'fadein 0.15s ease 1 normal both',
        'icon-fade-out': 'fadeout 0.2s ease 1 normal both',
      },
      colors: {
        whatsappgreen: "#084d17"
      }
    },
  },
  plugins: [],
}

