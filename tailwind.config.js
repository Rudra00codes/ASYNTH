/** Minimal Tailwind config after purge for a fresh start */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"','system-ui','Arial','sans-serif']
      }
    }
  },
  plugins: []
};
