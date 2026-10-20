/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        page: 'rgb(var(--c-page) / <alpha-value>)',
        card: 'rgb(var(--c-card) / <alpha-value>)',
        inner: 'rgb(var(--c-inner) / <alpha-value>)',
        field: 'rgb(var(--c-field) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        mute: 'rgb(var(--c-mute) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        onaccent: 'rgb(var(--c-onaccent) / <alpha-value>)',
      },
      fontFamily: {
        head: ['Orbitron', 'sans-serif'],
        body: ['Saira', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
