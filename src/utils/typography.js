import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.6,
  headerWeight: 'bold',
  headerFontFamily: [
    'Inconsolata',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Work Sans',
    'Oxygen-Sans',
    'Cantarell',
    'Helvetica Neue',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Inter',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Work Sans',
    'Oxygen-Sans',
    'Cantarell',
    'Helvetica Neue',
    'sans-serif',
  ],
  googleFonts: [
    {
      name: 'Inter',
      styles: ['400','700'],
    },
    {
      name:"Inconsolata",
      styles:["400"]
    }
  ],
});

export const { scale, rhythm, options } = typography;

export default typography;
