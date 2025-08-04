import { useEffect, useRef, useState } from 'react';
import styles from '../../css/CompanySection.module.css';
import planungImage from '../../assets/Fotolia Planung M.jpg';

const CompanySection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px 0px 0px'
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

    return (
        <section ref={sectionRef} className={styles.heroSection}>
            {/* Subtle Background Gradient */}
            <div className={styles.backgroundGradient} />

            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Left Side - Hero Content */}
                    <div className={`${styles.textContent} ${isVisible ? styles.textVisible : ''}`}>
                        {/* Professional Badge */}
                        <div className={styles.badge}>
                            <span>Industrieanlagenbau & Projektmanagement</span>
                        </div>

                        {/* Hero Title */}
                        <h1 className={styles.heroTitle}>
                            <span className={styles.titleMain}>
                                PROMAX
                            </span>
                            <span className={styles.titleSub}>
                                Industrieanlagenbau mit Expertise
                            </span>
                        </h1>

                        {/* Description */}
                        <div className={styles.heroDescription}>
                            <p>
                                Investitionsentscheidungen bedürfen umsetzbarer Basisplanungen,
                                realistischer Terminpläne und belastbarer Projektbudgets. PROMAX steht für
                                professionelle Lösungen im Industrieanlagenbau.
                            </p>
                        </div>

                        <p className={styles.heroSubtext}>
                            Unsere Kernkompetenzen umfassen Projektierung, Projektmanagement, Planung,
                            Site Services und Organisationsberatung. Mit jahrelanger Erfahrung in den
                            Branchen Chemie, Energie & Umwelt, Pharma und Papier & Zellstoff.
                        </p>

                        {/* Professional Stats */}
                        <div className={styles.statsGrid}>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}>15+</div>
                                <div className={styles.statLabel}>Jahre Erfahrung</div>
                            </div>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}>ISO</div>
                                <div className={styles.statLabel}>9001:2015 zertifiziert</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Professional Image */}
                    <div className={`${styles.imageContainer} ${isVisible ? styles.imageVisible : ''}`}>
                        <div className={styles.imageWrapper}>
                            <img
                                src={planungImage}
                                alt="PROMAX Industrieanlagenbau - Professionelle Planung"
                                className={styles.heroImage}
                            />
                            <div className={styles.imageOverlay} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanySection;