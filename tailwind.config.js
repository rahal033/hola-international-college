/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Deep Teal brand palette - deep teal + coral spark
        // primary: teal #0E5B5B; accent: coral #F08A6E
        forest: {
          50: "#F1F6F4",
          100: "#D6EAEA",
          200: "#A6CFCF",
          300: "#6FB0B0",
          400: "#3F8E8E",
          500: "#1F7373",
          600: "#0E5B5B",
          700: "#0A4A4A",
          800: "#073838",
          900: "#0A2424",
        },
        tan: {
          100: "#FCDFD3",
          200: "#F8B7A3",
          300: "#F08A6E",
          400: "#D26A4F",
          500: "#A4503B",
        },
        paper: "#F1F6F4",
        ink: "#0A2424",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["Fraunces", "ui-serif", "Georgia", "Cambria", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
