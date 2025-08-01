import { useState } from 'react';
import styles from '../css/Kontakt.module.css';
import rogl from '../assets/rogl.png'
import '../index.css';

const Kontakt = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Form submission logic here
    };

    return (
        <div className={styles.container}>
            {/* Contact Information Grid */}
            <section className={styles.contactInfo}>
                <div className={styles.contactGrid}>

                    {/* Main Office */}
                    <div className={styles.officeCard}>
                        <div className={styles.officeHeader}>
                            <h2>Hauptsitz</h2>
                            <span className={styles.locationBadge}>Steiermark</span>
                        </div>
                        <div className={styles.officeImage}>
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="PROMAX Hauptsitz Raaba-Grambach"
                            />
                        </div>
                        <div className={styles.officeDetails}>
                            <h3>PROMAX Project Management GesmbH</h3>
                            <div className={styles.addressBlock}>
                                <p>Parkring 18/F</p>
                                <p>8074 Raaba-Grambach</p>
                                <p>Österreich</p>
                            </div>
                            <div className={styles.contactDetails}>
                                <div className={styles.contactItem}>
                                    <span className={styles.contactIcon}>📞</span>
                                    <span>+43 (0) 316 241 393</span>
                                </div>
                                <div className={styles.contactItem}>
                                    <span className={styles.contactIcon}>📧</span>
                                    <span>office@promax.at</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Vienna Office */}
                    <div className={styles.officeCard}>
                        <div className={styles.officeHeader}>
                            <h2>Zweigstelle</h2>
                            <span className={styles.locationBadge}>Wien</span>
                        </div>
                        <div className={styles.officeImage}>
                            <img
                                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="PROMAX Zweigstelle Wien"
                            />
                        </div>
                        <div className={styles.officeDetails}>
                            <h3>PROMAX Project Management GesmbH</h3>
                            <div className={styles.addressBlock}>
                                <p>Löwengasse 3/5</p>
                                <p>1030 Wien</p>
                                <p>Österreich</p>
                            </div>
                            <div className={styles.contactDetails}>
                                <div className={styles.contactItem}>
                                    <span className={styles.contactIcon}>📞</span>
                                    <span>+43 (0) 1 710 7748</span>
                                </div>
                                <div className={styles.contactItem}>
                                    <span className={styles.contactIcon}>📧</span>
                                    <span>office@promax.at</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Key Contacts */}
            <section className={styles.keyContacts}>
                <div className={styles.contactsGrid}>
                    <div className={styles.contactsHeader}>
                        <h2>Geschäftsführung</h2>
                        <p>Ihre direkten Ansprechpartner für strategische Projekte</p>
                    </div>

                    <div className={styles.executiveCard}>
                        <div className={styles.executiveImage}>
                            <img
                                src={rogl}
                                alt="Ing. Andreas Rogl"
                            />
                        </div>
                        <div className={styles.executiveInfo}>
                            <h3>Ing. Andreas Rogl</h3>
                            <p className={styles.executiveTitle}>Geschäftsführer</p>
                            <div className={styles.executiveContact}>
                                <br/>
                                <p>📧 andreas.rogl@promax.at</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.executiveCard}>
                        <div className={styles.executiveImage}>
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                alt="Ing. Michael Fasching"
                            />
                        </div>
                        <div className={styles.executiveInfo}>
                            <h3>Ing. Michael Fasching</h3>
                            <p className={styles.executiveTitle}>Geschäftsführer</p>
                            <div className={styles.executiveContact}>
                                <br/>
                                <p>📧 michael.fasching@promax.at</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jobs Section */}
            <section className={styles.jobsSection}>
                <div className={styles.jobsGrid}>
                    <div className={styles.jobsImage}>
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            alt="Team bei PROMAX"
                        />
                    </div>
                    <div className={styles.jobsContent}>
                        <h2>Jobs & Karriere</h2>
                        <p className={styles.jobsDescription}>
                            Werden Sie Teil unseres Teams! Als Dienstleister ist das Ergebnis unserer Arbeit
                            immer auch eine Teamleistung, deren Schlüsselfaktoren Qualifikation, Engagement,
                            Kreativität, Verantwortungsbewusstsein, Flexibilität und Zielorientierung sind.
                        </p>
                        <p>
                            Wir bieten gute Dotierung, faire Vereinbarungen, interessante Aufgaben und
                            vielfältige Entwicklungsmöglichkeiten in einem tollen Team.
                        </p>
                        <button className={styles.jobsButton}>
                            Zu Jobs & Karriere
                        </button>
                    </div>
                </div>
            </section>

            {/* Google Maps Section */}
            <section className={styles.mapSection}>
                <div className={styles.mapContainer}>
                    <div className={styles.mapHeader}>
                        <h2>Unser Standort</h2>
                        <p>Besuchen Sie uns in Raaba-Grambach, südöstlich von Graz</p>
                    </div>
                    <div className={styles.mapWrapper}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.7289447742!2d15.4461!3d47.0379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476e3597f3b5c5c5%3A0x5f6c5a5a5a5a5a5a!2sParkring%2018%2C%208074%20Raaba-Grambach%2C%20Austria!5e0!3m2!1sde!2sat!4v1"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="PROMAX Standort Parkring 18/F, Raaba-Grambach"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className={styles.formSection}>
                <div className={styles.formContainer}>
                    <div className={styles.formHeader}>
                        <h2>Nachricht senden</h2>
                        <p>Kontaktieren Sie uns für eine unverbindliche Beratung zu Ihrem Projekt</p>
                    </div>

                    <div className={styles.contactForm}>
                        <div className={styles.formGrid}>
                            <div className={styles.inputGroup}>
                                <label>Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Ihr vollständiger Name"
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>E-Mail *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="ihre.email@unternehmen.com"
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Unternehmen</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    placeholder="Ihr Unternehmen"
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Telefon</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="+43 123 456 789"
                                />
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Betreff *</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                placeholder="Worum geht es in Ihrer Anfrage?"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Nachricht *</label>
                            <textarea
                                name="message"
                                rows={6}
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                            ></textarea>
                        </div>

                        <div className={styles.formActions}>
                            <button onClick={handleSubmit} className={styles.submitButton}>
                                Nachricht senden
                            </button>
                            <p className={styles.privacyNote}>
                                * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Kontakt;