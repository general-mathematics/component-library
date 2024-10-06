const fs = require('fs');
const path = require('path');

// Define source and destination directories
const srcDir = path.join(__dirname, 'src', 'components');
const nestedStylesDir = path.join(__dirname, 'src', 'styles', 'nested-styles');
const globalsCssFile = path.join(__dirname, 'src', 'styles', 'globals.css');
const distDir = path.join(__dirname, 'dist');
const nestedStylesDestDir = path.join(distDir, 'styles', 'nested-styles');
const globalsDestDir = path.join(distDir, 'styles');

// Function to copy CSS modules from components
function copyCssModules(src, dest) {
    fs.readdir(src, { withFileTypes: true }, (err, entries) => {
        if (err) {
            console.error(`Error reading directory ${src}:`, err);
            return;
        }

        entries.forEach((entry) => {
            const srcFilePath = path.join(src, entry.name);

            if (entry.isDirectory()) {
                // If the entry is a directory, create a corresponding directory in 'dist'
                const componentName = entry.name;
                const newDestDir = path.join(dest, componentName); // Target directory for compiled components

                // Make sure the target directory exists
                fs.mkdirSync(newDestDir, { recursive: true });

                // Recursively copy CSS modules from the component's directory
                copyCssModules(srcFilePath, newDestDir);
            } else if (entry.isFile() && entry.name.endsWith('.module.css')) {
                // If the file is a CSS module, copy it to the corresponding destination
                const destFilePath = path.join(dest, entry.name);
                fs.copyFile(srcFilePath, destFilePath, (err) => {
                    if (err) {
                        console.error(`Error copying file ${srcFilePath} to ${destFilePath}:`, err);
                    } else {
                        console.log(`Copied ${srcFilePath} to ${destFilePath}`);
                    }
                });
            }
        });
    });
}

// Function to copy nested styles
function copyNestedStyles(src, dest) {
    fs.readdir(src, { withFileTypes: true }, (err, entries) => {
        if (err) {
            console.error(`Error reading directory ${src}:`, err);
            return;
        }

        // Make sure the target nested styles directory exists
        fs.mkdirSync(dest, { recursive: true });

        entries.forEach((entry) => {
            const srcFilePath = path.join(src, entry.name);

            if (entry.isFile() && entry.name.endsWith('.module.css')) {
                // If the file is a CSS module, copy it to the nested styles destination
                const destFilePath = path.join(dest, entry.name);
                fs.copyFile(srcFilePath, destFilePath, (err) => {
                    if (err) {
                        console.error(`Error copying file ${srcFilePath} to ${destFilePath}:`, err);
                    } else {
                        console.log(`Copied ${srcFilePath} to ${destFilePath}`);
                    }
                });
            }
        });
    });
}

// Function to copy globals.css
function copyGlobalsCss(src, dest) {
    // Create the styles directory if it doesn't exist
    fs.mkdirSync(dest, { recursive: true });
    
    const destFilePath = path.join(dest, 'globals.css');
    fs.copyFile(src, destFilePath, (err) => {
        if (err) {
            console.error(`Error copying file ${src} to ${destFilePath}:`, err);
        } else {
            console.log(`Copied ${src} to ${destFilePath}`);
        }
    });
}

// Start copying CSS modules from components directory
copyCssModules(srcDir, distDir);
// Start copying nested styles
copyNestedStyles(nestedStylesDir, nestedStylesDestDir);
// Copy globals.css
copyGlobalsCss(globalsCssFile, globalsDestDir);
