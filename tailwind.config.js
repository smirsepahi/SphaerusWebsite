/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0A',
        card: '#1A1A1A',
        accent: '#0066FF',
        'border-subtle': 'rgba(255,255,255,0.1)',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        site: '1400px',
      },
    },
  },
  plugins: [],
}
