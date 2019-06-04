import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '19px',
  baseLineHeight: 1.5,
  headerFontFamily: [
    'Karla',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen-Sans',
    'Ubuntu',
    'Cantarell',
    'Helvetica Neue',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Karla',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen-Sans',
    'Ubuntu',
    'Cantarell',
    'Helvetica Neue',
    'sans-serif',
  ],
  googleFonts: [
    {
      name: 'Karla',
      styles: ['400', '700'],
    },
  ],
  // See below for the full list of options.
});

export const { scale, rhythm, options } = typography;

export default typography;
