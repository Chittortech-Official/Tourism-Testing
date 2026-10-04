const fs = require('fs');

const file = 'components/LightSoundShowClient.js';
let content = fs.readFileSync(file, 'utf8');

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
                        <motion.img src="/Light Show Images/Light & Sound1.jpg" alt="Gallery Image" className="p-gal-img" />
                        <motion.img src="/Light Show Images/Light & Sound2.jpg" alt="Gallery Image" className="p-gal-img" />
                        <motion.img src="/Light Show Images/Light & Sound4.jpg" alt="Gallery Image" className="p-gal-img" />
                    </div>
                </motion.section>
`;
    
    // Add CSS for gallery just in case it doesn't exist
    let newContent = content.substring(0, mainEndIndex) + galleryHtml + content.substring(mainEndIndex);
    
    // Add CSS rules if missing
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
    console.log('Added gallery to LightSoundShowClient.js');
} else {
    console.log('</main> not found in LightSoundShowClient.js');
}
