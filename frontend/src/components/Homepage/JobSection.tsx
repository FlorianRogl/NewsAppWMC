import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Users, ArrowRight, Briefcase, Star, Calendar } from 'lucide-react';
import styles from '../../css/JobSection.module.css';

const JobsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
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

    const jobOpenings = [
        {
            id: 1,
            title: "Senior Projektingenieur Anlagenbau",
            department: "Engineering",
            location: "Graz, Österreich",
            type: "Vollzeit",
            experience: "5+ Jahre",
            teamSize: "8-12 Personen",
            posted: "Vor 2 Tagen",
            featured: true,
            urgent: false,
            description: "Wir suchen einen erfahrenen Projektingenieur für die Leitung komplexer Industrieanlagen-Projekte. Sie verantworten die technische Projektabwicklung von der Konzeption bis zur Inbetriebnahme.",
            responsibilities: [
                "Technische Projektleitung von Industrieanlagen",
                "Koordination mit interdisziplinären Teams",
                "Kundenbetreuung und Abstimmung",
                "Qualitätssicherung und Terminplanung"
            ],
            requirements: [
                "Abgeschlossenes Studium Maschinenbau oder vergleichbar",
                "Mindestens 5 Jahre Berufserfahrung im Anlagenbau",
                "Erfahrung in der Projektleitung",
                "Sehr gute Deutsch- und Englischkenntnisse"
            ],
            benefits: [
                "Attraktives Gehaltspaket",
                "Flexible Arbeitszeiten",
                "Weiterbildungsmöglichkeiten",
                "Modernes Arbeitsumfeld"
            ]
        },
        {
            id: 2,
            title: "Projektmanager Pharma",
            department: "Projektmanagement",
            location: "Wien, Österreich",
            type: "Vollzeit",
            experience: "3+ Jahre",
            teamSize: "15+ Personen",
            posted: "Vor 1 Woche",
            featured: false,
            urgent: true,
            description: "Für unsere wachsende Pharma-Sparte suchen wir einen engagierten Projektmanager zur Steuerung von GMP-konformen Anlagenprojekten.",
            responsibilities: [
                "Projektmanagement von Pharma-Anlagen",
                "GMP-konforme Projektabwicklung",
                "Stakeholder-Management",
                "Risikomanagement und Budgetkontrolle"
            ],
            requirements: [
                "Erfahrung im Pharma-Anlagenbau",
                "Kenntnisse der GMP-Richtlinien",
                "Projektmanagement-Zertifizierung von Vorteil",
                "Teamführungskompetenzen"
            ],
            benefits: [
                "Pharma-Branchenzuschlag",
                "30 Tage Urlaub",
                "Betriebliche Altersvorsorge",
                "Gesundheitsförderung"
            ]
        },
        {
            id: 3,
            title: "CAD-Konstrukteur Anlagentechnik",
            department: "Design & Engineering",
            location: "Linz, Österreich",
            type: "Vollzeit",
            experience: "2+ Jahre",
            teamSize: "5-8 Personen",
            posted: "Vor 3 Tagen",
            featured: false,
            urgent: false,
            description: "Verstärken Sie unser Konstruktionsteam als CAD-Spezialist für innovative Anlagentechnik-Lösungen mit modernster Software.",
            responsibilities: [
                "3D-CAD-Konstruktion von Anlagenkomponenten",
                "Erstellung technischer Dokumentationen",
                "Zusammenarbeit mit Planungsteams",
                "Optimierung von Konstruktionslösungen"
            ],
            requirements: [
                "Ausbildung als Technischer Zeichner oder Ingenieur",
                "Sehr gute AutoCAD/Inventor Kenntnisse",
                "Grundkenntnisse in der Anlagentechnik",
                "Genauigkeit und technisches Verständnis"
            ],
            benefits: [
                "Moderne CAD-Arbeitsplätze",
                "Regelmäßige Software-Schulungen",
                "Homeoffice-Möglichkeiten",
                "Junges, dynamisches Team"
            ]
        },
        {
            id: 4,
            title: "Bauleiter Industrieanlagen",
            department: "Site Services",
            location: "Salzburg, Österreich",
            type: "Vollzeit",
            experience: "4+ Jahre",
            teamSize: "20+ Personen",
            posted: "Vor 5 Tagen",
            featured: true,
            urgent: false,
            description: "Als Bauleiter koordinieren Sie die Errichtung komplexer Industrieanlagen direkt vor Ort und sorgen für termingerechte Projektabwicklung.",
            responsibilities: [
                "Baustellenleitung und -koordination",
                "Qualitätskontrolle und Abnahmen",
                "Sicherheitsmanagement",
                "Kommunikation mit Subunternehmern"
            ],
            requirements: [
                "Technische Ausbildung oder Studium",
                "Erfahrung in der Bauleitung",
                "Führungserfahrung und Durchsetzungsvermögen",
                "Reisebereitschaft"
            ],
            benefits: [
                "Auslösungen und Spesen",
                "Firmenwagen",
                "Überstundenausgleich",
                "Projektprämien"
            ]
        },
        {
            id: 5,
            title: "Trainee Anlagenbau",
            department: "Nachwuchsförderung",
            location: "Graz, Österreich",
            type: "Vollzeit",
            experience: "Berufseinsteiger",
            teamSize: "Rotation",
            posted: "Vor 1 Woche",
            featured: false,
            urgent: false,
            description: "Starten Sie Ihre Karriere im Anlagenbau mit unserem strukturierten 18-monatigen Trainee-Programm in verschiedenen Fachbereichen.",
            responsibilities: [
                "Rotation durch verschiedene Abteilungen",
                "Mitarbeit in echten Projekten",
                "Aufbau eines internen Netzwerks",
                "Entwicklung fachlicher Kompetenzen"
            ],
            requirements: [
                "Abgeschlossenes Studium (Maschinenbau, Verfahrenstechnik)",
                "Interesse am Anlagenbau",
                "Teamfähigkeit und Lernbereitschaft",
                "Sehr gute Kommunikationsfähigkeiten"
            ],
            benefits: [
                "Strukturiertes Entwicklungsprogramm",
                "Mentoring und Coaching",
                "Übernahmegarantie bei Erfolg",
                "Internationale Projekterfahrung"
            ]
        },
        {
            id: 6,
            title: "Automatisierungstechniker",
            department: "Automation",
            location: "Innsbruck, Österreich",
            type: "Vollzeit",
            experience: "3+ Jahre",
            teamSize: "6-10 Personen",
            posted: "Vor 4 Tagen",
            featured: false,
            urgent: true,
            description: "Für innovative Automatisierungslösungen in der Prozessindustrie suchen wir einen Spezialisten für SPS-Programmierung und Leitsysteme.",
            responsibilities: [
                "SPS-Programmierung (Siemens, ABB)",
                "Inbetriebnahme von Leitsystemen",
                "Optimierung von Automatisierungslösungen",
                "Support und Wartung bestehender Systeme"
            ],
            requirements: [
                "Ausbildung Elektrotechnik/Automatisierung",
                "Erfahrung mit SPS-Systemen",
                "Kenntnisse in SCADA/HMI-Systemen",
                "Problemlösungsorientiert"
            ],
            benefits: [
                "Technologie-Zuschlag",
                "Zertifizierungsprogramme",
                "Moderne Testumgebung",
                "Internationale Projekte"
            ]
        }
    ];

    const handleJobClick = (job) => {
        setSelectedJob(job);
    };

    const closeModal = () => {
        setSelectedJob(null);
    };

    const getDepartmentGradient = (department) => {
        const gradients = {
            'Engineering': 'linear-gradient(135deg, #1E3A5F, #2d4a73)',
            'Projektmanagement': 'linear-gradient(135deg, #E67E22, #d97706)',
            'Design & Engineering': 'linear-gradient(135deg, #1E3A5F, #2d4a73)',
            'Site Services': 'linear-gradient(135deg, #E67E22, #d97706)',
            'Nachwuchsförderung': 'linear-gradient(135deg, #8FA0A5, #6b7280)',
            'Automation': 'linear-gradient(135deg, #1E3A5F, #2d4a73)'
        };
        return gradients[department] || gradients['Engineering'];
    };

    return (
        <section ref={sectionRef} className={styles.jobsSection}>
            <div className={styles.container}>
                {/* Header */}
                <div className={`${styles.header} ${isVisible ? styles.headerVisible : ''}`}>
                    <div className={styles.badge}>
                        <div className={styles.badgeDot}></div>
                        <span>Aktuelle Stellenausschreibungen</span>
                        <Briefcase size={14} />
                    </div>

                    <h2 className={styles.title}>
                        Karriere bei <span className={styles.titleAccent}>PROMAX</span>
                    </h2>

                    <div className={styles.titleUnderline}></div>

                    <p className={styles.subtitle}>
                        Werden Sie Teil unseres innovativen Teams und gestalten Sie die Zukunft des Industrieanlagenbaus mit
                    </p>
                </div>

                {/* Jobs Grid */}
                <div className={styles.jobsGrid}>
                    {jobOpenings.map((job, index) => (
                        <div
                            key={job.id}
                            className={`${styles.jobCard} ${isVisible ? styles.jobCardVisible : ''} ${styles[`delay-${Math.min(index + 1, 6)}`]}`}
                            onMouseEnter={() => setHoveredCard(job.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            onClick={() => handleJobClick(job)}
                        >
                            <div className={styles.cardWrapper}>
                                {/* Card Header */}
                                <div className={styles.cardHeader}>
                                    <div className={styles.badgesContainer}>
                                        <span
                                            className={styles.departmentBadge}
                                            style={{ background: getDepartmentGradient(job.department) }}
                                        >
                                            {job.department}
                                        </span>
                                        {job.featured && (
                                            <span className={styles.featuredBadge}>
                                                <Star size={10} />
                                                Featured
                                            </span>
                                        )}
                                        {job.urgent && (
                                            <span className={styles.urgentBadge}>
                                                Urgent
                                            </span>
                                        )}
                                    </div>

                                    <h3 className={styles.jobTitle}>
                                        {job.title}
                                    </h3>

                                    <div className={styles.jobMeta}>
                                        <div className={styles.metaRow}>
                                            <MapPin size={14} />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className={styles.metaRowMultiple}>
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
                                </div>

                                {/* Card Body */}
                                <div className={styles.cardBody}>
                                    <p className={styles.jobDescription}>
                                        {job.description}
                                    </p>

                                    {/* Card Footer */}
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
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className={`${styles.ctaSection} ${isVisible ? styles.ctaSectionVisible : ''}`}>
                    <div className={styles.ctaContainer}>
                        <div className={styles.ctaContent}>
                            <h3 className={styles.ctaTitle}>
                                Sie finden nicht die passende Position?
                            </h3>
                            <p className={styles.ctaText}>
                                Senden Sie uns Ihre Initiativbewerbung. Wir sind immer auf der Suche nach talentierten Menschen.
                            </p>
                            <button className={styles.ctaButton}>
                                <span>Initiativbewerbung senden</span>
                                <div className={styles.ctaIcon}>
                                    <ArrowRight size={14} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Job Details Modal */}
            {selectedJob && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={closeModal}>
                            ×
                        </button>

                        {/* Modal Header */}
                        <div className={styles.modalHeader}>
                            <div className={styles.modalBadges}>
                                <span
                                    className={styles.modalDepartmentBadge}
                                    style={{ background: getDepartmentGradient(selectedJob.department) }}
                                >
                                    {selectedJob.department}
                                </span>
                                {selectedJob.featured && (
                                    <span className={styles.modalFeaturedBadge}>
                                        <Star size={12} />
                                        Featured
                                    </span>
                                )}
                                {selectedJob.urgent && (
                                    <span className={styles.modalUrgentBadge}>
                                        Urgent
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

                        {/* Modal Body */}
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

                            {/* Modal Footer */}
                            <div className={styles.modalFooter}>
                                <button className={styles.modalApplyButton}>
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
        </section>
    );
};

export default JobsSection;