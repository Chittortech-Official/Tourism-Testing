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

// 1. KalikaTempleClient.js
updateGallery('components/KalikaTempleClient.js', [
    '/Kalika Mata Images/Kailika Mata 1.jpg',
    '/Kalika Mata Images/Kailika Mata 2.jpg'
]);

// 2. MeeraBaiTempleClient.js
updateGallery('components/MeeraBaiTempleClient.js', [
    '/Meera Bai Images/Meera temple 1.jpg',
    '/Meera Bai Images/Meera Temple 2.jpg'
]);

// 3. KumbhaShyamClient.js
updateGallery('components/KumbhaShyamClient.js', [
    '/Kumbha Shyam Images/Kumbha Shyam 1.jpg',
    '/Kumbha Shyam Images/Kumbha Shaym 2.jpg'
]);
