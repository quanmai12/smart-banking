/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2b6173",
        secondary: "#E8F569",
        neutral: "#E7EAEB"
      },
      boxShadow: {
        custom: "0px 2px 4px rgba(0, 0, 0, 0.05)", // Tuỳ chỉnh shadow
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)', opacity: 0.1 },
          '25%': { opacity: 0.3 },
          '50%': { opacity: 0.8 },
          '75%': { opacity: 0.3 },
          '100%': { transform: 'translateX(100%)', opacity: 0.1 },
        },
      },
      animation: {
        shimmer: 'shimmer 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

