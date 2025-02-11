/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "primary-500": "#3563E9",
      },
      width: {
        "icon-only-sm": "32px",
        "icon-only-md": "40px",
        "icon-only-lg": "50px",
        "icon-side-sm": "83px",
        "icon-side-md": "83px",
        "icon-side-lg": "109px",
        "button-sm": "63px",
        "button-md": "63px",
        "button-lg": "89px",
      },
      height: {
        "icon-only-sm": "32px",
        "icon-only-md": "40px",
        "icon-only-lg": "50px",
        "icon-side-sm": "29px",
        "icon-side-md": "37px",
        "icon-side-lg": "52px",
        "button-sm": "29px",
        "button-md": "37px",
        "button-lg": "50px",
      },
    },
  },
  plugins: [],
};
