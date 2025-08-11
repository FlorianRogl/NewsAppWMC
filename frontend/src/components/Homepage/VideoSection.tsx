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

                @media (max-width: 768px) {
                    .video-section {
                        height: 65vh !important;
                        min-height: 400px !important;
                    }
                    .content-overlay {
                        padding: 0 1.5rem !important;
                        justify-content: center !important;
                        text-align: center !important;
                    }
                    .overlay-content {
                        max-width: 100% !important;
                        text-align: center !important;
                    }
                    .stats-container {
                        flex-direction: column !important;
                        gap: 1rem !important;
                        padding: 1.5rem 0 !important;
                    }
                    .stat-divider {
                        width: 60px !important;
                        height: 1px !important;
                    }
                    .stat-item {
                        text-align: center !important;
                    }
                    .badge {
                        margin-bottom: 1rem !important;
                    }
                    .description {
                        margin-bottom: 2rem !important;
                    }
                    .title-main {
                        font-size: clamp(2.2rem, 8vw, 3.5rem) !important;
                        margin-bottom: 0.3rem !important;
                    }
                    .title-sub {
                        font-size: clamp(1rem, 4vw, 1.5rem) !important;
                    }
                }

                @media (max-width: 640px) {
                    .video-section {
                        height: 60vh !important;
                        min-height: 380px !important;
                    }
                    .content-overlay {
                        padding: 0 1.25rem !important;
                    }
                    .stats-container {
                        padding: 1.25rem 0 !important;
                        margin-top: 1.5rem !important;
                    }
                    .stat-number {
                        font-size: 2rem !important;
                    }
                    .stat-label {
                        font-size: 0.8rem !important;
                    }
                }

                @media (max-width: 480px) {
                    .video-section {
                        height: 55vh !important;
                        min-height: 350px !important;
                    }
                    .content-overlay {
                        padding: 0 1rem !important;
                    }
                    .badge {
                        font-size: 0.625rem !important;
                        padding: 6px 12px !important;
                        margin-bottom: 0.75rem !important;
                    }
                    .title {
                        margin-bottom: 1.5rem !important;
                    }
                    .title-main {
                        font-size: clamp(1.8rem, 10vw, 2.8rem) !important;
                        margin-bottom: 0.25rem !important;
                    }
                    .title-sub {
                        font-size: clamp(0.9rem, 5vw, 1.2rem) !important;
                    }
                    .description {
                        font-size: 0.9rem !important;
                        margin-bottom: 1.5rem !important;
                    }
                    .stats-container {
                        padding: 1rem 0 !important;
                        margin-top: 1rem !important;
                    }
                    .stat-number {
                        font-size: 1.75rem !important;
                        margin-bottom: 0.25rem !important;
                    }
                    .stat-label {
                        font-size: 0.75rem !important;
                    }
                }

                @media (max-width: 360px) {
                    .video-section {
                        height: 50vh !important;
                        min-height: 320px !important;
                    }
                    .content-overlay {
                        padding: 0 0.75rem !important;
                    }
                    .title-main {
                        font-size: clamp(1.5rem, 12vw, 2.2rem) !important;
                    }
                    .title-sub {
                        font-size: clamp(0.8rem, 6vw, 1rem) !important;
                    }
                    .description {
                        font-size: 0.85rem !important;
                        line-height: 1.5 !important;
                    }
                    .stat-number {
                        font-size: 1.5rem !important;
                    }
                    .stat-label {
                        font-size: 0.7rem !important;
                    }
                }

                /* High DPI displays */
                @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
                    .video {
                        image-rendering: -webkit-optimize-contrast;
                    }
                }

                /* Landscape orientation on mobile */
                @media (max-height: 500px) and (orientation: landscape) {
                    .video-section {
                        height: 90vh !important;
                        min-height: 400px !important;
                    }
                    .content-overlay {
                        padding: 0 2rem !important;
                    }
                    .overlay-content {
                        transform: scale(0.85) !important;
                        transform-origin: left center !important;
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

                /* Reduced motion preference */
                @media (prefers-reduced-motion: reduce) {
                    .overlay-content {
                        transition: none !important;
                    }
                }

                /* High contrast mode */
                @media (prefers-contrast: high) {
                    .video-overlay {
                        background: rgba(0, 0, 0, 0.8) !important;
                    }
                    .badge {
                        border: 2px solid rgba(255, 255, 255, 0.8) !important;
                    }
                }
            `}</style>

            <section ref={sectionRef} className="video-section" style={styles.videoSection}>
                {/* Full-screen video background */}
                <div style={styles.videoContainer}>
                    <iframe
                        className="video"
                        style={styles.video}
                        src="https://www.youtube.com/embed/JIN6KC3glto?autoplay=1&mute=1&loop=1&playlist=JIN6KC3glto&controls=0&showinfo=0&rel=0&modestbranding=1&vq=hd1080"
                        title="PROMAX Industrial Plant Engineering"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />

                    {/* Dark gradient overlay */}
                    <div className="video-overlay" style={styles.videoOverlay} />
                </div>

                {/* Company information overlay */}
                <div className="content-overlay" style={styles.contentOverlay}>
                    <div
                        className="overlay-content"
                        style={{
                            ...styles.overlayContent,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
                        }}
                    >
                        {/* Professional Badge */}
                        <div className="badge" style={styles.badge}>
                            <span>Industrieanlagenbau & Projektmanagement</span>
                        </div>

                        {/* Main Title */}
                        <h1 className="title" style={styles.title}>
                            <span className="title-main" style={styles.titleMain}>PROMAX</span>
                            <span className="title-sub" style={styles.titleSub}>Engineering Excellence</span>
                        </h1>

                        {/* Description */}
                        <div className="description" style={styles.description}>
                            <p>
                                Professionelle Lösungen im Industrieanlagenbau mit jahrelanger
                                Erfahrung in den Branchen Chemie, Energie & Umwelt, Pharma und Papier & Zellstoff.
                            </p>
                        </div>

                        {/* Professional Stats */}
                        <div className="stats-container" style={styles.statsContainer}>
                            <div className="stat-item" style={styles.statItem}>
                                <div className="stat-number" style={styles.statNumber}>15+</div>
                                <div className="stat-label" style={styles.statLabel}>Jahre Erfahrung</div>
                            </div>
                            <div className="stat-divider" style={styles.statDivider} />
                            <div className="stat-item" style={styles.statItem}>
                                <div className="stat-number" style={styles.statNumber}>ISO</div>
                                <div className="stat-label" style={styles.statLabel}>9001:2015 zertifiziert</div>
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
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },

    title: {
        margin: '0 0 2rem 0',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
    },

    titleMain: {
        display: 'block',
        fontSize: 'clamp(3rem, 8vw, 6rem)',
        fontWeight: 900,
        color: '#ffffff',
        marginBottom: '0.5rem',
        textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    },

    titleSub: {
        display: 'block',
        fontSize: 'clamp(1.25rem, 3vw, 2rem)',
        fontWeight: 300,
        color: '#E67E22',
        textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
    },

    description: {
        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: 400,
        lineHeight: 1.6,
        marginBottom: '3rem',
        textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
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
        fontWeight: 800,
        color: '#E67E22',
        lineHeight: 1,
        marginBottom: '0.5rem',
        textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
    },

    statLabel: {
        fontSize: '0.875rem',
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: 500,
        textShadow: '0 1px 5px rgba(0, 0, 0, 0.5)',
    },

    statDivider: {
        width: 1,
        height: 60,
        background: 'rgba(255, 255, 255, 0.2)',
    },
};

export default VideoSection;