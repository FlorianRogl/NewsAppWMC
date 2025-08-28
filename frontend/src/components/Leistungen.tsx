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
            'service-2': true
        });
    }, []);

    const services: Service[] = [
        {
            id: 1,
            number: "01",
            title: "Technische Planung & Engineering",
            subtitle: "Von der Projektierung bis zur detaillierten 3D-Anlagenplanung",
            description: "Umfassende technische Planung und Engineering-Dienstleistungen für Industrieanlagen von der ersten Konzeptentwicklung bis zur ausführungsreifen Detail-Planung.",
            detailedDescription: "PROMAX vereint jahrzehntelange Expertise in der technischen Planung von Industrieanlagen der Branchen Papier, Zellstoff, Pharma, Chemie sowie Energie- und Umwelttechnik. Unsere Planungsphilosophie basiert auf der effizienten Überführung der Verfahrenstechnik in die Anlagenplanung mit angemessener Berücksichtigung besonderer Kundenanforderungen für Betrieb, Wartung und Instandhaltung. Wir entwickeln fundierte Basisplanungen als solide Grundlage für Ihre Investitionsentscheidungen und erstellen realistische Terminpläne sowie belastbare Projektbudgets. Unsere 3D-Planungstechnologie ermöglicht automatische Kollisionsprüfung und gewerkeübergreifende Koordination bereits in der Planungsphase.",
            image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&h=600&fit=crop&auto=format",
            features: [
                "Basic Engineering und konzeptionelle Anlagenentwicklung",
                "3D-Anlagenplanung mit PDMS, E3D und AutoCAD Plant 3D",
                "Detaillierte Rohrleitungsplanung mit Isometrien",
                "Machbarkeitsstudien und Wirtschaftlichkeitsanalysen"
            ],
            highlights: [
                "Über 25 Jahre Expertise im Industrieanlagenbau",
                "Datenbank-basierte 3D-Planungen mit Kollisionsprüfung",
                "Basic Engineering der Anlagenplanung aus einer Hand",
                "Einsatz modernster 3D-Planungstools"
            ],
            icon: "planning",
            technologies: ["PDMS", "E3D", "AutoCAD Plant 3D", "PointSense Plant", "3D-Laserscanning", "Rohr 2", "SmartPlant", "BIM-Software"],
            standards: ["DIN", "EN", "ASME", "API", "DGUV", "ISO 9001:2015", "Industriestandards Papier/Pharma/Chemie"]
        },
        {
            id: 2,
            number: "02",
            title: "Projektmanagement & Koordination",
            subtitle: "Professionelle Projektführung für erfolgreiche Anlagenrealisierung",
            description: "Umfassendes Projektmanagement von der Planungsphase bis zur Inbetriebnahme mit Fokus auf Qualität, Termine und Kosten im Industrieanlagenbau.",
            detailedDescription: "In der Realisierungsphase von Industrieanlagenprojekten kommt es wesentlich darauf an, vordefinierte Zielsetzungen hinsichtlich Qualität, Termine und Kosten zu erfüllen oder im positiven Sinne zu übertreffen. PROMAX begegnet dieser Herausforderung mit einem Team erfahrener Projektmanager, die seit 1999 komplexe Industrieanlagenprojekte in den Branchen Papier, Zellstoff, Pharma, Chemie sowie Energie- und Umwelttechnik erfolgreich abwickeln. Dabei bieten wir sowohl komplettes Projektmanagement als auch modulare Teilleistungen, je nach Projektgröße und Kundenanforderungen. Mit ISO 9001:2015 Zertifizierung sorgen wir für höchste Qualitätsstandards und termingerechte Projektumsetzung.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&auto=format",
            features: [
                "Komplettes Projektmanagement oder modulare Teilleistungen",
                "Aufbau- und Ablauforganisation nach PMI-Standards",
                "Projektteam-Koordination und Stakeholder-Management",
                "Risikomanagement und Change Management"
            ],
            highlights: [
                "Über 25 Jahre Projekterfahrung seit 1999",
                "ISO 9001:2015 zertifizierte Projektmanagement-Expertise",
                "Bewährte Methoden aus über 1000 Projekten",
                "24/7 Projektüberwachung und Reporting"
            ],
            icon: "project",
            technologies: ["MS Project", "Primavera P6", "SAP PS", "Contract Management Systeme", "Progress Tracking Tools", "WBS-Systeme", "Claims Tracking Tools", "Digitale Dokumentationssysteme"],
            standards: ["PMI", "IPMA", "PRINCE2", "ISO 21500", "ISO 9001:2015", "FIDIC", "VOB", "ÖNORM", "Critical Path Method", "Earned Value Management"]
        },
        {
            id: 3,
            number: "03",
            title: "Site Services & Vor-Ort-Betreuung",
            subtitle: "Professionelle Montageüberwachung und Inbetriebnahmebegleitung",
            description: "Umfassende Vor-Ort-Betreuung während der gesamten Bauphase bis zur erfolgreichen Inbetriebnahme von Industrieanlagen.",
            detailedDescription: "PROMAX Site Services Experten begleiten jeden Schritt der Projektrealisierung vor Ort in den Branchen Papier, Zellstoff, Pharma, Chemie sowie Energie- und Umwelttechnik. Von der professionellen Montageüberwachung über kontinuierliche Qualitätskontrolle bis zur finalen Inbetriebnahme gewährleisten wir höchste Qualität und termingerechte Fertigstellung. Unser erfahrenes Team koordiniert alle Gewerke und stellt sicher, dass Ihre Anlage funktionsfähig und optimal eingestellt übergeben wird. Mit über 25 Jahren Erfahrung seit 1999 und internationaler Projektexpertise sorgen wir für reibungslose Abläufe auf der Baustelle. Durch systematische Qualitätskontrolle nach internationalen Standards und professionelles Sicherheitsmanagement nach SCC-Standards minimieren wir Risiken und gewährleisten termingerechte, budgetkonforme Fertigstellung.",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&auto=format",
            features: [
                "Professionelle Montageüberwachung und kontinuierliche Qualitätskontrolle nach internationalen Standards",
                "Systematische Inbetriebnahmebegleitung und umfassendes Commissioning von Industrieanlagen",
                "Koordination aller Gewerke und professionelles Sicherheitsmanagement nach SCC-Standards",
                "Performance-Tests, Anlagenoptimierung und systematische Leistungsvalidierung"
            ],
            highlights: [
                "Vor-Ort-Expertise mit erfahrener Bauleitung und über 25 Jahren Branchenerfahrung",
                "Qualitätskontrolle nach internationalen Standards mit systematischer Dokumentation",
                "Termingerechte und budgetkonforme Fertigstellung durch professionelle Projektkoordination",
                "Sicherheitsmanagement nach SCC-Standards für maximalen Arbeitsschutz"
            ],
            icon: "project",
            technologies: ["Digitale Dokumentationssysteme", "Mobile Erfassungsgeräte", "3D-Scanning", "Qualitätsmanagementsysteme", "Baustellenmanagement-Software"],
            standards: ["SCC", "ISO 45001", "OHSAS 18001", "CE-Kennzeichnung", "ISO 9001:2015", "VDI-Richtlinien"]
        },
        {
            id: 4,
            number: "04",
            title: "Organisationsberatung",
            subtitle: "Spezialisierte Beratung für komplexe Themenbereiche",
            description: "Unterschiedliche Projekte in verschiedenen Branchen werfen spezielle Fragestellungen auf, die das Tagesgeschäft übersteigen.",
            detailedDescription: "Komplexe Themenbereiche, die das Tagesgeschäft übersteigen, bedürfen spezieller Expertise. PROMAX Organisationsberatung entwickelt maßgeschneiderte Präventionsmaßnahmen und Claims Management Systeme für Industrieanlagenprojekte in den Branchen Papier, Zellstoff, Pharma, Chemie sowie Energie- und Umwelttechnik. Wir unterstützen bei strategischen Entscheidungen, der Optimierung von Projektabläufen und der Implementierung bewährter Verfahren aus unserer über 25-jährigen Praxis im Industrieanlagenbau. Mit Fokus auf nachhaltige und wirtschaftliche Lösungsansätze bieten unsere interdisziplinären Beratungsteams technisch-kaufmännische Kompetenz für komplexe Herausforderungen. Unser Leistungsspektrum umfasst Contract & Claims Management für rechtssichere Vertragsabwicklung sowie systematische Projektverfolgung mit Time Scheduling und Progress Control.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format",
            features: [
                "Entwicklung maßgeschneiderter Präventionsmaßnahmen für komplexe Industrieanlagenprojekte",
                "Aufbau und Implementierung professioneller Claims Management Systeme",
                "Strukturierte Lessons Learned-Workshops und systematische Projektanalysen",
                "Strategische Prozessoptimierung und umfassende Organisationsentwicklung"
            ],
            highlights: [
                "Spezialisierte Beratung über das Tagesgeschäft hinaus mit technisch-kaufmännischer Kompetenz",
                "Bewährte Lösungsansätze aus über 1000 erfolgreich abgewickelten Industrieanlagenprojekten",
                "Branchenübergreifende Expertise in Papier, Zellstoff, Pharma, Chemie und Energietechnik",
                "Nachhaltige und wirtschaftliche Lösungsansätze für komplexe Herausforderungen"
            ],
            icon: "consulting",
            technologies: ["Digitale Analyse-Tools", "Workflow-Management-Systeme", "Contract Management Systeme", "Claims Tracking Tools", "Primavera P6"],
            standards: ["ISO 9001:2015", "ISO 14001", "ISO 45001", "FIDIC", "VOB", "ÖNORM", "PMI", "IPMA"]
        }
    ];

    // Split services into main services (1-2) and popup services (3-4)
    const mainServices = services.slice(0, 2);
    const popupServices = services.slice(2, 4);

    return (
        <>
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
                                    alt={`${selectedService.title} - PROMAX Industrial Engineering`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    width="800"
                                    height="320"
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
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-white mb-4 sm:mb-6">
                            Engineering Excellence.
                            <span className="block font-semibold text-[#d97539] mt-1 sm:mt-2">Leistungen.</span>
                        </h1>
                        <div className="w-20 h-1 bg-[#d97539] mb-6 sm:mb-8"></div>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
                            Von der ersten Projektidee bis zur erfolgreichen Inbetriebnahme - umfassende Lösungen für komplexe Industrieanlagenprojekte.
                        </p>
                    </div>
                </div>

                {/* Hero Image Section */}
                <div className="relative h-[500px] bg-gray-100 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=500&fit=crop&auto=format"
                        alt="Professional project management and engineering consulting - PROMAX"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width="1200"
                        height="500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="text-center text-white max-w-4xl px-6">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
                                Expertise und Innovation für Ihre{' '}
                                <span className="text-[#d97539] font-semibold">Industrieprojekte</span>
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-200">
                                Spezialisierte Planungsleistungen und Projektmanagement mit über 20 Jahren Erfahrung
                            </p>
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
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6">
                                    Wir sind Ihr Partner für{' '}
                                    <span className="text-[#1e3767] font-semibold">technische Exzellenz</span>
                                </h2>
                                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                                    Mit über 20 Jahren Erfahrung in der Industrieplanung entwickeln wir
                                    maßgeschneiderte Lösungen für komplexe technische Herausforderungen.
                                    Von der ersten Idee bis zur erfolgreichen Umsetzung – wir begleiten
                                    Sie durch alle Projektphasen mit bewährten Methoden und innovativen Ansätzen.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Services - Only showing services 1 and 2 */}
                <section className="py-16 bg-[#d1d8dc]/30">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                                Unsere{' '}
                                <span className="text-[#1e3767] font-semibold">Kernkompetenzen</span>
                            </h2>
                            <div className="w-20 h-1 bg-[#d97539] mx-auto"></div>
                        </div>

                        <div className="space-y-16">
                            {mainServices.map((service, index) => (
                                <div
                                    key={service.id}
                                    className={`${index < mainServices.length - 1 ? 'border-b border-[#9ba8b3] pb-12' : ''} cursor-pointer group`}
                                    data-section={`service-${service.id}`}
                                    onClick={(e) => { e.stopPropagation(); setSelectedService(service); }}
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                        {/* Content Side */}
                                        <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} transition-all duration-1000 ${
                                            isVisible[`service-${service.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                        }`}>
                                            <div className="flex items-start gap-6 mb-6">
                                                <span className="text-4xl sm:text-5xl font-light text-[#d1d8dc] group-hover:text-[#d97539] transition-colors">
                                                    {service.number}
                                                </span>
                                                <div>
                                                    <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2 group-hover:text-[#1e3767] transition-colors">
                                                        {service.title}
                                                    </h3>
                                                    <div className="w-16 h-1 bg-[#d97539] mb-3 group-hover:w-[70px] transition-all duration-300"></div>
                                                    <p className="text-lg sm:text-xl text-gray-700 mb-4 font-medium">
                                                        {service.subtitle}
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">
                                                {service.detailedDescription}
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {/* Kernleistungen */}
                                                <div>
                                                    <h4 className="text-base font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                                                        Kernleistungen
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                                                            <li key={featureIndex} className="text-base text-gray-600 flex items-start">
                                                                <span className="w-2 h-2 bg-[#d97539] rounded-full mr-3 flex-shrink-0 mt-2"></span>
                                                                <span>{feature}</span>
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

                                        {/* Image Side */}
                                        <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} transition-all duration-1000 delay-300 ${
                                            isVisible[`service-${service.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                        }`}>
                                            <div className="relative group transition-all duration-300">
                                                <img
                                                    src={service.image}
                                                    alt={`${service.title} - PROMAX Industrial Engineering`}
                                                    className="w-full h-[450px] object-cover rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]"
                                                    loading="lazy"
                                                    width="800"
                                                    height="450"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Additional Services as Popup Buttons */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                                Weitere{' '}
                                <span className="text-[#1e3767] font-semibold">Leistungen</span>
                            </h2>
                            <div className="w-20 h-1 bg-[#d97539] mx-auto mb-6"></div>
                            <p className="text-lg text-gray-600">
                                Entdecken Sie unsere zusätzlichen Spezialdienste
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            {popupServices.map((service, index) => (
                                <div
                                    key={service.id}
                                    className={`relative overflow-hidden rounded-2xl cursor-pointer group transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                                        index === 0
                                            ? 'bg-[#1e3767]/10 border-2 border-[#1e3767]/20 hover:bg-[#1e3767]/15 hover:border-[#1e3767]/30'
                                            : 'bg-[#d97539]/10 border-2 border-[#d97539]/20 hover:bg-[#d97539]/15 hover:border-[#d97539]/30'
                                    }`}
                                    onClick={() => setSelectedService(service)}
                                >
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-5">
                                        <div className={`w-full h-full ${
                                            index === 0 ? 'bg-[#1e3767]' : 'bg-[#d97539]'
                                        }`}></div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative p-10">
                                        <div className="flex items-start gap-6 mb-6">
                                            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 ${
                                                index === 0
                                                    ? 'bg-[#1e3767]/20 text-[#1e3767] group-hover:bg-[#1e3767] group-hover:text-white group-hover:scale-110'
                                                    : 'bg-[#d97539]/20 text-[#d97539] group-hover:bg-[#d97539] group-hover:text-white group-hover:scale-110'
                                            }`}>
                                                {service.number}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                                                    index === 0
                                                        ? 'text-[#1e3767] group-hover:text-[#1e3767]'
                                                        : 'text-[#d97539] group-hover:text-[#d97539]'
                                                }`}>
                                                    {service.title}
                                                </h3>
                                                <p className="text-xl text-gray-700 font-medium leading-relaxed">
                                                    {service.subtitle}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 leading-relaxed text-lg mb-8 line-clamp-4">
                                            {service.description}
                                        </p>

                                        {/* Features Preview */}
                                        <div className="mb-8">
                                            <ul className="space-y-3">
                                                {service.features.slice(0, 2).map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-start">
                                                        <span className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 mt-3 ${
                                                            index === 0 ? 'bg-[#1e3767]' : 'bg-[#d97539]'
                                                        }`}></span>
                                                        <span className="text-gray-700 leading-relaxed">{feature.split(' ').slice(0, 8).join(' ')}...</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Call to Action */}
                                        <div className="flex items-center justify-between">
                                            <span className={`inline-flex items-center font-semibold text-lg transition-all duration-300 ${
                                                index === 0
                                                    ? 'text-[#1e3767] group-hover:text-[#1e3767]'
                                                    : 'text-[#d97539] group-hover:text-[#d97539]'
                                            }`}>
                                                Alle Details anzeigen
                                                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </span>
                                        </div>

                                        {/* Hover Indicator */}
                                        <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${
                                            index === 0 ? 'bg-[#1e3767]' : 'bg-[#d97539]'
                                        }`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default NewLeistungen;