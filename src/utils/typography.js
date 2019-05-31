import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '19px',
  baseLineHeight: 1.5,
  headerFontFamily: [
    'Karla',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Karla',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
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
