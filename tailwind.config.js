/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontSize: {
      xsm: "0.875rem",
      sm: "1rem",
      smb: "1.125em",
      base: "1.25rem",
      lg: "1.5rem",
      xl: "1.75rem",
      "2xl": "1.875rem",
      "3xl": "2.25rem",
      "4xl": "3.75rem",
      "5xl": "3.75rem",
    },
    extend: {
      boxShadow: {
        custom:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", // Custom shadow
        spread: "0 4px 8px 3px rgba(0, 0, 0, 0.1)", // Custom shadow with spread
      },
      keyframes: {
        glow: {
          "0%, 100%": { backgroundColor: "rgba(209, 213, 219, 1)" }, // gray-300
          "50%": { backgroundColor: "rgba(55, 65, 81, 1)" }, // gray-700
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        slideInFromTop: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideOutToTop: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(-100%)", opacity: 0 },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        "fade-out": "fadeOut 1s ease-in",
        "slide-in-from-top": "slideInFromTop 0.5s ease-out",
        "slide-out-to-top": "slideOutToTop 0.5s ease-in",
        glow: "glow 1.5s infinite",
        shimmer: "shimmer 10s infinite linear",
      },
      backgroundImage: {
        shimmer:
          "linear-gradient(90deg, rgba(229, 231, 235, 0) 0%, rgba(229, 231, 235, 0.8) 50%, rgba(229, 231, 235, 0) 100%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        newContentColor: "#8e9299",
        newContentColorHover: "#6c6f75",
        btnDangerBG: "#ef4444",
        btnDangerBGHover: "#A92D2D",
        altButtonColor: "#3164bf",
        mirage: "#101827",
        ebonyClay: "#1f2937",
        ebonyClayHover: "#0A0D12",
        smoke: "#DFDFDF",
        newGray: "#d3d3d3",
        brightViolet: "#AD00FE",
        neonBlue: "#00E0EE",
        blueLotus: "#665CF7",
        purpleShadeBush: "#7F56D9",
        footerColor: "#0c111d",
        riverBed: "#475467",
        blueberry: "#53389e",
        borderBlack: "#d0d5dd",
        buttonColor: "#3b76e1",
        buttonColorHover: "#05358F",
        ghostWhite: "#f5f5f6",
        blueLight: "#e5edff",
        honeyWax: "#fdb022",
        alabaster: "#f9fafb",
        dodgerBlue: "#507ef5",
        grassGreen: "#34a203",
        grassGreenHover: "#1C5902",
        mint: "#4cbc9a",
        water: "#eef3ff",
        dawnPink: "#eaecf0",
        mistBlue: "#667085",
        lightRed: "#fc5050",
        catskillWhite: "#f2f4f6",
        geyser: "#d4dcea",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  corePlugins: {},
};
