import React, { useState } from 'react';
import '../CSS/ModernLeistungen.css';

const ModernLeistungen = () => {
    const [activeService, setActiveService] = useState(0);
    const [activeTab, setActiveTab] = useState('software');

    const services = [
        {
            id: 1,
            title: "Projektierung",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            description: "Investitionsentscheidungen bedürfen umsetzbarer Basisplanungen, realistischer Terminpläne und belastbarer Projektbudgets",
            shortDesc: "Von der ersten Idee bis zur detaillierten Projektplanung",
            detailedDescription: "Investitionsentscheidungen bedürfen umsetzbarer Basisplanungen, realistischer Terminpläne und belastbarer Projektbudgets. PROMAX bietet Ihnen fundierte Projektierungsleistungen für den Industrieanlagenbau in den Branchen Papier, Zellstoff, Pharma, Chemie sowie Energie- und Umwelttechnik.",
            features: [
                "Machbarkeitsstudien & Konzeptentwicklung",
                "Technische Bewertung & Risikoanalyse",
                "Kostenermittlung & Wirtschaftlichkeitsanalyse",
                "Genehmigungsplanung & Behördenabstimmung",
                "Anlagenkonzepte & Verfahrensentwicklung",
                "Material- und Energiebilanzen",
                "Standortanalyse & Infrastrukturplanung",
                "Umweltverträglichkeitsprüfung"
            ],
            hoverInfo: {
                keyPoints: ["Machbarkeitsstudien", "Kostenplanung", "Genehmigungen"],
                industries: ["Papier & Zellstoff", "Pharma", "Chemie", "Energie & Umwelt"],
                experience: "seit 1999"
            },
            color: "#3B82F6",
            projects: "120+ Projekte",
            experience: "25 Jahre"
        },
        {
            id: 2,
            title: "Projektmanagement",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            description: "Professionelle Koordination und Steuerung aller Projektphasen von der Planung bis zur Inbetriebnahme",
            shortDesc: "Professionelle Projektleitung von A bis Z",
            detailedDescription: "Unser erfahrenes Projektmanagement-Team koordiniert alle Projektphasen und sorgt für die termingerechte, budgetkonforme Umsetzung Ihrer Anlagenprojekte. Wir verstehen uns als Ihr verlässlicher Partner im gesamten Projektlebenszyklus.",
            features: [
                "Terminplanung & -überwachung",
                "Kostencontrolling & Budgetmanagement",
                "Qualitätsmanagement & Dokumentation",
                "Koordination aller Projektbeteiligten",
                "Risikomanagement & Claim Management",
                "Lieferantenmanagement & Beschaffung",
                "Schnittstellenmanagement",
                "Reporting & Projektcontrolling"
            ],
            hoverInfo: {
                keyPoints: ["Terminüberwachung", "Kostencontrolling", "Qualitätsmanagement"],
                industries: ["Alle Industriebranchen"],
                experience: "500+ Projekte realisiert"
            },
            color: "#10B981",
            projects: "500+ Projekte",
            experience: "seit 1999"
        },
        {
            id: 3,
            title: "Planung",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            description: "3D-Anlagenplanung und Detail-Engineering mit modernster CAD-Technologie für präzise technische Lösungen",
            shortDesc: "3D-Planung und Detail-Engineering mit modernster Technologie",
            detailedDescription: "Mit modernster 3D-Planungssoftware und jahrelanger Erfahrung erstellen wir präzise technische Planungen für komplexe Industrieanlagen. Unser Engineering-Team arbeitet mit den neuesten Tools und Standards der Branche.",
            features: [
                "3D-Modellierung mit PDMS & AutoCAD Plant 3D",
                "Rohrleitungsplanung & Isometrien",
                "3D-Laserscanning & Bestandserfassung",
                "Stahlbauplanung & Konstruktion",
                "P&ID-Erstellung & Verfahrensfließbilder",
                "Apparate- und Maschinenaufstellung",
                "Elektro- und MSR-Planung Integration",
                "Kollisionsprüfung & Optimierung"
            ],
            hoverInfo: {
                keyPoints: ["PDMS", "AutoCAD Plant 3D", "3D-Laserscanning"],
                industries: ["Chemie", "Pharma", "Papier", "Energie"],
                experience: "PDMS seit 2005"
            },
            color: "#F59E0B",
            projects: "300+ Anlagen",
            experience: "PDMS seit 2005"
        },
        {
            id: 4,
            title: "Site Services",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            description: "Professionelle Vor-Ort-Betreuung während der gesamten Bauphase bis zur erfolgreichen Inbetriebnahme",
            shortDesc: "Vor-Ort-Betreuung während der gesamten Bauphase",
            detailedDescription: "Unsere Site Services stellen sicher, dass Ihr Projekt vor Ort professionell umgesetzt wird. Von der Montageüberwachung bis zur Inbetriebnahme begleiten unsere Experten jeden Schritt der Realisierung.",
            features: [
                "Montageüberwachung & Qualitätskontrolle",
                "Inbetriebnahmebegleitung & Commissioning",
                "Schulung & Know-how-Transfer",
                "Abnahme & Gewährleistungsbetreuung",
                "Sicherheitskoordination (SiGe)",
                "Fortschrittskontrolle & Berichtswesen",
                "Mängelmanagement & Nacharbeiten",
                "Performance-Tests & Optimierung"
            ],
            hoverInfo: {
                keyPoints: ["Montageüberwachung", "Inbetriebnahme", "Qualitätskontrolle"],
                industries: ["International tätig"],
                experience: "Österreich & International"
            },
            color: "#EF4444",
            projects: "150+ Baustellen",
            experience: "International"
        },
        {
            id: 5,
            title: "Organisationsberatung",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            description: "Optimierung von Unternehmensprozessen und -strukturen für mehr Effizienz im Industrieanlagenbau",
            shortDesc: "Optimierung von Prozessen und Strukturen",
            detailedDescription: "Wir unterstützen Sie bei der Optimierung Ihrer Unternehmensprozesse und -strukturen. Unser Beratungsteam analysiert bestehende Abläufe und entwickelt maßgeschneiderte Lösungen für mehr Effizienz.",
            features: [
                "Prozessoptimierung & Workflow-Analyse",
                "Change Management & Organisationsentwicklung",
                "Qualitätsmanagementsysteme (ISO 9001)",
                "Digitalisierungsstrategien & Industrie 4.0",
                "Lean Management & Six Sigma",
                "Compliance & Risikomanagement",
                "Personalentwicklung & Schulungskonzepte",
                "IT-Integration & Systemoptimierung"
            ],
            hoverInfo: {
                keyPoints: ["Prozessoptimierung", "Change Management", "ISO 9001"],
                industries: ["Alle Industriebranchen"],
                experience: "25 Jahre Branchenerfahrung"
            },
            color: "#8B5CF6",
            projects: "80+ Beratungen",
            experience: "Alle Branchen"
        }
    ];

    const technologies = {
        software: [
            {
                name: "PDMS",
                description: "3D-Anlagenplanung",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                details: "Seit 2005 im Einsatz",
                projects: "300+ Anlagen modelliert"
            },
            {
                name: "AutoCAD Plant 3D",
                description: "Rohrleitungsplanung",
                image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                details: "Zertifizierte Anwender",
                projects: "500+ Isometrien erstellt"
            },
            {
                name: "ROHR 2",
                description: "Rohrleitungsberechnung",
                image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                details: "Thermodynamische Berechnung",
                projects: "Alle Druckstufen"
            },
            {
                name: "PointSense Plant",
                description: "3D-Laserscanning",
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                details: "Millimetergenau",
                projects: "Bestandserfassung"
            },
            {
                name: "Microsoft Project",
                description: "Projektmanagement",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                details: "Enterprise Standard",
                projects: "500+ Projekte geplant"
            }
        ],
        branchen: [
            {
                name: "Chemie",
                description: "Verfahrenstechnik",
                image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                details: "25 Jahre Erfahrung",
                projects: "150+ Chemieanlagen"
            },
            {
                name: "Pharma",
                description: "GMP-konforme Anlagen",
                image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                details: "FDA/EMA Standards",
                projects: "80+ Pharmaprojekte"
            },
            {
                name: "Energie & Umwelt",
                description: "Nachhaltige Technologien",
                image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                details: "Erneuerbare Energien",
                projects: "100+ Umweltanlagen"
            },
            {
                name: "Papier & Zellstoff",
                description: "Prozessanlagen",
                image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                details: "Internationale Projekte",
                projects: "120+ Papiermaschinen"
            },
            {
                name: "Lebensmittel",
                description: "Hygienische Anlagen",
                image: "https://images.unsplash.com/photo-1556909114-5a7aca529e4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                details: "HACCP-konforme Planung",
                projects: "60+ Produktionsanlagen"
            }
        ]
    };

    const projectPhases = [
        {
            phase: "01",
            title: "Projektinitiierung",
            duration: "2-4 Wochen",
            description: "Anforderungsanalyse, Machbarkeitsstudie und Projektdefinition",
            deliverables: ["Lastenheft", "Machbarkeitsstudie", "Kostenrahmen", "Terminplan"],
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
            phase: "02",
            title: "Vorplanung",
            duration: "4-8 Wochen",
            description: "Konzeptentwicklung, Grundfließbilder und erste Kostenschätzung",
            deliverables: ["Anlagenkonzept", "Grundfließbilder", "Layout-Studien", "Genehmigungsantrag"],
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
            phase: "03",
            title: "Entwurfsplanung",
            duration: "8-12 Wochen",
            description: "Detaillierte Planung, 3D-Modellierung und Spezifikationen",
            deliverables: ["3D-Modell", "P&ID", "Ausschreibungsunterlagen", "Kostenberechnung"],
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
            phase: "04",
            title: "Ausführungsplanung",
            duration: "6-10 Wochen",
            description: "Werkstattzeichnungen, Materiallisten und Montageplanung",
            deliverables: ["Werkstattzeichnungen", "Isometrien", "Materiallisten", "Montageplan"],
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
            phase: "05",
            title: "Realisierung",
            duration: "12-52 Wochen",
            description: "Montageüberwachung, Qualitätskontrolle und Inbetriebnahme",
            deliverables: ["Montageüberwachung", "Qualitätsprüfungen", "Inbetriebnahme", "Dokumentation"],
            image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        }
    ];

    const certifications = [
        {
            title: "ISO 9001:2015",
            description: "Qualitätsmanagementsystem",
            icon: "🏆",
            year: "seit 2010"
        },
        {
            title: "SCC**",
            description: "Sicherheitszertifikat Auftragnehmer",
            icon: "🛡️",
            year: "seit 2012"
        },
        {
            title: "PDMS Authorized User",
            description: "Aveva PDMS Zertifizierung",
            icon: "📋",
            year: "seit 2005"
        },
        {
            title: "AutoCAD Certified",
            description: "Autodesk Professional Zertifizierung",
            icon: "⚙️",
            year: "seit 2008"
        }
    ];

    return (
        <div className="modern-leistungen">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <span className="hero-badge">Unsere Leistungen</span>
                        <h1 className="hero-title">
                            Know-How und Leidenschaft
                            <span className="highlight"> für Ihr Projekt</span>
                        </h1>
                        <p className="hero-description">
                            Von der ersten Projektidee bis zur erfolgreichen Inbetriebnahme -
                            PROMAX begleitet Sie durch alle Phasen Ihres Industrieprojekts mit
                            höchster Kompetenz und bewährter Erfahrung in über 500 realisierten Projekten.
                        </p>
                        <div className="hero-highlights">
                            <div className="hero-highlight">
                                <span className="highlight-text">25+ Jahre Erfahrung</span>
                                <span className="highlight-subtext">seit 1999</span>
                            </div>
                            <div className="hero-highlight">
                                <span className="highlight-text">500+ Projekte realisiert</span>
                                <span className="highlight-subtext">erfolgreich abgeschlossen</span>
                            </div>
                            <div className="hero-highlight">
                                <span className="highlight-text">ISO 9001:2015 zertifiziert</span>
                                <span className="highlight-subtext">Qualitätsstandard</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="hero-image">
                            <img
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Industrieanlage"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services">
                <div className="services-container">
                    <div className="section-header">
                        <h2 className="section-title">Unsere Kernkompetenzen</h2>
                        <p className="section-subtitle">
                            Fünf Leistungsbereiche, die nahtlos ineinandergreifen und Ihr Projekt zum Erfolg führen
                        </p>
                    </div>

                    <div className="services-grid">
                        {services.slice(0, 3).map((service, index) => (
                            <div
                                key={service.id}
                                className={`service-card ${activeService === index ? 'active' : ''}`}
                                onClick={() => setActiveService(index)}
                                style={{ '--service-color': service.color } as React.CSSProperties}
                            >
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.shortDesc}</p>
                                    <div className="service-stats">
                                        <span className="service-stat">{service.projects}</span>
                                        <span className="service-stat">{service.experience}</span>
                                    </div>
                                </div>
                                <div className="service-hover-info">
                                    <div className="hover-content">
                                        <h4>Kernleistungen:</h4>
                                        <ul className="hover-points">
                                            {service.hoverInfo.keyPoints.map((point, idx) => (
                                                <li key={idx}>• {point}</li>
                                            ))}
                                        </ul>
                                        <div className="hover-industries">
                                            <strong>Branchen:</strong>
                                            <span>{service.hoverInfo.industries.join(', ')}</span>
                                        </div>
                                        <div className="hover-experience">
                                            <strong>Erfahrung:</strong>
                                            <span>{service.hoverInfo.experience}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="services-grid-bottom">
                        {services.slice(3, 5).map((service, index) => (
                            <div
                                key={service.id}
                                className={`service-card ${activeService === (index + 3) ? 'active' : ''}`}
                                onClick={() => setActiveService(index + 3)}
                                style={{ '--service-color': service.color } as React.CSSProperties}
                            >
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.shortDesc}</p>
                                    <div className="service-stats">
                                        <span className="service-stat">{service.projects}</span>
                                        <span className="service-stat">{service.experience}</span>
                                    </div>
                                </div>
                                <div className="service-hover-info">
                                    <div className="hover-content">
                                        <h4>Kernleistungen:</h4>
                                        <ul className="hover-points">
                                            {service.hoverInfo.keyPoints.map((point, idx) => (
                                                <li key={idx}>• {point}</li>
                                            ))}
                                        </ul>
                                        <div className="hover-industries">
                                            <strong>Branchen:</strong>
                                            <span>{service.hoverInfo.industries.join(', ')}</span>
                                        </div>
                                        <div className="hover-experience">
                                            <strong>Erfahrung:</strong>
                                            <span>{service.hoverInfo.experience}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="service-details">
                        <div className="detail-header">
                            <div className="detail-image">
                                <img src={services[activeService].image} alt={services[activeService].title} />
                            </div>
                            <div className="detail-info">
                                <h3 className="detail-title">{services[activeService].title}</h3>
                                <p className="detail-description">{services[activeService].detailedDescription}</p>
                                <div className="detail-stats">
                                    <span className="detail-stat">
                                        <strong>{services[activeService].projects}</strong>
                                    </span>
                                    <span className="detail-stat">
                                        <strong>{services[activeService].experience}</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="detail-features">
                            {services[activeService].features.map((feature, index) => (
                                <div key={index} className="feature-item">
                                    <span className="feature-check">✓</span>
                                    <span className="feature-text">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies & Expertise */}
            <section className="technologies">
                <div className="technologies-container">
                    <div className="section-header">
                        <h2 className="section-title">Technologie & Expertise</h2>
                        <p className="section-subtitle">
                            Modernste Software-Tools und branchenspezifisches Know-how
                        </p>
                    </div>

                    <div className="tech-tabs">
                        <button
                            className={`tech-tab ${activeTab === 'software' ? 'active' : ''}`}
                            onClick={() => setActiveTab('software')}
                        >
                            Software & Tools
                        </button>
                        <button
                            className={`tech-tab ${activeTab === 'branchen' ? 'active' : ''}`}
                            onClick={() => setActiveTab('branchen')}
                        >
                            Branchen-Expertise
                        </button>
                    </div>

                    <div className="tech-grid">
                        {technologies[activeTab].slice(0, 5).map((tech, index) => (
                            <div key={index} className="tech-item">
                                <div className="tech-image">
                                    <img src={tech.image} alt={tech.name} />
                                </div>
                                <div className="tech-content">
                                    <h4 className="tech-name">{tech.name}</h4>
                                    <p className="tech-description">{tech.description}</p>
                                    <div className="tech-details">
                                        <span className="tech-detail">{tech.details}</span>
                                        <span className="tech-projects">{tech.projects}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Phases */}
            <section className="phases">
                <div className="phases-container">
                    <div className="section-header">
                        <h2 className="section-title">Unser Projektablauf</h2>
                        <p className="section-subtitle">
                            Strukturierter 5-Phasen-Prozess von der Idee zur Realisierung
                        </p>
                    </div>

                    <div className="phases-timeline">
                        {projectPhases.map((phase, index) => (
                            <div key={index} className="phase-item">
                                <div className="phase-image">
                                    <img src={phase.image} alt={phase.title} />
                                    <div className="phase-number">{phase.phase}</div>
                                </div>
                                <div className="phase-content">
                                    <div className="phase-header">
                                        <h3 className="phase-title">{phase.title}</h3>
                                        <span className="phase-duration">{phase.duration}</span>
                                    </div>
                                    <p className="phase-description">{phase.description}</p>
                                    <div className="phase-deliverables">
                                        <h4>Leistungen:</h4>
                                        <ul>
                                            {phase.deliverables.map((deliverable, idx) => (
                                                <li key={idx}>{deliverable}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="certifications">
                <div className="certifications-container">
                    <div className="section-header">
                        <h2 className="section-title">Zertifizierungen & Standards</h2>
                        <p className="section-subtitle">
                            Höchste Qualitätsstandards durch anerkannte Zertifizierungen
                        </p>
                    </div>

                    <div className="cert-grid">
                        {certifications.map((cert, index) => (
                            <div key={index} className="cert-card">
                                <div className="cert-icon">{cert.icon}</div>
                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-description">{cert.description}</p>
                                <span className="cert-year">{cert.year}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose">
                <div className="why-choose-container">
                    <div className="why-choose-content">
                        <div className="why-choose-text">
                            <span className="why-choose-badge">Warum PROMAX?</span>
                            <h2 className="why-choose-title">
                                25 Jahre Erfahrung in
                                <span className="highlight"> komplexen Industrieprojekten</span>
                            </h2>
                            <p className="why-choose-description">
                                PROMAX Project Management GesmbH vereint langjährige Erfahrung mit
                                modernster Technologie. Unser Team aus 35 Spezialisten betreut Projekte
                                in der Chemie-, Pharma-, Energie- und Papierindustrie mit höchsten Qualitätsstandards.
                            </p>
                            <div className="why-choose-highlights">
                                <div className="highlight-item">
                                    <span className="highlight-icon">🏆</span>
                                    <div>
                                        <strong>ISO 9001:2015 zertifiziert</strong>
                                        <p>Qualitätsmanagementsystem seit 2010</p>
                                    </div>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">🌍</span>
                                    <div>
                                        <strong>International tätig</strong>
                                        <p>Projekte in Europa, Asien und Amerika</p>
                                    </div>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">⚡</span>
                                    <div>
                                        <strong>Modernste 3D-Technologie</strong>
                                        <p>PDMS, AutoCAD Plant 3D, 3D-Laserscanning</p>
                                    </div>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">👥</span>
                                    <div>
                                        <strong>Starkes Team</strong>
                                        <p>35 Ingenieure und Techniker mit Branchenerfahrung</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="why-choose-visual">
                            <div className="why-choose-image">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="PROMAX Team"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="cta-container">
                    <div className="cta-content">
                        <h2 className="cta-title">Bereit für Ihr nächstes Projekt?</h2>
                        <p className="cta-description">
                            Lassen Sie uns gemeinsam Ihre Projektidee in die Realität umsetzen.
                            Kontaktieren Sie uns für eine unverbindliche Beratung und profitieren Sie
                            von unserer 25-jährigen Erfahrung in über 500 erfolgreichen Projekten.
                        </p>
                        <div className="cta-buttons">
                            <button className="cta-primary">Projekt besprechen</button>
                            <button className="cta-secondary">Referenzen ansehen</button>
                        </div>
                        <div className="cta-contact">
                            <div className="contact-item">
                                <span>📞</span>
                                <span>+43 (0) 316 / 241 393</span>
                            </div>
                            <div className="contact-item">
                                <span>📧</span>
                                <span>office@promax.at</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ModernLeistungen;