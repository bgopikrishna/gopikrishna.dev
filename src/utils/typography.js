import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.6,
  headerWeight: 900,
  headerFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Work Sans',
    'Oxygen-Sans',
    'Cantarell',
    'Arial',
    'Helvetica Neue',
    'sans-serif',
  ],
  bodyFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Work Sans',
    'Oxygen-Sans',
    'Cantarell',
    'Arial',
    'Helvetica Neue',
    'sans-serif',
  ],
});

export const { scale, rhythm, options } = typography;

export default typography;
