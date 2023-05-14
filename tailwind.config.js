/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    colors: {
      title: "#064f32",
      sidebar: "#06603a",
      sidebarHover: "#2b7858",
    },
   
  },
  plugins: [require("flowbite/plugin")],
};
