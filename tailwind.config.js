/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "neon-yellow":"#F8EF00",
        "bright-aque":"#00F0FF",
        "cool-red":"#FF003C",
        "black":"#000000",
        "alabaster":"#FAFAFA",
        "neutral-gray":"#BBBBBB",

      }
    },
  },
  plugins: [],
}
