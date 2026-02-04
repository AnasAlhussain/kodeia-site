/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        kodeia: {
          navy: "#0B2A4A",
          blue: "#1D6FB8",
          sky: "#49B5FF",
          ink: "#0A1522",
          mist: "#F2F7FB",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
