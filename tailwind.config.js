/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ["Montserrat", 'sans-serif'],
        'title': ["Montserrat", 'sans-serif'],
        'body': ["Montserrat", 'sans-serif'],

      },
    },
  },
  plugins: [],
}

