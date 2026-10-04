const fs = require('fs');

function updateGallery(file, images) {
    let content = fs.readFileSync(file, 'utf8');
    
    const startTag = '<div className="page-gallery-grid">';
    const endTag = '</div>';
    
    let startIndex = content.indexOf(startTag);
    if (startIndex === -1) {
        console.log('Gallery not found in', file);
        return;
    }
    
    let endOfStartTag = startIndex + startTag.length;
    let endIndex = content.indexOf(endTag, endOfStartTag);
    
    let newGalleryHtml = '\n';
    for (let img of images) {
        newGalleryHtml += `                        <motion.img src="${img}" alt="Gallery Image" className="p-gal-img" />\n`;
    }
    newGalleryHtml += '                    ';
    
    let newContent = content.substring(0, endOfStartTag) + newGalleryHtml + content.substring(endIndex);
    
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated gallery in', file);
}

// 1. Ratan Singh Palace
updateGallery('components/RatanPalaceClient.js', [
    '/Ratan Singh Images/Ratan Singh Palace1.jpg',
    '/Ratan Singh Images/Ratan Singh Palace2.jpg',
    '/Ratan Singh Images/Ratan Singh Palace3.JPG'
]);

// 2. Sanwaliya Mandir
updateGallery('components/SanwaliyaClient.js', [
    '/Sanwaliya Mandir Images/Sanwalia ji Tample12.JPG',
    '/Sanwaliya Mandir Images/Sanwalia ji Tample13.JPG',
    '/Sanwaliya Mandir Images/Sanwalia ji Tample4.jpeg',
    '/Sanwaliya Mandir Images/Sanwalia ji Tample6.JPG',
    '/Sanwaliya Mandir Images/Sanwalia ji Tample8.jpg'
]);

// 3. Light and Sound Show
updateGallery('components/LightSoundShowClient.js', [
    '/Light Show Images/Light & Sound1.jpg',
    '/Light Show Images/Light & Sound2.jpg',
    '/Light Show Images/Light & Sound4.jpg'
]);

// 4. Jain Temples
updateGallery('components/JainTemplesClient.js', [
    '/Jain Mandir Images/Saatbees Devri5.jpg',
    '/Jain Mandir Images/Saatbees Devri6.jpg',
    '/Jain Mandir Images/Saatbees Devri9.jpg'
]);
