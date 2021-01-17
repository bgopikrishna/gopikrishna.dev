import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.8,
  headerWeight: 900,
  headerFontFamily: [
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
});

export const { scale, rhythm, options } = typography;

export default typography;
