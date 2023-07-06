/** @type {import('tailwindcss').Config} */
const colors = {
  primary: '#1fb6ff',
  secondary: '#7e5bef',
  pink: '#ff49db',
  orange: '#ff7849',
  green: '#13ce66',
  yellow: '#ffc82c',
  grayDark: '#273444',
  gray: '#8492a6',
  grayLight: '#d3dce6',
};

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,html}'],
  theme: {
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }
      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }
      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors,
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
