/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#009CEB',
        button: '#00476B',
        sidebar: '#20526B',
        list: '#0085C7',
      },
      width: {
        90: '22.5rem',
      },
      height: {
        45: '11.25rem',
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
