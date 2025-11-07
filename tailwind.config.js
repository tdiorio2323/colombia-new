/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        'brand-dark': '#111111',
        'brand-dark-2': '#1a1a1a',
        'brand-gold': '#d4af37',
        'brand-rose': '#f4a9a8',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #f4a9a8, #d4af37)',
        'brand-gradient-hover': 'linear-gradient(to right, #d4af37, #f4a9a8)',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(244, 169, 168, 0.2), 0 0 20px rgba(212, 175, 55, 0.1)',
      }
    }
  },
  plugins: [],
}
