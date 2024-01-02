/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: "#b7a26d",
        "primary-dark": "#aa9766",
        "primary-darker": "#9a895c",
        "primary-darkest": "#86764e",
        "primary-light": "#c1ac77",
        "primary-lighter": "#d3bc82",
        "primary-lightest": "#dec994",
      },
    },
  },
  plugins: [],
  daisyui: {
    styled: false,
    base: false,
    utils: false,
    themes: [
      {
        mytheme: {
          primary: "#C0A971",
          secondary: "#D6D1C6",
          accent: "#232323",
          neutral: "#E6E5D8",
          "base-100": "#F2F2EB",
          info: "#C2E1E4",
          success: "#b5deaf",
          warning: "#FBCA19",
          error: "#FF8989",
        },
      },
    ],
  },
  corePlugins: {
    preflight: false,
  },
};
