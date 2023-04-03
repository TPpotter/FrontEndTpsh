/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#009CEB',
        secondary: '#053B56',
        dark: '#3F3F3F',
        light: '#FCFCFC',
        'default-blue': '#1989FA',
        'default-green': '#06C270',
      },
      width: {
        90: '22.5rem',
      },
      height: {
        45: '11.25rem',
      },
      minHeight: {
        5: '1.25rem',
        6: '1.5rem',
        9: '2.25rem',
      },
      minWidth: {
        5: '1.25rem',
        6: '1.5rem',
        9: '2.25rem',
      },
    },
  },
  plugins: [],
};
