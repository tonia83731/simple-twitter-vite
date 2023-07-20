/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        major: "#FF6600",
        primary: "#0062FF",
        secondary: "#6C757D",
        success: "#3DD598",
        warning: "#FFC542",
        error: "#FC5A5A",
        grayscale: {
          0: "#FFFFFF",
          20: "#FAFAFB",
          30: "#F1F1F5",
          40: "#E2E2EA",
          50: "#B5B5BE",
          70: "#92929D",
          80: "#696974",
          90: "#44444F",
          100: "#171725",
        },

      },
    },
  },
  plugins: [],
};
