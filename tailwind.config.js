 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'slide-from-left': 'slideFromLeft 2s ease-out forwards',
        'bouncing': 'bounce 2s ease-out forwards',
        'fade-from-top': 'fadeFromTop 2s ease-out forwards',
      },
      keyframes: {
        slideFromLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeFromTop: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        
      },
    },
  },
  plugins: [],
}