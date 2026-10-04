const fs = require('fs');
const file = 'c:\\Users\\lavsh\\OneDrive\\Documents\\Chittorgarh-Tourism-main\\components\\KirtiStambhClient.js';
let content = fs.readFileSync(file, 'utf8');

// 1. Change fort-hero height
content = content.replace(
    /height: 100vh;([\s\S]*?)z-index: 2;/,
    "height: 55vh;$1z-index: 2;"
);

// 2. Add fort-title-section css
const titleSectionCss = `
                .fort-title-section {
                    padding: 4rem 1.5rem 2rem;
                    background: #ffffff;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    z-index: 5;
                    position: relative;
                }
`;
content = content.replace('                .hero-bg {', titleSectionCss + '\n                .hero-bg {');

// 3. Remove overlay css
content = content.replace(/\.hero-overlay \{[\s\S]*?z-index: -1;\s*\}/, '');

// 4. Update hero title css
content = content.replace(
    /\.hero-title \{[\s\S]*?text-shadow: 0 4px 15px rgba\(0,0,0,0\.1\);\s*\}/,
    `.hero-title {
                    font-size: clamp(3.5rem, 10vw, 5.5rem);
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    background: none;
                    -webkit-text-fill-color: #111;
                    color: #111;
                    text-shadow: none;
                }`
);

// 5. Update HTML structure
const htmlRegex = /<section className="fort-hero">[\s\S]*?<\/section>/;
const newHtml = `
            <section className="fort-hero">
                <motion.div 
                    style={{ 
                        scale: heroScale,
                        backgroundImage: "url('/kirti_stambha.jpg')"
                    }} 
                    className="hero-bg"
                ></motion.div>
            </section>
            
            <section className="fort-title-section">
                <motion.div 
                    variants={containerVariants}
                    className="hero-content"
                >
                    <motion.button variants={itemVariants} className="back-btn" onClick={() => router.push('/explore')}>
                        <ArrowLeft size={18} /> {t("btn.back") || "Back"}
                    </motion.button>
                    <motion.span variants={itemVariants} className="hero-eyebrow">{t("kirti.hero.eyebrow")}</motion.span>
                    <motion.h1 variants={itemVariants} className="hero-title">{t("kirti.hero.title")}</motion.h1>
                    <motion.p variants={itemVariants} className="hero-desc">
                        {t("kirti.hero.desc")?.split('. ').map((sentence, idx) => (
                            <motion.span 
                                key={idx} 
                                variants={sentenceVariants}
                                style={{ display: 'inline-block', marginRight: '0.4em' }}
                            >
                                {sentence}{idx < t("kirti.hero.desc").split('. ').length - 1 ? '.' : ''}
                            </motion.span>
                        ))}
                    </motion.p>
                </motion.div>
            </section>
`;

content = content.replace(htmlRegex, newHtml);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated KirtiStambhClient.js successfully!');
