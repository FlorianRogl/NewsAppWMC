import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import banner1Image from '../../assets/Fotolia_Banner 1_L.jpg';
import banner2Image from '../../assets/Fotolia_Banner 2_L.jpg';

const ServicesSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    return (
        <section ref={sectionRef} className="services-section">
            <style>{`
                .services-section {
                    background: #f8f9fa;
                    padding: 120px 0;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
                    position: relative;
                }

                .services-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 40px;
                }

                /* Header */
                .services-header {
                    margin-bottom: 80px;
                }

                .section-label {
                    font-size: 0.85rem;
                    font-weight: 400;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: #d97539;
                    margin-bottom: 1rem;
                }

                .section-title {
                    font-size: 3rem;
                    font-weight: 200;
                    color: #1e3767;
                    margin-bottom: 1.5rem;
                    letter-spacing: -0.02em;
                }

                .section-description {
                    font-size: 1.1rem;
                    color: #64748b;
                    line-height: 1.7;
                    max-width: 700px;
                    font-weight: 300;
                }

                /* Service Cards */
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 60px;
                    margin-bottom: 80px;
                }

                .service-card {
                    background: #ffffff;
                    border: 1px solid #e5e7eb;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                }

                .service-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(30, 55, 103, 0.08);
                    border-color: #d97539;
                }

                .service-image-container {
                    width: 100%;
                    height: 300px;
                    overflow: hidden;
                    position: relative;
                }

                .service-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .service-card:hover .service-image {
                    transform: scale(1.05);
                }

                .service-content {
                    padding: 40px;
                }

                .service-title {
                    font-size: 1.5rem;
                    font-weight: 300;
                    color: #1e3767;
                    margin-bottom: 1rem;
                    letter-spacing: -0.01em;
                }

                .service-description {
                    font-size: 1rem;
                    color: #64748b;
                    line-height: 1.7;
                    margin-bottom: 2rem;
                    font-weight: 300;
                }

                .service-features {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .service-feature {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 0.95rem;
                    color: #1e3767;
                    font-weight: 400;
                }

                .feature-dot {
                    width: 6px;
                    height: 6px;
                    background: #d97539;
                    border-radius: 50%;
                    flex-shrink: 0;
                }

                /* CTA Section */
                .cta-section {
                    background: #1e3767;
                    padding: 60px;
                    position: relative;
                    overflow: hidden;
                }

                .cta-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: -200px;
                    width: 400px;
                    height: 400px;
                    background: #d97539;
                    opacity: 0.05;
                    border-radius: 50%;
                }

                .cta-content {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .cta-text {
                    flex: 1;
                    max-width: 600px;
                }

                .cta-title {
                    font-size: 2rem;
                    font-weight: 200;
                    color: #ffffff;
                    margin-bottom: 1rem;
                    letter-spacing: -0.01em;
                }

                .cta-description {
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.8);
                    line-height: 1.6;
                    font-weight: 300;
                }

                .cta-buttons {
                    display: flex;
                    gap: 20px;
                }

                .cta-button {
                    padding: 14px 32px;
                    font-size: 0.95rem;
                    font-weight: 400;
                    letter-spacing: 0.05em;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    border: none;
                }

                .cta-button-primary {
                    background: #ffffff;
                    color: #1e3767;
                }

                .cta-button-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                }

                .cta-button-secondary {
                    background: transparent;
                    color: #ffffff;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }

                .cta-button-secondary:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: rgba(255, 255, 255, 0.5);
                }

                /* Responsive */
                @media (max-width: 1024px) {
                    .services-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }

                    .cta-content {
                        flex-direction: column;
                        gap: 40px;
                        text-align: center;
                    }

                    .cta-buttons {
                        justify-content: center;
                    }
                }

                @media (max-width: 768px) {
                    .services-section {
                        padding: 80px 0;
                    }

                    .services-container {
                        padding: 0 20px;
                    }

                    .section-title {
                        font-size: 2rem;
                    }

                    .service-content {
                        padding: 30px;
                    }

                    .cta-section {
                        padding: 40px 30px;
                    }

                    .cta-title {
                        font-size: 1.5rem;
                    }

                    .cta-buttons {
                        flex-direction: column;
                        width: 100%;
                    }

                    .cta-button {
                        width: 100%;
                        text-align: center;
                    }
                }

                @media (max-width: 480px) {
                    .services-header {
                        margin-bottom: 60px;
                    }

                    .service-image-container {
                        height: 200px;
                    }

                    .service-content {
                        padding: 25px;
                    }

                    .service-title {
                        font-size: 1.25rem;
                    }
                }
            `}</style>

            <div className="services-container">
                {/* Header */}
                <motion.div
                    className="services-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">Unsere Leistungen</div>
                    <h2 className="section-title">Technische Exzellenz für Ihre Projekte</h2>
                    <p className="section-description">
                        Über 20 Jahre Expertise in Industrieplanung und Projektmanagement.
                        Von der Konzeption bis zur Umsetzung – Ihr vertrauensvoller Partner
                        für komplexe technische Herausforderungen.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="services-grid">
                    <motion.div
                        className="service-card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="service-image-container">
                            <img
                                src={banner1Image}
                                alt="Technische Planung & Engineering"
                                className="service-image"
                            />
                        </div>
                        <div className="service-content">
                            <h3 className="service-title">Technische Planung & Engineering</h3>
                            <p className="service-description">
                                Umfassende Planungsleistungen von der Konzeptentwicklung bis zur
                                Detail- und Ausführungsplanung für komplexe Industrieanlagen.
                            </p>
                            <div className="service-features">
                                <div className="service-feature">
                                    <span className="feature-dot"></span>
                                    <span>Anlagenkonzeption & Design</span>
                                </div>
                                <div className="service-feature">
                                    <span className="feature-dot"></span>
                                    <span>3D-Modellierung & Simulation</span>
                                </div>
                                <div className="service-feature">
                                    <span className="feature-dot"></span>
                                    <span>Verfahrenstechnik</span>
                                </div>
                                <div className="service-feature">
                                    <span className="feature-dot"></span>
                                    <span>Genehmigungsplanung</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="service-card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="service-image-container">
                            <img
                                src={banner2Image}
                                alt="Projektmanagement & Koordination"
                                className="service-image"
                            />
                        </div>
                        <div className="service-content">
                            <h3 className="service-title">Projektmanagement & Koordination</h3>
                            <p className="service-description">
                                Professionelles Projektmanagement nach internationalen Standards
                                für die erfolgreiche Umsetzung komplexer Industrieprojekte.
                            </p>
                            <div className="service-features">
                                <div className="service-feature">
                                    <span className="feature-dot"></span>
                                    <span>Projektsteuerung & -kontrolle</span>
                                </div>
                                <div className="service-feature">
                                    <span className="feature-dot"></span>
                                    <span>Risikomanagement</span>
                                </div>
                                <div className="service-feature">
                                    <span className="feature-dot"></span>
                                    <span>Qualitätssicherung</span>
                                </div>
                                <div className="service-feature">
                                    <span className="feature-dot"></span>
                                    <span>Gewerkekoordination</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Section */}
                <motion.div
                    className="cta-section"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className="cta-content">
                        <div className="cta-text">
                            <h3 className="cta-title">Starten Sie Ihr nächstes Projekt mit uns</h3>
                            <p className="cta-description">
                                Nutzen Sie unsere langjährige Erfahrung und bewährten Methoden für den
                                Erfolg Ihres Projekts. Gemeinsam entwickeln wir die optimale Lösung.
                            </p>
                        </div>
                        <div className="cta-buttons">
                            <a href="/kontakt" className="cta-button cta-button-primary">
                                Kontakt aufnehmen
                            </a>
                            <a href="/leistungen" className="cta-button cta-button-secondary">
                                Mehr erfahren
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;