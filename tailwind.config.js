/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',  // Adding a 2000ms duration class
      
      },
      backgroundImage: {
        'custom-background': "url('./assets/bg.jpg')",
      },
    },
  },
  plugins: [],
}