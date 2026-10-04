const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Users\\lavsh\\OneDrive\\Documents\\Chittorgarh-Tourism-main\\components';
const files = fs.readdirSync(basePath).filter(f => f.endsWith('Client.js'));

files.forEach(fileName => {
    const file = path.join(basePath, fileName);
    let content = fs.readFileSync(file, 'utf8');

    // Replace the black-to-gold gradient with a pure gold gradient
    content = content.replace(
        /background: linear-gradient\(135deg, #111 0%, var\(--gold\) 50%, #d4af37 100%\);/g,
        'background: linear-gradient(135deg, #b58d1f 0%, #f3da74 50%, #d4af37 100%);'
    );
    
    // Also handle if it had #fff in any unmodified ones
    content = content.replace(
        /background: linear-gradient\(135deg, #fff 0%, var\(--gold\) 50%, #d4af37 100%\);/g,
        'background: linear-gradient(135deg, #b58d1f 0%, #f3da74 50%, #d4af37 100%);'
    );

    fs.writeFileSync(file, content, 'utf8');
});

console.log('Fixed headings gradient in all files!');
