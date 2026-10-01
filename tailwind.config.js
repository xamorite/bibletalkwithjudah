// Builds assets/css/tailwind.css with only the classes the pages use.
// Run `npm run build:css` after adding or changing Tailwind classes in any .html file.
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./*.html"],
  theme: {
    // Tailwind 2's default palette, which the site was designed with
    // (Tailwind 3 renamed these, e.g. its "purple" is a different hue), plus lime
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      lime: colors.lime,
    },
    extend: {
      fontFamily: {
        // Tailwind 2's default stack, so body text renders the same as before
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        unbounded: ["Unbounded", "sans-serif"],
      },
    },
  },
  plugins: [],
};
