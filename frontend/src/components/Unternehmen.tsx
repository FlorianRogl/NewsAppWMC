import  { useState, useEffect } from 'react';
import styles from '../css/Unternehmen.module.css';

const CompanyPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        {
            id: 1,
            title: "Chemie Projekte",
            description: "Innovative und sichere Lösungen für komplexe chemische Prozesse mit höchsten Sicherheitsstandards",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Chemie"
        },
        {
            id: 2,
            title: "Pharma Projekte",
            description: "GMP-konforme Anlagen für die Pharmaindustrie mit präziser Planung und fachgerechter Umsetzung",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Pharma"
        },
        {
            id: 3,
            title: "Energie & Umwelt",
            description: "Nachhaltige Lösungen für moderne Energie- und Umwelttechnik mit Fokus auf Effizienz",
            image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Energie"
        },
        {
            id: 4,
            title: "Papier & Zellstoff",
            description: "Spezialisierte Anlagenlösungen für die Papier- und Zellstoffindustrie mit jahrzehntelanger Erfahrung",
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Papier"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % projects.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [projects.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <h1 className={styles.heroTitle}>
                            Know-How und Leidenschaft für Ihr Projekt
                        </h1>
                        <p className={styles.heroSubtitle}>
                            PROMAX Project Management GesmbH - Ihr verlässlicher Partner im Industrieanlagenbau seit 1999
                        </p>
                        <div className={styles.heroStats}>
                            <div className={styles.heroStat}>
                                <span className={styles.statNumber}>25+</span>
                                <span className={styles.statLabel}>Jahre Erfahrung</span>
                            </div>
                            <div className={styles.heroStat}>
                                <span className={styles.statNumber}>35</span>
                                <span className={styles.statLabel}>Mitarbeiter</span>
                            </div>
                            <div className={styles.heroStat}>
                                <span className={styles.statNumber}>ISO</span>
                                <span className={styles.statLabel}>9001:2015</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.heroImage}>
                        <img
                            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="Industrieanlage"
                        />
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className={styles.overview}>
                <div className={styles.content}>
                    <div className={styles.overviewGrid}>
                        <div className={styles.overviewText}>
                            <h2 className={styles.sectionTitle}>Das Unternehmen</h2>
                            <p className={styles.leadText}>
                                PROMAX Project Management GesmbH wurde 1999 gegründet und beschäftigt derzeit ca. 35 Mitarbeiter.
                                Wir sind ein Dienstleistungsunternehmen im Industrieanlagenbau und bieten Anlagenbauern und
                                Anlagenbetreibern spezielles Know-How in den Bereichen Projektierung, Planung, Projekt Management,
                                Site Services und Organisationsberatung.
                            </p>
                            <p>
                                Schwerpunkte dabei bilden die Branchen Papier, Zellstoff, Pharma, Chemie sowie Energie- und
                                Umwelttechnik. Dem Projektgeschehen entsprechend sind wir für unsere Kunden sowohl in Österreich
                                als auch international aktiv.
                            </p>
                        </div>
                        <div className={styles.overviewImage}>
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="PROMAX Bürogebäude"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className={styles.mission}>
                <div className={styles.content}>
                    <div className={styles.missionGrid}>
                        <div className={styles.missionContent}>
                            <h2 className={styles.sectionTitle}>Unser Leitbild</h2>
                            <div className={styles.missionText}>
                                <div className={styles.valueCard}>
                                    <h3>Teamleistung & Qualifikation</h3>
                                    <p>
                                        Als Dienstleister ist das Ergebnis unserer Arbeit immer auch eine Teamleistung, deren
                                        Schlüsselfaktoren Qualifikation, Engagement, Kreativität, Verantwortungsbewusstsein,
                                        Flexibilität und Zielorientierung sind.
                                    </p>
                                </div>
                                <div className={styles.valueCard}>
                                    <h3>Arbeitsumfeld & Entwicklung</h3>
                                    <p>
                                        Es freut uns ein Arbeitsumfeld geschaffen zu haben, das einen konstruktiven Teamgeist
                                        ermöglicht, in dem sich Mitarbeiter weiterentwickeln und so zur Entwicklung des
                                        Unternehmens beitragen.
                                    </p>
                                </div>
                                <div className={styles.valueCard}>
                                    <h3>Faire Bedingungen</h3>
                                    <p>
                                        Wir bieten gute Dotierung, faire Vereinbarungen, interessante Aufgaben und vielfältige
                                        Entwicklungsmöglichkeiten in einem tollen Team.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.missionImage}>
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Team bei der Arbeit"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Fit im Job Section */}
            <section className={styles.fitImJob}>
                <div className={styles.content}>
                    <div className={styles.fitImJobGrid}>
                        <div className={styles.fitImJobImage}>
                            <img
                                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Gesundheit am Arbeitsplatz"
                            />
                        </div>
                        <div className={styles.fitImJobContent}>
                            <h2 className={styles.fitImJobTitle}>Fit im Job</h2>
                            <h3 className={styles.fitImJobSubtitle}>Gesundheit und Wohlbefinden unserer Mitarbeiter</h3>
                            <p className={styles.fitImJobText}>
                                Die Gesundheit und das Wohlbefinden unserer Mitarbeiter stehen bei PROMAX im Mittelpunkt.
                                Durch gezielte Maßnahmen zur Gesundheitsförderung schaffen wir ein Arbeitsumfeld, das nicht
                                nur produktiv, sondern auch gesund und motivierend ist.
                            </p>
                            <div className={styles.benefitsList}>
                                <div className={styles.benefit}>
                                    <span className={styles.benefitIcon}>🍎</span>
                                    <span>Täglich frischer Obstteller für alle Mitarbeiter</span>
                                </div>
                                <div className={styles.benefit}>
                                    <span className={styles.benefitIcon}>🍽️</span>
                                    <span>Tägliche Essensbons für warme Mittagessen</span>
                                </div>
                                <div className={styles.benefit}>
                                    <span className={styles.benefitIcon}>💪</span>
                                    <span>Kostenloser Fitnessraum am Standort Raaba-Grambach</span>
                                </div>
                            </div>
                            <div className={styles.fitImJobButtons}>
                                <button className={styles.primaryButton}>Mehr über Fit im Job</button>
                                <button className={styles.secondaryButton}>Jobs & Karriere</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Carousel */}
            <section className={styles.projects}>
                <div className={styles.content}>
                    <h2 className={styles.sectionTitle}>Projektberichte</h2>
                    <p className={styles.projectsIntro}>
                        Entdecken Sie unsere Referenzprojekte aus verschiedenen Industriebereichen
                    </p>

                    <div className={styles.carousel}>
                        <div className={styles.carouselContainer}>
                            <div
                                className={styles.carouselSlides}
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {projects.map((project) => (
                                    <div key={project.id} className={styles.slide}>
                                        <div className={styles.projectCard}>
                                            <div className={styles.projectImage}>
                                                <img src={project.image} alt={project.title} />
                                                <div className={styles.projectOverlay}>
                                                    <span className={styles.projectCategory}>{project.category}</span>
                                                </div>
                                            </div>
                                            <div className={styles.projectContent}>
                                                <h3>{project.title}</h3>
                                                <p>{project.description}</p>
                                                <button className={styles.projectButton}>Projekte ansehen</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className={styles.carouselBtn + ' ' + styles.prevBtn} onClick={prevSlide}>
                            &#8249;
                        </button>
                        <button className={styles.carouselBtn + ' ' + styles.nextBtn} onClick={nextSlide}>
                            &#8250;
                        </button>

                        <div className={styles.carouselDots}>
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                                    onClick={() => setCurrentSlide(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className={styles.team}>
                <div className={styles.content}>
                    <h2 className={styles.sectionTitle}>Ansprechpartner</h2>
                    <div className={styles.teamGrid}>
                        <div className={styles.teamMember}>
                            <div className={styles.memberImage}>
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                                    alt="Geschäftsführer"
                                />
                            </div>
                            <div className={styles.memberInfo}>
                                <h3>Geschäftsführung</h3>
                                <p className={styles.memberRole}>Gesamtleitung & Strategie</p>
                                <p className={styles.memberDescription}>
                                    Verantwortlich für die strategische Ausrichtung und Gesamtleitung des Unternehmens
                                    mit über 25 Jahren Erfahrung im Industrieanlagenbau.
                                </p>
                                <div className={styles.memberContact}>
                                    <p>📧 office@promax.at</p>
                                    <p>📞 +43 316 241393</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.teamMember}>
                            <div className={styles.memberImage}>
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                                    alt="Projektleitung"
                                />
                            </div>
                            <div className={styles.memberInfo}>
                                <h3>Projektleitung</h3>
                                <p className={styles.memberRole}>Projekt Management & Koordination</p>
                                <p className={styles.memberDescription}>
                                    Koordination und Leitung komplexer Industrieprojekte in den Bereichen Pharma,
                                    Chemie und Energie- & Umwelttechnik.
                                </p>
                                <div className={styles.memberContact}>
                                    <p>📧 office@promax.at</p>
                                    <p>📞 +43 316 241393</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ISO Certification */}
            <section className={styles.iso}>
                <div className={styles.content}>
                    <div className={styles.isoGrid}>
                        <div className={styles.isoContent}>
                            <h2 className={styles.sectionTitle}>Zertifizierung</h2>
                            <p className={styles.leadText}>
                                PROMAX Project Management GesmbH ist nach ISO 9001:2015 zertifiziert und gewährleistet
                                damit höchste Qualitätsstandards in allen Bereichen unserer Dienstleistungen.
                            </p>
                            <div className={styles.isoFeatures}>
                                <div className={styles.isoFeature}>
                                    <div className={styles.featureIcon}>✓</div>
                                    <div>
                                        <h4>Qualitätsmanagementsystem</h4>
                                        <p>Systematische Prozesse für konstante Qualität und kontinuierliche Verbesserung</p>
                                    </div>
                                </div>
                                <div className={styles.isoFeature}>
                                    <div className={styles.featureIcon}>✓</div>
                                    <div>
                                        <h4>Kundenorientierung</h4>
                                        <p>Fokus auf Kundenzufriedenheit und Erfüllung von Kundenanforderungen</p>
                                    </div>
                                </div>
                                <div className={styles.isoFeature}>
                                    <div className={styles.featureIcon}>✓</div>
                                    <div>
                                        <h4>Prozessverbesserung</h4>
                                        <p>Regelmäßige Bewertung und Optimierung aller Geschäftsprozesse</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.isoImage}>
                            <img
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="ISO Zertifizierung"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Downloads */}
            <section className={styles.downloads}>
                <div className={styles.content}>
                    <h2 className={styles.sectionTitle}>Downloads</h2>
                    <p className={styles.downloadsIntro}>
                        Laden Sie unsere wichtigsten Unternehmensunterlagen und Zertifikate herunter
                    </p>
                    <div className={styles.downloadsGrid}>
                        <div className={styles.downloadCard}>
                            <div className={styles.downloadIcon}>
                                <img
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80"
                                    alt="Unternehmens-Präsentation"
                                />
                            </div>
                            <h3>Unternehmens-Präsentation</h3>
                            <br/>
                            <br/>
                            <button className={styles.downloadBtn}>PDF herunterladen</button>
                        </div>

                        <div className={styles.downloadCard}>
                            <div className={styles.downloadIcon}>
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80"
                                    alt="AGB Ingenieurbüros"
                                />
                            </div>
                            <h3>AGB Ingenieurbüros</h3>
                            <br/>
                            <br/>
                            <button className={styles.downloadBtn}>PDF herunterladen</button>
                        </div>

                        <div className={styles.downloadCard}>
                            <div className={styles.downloadIcon}>
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80"
                                    alt="Leistungsübersicht"
                                />
                            </div>
                            <h3>Leistungsübersicht</h3>
                            <br/>
                            <br/>
                            <button className={styles.downloadBtn}>PDF herunterladen</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CompanyPage;