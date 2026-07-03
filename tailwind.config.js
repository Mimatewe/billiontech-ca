/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: { ink: '#07090f', panel: '#0b111d', line: '#1c2a40', accent: '#6178ff' },
      boxShadow: { glow: '0 0 80px rgba(91,124,255,.14)' }
    }
  },
  plugins: []
}
