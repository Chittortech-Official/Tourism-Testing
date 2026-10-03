"use client";
import Image from 'next/image';
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { triggerHaptic } from "@/lib/haptics";
import { motion } from "framer-motion";
import { Map, Zap, Headphones, Castle, Shield, Droplets, Award, ArrowUpRight } from 'lucide-react';

import FAQ from "./FAQ";
import QRScannerButton from "./QRScannerButton";
import HeroCarousel from "./HeroCarousel";

export default function HomeClient() {
    const { t } = useLanguage();
    
    return (
        <div className="home-page-container">
            {/* â•â•â• NEW IMAGE CAROUSEL â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <HeroCarousel />

            {/* â•â•â• FIXED BACKGROUND â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <div className="fixed-bg"></div>
            <div className="bg-overlay"></div>

            {/* â•â•â• HERO SECTION â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <header id="home" className="editorial-hero" style={{ padding: "2rem 1.5rem 1rem", justifyContent: "center" }}>
                <div className="editorial-content" style={{ textAlign: "center", width: "100%" }}>
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="editorial-actions"
                        style={{ justifyContent: "center" }}
                    >
                        <Link prefetch={false} href="/explore" className="btn-gold-luxury" onClick={() => triggerHaptic('light')}>
                            {t("hero.cta1")} <ArrowUpRight size={16} style={{marginLeft: '8px'}} />
                        </Link>
                        <Link prefetch={false} href="/panch-gaurav" className="btn-outline-luxury" onClick={() => triggerHaptic('medium')}>
                            {t("hero.cta_gaurav")}
                        </Link>
                    </motion.div>
                </div>
            </header>

            {/* â•â•â• LIVE FORT STATS BAR â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <section className="stats-bar-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon-wrapper">
                                <Castle size={22} />
                            </div>
                            <div className="stat-info">
                                <div className="stat-val">{t("stats.n2") || "700+ Acres"}</div>
                                <div className="stat-lbl">{t("home.stat.acres") || "Largest Fort Citadel"}</div>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon-wrapper">
                                <Shield size={22} />
                            </div>
                            <div className="stat-info">
                                <div className="stat-val">{t("home.stat.polsVal") || "7 Fort Pols"}</div>
                                <div className="stat-lbl">{t("home.stat.polsLbl") || "Grand Victory Gates"}</div>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon-wrapper">
                                <Droplets size={22} />
                            </div>
                            <div className="stat-info">
                                <div className="stat-val">{t("home.stat.waterVal") || "84 Bodies"}</div>
                                <div className="stat-lbl">{t("home.stat.waterLbl") || "Ancient Water Springs"}</div>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon-wrapper">
                                <Award size={22} />
                            </div>
                            <div className="stat-info">
                                <div className="stat-val">UNESCO</div>
                                <div className="stat-lbl">{t("home.stat.unescoLbl") || "World Heritage Site"}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* â•â•â• SIGNATURE HIGHLIGHTS â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <section className="highlights-section">
                <div className="container">
                    <header className="section-header">
                        <motion.span 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="eyebrow"
                        >
                            {t("highlights.eyebrow")}
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="section-title"
                        >
                            {t("highlights.title")}
                        </motion.h2>
                        <div className="gold-divider"></div>
                    </header>

                    <div className="highlights-grid">
                        <HighlightCard
                            image="/vijay_stambh.jpg"
                            title={t("highlights.h1.title")}
                            desc={t("highlights.h1.desc")}
                            href="/vijay-stambh"
                            delay={0.1}
                        />
                        <HighlightCard
                            image="/Each page Pics/Fort pics/Padmini Palace.jpg"
                            title={t("highlights.h2.title")}
                            desc={t("highlights.h2.desc")}
                            href="/padmini-palace"
                            delay={0.2}
                        />
                        <HighlightCard
                            image="/Each page Pics/Fort pics/Rana Kumbha Palace.jpg"
                            title={t("highlights.h3.title")}
                            desc={t("highlights.h3.desc")}
                            href="/kumbha-palace"
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* â•â•â• DIGITAL COMPANION FEATURES â•â•â•â•â•â•â•â•â•â•â•â• */}
            <section className="smart-features-section">
                <div className="container">
                    <header className="section-header">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="eyebrow"
                        >
                            {t("feat.eyebrow")}
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="section-title"
                        >
                            {t("feat.title")}
                        </motion.h2>
                        <p className="section-desc">{t("feat.desc")}</p>
                    </header>

                    <div className="features-grid">
                        <FeatureCard 
                            icon={<Zap size={32} />}
                            title={t("feat.c2.title")}
                            desc={t("feat.c2.desc")}
                            delay={0.2}
                        />
                        <FeatureCard 
                            icon={<Headphones size={32} />}
                            title={t("feat.c3.title")}
                            desc={t("feat.c3.desc")}
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* â•â•â• QUOTE BAND â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <section className="quote-band">
                <div className="container">
                    <motion.blockquote 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="quote-text"
                    >
                        "{t("quote.text")}"
                    </motion.blockquote>
                    <motion.cite 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        â€” {t("quote.cite")}
                    </motion.cite>
                </div>
            </section>

            {/* â•â•â• CTA SECTION â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <section className="cta-section" id="contact">
                <div className="container">
                    <div className="cta-card-luxury">
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="cta-title"
                        >
                            {t("cta.title")} {t("cta.title2")}
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="section-desc"
                        >
                            {t("cta.desc")}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-6"
                        >
                            <Link prefetch={false} href="/explore" className="btn-gold-luxury" onClick={() => triggerHaptic('light')}>
                                {t("cta.btn")}
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* â•â•â• FAQ SECTION â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <FAQ />

            {/* â•â•â• LUXURY DARK OBSIDIAN & GOLD THEME CSS â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <style jsx global>{`
                .home-page-container {
                    position: relative;
                    min-height: 100vh;
                    background: transparent;
                    color: #FFFFFF;
                    font-family: var(--ff-body), sans-serif;
                }

                /* GLOBAL HINDI TYPOGRAPHY FIXES */
                :global([lang="hi"]) h1, 
                :global([lang="hi"]) h2, 
                :global([lang="hi"]) h3, 
                :global([lang="hi"]) .section-title,
                :global([lang="hi"]) .eyebrow {
                    letter-spacing: 0 !important;
                    line-height: 1.35 !important;
                    word-spacing: 0.1rem;
                }

                section {
                    padding: 5rem 0;
                    background: transparent;
                    position: relative;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1.25rem;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 3.5rem;
                    width: 100%;
                    padding: 2rem 1rem;
                    
                    border-radius: 24px;
                    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.6));
                }

                .eyebrow {
                    display: inline-block;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.25em;
                    font-weight: 700;
                    color: #D4AF37;
                    margin-bottom: 0.85rem;
                    padding: 0.35rem 1rem;
                    background: rgba(212, 175, 55, 0.1);
                    border: 1px solid rgba(212, 175, 55, 0.3);
                    border-radius: 999px;
                    max-width: 100%;
                }

                .section-title {
                    font-family: var(--ff-display), serif;
                    font-size: clamp(1.65rem, 5vw, 3.4rem);
                    font-weight: 800;
                    margin-bottom: 1rem;
                    background: linear-gradient(135deg, #FFFFFF 0%, #F3E5AB 50%, #D4AF37 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    line-height: 1.35;
                    word-break: break-word;
                    overflow-wrap: break-word;
                    padding: 0.1em 0.2em;
                }

                .gold-divider {
                    width: 80px;
                    height: 3px;
                    background: linear-gradient(90deg, transparent, #D4AF37, transparent);
                    margin: 1.2rem auto 0;
                    border-radius: 999px;
                }

                .section-desc {
                    max-width: 650px;
                    margin: 0.8rem auto 0;
                    color: rgba(255, 255, 255, 0.85);
                    font-size: 1.05rem;
                    line-height: 1.7;
                    font-weight: 400;
                }

                /* EDITORIAL HERO SECTION */
                .editorial-hero {
                    position: relative;
                    min-height: auto;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    background: transparent;
                    padding: 5rem 2rem 5rem;
                    overflow: hidden;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .hero-ambient-glow {
                    position: absolute;
                    top: 25%;
                    left: 20%;
                    transform: translate(-50%, -50%);
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%);
                    pointer-events: none;
                    z-index: 2;
                }

                .editorial-content {
                    position: relative;
                    z-index: 3;
                    text-align: left;
                    max-width: 750px;
                }

                .editorial-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.8rem;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: #D4AF37;
                    margin-bottom: 1.25rem;
                    font-weight: 600;
                }

                .sparkle { color: #D4AF37; }

                .editorial-title {
                    font-family: var(--ff-display), serif;
                    margin-bottom: 1.5rem;
                    display: flex;
                    flex-direction: column;
                }

                .ed-line1 {
                    display: block;
                    font-size: clamp(2.5rem, 8vw, 4.5rem);
                    font-weight: 400;
                    line-height: 1.1;
                    letter-spacing: -0.01em;
                    color: #FAF7F2;
                }

                .ed-line2 {
                    display: block;
                    font-size: clamp(2.5rem, 8vw, 4.5rem);
                    font-style: normal;
                    font-weight: 700;
                    background: linear-gradient(135deg, #FFF 0%, #D4AF37 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    line-height: 1.1;
                    margin-top: 0.2rem;
                }

                .editorial-sub {
                    font-size: clamp(1.05rem, 2vw, 1.25rem);
                    color: rgba(255, 255, 255, 0.85);
                    max-width: 600px;
                    margin-bottom: 2.5rem;
                    line-height: 1.6;
                    font-weight: 300;
                }

                .editorial-actions {
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                    flex-wrap: wrap;
                }

                /* LUXURY BUTTONS */
                .btn-gold-luxury {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.95rem 2.2rem;
                    background: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);
                    color: #0A0806;
                    font-weight: 800;
                    font-size: 0.82rem;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    border-radius: 999px;
                    text-decoration: none;
                    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
                    box-shadow: 0 10px 30px -5px rgba(212, 175, 55, 0.4);
                }

                .btn-gold-luxury:hover {
                    transform: translateY(-3px) scale(1.03);
                    box-shadow: 0 18px 40px -5px rgba(212, 175, 55, 0.6);
                    color: #000;
                }

                .btn-outline-luxury {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.95rem 2.2rem;
                    background: rgba(10, 8, 6, 0.7);
                    backdrop-filter: blur(12px);
                    color: #F3E5AB;
                    border: 1px solid rgba(212, 175, 55, 0.45);
                    border-radius: 999px;
                    font-weight: 700;
                    font-size: 0.82rem;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    text-decoration: none;
                    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
                }

                .btn-outline-luxury:hover {
                    background: rgba(212, 175, 55, 0.18);
                    border-color: #D4AF37;
                    transform: translateY(-3px);
                    color: #FFF;
                    box-shadow: 0 10px 30px -5px rgba(212, 175, 55, 0.3);
                }

                /* STATS BAR */
                .stats-bar-section {
                    padding: 2.5rem 0;
                    background: rgba(15, 10, 6, 0.3);
                    backdrop-filter: blur(10px);
                    border-top: 1px solid rgba(212, 175, 55, 0.25);
                    border-bottom: 1px solid rgba(212, 175, 55, 0.25);
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 1.25rem;
                }

                .stat-card {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1.25rem 1.5rem;
                    background: rgba(15, 10, 6, 0.55);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(212, 175, 55, 0.35);
                    border-radius: 16px;
                    transition: all 0.3s ease;
                }

                .stat-card:hover {
                    border-color: rgba(212, 175, 55, 0.7);
                    transform: translateY(-4px);
                    box-shadow: 0 12px 30px -10px rgba(212, 175, 55, 0.3);
                }

                .stat-icon-wrapper {
                    width: 46px;
                    height: 46px;
                    border-radius: 12px;
                    background: rgba(212, 175, 55, 0.25);
                    border: 1px solid rgba(212, 175, 55, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #F5E6AB;
                    flex-shrink: 0;
                }

                .stat-val {
                    font-family: var(--ff-display), serif;
                    font-size: 1.3rem;
                    font-weight: 800;
                    color: #F5E6AB;
                    line-height: 1.2;
                    text-shadow: 0 2px 10px rgba(0,0,0,0.9);
                }

                .stat-lbl {
                    font-size: 0.75rem;
                    color: #FFFFFF;
                    font-weight: 600;
                    margin-top: 0.15rem;
                    text-shadow: 0 1px 6px rgba(0,0,0,0.9);
                }

                /* HIGHLIGHTS GRID */
                .highlights-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }

                .highlight-card {
                    background: rgba(20, 14, 8, 0.4) !important;
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(212, 175, 55, 0.15);
                    border-radius: 12px;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                }

                .highlight-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(212, 175, 55, 0.5);
                    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 175, 55, 0.1);
                }

                .card-image-wrapper {
                    position: relative;
                    aspect-ratio: 4/3;
                    width: 100%;
                    overflow: hidden;
                }

                .card-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 1s cubic-bezier(0.22, 1, 0.36, 1);
                }

                .highlight-card:hover .card-img {
                    transform: scale(1.05);
                }

                .card-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, transparent 40%, rgba(20, 14, 8, 0.5) 100%);
                }

                .card-content {
                    padding: 1.5rem;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                }

                .card-content h3 {
                    font-family: var(--ff-display), serif;
                    font-size: 1.35rem;
                    font-weight: 600;
                    color: #FFF;
                    margin-bottom: 0.5rem;
                }

                .card-content p {
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.9rem;
                    line-height: 1.5;
                }

                .explore-btn {
                    margin-top: 1.5rem;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    color: #D4AF37;
                    font-size: 0.8rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .explore-btn:hover {
                    color: #FFF;
                }

                /* FEATURES GRID */
                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.25rem;
                }

                .feature-card {
                    background: rgba(20, 14, 8, 0.78) !important;
                    backdrop-filter: blur(16px);
                    border: 1px solid rgba(212, 175, 55, 0.3);
                    border-radius: 16px;
                    padding: 1.75rem 1.5rem;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
                }

                .feature-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(212, 175, 55, 0.7);
                    box-shadow: 0 18px 40px -10px rgba(0, 0, 0, 0.7);
                }

                .feature-icon {
                    color: #D4AF37;
                    margin-bottom: 1rem;
                    width: 48px;
                    height: 48px;
                    border-radius: 14px;
                    background: rgba(212, 175, 55, 0.15);
                    border: 1px solid rgba(212, 175, 55, 0.4);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 6px 16px rgba(212, 175, 55, 0.2);
                }

                .feature-card h3 {
                    font-family: var(--ff-display), serif;
                    font-size: 1.2rem !important;
                    font-weight: 800;
                    color: #FFF;
                    margin-bottom: 0.5rem;
                }

                .feature-card p {
                    color: rgba(255, 255, 255, 0.82);
                    font-size: 0.88rem;
                    line-height: 1.5;
                }

                /* QUOTE BAND */
                .quote-band {
                    background: linear-gradient(180deg, rgba(15, 10, 6, 0.5) 0%, rgba(20, 14, 8, 0.75) 50%, rgba(15, 10, 6, 0.5) 100%);
                    text-align: center;
                    padding: 3rem 0;
                    border-top: 1px solid rgba(212, 175, 55, 0.25);
                    border-bottom: 1px solid rgba(212, 175, 55, 0.25);
                }

                .quote-text {
                    font-family: var(--ff-display), serif;
                    font-size: clamp(1.15rem, 2.8vw, 1.85rem);
                    font-style: italic;
                    color: #F3E5AB;
                    max-width: 850px;
                    margin: 0 auto 1rem;
                    font-weight: 600;
                    line-height: 1.4;
                }

                cite {
                    font-size: 0.85rem;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: rgba(212, 175, 55, 0.9);
                    font-weight: 600;
                    font-style: normal;
                }

                /* CTA CARD */
                .cta-card-luxury {
                    background: linear-gradient(135deg, rgba(25, 18, 11, 0.85) 0%, rgba(15, 10, 6, 0.9) 100%);
                    backdrop-filter: blur(16px);
                    border: 1px solid rgba(212, 175, 55, 0.4);
                    border-radius: 20px;
                    padding: 2.25rem 2rem;
                    text-align: center;
                    box-shadow: 0 20px 50px -15px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1);
                }

                .cta-title {
                    font-family: var(--ff-display), serif;
                    font-size: clamp(1.5rem, 3.5vw, 2.35rem);
                    font-weight: 900;
                    margin-top: 0.5rem;
                    margin-bottom: 0.5rem;
                    background: linear-gradient(135deg, #FFF 0%, #F3E5AB 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                /* RESPONSIVE MOBILE FIXES */
                @media (max-width: 640px) {
                    section {
                        padding: 1.5rem 0;
                    }
                    .editorial-hero {
                        padding: 3rem 1rem 2rem;
                        text-align: left;
                    }
                    .editorial-actions {
                        flex-direction: column;
                        width: 100%;
                        align-items: stretch;
                    }
                    .btn-gold-luxury, .btn-outline-luxury {
                        width: 100%;
                    }
                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 0.6rem;
                    }
                    .stat-card {
                        flex-direction: column;
                        text-align: center;
                        justify-content: center;
                        padding: 0.85rem 0.5rem;
                        gap: 0.35rem;
                    }
                    .stat-icon-wrapper {
                        width: 32px;
                        height: 32px;
                        margin: 0 auto;
                    }
                    .stat-val {
                        font-size: 0.95rem;
                        line-height: 1.25;
                    }
                    .stat-lbl {
                        font-size: 0.68rem;
                        line-height: 1.3;
                    }
                    .features-grid {
                        grid-template-columns: 1fr;
                        gap: 0.75rem;
                    }
                    .feature-card {
                        padding: 1.25rem 1rem !important;
                    }
                    .feature-icon {
                        width: 40px;
                        height: 40px;
                        margin-bottom: 0.6rem;
                    }
                    .feature-card h3 {
                        font-size: 1.05rem !important;
                    }
                    .quote-band {
                        padding: 2rem 0;
                    }
                    .quote-text {
                        font-size: 1.1rem;
                        margin-bottom: 0.75rem;
                    }
                    .highlights-grid {
                        grid-template-columns: 1fr;
                    }
                    .section-header {
                        margin-bottom: 1.5rem;
                    }
                    .section-title {
                        font-size: clamp(1.3rem, 5.5vw, 1.7rem) !important;
                        line-height: 1.3 !important;
                    }
                    .eyebrow {
                        font-size: 0.7rem;
                        padding: 0.3rem 0.8rem;
                    }
                    .cta-section {
                        padding: 1.25rem 0 !important;
                    }
                    .cta-card-luxury {
                        padding: 1.75rem 1rem !important;
                        border-radius: 16px !important;
                    }
                    .cta-title {
                        font-size: clamp(1.25rem, 5vw, 1.65rem) !important;
                        margin-top: 0.4rem !important;
                        margin-bottom: 0.4rem !important;
                        line-height: 1.25 !important;
                    }
                    .cta-card-luxury .section-desc {
                        font-size: 0.82rem !important;
                        line-height: 1.4 !important;
                        margin-bottom: 0.6rem !important;
                    }
                    .cta-card-luxury .mt-6 {
                        margin-top: 0.85rem !important;
                    }
                }

                /* â•â•â•â• HINDI SPECIFIC REFINEMENTS â•â•â•â• */
                :global([data-lang="hi"]) .hero-eyebrow-badge {
                    letter-spacing: normal !important;
                    font-size: 0.82rem;
                    font-weight: 600;
                }

                :global([data-lang="hi"]) .hero-line1 {
                    font-family: var(--font-martel), 'Martel', serif !important;
                    line-height: 1.38 !important;
                    letter-spacing: normal !important;
                    padding-top: 0.12em;
                    padding-bottom: 0.08em;
                }

                :global([data-lang="hi"]) .hero-line2 {
                    font-family: var(--font-martel), 'Martel', serif !important;
                    font-style: normal !important;
                    line-height: 1.38 !important;
                    letter-spacing: normal !important;
                    padding-bottom: 0.08em;
                }

                :global([data-lang="hi"]) .hero-sub {
                    font-family: var(--font-martel), 'Martel', sans-serif !important;
                    font-weight: 500 !important;
                    line-height: 1.85 !important;
                    font-size: clamp(0.95rem, 2vw, 1.15rem);
                }

                :global([data-lang="hi"]) .btn-gold-luxury,
                :global([data-lang="hi"]) .btn-outline-luxury {
                    letter-spacing: normal !important;
                    text-transform: none !important;
                    font-family: var(--font-martel), 'Martel', sans-serif !important;
                    font-weight: 700 !important;
                    font-size: 0.92rem !important;
                }

                :global([data-lang="hi"]) .eyebrow,
                :global([data-lang="hi"]) .section-title {
                    letter-spacing: normal !important;
                    font-family: var(--font-martel), 'Martel', serif !important;
                    line-height: 1.4 !important;
                }
            `}</style>
        </div>
    );
}

function HighlightCard({ image, title, desc, delay, href = "/explore" }) {
    const { t } = useLanguage();
    return (
        <div className="highlight-card">
            <div className="card-image-wrapper">
                <Image src={image} alt={title} className="card-img" width={1200} height={800} style={{ objectFit: "cover" }}/>
                <div className="card-overlay"></div>
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link prefetch={false} href={href} className="explore-btn" onClick={() => triggerHaptic('light')}>
                    {t("highlights.explore")} <ArrowUpRight size={16} />
                </Link>
            </div>
        </div>
    );
}

function FeatureCard({ icon, title, desc, delay }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className="feature-card"
        >
            <div className="feature-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </motion.div>
    );
}




