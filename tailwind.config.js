/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Eucalypt brand palette — Hola International College
        // primary: forest green; accent: warm tan; paper: warm off-white
        forest: {
          50: "#F1F6F2",
          100: "#DCE8DF",
          200: "#B5CFBC",
          300: "#85B093",
          400: "#578E6C",
          500: "#357052",
          600: "#1F5A3D", // primary brand color
          700: "#194B33",
          800: "#143C29",
          900: "#0F1A14",
        },
        tan: {
          100: "#F5EBDB",
          200: "#E8C896",
          300: "#D4A574",
          400: "#B98855",
          500: "#9C6E40",
        },
        paper: "#F4F1EA",
        ink: "#0F1A14",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
