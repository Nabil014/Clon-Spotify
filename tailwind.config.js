/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        spotify:{
          green:'#1DB954',
          black: '#191414',
          white:'#FFFFFF',
          lightgray:'#B3B3B3',
          gray:'#272626',
          grayHover:'#393939'
        }
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}