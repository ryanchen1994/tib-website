/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9fb',
          100: '#d8f1f6',
          200: '#b4e3ee',
          300: '#82cfe3',
          400: '#4bb5d3',
          500: '#1d98c0',
          600: '#147ba0',
          700: '#116383',
          800: '#0f516c',
          900: '#0e435a'
        }
      },
      fontFamily: {
        sans: ["Noto Sans TC", "Inter", "system-ui", "-apple-system", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(2, 132, 199, 0.25)'
      }
    },
  },
  plugins: [],
}