import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',  // Ensuring JIT mode is enabled
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: true,
  },
  theme: {
    extend: {
      colors: {
        'overlay': 'rgba(142, 125, 190, 0.5)', /* tropical-indigo */
        'background': '#303633', /* onyx */
        'button': '#fca311', /* orange-web */
        'headline': '#ffffff', /* white */
        'paragraph': '#8e7dbe', /* tropical-indigo */
        'buttonText': '#303633', /* onyx */
        'stroke': '#e5e5e5', /* platinum */
        'main': '#8e7dbe', /* tropical-indigo */
        'highlight': '#fca311', /* orange-web */
        'secondary': '#ffffff', /* white */
        'tertiary': '#fca311', /* orange-web */
      },
    },
  },
  plugins: [require("daisyui")],
};

export default config;
