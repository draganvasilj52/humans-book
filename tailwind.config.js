/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        456: '28.5rem',
        315: '19.688rem',
        272: '17rem',
        304: '19rem',
      },
      width: { 980: '61.25rem', 400: '25rem', 500: '31.25rem' },
      colors: {
        customBg: {
          100: '#F0F2F5',
        },
        secondaryButton: {
          100: '#E4E6EB',
        },
        menuBg: {
          100: '#F7F8FA',
        },
        inputColor: {
          100: '#65676B',
        },
      },
    },
    screens: {
      signInBreakpoint900: '900px',
      signInBreakpoint1076: '1076px',
    },
  },
  plugins: [require('flowbite/plugin')],
}
