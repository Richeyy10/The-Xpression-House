import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bright-green': '#1FD000',
        'bright-green-hover': '#15A500',
        'forest-green': '#1a4d2e',
        teal: '#1b5e5a',
        'deep-charcoal': '#1a1a1a',
        cream: '#f5f3f0',
        'accent-red': '#c41e3a',
        'light-gray': '#e8e8e8',
        'deep-green': '#0a1f14',
        'dark-bg': '#0c0c0c',
      },
      fontFamily: {
        headline: ['var(--font-headline)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        quote: ['var(--font-quote)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
