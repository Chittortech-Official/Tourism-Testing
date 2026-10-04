const fs = require('fs');
const path = require('path');

const files = [
    'BassiClient.js', 'FatehPrakashClient.js', 'FortDetailsClient.js',
    'GaumukhClient.js', 'JainTemplesClient.js', 'KalikaTempleClient.js',
    'KumbhaShyamClient.js', 'MeeraBaiTempleClient.js', 'MenalClient.js',
    'NagariClient.js', 'PadminiPalaceClient.js', 'RatanPalaceClient.js',
    'SanwaliyaClient.js', 'SitamataClient.js', 'VijayStambhClient.js'
];

const basePath = 'c:\\Users\\lavsh\\OneDrive\\Documents\\Chittorgarh-Tourism-main\\components';

files.forEach(fileName => {
    const file = path.join(basePath, fileName);
    if (!fs.existsSync(file)) return;
    
    let content = fs.readFileSync(file, 'utf8');

    // 1. Remove ANY stray <div className="hero-bg"...> that was missed by the previous regex
    content = content.replace(/<div className="hero-bg"[\s\S]*?><\/div>/g, '');

    // 2. specifically in Fateh Prakash, clear out the placeholder architecture images in the collection grid
    if (fileName === 'FatehPrakashClient.js') {
        const gridRegex = /<div className="collection-grid">[\s\S]*?<\/div>\s*<\/div>\s*<div className="glass-panel" style=\{\{ textAlign: 'center' \}\}>/;
        content = content.replace(gridRegex, '<div className="glass-panel" style={{ textAlign: \'center\' }}>');
    }

    fs.writeFileSync(file, content, 'utf8');
});

console.log('Cleanup completed successfully!');
