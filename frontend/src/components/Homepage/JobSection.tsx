import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../css/JobSection.module.css';
import planungImage from '../../assets/Fotolia Planung M.jpg';

const JobSection: React.FC = () => {
    const navigate = useNavigate();
    const sectionRef = useRef<HTMLElement>(null);
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    const [isContentVisible, setIsContentVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Trigger header animations first
                    setTimeout(() => setIsHeaderVisible(true), 100);
                    // Then content animations
                    setTimeout(() => setIsContentVisible(true), 500); // Reduziert von 800ms
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px' // Triggert früher
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handleKarriereClick = () => {
        navigate('/karriere');
    };

    return (
        <>
            <style>{`
                .orange-cta-button {
                    background: linear-gradient(135deg, #d97539 0%, #e8834a 100%) !important;
                    color: white !important;
                    border: none !important;
                    padding: 16px 32px !important;
                    font-size: 1.1rem !important;
                    font-weight: 600 !important;
                    border-radius: 12px !important;
                    cursor: pointer !important;
                    position: relative !important;
                    overflow: hidden !important;
                    box-shadow: 0 4px 15px rgba(217, 117, 57, 0.3) !important;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    transform: translateY(0) !important;
                    opacity: 0 !important;
                }

                .orange-cta-button::before {
                    content: '' !important;
                    position: absolute !important;
                    top: 0 !important;
                    left: -100% !important;
                    width: 100% !important;
                    height: 100% !important;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent) !important;
                    transition: left 0.5s !important;
                }

                .orange-cta-button:hover {
                    transform: translateY(-2px) !important;
                    box-shadow: 0 8px 25px rgba(217, 117, 57, 0.4) !important;
                    background: linear-gradient(135deg, #e8834a 0%, #f0925a 100%) !important;
                }

                .orange-cta-button:hover::before {
                    left: 100% !important;
                }

                .orange-cta-button:active {
                    transform: translateY(0) !important;
                    box-shadow: 0 4px 15px rgba(217, 117, 57, 0.3) !important;
                    transition: all 0.1s ease !important;
                }

                .button-visible {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                    transition: opacity 0.6s ease 0.8s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s !important;
                }

                .button-entrance {
                    opacity: 0 !important;
                    transform: translateY(20px) !important;
                }
            `}</style>

            <section ref={sectionRef} className={styles.jobSection}>
                <div className={styles.container}>
                    {/* Header Section */}
                    <div className={`${styles.header} ${isHeaderVisible ? styles.headerVisible : ''}`}>
                        <h2 className={styles.title}>Karriere bei PROMAX</h2>
                        <div className={styles.titleUnderline}></div>
                        <p className={styles.subtitle}>
                            Werden Sie Teil unseres erfahrenen Teams im Industrieanlagenbau
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className={styles.content}>
                        <div className={`${styles.textContent} ${isContentVisible ? styles.slideFromLeft : ''} ${isContentVisible ? styles.contentVisible : ''}`}>
                            <p className={styles.description}>
                                Bei PROMAX Project Management sind wir immer auf der Suche nach
                                talentierten Fachkräften, die unsere Leidenschaft für exzellentes
                                Projektmanagement im Industrieanlagenbau teilen. Wir bieten Ihnen
                                die Möglichkeit, an spannenden Projekten mitzuwirken und Ihre
                                Expertise in den Bereichen Projektierung, Planung und Site Services
                                einzusetzen.
                            </p>
                            <div className={styles.highlights}>
                                <div
                                    className={`${styles.highlight} ${isContentVisible ? styles.fadeInUp : ''} ${isContentVisible ? styles.highlightVisible : ''}`}
                                    style={{ transitionDelay: '0.2s' }}
                                >
                                    <span className={styles.highlightIcon}>✓</span>
                                    <span>Innovative Projekte im Industrieanlagenbau</span>
                                </div>
                                <div
                                    className={`${styles.highlight} ${isContentVisible ? styles.fadeInUp : ''} ${isContentVisible ? styles.highlightVisible : ''}`}
                                    style={{ transitionDelay: '0.4s' }}
                                >
                                    <span className={styles.highlightIcon}>✓</span>
                                    <span>Erfahrenes und dynamisches Team</span>
                                </div>
                                <div
                                    className={`${styles.highlight} ${isContentVisible ? styles.fadeInUp : ''} ${isContentVisible ? styles.highlightVisible : ''}`}
                                    style={{ transitionDelay: '0.6s' }}
                                >
                                    <span className={styles.highlightIcon}>✓</span>
                                    <span>Vielfältige Entwicklungsmöglichkeiten</span>
                                </div>
                            </div>
                            <button
                                className={`orange-cta-button ${isContentVisible ? 'button-visible' : 'button-entrance'}`}
                                onClick={handleKarriereClick}
                                aria-label="Zu den Karrieremöglichkeiten"
                            >
                                Entdecken Sie Ihre Karrieremöglichkeiten
                            </button>
                        </div>
                        <div className={`${styles.imageContent} ${isContentVisible ? styles.slideFromRight : ''} ${isContentVisible ? styles.contentVisible : ''}`}>
                            <img
                                src={planungImage}
                                alt="Projektplanung bei PROMAX"
                                className={styles.image}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default JobSection;