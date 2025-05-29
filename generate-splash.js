const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Common device sizes for splash screens
const splashScreens = [
    { width: 2048, height: 2732, name: 'iPad Pro 12.9"' }, // iPad Pro 12.9"
    { width: 1668, height: 2388, name: 'iPad Pro 11"' }, // iPad Pro 11"
    { width: 1536, height: 2048, name: 'iPad Mini/Air' }, // iPad Mini, Air
    { width: 1125, height: 2436, name: 'iPhone X/XS' }, // iPhone X, XS
    { width: 828, height: 1792, name: 'iPhone XR' }, // iPhone XR
    { width: 750, height: 1334, name: 'iPhone 8/SE' }, // iPhone 8, SE
    { width: 1242, height: 2688, name: 'iPhone XS Max' } // iPhone XS Max
];

const sourceFile = path.join(__dirname, 'images', 'logo.svg');
const targetDir = path.join(__dirname, 'images', 'splash');

// Ensure the target directory exists
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Create a splash screen for each size
splashScreens.forEach(async screen => {
    try {
        // First create a background
        const background = await sharp({
            create: {
                width: screen.width,
                height: screen.height,
                channels: 4,
                background: { r: 37, g: 99, b: 235, alpha: 1 } // #2563eb
            }
        }).png().toBuffer();

        // Then process the logo
        const logoSize = Math.min(screen.width, screen.height) * 0.4;
        const logo = await sharp(sourceFile)
            .resize(Math.round(logoSize), Math.round(logoSize), {
                fit: 'contain',
                background: { r: 37, g: 99, b: 235, alpha: 0 }
            })
            .toBuffer();

        // Composite the logo onto the background
        await sharp(background)
            .composite([{
                input: logo,
                gravity: 'center'
            }])
            .toFile(path.join(targetDir, `splash-${screen.width}x${screen.height}.png`));

        console.log(`Generated splash screen for ${screen.name}`);
    } catch (err) {
        console.error(`Error generating splash screen for ${screen.name}:`, err);
    }
}); 