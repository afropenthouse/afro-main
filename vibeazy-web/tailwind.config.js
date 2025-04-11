import TailwindAnimate from "tailwindcss-animate";

const config = {
    // darkMode?: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "app_primary": "#650928",
                "app_primary_f0": "#f08080",
                "app_subtitle": "#d9d3f15c",
                "app_tertiary": "#171717",
                "app_tertiary_2f": "#2f3133",
                "app_tertiary_5d": "#5D626D",
                "app_gray_f8f": "#f8f8f8",
                "app_gray_cec": "#cec7c7",
                "app_gray_e9e": "#e9ecef",
                "app_gray_a3a": "#a3a3a3",
                "app_red": "#ff3232",
            },
        },
    },
    plugins: [
        TailwindAnimate
    ],
};
export default config;
