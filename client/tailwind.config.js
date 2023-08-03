/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1b5491",

          secondary: "#d34159",

          accent: "#66158c",

          neutral: "#202027",

          "base-100": "#e0e7f0",

          info: "#448fda",

          success: "#45decf",

          warning: "#f4ce5d",

          error: "#e63f28",
        },
      },
    ],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
