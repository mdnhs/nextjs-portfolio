import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#161513",
        secondary: "#1C1C22",
        light: "#F0F2F5",
        white: "#ffffff",
      },
    },
    fontFamily: {
      space: ["Space Mono"],
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
