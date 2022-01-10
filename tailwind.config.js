module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      Kaushan: ['Kaushan Script'],
    },
    boxShadow: {
      'custom-light': ' 0 0 10px #313131',
      'custom-dark': '5px 5px 10px #0a0c0e , -5px -5px 10px #14161c',
    },
    extend: {
      colors: {
        custom_green: {
          DEFAULT: '#00f260',
        },
        primarycolor: {
          DEFAULT: '#DA95D3', // Plum web
        },
        primarybgcolor: {
          DEFAULT: '#f7c7db', // orchard pink
        },
        textbgcolor: {
          DEFAULT: '#F3E2F3', //pale purple pantone
        },
        secondarycolor: {
          DEFAULT: '#92D1C3', // Middle blue Green
        },

        dark: {
          DEFAULT: '#010101',
          100: '#0a0b0e',
          200: '#16181d',
          300: '#16181d',
          500: '#0f1115',
          700: '#202125',
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
    },
  },
  plugins: [],
};
