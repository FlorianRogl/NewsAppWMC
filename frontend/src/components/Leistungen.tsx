import React, { useState, useEffect } from 'react';

// TypeScript Interfaces
interface Service {
    id: number;
    title: string;
    image: string;
    description: string;
    shortDesc: string;
    detailedDescription: string;
    features: string[];
    hoverInfo: {
        keyPoints: string[];
        industries: string[];
        experience: string;
    };
    color: string;
    projects: string;
    experience: string;
}

interface Technology {
    name: string;
    description: string;
    image: string;
    details: string;
    projects: string;
    fullDescription: string;
    features: string[];
    specifications: string[];
    advantages: string[];
}

interface Technologies {
    software: Technology[];
    branchen: Technology[];
}

interface ProjectPhase {
    phase: string;
    title: string;
    duration: string;
    description: string;
    deliverables: string[];
    image: string;
}

interface Certification {
    title: string;
    description: string;
    icon: string;
    year: string;
}

const ModernLeistungen: React.FC = () => {
    const [activeService, setActiveService] = useState<number>(0);
    const [activeTab, setActiveTab] = useState<keyof Technologies>('software');
    const [showModal, setShowModal] = useState(false);
    const [selectedTech, setSelectedTech] = useState<Technology | null>(null);
    const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

    // Intersection Observer für Scroll-Animationen
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleElements(prev => new Set(prev).add(entry.target.id));
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        // Alle Elemente mit data-animate Attribut beobachten
        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(el => {
            if (el.id) observer.observe(el);
        });

        // Hero-Animation beim Laden starten
        const heroTimer = setTimeout(() => {
            setVisibleElements(prev => new Set(prev).add('hero-section'));
        }, 100);

        return () => {
            observer.disconnect();
            clearTimeout(heroTimer);
        };
    }, []);

    const getAnimationClass = (elementId: string, animationType: string = 'fadeInUp', delay: number = 0) => {
        const isVisible = visibleElements.has(elementId);
        const baseClass = isVisible ? 'animate-[' + animationType + '_1.0s_ease-out_forwards]' : 'translate-y-8 opacity-0';
        const delayClass = delay > 0 ? ` [animation-delay:${delay}s]` : '';
        return baseClass + delayClass;
    };

    const services: Service[] = [
        {
            id: 1,
            title: "Projektierung",
            image: "https://picsum.photos/400/300?random=1",
            description: "Investitionsentscheidungen bedürfen umsetzbarer Basisplanungen, realistischer Terminpläne und belastbarer Projektbudgets",
            shortDesc: "Fundierte Basisplanungen für Investitionsentscheidungen",
            detailedDescription: "Investitionsentscheidungen bedürfen umsetzbarer Basisplanungen, realistischer Terminpläne und belastbarer Projektbudgets. PROMAX bietet Ihnen fundierte Projektierungsleistungen für den Industrieanlagenbau.",
            features: [
                "Machbarkeitsstudien und Konzeptentwicklung",
                "Anlagenkonzepte und Verfahrensentwicklung",
                "Kostenermittlung und Wirtschaftlichkeitsanalyse",
                "Terminplanung und Projektbudgets",
                "Genehmigungsplanung und Behördenabstimmung",
                "Risikoanalyse und Bewertung",
                "Material- und Energiebilanzen",
                "Standortanalyse und Infrastruktur"
            ],
            hoverInfo: {
                keyPoints: ["Machbarkeitsstudien", "Kostenplanung", "Anlagenkonzepte"],
                industries: ["Papier & Zellstoff", "Pharma", "Chemie", "Energie & Umwelt"],
                experience: "seit 1999"
            },
            color: "#3B82F6",
            projects: "Seit 1999",
            experience: "25+ Jahre"
        },
        {
            id: 2,
            title: "Projektmanagement",
            image: "https://picsum.photos/400/300?random=2",
            description: "Professionelle Koordination und Steuerung aller Projektphasen",
            shortDesc: "Koordination und Steuerung aller Projektphasen",
            detailedDescription: "Professionelle Koordination und Steuerung aller Projektphasen von der Planung bis zur Inbetriebnahme. Unser erfahrenes Team sorgt für termingerechte und budgetkonforme Projektumsetzung.",
            features: [
                "Terminplanung und -überwachung",
                "Kostencontrolling und Budgetmanagement",
                "Qualitätsmanagement und Dokumentation",
                "Koordination aller Projektbeteiligten",
                "Risikomanagement und Claims Management",
                "Lieferantenmanagement und Beschaffung",
                "Schnittstellenmanagement",
                "Berichtswesen und Projektcontrolling"
            ],
            hoverInfo: {
                keyPoints: ["Terminüberwachung", "Kostencontrolling", "Qualitätsmanagement"],
                industries: ["Papier", "Zellstoff", "Pharma", "Chemie", "Energie & Umwelt"],
                experience: "ca. 35 Mitarbeiter"
            },
            color: "#10B981",
            projects: "International",
            experience: "seit 1999"
        },
        {
            id: 3,
            title: "Planung",
            image: "https://picsum.photos/400/300?random=3",
            description: "3D-Anlagenplanung und Detail-Engineering mit modernster Technologie",
            shortDesc: "3D-Anlagenplanung und Detail-Engineering",
            detailedDescription: "3D-Anlagenplanung und Detail-Engineering mit modernster CAD-Technologie. Präzise technische Planungen für komplexe Industrieanlagen mit höchsten Qualitätsstandards.",
            features: [
                "3D-Modellierung und CAD-Planung",
                "Rohrleitungsplanung und Isometrien",
                "Apparate- und Maschinenaufstellung",
                "Stahlbau- und Konstruktionsplanung",
                "P&ID-Erstellung und Verfahrensfließbilder",
                "Elektro- und MSR-Integration",
                "3D-Laserscanning und Bestandserfassung",
                "Kollisionsprüfung und Optimierung"
            ],
            hoverInfo: {
                keyPoints: ["3D-Modellierung", "Rohrleitungsplanung", "CAD-Technologie"],
                industries: ["Chemie", "Pharma", "Papier", "Energie"],
                experience: "Modernste Technologie"
            },
            color: "#F59E0B",
            projects: "CAD-Experten",
            experience: "seit 1999"
        },
        {
            id: 4,
            title: "Site Services",
            image: "https://picsum.photos/400/300?random=4",
            description: "Professionelle Vor-Ort-Betreuung während der Bauphase",
            shortDesc: "Vor-Ort-Betreuung und Montageüberwachung",
            detailedDescription: "Professionelle Vor-Ort-Betreuung während der gesamten Bauphase bis zur erfolgreichen Inbetriebnahme. Unsere Experten begleiten jeden Schritt der Projektrealisierung.",
            features: [
                "Montageüberwachung und Qualitätskontrolle",
                "Inbetriebnahmebegleitung und Commissioning",
                "Schulung und Know-how-Transfer",
                "Abnahme und Gewährleistungsbetreuung",
                "Sicherheitskoordination (SiGe)",
                "Fortschrittskontrolle und Berichtswesen",
                "Mängelmanagement und Nacharbeiten",
                "Performance-Tests und Optimierung"
            ],
            hoverInfo: {
                keyPoints: ["Montageüberwachung", "Inbetriebnahme", "Qualitätskontrolle"],
                industries: ["International tätig", "Österreich"],
                experience: "Vor-Ort-Expertise"
            },
            color: "#EF4444",
            projects: "International",
            experience: "seit 1999"
        },
        {
            id: 5,
            title: "Organisationsberatung",
            image: "https://picsum.photos/400/300?random=5",
            description: "Spezielle Beratung für komplexe Themenbereiche im Projektgeschäft",
            shortDesc: "Beratung für komplexe Projektorganisationen",
            detailedDescription: "Unterschiedliche Projekte in verschiedenen Branchen werfen spezielle Fragestellungen auf, denen wir uns im Rahmen der Organisationsberatung widmen. Komplexe Themenbereiche, die das Tagesgeschäft übersteigen.",
            features: [
                "Entwicklung von Präventionsmaßnahmen",
                "Implementierung von Claims Management Systemen",
                "Begleitung von Schiedsgerichtsverfahren",
                "Durchführung von Lessons Learned-Workshops",
                "Rechtzeitige Erkennung von Risiken",
                "Methodische Behandlung von Forderungen",
                "Entwicklung von Argumentationslinien",
                "Ableitung von Projekterkenntnissen"
            ],
            hoverInfo: {
                keyPoints: ["Claims Management", "Risikomanagement", "Lessons Learned"],
                industries: ["Alle Industriebranchen"],
                experience: "Spezialisierte Beratung"
            },
            color: "#8B5CF6",
            projects: "Branchenübergreifend",
            experience: "seit 1999"
        }
    ];

    const technologies: Technologies = {
        software: [
            {
                name: "AVEVA PDMS",
                description: "3D-Anlagenplanung und intelligente Modellierung",
                image: "https://picsum.photos/500/300?random=10",
                details: "seit 2003 im Einsatz",
                projects: "300+ Anlagen modelliert",
                fullDescription: "AVEVA Plant Design Management System (PDMS) ist eine hochmoderne 3D-CAD-Software für die Planung von Industrieanlagen. PROMAX nutzt seit 2003 diese leistungsstarke Software für komplexe Anlagenprojekte.",
                features: [
                    "Parametrische 3D-Modellierung von Rohrleitungen, Ausrüstung und Stahlbau",
                    "Intelligente Kollisionsprüfung und Interference-Management",
                    "Automatische Generierung von Isometrien und Materiallisten",
                    "Integrierte Datenbank für Komponenten und Standards",
                    "Multi-User-Umgebung für Teams",
                    "Automatische Erstellung von Werkstattzeichnungen"
                ],
                specifications: [
                    "Datenbankbasierte Objektstruktur",
                    "Hierarchisches Modellaufbau",
                    "Echtzeit-Kollisionsprüfung",
                    "Integration mit anderen AVEVA-Produkten"
                ],
                advantages: [
                    "Reduzierung von Planungsfehlern um bis zu 70%",
                    "Beschleunigte Projektabwicklung durch 3D-Visualisierung",
                    "Präzise Materiallisten und Kostenkalkulationen",
                    "Weltweite Standardisierung und Kompatibilität"
                ]
            },
            {
                name: "AutoCAD Plant 3D",
                description: "Rohrleitungsplanung und 3D-Modellierung",
                image: "https://picsum.photos/500/300?random=11",
                details: "seit 2013 zertifiziert",
                projects: "500+ Isometrien erstellt",
                fullDescription: "AutoCAD Plant 3D ist Autodesks spezialisierte Lösung für die Rohrleitungsplanung in Industrieanlagen. PROMAX verwendet diese Software seit 2013 für effiziente 3D-Planungen.",
                features: [
                    "3D-Rohrleitungsmodellierung mit intelligenten Objekten",
                    "P&ID-Integration und Datensynchronisation",
                    "Orthogonale und isometrische Zeichnungserstellung",
                    "Umfangreiche Kataloge mit Standardkomponenten",
                    "Spannungsanalyse-Integration",
                    "Automatische Aktualisierung von Zeichnungen"
                ],
                specifications: [
                    "Native DWG-Dateiformate",
                    "Branchenspezifische Werkzeuge",
                    "Cloud-basierte Zusammenarbeit möglich",
                    "Integration mit Autodesk-Vault"
                ],
                advantages: [
                    "Bekannte AutoCAD-Benutzeroberfläche",
                    "Nahtlose Integration in bestehende Workflows",
                    "Kosteneffiziente Alternative zu anderen 3D-Systemen",
                    "Umfassende Schulungsangebote verfügbar"
                ]
            },
            {
                name: "ROHR 2",
                description: "Rohrleitungsberechnung und Spannungsanalyse",
                image: "https://picsum.photos/500/300?random=12",
                details: "Thermodynamische Berechnung",
                projects: "Alle Druckstufen abgedeckt",
                fullDescription: "ROHR 2 ist eine spezialisierte Software für die statische und dynamische Analyse von Rohrleitungssystemen. Die Software ermöglicht präzise Berechnungen für alle Druckstufen und Temperaturbereiche.",
                features: [
                    "Statische und dynamische Spannungsanalyse",
                    "Thermische Expansion und Kontraktionsberechnungen",
                    "Wind- und Erdbebenlastanalyse",
                    "Ermüdungsanalyse nach internationalen Standards",
                    "Integration mit CAD-Systemen",
                    "Detaillierte Berichte und Dokumentation"
                ],
                specifications: [
                    "Compliance mit ASME, DIN, EN Standards",
                    "Unterstützung verschiedener Materialien",
                    "Nichtlineare Analysemöglichkeiten",
                    "Solver für große Gleichungssysteme"
                ],
                advantages: [
                    "Sicherheitsnachweis nach internationalen Normen",
                    "Optimierung der Rohrleitungsführung",
                    "Reduzierung von Materialkosten",
                    "Vermeidung von Planungsfehlern"
                ]
            },
            {
                name: "PointSense Plant",
                description: "3D-Laserscanning und Punktwolkenverarbeitung",
                image: "https://picsum.photos/500/300?random=13",
                details: "Millimetergenau",
                projects: "Präzise Bestandserfassung",
                fullDescription: "PointSense Plant ist eine hochpräzise Software für die Verarbeitung von 3D-Laserscanning-Daten. Sie ermöglicht die millimetergenaue Erfassung bestehender Anlagen für Revamps und Erweiterungen.",
                features: [
                    "Automatische Erkennung von Rohrleitungen und Strukturen",
                    "Punktwolken-zu-CAD-Konvertierung",
                    "Präzise Vermessung komplexer Geometrien",
                    "Integration in PDMS und AutoCAD Plant 3D",
                    "Kollisionsprüfung mit neuen Planungen",
                    "Qualitätskontrolle und Abweichungsanalyse"
                ],
                specifications: [
                    "Verarbeitung von Milliarden Punkten",
                    "Genauigkeit im Millimeterbereich",
                    "Unterstützung aller gängigen Scanner",
                    "Cloudbasierte Verarbeitung möglich"
                ],
                advantages: [
                    "Drastische Zeitersparnis bei Bestandsaufnahmen",
                    "Eliminierung von Messfehlern",
                    "Sichere Planung in bestehenden Anlagen",
                    "Dokumentation des Ist-Zustands"
                ]
            },
            {
                name: "Microsoft Project",
                description: "Professionelles Projektmanagement",
                image: "https://picsum.photos/500/300?random=14",
                details: "Enterprise Standard",
                projects: "500+ Projekte erfolgreich geplant",
                fullDescription: "Microsoft Project ist das von PROMAX eingesetzte Standard-Tool für das Projektmanagement. Es ermöglicht die professionelle Planung, Steuerung und Überwachung aller Projektaktivitäten.",
                features: [
                    "Detaillierte Projektplanung und Terminierung",
                    "Ressourcenmanagement und -optimierung",
                    "Kostenplanung und -controlling",
                    "Kritischer Pfad-Analyse",
                    "Portfolio-Management für mehrere Projekte",
                    "Integration mit Office 365 und Teams"
                ],
                specifications: [
                    "Gantt-Diagramme und Netzpläne",
                    "Multi-Projekt-Management",
                    "Cloud-basierte Zusammenarbeit",
                    "Erweiterte Reporting-Funktionen"
                ],
                advantages: [
                    "Transparenz über alle Projektphasen",
                    "Frühzeitige Erkennung von Verzögerungen",
                    "Optimale Ressourcenauslastung",
                    "Standardisierte Projektdokumentation"
                ]
            }
        ],
        branchen: [
            {
                name: "Chemie & Petrochemie",
                description: "Verfahrenstechnische Anlagen und Prozessoptimierung",
                image: "https://picsum.photos/500/300?random=15",
                details: "25 Jahre Erfahrung",
                projects: "150+ Chemieanlagen realisiert",
                fullDescription: "PROMAX verfügt über umfassende Expertise in der Planung und Realisierung chemischer und petrochemischer Anlagen. Von der Grundstoffchemie bis zu Spezialchemikalien begleiten wir komplexe Verfahrensprozesse.",
                features: [
                    "Reaktor- und Destillationsanlagen",
                    "Wärmetauscher und Verdampfersysteme",
                    "Katalysator-Handhabungssysteme",
                    "Ex-Schutz und Sicherheitstechnik",
                    "Umweltschutzanlagen",
                    "Automatisierung und Prozessleittechnik"
                ],
                specifications: [
                    "Compliance mit ATEX-Richtlinien",
                    "Druckgeräterichtlinie PED",
                    "HAZOP und SIL-Analysen",
                    "Umweltauflagen und Emissionsschutz"
                ],
                advantages: [
                    "Tiefes Verständnis chemischer Prozesse",
                    "Erfahrung mit gefährlichen Medien",
                    "Kostenoptimierte Anlagenlösungen",
                    "Kurze Stillstandszeiten bei Revamps"
                ]
            },
            {
                name: "Pharma & Biotechnologie",
                description: "GMP-konforme Produktionsanlagen",
                image: "https://picsum.photos/500/300?random=16",
                details: "FDA/EMA-Standards",
                projects: "80+ Pharmaprojekte erfolgreich",
                fullDescription: "In der Pharmaindustrie sind höchste Qualitäts- und Reinheitsanforderungen zu erfüllen. PROMAX plant und realisiert GMP-konforme Anlagen nach internationalen Standards.",
                features: [
                    "Aseptische Produktionsräume",
                    "CIP/SIP-Reinigungssysteme",
                    "Reinstmedien-Versorgung",
                    "Containment-Systeme",
                    "Validierungsunterstützung",
                    "Change Control und Dokumentation"
                ],
                specifications: [
                    "GMP-Guidelines Compliance",
                    "FDA 21 CFR Part 11",
                    "EU-GMP Annex 1",
                    "ISPE-Standards"
                ],
                advantages: [
                    "Validierungsgerechte Planung",
                    "Minimale Kontaminationsrisiken",
                    "Flexibilität für Produktwechsel",
                    "Vollständige Dokumentation"
                ]
            },
            {
                name: "Energie & Umwelt",
                description: "Nachhaltige Technologien und Umweltschutz",
                image: "https://picsum.photos/500/300?random=17",
                details: "Erneuerbare Energien",
                projects: "100+ Umweltanlagen",
                fullDescription: "PROMAX unterstützt die Energiewende durch Planung innovativer Anlagen für erneuerbare Energien und Umweltschutztechnologien. Nachhaltigkeit steht im Fokus aller Projekte.",
                features: [
                    "Biomasse- und Biogasanlagen",
                    "Abwasserbehandlungsanlagen",
                    "Rauchgasreinigung",
                    "Recycling- und Kreislaufanlagen",
                    "Power-to-X Technologien",
                    "Energieeffizienz-Optimierung"
                ],
                specifications: [
                    "Emissionsschutz-Verordnungen",
                    "Erneuerbare-Energien-Gesetz",
                    "Abfallrahmenrichtlinie",
                    "Wasserhaushaltsgesetz"
                ],
                advantages: [
                    "Beitrag zur CO2-Reduktion",
                    "Wirtschaftliche Nachhaltigkeit",
                    "Innovative Verfahrenstechniken",
                    "Fördermittel-Optimierung"
                ]
            },
            {
                name: "Papier & Zellstoff",
                description: "Prozessanlagen für die Papierindustrie",
                image: "https://picsum.photos/500/300?random=18",
                details: "Internationale Projekte",
                projects: "120+ Papiermaschinen",
                fullDescription: "PROMAX ist ein erfahrener Partner der Papierindustrie mit internationaler Projekterfahrung. Von der Zellstoffaufbereitung bis zur Papierproduktion realisieren wir komplette Produktionslinien.",
                features: [
                    "Zellstoffkochung und -bleiche",
                    "Papiermaschinen und Coating-Anlagen",
                    "Deinking und Altpapieraufbereitung",
                    "Dampf- und Energieversorgung",
                    "Wasserkreisläufe",
                    "Qualitätskontrollsysteme"
                ],
                specifications: [
                    "Internationale Papierstandards",
                    "Umweltauflagen für Faserstoffindustrie",
                    "Energieeffizienz-Anforderungen",
                    "Produktqualitäts-Spezifikationen"
                ],
                advantages: [
                    "Optimierte Faserausbeute",
                    "Minimaler Chemikalieneinsatz",
                    "Energieeffiziente Prozesse",
                    "Hohe Produktqualität"
                ]
            },
            {
                name: "Lebensmittel & Getränke",
                description: "Hygienische Produktionsanlagen",
                image: "https://picsum.photos/500/300?random=19",
                details: "HACCP-konforme Planung",
                projects: "60+ Produktionsanlagen",
                fullDescription: "In der Lebensmittelindustrie stehen Hygiene und Produktsicherheit im Vordergrund. PROMAX plant HACCP-konforme Anlagen mit höchsten Qualitätsstandards für sichere Lebensmittelproduktion.",
                features: [
                    "Hygienegerechte Anlagengestaltung",
                    "CIP-Reinigungssysteme",
                    "Pasteurisierung und Sterilisation",
                    "Kälteanlagen und Gefriertrocknung",
                    "Verpackungsanlagen",
                    "Qualitätssicherungssysteme"
                ],
                specifications: [
                    "HACCP-Grundsätze",
                    "Lebensmittelhygiene-Verordnung",
                    "IFS und BRC Standards",
                    "EU-Verordnung 852/2004"
                ],
                advantages: [
                    "Maximale Lebensmittelsicherheit",
                    "Verlängerte Haltbarkeit",
                    "Effiziente Reinigungszyklen",
                    "Rückverfolgbarkeit gewährleistet"
                ]
            }
        ]
    };

    const projectPhases: ProjectPhase[] = [
        {
            phase: "01",
            title: "Projektinitiierung",
            duration: "2-4 Wochen",
            description: "Anforderungsanalyse, Machbarkeitsstudie und Projektdefinition",
            deliverables: ["Lastenheft", "Machbarkeitsstudie", "Kostenrahmen", "Terminplan"],
            image: "https://picsum.photos/300/250?random=20"
        },
        {
            phase: "02",
            title: "Vorplanung",
            duration: "4-8 Wochen",
            description: "Konzeptentwicklung, Grundfließbilder und erste Kostenschätzung",
            deliverables: ["Anlagenkonzept", "Grundfließbilder", "Layout-Studien", "Genehmigungsantrag"],
            image: "https://picsum.photos/300/250?random=21"
        },
        {
            phase: "03",
            title: "Entwurfsplanung",
            duration: "8-12 Wochen",
            description: "Detaillierte Planung, 3D-Modellierung und Spezifikationen",
            deliverables: ["3D-Modell", "P&ID", "Ausschreibungsunterlagen", "Kostenberechnung"],
            image: "https://picsum.photos/300/250?random=22"
        },
        {
            phase: "04",
            title: "Ausführungsplanung",
            duration: "6-10 Wochen",
            description: "Werkstattzeichnungen, Materiallisten und Montageplanung",
            deliverables: ["Werkstattzeichnungen", "Isometrien", "Materiallisten", "Montageplan"],
            image: "https://picsum.photos/300/250?random=23"
        },
        {
            phase: "05",
            title: "Realisierung",
            duration: "12-52 Wochen",
            description: "Montageüberwachung, Qualitätskontrolle und Inbetriebnahme",
            deliverables: ["Montageüberwachung", "Qualitätsprüfungen", "Inbetriebnahme", "Dokumentation"],
            image: "https://picsum.photos/300/250?random=24"
        }
    ];

    const certifications: Certification[] = [
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

    const openModal = (tech: Technology) => {
        setSelectedTech(tech);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedTech(null);
    };

    return (
        <div className="font-inter leading-relaxed text-gray-800 bg-white">
            {/* Hero Section - Einfacher und kompakter */}
            <section
                id="hero-section"
                data-animate
                className="relative pt-8 pb-28 lg:pt-12 lg:pb-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden"
            >
                {/* Einfacher Hintergrund */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
                    {/* Main Heading */}
                    <h1
                        className={`text-4xl lg:text-6xl font-bold leading-relaxed mb-10 tracking-tight transform transition-all duration-1000 ease-out ${
                            visibleElements.has('hero-section')
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-12 opacity-0'
                        }`}
                        style={{ transitionDelay: '0.2s' }}
                    >
                        <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-4">
                            Unsere Leistungen
                        </span>
                        <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                            im Überblick
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p
                        className={`text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto transform transition-all duration-1000 ease-out ${
                            visibleElements.has('hero-section')
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-8 opacity-0'
                        }`}
                        style={{ transitionDelay: '0.5s' }}
                    >
                        Von der Projektierung bis zur Realisierung –
                        umfassende Expertise für komplexe Industrieanlagen
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Unsere Kernkompetenzen</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Spezielles Know-How in fünf Leistungsbereichen des Industrieanlagenbaus
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
                        <div className="lg:col-span-5">
                            <div className="flex flex-col gap-4 sticky top-28">
                                {services.map((service, index) => (
                                    <div
                                        key={service.id}
                                        className={`group relative bg-white rounded-xl p-5 cursor-pointer transition-all duration-300 border-2 ${
                                            activeService === index
                                                ? 'border-blue-500 shadow-lg shadow-blue-500/20 scale-[1.01]'
                                                : 'border-slate-200/60 shadow-sm hover:shadow-md hover:border-blue-300 hover:-translate-y-1'
                                        }`}
                                        onClick={() => setActiveService(index)}
                                    >
                                        {/* Content */}
                                        <div className="relative flex items-center gap-4">
                                            {/* Smaller Number Badge */}
                                            <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                                                activeService === index
                                                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-md'
                                                    : 'bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                                            }`}>
                                                {String(index + 1).padStart(2, '0')}
                                            </div>

                                            {/* Text Content */}
                                            <div className="flex-1 min-w-0">
                                                <h3 className={`text-lg font-bold mb-1 transition-colors duration-300 ${
                                                    activeService === index ? 'text-blue-700' : 'text-slate-900 group-hover:text-blue-700'
                                                }`}>
                                                    {service.title}
                                                </h3>
                                                <p className="text-slate-600 text-sm leading-relaxed">
                                                    {service.shortDesc}
                                                </p>
                                            </div>

                                            {/* Arrow Icon */}
                                            <div className={`flex-shrink-0 transition-all duration-300 ${
                                                activeService === index
                                                    ? 'text-blue-600 translate-x-1'
                                                    : 'text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1'
                                            }`}>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Active Indicator */}
                                        {activeService === index && (
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-r-full"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 sticky top-32">
                                <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-8 flex items-center gap-6 border-b border-slate-200">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0">
                                        {String(activeService + 1).padStart(2, '0')}
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">{services[activeService].title}</h2>
                                        <p className="text-base text-slate-600 leading-relaxed">{services[activeService].detailedDescription}</p>
                                    </div>
                                </div>

                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={services[activeService].image}
                                        alt={services[activeService].title}
                                        className="w-full h-full object-cover transition-transform hover:scale-105"
                                    />
                                </div>

                                <div className="p-8">
                                    <div className="mt-4">
                                        <h3 className="text-xl font-semibold text-slate-900 mb-5 pb-3 border-b-2 border-slate-200">Unsere Leistungen im Detail</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {services[activeService].features.map((feature, index) => (
                                                <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border-l-3 border-blue-500 transition-all hover:bg-blue-50 hover:translate-x-1 hover:shadow-sm shadow-blue-500/15">
                                                    <div className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                                                        <span>✓</span>
                                                    </div>
                                                    <span className="text-sm text-slate-700 font-medium leading-snug">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies & Expertise */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Technologie & Expertise</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Modernste Software-Tools und branchenspezifisches Know-how für optimale Projektergebnisse
                        </p>
                    </div>

                    <div className="flex justify-center gap-4 mb-12">
                        <button
                            className={`px-8 py-4 rounded-xl font-semibold cursor-pointer transition-all ${
                                activeTab === 'software'
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:scale-105'
                            }`}
                            onClick={() => setActiveTab('software')}
                        >
                            Software & Tools
                        </button>
                        <button
                            className={`px-8 py-4 rounded-xl font-semibold cursor-pointer transition-all ${
                                activeTab === 'branchen'
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:scale-105'
                            }`}
                            onClick={() => setActiveTab('branchen')}
                        >
                            Branchen-Expertise
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {technologies[activeTab].map((tech, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 transition-all hover:-translate-y-2 hover:shadow-2xl cursor-pointer group"
                                onClick={() => openModal(tech)}
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img src={tech.image} alt={tech.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{tech.name}</h4>
                                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{tech.description}</p>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl text-xs font-semibold text-center border border-blue-100">
                                            {tech.details}
                                        </span>
                                        <span className="bg-green-50 text-green-600 px-4 py-2 rounded-xl text-xs font-semibold text-center border border-green-100">
                                            {tech.projects}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-slate-500">
                                        <span>Mehr Details</span>
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {showModal && selectedTech && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center pt-28 pb-8">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
                        onClick={closeModal}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-white rounded-2xl max-w-5xl max-h-[calc(100vh-9rem)] overflow-y-auto shadow-2xl border border-slate-200 m-4 w-full transform scale-95 animate-[modalSlideIn_0.3s_ease-out_forwards]">
                        {/* Header Image */}
                        <div className="h-56 overflow-hidden relative">
                            <img
                                src={selectedTech.image}
                                alt={selectedTech.name}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white transform translate-y-2 animate-[fadeInUp_0.5s_ease-out_0.2s_forwards] opacity-0">
                                <h3 className="text-3xl font-bold mb-2">{selectedTech.name}</h3>
                                <p className="text-white/90 text-base">{selectedTech.description}</p>
                            </div>
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110 hover:rotate-90"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            {/* Description */}
                            <div className="mb-8 transform translate-y-4 animate-[fadeInUp_0.5s_ease-out_0.3s_forwards] opacity-0">
                                <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                    <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                                    Überblick
                                </h4>
                                <p className="text-slate-600 leading-relaxed">{selectedTech.fullDescription}</p>
                            </div>

                            {/* Features */}
                            <div className="mb-8 transform translate-y-4 animate-[fadeInUp_0.5s_ease-out_0.4s_forwards] opacity-0">
                                <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                    <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                                    Hauptfunktionen
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {selectedTech.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
                                            <div className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                                ✓
                                            </div>
                                            <span className="text-sm text-slate-700 leading-relaxed">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Specifications */}
                            <div className="mb-8 transform translate-y-4 animate-[fadeInUp_0.5s_ease-out_0.5s_forwards] opacity-0">
                                <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                    <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                                    Technische Spezifikationen
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {selectedTech.specifications.map((spec, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-3 border-blue-500 hover:bg-blue-100 transition-all duration-300 hover:shadow-md hover:scale-[1.02] group">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2 group-hover:scale-150 transition-transform"></div>
                                            <span className="text-sm text-slate-700 leading-relaxed">{spec}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Advantages */}
                            <div className="transform translate-y-4 animate-[fadeInUp_0.5s_ease-out_0.6s_forwards] opacity-0">
                                <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                    <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></div>
                                    Vorteile
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {selectedTech.advantages.map((advantage, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-3 border-green-500 hover:bg-green-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
                                            <div className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-12 transition-all">
                                                ★
                                            </div>
                                            <span className="text-sm text-slate-700 leading-relaxed">{advantage}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Project Phases */}
            <section className="py-24 bg-gradient-to-br from-slate-100 to-slate-200">
                <div className="max-w-7xl mx-auto px-8">
                    <div
                        id="phases-header"
                        data-animate
                        className={`text-center mb-16 ${getAnimationClass('phases-header', 'fadeInUp', 0)}`}
                    >
                        <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Unser Projektablauf</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Strukturierter 5-Phasen-Prozess von der Idee zur Realisierung
                        </p>
                    </div>

                    <div className="flex flex-col gap-12">
                        {projectPhases.map((phase, index) => (
                            <div
                                key={index}
                                id={`phase-${index}`}
                                data-animate
                                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-white rounded-2xl overflow-hidden shadow-lg ${
                                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                                } ${getAnimationClass(`phase-${index}`, index % 2 === 0 ? 'slideInLeft' : 'slideInRight', index * 0.2)}`}
                            >
                                <div className={`lg:col-span-4 relative h-64 overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <img src={phase.image} alt={phase.title} className="w-full h-full object-cover" />
                                    <div className="absolute top-4 left-4 w-12 h-12 bg-blue-500/90 text-white rounded-full flex items-center justify-center text-xl font-bold">
                                        {phase.phase}
                                    </div>
                                </div>
                                <div className={`lg:col-span-8 p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-2xl font-semibold text-slate-900">{phase.title}</h3>
                                    </div>
                                    <p className="text-slate-600 mb-6 leading-relaxed">{phase.description}</p>
                                    <div>
                                        <h4 className="text-base font-semibold text-slate-900 mb-2">Leistungen:</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {phase.deliverables.map((deliverable, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                                                    <span className="text-blue-500 text-xs">▶</span>
                                                    {deliverable}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-8">
                    <div
                        id="cert-header"
                        data-animate
                        className={`text-center mb-16 ${getAnimationClass('cert-header', 'fadeInUp', 0)}`}
                    >
                        <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Zertifizierungen & Standards</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Höchste Qualitätsstandards durch anerkannte Zertifizierungen
                        </p>
                    </div>

                    <div
                        id="cert-grid"
                        data-animate
                        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${getAnimationClass('cert-grid', 'fadeInUp', 0.2)}`}
                    >
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl text-center shadow-sm border border-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
                                style={{
                                    animationDelay: `${0.3 + index * 0.1}s`,
                                    opacity: visibleElements.has('cert-grid') ? 1 : 0,
                                    transform: visibleElements.has('cert-grid') ? 'translateY(0)' : 'translateY(30px)',
                                    transition: 'all 1.0s ease-out'
                                }}
                            >
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                                <div className="text-4xl mb-4">{cert.icon}</div>
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">{cert.title}</h3>
                                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{cert.description}</p>
                                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-xl text-sm font-semibold">
                                    {cert.year}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-gradient-to-br from-slate-100 to-slate-200">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div
                            id="why-text"
                            data-animate
                            className={getAnimationClass('why-text', 'slideInLeft', 0)}
                        >
                            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-6 border border-green-200">
                                Warum PROMAX?
                            </span>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                                25 Jahre Erfahrung in
                                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"> komplexen Industrieprojekten</span>
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed mb-8">
                                PROMAX Project Management GesmbH vereint langjährige Erfahrung mit
                                modernster Technologie. Unser Team aus 35 Spezialisten betreut Projekte
                                in der Chemie-, Pharma-, Energie- und Papierindustrie mit höchsten Qualitätsstandards.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { icon: "🏆", title: "ISO 9001:2015 zertifiziert", desc: "Qualitätsmanagementsystem seit 2010" },
                                    { icon: "🌍", title: "International tätig", desc: "Projekte in Europa, Asien und Amerika" },
                                    { icon: "⚡", title: "Modernste 3D-Technologie", desc: "PDMS, AutoCAD Plant 3D, 3D-Laserscanning" },
                                    { icon: "👥", title: "Starkes Team", desc: "35 Ingenieure und Techniker mit Branchenerfahrung" }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-4 p-6 bg-white rounded-xl shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                                        style={{
                                            animationDelay: `${0.2 + index * 0.1}s`,
                                            opacity: visibleElements.has('why-text') ? 1 : 0,
                                            transform: visibleElements.has('why-text') ? 'translateY(0)' : 'translateY(20px)',
                                            transition: 'all 1.0s ease-out'
                                        }}
                                    >
                                        <span className="text-2xl flex-shrink-0">{item.icon}</span>
                                        <div>
                                            <strong className="block text-slate-900 font-semibold mb-1">{item.title}</strong>
                                            <p className="text-slate-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            id="why-image"
                            data-animate
                            className={getAnimationClass('why-image', 'slideInRight', 0.3)}
                        >
                            <div className="relative">
                                <div className="rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300">
                                    <img
                                        src="https://picsum.photos/800/400?random=7"
                                        alt="PROMAX Team"
                                        className="w-full h-96 object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-60px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(60px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @keyframes modalSlideIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9) translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default ModernLeistungen;