import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.6,
  headerWeight: 'bold',
  headerFontFamily: [
    'Space Mono',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen-Sans',
    'Cantarell',
    'Helvetica Neue',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Nunito',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen-Sans',
    'Cantarell',
    'Helvetica Neue',
    'sans-serif',
  ],
  googleFonts: [
    {
      name: 'Nunito',
      styles: ['400'],
    },
    {
      name:"Space Mono",
      styles:["400"]
    }
  ],
});

export const { scale, rhythm, options } = typography;

export default typography;
