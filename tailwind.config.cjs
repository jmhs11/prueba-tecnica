/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        products: 'repeat(auto-fill, minmax(300px, 1fr))'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
