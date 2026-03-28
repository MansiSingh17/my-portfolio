/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your new palette mapped to semantic names
        primary: '#ADB2D4',    // Lavender/Periwinkle
        secondary: '#C7D9DD',  // Ice Blue
        tertiary: '#D5E5D5',   // Sage Green
        cream: '#EEF1DA',      // Light Yellow/Beige (Main Background)
        
        // Keeping standard slate/black for readable text
        slate: {
          900: '#0f172a',
          700: '#334155',
        }
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}