/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // dark surfaces
        'ink': '#0D1117',
        'ink-2': '#161B27',
        'surface': '#1E2535',
        'line': '#2A3347',
        'ink-plain': '#1A1A1A',
        'ink-violet': '#1A1A2E',

        // lavender / primary
        'primary': '#ADB2D4',
        'primary-350': '#9098C0',
        'primary-400': '#8B92C4',
        'primary-500': '#7A82AA',
        'primary-600': '#6B72A8',
        'primary-700': '#575E93',   // darkened for AA contrast on 40% lavender washes
        'primary-200': '#C0C4E8',
        'primary-100': '#D4D8EE',
        'primary-50': '#E2E5F0',
        'primary-25': '#EEF0F8',

        // ice blue / secondary
        'secondary': '#C7D9DD',
        'secondary-700': '#4A7A8A',

        // sage / tertiary
        'tertiary': '#D5E5D5',
        'tertiary-400': '#A0C8A0',
        'tertiary-600': '#4A7A5A',
        'tertiary-700': '#3A7A4A',

        // cream + neutrals
        'cream': '#EEF1DA',
        'mute': '#9CA3AF',
        'mute-600': '#64748B',

        // status
        'ok': '#4CAF50',
        'info': '#1E88E5',
        'warn': '#FBC02D',
        'danger': '#E53935',
        'danger-700': '#C62828',

        // brand - do not restyle
        'linkedin': '#0A66C2',
        'amazon': '#FF9900',
        'nokia': '#005AFF',

      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
