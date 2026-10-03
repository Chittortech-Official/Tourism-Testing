"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function StaysClient() {
    return (
        <div className="stays-page-container">
            <div className="fixed-bg"></div>
            <div className="bg-overlay"></div>

            <header className="page-header" style={{ paddingTop: '120px', paddingBottom: '60px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--ff-display)', color: '#FFF' }}
                >
                    Premium Stays & Heritage Hotels
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}
                >
                    Find the perfect accommodation near Chittorgarh Fort. Experience royal heritage, modern luxury, and breathtaking views.
                </motion.p>
            </header>

            <section className="stays-content" style={{ position: 'relative', zIndex: 10, padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ 
                    background: 'rgba(20, 14, 8, 0.6)', 
                    backdropFilter: 'blur(10px)',
                    padding: '40px', 
                    borderRadius: '20px', 
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    textAlign: 'center'
                }}>
                    <h2 style={{ fontSize: '2rem', fontFamily: 'var(--ff-display)', color: '#D4AF37', marginBottom: '1rem' }}>Heritage Properties</h2>
                    <p style={{ color: '#FAF7F2', lineHeight: '1.6' }}>
                        From Kesarbagh Palace to Hotel Pride of Chittor, immerse yourself in the rich culture and hospitality of Mewar.
                        Detailed hotel listings and booking integrations are currently being updated to bring you the best experience.
                    </p>
                </div>
            </section>
        </div>
    );
}
