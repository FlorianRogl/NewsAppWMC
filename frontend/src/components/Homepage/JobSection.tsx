import React, { useEffect, useRef, useState } from 'react';
import planungImage from '../../assets/Fotolia_69729812_dfdM.jpg';


const JobSection: React.FC = () => {
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
                    setTimeout(() => setIsContentVisible(true), 500);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
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
        // Navigate to karriere page
        window.location.href = '/karriere';
    };

    return (
        <>
            <style>{`
                .promax-orange-cta-button {
                    background: linear-gradient(135deg, #d97539 0%, #e8834a 100%) !important;
                    color: white !important;
                    border: none !important;
                    padding: 16px 32px !important;
                    font-size: 1.1rem !important;
                    font-weight: 400 !important;
                    font-family: 'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif !important;
                    border-radius: 12px !important;
                    cursor: pointer !important;
                    position: relative !important;
                    overflow: hidden !important;
                    box-shadow: 0 4px 15px rgba(217, 117, 57, 0.3) !important;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    transform: translateY(0) !important;
                    opacity: 0 !important;
                }

                .promax-orange-cta-button::before {
                    content: '' !important;
                    position: absolute !important;
                    top: 0 !important;
                    left: -100% !important;
                    width: 100% !important;
                    height: 100% !important;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent) !important;
                    transition: left 0.5s !important;
                }

                .promax-orange-cta-button:hover {
                    transform: translateY(-2px) !important;
                    box-shadow: 0 8px 25px rgba(217, 117, 57, 0.4) !important;
                    background: linear-gradient(135deg, #e8834a 0%, #f0925a 100%) !important;
                }

                .promax-orange-cta-button:hover::before {
                    left: 100% !important;
                }

                .promax-orange-cta-button:active {
                    transform: translateY(0) !important;
                    box-shadow: 0 4px 15px rgba(217, 117, 57, 0.3) !important;
                    transition: all 0.1s ease !important;
                }

                .promax-button-visible {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                    transition: opacity 0.6s ease 0.8s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s !important;
                }

                .promax-button-entrance {
                    opacity: 0 !important;
                    transform: translateY(20px) !important;
                }

                .promax-job-section {
                    background: #f8fafc;
                    padding: 6rem 0;
                    font-family: 'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
                    position: relative;
                    overflow: hidden;
                }

                .promax-job-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }

                .promax-job-header {
                    text-align: center;
                    margin-bottom: 4rem;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .promax-job-header.promax-header-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .promax-job-title {
                    font-size: clamp(2rem, 5vw, 3.5rem);
                    font-weight: 300;
                    color: #1e3763;
                    margin-bottom: 1rem;
                    line-height: 1.2;
                    letter-spacing: -0.02em;
                }

                .promax-title-underline {
                    width: 80px;
                    height: 3px;
                    background: linear-gradient(135deg, #d97539 0%, #e8864a 100%);
                    margin: 0 auto 2rem auto;
                    border-radius: 2px;
                }

                .promax-job-subtitle {
                    font-size: clamp(1rem, 2.5vw, 1.25rem);
                    color: #9ba8b3;
                    font-weight: 400;
                    line-height: 1.6;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .promax-job-content {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    align-items: center;
                }

                .promax-text-content {
                    opacity: 0;
                    transform: translateX(-30px);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .promax-text-content.promax-slide-from-left.promax-content-visible {
                    opacity: 1;
                    transform: translateX(0);
                }

                .promax-job-description {
                    font-size: 1.1rem;
                    color: #64748b;
                    line-height: 1.7;
                    margin-bottom: 2.5rem;
                    font-weight: 400;
                }

                .promax-highlights {
                    margin-bottom: 2.5rem;
                }

                .promax-highlight {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1rem;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .promax-highlight.promax-fade-in-up.promax-highlight-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .promax-highlight-icon {
                    width: 24px;
                    height: 24px;
                    background: linear-gradient(135deg, #d97539 0%, #e8864a 100%);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 0.9rem;
                    font-weight: 400;
                    flex-shrink: 0;
                }

                .promax-highlight span:last-child {
                    font-size: 1rem;
                    color: #1e3763;
                    font-weight: 400;
                }

                .promax-image-content {
                    opacity: 0;
                    transform: translateX(30px);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .promax-image-content.promax-slide-from-right.promax-content-visible {
                    opacity: 1;
                    transform: translateX(0);
                }

                .promax-job-image {
                    width: 100%;
                    height: 400px;
                    object-fit: cover;
                    border-radius: 12px;
                    box-shadow: 0 10px 40px rgba(30, 55, 99, 0.1);
                }

                @media (max-width: 1024px) {
                    .promax-job-content {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                    
                    .promax-job-container {
                        padding: 0 1.5rem;
                    }
                    
                    .promax-job-section {
                        padding: 4rem 0;
                    }
                }

                @media (max-width: 768px) {
                    .promax-job-container {
                        padding: 0 1rem;
                    }
                    
                    .promax-job-content {
                        gap: 2rem;
                    }
                    
                    .promax-job-header {
                        margin-bottom: 3rem;
                    }
                    
                    .promax-job-image {
                        height: 300px;
                    }
                    
                    .promax-orange-cta-button {
                        width: 100% !important;
                        padding: 14px 24px !important;
                        font-size: 1rem !important;
                    }
                }

                @media (max-width: 480px) {
                    .promax-job-section {
                        padding: 3rem 0;
                    }
                    
                    .promax-job-container {
                        padding: 0 0.75rem;
                    }
                    
                    .promax-job-content {
                        gap: 1.5rem;
                    }
                    
                    .promax-job-description {
                        font-size: 1rem;
                    }
                    
                    .promax-highlight span:last-child {
                        font-size: 0.9rem;
                    }
                }
            `}</style>

            <section ref={sectionRef} className="promax-job-section">
                <div className="promax-job-container">
                    {/* Header Section */}
                    <div className={`promax-job-header ${isHeaderVisible ? 'promax-header-visible' : ''}`}>
                        <h2 className="promax-job-title">Karriere bei PROMAX</h2>
                        <div className="promax-title-underline"></div>
                        <p className="promax-job-subtitle">
                            Werden Sie Teil unseres erfahrenen Teams im Industrieanlagenbau
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className="promax-job-content">
                        <div className={`promax-text-content ${isContentVisible ? 'promax-slide-from-left' : ''} ${isContentVisible ? 'promax-content-visible' : ''}`}>
                            <p className="promax-job-description">
                                Bei PROMAX Project Management sind wir immer auf der Suche nach
                                talentierten Fachkräften, die unsere Leidenschaft für exzellentes
                                Projektmanagement im Industrieanlagenbau teilen. Wir bieten Ihnen
                                die Möglichkeit, an spannenden Projekten mitzuwirken und Ihre
                                Expertise in den Bereichen Projektierung, Planung und Site Services
                                einzusetzen.
                            </p>
                            <div className="promax-highlights">
                                <div
                                    className={`promax-highlight ${isContentVisible ? 'promax-fade-in-up' : ''} ${isContentVisible ? 'promax-highlight-visible' : ''}`}
                                    style={{ transitionDelay: '0.2s' }}
                                >
                                    <span className="promax-highlight-icon">✓</span>
                                    <span>Innovative Projekte im Industrieanlagenbau</span>
                                </div>
                                <div
                                    className={`promax-highlight ${isContentVisible ? 'promax-fade-in-up' : ''} ${isContentVisible ? 'promax-highlight-visible' : ''}`}
                                    style={{ transitionDelay: '0.4s' }}
                                >
                                    <span className="promax-highlight-icon">✓</span>
                                    <span>Erfahrenes und dynamisches Team</span>
                                </div>
                                <div
                                    className={`promax-highlight ${isContentVisible ? 'promax-fade-in-up' : ''} ${isContentVisible ? 'promax-highlight-visible' : ''}`}
                                    style={{ transitionDelay: '0.6s' }}
                                >
                                    <span className="promax-highlight-icon">✓</span>
                                    <span>Vielfältige Entwicklungsmöglichkeiten</span>
                                </div>
                            </div>
                            <button
                                className={`promax-orange-cta-button ${isContentVisible ? 'promax-button-visible' : 'promax-button-entrance'}`}
                                onClick={handleKarriereClick}
                                aria-label="Zu den Karrieremöglichkeiten"
                            >
                                Entdecken Sie Ihre Karrieremöglichkeiten
                            </button>
                        </div>
                        <div className={`promax-image-content ${isContentVisible ? 'promax-slide-from-right' : ''} ${isContentVisible ? 'promax-content-visible' : ''}`}>
                            <img
                                src={planungImage}
                                alt="Projektplanung bei PROMAX"
                                className="promax-job-image"
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