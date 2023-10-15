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
        overlay: '#f7f7f2ff', // Baby Powder
        background: '#121113ff', // Night
        button: '#899878ff', // Moss Green
        headline: '#e4e6c3ff', // Beige
        paragraph: '#f7f7f2ff', // Baby Powder
        buttonText: '#121113ff', // Night
        stroke: '#222725ff', // Eerie Black
        main: '#e4e6c3ff', // Beige
        highlight: '#899878ff', // Moss Green
        secondary: '#f7f7f2ff', // Baby Powder
        tertiary: '#222725ff', // Eerie Black
      },
      fontFamily: {
        sans: ['Poppins', 'sans'],
        serif: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
