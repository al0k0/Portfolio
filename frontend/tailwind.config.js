/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spin-right': 'spin-right 6s linear infinite',
        'spin-left': 'spin-left 6s linear infinite',
        'liquid': 'liquid 8s ease-in-out infinite',
      },
      keyframes: {
        'spin-right': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-left': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        liquid: {
          '0%': { clipPath: 'circle(50% at 50% 50%)' },
          '25%': { clipPath: 'ellipse(60% 40% at 50% 50%)' },
          '50%': { clipPath: 'ellipse(50% 60% at 50% 50%)' },
          '75%': { clipPath: 'ellipse(40% 50% at 50% 50%)' },
          '100%': { clipPath: 'circle(50% at 50% 50%)' },
        },
      },
    },
  },
  plugins: [],
}
