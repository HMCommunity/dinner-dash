/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
      xxl: '2000px',
    },
    extend: {
      colors: {
        lightYellowColor: '#E7E393',
        deepOrangeColor: '#DD7230',
        whiteColor: '#fff',
      },
    },
  },
  plugins: [],
};
