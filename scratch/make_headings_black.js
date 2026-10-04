const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Users\\lavsh\\OneDrive\\Documents\\Chittorgarh-Tourism-main\\components';
const files = fs.readdirSync(basePath).filter(f => f.endsWith('Client.js'));

files.forEach(fileName => {
    const file = path.join(basePath, fileName);
    let content = fs.readFileSync(file, 'utf8');

    // Replace the pure gold gradient with a dark black gradient or solid color
    content = content.replace(
        /background: linear-gradient\(135deg, #b58d1f 0%, #f3da74 50%, #d4af37 100%\);/g,
        'color: #111 !important;\n                    background: none !important;'
    );
    
    // Also remove the background clip properties since it's just a solid color now
    content = content.replace(
        /-webkit-background-clip: text;/g,
        '/* -webkit-background-clip: text; */'
    );
    content = content.replace(
        /-webkit-text-fill-color: transparent;/g,
        '-webkit-text-fill-color: #111 !important;'
    );

    fs.writeFileSync(file, content, 'utf8');
});

console.log('Made headings dark black in all files!');
