/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#009CEB',
        buttons: '#00476B',
        'buttons-disabled': '#002335',
        aside: '#20526B',
        list: '#0085C7',
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
