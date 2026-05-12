/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#E87E00',
        cream: '#EADFC2',
        ink: '#011423',
        steel: '#7C98B3',
        bay: '#6883BA',
        sage: '#618985',
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
