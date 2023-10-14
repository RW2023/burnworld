/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: true,
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        overlay: 'rgba(43, 45, 66, 0.5)', // --space-cadet with 50% opacity
        background: '#2b2d42', // --space-cadet
        button: '#f8f32b', // --aureolin
        headline: '#ffffff', // --white
        paragraph: '#8d99ae', // --cool-gray
        buttonText: '#2b2d42', // --space-cadet
        stroke: '#8d99ae', // --cool-gray
        main: '#f8f32b', // --aureolin
        highlight: '#f8f32b', // --aureolin
        secondary: '#8d99ae', // --cool-gray
        tertiary: '#000000', // --black
      },
      fontFamily: {
        sans: ['Poppins', 'sans'],
        serif: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
