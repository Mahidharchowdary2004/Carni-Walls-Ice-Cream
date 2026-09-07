/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FEF5F9',
          100: '#FDE6F3',
          200: '#FCD6E9',
          300: '#FAC7E0',
          400: '#F8C8DC', // Main pink
          500: '#F6A9CD',
          600: '#F48ABE',
          700: '#F26BAF',
          800: '#F04CA0',
          900: '#EE2D91',
        },
        secondary: {
          50: '#F5FDF9',
          100: '#E6FBF1',
          200: '#D6F9E9',
          300: '#C8F8E4', // Main mint
          400: '#A9F4D6',
          500: '#8AF0C8',
          600: '#6BECBA',
          700: '#4DE8AB',
          800: '#2EE49D',
          900: '#19D286',
        },
        accent: {
          50: '#FFFEF5',
          100: '#FFFCE6',
          200: '#FFF9D6',
          300: '#FFF3B0', // Main yellow
          400: '#FFEA85',
          500: '#FFE15A',
          600: '#FFD72F',
          700: '#FFCE05',
          800: '#DAAD00',
          900: '#A58300',
        },
        success: {
          500: '#22c55e',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
      },
      fontFamily: {
        display: ['"Baloo 2"', 'cursive'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        }
      },
    },
  },
  plugins: [],
};