/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-400': 'var(--primary-400)',
        'primary-300': 'var(--primary-300)',
        'primary-200': 'var(--primary-200)',
        'primary-100': 'var(--primary-100)',
        'primary-50': 'var(--primary-50)',
        'secondary-300': 'var(--secondary-300)',
        'secondary-200': 'var(--secondary-200)',
        'secondary-100': 'var(--secondary-100)',
        'accent': '#efece6'
      },
      backgroundImage: {
        'gradient-bg': 'rgb(1, 115, 115)',
        'gradient': 'linear-gradient(25deg, rgba(1, 115, 115, 1) 0%, rgba(170, 217, 209, 1) 100%)',
      },
      keyframes: {
        scroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 40s linear infinite",
      },
    },
  },
  plugins: [],
}

