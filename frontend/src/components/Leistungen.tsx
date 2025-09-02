import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Add this import

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
    const location = useLocation(); // Add this hook
    //const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({}); // Add refs for services

    useEffect(() => {
        // Set initial visibility
        setIsVisible({
            services: true,
            'service-1': true,
            'service-2': true
        });

        // Auto-scroll functionality
        if (location.hash) {
            const targetId = location.hash.substring(1); // Remove the '#'
            setTimeout(() => {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
        }
    }, [location]);

    const services: Service[] = [
        {
            id: 1,
            number: "01",
            title: "Technische Planung & Engineering",
            subtitle: "Von der Projektierung bis zur detaillierten 3D-Anlagenplanung",
            description: "PROMAX vereint jahrzehntelange Expertise in der technischen Planung von Industrieanlagen der Branchen Papier, Zellstoff, Pharma, Chemie sowie Energie- und Umwelttechnik.",
            detailedDescription: "PROMAX vereint jahrzehntelange Expertise in der technischen Planung von Industrieanlagen der Branchen Papier, Zellstoff, Pharma, Chemie sowie Energie- und Umwelttechnik. Unsere Planungsphilosophie basiert auf der effizienten Überführung der Verfahrenstechnik in die Anlagenplanung mit angemessener Berücksichtigung besonderer Kundenanforderungen für Betrieb, Wartung und Instandhaltung. Wir entwickeln fundierte Basisplanungen als solide Grundlage für Ihre Investitionsentscheidungen und erstellen realistische Terminpläne sowie belastbare Projektbudgets. Unsere 3D-Planungstechnologie ermöglicht automatische Kollisionsprüfung und gewerkeübergreifende Koordination bereits in der Planungsphase.",
            image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop&auto=format",
            features: [
                "Basic Engineering und konzeptionelle Anlagenentwicklung",
                "3D-Anlagenplanung mit PDMS, E3D und AutoCAD Plant 3D",
                "Detaillierte Rohrleitungsplanung mit Isometrien",
                "Machbarkeitsstudien und Wirtschaftlichkeitsanalysen"
            ],
            highlights: [
                "Jahrzehntelange Expertise in technischer Planung",
                "Effiziente Überführung der Verfahrenstechnik in die Anlagenplanung",
                "Fundierte Basisplanungen für Investitionsentscheidungen",
                "3D-Planungstechnologie mit automatischer Kollisionsprüfung"
            ],
            icon: "engineering",
            technologies: ["PDMS", "E3D", "AutoCAD Plant 3D", "SmartPlant Review", "Navisworks", "CAESAR II", "BENTLEY AutoPLANT"],
            standards: ["ISO 9001:2015", "VDI-Richtlinien", "DIN-Normen", "ASME Standards", "API Standards", "PED-Richtlinie"]
        },
        {
            id: 2,
            number: "02",
            title: "Projektmanagement & Koordination",
            subtitle: "Professionelle Projektführung für erfolgreiche Anlagenrealisierung",
            description: "In der Realisierungsphase von Industrieanlagenprojekten kommt es wesentlich darauf an, vordefinierte Zielsetzungen hinsichtlich Qualität, Termine und Kosten zu erfüllen oder im positiven Sinne zu übertreffen.",
            detailedDescription: "In der Realisierungsphase von Industrieanlagenprojekten kommt es wesentlich darauf an, vordefinierte Zielsetzungen hinsichtlich Qualität, Termine und Kosten zu erfüllen oder im positiven Sinne zu übertreffen. PROMAX begegnet dieser Herausforderung mit einem Team erfahrener Projektmanager, die seit 1999 komplexe Industrieanlagenprojekte in den Branchen Papier, Zellstoff, Pharma, Chemie sowie Energie- und Umwelttechnik erfolgreich abwickeln. Dabei bieten wir sowohl komplettes Projektmanagement als auch modulare Teilleistungen, je nach Projektgröße und Kundenanforderungen. Mit ISO 9001:2015 Zertifizierung sorgen wir für höchste Qualitätsstandards und termingerechte Projektumsetzung.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format",
            features: [
                "Komplettes Projektmanagement oder modulare Teilleistungen",
                "Aufbau- und Ablauforganisation nach PMI-Standards",
                "Projektteam-Koordination und Stakeholder-Management",
                "Risikomanagement und Change Management"
            ],
            highlights: [
                "Erfahrene Projektmanager seit 1999",
                "Komplettes Projektmanagement oder modulare Teilleistungen",
                "ISO 9001:2015 Zertifizierung für höchste Qualitätsstandards",
                "PMI-Standards für professionelle Projektführung"
            ],
            icon: "project-management",
            technologies: ["MS Project", "Primavera P6", "SAP PS", "Jira", "Confluence", "MS Teams", "Sharepoint"],
            standards: ["PMI", "IPMA", "ISO 9001:2015", "ISO 21500", "PRINCE2", "Agile PM", "Scrum"]
        },
        {
            id: 3,
            number: "03",
            title: "VR-Technologie & Virtual Reality",
            subtitle: "Immersive Planungserlebnisse mit modernsten VR-Brillen",
            description: "Revolutionäre VR-Brillen-Technologie für immersive 3D-Anlagenbegehungen, virtuelle Schulungen und interaktive Planungsvisualisierung in der Industrie 4.0.",
            detailedDescription: "PROMAX nutzt hochmoderne VR-Brillen wie Oculus Quest, HTC Vive Pro und Microsoft HoloLens, um Industrieanlagen bereits in der Planungsphase vollständig erlebbar zu machen. Unsere VR-Brillen ermöglichen es Ingenieuren, Planern und Betreibern, virtuell durch zukünftige Produktionsstätten zu wandeln, als wären sie bereits gebaut. Mit hand-trackenden Controllern können Nutzer Ventile betätigen, Wartungsarbeiten simulieren und Optimierungen direkt in der virtuellen Umgebung durchführen. Die VR-Brillen bieten eine 360-Grad-Rundumsicht mit realistischen Maßstäben und physikalischen Eigenschaften. Durch die immersive VR-Erfahrung werden Planungsfehler frühzeitig erkannt, Entscheidungswege verkürzt und kostspielige Änderungen in der Bauphase vermieden. Unsere VR-Umgebungen sind nahtlos in die CAD-Planungsprozesse integriert.",
            image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&h=600&fit=crop&auto=format",
            features: [
                "Immersive VR-Begehungen mit High-End VR-Brillen (Oculus, HTC Vive)",
                "Hand-Tracking und Controller-basierte Interaktion in virtuellen Anlagen",
                "Realistische 1:1 Maßstäbe mit physikalischen Materialeigenschaften",
                "Virtuelle Wartungsschulungen und Sicherheitstrainings in VR",
                "Kollaborative Multi-User VR-Sessions für Projektteams",
                "Echtzeit-Anpassungen und Optimierungen in der VR-Umgebung"
            ],
            highlights: [
                "Modernste VR-Brillen-Technologie für industrielle Anwendungen",
                "Frühzeitige Fehlererkennung durch immersive VR-Visualisierung",
                "Kostenreduktion durch virtuelle Planungsvalidierung",
                "Revolutionäre Planungsmethodik mit VR-Integration"
            ],
            icon: "vr-headset",
            technologies: ["Oculus Quest Pro", "HTC Vive Pro 2", "Microsoft HoloLens", "Unity 3D Engine", "Unreal Engine 5", "VR-Tracking-Systeme", "Haptic Feedback Controller", "Mixed Reality Plattformen"],
            standards: ["VR-Sicherheitsstandards", "Ergonomie-Richtlinien VR", "Industrial VR Standards", "OpenXR Initiative", "WebVR Standards", "ISO 9241-210 VR", "IEEE VR Guidelines"]
        },
        {
            id: 4,
            number: "04",
            title: "3D-Laserscanning Technologie",
            subtitle: "Präzise Vermessung mit hochmodernen Laserscannern",
            description: "State-of-the-Art 3D-Laserscanning mit Millimeter-Genauigkeit für exakte Bestandsaufnahmen, digitale Zwillinge und präzise Reverse-Engineering-Projekte.",
            detailedDescription: "PROMAX setzt die neuesten 3D-Laserscanner von Leica, FARO und Trimble ein, um komplexe Industrieanlagen mit Sub-Millimeter-Genauigkeit zu erfassen. Unsere High-End-Laserscanner erstellen präzise Punktwolken mit Millionen von Messpunkten, die als Grundlage für digitale Zwillinge und CAD-Modelle dienen. Terrestrische Laserscanner erfassen stationär große Anlagenbereiche, während mobile Scanner wie der NavVis VLX kontinuierliche Erfassung ermöglichen. Drohnen-basierte Laserscanner erreichen schwer zugängliche Bereiche wie Dächer und hohe Strukturen. Die gescannten Punktwolken werden mit spezieller Software zu detaillierten 3D-Modellen verarbeitet, die millimetergenau bestehende Anlagen abbilden. Diese digitalen Zwillinge ermöglichen präzise Planungen für Umbauten, Erweiterungen und Modernisierungen ohne Kollisionsrisiken.",
            image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop&auto=format",
            features: [
                "Hochpräzise terrestrische 3D-Laserscanner (Leica, FARO, Trimble)",
                "Mobile Laserscanning-Systeme für kontinuierliche Erfassung",
                "Drohnen-basierte Laserscanner für schwer erreichbare Bereiche",
                "Sub-Millimeter-Genauigkeit mit Millionen von Messpunkten",
                "Automatische Punktwolken-zu-CAD Konvertierung",
                "Digitale Zwillinge für präzise Planungsgrundlagen"
            ],
            highlights: [
                "Millimetergenaue Vermessung mit modernsten Laserscannern",
                "Zeiteffiziente Erfassung kompletter Industrieanlagen",
                "Digitale Zwillinge für kollisionsfreie Planung",
                "Nahtlose Integration in CAD-Planungsprozesse"
            ],
            icon: "laser-scanner",
            technologies: ["Leica ScanStation P50", "FARO Focus Premium", "Trimble TX8", "NavVis VLX Mobile Scanner", "PointSense Plant Software", "CloudCompare", "Autodesk ReCap Pro", "Cyclone 3DR"],
            standards: ["ISO 17123 Vermessung", "VDI 2634 Laserscanning", "ASTM E2938 Standards", "Kalibrierrichtlinien", "Punktwolken-Genauigkeitsstandards", "CAD-Konvertierungsstandards", "Vermessungstechnik-Normen"]
        }
    ];

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

                {/* Hero Section */}
                <div className="relative h-96 overflow-hidden">
                    {/* Background Image */}
                    <img
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=600&fit=crop&crop=center&auto=format"
                        alt="Professional Engineering Team Collaboration"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex items-center">
                        <div className="max-w-6xl mx-auto px-6 text-white">
                            <div className="max-w-2xl">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4">
                                    Expertise und Innovation für Ihre
                                </h2>
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d97539] mb-6">
                                    Industrieanlagen-Märkte
                                </h3>
                                <p className="text-lg sm:text-xl leading-relaxed opacity-90">
                                    Spezialisierte Planungsleistungen und Projektmanagement mit über 20 Jahren Erfahrung
                                </p>
                            </div>
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

                {/* Detailed Services Section */}
                <section className="py-16 bg-[#d1d8dc]/30">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                                Unsere{' '}
                                <span className="text-[#1e3767] font-semibold">Technologie-Details</span>
                            </h2>
                            <div className="w-20 h-1 bg-[#d97539] mx-auto"></div>
                        </div>

                        <div className="space-y-16">
                            {services.slice(0, 2).map((service, index) => (
                                <div
                                    key={service.id}
                                    id={`service-${service.id}`} // Add ID for auto-scroll
                                    //ref={el => serviceRefs.current[`service-${service.id}`] = el} // Add ref
                                    className={`${index < 1 ? 'border-b border-[#9ba8b3] pb-12' : ''} scroll-mt-20`} // Add scroll margin
                                    data-section={`service-${service.id}`}
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                        {/* Content Side */}
                                        <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} transition-all duration-1000 ${
                                            isVisible[`service-${service.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                        }`}>
                                            <div className="flex items-start gap-6 mb-6">
                                                <span className="text-4xl sm:text-5xl font-light text-[#d1d8dc]">
                                                    {service.number}
                                                </span>
                                                <div>
                                                    <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                                                        {service.title}
                                                    </h3>
                                                    <div className="w-16 h-1 bg-[#d97539] mb-3"></div>
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
                                        </div>

                                        {/* Image Side */}
                                        <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} transition-all duration-1000 delay-300 ${
                                            isVisible[`service-${service.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                        }`}>
                                            <div className="relative">
                                                <img
                                                    src={service.image}
                                                    alt={`${service.title} - PROMAX Industrial Engineering`}
                                                    className="w-full h-[450px] object-cover rounded-lg shadow-lg"
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

                {/* Bottom Cards Section */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* VR Technology Card */}
                            <div
                                className="relative h-96 rounded-2xl overflow-hidden cursor-pointer group shadow-xl transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl"
                                onClick={() => setSelectedService(services[2])}
                            >
                                {/* Background Image */}
                                <img
                                    src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1000&h=600&fit=crop&auto=format"
                                    alt="VR Technology Background"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#d97539]/75 via-[#d97539]/65 to-[#d97539]/80 group-hover:from-[#d97539]/85 group-hover:to-[#d97539]/70 transition-all duration-500"></div>

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-center items-start p-12 text-white">
                                    {/* VR Headset Icon */}
                                    <div className="mb-8 group-hover:scale-110 transition-transform duration-500">
                                        <svg className="w-20 h-20 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.26 7.8a4.82 4.82 0 0 0-3.93-2.44 3.91 3.91 0 0 0-2.54 1.09 10.58 10.58 0 0 0-1.52 1.71 3 3 0 0 1-2.54 0 10.58 10.58 0 0 0-1.52-1.71 3.91 3.91 0 0 0-2.54-1.09A4.82 4.82 0 0 0 1.74 7.8a4.82 4.82 0 0 0 0 8.4 4.82 4.82 0 0 0 3.93 2.44 3.91 3.91 0 0 0 2.54-1.09c.53-.53 1.04-1.11 1.52-1.71a3 3 0 0 1 2.54 0c.48.6 1 1.18 1.52 1.71a3.91 3.91 0 0 0 2.54 1.09 4.82 4.82 0 0 0 3.93-2.44 4.82 4.82 0 0 0 0-8.4zM7.5 14.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm9 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                                        </svg>
                                    </div>

                                    <h3 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight drop-shadow-lg transform group-hover:translate-x-2 transition-transform duration-500">
                                        VR-Technologie &<br />
                                        Immersive Planung
                                    </h3>

                                </div>

                                {/* Subtle Border Effect */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-500"></div>
                            </div>

                            {/* 3D Laser Scanner Card */}
                            <div
                                className="relative h-96 rounded-2xl overflow-hidden cursor-pointer group shadow-xl transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl"
                                onClick={() => setSelectedService(services[3])}
                            >
                                {/* Background Image */}
                                <img
                                    src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=1000&h=600&fit=crop&auto=format"
                                    alt="3D Laser Scanning Background"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3767]/75 via-[#1e3767]/65 to-[#1e3767]/80 group-hover:from-[#1e3767]/85 group-hover:to-[#1e3767]/70 transition-all duration-500"></div>

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-center items-start p-12 text-white">
                                    {/* Laser Scanner Icon */}
                                    <div className="mb-8 group-hover:scale-110 transition-transform duration-500">
                                        <svg className="w-20 h-20 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                            {/* Main scanner body */}
                                            <rect x="10" y="8" width="4" height="8" rx="1" fill="currentColor"/>
                                            {/* Tripod legs */}
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16l-6 6M12 16l6 6M12 16l0 6"/>
                                            {/* Laser beams */}
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10l-8-2M12 10l8-2M12 10l-6-6M12 10l6-6M12 10l0-8"/>
                                            {/* Rotating scanner head */}
                                            <circle cx="12" cy="10" r="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                                            {/* Central dot */}
                                            <circle cx="12" cy="10" r="0.5" fill="currentColor"/>
                                        </svg>
                                    </div>

                                    <h3 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight drop-shadow-lg transform group-hover:translate-x-2 transition-transform duration-500">
                                        3D-Laserscanning &<br />
                                        Präzisionsvermessung
                                    </h3>
                                </div>

                                {/* Subtle Border Effect */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-300/30 rounded-2xl transition-all duration-500"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default NewLeistungen;