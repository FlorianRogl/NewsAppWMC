import React from 'react';
import styles from '../../css/VideoSection.module.css';

const VideoSection = () => {
    return (
        <section className={styles.videoSection}>
            <div className={styles.videoContainer}>
                <iframe
                    className={styles.video}
                    src="https://www.youtube.com/embed/E7pCceDrKmg?autoplay=1&mute=1&loop=1&playlist=E7pCceDrKmg&controls=0&showinfo=0&rel=0&modestbranding=1"
                    title="PROMAX Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />

                {/* Optional: Overlay with company info */}
                <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                        <h1 className={styles.title}>PROMAX Project Management</h1>
                        <p className={styles.subtitle}>Know-how und Leidenschaft für Ihr Projekt</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;