/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        liquid: {
          '0%': { clipPath: 'circle(50% at 50% 50%)' }, // Start as a circle
          '25%': { clipPath: 'ellipse(60% 40% at 50% 50%)' }, // Stretch horizontally
          '50%': { clipPath: 'ellipse(50% 60% at 50% 50%)' }, // Stretch vertically
          '75%': { clipPath: 'ellipse(40% 50% at 50% 50%)' }, // Back to a similar size
          '100%': { clipPath: 'circle(50% at 50% 50%)' }, // End in circle
        },
      },
      animation: {
        liquid: 'liquid 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

