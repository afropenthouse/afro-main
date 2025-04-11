/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./views/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "280px",
        sm: "375px",
        md: "768px",
        lg: "976px",
        mlg: "1024px",
        xlg: "1200px",
        xl: "1441px",
        ds: "1920px",
        dm: "2480px",
        dl: "2700px",
      },
      colors: {
        primaryColor: "#6544C5",
        purpleBlack: "#151314",
        disabled: "#D0D5DD",
        purpleWhite: "#FAFAFA",
        purpleAsh: "#D0D5DD",
        purpleYellow: "#F5C405",
      },
      boxShadow: {
        "3xl": "0px 4px 10px rgba(0, 0, 0, 0.08)",
        sum: "0px 2px 4px 0px rgba(0, 0, 0, 0.08)",
        premium: "box-shadow: 0px -3px 6px 0px rgba(0, 0, 0, 0.15)",
        "4xl": "0px 2.73377px 5.46753px rgba(0, 0, 0, 0.16)",
      },
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
