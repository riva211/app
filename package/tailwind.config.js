/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blue1': '#8ECAE6',
        'blue2': '#219EBC',
        'blue3': '#023047',
        'yellow1': '#FFB703',
        'yellow2': '#FB8500',

      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
 
}

