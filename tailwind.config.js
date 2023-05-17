/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {

    fontFamily: {
      'Barlow': ['Barlow', 'sans-serif']
    }, 
    
    screen: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    extend: {
      colors: {
        moderateViolet: 'hsl(263, 55%, 52%)',
        moderateVioletLight: 'hsla(263, 35%, 69%, 0.39)',
        veryDarkGrayishBlue: 'hsl(217, 19%, 35%)',
        veryDarkBlackishBlue: 'hsl(219, 29%, 14%)',
        white: 'hsl(0, 0%, 100%)',
        lightGray: 'hsl(0, 0%, 81%)',
        lightGrayishBlue: 'hsl(210, 46%, 95%)', 
        grey: '#dfdfdf',
      }
    },
  },
  plugins: [],
}

