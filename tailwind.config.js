/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        pixel: ['PressStart2P', 'monospace'],
      },
      boxShadow: {
        'pixel': '4px 4px 0 #000',
        'pixel-hover': '6px 6px 0 #000',
        'pixel-active': '2px 2px 0 #000',
        'pixel-inset': 'inset 0 -4px 0 #000, inset 0 4px 0 #6a6a6a',
      },
      colors: {
        'gold': {
          400: '#ffd700',
          500: '#d4af37',
          600: '#b8860b',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
