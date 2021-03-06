module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#7668cb',
        'dark-primary': '#685cb4',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
