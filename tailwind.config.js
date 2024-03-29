const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js', './lib/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'Fira Code',
          'SF Mono',
          'JetBrains Mono',
          'Cascaida Code',
          'Ubuntu Mono',
          'Roboto Mono',
          ...defaultTheme.fontFamily.mono,
        ],
      },
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      colors: {
        island: {
          50: '#eff6f6',
          100: '#d0f0f5',
          200: '#9be5ea',
          300: '#27c0e2',
          400: '#2aabac',
          500: '#1e8e89',
          600: '#1a776f',
          700: '#195b57',
          800: '#133e40',
          900: '#0c262e',
        },
        cyan: {
          50: '#f5f9fa',
          100: '#dff0fb',
          200: '#bbdcf8',
          300: '#8dbbed',
          400: '#6096e0',
          500: '#4a73d3',
          600: '#3e57c1',
          700: '#31419e',
          800: '#232c73',
          900: '#141c49',
        },
        primary: {
          50: '#f7f9fb',
          100: '#e5f0fc',
          200: '#c9d9f9',
          300: '#a1b5f0',
          400: '#7e8ee5',
          500: '#666adc',
          600: '#544dcb',
          700: '#403aaa',
          800: '#2d287c',
          900: '#19194e',
        },
        purple: {
          50: '#fbfbfb',
          100: '#f5eff8',
          200: '#ead1f2',
          300: '#d5a8e2',
          400: '#ca7ccd',
          500: '#b558bc',
          600: '#9a3da2',
          700: '#752e7d',
          800: '#522054',
          900: '#2f152f',
        },
        pink: {
          50: '#fcfbfb',
          100: '#f8eff4',
          200: '#f2cfea',
          300: '#e3a5d2',
          400: '#dd77b5',
          500: '#cc539c',
          600: '#b2387c',
          700: '#8a2a5c',
          800: '#621e3c',
          900: '#3a1321',
        },
        coral: {
          50: '#fcfbf9',
          100: '#fbf0e5',
          200: '#f6d2ca',
          300: '#eba79e',
          400: '#e47871',
          500: '#d4554f',
          600: '#bb3a35',
          700: '#932c28',
          800: '#691f1c',
          900: '#411310',
        },
        ochre: {
          50: '#fcfaf6',
          100: '#f9efcc',
          200: '#f3d99b',
          300: '#e2b267',
          400: '#ce863c',
          500: '#b46621',
          600: '#964c15',
          700: '#733912',
          800: '#4f270f',
          900: '#33180a',
        },
        gold: {
          50: '#fbfaf3',
          100: '#f8efb7',
          200: '#f0dd79',
          300: '#dab949',
          400: '#b89026',
          500: '#987113',
          600: '#7b580c',
          700: '#5f420b',
          800: '#412d0a',
          900: '#2b1c08',
        },
        lime: {
          50: '#f9f8f2',
          100: '#f4efbf',
          200: '#e5e183',
          300: '#c2c150',
          400: '#899b2a',
          500: '#677e15',
          600: '#52660d',
          700: '#404d0d',
          800: '#2c350c',
          900: '#1e2009',
        },
        green: {
          50: '#f0f5f3',
          100: '#d8f0eb',
          200: '#a8e6d1',
          300: '#6dcca4',
          400: '#2cad74',
          500: '#1f934c',
          600: '#1b7c38',
          700: '#19602e',
          800: '#134224',
          900: '#0d281c',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.500'),
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: theme('colors.primary.500'),
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900'),
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code:before': {
              content: 'none',
            },
            'code:after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.400'),
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.100'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
            },
            details: {
              backgroundColor: theme('colors.gray.800'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
