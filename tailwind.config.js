/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        11: "3rem",
      },
      colors: {
        "primary-gray": "#0c1014",
        "secondary-gray": "#7d8896",
        "primary-blue":"#1fb6ff"
      },
      screens: {
        xs: "576px",
        mlg: "992px",
      },
      width: {
        81: "340px",
        82: "334px",
      },
    },
  },
  plugins: [],
}
