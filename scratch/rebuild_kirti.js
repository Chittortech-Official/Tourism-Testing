const fs = require('fs');
const file = 'components/KirtiStambhClient.js';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove fort-hero entirely (the image at the top)
content = content.replace(/<section className="fort-hero">[\s\S]*?<\/section>/, '');

// 2. Adjust fort-title-section padding so it sits below the navbar
content = content.replace(
    /padding: 4rem 1\.5rem 2rem;/,
    "padding: 10rem 1.5rem 3rem;"
);

// 3. Fix the hero-title so it has NO shadow and is solid black
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

// 4. Create the custom Gallery grid CSS
const galleryCss = `
                .kirti-gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem;
                    padding: 0 1.5rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .k-gal-img {
                    width: 100%;
                    height: 350px;
                    object-fit: cover;
                    border-radius: 16px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                    transition: transform 0.4s ease, box-shadow 0.4s ease;
                }
                .k-gal-img:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
                }
`;
content = content.replace('            `}</style>', galleryCss + '\n            `}</style>');

// 5. Replace <ImageGallery images={[]} /> with the actual Gallery markup
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
                            Gallery of Kirti Stambh
                        </motion.h2>
                        <motion.div variants={itemVariants} className="title-divider"></motion.div>
                    </div>
                    <div className="kirti-gallery-grid">
                        <motion.img variants={itemVariants} src="/kirti_stambha.jpg" alt="Kirti Stambh" className="k-gal-img" />
                        <motion.img variants={itemVariants} src="/jain_temples.jpg" alt="Jain Temple Details" className="k-gal-img" />
                        <motion.img variants={itemVariants} src="/jain_temples_satbees.jpg" alt="Architecture" className="k-gal-img" />
                    </div>
                </motion.section>
`;
content = content.replace(/<ImageGallery images=\{TEMP_GALLERY_IMAGES\} \/>|<ImageGallery images=\{\[\]\} \/>/, galleryMarkup);

fs.writeFileSync(file, content, 'utf8');
console.log('Rebuilt KirtiStambhClient.js successfully!');
