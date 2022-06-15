/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customBg: {
          100: '#F0F2F5',
        },
        secondaryButton: {
          100: '#E4E6EB',
        },
      },
    },
  },
  plugins: [],
}
