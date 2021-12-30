module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    fontFamily: {
      'Kaushan': ['Kaushan Script'],
    },
    extend: {
      colors: {
        custom_green: {
          DEFAULT: '#00f260',
        }
      },
    },
  },
  plugins: [],
}