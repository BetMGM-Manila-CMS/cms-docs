const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.{md,mdx}",
    "./tina/cofig.ts",
    flowbite.content(),
  ],
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
  plugins: [require("daisyui"), flowbite.plugin()],
  daisyui: {
    prefix: "daisy-",
    base: false,
  },
  corePlugins: {
    preflight: false,
  },
};
