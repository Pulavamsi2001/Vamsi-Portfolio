/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures only used classes are included
  ],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',  // Adding a 2000ms duration class
      },
      backgroundImage: {
        'custom-background': "url('./assets/bg.jpg')", // Custom background image
      },
    },
  },
  plugins: [],
}
