/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  corePlugins: {
    // Disable preflight if conflicting with legacy styles
    preflight: false 
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
