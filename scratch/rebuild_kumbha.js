const fs = require('fs');
const file = 'c:\\Users\\lavsh\\OneDrive\\Documents\\Chittorgarh-Tourism-main\\components\\KumbhaPalaceClient.js';
let content = fs.readFileSync(file, 'utf8');

const heroRegex = /<section className="fort-hero">[\s\S]*?<\/section>/;
const newHeroHtml = `
            <section className="fort-title-section">
                <motion.div 
                    variants={containerVariants}
                    className="hero-content"
                >
                    <motion.button variants={itemVariants} className="back-btn" onClick={() => {
                        triggerHaptic('light');
                        router.push('/explore');
                    }}>
                        <ArrowLeft size={18} /> {t("btn.back") || "Back"}
                    </motion.button>
                    <motion.span variants={itemVariants} className="hero-eyebrow">{t("kumbha.hero.eyebrow")}</motion.span>
                    <motion.h1 variants={itemVariants} className="hero-title">{t("kumbha.hero.title")}</motion.h1>
                    <motion.p variants={itemVariants} className="hero-desc" style={{ 'color': '#333 !important' }}>
                        {t("kumbha.hero.desc")?.split('. ').map((sentence, idx) => (
                            <motion.span 
                                key={idx} 
                                variants={sentenceVariants}
                                style={{ display: 'inline-block', marginRight: '0.4em' }}
                            >
                                {sentence}{idx < t("kumbha.hero.desc").split('. ').length - 1 ? '.' : ''}
                            </motion.span>
                        ))}
                    </motion.p>
                </motion.div>
            </section>
`;
content = content.replace(heroRegex, newHeroHtml);

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
                .kumbha-gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem;
                    padding: 0 1.5rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .k-gal-img {
                    width: 100%;
                    height: auto;
                    border-radius: 16px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                    transition: transform 0.4s ease, box-shadow 0.4s ease;
                    display: block;
                }
                .k-gal-img:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
                }
`;
content = content.replace(/\.hero-content \{[\s\S]*?z-index: 10;\s*\}/, newCss);

content = content.replace(
    /\.hero-title \{[\s\S]*?\}/,
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
                            Gallery of Rana Kumbha Palace
                        </motion.h2>
                        <motion.div variants={itemVariants} className="title-divider"></motion.div>
                    </div>
                    <div className="kumbha-gallery-grid">
                        <motion.img variants={itemVariants} src="/Rana Palace Images/Rana Kumbha Image 1.jpg" alt="Rana Kumbha Palace" className="k-gal-img" />
                        <motion.img variants={itemVariants} src="/Rana Palace Images/Rana Kumbha Image 2.jpg" alt="Rana Kumbha Palace Details" className="k-gal-img" />
                        <motion.img variants={itemVariants} src="/Rana Palace Images/Rana kumbha Image 3.jpg" alt="Architecture" className="k-gal-img" />
                        <motion.img variants={itemVariants} src="/Rana Palace Images/Rana Kumbha Image 4.jpg" alt="Rana Kumbha Views" className="k-gal-img" />
                    </div>
                </motion.section>
`;
content = content.replace(/<ImageGallery images=\{TEMP_GALLERY_IMAGES\} \/>|<ImageGallery images=\{\[\]\} \/>/, galleryMarkup);

fs.writeFileSync(file, content, 'utf8');
console.log('Rebuilt KumbhaPalaceClient.js successfully!');
