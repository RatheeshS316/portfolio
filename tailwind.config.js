/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#f1f1ef',
          card: '#ffffff',
          alt: '#eeeeec',
        },
        ink: {
          DEFAULT: '#111111',
          soft: '#6f6f6d',
          faint: '#a0a0a0e1',
        },
        line: '#dfdfdc',
        pill: '#ececea',
        dark: '#111111',
      },
      fontFamily: {
        display: ['Poppins', 'Segoe UI', 'sans-serif'],
        body: ['Inter', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        'lg': '28px',
        'md': '20px',
        'sm': '14px',
        'pill': '999px',
      },
      spacing: {
        'gutter': 'clamp(20px, 5vw, 80px)',
      },
      maxWidth: {
        'container': '1440px',
      }
    },
  },
  plugins: [],
}
