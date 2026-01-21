const sharp = require('sharp');
const path = require('path');

const nightImagePath = path.join(__dirname, 'public/images/hero-night-bg.png');
const outputPath = path.join(__dirname, 'public/images/hero-night-bg.png');

sharp(nightImagePath)
  .resize(2720, 1536, {
    fit: 'cover',
    position: 'center'
  })
  .toFile(outputPath + '.tmp')
  .then(() => {
    const fs = require('fs');
    fs.renameSync(outputPath + '.tmp', outputPath);
    console.log('Image resized successfully to 2720x1536');
  })
  .catch(err => {
    console.error('Error resizing image:', err);
    process.exit(1);
  });
