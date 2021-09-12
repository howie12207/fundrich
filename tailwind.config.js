module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brown: {
          500: "#bf9d5a",
          600: "#bb954a",
          700: "#9e7e3f",
        },
        darkBlue: {
          800: "#1f2839",
          900: "#171e2b",
        },
      },
      width: {
        xl: "1440px",
      },
      padding: {
        3.5: "14px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
