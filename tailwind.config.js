/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx}"],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.563rem',
    },
    extend: {
      colors: {
        green: {
          1: '#86EFAC',
          2: '#4ADE80',
        },
        gray: '#A8A29E',
        red: '#EF4444',
      }
    },
  },
  plugins: [],
}
