module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#063025'
      }
    },
    screens: {
      '2xl': { max: '1535px' },


      lg: { max: '1023' },

      sm: { max: '750px' },

    }
  },
  plugins: [],
}