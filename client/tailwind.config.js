/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0E",
        paper: "#F3EFE7",
        gold: "#E3A33D",
        maroon: "#7A1F2B",
        surface: "#16161B",
        mist: "#8B8678",
      },
      fontFamily: {
        display: ['"Bebas Neue"', "sans-serif"],
        body: ['"Plus Jakarta Sans"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};
