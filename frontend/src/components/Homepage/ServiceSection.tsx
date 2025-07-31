import React, { useEffect, useRef, useState } from 'react';
import styles from '../../css/ServiceSection.module.css';
import planungImage from '../../assets/Fotolia Planung M.jpg';
import pharmaImage from '../../assets/Fotolia Pharma S.jpg';
import ordnerImage from '../../assets/Fotolia Ordner S.jpg';
import puzzleImage from '../../assets/Fotolia Puzzle S.jpg';
import balingImage from '../../assets/Fotolia baling line S.jpg';

const ServicesSection = () => {
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
                threshold: 0.1, // Trigger when 10% of section is visible
                rootMargin: '0px 0px -100px 0px' // Trigger 100px before entering viewport
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

    const services = [
        {
            id: 1,
            title: "Projektierung",
            description: "Professionelle Projektentwicklung von der ersten Idee bis zur detaillierten Ausarbeitung. Wir analysieren Ihre Anforderungen und entwickeln maßgeschneiderte Lösungskonzepte.",
            image: planungImage,
            direction: 'left'
        },
        {
            id: 2,
            title: "Projektmanagement",
            description: "Umfassende Projektsteuerung und -koordination für termingerechte und budgetconforme Umsetzung. Professionelle Abwicklung komplexer Industrieprojekte.",
            image: pharmaImage,
            direction: 'center'
        },
        {
            id: 3,
            title: "Planung",
            description: "Detaillierte technische Planung und Konstruktion von Industrieanlagen. Von der Konzeptplanung bis zur ausführungsreifen Dokumentation.",
            image: ordnerImage,
            direction: 'right'
        },
        {
            id: 4,
            title: "Site Services",
            description: "Vor-Ort-Betreuung und technische Unterstützung während der Bauphase. Bauüberwachung, Qualitätskontrolle und Inbetriebnahme-Support.",
            image: puzzleImage,
            direction: 'left'
        },
        {
            id: 5,
            title: "Organisationsberatung",
            description: "Optimierung von Betriebsabläufen und Organisationsstrukturen. Effizienzsteigerung durch durchdachte Prozessanalyse und -verbesserung.",
            image: balingImage,
            direction: 'right'
        }
    ];

    return (
        <section ref={sectionRef} className={styles.servicesSection}>
            <div className={styles.container}>
                {/* Header */}
                <div className={`${styles.header} ${isVisible ? styles.headerVisible : ''}`}>
                    <h2 className={styles.title}>Unsere Leistungen</h2>
                    <div className={styles.titleUnderline}></div>
                    <p className={styles.subtitle}>
                        Ihr Partner für komplette Projektabwicklung im Industrieanlagenbau
                    </p>
                </div>

                {/* Services Grid */}
                <div className={styles.servicesGrid}>
                    {/* First Row - 3 Cards */}
                    <div className={styles.firstRow}>
                        {services.slice(0, 3).map((service, index) => (
                            <div key={service.id}
                                 className={`${styles.serviceCard} ${styles[`slideFrom${service.direction.charAt(0).toUpperCase() + service.direction.slice(1)}`]} ${isVisible ? styles.cardVisible : ''}`}
                                 style={{ animationDelay: isVisible ? `${0.2 + index * 0.2}s` : '0s' }}>
                                <div className={styles.cardImage}>
                                    <img src={service.image} alt={service.title} />
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.cardNumber}>0{service.id}</div>
                                    <h3 className={styles.cardTitle}>{service.title}</h3>
                                    <p className={styles.cardDescription}>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Second Row - 2 Cards Centered */}
                    <div className={styles.secondRow}>
                        {services.slice(3, 5).map((service, index) => (
                            <div key={service.id}
                                 className={`${styles.serviceCard} ${styles[`slideFrom${service.direction.charAt(0).toUpperCase() + service.direction.slice(1)}`]} ${isVisible ? styles.cardVisible : ''}`}
                                 style={{ animationDelay: isVisible ? `${0.8 + index * 0.2}s` : '0s' }}>
                                <div className={styles.cardImage}>
                                    <img src={service.image} alt={service.title} />
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.cardNumber}>0{service.id}</div>
                                    <h3 className={styles.cardTitle}>{service.title}</h3>
                                    <p className={styles.cardDescription}>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;