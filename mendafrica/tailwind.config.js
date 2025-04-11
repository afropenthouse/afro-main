/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1D4ED8", 
          light: "#3B82F6", 
          dark: "#1E40AF", 
        },
        secondary: {
          DEFAULT: "#D97706", 
          light: "#FBBF24",  
          dark: "#B45309",   
        },
      },
      fontFamily: {
        font_nunito: ["'Nunito'", "sans-serif"],
        font_poppins: ["'Poppins'", "sans-serif"],
        mukta: ["'Mukta Vaani'", "sans-serif"],
      },
      
    },
  },
  plugins: [],
};
