module.exports = {
  content: ["./*.html"],
  screen: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  theme: {
    extend: {
      colors: {
        angylightBlue: "hsl(203, 100%, 50%)",
        angyDarkBlue: "hsl(243, 100%, 50%)",
        angylightPurple: "hsl(285, 100%, 50%)",
        angyDarkPurple: "hsl(299, 100%, 50%)",
        angylightGray: "hsl(243, 2%, 50%)",
        angyDarkGray: "hsl(243, 7%, 50%)",
      },
    },
  },
  plugins: [],
};
