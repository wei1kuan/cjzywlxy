/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'heritage-primary': '#AE2D2D',
        'heritage-secondary': '#BE4B4B',
        'heritage-accent': '#E8C547',
        'heritage-dark': '#4C1515',
        'heritage-light': '#F0EAE3',
        'heritage-cream': '#F5F0EB',
        'heritage-white': '#FFFFFF',
        'heritage-gold': '#E8C547',
        'heritage-lacquer': '#6E1C1C',
        'heritage-ink': '#2B0D0D',
      },
      fontFamily: {
        'display': ['Noto Serif SC', 'serif'],
        'body': ['Noto Sans SC', 'sans-serif'],
        'chinese': ['BaiGeTianXing', 'MaoBiGuYun', 'STXingkai', '华文行楷', 'cursive'],
      },
    },
  },
  plugins: [],
};