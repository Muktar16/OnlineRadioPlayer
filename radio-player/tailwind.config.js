/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4250AF',
        darkBackground: '#2d2d2d',
        gray1: "#989FB7",
        gray2: "#6D748C",
        gray3: "#4C505D",
      },
    },
  },
  plugins: [],
}

