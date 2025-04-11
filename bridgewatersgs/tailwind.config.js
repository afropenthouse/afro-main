/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      iphone6: '378px',
      vsm: '415px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      navwrap: '1115px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#FE0002',
      },
    },
  },
  plugins: [],
};
