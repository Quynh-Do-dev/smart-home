module.exports = {
    content: [
      "./src/config/**/*.{js,ts,jsx,tsx}",
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/modules/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      screens: {
        xs: "0",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1440px",
        xxxl: "1600px",
      },
      extend: {
        fontFamily: {
          jakarta: ["Plus Jakarta Sans", "sans-serif"],
        },
        boxShadow: {
          "3xl": "4px 4px 10px 0px #0000001A;",
        },
        colors: {
          "header-color": "#0C1523",
          "white": "#fff",
          "black": "#000000",
          "gray": {
            100: "#F3F3F3",
            200: "#e5e7eb",
            300: "#d1d5db",
            400: "#9ca3af",
            500: "#6a6a6a",
            600: "#F5F7FA",
            700: "#748194",
            800: "#667085",
            900: "#32363e",
            1000: "#6A6A6A",
          },
          "blue": {
            100: "#F2FAFF",
            200: "#DCF2FF",
            300: "#123A6C",
            500: "#459BFF",
            600: "#0070FF",
            700: "#2C7BE5",
          },
          "red": {
            100: "#FFEEEE",
            300: "#EC5962",
            400: "#FF5353",
            500: "#e63757",
          },
          "orange": {
            100: "#ffeecd",
            200: "#FFE4AA",
            300: "#FF6C44",
          },
          "green": {
            100: "#00D27A",
            200: "#00B432",
          },
          "pink": {
            100: "#EF4B88",
            200: "#FFCCDF",
            300: "#F54989",
            400: "#ff577a",
            500: "#fe888e",
          },
          "yellow": {
            300: "#FED15F",
            400: "#ffaa2e",
          },
          "rose": {
            500: "#ef4b88",
          },
          "onahau": {
            100: "#CDF0FF",
          },
          "purple": {
            50: "#F7F7FB",
          },
          "red-opacity": {
            100: "#C50C001A",
          },
          "green-opacity": {
            100: "#09C73E1A",
          },
          "sin": {
            500: "#FFB400",
          },
          "athens": {
            100: "#e6e8eb",
          },
          "chicago": {
            700: "#555555",
          },
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  