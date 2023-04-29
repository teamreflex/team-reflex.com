/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        hue: 'hue 30s infinite linear',
      },
      keyframes: {
        hue: {
          from: {
            filter: 'hue-rotate(0deg)',
          },
          to: {
            filter: 'hue-rotate(-360deg)',
          }
        },
      }
    },
  },
  plugins: [],
}
