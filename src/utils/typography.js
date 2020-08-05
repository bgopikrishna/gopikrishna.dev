import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.8,
  headerWeight: 900,
  headerFontFamily: [
    'Work Sans', 
    'Arial',
    'Helvetica Neue',
    'sans-serif',
  ],
  bodyFontFamily: [
   'Work Sans',
    'Arial',
    'Helvetica Neue',
    'sans-serif',
  ],

  googleFonts: [
    {
      name:'Work Sans',
      styles:['400', '700','900']
    }
  ]
});

export const { scale, rhythm, options } = typography;

export default typography;
