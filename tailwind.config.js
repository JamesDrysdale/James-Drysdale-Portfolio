/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        avatar: "url('/images/jamesdrysdale.jpg')",
      },
      colors: {
        black: '#000000',
        black1: '#171725',
        black2: '#21212b',
        black3: '#2c2c2c',
        natural: '#CCCCCC',
        natural1: '#92929D',
        natural2: '#696974',
        natural3: '#44444f',
        primary: '#32CBFF',
        secondary1: '#add8e6',
        secondary2: '#d7d0ff',
        secondary3: '#fddd8c',
        secondary4: '#ffbbd7',
        white: '#ffffff',
        white2: '#f4f4f4',
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
