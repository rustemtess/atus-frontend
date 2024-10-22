/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        googlesansregular: ['GoogleSansRegular'],
        googlesansmedium: ['GoogleSansMedium'],
        vksansregular: ['VkSansRegular'],
        vksansmedium: ['VkSansMedium'],
      },
      colors: {
        light: '#ffffff',
        dark: '#000000',
      },
    },
  },
  plugins: [],
};
