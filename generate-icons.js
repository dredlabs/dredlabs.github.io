const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const sourceFile = path.join(__dirname, 'images', 'logo.svg');
const targetDir = path.join(__dirname, 'images', 'icons');

// Ensure the target directory exists
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Generate icons for each size
sizes.forEach(size => {
    sharp(sourceFile)
        .resize(size, size, {
            fit: 'contain',
            background: { r: 37, g: 99, b: 235, alpha: 1 } // #2563eb background
        })
        .flatten({ background: { r: 37, g: 99, b: 235, alpha: 1 } })
        .toFormat('png', { quality: 100 })
        .toFile(path.join(targetDir, `icon-${size}x${size}.png`))
        .then(info => console.log(`Generated ${size}x${size} icon`))
        .catch(err => console.error(`Error generating ${size}x${size} icon:`, err));
}); 