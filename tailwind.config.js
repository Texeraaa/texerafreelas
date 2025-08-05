/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'oklch(1 0 0)',
        foreground: 'oklch(0.145 0 0)',
        primary: {
          DEFAULT: 'oklch(0.693 0.204 282.5)',
          foreground: 'oklch(1 0 0)',
        },
        muted: {
          DEFAULT: 'oklch(0.97 0 0)',
          foreground: 'oklch(0.556 0 0)',
        },
        border: 'oklch(0.922 0 0)',
        ring: 'oklch(0.693 0.204 282.5)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, oklch(0.693 0.204 282.5), oklch(0.685 0.2 300))',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} 