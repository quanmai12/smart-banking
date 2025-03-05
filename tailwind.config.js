/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B7613",
        secondary: "#E8F569",
        neutral: "E7EAEB"
      },
    },
  },
  plugins: [],
}

