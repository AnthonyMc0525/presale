module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-creme': '#FFEDD5',
        'custom-yellow': '#FFFBEB',
      },
      spacing: {
        '195': '19.5rem',
        '6/5': '120%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
