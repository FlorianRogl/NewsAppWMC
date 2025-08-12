import React, { useState, useEffect } from 'react';

// TypeScript Interfaces
interface Service {
    id: number;
    number: string;
    title: string;
    subtitle: string;
    description: string;
    detailedDescription: string;
    image: string;
    features: string[];
    highlights: string[];
    icon: string;
    technologies?: string[];
    standards?: string[];
}

interface VisibilityState {
    [key: string]: boolean;
}


const NewLeistungen: React.FC = () => {
    const [isVisible, setIsVisible] = useState<VisibilityState>({});
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    useEffect(() => {
        // Set initial visibility
        setIsVisible({
            services: true,
            'service-1': true,
            'service-2': true,
            'service-3': true,
            'service-4': true,
            'service-5': true
        });
    }, []);

    const services: Service[] = [
        {
            id: 1,
            number: "01",
            title: "Projektierung",
            subtitle: "Fundierte Basisplanungen für Investitionsentscheidungen",
            description: "Investitionsentscheidungen bedürfen umsetzbarer Basisplanungen, realistischer Terminpläne und belastbarer Projektbudgets.",
            detailedDescription: "Die dem Realisierungsprojekt vorgelagerte PROJEKTIERUNG ist ein wichtiger Faktor für die richtigen Weichenstellungen am Weg zum Projekterfolg. PROMAX entwickelt fundierte Basisplanungen als solide Grundlage für Ihre Investitionsentscheidungen. Unsere Projektingenieure erstellen realistische Terminpläne und belastbare Projektbudgets für komplexe Industrieanlagenprojekte.",
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop&auto=format",
            features: [
                "Erstellung von Basic Engineering Dokumentationen",
                "Verfahrenstechnische Konzeptentwicklung und Optimierung",
                "Machbarkeitsstudien und Wirtschaftlichkeitsanalysen",
                "Detaillierte Kostenermittlung und Budgetplanung",
                "Genehmigungsplanung nach EU-Standards",
                "Risikoanalyse und Terminplanung",
                "Technische Due Diligence und Investitionsberatung"
            ],
            highlights: [
                "Umsetzbare Basisplanungen aus einer Hand",
                "Realistische Terminpläne und belastbare Budgets",
                "Fundierte Entscheidungsgrundlagen für Investitionen",
                "Über 25 Jahre Erfahrung in der Projektierung",
                "Internationale Projektexpertise",
                "Branchenübergreifendes Engineering Know-how",
                "Konsequente Berücksichtigung von Kundenanforderungen"
            ],
            icon: "planning",
            technologies: ["AutoCAD Plant 3D", "PDMS", "E3D", "SmartPlant"],
            standards: ["DIN", "EN", "ASME", "API"]
        },
        {
            id: 2,
            number: "02",
            title: "Projektmanagement",
            subtitle: "Professionelle Koordination aller Projektphasen",
            description: "Professionelle Koordination und Steuerung aller Projektphasen von der Planung bis zur Inbetriebnahme.",
            detailedDescription: "In der Realisierungsphase von Projekten kommt es wesentlich darauf an, vordefinierte Zielsetzungen hinsichtlich Qualität-Termine-Kosten zu erfüllen oder im positiven Sinne zu übertreffen. PROMAX begegnet dieser Herausforderung mit professionellen Projekt Managern, die Aufbau- und Ablauforganisation planen, Projektteams koordinieren und wirksame Korrekturmaßnahmen einleiten.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&auto=format",
            features: [
                "Komplettes Projektmanagement oder modulare Teilleistungen",
                "Aufbau- und Ablauforganisation nach PMI-Standards",
                "Projektteam-Koordination und Stakeholder-Management",
                "Kontinuierliche Kontrolle von Zwischenergebnissen",
                "Wirksame Korrekturmaßnahmen bei Abweichungen",
                "Integration in die Auftraggeber-Organisation",
                "Qualitäts-, Termin- und Kostenmanagement",
                "Risikomanagement und Change Management"
            ],
            highlights: [
                "PMI-zertifizierte Projektmanager",
                "Nahtlose Integration in Ihre Organisation",
                "Konsequente Verfolgung der Auftraggeber-Interessen",
                "Flexible Leistungsmodule je nach Projektgröße",
                "Bewährte Methoden aus 1000+ Projekten",
                "Internationale Projektabwicklung",
                "Digitale Projektmanagement-Tools",
                "24/7 Projektüberwachung und Reporting"
            ],
            icon: "project",
            technologies: ["MS Project", "Primavera P6", "SAP PS", "Projektmanagement-Software"],
            standards: ["PMI", "IPMA", "PRINCE2", "ISO 21500"]
        },
        {
            id: 3,
            number: "03",
            title: "Planung",
            subtitle: "3D-Anlagenplanung und Detail-Engineering",
            description: "3D-Anlagenplanung und Detail-Engineering mit modernster CAD-Technologie für komplexe Industrieanlagen.",
            detailedDescription: "PROMAX bietet effiziente Überführung der Verfahrenstechnik in die Anlagenplanung mit angemessener Berücksichtigung besonderer Kundenanforderungen für Betrieb, Wartung und Instandhaltung. Umfassende Abklärung der Schnittstellen mit Fachplanern und konsequent durchgängige Behandlung von Änderungen kennzeichnen unsere Planungsphilosophie.",
            image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop&auto=format",
            features: [
                "Erstellung und Pflege von Block-, Fließ-, R&I Schemata",
                "3D-Modellierung und CAD-Planung mit PDMS/E3D",
                "Rohrleitungsplanung: Rohrstudien, 2D/3D-Pläne, Isometrien",
                "Fundamentleitpläne und Stahlbau-Leitpläne",
                "Detailkonstruktion von Maschinen und Apparaten",
                "Sekundärhalterungen und Materialerfassung",
                "Laserscanning für Bestandsaufnahmen",
                "Rohrstressberechnung und statische Berechnungen"
            ],
            highlights: [
                "Basic Engineering der Anlagenplanung aus einer Hand",
                "Detail Engineering der Rohrleitungsplanung",
                "Datenbank-basierte Planungen",
                "Verwertbare Leitpläne inkl. Belastungsangaben",
                "Einsatz leistungsfähiger 3D-Planungstools",
                "3D Design Reviews mit dem Auftraggeber",
                "BIM-konforme Planungsmethoden",
                "Compliance mit internationalen Standards"
            ],
            icon: "planning",
            technologies: ["PDMS", "E3D", "AutoCAD Plant 3D", "PointSense Plant", "3D-Laserscanning"],
            standards: ["DIN", "EN", "ASME", "API", "DGUV"]
        },
        {
            id: 4,
            number: "04",
            title: "Site Services",
            subtitle: "Professionelle Vor-Ort-Betreuung während der Bauphase",
            description: "Professionelle Vor-Ort-Betreuung während der gesamten Bauphase bis zur erfolgreichen Inbetriebnahme.",
            detailedDescription: "PROMAX Site Services Experten begleiten jeden Schritt der Projektrealisierung vor Ort. Von der Montageüberwachung über die Qualitätskontrolle bis zur finalen Inbetriebnahme gewährleisten wir höchste Qualität und termingerechte Fertigstellung. Unser erfahrenes Team koordiniert alle Gewerke und stellt sicher, dass Ihre Anlage funktionsfähig übergeben wird.",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&auto=format",
            features: [
                "Montageüberwachung und kontinuierliche Qualitätskontrolle",
                "Inbetriebnahmebegleitung und systematisches Commissioning",
                "Baustellenkoordination und Sicherheitsmanagement",
                "Performance-Tests und Anlagenoptimierung",
                "Schulung und umfassender Know-how-Transfer",
                "Erstellung von As-Built-Dokumentationen",
                "Garantie- und Gewährleistungsmanagement",
                "Digitale Baustellendokumentation"
            ],
            highlights: [
                "Vor-Ort-Expertise mit erfahrener Bauleitung",
                "Qualitätskontrolle nach internationalen Standards",
                "Termingerechte und budgetkonforme Fertigstellung",
                "Sicherheitsmanagement nach SCC-Standards",
                "Nahtlose Übergabe an den Betreiber",
                "Digitale Baustellendokumentation",
                "Interdisziplinäre Projektteams",
                "24/7 Vor-Ort-Betreuung bei kritischen Phasen"
            ],
            icon: "project",
            technologies: ["Digitale Dokumentationssysteme", "Mobile Erfassungsgeräte", "3D-Scanning"],
            standards: ["SCC", "ISO 45001", "OHSAS 18001", "CE-Kennzeichnung"]
        },
        {
            id: 5,
            number: "05",
            title: "Organisationsberatung",
            subtitle: "Spezialisierte Beratung für komplexe Themenbereiche",
            description: "Unterschiedliche Projekte in verschiedenen Branchen werfen spezielle Fragestellungen auf, die das Tagesgeschäft übersteigen.",
            detailedDescription: "Komplexe Themenbereiche, die das Tagesgeschäft übersteigen, bedürfen spezieller Expertise. PROMAX Organisationsberatung entwickelt Präventionsmaßnahmen und Claims Management Systeme. Wir unterstützen bei strategischen Entscheidungen, der Optimierung von Projektabläufen und der Implementierung bewährter Verfahren aus unserer Praxis.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format",
            features: [
                "Entwicklung maßgeschneiderter Präventionsmaßnahmen",
                "Aufbau und Implementierung von Claims Management Systemen",
                "Strukturierte Lessons Learned-Workshops",
                "Strategische Prozessoptimierung und Organisationsentwicklung",
                "Change Management bei Transformationsprojekten",
                "Compliance Management und Regulatory Affairs",
                "Digitalisierungsstrategien für Industrieanlagen",
                "Risikomanagement und Krisenprävention"
            ],
            highlights: [
                "Spezialisierte Beratung über das Tagesgeschäft hinaus",
                "Bewährte Lösungsansätze aus 1000+ Projekten",
                "Branchenübergreifende Expertise und Know-how",
                "Nachhaltige und wirtschaftliche Lösungsansätze",
                "Individuelle Anpassung an Ihre Organisation",
                "Erfahrung aus über 25 Jahren Projektpraxis",
                "Interdisziplinäre Beratungsteams",
                "Langfristige Partnerschaft und Betreuung"
            ],
            icon: "consulting",
            technologies: ["Digitale Analyse-Tools", "Workflow-Management-Systeme", "KI-basierte Lösungen"],
            standards: ["ISO 9001", "ISO 14001", "ISO 45001", "EFQM"]
        },
        {
            id: 6,
            number: "06",
            title: "Contract & Claims Management",
            subtitle: "Proaktive Vertragsgestaltung und -umsetzung",
            description: "Kraft gewachsener technisch-kaufmännisch-vertraglicher Kompetenz bietet PROMAX Contract & Claims Management als integrierten Bestandteil zeitgemäßer Projektabwicklung.",
            detailedDescription: "Unternehmensergebnisse basieren auf Projektergebnissen. Die wesentlichen Erfolgskriterien sind Qualität, Kosten und Termine. Die Erfüllung dieser Kriterien wird maßgeblich durch die Gestaltung und Implementierung von Verträgen beeinflusst. Nur wer pro-aktiv Verträge gestaltet, angemessen umsetzt und vertragliche Änderungen im Griff behält, hat eine realistische Chance, die gewünschten Ergebnisse zu erzielen. PROMAX Contract & Claims Management erstreckt sich über sämtliche Projektphasen: von der Vetriebsphase über die Planung, die Beschaffung, die Herstellung, den Bau, die Montage, die Inbetriebnahme, über Tests und Abnahmen bis zum Ende des Garantie- bzw. Gewährleistungszeitraumes.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&auto=format",
            features: [
                "Analyse der Ausschreibung und Angebotserstellung",
                "Vertragsverhandlungen und Fertigstellung der Vertragsunterlagen",
                "Extraktion zu überbindender Anforderungen aus dem Hauptvertrag",
                "Architektur der Projektaufbau- und Projektablauforganisation",
                "Aufbau und Schulung des Claim Management Systems",
                "Aufbereitung und Verhandlung von Vertragsnachträgen",
                "Dokumentation von Contract Changes und Claim-relevante Korrespondenz",
                "Sicherstellung der Erfüllung vertraglicher Verpflichtungen während der Garantiezeit"
            ],
            highlights: [
                "Rechtzeitige Anpassung der Projektorganisation an Vertragsanforderungen",
                "Rechtzeitige Erkennung von wesentlichen Claimpotentialen",
                "Verhinderung des Hineinreklamierens von zusätzlichen Forderungen",
                "Angemessene Überbindung von Bedingungen des Hauptvertrages",
                "Reduzierung von Änderungsaufwand in Planung und Fertigung",
                "Vermeidung von Konventionalstrafen",
                "Steigerung der Reputation durch Qualitätslieferung",
                "Formalkorrekter Abschluss der Vertragserfüllung"
            ],
            icon: "consulting",
            technologies: ["Contract Management Systeme", "Claims Tracking Tools", "Dokumentationssysteme"],
            standards: ["FIDIC", "VOB", "ÖNORM", "Vertragsrecht"]
        },
        {
            id: 7,
            number: "07",
            title: "Projektverfolgung",
            subtitle: "Time Scheduling - Progress Control - Reporting",
            description: "Terminplanung und Fortschrittsüberwachung bieten dem Projekt Management die Orientierung und Navigation für methodische Planung und termingerechte Umsetzung.",
            detailedDescription: "PROMAX hat ein System entwickelt, das sich vor allem in großen Anlagenbau-Projekten mit hoher Komplexität bewährt hat. Entsprechend den Arbeitspaketen im Projekt-Strukturplan wird eine Untergliederung in mehreren Ebenen vorgenommen: Meilensteine, Planung, Beschaffung, Herstellung, Verpackung/Transport, Bau, Montage und Inbetriebnahme. In der detaillierten Terminplanung wird jede Aktivität im Kontext ihrer Vorgänger und Nachfolger dargestellt und es werden Verknüpfungen von logischen Sequenzen gebildet, die es ermöglichen den Kritischen Pfad des Projektes zu generieren.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format",
            features: [
                "Vertragsanalyse und Erstellung von Projekt-Strukturplänen",
                "Projektorientierte Spezifikationen für Terminplanung und Fortschrittsüberwachung",
                "Scheduling-Schulungen von internen und externen Projektpartnern",
                "Erstellung von Master-Terminplan und Master-WBS",
                "Prüfung und Integration von Detailterminplänen",
                "Generierung des Kritischen Pfades",
                "Kontinuierliche Projektbegleitung in sämtlichen Phasen",
                "Spezielle Überprüfung der Ist-Termine auf dem Kritischen Pfad"
            ],
            highlights: [
                "Zentrale Koordination sämtlicher Aktivitäten zur Terminplanung",
                "Einheitliche Terminplanung von externen Projektpartnern",
                "Zeitnahe Status-Informationen über das laufende Projektgeschehen",
                "Belastbare Entscheidungsgrundlagen für die Projektleitung",
                "Übersichtliche und aussagekräftige Fortschrittsberichte",
                "Wertorientierte Fortschrittsdarstellung durch WBS-Integration",
                "Kritischer Pfad-Analyse zur Terminrisiko-Minimierung",
                "Proaktive Korrekturmaßnahmen bei Abweichungen"
            ],
            icon: "project",
            technologies: ["Primavera P6", "MS Project", "WBS-Systeme", "Progress Tracking Tools"],
            standards: ["PMI", "IPMA", "Critical Path Method", "Earned Value Management"]
        }
    ];

    // Handler-Funktion für Service-Auswahl
    const handleServiceSelect = (serviceId: number) => {
        const service = services.find(s => s.id === serviceId);
        if (service) {
            setSelectedService(service);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Pop-up Modal */}
            {selectedService && (
                <div className="fixed inset-0 z-[1100] flex items-start justify-center pt-[110px] p-4 sm:p-6 md:p-8">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-[#1e3767] bg-opacity-75 backdrop-blur-sm transition-opacity duration-300"
                        onClick={() => setSelectedService(null)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[calc(100vh-130px)] overflow-y-auto shadow-xl transform transition-all duration-500 animate-in fade-in zoom-in-95">
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedService(null)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white hover:bg-[#d1d8dc] rounded-full flex items-center justify-center transition-colors shadow-md border border-[#9ba8b3]"
                        >
                            <span className="text-[#1e3767] text-xl">×</span>
                        </button>

                        {/* Modal Header */}
                        <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden rounded-t-2xl">
                            <img
                                src={selectedService.image}
                                alt={selectedService.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1e3767]/90 via-[#1e3767]/40 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-tight">
                                    {selectedService.title}
                                </h3>
                                <p className="text-lg sm:text-xl text-[#d1d8dc] font-light leading-relaxed">
                                    {selectedService.subtitle}
                                </p>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 sm:p-8 md:p-10">
                            {/* Beschreibung */}
                            <div className="mb-8">
                                <h4 className="text-xl sm:text-2xl font-bold text-[#1e3767] mb-4 pb-2 border-b-2 border-[#9ba8b3]">
                                    Über diese Leistung
                                </h4>
                                <p className="text-[#1e3767] leading-relaxed text-base sm:text-lg">
                                    {selectedService.detailedDescription}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
                                {/* Kernleistungen */}
                                <div className="bg-[#d1d8dc] rounded-xl p-6 sm:p-8">
                                    <h4 className="text-lg sm:text-xl font-bold text-[#1e3767] mb-4 pb-2 border-b-2 border-[#9ba8b3]">
                                        Kernleistungen
                                    </h4>
                                    <ul className="space-y-3">
                                        {selectedService.features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="w-2 h-2 bg-[#1e3767] rounded-full mr-3 flex-shrink-0 mt-2"></span>
                                                <span className="text-[#1e3767] text-sm sm:text-base leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Vorteile */}
                                <div className="bg-[#d97539]/10 rounded-xl p-6 sm:p-8">
                                    <h4 className="text-lg sm:text-xl font-bold text-[#1e3767] mb-4 pb-2 border-b-2 border-[#d97539]">
                                        Ihre Vorteile
                                    </h4>
                                    <ul className="space-y-3">
                                        {selectedService.highlights.map((highlight, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="w-2 h-2 bg-[#d97539] rounded-full mr-3 flex-shrink-0 mt-2"></span>
                                                <span className="text-[#1e3767] text-sm sm:text-base leading-relaxed">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Technologien & Standards */}
                            {(selectedService.technologies || selectedService.standards) && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                                    {/* Technologien */}
                                    {selectedService.technologies && (
                                        <div className="bg-white border border-[#9ba8b3] rounded-xl p-6 sm:p-8">
                                            <h4 className="text-lg sm:text-xl font-bold text-[#1e3767] mb-4">
                                                Technologien & Tools
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedService.technologies.map((tech, index) => (
                                                    <span key={index} className="px-3 py-1 bg-[#d1d8dc] text-[#1e3767] rounded-lg text-sm font-medium">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Standards */}
                                    {selectedService.standards && (
                                        <div className="bg-white border border-[#d97539] rounded-xl p-6 sm:p-8">
                                            <h4 className="text-lg sm:text-xl font-bold text-[#1e3767] mb-4">
                                                Standards & Normen
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedService.standards.map((standard, index) => (
                                                    <span key={index} className="px-3 py-1 bg-[#d97539]/10 text-[#d97539] rounded-lg text-sm font-medium">
                                                        {standard}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Header Section */}
            <div className="bg-[#1e3767] text-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-5xl font-light mb-4 tracking-wide">LEISTUNGEN</h1>
                    <div className="w-24 h-0.5 bg-white mb-8"></div>
                    <p className="text-2xl font-light text-[#d1d8dc] max-w-3xl leading-relaxed">
                        Von der ersten Projektidee bis zur erfolgreichen Inbetriebnahme - umfassende Lösungen für komplexe Industrieanlagenprojekte.
                    </p>
                </div>
            </div>

            {/* Hero Image Section - Noch größer gemacht */}
            <div className="relative h-[500px] bg-gray-100 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1200&h=500&fit=crop"
                    alt="Industrial engineering and project management"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl px-6">
                        <h2 className="text-4xl font-light mb-4">Expertise und Innovation für Ihre Industrieprojekte</h2>
                        <p className="text-lg opacity-90">Spezialisierte Planungsleistungen und Projektmanagement mit über 20 Jahren Erfahrung</p>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-8">
                    {/* Intro Section */}
                    <div className={`mb-12 transition-all duration-1000 ${
                        isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                         data-section="services">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-5xl font-semibold text-[#1e3767] mb-6 leading-tight tracking-normal">
                                Wir sind Ihr Partner für <span className="text-[#d97539]">technische Exzellenz</span>
                            </h2>
                            <p className="text-xl text-[#1e3767] leading-relaxed">
                                Mit über 20 Jahren Erfahrung in der Industrieplanung entwickeln wir
                                maßgeschneiderte Lösungen für komplexe technische Herausforderungen.
                                Von der ersten Idee bis zur erfolgreichen Umsetzung – wir begleiten
                                Sie durch alle Projektphasen mit bewährten Methoden und innovativen Ansätzen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Services */}
            <section className="py-16 bg-[#d1d8dc]/30">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black text-[#1e3767] mb-4 tracking-tight">
                            Leistungen <span className="text-[#d97539]">im Detail</span>
                        </h2>
                        <div className="w-24 h-1 bg-[#d97539] mx-auto"></div>
                    </div>

                    <div className="space-y-20">
                        {services.filter(service => service.id <= 5).map((service, index) => (
                            <div
                                key={service.id}
                                className="border-b border-[#9ba8b3] pb-16 last:border-b-0 cursor-pointer group"
                                data-section={`service-${service.id}`}
                                onClick={(e) => { e.stopPropagation(); setSelectedService(service); }}
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    {/* Content Side */}
                                    <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} transition-all duration-1000 ${
                                        isVisible[`service-${service.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}>
                                        <div className="flex items-start gap-6 mb-6">
                                            <span className="text-5xl font-light text-[#d1d8dc] group-hover:text-[#d97539] transition-colors">
                                                {service.number}
                                            </span>
                                            <div>
                                                <h3 className="text-3xl font-bold text-[#1e3767] mb-2 group-hover:text-[#d97539] transition-colors">
                                                    {service.title}
                                                </h3>
                                                <div className="w-16 h-1 bg-[#d97539] mb-3 group-hover:w-[70px] transition-all duration-300"></div>
                                                <p className="text-xl text-[#1e3767] mb-4 font-semibold">
                                                    {service.subtitle}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-[#1e3767] leading-relaxed mb-6 text-lg">
                                            {service.detailedDescription}
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Kernleistungen */}
                                            <div>
                                                <h4 className="text-base font-semibold text-[#1e3767] mb-3 uppercase tracking-wider">
                                                    Kernleistungen
                                                </h4>
                                                <ul className="space-y-2">
                                                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="text-base text-[#1e3767] flex items-start">
                                                            <span className="w-2 h-2 bg-[#1e3767] rounded-full mr-3 flex-shrink-0 mt-2"></span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Highlights */}
                                            <div>
                                                <h4 className="text-base font-semibold text-[#1e3767] mb-3 uppercase tracking-wider">
                                                    Ihre Vorteile
                                                </h4>
                                                <ul className="space-y-2">
                                                    {service.highlights.slice(0, 4).map((highlight, highlightIndex) => (
                                                        <li key={highlightIndex} className="text-base text-[#1e3767] flex items-start">
                                                            <span className="w-2 h-2 bg-[#d97539] rounded-full mr-3 flex-shrink-0 mt-2"></span>
                                                            {highlight}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <span className="inline-flex items-center text-[#d97539] text-base font-medium group-hover:text-[#1e3767] transition-colors">
                                                Mehr Details anzeigen
                                                <svg className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Image Side - Noch größer gemacht */}
                                    <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} transition-all duration-1000 delay-300 ${
                                        isVisible[`service-${service.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}>
                                        <div className="relative group transition-all duration-300">
                                            <img
                                                src={service.image}
                                                alt={`${service.title} - PROMAX Industrial Engineering`}
                                                className="w-full h-[450px] object-cover rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Large Service Cards */}
            <section className="py-20 bg-gradient-to-br from-[#d1d8dc]/30 to-[#d1d8dc]/50">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black text-[#1e3767] mb-4 tracking-tight">
                            Weitere <span className="text-[#d97539]">Speziallösungen</span>
                        </h2>
                        <div className="w-24 h-1 bg-[#d97539] mx-auto mb-6"></div>
                        <p className="text-xl text-[#1e3767] max-w-3xl mx-auto leading-relaxed">
                            Erweiterte Dienstleistungen für komplexe Anforderungen in der Projektabwicklung
                        </p>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        {/* Contract & Claims Management - Large Card */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-1 cursor-pointer group h-[400px]"
                             onClick={() => handleServiceSelect(6)}>
                            {/* Background Image */}
                            <img
                                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop&auto=format"
                                alt="Contract & Claims Management"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Color Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1e3767]/90 to-[#2d4a7a]/80"></div>

                            {/* Content */}
                            <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-8">
                                {/* Icon */}
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>

                                {/* Title */}
                                <h3 className="text-3xl lg:text-4xl font-black leading-tight group-hover:text-[#d97539] transition-colors duration-300">
                                    Contract & Claims<br />Management
                                </h3>
                            </div>
                        </div>

                        {/* Projektverfolgung - Large Card */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-1 cursor-pointer group h-[400px]"
                             onClick={() => handleServiceSelect(7)}>
                            {/* Background Image */}
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&auto=format"
                                alt="Projektverfolgung & Scheduling"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Color Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#d97539]/90 to-[#e68547]/80"></div>

                            {/* Content */}
                            <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-8">
                                {/* Icon */}
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>

                                {/* Title */}
                                <h3 className="text-3xl lg:text-4xl font-black leading-tight group-hover:text-[#1e3767] transition-colors duration-300">
                                    Projektverfolgung &<br />Scheduling
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewLeistungen;