const fs = require('fs');
const file = 'components/PadminiPalaceClient.js';
let content = fs.readFileSync(file, 'utf8');

// 1. Fix fort-page p color
content = content.replace(
    /color: #333 !important;/g,
    'color: #000 !important;\n                    font-weight: 500;'
);

// 2. Fix monument-card background
content = content.replace(
    /background: rgba\(255, 255, 255, 0.03\);/g,
    'background: rgba(255, 255, 255, 0.8);\n                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);'
);
content = content.replace(
    /border: 1px solid rgba\(255, 255, 255, 0.1\);/g,
    'border: 1px solid rgba(212, 175, 55, 0.3);'
);

// 3. Fix mon-desc color
content = content.replace(
    /color: rgba\(255,255,255,0.8\);/g,
    'color: #000;'
);

// Just to make sure we hit everything
fs.writeFileSync(file, content, 'utf8');
console.log('Fixed Padmini Palace text and cards');
