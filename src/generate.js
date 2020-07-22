/**
 * Simple SASS compiler to generate the colour palette.
 * Run `npm run generate` and pull colour variables out of `src/palette.css`
 */
const sass = require('sass');
const fs = require('fs');
const path = require('path');

const scssFilename = path.resolve(__dirname, 'colors.scss');
const cssFilename = path.resolve(__dirname, 'colors.css');

console.log('Reading', scssFilename);
const result = sass.renderSync({file: scssFilename});
if (!result) {
  return console.error('Error');
}

console.log('Writing to', cssFilename);
fs.writeFile(cssFilename, result.css, 'utf-8', (err) => {
  if (err) {
    return console.error(err);
  }

  console.log('Written');
});