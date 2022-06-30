module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: "#17171F",
        primer: "#3AAFA9",
        primer_2: "#2B7A78",
        primer_3: "#3E4785",
        primer_3_hover: "#32396a",
        secondary: "#F17A7E",
        tersier: "#3c3f58",
        nav: "#0072AE",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("tailwindcss-cursor-extended")(["responsive"])],
};
