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
        VSBrown: "#C5947C",
        VSYellow: "#DCDCAF",
        VSPink: "#B886B9",
        VSGreen: "#6EC0AC",
        VSLightBlue: "#AADAFA",
        VSLightGreen: "#BACDAB",
        VSDarkGreen: "#72955C",
        VSGrey: "#808080",
      },
      fontFamily: {
        cascadecode: ["var(--font-poppins)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
