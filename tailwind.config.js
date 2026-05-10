/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Ochre brand palette - black + Australian ochre yellow
        // primary: ink #1A1A1A; accent: ochre #E8A317
        forest: {
          50: "#FAF7F0",
          100: "#E5E5E5",
          200: "#C7C7C7",
          300: "#A0A0A0",
          400: "#6B6B6B",
          500: "#404040",
          600: "#1A1A1A",
          700: "#141414",
          800: "#0F0F0F",
          900: "#050505",
        },
        tan: {
          100: "#FFF1CF",
          200: "#FAD478",
          300: "#E8A317",
          400: "#B8800F",
          500: "#8A6008",
        },
        paper: "#FAF7F0",
        ink: "#1A1A1A",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["Fraunces", "ui-serif", "Georgia", "Cambria", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
