/** @type {import('tailwindcss').Config} */
export const content = ["./**/*.{html,js}"];
export const theme = {
  extend: {
    colors: {
      primary: "rgba(0, 19, 66, 1)", //dark blue
      secondary: "rgba(138, 204, 80, 1)", //main green
      "secondary-dark": "rgba(17, 99, 85, 1)", //dark green
      accent: "rgba(244, 186, 0, 1)", //Yellow
    },
    backgroundImage: {
      "second-top":
        "linear-gradient(180deg,rgba(138, 204, 80, 0.5), rgba(0, 0, 0, 0))",
      "second-top-left":
        "linear-gradient(135deg,rgba(138, 204, 80, 0.5), rgba(255, 0, 0, 0))",
      "second-bottom-right":
        "linear-gradient(-90deg,rgba(138, 204, 80, 0.5), rgba(255, 0, 0, 0))",
      "second-left":
        "linear-gradient(45deg,rgba(138, 204, 80, 0.5), rgba(0, 0, 0, 0))",
      "second-right":
        "linear-gradient(-45deg,rgba(138, 204, 80, 0.5), rgba(0, 0, 0, 0))",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    spacing: {
      mxScreen: "calc((100% - 1480px) / 2)",
    },
  },
};
export const plugins = [];
