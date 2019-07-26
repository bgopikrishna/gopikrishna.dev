import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.6,
  headerWeight: 'normal',
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
