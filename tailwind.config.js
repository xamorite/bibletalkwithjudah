// Builds assets/css/tailwind.css with only the classes the pages use.
// Run `npm run build:css` after adding or changing Tailwind classes in any .html file.
// Stays on Tailwind 2.2.19 in classic (non-JIT) mode so the output matches the
// CDN build the pages were designed against.
module.exports = {
  purge: {
    enabled: true,
    content: ["./*.html"],
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
