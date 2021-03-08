module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      black:'#000',
      gray: {
        'DEFAULT': '#1D1D1D',
        '600': '#181818',
        '400': '#282828',
        '300': 'rgb(107, 114, 128)'
      },
      primary: {
        '500': '#801336',
        '400': '#c72c41',
        '300': '#ee4540',
      },
      white: '#fff'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
