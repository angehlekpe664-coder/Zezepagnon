/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0F62FE',
          'blue-dark': '#004ccd',
          'blue-light': '#dbe1ff',
          green: '#1FA971',
          'green-dark': '#006c45',
          'green-light': '#7ffaba',
          bg: '#f7f9fc',
          surface: '#ffffff',
          text: '#191c1e',
          muted: '#737687',
        },
        surface: {
          DEFAULT: '#f7f9fc',
          dim: '#d8dadd',
          bright: '#f7f9fc',
          lowest: '#ffffff',
          low: '#f2f4f7',
          container: '#eceef1',
          high: '#e6e8eb',
          highest: '#e0e3e6',
        },
        'on-surface': {
          DEFAULT: '#191c1e',
          variant: '#424656',
        },
        primary: {
          DEFAULT: '#0F62FE',
          dark: '#004ccd',
          container: '#0f62fe',
          'on-container': '#f3f3ff',
        },
        secondary: {
          DEFAULT: '#006c45',
          emerald: '#1FA971',
          container: '#7ffaba',
          'on-container': '#00734a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        'full': '9999px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(15, 98, 254, 0.08)',
        'glass-hover': '0 14px 40px 0 rgba(15, 98, 254, 0.15)',
        'glow': '0 0 25px rgba(15, 98, 254, 0.25)',
        'glow-green': '0 0 25px rgba(31, 169, 113, 0.25)',
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.07)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(247, 249, 252, 0.9) 0%, rgba(224, 238, 255, 0.5) 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(247, 249, 252, 0.8) 100%)',
        'blue-gradient': 'linear-gradient(135deg, #0F62FE 0%, #004CCD 100%)',
        'green-gradient': 'linear-gradient(135deg, #1FA971 0%, #006C45 100%)',
      }
    },
  },
  plugins: [],
}
