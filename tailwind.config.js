/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
  plugins: [require('@tailwindcss/typography')],
}
