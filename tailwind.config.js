module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#f8f6f3",
          200: "#fff1b0",
          400: "#a8824b",
          500: "#bf9d5a",
          600: "#bb954a",
          700: "#9e7e3f",
        },
        darkBlue: {
          800: "#1f2839",
          900: "#171e2b",
        },
        darkGreen: {
          700: "#376478",
          900: "#2e5263",
        },
      },
      width: {
        0.25: "1px",
        lg: "1280px",
        xl: "1440px",
        "1/10": "10%",
      },
      padding: {
        1.5: "6px",
        3.5: "14px",
      },
    },
    screens: {
      md: "768px",
      lg: "1280px",
      xl: "1440px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
