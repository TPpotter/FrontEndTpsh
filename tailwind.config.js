/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#009CEB',
        buttons: '#00476B',
        aside: '#20526B',
      },
      minHeight: {
        6: '1.5rem',
      },
      minWidth: {
        6: '1.5rem',
      },
    },
  },
  plugins: [],
};
