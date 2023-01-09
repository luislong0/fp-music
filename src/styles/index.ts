import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      gray900: '#121214',
      gray800: '#202024',
      gray600: '#52525b',
      gray500: '#71717a',
      gray300: '#c4c4cc',
      gray200: '#D9D9D9',
      gray100: '#e1e1e6',

      violet500: '#8b5cf6',
      violet600: '#7c3aed',
      violet700: '#2A2141',

      red500: '#ef4444',
      red600: '#dc2626'
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
  media: {
    bp1: '(max-width: 680px)',
    bp2: '(max-width: 1024px)',
    bp3: '(min-width: 1024px)',
  },
})
