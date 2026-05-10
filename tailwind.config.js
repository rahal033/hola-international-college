/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Terracotta brand palette - earthy brick red + warm peach
        // primary: brick #B23A2C; accent: peach #E8A87C
        forest: {
          50: "#FBF6EE",
          100: "#F4DAD5",
          200: "#EAB1A8",
          300: "#DD837A",
          400: "#CB5F50",
          500: "#BF4737",
          600: "#B23A2C",
          700: "#951F18",
          800: "#7A1F18",
          900: "#1F1B17",
        },
        tan: {
          100: "#FDEBD9",
          200: "#F4C7A6",
          300: "#E8A87C",
          400: "#C7825A",
          500: "#A36843",
        },
        paper: "#FBF6EE",
        ink: "#1F1B17",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["Fraunces", "ui-serif", "Georgia", "Cambria", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
