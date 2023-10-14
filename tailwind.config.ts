/** @type {import('tailwindcss').Config} */
module.exports = {
   daisyui: {
    themes: true,
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        overlay: 'rgba(142, 125, 190, 0.5)' /* tropical-indigo */,
        background: '#303633' /* onyx */,
        button: '#fca311' /* orange-web */,
        headline: '#ffffff' /* white */,
        paragraph: '#8e7dbe' /* tropical-indigo */,
        buttonText: '#303633' /* onyx */,
        stroke: '#e5e5e5' /* platinum */,
        main: '#8e7dbe' /* tropical-indigo */,
        highlight: '#fca311' /* orange-web */,
        secondary: '#ffffff' /* white */,
        tertiary: '#fca311' /* orange-web */,
      },
    },
  },
plugins: [require("daisyui")],
}