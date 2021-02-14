module.exports = {
  purge: {
    content: ['./**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'my-green': '#00BFA6',
        'my-blue': '#6C63FF'
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe']
    },
  },
  plugins: [],
}
