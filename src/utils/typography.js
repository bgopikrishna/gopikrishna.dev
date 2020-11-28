import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.8,
  headerWeight: 900,
  headerFontFamily: ['Arial Black','Arial', 'Helvetica Neue', 'sans-serif'],
  bodyFontFamily: ['Arial', 'Helvetica Neue', 'sans-serif'],
});

export const { scale, rhythm, options } = typography;

export default typography;
