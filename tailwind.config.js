/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["index.html"],
    theme: {
        extend: {
            screens: {
                xs: "0px",
            },
            colors: {
                primary: {
                    DEFAULT: "#1B8BF9",
                },
            },
            fontFamily: {
                sans: "Montserrat, sans-serif",
                serif: "'Playfair Display', serif",
            },
            gridTemplateColumns: {
                24: "repeat(24, minmax(0, 1fr))",
            },
            gridColumn: {
                "span-13": "span 13 / span 13",
                "span-14": "span 14 / span 14",
                "span-15": "span 15 / span 15",
                "span-16": "span 16 / span 16",
                "span-17": "span 17 / span 17",
                "span-18": "span 18 / span 18",
                "span-19": "span 19 / span 19",
                "span-20": "span 20 / span 20",
                "span-21": "span 21 / span 21",
                "span-22": "span 22 / span 22",
                "span-23": "span 23 / span 23",
                "span-24": "span 24 / span 24",
            },
            gridColumnStart: {
                13: "13",
                14: "14",
                15: "15",
                16: "16",
                17: "17",
                18: "18",
                19: "19",
                20: "20",
                21: "21",
                22: "22",
                23: "23",
                24: "24",
            },
        },
    },
    plugins: [],
};
