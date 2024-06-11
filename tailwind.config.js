/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.{md,mdx}", "./tina/cofig.ts"],
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
  plugins: [require('daisyui'),],
  daisyui: {
    prefix: "daisy-"
  },
  corePlugins: {
    preflight: false,
  },
};
