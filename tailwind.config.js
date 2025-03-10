/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {

        primary: "#2B6173",

        secondary: "#E8F569",
        neutral: "#E7EAEB"
      },
      boxShadow: {
        custom: "0px 2px 4px rgba(0, 0, 0, 0.05)", // Tuỳ chỉnh shadow
      }
    },
  },
  plugins: [],
}

