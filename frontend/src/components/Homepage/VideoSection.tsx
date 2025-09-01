import { useEffect, useRef, useState } from 'react';

const VideoSection = () => {
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
            }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <>
            <style>{`
                @media (max-width: 1200px) {
                    .content-overlay {
                        padding: 0 4rem !important;
                    }
                    .stats-container {
                        gap: 1.5rem !important;
                    }
                }

                @media (max-width: 1024px) {
                    .video-section {
                        height: 75vh !important;
                        min-height: 450px !important;
                    }
                    .content-overlay {
                        padding: 0 3rem !important;
                    }
                    .overlay-content {
                        max-width: 500px !important;
                    }
                    .title-main {
                        font-size: clamp(2.5rem, 7vw, 4.5rem) !important;
                    }
                    .title-sub {
                        font-size: clamp(1.1rem, 2.5vw, 1.8rem) !important;
                    }
                }

                /* PHASE 1: Desktop - Labels bleiben weiß bis 769px */
                @media (min-width: 770px) {
                    .promax-stat-label {
                        color: rgba(255, 255, 255, 0.8) !important;
                        font-weight: 400 !important;
                    }
                    .promax-stat-number {
                        color: #E67E22 !important;
                    }
                }

                /* PHASE 2: Mobile Layout - Video oben, Text unten */
                @media (max-width: 769px) {
                    .promax-video-section {
                        height: auto !important;
                        min-height: auto !important;
                        display: flex !important;
                        flex-direction: column !important;
                    }
                    
                    .promax-video-container {
                        height: 0 !important;
                        padding-bottom: 56.25% !important; /* 16:9 Aspect Ratio */
                        position: relative !important;
                        flex-shrink: 0 !important;
                        width: 100% !important;
                    }
                    
                    .promax-video {
                        width: 100% !important;
                        height: 100% !important;
                        object-fit: cover !important;
                        position: absolute !important;
                        top: 0 !important;
                        left: 0 !important;
                        transform: none !important;
                    }
                    
                    .promax-video-overlay {
                        background: linear-gradient(to bottom, 
                            rgba(0,0,0,0.1) 0%, 
                            rgba(30, 58, 95, 0.3) 100%) !important;
                    }
                    
                    .promax-content-overlay {
                        position: relative !important;
                        flex: 1 !important;
                        background: #f8f9fa !important;
                        padding: 2rem 1.5rem 2rem 1.5rem !important;
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        min-height: 35vh !important;
                        margin-top: 0.5rem !important;
                    }
                    
                    .promax-overlay-content {
                        text-align: center !important;
                        max-width: 100% !important;
                        width: 100% !important;
                        color: #1e3767 !important;
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                    }
                    
                    .promax-stats-container {
                        flex-direction: row !important;
                        gap: 2rem !important;
                        padding: 1.5rem 0 1rem 0 !important;
                        margin-top: 1.5rem !important;
                        border-top: 1px solid rgba(230, 126, 34, 0.3) !important;
                        justify-content: center !important;
                        display: flex !important;
                        align-items: center !important;
                    }
                    
                    .promax-stat-item {
                        text-align: center !important;
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                    }
                    
                    /* PHASE 2: Labels sind hellgrau */
                    .promax-stat-label {
                        color: #666666 !important;
                        font-size: 0.8rem !important;
                        font-weight: 500 !important;
                    }
                    
                    .promax-stat-number {
                        color: #E67E22 !important;
                    }
                    
                    .promax-stat-divider {
                        width: 1px !important;
                        height: 45px !important;
                        background: rgba(230, 126, 34, 0.4) !important;
                    }
                    
                    .promax-badge {
                        display: inline-flex !important;
                        align-self: center !important;
                        margin-left: auto !important;
                        margin-right: auto !important;
                    }
                    
                    .promax-title {
                        margin-bottom: 1rem !important;
                        text-align: center !important;
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                    }
                    
                    .promax-title-main {
                        font-size: clamp(1.75rem, 8vw, 2.5rem) !important;
                        color: #1e3767 !important;
                        margin-bottom: 0.2rem !important;
                        text-shadow: none !important;
                        font-weight: 300 !important;
                        text-align: center !important;
                    }
                    
                    .promax-title-sub {
                        font-size: clamp(0.9rem, 4vw, 1.2rem) !important;
                        color: #E67E22 !important;
                        text-shadow: none !important;
                        font-weight: 600 !important;
                        text-align: center !important;
                    }
                    
                    .promax-description {
                        font-size: 0.9rem !important;
                        line-height: 1.6 !important;
                        color: #1e3767 !important;
                        margin-bottom: 1.5rem !important;
                        text-shadow: none !important;
                        opacity: 0.8 !important;
                        font-weight: 400 !important;
                        text-align: center !important;
                        max-width: 100% !important;
                    }
                }

                @media (max-width: 640px) {
                    .promax-video-container {
                        padding-bottom: 56.25% !important;
                    }
                    
                    .promax-content-overlay {
                        padding: 1.5rem 1.25rem 1.75rem 1.25rem !important;
                        min-height: 30vh !important;
                        margin-top: 0.5rem !important;
                    }
                    
                    .promax-stats-container {
                        gap: 1.5rem !important;
                        padding: 1.25rem 0 1rem 0 !important;
                        margin-top: 1.25rem !important;
                    }
                    
                    .promax-stat-number {
                        font-size: 1.5rem !important;
                        color: #E67E22 !important;
                        font-weight: 300 !important;
                    }
                    
                    .promax-stat-label {
                        font-size: 0.7rem !important;
                        color: #666666 !important;
                        opacity: 0.8 !important;
                        font-weight: 400 !important;
                    }
                    
                    .promax-stat-divider {
                        height: 40px !important;
                        background: rgba(230, 126, 34, 0.4) !important;
                    }
                }

                @media (max-width: 480px) {
                    .promax-video-container {
                        padding-bottom: 56.25% !important;
                    }
                    
                    .promax-content-overlay {
                        padding: 1.25rem 1rem 1.5rem 1rem !important;
                        min-height: 28vh !important;
                        margin-top: 0.5rem !important;
                    }
                    
                    .promax-title {
                        margin-bottom: 0.8rem !important;
                    }
                    
                    .promax-title-main {
                        font-size: clamp(1.5rem, 9vw, 2.2rem) !important;
                        margin-bottom: 0.15rem !important;
                        font-weight: 300 !important;
                    }
                    
                    .promax-title-sub {
                        font-size: clamp(0.8rem, 5vw, 1.1rem) !important;
                        font-weight: 600 !important;
                    }
                    
                    .promax-description {
                        font-size: 0.85rem !important;
                        margin-bottom: 1rem !important;
                        line-height: 1.5 !important;
                    }
                    
                    .promax-stats-container {
                        gap: 1.25rem !important;
                        padding: 1rem 0 1rem 0 !important;
                        margin-top: 1rem !important;
                    }
                    
                    .promax-stat-number {
                        font-size: 1.3rem !important;
                        color: #E67E22 !important;
                        font-weight: 300 !important;
                    }
                    
                    .promax-stat-label {
                        font-size: 0.65rem !important;
                        color: #666666 !important;
                        opacity: 0.8 !important;
                        font-weight: 400 !important;
                    }
                    
                    .promax-stat-divider {
                        height: 35px !important;
                        background: rgba(230, 126, 34, 0.4) !important;
                    }
                }

                /* Landscape auf Mobile */
                @media (max-height: 500px) and (orientation: landscape) and (max-width: 900px) {
                    .video-section {
                        flex-direction: row !important;
                    }
                    
                    .video-container {
                        width: 60% !important;
                        height: 100vh !important;
                    }
                    
                    .content-overlay {
                        width: 40% !important;
                        min-height: 100vh !important;
                        padding: 1rem !important;
                    }
                    
                    .overlay-content {
                        transform: scale(0.85) !important;
                    }
                    
                    .stats-container {
                        flex-direction: row !important;
                        gap: 1rem !important;
                    }
                    
                    .stat-divider {
                        width: 1px !important;
                        height: 30px !important;
                    }
                }

                /* Extra large screens */
                @media (min-width: 1920px) {
                    .content-overlay {
                        padding: 0 12rem !important;
                    }
                    .overlay-content {
                        max-width: 700px !important;
                    }
                }

                /* Reduced motion */
                @media (prefers-reduced-motion: reduce) {
                    .overlay-content {
                        transition: none !important;
                    }
                }

                /* High contrast */
                @media (prefers-contrast: high) {
                    .video-overlay {
                        background: rgba(0, 0, 0, 0.8) !important;
                    }
                    .badge {
                        border: 2px solid rgba(255, 255, 255, 0.8) !important;
                    }
                }
            `}</style>

            <section ref={sectionRef} className="promax-video-section" style={{...styles.videoSection, margin: 0, padding: 0}}>
                {/* Video Container */}
                <div className="promax-video-container" style={styles.videoContainer}>
                    <iframe
                        className="promax-video"
                        style={styles.video}
                        src="https://www.youtube.com/embed/JIN6KC3glto?autoplay=1&mute=1&loop=1&playlist=JIN6KC3glto&controls=0&showinfo=0&rel=0&modestbranding=1&vq=hd1080"
                        title="PROMAX Industrial Plant Engineering"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <div className="promax-video-overlay" style={styles.videoOverlay} />
                </div>

                {/* Content Overlay */}
                <div className="promax-content-overlay" style={styles.contentOverlay}>
                    <div
                        className="promax-overlay-content"
                        style={{
                            ...styles.overlayContent,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
                        }}
                    >
                        {/* Badge */}
                        <div className="promax-badge" style={styles.badge}>
                            <span>Industrieanlagenbau & Projektmanagement</span>
                        </div>

                        {/* Title */}
                        <h1 className="promax-title" style={styles.title}>
                            <span className="promax-title-main" style={styles.titleMain}>PROMAX</span>
                            <span className="promax-title-sub" style={styles.titleSub}>Engineering Excellence</span>
                        </h1>

                        {/* Description */}
                        <div className="promax-description" style={styles.description}>
                            <p>
                                Professionelle Lösungen im Industrieanlagenbau mit jahrelanger
                                Erfahrung in den Branchen Chemie, Energie & Umwelt, Pharma und Papier & Zellstoff.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="promax-stats-container" style={styles.statsContainer}>
                            <div className="promax-stat-item" style={styles.statItem}>
                                <div className="promax-stat-number" style={styles.statNumber}>15+</div>
                                <div className="promax-stat-label" style={styles.statLabel}>Jahre Erfahrung</div>
                            </div>
                            <div className="promax-stat-divider" style={styles.statDivider} />
                            <div className="promax-stat-item" style={styles.statItem}>
                                <div className="promax-stat-number" style={styles.statNumber}>ISO</div>
                                <div className="promax-stat-label" style={styles.statLabel}>9001:2015 zertifiziert</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    videoSection: {
        position: 'relative',
        width: '100%',
        height: '80vh',
        minHeight: 500,
        overflow: 'hidden',
        fontFamily: "'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif",
        margin: 0,
        padding: 0,
    },

    videoContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 1,
    },

    video: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '120vw',
        height: '67.5vw',
        minWidth: '100%',
        minHeight: '100%',
        transform: 'translate(-50%, -50%)',
        objectFit: 'cover',
        pointerEvents: 'none',
    },

    videoOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(30, 58, 95, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(230, 126, 34, 0.3) 100%)',
        zIndex: 2,
    },

    contentOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 8rem',
        zIndex: 3,
    },

    overlayContent: {
        maxWidth: 600,
        color: 'white',
        transition: 'all 0.8s ease',
    },

    badge: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '8px 16px',
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: 6,
        color: '#ffffff',
        fontSize: '0.75rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        marginBottom: '1.5rem',
    },

    title: {
        margin: '0 0 2rem 0',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
    },

    titleMain: {
        display: 'block',
        fontSize: 'clamp(3rem, 8vw, 6rem)',
        fontWeight: 300,
        color: '#ffffff',
        marginBottom: '0.5rem',
        fontFamily: "'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif",
    },

    titleSub: {
        display: 'block',
        fontSize: 'clamp(1.25rem, 3vw, 2rem)',
        fontWeight: 600,
        color: '#E67E22',
        fontFamily: "'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif",
    },

    description: {
        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: 400,
        lineHeight: 1.6,
        marginBottom: '3rem',
        maxWidth: 500,
    },

    statsContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        padding: '2rem 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        marginTop: '2rem',
    },

    statItem: {
        textAlign: 'center',
    },

    statNumber: {
        fontSize: '2.5rem',
        fontWeight: 300,
        color: '#E67E22',
        lineHeight: 1,
        marginBottom: '0.5rem',
        fontFamily: "'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif",
    },

    statLabel: {
        fontSize: '0.875rem',
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: 400,
        fontFamily: "'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif",
    },

    statDivider: {
        width: 1,
        height: 60,
        background: 'rgba(255, 255, 255, 0.2)',
    },
};

export default VideoSection;