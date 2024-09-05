/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      "inter":["Inter", "sans-serif"],
      "barlow":["Barlow", "sans-serif"]
    },
    extend: {
      colors: {
        primary: "#1E99F5",
      },
    },
  },
  plugins: [require("daisyui")],
};
