import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Users, ArrowRight, Calendar, Award, Target, Heart, Send, Upload } from 'lucide-react';
import styles from '../css/Karriere.module.css';
import { Job, jobOpenings, getDepartmentColor } from '../mock/jobData.ts';

// Interface für Formular
interface ApplicationForm {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    position: string;
    message: string;
    cv: File | null;
}

const Karriere = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [formData, setFormData] = useState<ApplicationForm>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        message: '',
        cv: null
    });
    const [showForm, setShowForm] = useState<boolean>(false);
    const heroRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1
            }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    const handleJobClick = (job: Job) => {
        setSelectedJob(job);
    };

    const closeModal = () => {
        setSelectedJob(null);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({
                ...prev,
                cv: e.target.files![0]
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Hier würde die Formularverarbeitung stattfinden
        console.log('Form submitted:', formData);
        alert('Vielen Dank für Ihre Bewerbung! Wir melden uns bald bei Ihnen.');
        setShowForm(false);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            position: '',
            message: '',
            cv: null
        });
    };

    return (
        <div className={styles.karrierePage}>
            {/* Hero Section */}
            <section ref={heroRef} className={`${styles.heroSection} ${isVisible ? styles.heroVisible : ''}`}>
                <div className={styles.heroBackground}></div>
                <div className={styles.heroContent}>

                    <h1 className={styles.heroTitle}>
                        Gestalten Sie die Zukunft des <span className={styles.heroAccent}>Anlagenbaus</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Werden Sie Teil eines innovativen Teams von über 100 Experten und arbeiten Sie an
                        wegweisenden Projekten in der Pharma-, Chemie- und Lebensmittelindustrie.
                    </p>
                    <div className={styles.heroStats}>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>100+</div>
                            <div className={styles.statLabel}>Mitarbeiter</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>30+</div>
                            <div className={styles.statLabel}>Jahre Erfahrung</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>500+</div>
                            <div className={styles.statLabel}>Projekte</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className={styles.valuesSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Unsere Werte & Kultur</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <Award size={32} />
                            </div>
                            <h3 className={styles.valueTitle}>Exzellenz</h3>
                            <p className={styles.valueText}>
                                Wir streben nach höchster Qualität in allen unseren Projekten und fördern kontinuierliche Verbesserung.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <Target size={32} />
                            </div>
                            <h3 className={styles.valueTitle}>Innovation</h3>
                            <p className={styles.valueText}>
                                Modernste Technologien und kreative Lösungen prägen unseren Arbeitsalltag.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <Users size={32} />
                            </div>
                            <h3 className={styles.valueTitle}>Teamgeist</h3>
                            <p className={styles.valueText}>
                                Gemeinsam erreichen wir mehr - Zusammenarbeit ist der Schlüssel zu unserem Erfolg.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <Heart size={32} />
                            </div>
                            <h3 className={styles.valueTitle}>Work-Life-Balance</h3>
                            <p className={styles.valueText}>
                                Flexible Arbeitszeiten und moderne Arbeitsmodelle für Ihre persönliche Lebensqualität.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jobs Section */}
            <section className={styles.jobsSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Offene Stellen</h2>
                        <p className={styles.sectionSubtitle}>
                            Finden Sie Ihre perfekte Position in unserem wachsenden Unternehmen
                        </p>
                    </div>

                    {/* Jobs Grid */}
                    <div className={styles.jobsGrid}>
                        {jobOpenings.map((job, index) => (
                            <div
                                key={job.id}
                                className={styles.jobCard}
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => handleJobClick(job)}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.badgesContainer}>
                                        <span
                                            className={styles.departmentBadge}
                                            style={{ backgroundColor: getDepartmentColor(job.department) }}
                                        >
                                            {job.department}
                                        </span>
                                        {job.urgent && (
                                            <span className={styles.urgentBadge}>
                                                Dringend
                                            </span>
                                        )}
                                    </div>

                                    <h3 className={styles.jobTitle}>
                                        {job.title}
                                    </h3>

                                    <div className={styles.jobMeta}>
                                        <div className={styles.metaItem}>
                                            <MapPin size={14} />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className={styles.metaItem}>
                                            <Clock size={14} />
                                            <span>{job.type}</span>
                                        </div>
                                        <div className={styles.metaItem}>
                                            <Users size={14} />
                                            <span>Team: {job.teamSize}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.cardBody}>
                                    <p className={styles.jobDescription}>
                                        {job.description}
                                    </p>
                                </div>

                                <div className={styles.cardFooter}>
                                    <div className={styles.footerInfo}>
                                        <div className={styles.footerItem}>
                                            <span className={styles.footerLabel}>Erfahrung</span>
                                            <span className={styles.footerValue}>{job.experience}</span>
                                        </div>
                                        <div className={styles.footerItem}>
                                            <span className={styles.footerLabel}>Veröffentlicht</span>
                                            <span className={styles.footerValue}>{job.posted}</span>
                                        </div>
                                    </div>
                                    <div className={styles.cardAction}>
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className={styles.benefitsSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Was wir bieten</h2>
                    <div className={styles.benefitsGrid}>
                        <div className={styles.benefitItem}>
                            <h4>Attraktive Vergütung</h4>
                            <p>Leistungsgerechte Bezahlung über Kollektivvertrag</p>
                        </div>
                        <div className={styles.benefitItem}>
                            <h4>Flexible Arbeitszeiten</h4>
                            <p>Gleitzeit und Home-Office Möglichkeiten</p>
                        </div>
                        <div className={styles.benefitItem}>
                            <h4>Weiterbildung</h4>
                            <p>Individuelle Entwicklungsprogramme und Schulungen</p>
                        </div>
                        <div className={styles.benefitItem}>
                            <h4>Gesundheitsvorsorge</h4>
                            <p>Betriebsarzt und Gesundheitsprogramme</p>
                        </div>
                        <div className={styles.benefitItem}>
                            <h4>Internationale Projekte</h4>
                            <p>Spannende Projekte weltweit</p>
                        </div>
                        <div className={styles.benefitItem}>
                            <h4>Modernes Arbeitsumfeld</h4>
                            <p>State-of-the-art Büros und Technologie</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Process Section */}
            <section className={styles.processSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Unser Bewerbungsprozess</h2>
                    <div className={styles.processSteps}>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>1</div>
                            <h4>Bewerbung</h4>
                            <p>Senden Sie uns Ihre aussagekräftigen Unterlagen</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>2</div>
                            <h4>Erstgespräch</h4>
                            <p>Persönliches oder virtuelles Kennenlernen</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>3</div>
                            <h4>Fachgespräch</h4>
                            <p>Detailliertes Gespräch mit dem Fachbereich</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>4</div>
                            <h4>Angebot</h4>
                            <p>Individuelles Vertragsangebot</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>5</div>
                            <h4>Onboarding</h4>
                            <p>Strukturierte Einarbeitung im Team</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h3 className={styles.ctaTitle}>
                            Keine passende Stelle gefunden?
                        </h3>
                        <p className={styles.ctaText}>
                            Wir sind immer auf der Suche nach talentierten Menschen.
                            Senden Sie uns Ihre Initiativbewerbung!
                        </p>
                        <button
                            className={styles.ctaButton}
                            onClick={() => setShowForm(true)}
                        >
                            <span>Initiativbewerbung senden</span>
                            <div className={styles.ctaIcon}>
                                <ArrowRight size={14} />
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* Job Details Modal */}
            {selectedJob && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={closeModal}>
                            ×
                        </button>

                        <div className={styles.modalHeader}>
                            <div className={styles.modalBadges}>
                                <span
                                    className={styles.modalDepartmentBadge}
                                    style={{ backgroundColor: getDepartmentColor(selectedJob.department) }}
                                >
                                    {selectedJob.department}
                                </span>
                                {selectedJob.urgent && (
                                    <span className={styles.modalUrgentBadge}>
                                        Dringend
                                    </span>
                                )}
                            </div>

                            <h2 className={styles.modalTitle}>
                                {selectedJob.title}
                            </h2>

                            <div className={styles.modalMetaGrid}>
                                <div className={styles.modalMetaItem}>
                                    <MapPin size={16} />
                                    <span>{selectedJob.location}</span>
                                </div>
                                <div className={styles.modalMetaItem}>
                                    <Clock size={16} />
                                    <span>{selectedJob.type}</span>
                                </div>
                                <div className={styles.modalMetaItem}>
                                    <Users size={16} />
                                    <span>Team: {selectedJob.teamSize}</span>
                                </div>
                                <div className={styles.modalMetaItem}>
                                    <Calendar size={16} />
                                    <span>{selectedJob.posted}</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.modalBody}>
                            <div className={styles.modalGrid}>
                                <div>
                                    <div className={styles.modalSection}>
                                        <h3 className={styles.modalSectionTitle}>Beschreibung</h3>
                                        <p className={styles.modalDescription}>
                                            {selectedJob.description}
                                        </p>
                                    </div>

                                    <div className={styles.modalSection}>
                                        <h3 className={styles.modalSectionTitle}>Ihre Aufgaben</h3>
                                        <ul className={styles.modalList}>
                                            {selectedJob.responsibilities.map((item, index) => (
                                                <li key={index} className={styles.modalListItem}>
                                                    <div className={`${styles.modalListDot} ${styles.modalListDotOrange}`}></div>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <div className={styles.modalSection}>
                                        <h3 className={styles.modalSectionTitle}>Ihr Profil</h3>
                                        <ul className={styles.modalList}>
                                            {selectedJob.requirements.map((item, index) => (
                                                <li key={index} className={styles.modalListItem}>
                                                    <div className={`${styles.modalListDot} ${styles.modalListDotBlue}`}></div>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className={styles.modalSection}>
                                        <h3 className={styles.modalSectionTitle}>Wir bieten</h3>
                                        <ul className={styles.modalList}>
                                            {selectedJob.benefits.map((item, index) => (
                                                <li key={index} className={styles.modalListItem}>
                                                    <div className={`${styles.modalListDot} ${styles.modalListDotGreen}`}></div>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.modalFooter}>
                                <button
                                    className={styles.modalApplyButton}
                                    onClick={() => {
                                        setSelectedJob(null);
                                        setShowForm(true);
                                        setFormData(prev => ({
                                            ...prev,
                                            position: selectedJob.title
                                        }));
                                    }}
                                >
                                    <span>Jetzt bewerben</span>
                                    <div className={styles.modalApplyIcon}>
                                        <ArrowRight size={14} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Application Form Modal */}
            {showForm && (
                <div className={styles.formOverlay} onClick={() => setShowForm(false)}>
                    <div className={styles.formContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setShowForm(false)}>
                            ×
                        </button>

                        <h2 className={styles.formTitle}>Bewerbungsformular</h2>
                        <p className={styles.formSubtitle}>
                            Wir freuen uns auf Ihre Bewerbung! Bitte füllen Sie das folgende Formular aus.
                        </p>

                        <form onSubmit={handleSubmit} className={styles.applicationForm}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="firstName">Vorname *</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="lastName">Nachname *</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">E-Mail *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="phone">Telefon</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="position">Position</label>
                                <input
                                    type="text"
                                    id="position"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleInputChange}
                                    placeholder="z.B. Initiativbewerbung oder gewünschte Position"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Nachricht</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={5}
                                    placeholder="Erzählen Sie uns mehr über sich..."
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="cv">Lebenslauf (PDF, max. 5MB)</label>
                                <div className={styles.fileInputWrapper}>
                                    <input
                                        type="file"
                                        id="cv"
                                        name="cv"
                                        onChange={handleFileChange}
                                        accept=".pdf"
                                        className={styles.fileInput}
                                    />
                                    <label htmlFor="cv" className={styles.fileLabel}>
                                        <Upload size={20} />
                                        <span>{formData.cv ? formData.cv.name : 'Datei auswählen'}</span>
                                    </label>
                                </div>
                            </div>

                            <div className={styles.formActions}>
                                <button type="button" className={styles.cancelButton} onClick={() => setShowForm(false)}>
                                    Abbrechen
                                </button>
                                <button type="submit" className={styles.submitButton}>
                                    <Send size={16} />
                                    <span>Bewerbung senden</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Karriere;