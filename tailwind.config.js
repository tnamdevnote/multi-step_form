/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-sidebar-mobile": "url('/src/assets/images/bg-sidebar-mobile.svg')",
        "bg-sidebar-desktop":
          "url('/src/assets/images/bg-sidebar-desktop.svg')",
      },
      colors: {
        // Primary
        "marine-blue": "hsl(213, 96%, 18%)",
        "purplish-blue": "hsl(243, 100%, 62%)",
        "pastel-blue": "hsl(228, 100%, 84%)",
        "light-blue": "hsl(206, 94%, 87%)",
        "lighter-blue": "hsl(218, 100%, 97%)",
        "strawberry-red": "hsl(354, 84%, 57%)",

        // Neutral
        "cool-gray": "hsl(231, 11%, 63%)",
        "light-gray": "hsl(229, 24%, 87%)",
        "magnolia:": "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
        "white:": "hsl(0, 0%, 100%)",
      },
      borderRadius: {
        sm: "4px",
      },
      fontFamily: {
        ubuntuBold: ["UbuntuBold", "sans-serif"],
        ubuntuMedium: ["UbuntuMedium", "sans-serif"],
        ubuntuRegular: ["UbuntuRegular", "sans-serif"],
      },
      fontSize: {
        sm: ["12px", "auto"],
        base: ["14px", "auto"],
        lg: ["16px", "25px"],
        heading: ["32px", "auto"],
      },
    },
  },
  plugins: [],
};
