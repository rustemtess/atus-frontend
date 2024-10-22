/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        light: '#ffffff',
        dark: '#000000',
      },
    },
  },
  plugins: [],
};
