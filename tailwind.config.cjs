/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                projectOrange: "#F55A5A",
                text: "#2B283A",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            screens: {
                xs: "500px",
            },
        },
    },
    plugins: [],
};
