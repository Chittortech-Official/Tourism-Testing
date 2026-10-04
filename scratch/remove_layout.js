const fs = require('fs');
const file = 'c:\\Users\\lavsh\\OneDrive\\Documents\\Chittorgarh-Tourism-main\\components\\KumbhaPalaceClient.js';
let content = fs.readFileSync(file, 'utf8');

// The layout section starts with {/* ... LAYOUT ... */} and ends with </motion.section>
const layoutRegex = /\{\/\*.*LAYOUT.*\*\/\}\s*<motion\.section[\s\S]*?id="layout"[\s\S]*?<\/motion\.section>/g;
content = content.replace(layoutRegex, '');

fs.writeFileSync(file, content, 'utf8');
console.log('Removed Layout section successfully!');
