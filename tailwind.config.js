/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050505',
          900: '#0b0a0a',
          800: '#141111',
          700: '#1f1a1a',
        },
        crimson: {
          300: '#f07a7f',
          400: '#e04a50',
          500: '#c42a30',
          600: '#a31d24',
          700: '#7f1419',
          900: '#3d0a0d',
        },
        gold: {
          200: '#f5e4a8',
          300: '#f0d88a',
          400: '#e2c069',
          500: '#d4af37',
          600: '#b8922a',
          700: '#8a6d1f',
        },
        cream: '#f6efdf',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
