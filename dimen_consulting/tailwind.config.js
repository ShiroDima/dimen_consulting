/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    sm: '640px',
    // => @media (min-width: 640px)

    md: '768px',
    // => min-width

    lg: '1024 px',

    xl: '1280px'
  },
  plugins: [],
}
