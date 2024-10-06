/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#333333',     // Custom primary color
        secondary: '#ff6347',   // Custom secondary color
      },
      backgroundImage:{
        'sliderbanner':"url('images/assets/slider-bg.jpg')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
