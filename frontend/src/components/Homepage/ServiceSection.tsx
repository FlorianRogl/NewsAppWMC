import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import banner1Image from '../../assets/Fotolia_Banner 1_L.jpg';
import banner2Image from '../../assets/Fotolia_Banner 2_L.jpg';

const ServicesSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const navigate = useNavigate(); // Add this hook

    useEffect(() => {
        // Fallback: Set visible after a short delay if intersection observer doesn't trigger
        const fallbackTimer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    clearTimeout(fallbackTimer);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px 0px',
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
            setIsTablet(window.innerWidth <= 930 && window.innerWidth > 480); // Geändert: ab 930px nebeneinander
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            const currentRef = sectionRef.current;
            if (currentRef) {
                observer.unobserve(currentRef);
            }
            window.removeEventListener('resize', handleResize);
            clearTimeout(fallbackTimer);
        };
    }, []);

    const getResponsiveStyles = (
        baseStyles: React.CSSProperties,
        mobileStyles: React.CSSProperties = {},
        tabletStyles: React.CSSProperties = {}
    ): React.CSSProperties => {
        if (isMobile) {
            return { ...baseStyles, ...mobileStyles };
        }
        if (isTablet) {
            return { ...baseStyles, ...tabletStyles };
        }
        return baseStyles;
    };

    // Add navigation function
    const handleServiceClick = (serviceId: number) => {
        navigate(`/leistungen#service-${serviceId}`);
    };

    return (
        <section ref={sectionRef} style={getResponsiveStyles(styles.servicesSection, styles.servicesSectionMobile, styles.servicesSectionTablet)}>
            <div style={getResponsiveStyles(styles.container, styles.containerMobile, styles.containerTablet)}>
                {/* Hero Section */}
                <div style={{
                    ...getResponsiveStyles(styles.heroSection, styles.heroSectionMobile, styles.heroSectionTablet),
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
                }}>
                    <div style={styles.heroContent}>
                        <h2 style={styles.mainTitle}>Technische Exzellenz für Ihre Projekte</h2>
                        <p style={styles.heroDescription}>
                            Über 20 Jahre Expertise in Industrieplanung und Projektmanagement.
                            Von der Konzeption bis zur Umsetzung – Ihr vertrauensvoller Partner
                            für komplexe technische Herausforderungen.
                        </p>
                    </div>
                </div>

                {/* Services Cards Grid */}
                <div style={getResponsiveStyles(styles.servicesGrid, styles.servicesGridMobile, styles.servicesGridTablet)}>
                    {/* Planning Service Card - Now clickable */}
                    <div
                        style={{
                            ...getResponsiveStyles(styles.serviceCard, styles.serviceCardMobile),
                            ...styles.planningCard,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                            transitionDelay: '0.2s'
                        }}
                        onClick={() => handleServiceClick(1)} // Add click handler for service 1
                        onMouseEnter={(e) => {
                            const target = e.currentTarget as HTMLDivElement;
                            target.style.transform = 'translateY(-8px) scale(1.02)';
                            target.style.boxShadow = '0 12px 30px rgba(30, 55, 99, 0.12)';
                        }}
                        onMouseLeave={(e) => {
                            const target = e.currentTarget as HTMLDivElement;
                            target.style.transform = isVisible ? 'translateY(0) scale(1)' : 'translateY(40px)';
                            target.style.boxShadow = '0 8px 25px rgba(30, 55, 99, 0.08)';
                        }}
                    >
                        <div style={styles.cardImageSection}>
                            <img
                                src={banner1Image}
                                alt="Technische Planung & Engineering"
                                style={getResponsiveStyles(styles.cardImage, styles.cardImageMobile, styles.cardImageTablet)}
                            />
                        </div>

                        <div style={getResponsiveStyles(styles.cardContent, styles.cardContentMobile, styles.cardContentTablet)}>
                            <h3 style={getResponsiveStyles(styles.cardTitle, styles.cardTitleMobile)}>Technische Planung & Engineering</h3>
                            <p style={getResponsiveStyles(styles.cardDescription, styles.cardDescriptionMobile)}>
                                Umfassende Planungsleistungen von der Konzeptentwicklung bis zur
                                Detail- und Ausführungsplanung für komplexe Industrieanlagen mit
                                modernsten Methoden und Tools.
                            </p>

                            <div style={styles.featuresList}>
                                <div style={getResponsiveStyles(styles.featureItem, styles.featureItemMobile)}>
                                    <div style={getResponsiveStyles(styles.featureIcon, styles.featureIconMobile)}>✓</div>
                                    <span>Anlagenkonzeption & Design</span>
                                </div>
                                <div style={getResponsiveStyles(styles.featureItem, styles.featureItemMobile)}>
                                    <div style={getResponsiveStyles(styles.featureIcon, styles.featureIconMobile)}>✓</div>
                                    <span>3D-Modellierung & Simulation</span>
                                </div>
                                <div style={getResponsiveStyles(styles.featureItem, styles.featureItemMobile)}>
                                    <div style={getResponsiveStyles(styles.featureIcon, styles.featureIconMobile)}>✓</div>
                                    <span>Verfahrenstechnik</span>
                                </div>
                                <div style={getResponsiveStyles(styles.featureItem, styles.featureItemMobile)}>
                                    <div style={getResponsiveStyles(styles.featureIcon, styles.featureIconMobile)}>✓</div>
                                    <span>Genehmigungsplanung</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Management Card - Now clickable */}
                    <div
                        style={{
                            ...getResponsiveStyles(styles.serviceCard, styles.serviceCardMobile),
                            ...styles.projectCard,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                            transitionDelay: '0.4s'
                        }}
                        onClick={() => handleServiceClick(2)} // Add click handler for service 2
                        onMouseEnter={(e) => {
                            const target = e.currentTarget as HTMLDivElement;
                            target.style.transform = 'translateY(-8px) scale(1.02)';
                            target.style.boxShadow = '0 12px 30px rgba(217, 83, 57, 0.12)';
                        }}
                        onMouseLeave={(e) => {
                            const target = e.currentTarget as HTMLDivElement;
                            target.style.transform = isVisible ? 'translateY(0) scale(1)' : 'translateY(40px)';
                            target.style.boxShadow = '0 8px 25px rgba(217, 83, 57, 0.08)';
                        }}
                    >
                        <div style={styles.cardImageSection}>
                            <img
                                src={banner2Image}
                                alt="Projektmanagement & Koordination"
                                style={getResponsiveStyles(styles.cardImage, styles.cardImageMobile, styles.cardImageTablet)}
                            />
                        </div>

                        <div style={getResponsiveStyles(styles.cardContent, styles.cardContentMobile, styles.cardContentTablet)}>
                            <h3 style={getResponsiveStyles(styles.cardTitle, styles.cardTitleMobile)}>Projektmanagement & Koordination</h3>
                            <p style={getResponsiveStyles(styles.cardDescription, styles.cardDescriptionMobile)}>
                                Professionelles Projektmanagement nach internationalen Standards
                                für die erfolgreiche Umsetzung komplexer Industrieprojekte mit
                                bewährten Methoden.
                            </p>

                            <div style={styles.featuresList}>
                                <div style={getResponsiveStyles(styles.featureItem, styles.featureItemMobile)}>
                                    <div style={getResponsiveStyles(styles.featureIcon, styles.featureIconMobile)}>✓</div>
                                    <span>Projektsteuerung & -kontrolle</span>
                                </div>
                                <div style={getResponsiveStyles(styles.featureItem, styles.featureItemMobile)}>
                                    <div style={getResponsiveStyles(styles.featureIcon, styles.featureIconMobile)}>✓</div>
                                    <span>Risikomanagement</span>
                                </div>
                                <div style={getResponsiveStyles(styles.featureItem, styles.featureItemMobile)}>
                                    <div style={getResponsiveStyles(styles.featureIcon, styles.featureIconMobile)}>✓</div>
                                    <span>Qualitätssicherung</span>
                                </div>
                                <div style={getResponsiveStyles(styles.featureItem, styles.featureItemMobile)}>
                                    <div style={getResponsiveStyles(styles.featureIcon, styles.featureIconMobile)}>✓</div>
                                    <span>Gewerkekoordination</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced CTA Section */}
                <div style={{
                    ...getResponsiveStyles(styles.ctaSection, styles.ctaSectionMobile, styles.ctaSectionTablet),
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                    transitionDelay: '0.6s'
                }}>
                    <div style={getResponsiveStyles(styles.ctaContent, styles.ctaContentMobile, styles.ctaContentTablet)}>
                        <div style={getResponsiveStyles(styles.ctaTextSection, styles.ctaTextSectionMobile, styles.ctaTextSectionTablet)}>
                            <h3 style={styles.ctaTitle}>Starten Sie Ihr nächstes Projekt mit uns</h3>
                            <p style={getResponsiveStyles(styles.ctaDescription, styles.ctaDescriptionMobile)}>
                                Nutzen Sie unsere langjährige Erfahrung und bewährten Methoden für den
                                Erfolg Ihres Projekts. Gemeinsam entwickeln wir die optimale Lösung.
                            </p>
                            <div style={getResponsiveStyles(styles.ctaFeatures, styles.ctaFeaturesMobile, styles.ctaFeaturesTablet)}>
                                <div style={getResponsiveStyles(styles.ctaFeature, styles.ctaFeatureMobile, styles.ctaFeatureTablet)}>
                                    <div style={getResponsiveStyles(styles.ctaFeatureIcon, styles.ctaFeatureIconMobile)}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="20,6 9,17 4,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <span>Kostenlose Erstberatung</span>
                                </div>
                                <div style={getResponsiveStyles(styles.ctaFeature, styles.ctaFeatureMobile, styles.ctaFeatureTablet)}>
                                    <div style={getResponsiveStyles(styles.ctaFeatureIcon, styles.ctaFeatureIconMobile)}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="20,6 9,17 4,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <span>Maßgeschneiderte Lösungen</span>
                                </div>
                                <div style={getResponsiveStyles(styles.ctaFeature, styles.ctaFeatureMobile, styles.ctaFeatureTablet)}>
                                    <div style={getResponsiveStyles(styles.ctaFeatureIcon, styles.ctaFeatureIconMobile)}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="20,6 9,17 4,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <span>Komplettes Leistungsspektrum</span>
                                </div>
                            </div>
                        </div>

                        <div style={getResponsiveStyles(styles.ctaActions, styles.ctaActionsMobile, styles.ctaActionsTablet)}>
                            <a
                                href="/kontakt"
                                style={getResponsiveStyles(styles.primaryButton, styles.primaryButtonMobile, styles.primaryButtonTablet)}
                                onMouseEnter={(e) => {
                                    const target = e.currentTarget as HTMLAnchorElement;
                                    target.style.background = 'linear-gradient(135deg, #1a2f5a 0%, #1e3763 100%)';
                                    target.style.transform = 'translateY(-2px)';
                                    target.style.boxShadow = '0 8px 25px rgba(30, 55, 99, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    const target = e.currentTarget as HTMLAnchorElement;
                                    target.style.background = 'linear-gradient(135deg, #1e3763 0%, #2a4a7a 100%)';
                                    target.style.transform = 'translateY(0)';
                                    target.style.boxShadow = '0 4px 15px rgba(30, 55, 99, 0.2)';
                                }}
                            >
                                Jetzt Kontakt aufnehmen
                            </a>
                            <a
                                href="/leistungen"
                                style={getResponsiveStyles(styles.secondaryButton, styles.secondaryButtonMobile, styles.secondaryButtonTablet)}
                                onMouseEnter={(e) => {
                                    const target = e.currentTarget as HTMLAnchorElement;
                                    target.style.background = 'linear-gradient(135deg, #c76632 0%, #d97539 100%)';
                                    target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    const target = e.currentTarget as HTMLAnchorElement;
                                    target.style.background = 'linear-gradient(135deg, #d97539 0%, #e8864a 100%)';
                                    target.style.transform = 'translateY(0)';
                                }}
                            >
                                Leistungen entdecken
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    // Base styles
    servicesSection: {
        background: '#f5f5f7',
        padding: '8rem 0',
        fontFamily: "'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif",
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box',
        overflowX: 'hidden',
    },
    servicesSectionTablet: {
        padding: '6rem 0',
    },
    servicesSectionMobile: {
        padding: '4rem 0',
    },

    container: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        width: '100%',
        boxSizing: 'border-box',
    },
    containerTablet: {
        padding: '0 1rem',
    },
    containerMobile: {
        padding: '0 0.75rem',
    },

    heroSection: {
        textAlign: 'center',
        marginBottom: '6rem',
        transition: 'all 0.8s ease',
    },
    heroSectionTablet: {
        marginBottom: '4rem',
    },
    heroSectionMobile: {
        marginBottom: '3rem',
    },

    heroContent: {
        maxWidth: '900px',
        margin: '0 auto',
        width: '100%',
    },

    mainTitle: {
        fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
        fontWeight: '300',
        color: '#1e3763',
        marginBottom: '1.5rem',
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
        background: 'linear-gradient(135deg, #1e3763 0%, #2a4a7a 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    },

    heroDescription: {
        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
        color: '#9ba8b3',
        lineHeight: 1.7,
        fontWeight: '300',
        marginBottom: '3rem',
    },

    servicesGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        marginBottom: '6rem',
        width: '100%',
    },
    servicesGridTablet: {
        gridTemplateColumns: '1fr', // Eine Spalte bis 930px
        gap: '2rem',
        marginBottom: '4rem',
    },
    servicesGridMobile: {
        gap: '1.5rem',
        marginBottom: '3rem',
        gridTemplateColumns: '1fr', // Mobile: Nur eine Spalte
    },

    serviceCard: {
        background: '#ffffff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 8px 25px rgba(30, 55, 99, 0.08)',
        border: '1px solid rgba(155, 168, 179, 0.15)',
        transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        position: 'relative',
        cursor: 'pointer',
        minHeight: '550px',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
    },
    serviceCardMobile: {
        minHeight: 'auto',
        borderRadius: '6px',
    },

    planningCard: {
        background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
    },

    projectCard: {
        background: 'linear-gradient(145deg, #ffffff 0%, #fff9f7 100%)',
    },

    cardImageSection: {
        marginBottom: '1.5rem',
        width: '100%',
        overflow: 'hidden',
    },

    cardImage: {
        width: '100%',
        height: '280px',
        objectFit: 'cover',
        transition: 'transform 0.3s ease',
        display: 'block',
        maxWidth: '100%',
    },
    cardImageTablet: {
        height: '220px',
    },
    cardImageMobile: {
        height: '200px',
    },

    cardContent: {
        padding: '0 2rem 2rem 2rem',
        width: '100%',
        boxSizing: 'border-box',
    },
    cardContentTablet: {
        padding: '0 1.5rem 2rem 1.5rem',
    },
    cardContentMobile: {
        padding: '0 1.25rem 1.5rem 1.25rem',
    },

    cardTitle: {
        fontSize: '1.5rem',
        fontWeight: '300',
        color: '#1e3763',
        marginBottom: '1rem',
        lineHeight: 1.3,
    },
    cardTitleMobile: {
        fontSize: '1.3rem',
    },

    cardDescription: {
        fontSize: '1rem',
        color: '#9ba8b3',
        lineHeight: 1.7,
        marginBottom: '2rem',
        fontWeight: '300',
    },
    cardDescriptionMobile: {
        fontSize: '0.9rem',
        marginBottom: '1.5rem',
    },

    featuresList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
    },

    featureItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        fontSize: '0.9rem',
        color: '#1e3763',
        fontWeight: '400',
    },
    featureItemMobile: {
        fontSize: '0.85rem',
    },

    featureIcon: {
        width: '20px',
        height: '20px',
        background: 'linear-gradient(135deg, #d97539 0%, #e8864a 100%)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontSize: '0.7rem',
        fontWeight: '700',
        flexShrink: 0,
    },
    featureIconMobile: {
        width: '18px',
        height: '18px',
        fontSize: '0.6rem',
    },

    ctaSection: {
        background: 'linear-gradient(135deg, #1e3763 0%, #2a4a7a 100%)',
        borderRadius: '8px',
        padding: '4rem',
        color: '#ffffff',
        transition: 'all 0.8s ease',
        boxShadow: '0 20px 40px rgba(30, 55, 99, 0.15)',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box',
    },
    ctaSectionTablet: {
        padding: '3rem 2rem',
        borderRadius: '6px',
    },
    ctaSectionMobile: {
        padding: '2rem 1rem',
    },

    ctaContent: {
        display: 'flex',
        flexDirection: 'row',
        gap: '3rem',
        alignItems: 'flex-end',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    ctaContentTablet: {
        flexDirection: 'column',
        gap: '2rem',
        alignItems: 'center',
        textAlign: 'center',
    },
    ctaContentMobile: {
        flexDirection: 'column',
        gap: '2.5rem',
        textAlign: 'center',
        alignItems: 'center',
    },

    ctaTextSection: {
        flex: 2,
        width: '100%',
        minWidth: 0,
    },
    ctaTextSectionTablet: {
        flex: 1,
        textAlign: 'center',
    },
    ctaTextSectionMobile: {
        textAlign: 'center',
    },

    ctaTitle: {
        fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
        fontWeight: '300',
        marginBottom: '1rem',
        lineHeight: 1.3,
    },

    ctaDescription: {
        fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
        color: 'rgba(255, 255, 255, 0.9)',
        lineHeight: 1.7,
        marginBottom: '1.5rem',
        fontWeight: '300',
    },
    ctaDescriptionMobile: {
        fontSize: '1rem',
    },

    ctaFeatures: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
        marginTop: '0.5rem',
    },
    ctaFeaturesTablet: {
        alignItems: 'center',
        marginTop: '0.5rem',
    },
    ctaFeaturesMobile: {
        gap: '0.5rem',
        alignItems: 'center',
    },

    ctaFeature: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        fontSize: '0.9rem',
        color: 'rgba(255, 255, 255, 0.95)',
        fontWeight: '400',
    },
    ctaFeatureTablet: {
        justifyContent: 'center',
    },
    ctaFeatureMobile: {
        fontSize: '0.85rem',
        justifyContent: 'center',
    },

    ctaFeatureIcon: {
        width: '20px',
        height: '20px',
        background: 'rgba(217, 117, 57, 0.2)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#d97539',
        flexShrink: 0,
    },
    ctaFeatureIconMobile: {
        width: '18px',
        height: '18px',
    },

    ctaActions: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flex: 1,
        minWidth: '200px',
    },
    ctaActionsTablet: {
        flexDirection: 'row',
        width: '100%',
        gap: '1rem',
    },
    ctaActionsMobile: {
        flexDirection: 'column',
        width: '100%',
    },

    primaryButton: {
        background: 'linear-gradient(135deg, #1e3763 0%, #2a4a7a 100%)',
        color: '#ffffff',
        border: 'none',
        borderRadius: '8px',
        padding: '1rem 1.5rem',
        fontSize: '0.95rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(30, 55, 99, 0.2)',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '180px',
    },
    primaryButtonTablet: {
        flex: 1,
        minWidth: 'auto',
    },
    primaryButtonMobile: {
        width: '100%',
        padding: '0.875rem 1rem',
        fontSize: '0.9rem',
    },

    secondaryButton: {
        background: 'linear-gradient(135deg, #d97539 0%, #e8864a 100%)',
        color: '#ffffff',
        border: '2px solid #d97539',
        borderRadius: '8px',
        padding: '1rem 1.5rem',
        fontSize: '0.95rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '180px',
    },
    secondaryButtonTablet: {
        flex: 1,
        minWidth: 'auto',
    },
    secondaryButtonMobile: {
        width: '100%',
        padding: '0.875rem 1rem',
        fontSize: '0.9rem',
    },
};

export default ServicesSection;