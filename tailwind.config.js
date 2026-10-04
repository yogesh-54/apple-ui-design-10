/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          dark: '#161617',
          gray: '#f5f5f7',
          card: '#fbfbfd',
          border: '#d2d2d7',
          text: '#1d1d1f',
          subtext: '#6e6e73',
          blue: '#0071e3',
          'blue-hover': '#0077ed',
          music: '#fa243c',
          'music-hover': '#e01e36',
          'music-pink': '#fc3c44',
          footer: '#f5f5f7',
          'footer-text': '#6e6e73',
          'footer-link': '#424245',
        }
      },
      fontFamily: {
        sans: [
          'SF Pro Text',
          'SF Pro Icons',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'sans-serif',
        ],
        display: [
          'SF Pro Display',
          'SF Pro Icons',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.015em',
      }
    },
  },
  plugins: [],
}
