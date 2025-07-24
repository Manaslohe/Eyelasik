/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-out-left': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(-100%)', opacity: 0 }
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(100%)', opacity: 0 }
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        modalSlide: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.95) translateY(10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1) translateY(0)'
          },
        },
        modalFade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        modalPop: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        modalShow: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        }
      },
      animation: {
        'slide-out-left': 'slide-out-left 0.5s forwards',
        'slide-in-right': 'slide-in-right 0.5s forwards',
        'slide-out-right': 'slide-out-right 0.5s forwards',
        'slide-in-left': 'slide-in-left 0.5s forwards',
        fadeIn: 'fadeIn 0.3s ease-out',
        modalSlide: 'modalSlide 0.3s ease-out',
        modalIn: 'modalFade 0.3s ease-out',
        modalContentIn: 'modalPop 0.3s ease-out',
        modalShow: 'modalShow 0.2s ease-out'
      }
    },
  },
  plugins: [],
}
