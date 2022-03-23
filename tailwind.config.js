module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        default: "1366px",
      },
      fontFamily: {
        inter: "Inter",
      },
      fontSize: {
        xs: "12px",
        sm: "18px",
        md: "20px",
        lg: "24px",
        xl: "42px",
        "2xl": "68px",
      },
      colors: {
        description: "#616161",
        button: "#2EA8AF",
        secondary: "#8768C0",
        card: "#D6DAED",
        "button-gradient": "#D8D6E3",
        "button-gradient1": "#A987C3",
        "card-gradient": "rgba(214, 218, 237, 0.5)",
        "card-gradient1": "rgba(214, 218, 237, 0.185)",
      },
      backgroundImage: {
        header: "url('/images/header-background.png')",
        "mobile-header": "url('/images/mobile/header-background.png')",
        banner: "url(/images/banner.png)",
        "mobile-banner": "url(/images/mobile/banner.png)",
        portfolio: "url(/images/background_portfolio.png)",
        lid: "url(/images/Lid.png)",
      },
      screens: {
        base: "0px",

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
