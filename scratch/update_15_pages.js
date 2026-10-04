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
    if (!fs.existsSync(file)) {
        console.log(`Skipping ${fileName}, not found.`);
        return;
    }
    
    let content = fs.readFileSync(file, 'utf8');

    // 1. Extract the hero image URL
    const bgMatch = content.match(/backgroundImage:\s*["']url\(([^)]+)\)["']/);
    const heroImage = bgMatch ? bgMatch[1].replace(/['"]/g, '') : '/kirti_stambha.jpg';

    // 2. Remove .hero-bg div and .hero-overlay div completely
    content = content.replace(/<motion\.div[^>]*?className="hero-bg"[^>]*?><\/motion\.div>/, '');
    content = content.replace(/<div className="hero-overlay"><\/div>/, '');

    // 3. Change <section className="fort-hero"> to <section className="fort-title-section">
    content = content.replace(/<section className="fort-hero">/, '<section className="fort-title-section">');

    // 4. Update CSS: Add fort-title-section and gallery styles
    const newCss = `
                .fort-title-section {
                    padding: 10rem 1.5rem 3rem;
                    background: #ffffff;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    z-index: 5;
                    position: relative;
                }
                .hero-content {
                    max-width: 1000px;
                    padding: 0 1.5rem;
                    z-index: 10;
                    width: 100%;
                }
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
    // Replace .hero-content CSS block with newCss
    content = content.replace(/\.hero-content\s*\{[\s\S]*?z-index:\s*10;\s*\}/, newCss);

    // 5. Update .hero-title CSS
    content = content.replace(
        /\.hero-title\s*\{[\s\S]*?\}/,
        `.hero-title {
                    font-size: clamp(3.5rem, 10vw, 5rem);
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    background: none !important;
                    -webkit-text-fill-color: #111 !important;
                    color: #111 !important;
                    text-shadow: none !important;
                    filter: none !important;
                }`
    );
    
    // Remove aura-heading from the title if it exists
    content = content.replace(/className="hero-title aura-heading"/g, 'className="hero-title"');
    
    // Add inline color style to hero-desc if not already there
    if (!content.includes(`style={{ 'color': '#333 !important' }}`) && !content.includes(`style={{ color: '#333 !important' }}`)) {
        content = content.replace(/className="hero-desc"/, `className="hero-desc" style={{ 'color': '#333 !important' }}`);
    }

    // 6. Replace ImageGallery component with custom markup
    const galleryMarkup = `
                {/* ═══ GALLERY ══════════════════════════ */}
                <motion.section 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="fort-section"
                    style={{ paddingTop: 0, paddingBottom: '6rem' }}
                >
                    <div className="section-header" style={{ marginBottom: '3.5rem' }}>
                        <motion.h2 variants={itemVariants} className="section-title" style={{ fontSize: '2.5rem', background: 'none', WebkitTextFillColor: '#111', color: '#111', filter: 'none' }}>
                            Gallery
                        </motion.h2>
                        <motion.div variants={itemVariants} className="title-divider"></motion.div>
                    </div>
                    <div className="page-gallery-grid">
                        <motion.img variants={itemVariants} src="${heroImage}" alt="Gallery Image" className="p-gal-img" />
                    </div>
                </motion.section>
`;
    content = content.replace(/<ImageGallery\s+images=\{[^}]+\}\s*\/>/, galleryMarkup);

    fs.writeFileSync(file, content, 'utf8');
});

console.log('Updated all 15 pages successfully!');
