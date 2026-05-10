/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Plum brand palette - soft modern plum + dusty rose
        // primary: plum #5B2A4A; accent: rose #F4A6A6
        forest: {
          50: "#FAF4F4",
          100: "#F0DEE5",
          200: "#DBB4C4",
          300: "#C2829F",
          400: "#A05776",
          500: "#813A56",
          600: "#5B2A4A",
          700: "#4A2240",
          800: "#391A33",
          900: "#1A0F16",
        },
        tan: {
          100: "#FBE5E5",
          200: "#F8C9C9",
          300: "#F4A6A6",
          400: "#DA8585",
          500: "#B86767",
        },
        paper: "#FAF4F4",
        ink: "#1A0F16",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["Fraunces", "ui-serif", "Georgia", "Cambria", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
