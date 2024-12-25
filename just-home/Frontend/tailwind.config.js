/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff',
        'custom-cyan': '#00d4ff',
      },
      screens:{
        '950': '950px',
        '690': '690px'
      },
      backgroundImage: {
        hero: "url('../src/assets/imgs/hero3.jpeg')",
      },
      fontSize:{
        '19px' : '19px', 
      }
    },
  },
  plugins: [],
}

