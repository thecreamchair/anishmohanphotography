/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nature: {
          900: '#1a2e1a', // Deep forest green
          800: '#2d4a2d',
          700: '#406640',
          600: '#5c8a5c',
          500: '#7aab7a',
          400: '#9ccf9c',
          300: '#c2e0c2',
          200: '#d9ebd9',
          100: '#edf7ed',
          50: '#f7fcf7',
        },
        earth: {
          900: '#3e2723', // Dark brown
          800: '#4e342e',
          700: '#5d4037',
          600: '#6d4c41',
          500: '#795548',
          400: '#8d6e63',
          300: '#a1887f',
          200: '#bcaaa4',
          100: '#d7ccc8',
          50: '#efebe9',
        },
        sky: {
          900: '#0d47a1', // Deep sky blue
          800: '#1565c0',
          700: '#1976d2',
          600: '#1e88e5',
          500: '#2196f3',
          400: '#42a5f5',
          300: '#64b5f6',
          200: '#90caf9',
          100: '#bbdefb',
          50: '#e3f2fd',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
