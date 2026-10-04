const fs = require('fs');
const file = 'components/FatehPrakashClient.js';
let content = fs.readFileSync(file, 'utf8');
let lines = content.split('\n');
let newLines = [];
let skip = false;
for (let line of lines) {
    if (line.includes('<div className="collection-grid">')) {
        skip = true;
        continue;
    }
    if (skip && line.includes('</div>') && line.trim() === '</div>') {
        skip = false;
        continue;
    }
    if (!skip) newLines.push(line);
}
fs.writeFileSync(file, newLines.join('\n'), 'utf8');
console.log('Fixed Fateh Prakash successfully');
