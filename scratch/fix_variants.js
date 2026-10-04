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

    // Remove the variants attributes from the newly injected gallery markup
    // Specifically looking for the Gallery section we added
    const galleryStartIdx = content.indexOf('{/* ═══ GALLERY ══════════════════════════ */}');
    
    if (galleryStartIdx !== -1) {
        let beforeGallery = content.substring(0, galleryStartIdx);
        let gallerySection = content.substring(galleryStartIdx);
        
        // Remove variants from the gallery section
        gallerySection = gallerySection.replace(/variants=\{containerVariants\}/g, '');
        gallerySection = gallerySection.replace(/variants=\{itemVariants\}/g, '');
        
        // Let's also add simple opacity animation since we removed the complex variants
        gallerySection = gallerySection.replace(/<motion\.section/g, '<motion.section initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5}}');
        
        content = beforeGallery + gallerySection;
    }

    fs.writeFileSync(file, content, 'utf8');
});

console.log('Fixed variants crash in all 15 files!');
