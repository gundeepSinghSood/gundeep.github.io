const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');

 
module.exports = withFonts(withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]',
  },
  }));