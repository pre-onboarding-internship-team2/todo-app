/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx}"],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1.1rem',
      lg: '1.563rem',
      xl: '2rem',
      xl2: '3rem'
    },
    extend: {
      colors: {
        green: {
          1: '#86EFAC',
          2: '#4ADE80',
          3: '#20c997'
        },
        gray: {
          1: '#f8f9fa',
          2:'#A8A29E',
          3: '#6B7280',
        },
        red: {
          1: '#ff6b6b',
          2: '#EF4444',
        },
        blue: {
          1: '#dee2e6',
        },
        date: {
          1: '#343a40',
        },
        day: {
          1: '#868e96',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
        tilt: ['Tilt Warp']
      },
      width: {
        '128': '23rem',
      }
    },
  },
  plugins: [],
}
