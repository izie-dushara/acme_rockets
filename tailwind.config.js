/** @type {import('tailwindcss').Config} */
module.exports = {
  // check content that apply tailwind both in html and JS
  content: ["./build/*.html", "./build/js/*.js"],
  // Can do this too, if there's more than one
  // content: ["./build/**/ *.{html, js}"],
  theme: {
    // Where you define the custom pseudoclasses
    extend: {
      // Extra example of extend
      colors: {
        papayawhip: {
          'light': '#fef4e4',
          'DEFAULT' : '#ffefd5',
          'dark' : '#fee5bc',
        }
    },
      // Hero viewport define

      // Object
      screens: {
        // For screen that are winder 
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)'},
        
        // For screen that are twice as tall
        // 13/20 == 65%
        'tallscreen': {'raw': '(max-aspect-ratio: 13/20)'},
      },

      // Media queries for closing mobile navbar
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },

      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

