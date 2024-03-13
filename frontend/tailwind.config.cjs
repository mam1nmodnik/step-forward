/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      'sm3': '260px',
      'sm2': '390px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px', 
      '2xl': '1536px',
      '3xl': '2060px',
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          
        },
        background: {
        
        },
        paragraph: {
        
        },
        other: {
         
        },

      },
      plugins: [

      ],
    },
  },
}
