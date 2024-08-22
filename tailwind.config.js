/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Gray: "hsl(0, 0%, 95%)",
        GrayishViolet: "hsl(257, 7%, 63%)",
        VeryDarkBlue: "hsl(255, 11%, 22%)",
        VeryDarkViolet: "hsl(260, 8%, 14%)",
      },
      screens: {
        md: "768px" /* Tablet */,
        lg: "1024px" /* Laptop */,
        xl: "1232px" /* Large Screens */,
        "2xl": "1390px" /*Very Large Screens */,
      },
    },
  },
  plugins: [],
};
