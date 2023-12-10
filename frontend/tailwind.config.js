/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        active: "#f71747",
        title: "#030712",
        subtitle: "#6b7280",
        bgHeaderPri: "#0f172a",
        bgHeaderSec: "#1e293b",
        bgColor: "#4f46e5",
        bgHover: "#4338ca",
      },
      backgroundImage: {
        hero1: "url('/src/assets/hero/hero1.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
