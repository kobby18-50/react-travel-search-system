/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'main': '#95dada'
      }
    },
  },
  plugins: [require("daisyui")
],

  
}
