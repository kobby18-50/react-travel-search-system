/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens : {
      sm: '270px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    extend: {
      colors : {
        'btncolor': '#f58a4e',
        'hcolor' : '#F57113'
      }
    }

    
  },
  plugins: [require("daisyui")
],

  
}
