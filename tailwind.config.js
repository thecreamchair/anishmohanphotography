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
          950: '#faf9f7', // Cream White - Background
          900: '#e7e1d5',
          800: '#d4c9b3', // Desert Beige - Secondary
          700: '#c1b191',
          600: '#b8c2a1',
          500: '#8dae92', // Pale Olive - Accent
          400: '#6e7b62',
          300: '#4f5a3a',
          200: '#3e472e',
          100: '#4f5a3a', // Dark Olive - Text (Note: mapped to 300/100 in css)
          50: '#2c2b29',  // Deep Olive - Action/Dark Accent
        },
        brand: {
          600: '#4f5a3a',
          500: '#b8c2a1', // Pale Olive
          400: '#c5cdb3',
          300: '#d2d9c5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
