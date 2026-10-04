const fs = require('fs');

const file = 'components/VijayStambhClient.js';
let content = fs.readFileSync(file, 'utf8');

const images = [
    '/Vijay Stambh Images/Vijay Stambh 1.jpg',
    '/Vijay Stambh Images/Vijay Stambh 2.jpg',
    '/Vijay Stambh Images/Vijay Stambh 3.jpg'
];

const startTag = '<div className="page-gallery-grid">';
const endTag = '</div>';

let startIndex = content.indexOf(startTag);

if (startIndex !== -1) {
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
} else {
    // Gallery section doesn't exist, append before </main>
    const mainEndIndex = content.lastIndexOf('</main>');
    if (mainEndIndex !== -1) {
        const galleryHtml = `
                {/* ═══ GALLERY ══════════════════════════ */}
                <motion.section 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="fort-section"
                    style={{ paddingTop: 0, paddingBottom: '6rem' }}
                >
                    <div className="section-header" style={{ marginBottom: '3.5rem' }}>
                        <motion.h2 className="section-title" style={{ fontSize: '2.5rem', background: 'none', color: '#111', filter: 'none' }}>
                            Gallery
                        </motion.h2>
                        <motion.div className="title-divider"></motion.div>
                    </div>
                    <div className="page-gallery-grid">
${images.map(img => `                        <motion.img src="${img}" alt="Gallery Image" className="p-gal-img" />`).join('\n')}
                    </div>
                </motion.section>
`;
        let newContent = content.substring(0, mainEndIndex) + galleryHtml + content.substring(mainEndIndex);
        
        // Add CSS if missing
        if (!newContent.includes('.page-gallery-grid {')) {
            const styleIndex = newContent.indexOf('<style jsx global>{`');
            if (styleIndex !== -1) {
                const cssToAdd = `
                .page-gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem;
                    padding: 0 1.5rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .p-gal-img {
                    width: 100%;
                    height: auto;
                    border-radius: 16px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                    transition: transform 0.4s ease, box-shadow 0.4s ease;
                    display: block;
                }
                .p-gal-img:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
                }
`;
                newContent = newContent.replace('<style jsx global>{`', '<style jsx global>{`' + cssToAdd);
            }
        }
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Appended gallery to', file);
    } else {
        console.log('Could not find </main> in', file);
    }
}
