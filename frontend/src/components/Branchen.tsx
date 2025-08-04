import React, { useState } from 'react';
import '../CSS/brancheCSS.css';

const Branchen = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeProject, setActiveProject] = useState(0);

    const services = [
        {
            id: 1,
            category: "Chemie",
            title: "Chemie",
            image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=180&fit=crop&auto=format",
            features: [
                "3D Modellerstellung Layout, Isometrien, Materialerfassung",
                "Rohrleitungsdetailplanung",
                "Anlagenoptimierung",
                "Projektabwicklung, Anlagenplanung, Montage- und Inbetriebnahmekoordination",
                "Montageüberwachung",
                "PDMS 3D Layout"
            ]
        },
        {
            id: 2,
            category: "Energie & Umwelt",
            title: "Energie & Umwelt",
            image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=180&fit=crop&auto=format",
            features: [
                "Projektabwicklung, Beschaffungsmanagement, Anlagendokumentation",
                "3D Anlagen- und Rohrleitungsplanung",
                "Detail Engineering PDMS",
                "Projektmanagement / Projektleitung",
                "Fachbauüberwrachung",
                "CAD Anlagenlayout"
            ]
        },
        {
            id: 3,
            category: "Pharma",
            title: "Pharma",
            image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=180&fit=crop&auto=format",
            features: [
                "3D Anlagen- und Rohrleitungsplanung",
                "Detail-Engineering, Rohrleitungsplanung und Aufstellungsplanung 3D PDMS",
                "Montageüberwachung und Dokumentation",
                "Schema- und Aufstellungsplanung, Lieferantenüberwachung",
                "Beschaffungsmanagement",
                "PDMS Workshop"
            ]
        },
        {
            id: 4,
            category: "Papier & Zellstoff",
            title: "Papier & Zellstoff",
            image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=180&fit=crop&auto=format",
            features: [
                "Projektabwicklung, Beschaffung, Montagekoordination",
                "PDMS-Draft, Detail-Engineering",
                "3D-Modellierung für Maschinenverrohrung und Maschinenplanung",
                "Project Director",
                "Engineering Koordinator der Balance of Plant Areas",
                "General Project Management"
            ]
        },
        {
            id: 5,
            category: "Weitere Referenzen",
            title: "Weitere Referenzen",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=180&fit=crop&auto=format",
            features: [
                "Lebensmittel & Pneumatik",
                "Energiespeicherung",
                "Pilotanlagen & CE-Zertifikat",
                "Abfallbehandlung",
                "Gasreinigung"
            ]
        }
    ];

    const projectExamples = [
        {
            id: 1,
            category: "Chemie",
            name: "Thermisches Verfahren",
            description: "Planung, Site Services",
            location: "Österreich",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=250&fit=crop&auto=format",
            services: [
                "Layoutplanung",
                "Stahlbauleitplanung",
                "Rohrleitungsdetailplanung",
                "ROHR 2 Berechnung",
                "Montageüberwachung",
                "Qualitätskontrolle"
            ]
        },
        {
            id: 2,
            category: "Chemie",
            name: "Rohstoffbunker",
            description: "Project Management, Planung, Beschaffung, Site Services",
            location: "Österreich",
            image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=500&h=250&fit=crop&auto=format",
            services: [
                "Projektabwicklung",
                "Logistikkonzept",
                "Detailplanung",
                "Ausschreibung",
                "Inbetriebnahmeassistenz"
            ]
        },
        {
            id: 3,
            category: "Chemie",
            name: "Chemisches Verfahren",
            description: "Planung, Beschaffung, Site Services",
            location: "Österreich",
            image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=500&h=250&fit=crop&auto=format",
            services: [
                "Einreichplanung",
                "Anlagendetailplanung",
                "Schnittstellenabstimmung",
                "Montageendabrechnung",
                "Anlagendokumentation"
            ]
        },
        {
            id: 4,
            category: "Chemie",
            name: "Abluftwäscheranlage",
            description: "Planung, Beschaffung, Site Services",
            location: "Österreich",
            image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=500&h=250&fit=crop&auto=format",
            services: [
                "Bestandserfassung",
                "Statik-Koordination",
                "Rohrleitungsdetailplanung",
                "Dehnungskonzept",
                "Montagekonzept"
            ]
        },
        {
            id: 5,
            category: "Energie & Umwelt",
            name: "Reaktorsimulation",
            description: "Konzipierung, Anlagenlayout, Simulation, Visualisierung",
            location: "Deutschland",
            image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=500&h=250&fit=crop&auto=format",
            services: [
                "Konzipierung",
                "Anlagenlayout",
                "Simulation",
                "Visualisierung"
            ]
        },
        {
            id: 6,
            category: "Energie & Umwelt",
            name: "Konzeptstudien",
            description: "Konzipierung, Anlagenlayout, Stahlbauplanung",
            location: "Deutschland",
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=250&fit=crop&auto=format",
            services: [
                "Konzipierung",
                "Anlagenlayout",
                "Stahlbauplanung",
                "Kanal und Rohrleitungstechnik",
                "Ausschreibungsunterlagen",
                "Angebotsvergleiche"
            ]
        },
        {
            id: 7,
            category: "Energie & Umwelt",
            name: "Planung & Siteservice",
            description: "Layout Planung, Rohrleitungsplanung, Stahlbauplanung",
            location: "Österreich",
            image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=250&fit=crop&auto=format",
            services: [
                "Layout Planung",
                "Rohrleitungsplanung",
                "Stahlbauplanung",
                "Ausschreibung",
                "Einkaufsverhandlungen",
                "Montageaufsicht"
            ]
        },
        {
            id: 8,
            category: "Energie & Umwelt",
            name: "Kesseloptimierung",
            description: "Layout, Rohrleitungstechnik, Stahlbauplanung",
            location: "Österreich",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=250&fit=crop&auto=format",
            services: [
                "Layout",
                "Rohrleitungstechnik",
                "Stahlbauplanung",
                "Detailkonstruktion",
                "Ausschreibungsunterlagen"
            ]
        },
        {
            id: 9,
            category: "Pharma",
            name: "Bulking Room",
            description: "Projektabwicklung, Planung",
            location: "Deutschland",
            image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=500&h=250&fit=crop&auto=format",
            services: [
                "Anlagentechnische",
                "Projektleitung",
                "Schema- und Layout-Planung",
                "Lieferantenmonitoring und",
                "Terminverfolgung"
            ]
        },
        {
            id: 10,
            category: "Pharma",
            name: "Reagenzienproduktion Detailplanung",
            description: "Aufstellungsplanung, Rohrleitungsplanung, Detail-Engineering",
            location: "Schweiz",
            image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=500&h=250&fit=crop&auto=format",
            services: [
                "Aufstellungsplanung",
                "Rohrleitungsplanung",
                "Detail-Engineering"
            ]
        },
        {
            id: 11,
            category: "Pharma",
            name: "Pharmaprojekte",
            description: "Beschaffungsmanagement",
            location: "Schweiz",
            image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=500&h=250&fit=crop&auto=format",
            services: [
                "User requirement specifications (URS)",
                "Herstellerüberwachung",
                "Dokumentationserstellung",
                "Qualifizierungsassistenz"
            ]
        },
        {
            id: 12,
            category: "Pharma",
            name: "Fermentation",
            description: "Projektierung",
            location: "Deutschland",
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=250&fit=crop&auto=format",
            services: [
                "Anlagenkonzept",
                "Material- und Personalflusspläne",
                "Logistikkonzept",
                "Grobmengenermittlung"
            ]
        },
        {
            id: 13,
            category: "Papier & Zellstoff",
            name: "Papiermaschine",
            description: "3D Detailplanung und 2D Draft-Erstellung",
            location: "Österreich",
            image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=250&fit=crop&auto=format",
            services: [
                "3D Detailplanung und 2D Draft-Erstellung",
                "Modellierung von Equipment und Civil",
                "Erstellung Fundamentleitpläne"
            ]
        },
        {
            id: 14,
            category: "Papier & Zellstoff",
            name: "Zellstoffanlage(n) Bahntrocknung, Ballenlinie u. Wet End",
            description: "Projektabwicklung und -realisierung in der Funktion des Project Directors",
            location: "International",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=250&fit=crop&auto=format",
            services: [
                "Projektabwicklung und",
                "-realisierung in der Funktion des Project Directors"
            ]
        },
        {
            id: 15,
            category: "Papier & Zellstoff",
            name: "Bahntrocknung inkl. Ballenlinien",
            description: "Assistenz der Projektleitung",
            location: "International",
            image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=500&h=250&fit=crop&auto=format",
            services: [
                "Assistenz der Projektleitung",
                "Terminplanung, -verfolgung, Reporting u. Koordination Projekt Follow-up"
            ]
        },
        {
            id: 16,
            category: "Papier & Zellstoff",
            name: "PM und Ausrüstung",
            description: "Termin- und Projekt-koordination von Investitionsprojekten",
            location: "International",
            image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=500&h=250&fit=crop&auto=format",
            services: [
                "Termin- und Projekt-koordination von Investitionsprojekten",
                "Budgetverfolgung technische Teilprojektabwicklung"
            ]
        }
    ];

    const weitereBranchen = [
        {
            branche: "Lebensmittel- und Ernährungsindustrie",
            anlagentypen: "Produktionsanlagen für Senf, Essigproduktion, Produktionsanlagen für Süßwaren, Anlagen zur Aufarbeitung pflanzlicher Rohstoffe",
            leistungen: [
                "Erstellung von Rohrklassen",
                "Rohrleitungsplanung",
                "Rohrleitungsberechnungen",
                "Projektierung Anlagenerweiterung Aufstellungskonzept und Kosten"
            ]
        },
        {
            branche: "Lederindustrie",
            anlagentypen: "Rohstoffaufbereitung, Neben- und Hilfsanlagen, Farbküche, Trocknung, Stanzerei, etc.",
            leistungen: [
                "IST-Stand-Erfassung Erstellung von Einreichunterlagen und Brandschutzplänen",
                "Layout und Rohrführungs-Konzepte für Anlagenerweiterungen",
                "Betriebsanlagendokumentation"
            ]
        },
        {
            branche: "Automobil - Forschung und Zulieferbetriebe",
            anlagentypen: "Prüfstände, Kabelfertigung, Heizhaus (Sanierung)",
            leistungen: [
                "Rohrplanung Kühlwasserversorgung",
                "Vertragsconsulting (Gas und Strom)",
                "Projektierung, Ausschreibung und Angebotsevaluierung",
                "Vorbereitung von Unterlagen für UMS Audits"
            ]
        },
        {
            branche: "Maschinenbau Recycling Stahlbaufertigung",
            anlagentypen: "Produktionsanlagen für Kräne, Kunststoffaufbereitung",
            leistungen: [
                "Claim Management",
                "Anlagen-Layout-Planung",
                "IST-Stand-Erfassung"
            ]
        }
    ];

    const handleShowProjects = (category: string) => {
        if (category === "Weitere Referenzen") {
            setShowModal(true);
            setActiveProject(-1);
            document.body.style.overflow = 'hidden';
        } else {
            const categoryProjects = projectExamples.filter(project => project.category === category);
            if (categoryProjects.length > 0) {
                setShowModal(true);
                setActiveProject(projectExamples.indexOf(categoryProjects[0]));
                document.body.style.overflow = 'hidden';
            }
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setActiveProject(0);
        document.body.style.overflow = 'unset';
    };

    const handleTabClick = (index: React.SetStateAction<number>) => {
        setActiveProject(index);
    };

    return (
        <div className="branches-container">
            {/* Hero Section - NAVBAR KOMPATIBEL */}
            <section className="hero-section" style={{ marginTop: '80px' }}>
                <div className="hero-content">
                    <h1 className="hero-title">
                        Know-how und Leidenschaft<br />
                        für Ihr Projekt
                    </h1>
                    <p className="hero-subtitle">
                        Professionelle Anlagenbauplanung und Projektmanagement für
                        verschiedene Industriebranchen mit höchsten Qualitätsstandards
                    </p>
                </div>
            </section>

            <main className="main-content">
                <div className="section-header">
                    <h2 className="section-title">Unsere Kompetenzbereiche</h2>
                    <p className="section-description">
                        Von der ersten Idee bis zur finalen Inbetriebnahme - wir begleiten Sie
                        durch alle Phasen Ihres Industrieprojekts.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="service-image"
                            />
                            <div className="service-content">
                                <span className="service-category">{service.category}</span>
                                <h3 className="service-title">{service.title}</h3>
                                <ul className="service-features">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="feature-item">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className="projects-button"
                                    onClick={() => handleShowProjects(service.category)}
                                >
                                    Projektbeispiele ansehen
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="company-section">
                    <div className="company-header">
                        <h2 className="company-title">PROMAX Project Management GesmbH</h2>
                        <p className="company-tagline">
                            Ihr verlässlicher Partner für industrielle Anlagenprojekte in Österreich und Europa
                        </p>
                    </div>

                    <div className="contact-grid">
                        <div className="contact-item">
                            <div className="contact-icon">📍</div>
                            <div className="contact-label">Adresse</div>
                            <div className="contact-value">
                                Parkring 18/F<br />
                                A-8074 Raaba-Grambach
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">✉️</div>
                            <div className="contact-label">E-Mail</div>
                            <div className="contact-value">
                                office@promax.at
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">📞</div>
                            <div className="contact-label">Telefon</div>
                            <div className="contact-value">
                                +43 (0) 316 / 241 393
                            </div>
                        </div>
                    </div>

                    <div className="copyright">
                        © 2022 PROMAX Project Management GesmbH. Alle Rechte vorbehalten.
                    </div>
                </section>
            </main>

            <div className={`project-modal-overlay ${showModal ? 'active' : ''}`} onClick={handleCloseModal}>
                <div className="project-modal" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <button className="close-modal" onClick={handleCloseModal}>
                            ×
                        </button>
                        <h2 className="modal-title">Projektbeispiele</h2>
                        <p className="modal-subtitle">
                            Referenzprojekte aus verschiedenen Industriebereichen
                        </p>
                    </div>

                    {activeProject !== -1 && (
                        <div className="project-tabs">
                            {projectExamples
                                .filter(project => project.category === projectExamples[activeProject]?.category)
                                .map((project) => (
                                    <button
                                        key={project.id}
                                        className={`tab-button ${activeProject === projectExamples.indexOf(project) ? 'active' : ''}`}
                                        onClick={() => handleTabClick(projectExamples.indexOf(project))}
                                    >
                                        {project.name}
                                    </button>
                                ))}
                        </div>
                    )}

                    {activeProject === -1 ? (
                        <div className="weitere-branchen-content">
                            <div className="weitere-branchen-intro">
                                <h3>Weitere Branchen</h3>
                                <p>Neben den zuvor genannten Hauptbranchen bringen wir unser Leistungsspektrum für Anlagenbauer und Anlagenbetreiber aus Industrie und Gewerbe auch in anderen Branchen zum Einsatz.</p>
                            </div>
                            <table className="branchen-table">
                                <thead>
                                <tr>
                                    <th>Branche</th>
                                    <th>Anlagentypen und -bereiche</th>
                                    <th>Leistungen</th>
                                </tr>
                                </thead>
                                <tbody>
                                {weitereBranchen.map((branche, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="branche-name">{branche.branche}</div>
                                        </td>
                                        <td>
                                            <div className="anlagentypen">{branche.anlagentypen}</div>
                                        </td>
                                        <td>
                                            <ul className="leistungen-list">
                                                {branche.leistungen.map((leistung, idx) => (
                                                    <li key={idx}>{leistung}</li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="project-content">
                            <div className="project-display">
                                <div className="project-image-section">
                                    <img
                                        src={projectExamples[activeProject].image}
                                        alt={projectExamples[activeProject].name}
                                        className="project-main-image"
                                    />
                                </div>

                                <div className="project-details">
                                    <div className="project-header">
                                        <span className="project-category-badge">
                                            {projectExamples[activeProject].category}
                                        </span>
                                        <h3 className="project-name">
                                            {projectExamples[activeProject].name}
                                        </h3>
                                        <p className="project-description">
                                            {projectExamples[activeProject].description}
                                        </p>
                                        {projectExamples[activeProject].location && (
                                            <div className="project-location">
                                                {projectExamples[activeProject].location}
                                            </div>
                                        )}
                                    </div>

                                    <div className="services-section">
                                        <h4 className="services-title">Leistungsumfang</h4>
                                        <ul className="project-services">
                                            {projectExamples[activeProject].services.map((service, index) => (
                                                <li key={index} className="project-service-item">
                                                    {service}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Branchen;