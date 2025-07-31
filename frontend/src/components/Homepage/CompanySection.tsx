import React, { useEffect, useRef, useState } from 'react';
import styles from '../../css/CompanySection.module.css';
import companImage from '../../assets/Fotolia Pharma S.jpg';

const CompanySection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 1, // Trigger when 70% of section is visible
                rootMargin: '0px 0px -100px 0px' // Smaller margin since we need more visibility
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
        <section ref={sectionRef} className={styles.companySection}>
            <div className={styles.container}>
                {/* Header */}


                {/* Main Content */}
                <div className={styles.content}>
                    {/* Left Side - Company Description */}
                    <div className={`${styles.textContent} ${isVisible ? styles.textVisible : ''}`}>
                        <h3 className={styles.subtitle}>
                            Ingenieurbüro für Industrieanlagenbau und Maschinenbau
                        </h3>
                        <p className={styles.description}>
                            Ihr Partner für die Planung und statische Berechnung von Rohrleitungen,
                            Halterungen und Stahlbau im Industrieanlagenbau.
                        </p>
                        <p className={styles.mission}>
                            <strong>Wir kümmern uns um Projekte!</strong> PROMAX Project Management GesmbH
                            steht für Know-how und Leidenschaft in der Projektrealisierung. Mit jahrelanger
                            Erfahrung in der Branche entwickeln wir maßgeschneiderte Lösungen für komplexe
                            industrielle Herausforderungen.
                        </p>
                        <p className={styles.expertise}>
                            Unser erfahrenes Team begleitet Sie von der ersten Konzeptidee bis zur
                            erfolgreichen Umsetzung. Vertrauen Sie auf unsere Expertise für
                            Ihr nächstes Projekt.
                        </p>
                    </div>

                    {/* Right Side - Company Image */}
                    <div className={`${styles.imageContainer} ${isVisible ? styles.imageVisible : ''}`}>
                        <img
                            src={companImage}
                            alt="PROMAX Industrieanlagenbau"
                            className={styles.companyImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanySection;