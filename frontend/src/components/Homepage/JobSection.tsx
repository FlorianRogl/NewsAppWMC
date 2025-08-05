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
                            className={`${styles.ctaButton} ${isContentVisible ? styles.bounceIn : ''} ${isContentVisible ? styles.buttonVisible : ''}`}
                            onClick={handleKarriereClick}
                            style={{ transitionDelay: '0.8s' }}
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
    );
};

export default JobSection;