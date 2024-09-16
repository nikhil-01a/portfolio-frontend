/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      screens: {
        xs: '500px', // Use this
        sm: '640px',
        md: '768px',
        lg: '1024px', //Use this
        xl: '1280px',
        '1xl': '1440px',
        '2xl': '1630px', // Default
      },
    },
  },
  plugins: [],
}
