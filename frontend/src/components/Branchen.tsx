import React, { useState, useEffect, useRef } from 'react';

// TypeScript Interfaces
interface Branch {
    title: string;
    description: string;
    detailedDescription: string;
    services: string[];
    projects: string[];
    image: string;
    expertise: string[];
    technologies: string[];
    specializations: string[];
}

interface VisibilityState {
    [key: string]: boolean;
}

interface HTMLElementWithDataset extends HTMLElement {
    dataset: {
        section?: string;
        branchIndex?: string;
    };
}

const BranchesOverview: React.FC = () => {
    const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
    const [, setIsVisible] = useState<VisibilityState>({});
    const [activeSection, setActiveSection] = useState(0);
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target as HTMLElementWithDataset;
                        const section = target.dataset.section || '';
                        setIsVisible(prev => ({
                            ...prev,
                            [section]: true
                        }));
                    }
                });
            },
            { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
        );

        Object.values(sectionRefs.current).forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    // Scroll spy for timeline
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            const branchSections = document.querySelectorAll('[data-branch-index]');

            branchSections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                const sectionTop = window.scrollY + rect.top;
                const sectionBottom = sectionTop + rect.height;

                if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                    setActiveSection(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const branches: Branch[] = [
        {
            title: "Chemie",
            description: "Industrieller Anlagenbau für Chemieunternehmen mit umfassendem Know-how in der Verfahrenstechnik und Anlagenplanung. Von thermischen Verfahren bis zu komplexen chemischen Produktionsprozessen - wir bieten maßgeschneiderte Lösungen für höchste Sicherheitsstandards.",
            detailedDescription: "PROMAX verfügt über jahrzehntelange Expertise im industriellen Anlagenbau für Chemieunternehmen. Unsere Ingenieure entwickeln innovative Lösungen für komplexe verfahrenstechnische Prozesse unter Berücksichtigung höchster Sicherheits- und Umweltstandards. Von der ersten Konzeptphase bis zur erfolgreichen Inbetriebnahme begleiten wir Ihre Chemieanlagen-Projekte mit fundiertem Know-how in Verfahrenstechnik, Anlagenplanung und Projektmanagement. Unsere Kompetenz erstreckt sich über thermische Verfahren, chemische Reaktoren, Destillationsanlagen und komplexe Produktionsprozesse.",
            services: ["Layoutplanung", "Stahlbauleitplanung", "Rohrleitungsdetailplanung", "ROHR 2 Berechnung", "Montageüberwachung", "Qualitätskontrolle"],
            projects: ["Salzanlage - Thermisches Verfahren", "Rohstoffbunker - Projektabwicklung", "Chemisches Verfahren - Anlagendetailplanung", "Abluftwäscheranlage - Dehnungskonzept"],
            image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=400&fit=crop",
            expertise: [
                "Verfahrenstechnische Konzeptentwicklung für chemische Prozesse",
                "Sicherheitsanalysen und HAZOP-Studien",
                "Anlagenoptimierung und Prozessverbesserung",
                "Genehmigungsplanung nach Chemikaliengesetz",
                "Ex-Schutz Planung und Zoneneinteilung",
                "Emissionsminderung und Umweltschutz",
                "Basic und Detail Engineering für Chemieanlagen",
                "Inbetriebnahmebegleitung und Commissioning"
            ],
            technologies: ["AutoCAD Plant 3D", "PDMS", "E3D", "ChemCAD", "Aspen Plus", "3D-Laserscanning"],
            specializations: [
                "Thermische Verfahren und Wärmetauscher",
                "Chemische Reaktoren und Rührtechnik",
                "Destillations- und Rektifikationsanlagen",
                "Absorption und Desorption",
                "Kristallisation und Eindampfung",
                "Filtration und Zentrifugation",
                "Misch- und Trenntechnik"
            ]
        },
        {
            title: "Energie & Umwelt",
            description: "Nachhaltige Energielösungen und Umweltplanung für moderne Industrieanlagen. Fokus auf Energieeffizienz, Emissionsreduktion und umweltschonende Technologien für eine klimaneutrale Zukunft.",
            detailedDescription: "Im Bereich Energie & Umwelt entwickelt PROMAX zukunftsweisende Lösungen für nachhaltige Industrieanlagen. Unsere Expertise umfasst Energieeffizienz-Konzepte, Emissionsminderungstechnologien und umweltschonende Anlagenkonzepte. Wir unterstützen Unternehmen bei der Transformation zu klimaneutralen Produktionsprozessen durch innovative Energiesysteme, Abwärmerückgewinnung und regenerative Energieintegration. Unsere Planungsleistungen berücksichtigen alle relevanten Umweltauflagen und Energiestandards für nachhaltige Industrieentwicklung.",
            services: ["Kanal und Rohrleitungstechnik", "Ausschreibungsunterlagen", "Angebotsvergleiche", "Layout Planung", "Rohrleitungsplanung"],
            projects: ["Energieeffizienz-Konzepte", "Umweltschutzanlagen", "Regenerative Energiesysteme", "Emissionsminderung"],
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=400&fit=crop",
            expertise: [
                "Energieauditierung und Energiemanagement-Systeme",
                "CO2-Bilanzierung und Klimaneutralitäts-Strategien",
                "Abwärmerückgewinnung und Kraft-Wärme-Kopplung",
                "Umweltverträglichkeitsprüfungen (UVP)",
                "Genehmigungsplanung nach Umweltrecht",
                "Luftreinhaltung und Abluftreinigung",
                "Wasseraufbereitung und Abwasserbehandlung",
                "Kreislaufwirtschaft und Ressourceneffizienz"
            ],
            technologies: ["Energiesimulations-Software", "CFD-Modellierung", "SCADA-Systeme", "IoT-Sensortechnik"],
            specializations: [
                "Biomasse- und Biogas-Anlagen",
                "Solarthermie und Photovoltaik-Integration",
                "Wärmepumpen-Systeme",
                "Brennstoffzellen-Technologie",
                "Power-to-X Verfahren",
                "Carbon Capture and Storage (CCS)",
                "Energiespeicher-Systeme"
            ]
        },
        {
            title: "Pharma",
            description: "Hochspezialisierte Planungsleistungen für die pharmazeutische Industrie unter Berücksichtigung strenger GMP-Richtlinien und Qualitätsstandards. Von der ersten Konzeption bis zur Qualifizierungsassistenz.",
            detailedDescription: "Die pharmazeutische Industrie stellt höchste Anforderungen an Anlagenplanung und -qualifizierung. PROMAX verfügt über umfassende Expertise in GMP-konformer Planung und Projektabwicklung für Pharmaunternehmen. Unsere Ingenieure sind geschult in FDA-, EMA- und ICH-Richtlinien und begleiten Projekte von der Konzeptentwicklung über die Detail-Engineering bis zur erfolgreichen Qualifizierung. Wir entwickeln maßgeschneiderte Lösungen für sterile Produktionsbereiche, Wirkstoffherstellung und pharmazeutische Hilfsstoffproduktion unter Einhaltung aller regulatorischen Anforderungen.",
            services: ["Anlagentechnische Projektleitung", "Schema- und Layout-Planung", "Lieferantenmonitoring", "User requirement specifications (URS)", "Herstellerüberwachung", "Qualifizierungsassistenz"],
            projects: ["Anlagenkonzept", "Material- und Personalflusspläne", "Logistikkonzept", "Dokumentationserstellung"],
            image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=400&fit=crop",
            expertise: [
                "GMP-konforme Anlagenplanung und -qualifizierung",
                "Cleanroom-Design und Kontaminationsschutz",
                "Validierung und Qualifizierung (IQ/OQ/PQ)",
                "Risikoanalysen nach ICH Q9",
                "Change Control und Deviation Management",
                "Computerized System Validation (CSV)",
                "Regulatory Affairs und Behördenkommunikation",
                "Technology Transfer und Scale-up"
            ],
            technologies: ["DeltaV", "Siemens PCS 7", "GAMP 5", "TrackWise", "Veeva Vault", "SAP"],
            specializations: [
                "Sterile Arzneimittelproduktion",
                "API-Herstellung (Active Pharmaceutical Ingredients)",
                "Biotechnologie und Fermentation",
                "Impfstoffproduktion",
                "Personalisierte Medizin",
                "Kontinuierliche Herstellung",
                "Verpackung und Konfektionierung"
            ]
        },
        {
            title: "Papier & Zellstoff",
            description: "Umfassende Projektbetreuung für die Papier- und Zellstoffindustrie von der Rohstoffaufbereitung bis zur fertigen Papierproduktion. Expertise in nachhaltigen Produktionsverfahren und Recycling-Technologien.",
            detailedDescription: "PROMAX besitzt langjährige Erfahrung in der Papier- und Zellstoffindustrie mit fundierten Kenntnissen aller Produktionsprozesse von der Holzaufbereitung bis zur fertigen Papierproduktion. Unsere Ingenieure verstehen die komplexen Anforderungen der Zellstoffgewinnung, Bleichprozesse und Papiermaschinenoptimierung. Wir entwickeln nachhaltige Lösungen für Recycling-Prozesse, Energierückgewinnung und Umweltschutz. Unsere Expertise umfasst sowohl traditionelle als auch innovative Verfahren der Papierherstellung unter Berücksichtigung modernster Umwelt- und Energiestandards.",
            services: ["Detailkonstruktion", "Rohrleitungstechnik", "Montageaufsicht", "Anlagenlayout", "Simulation"],
            projects: ["Zellstoffanlagen", "Papiermaschinen-Layout", "Recycling-Systeme", "Energierückgewinnung"],
            image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&h=400&fit=crop",
            expertise: [
                "Zellstoffgewinnung und Aufschlussprozesse",
                "Bleichsequenzen und ECF/TCF-Verfahren",
                "Papiermaschinen-Engineering und Optimization",
                "Altpapier-Aufbereitung und De-Inking",
                "Energieintegration und Dampfkreisläufe",
                "Abwasserbehandlung und Kreislaufschließung",
                "Prozessautomatisierung und Qualitätskontrolle",
                "Emissionsminderung und Geruchsreduzierung"
            ],
            technologies: ["Honeywell Experion PKS", "ABB 800xA", "Valmet DNA", "Process Simulation"],
            specializations: [
                "Sulfat- und Sulfit-Aufschluss",
                "Sauerstoff- und Ozon-Bleiche",
                "Tissue- und Hygienepapier",
                "Karton und Wellpappe",
                "Spezialpapiere",
                "Biomasse-Kraftwerke",
                "Rückgewinnungskessel"
            ]
        },
        {
            title: "Weitere Branchen",
            description: "Vielseitige Expertise in Lebensmittelindustrie, Recycling und anderen Industriezweigen. Anpassungsfähige Lösungen für spezifische Branchenanforderungen mit innovativen Ansätzen.",
            detailedDescription: "Neben unseren Kernbranchen verfügt PROMAX über umfassende Erfahrungen in diversen Industriezweigen. In der Lebensmittelindustrie entwickeln wir hygienische Anlagenkonzepte unter HACCP-Gesichtspunkten. Im Recycling-Bereich planen wir innovative Sortier- und Aufbereitungsanlagen für die Kreislaufwirtschaft. Weitere Kompetenzen umfassen Bergbau, Metallurgie, Automotive und Elektronik-Industrie. Unsere interdisziplinären Teams passen bewährte Engineering-Methoden an spezifische Branchenanforderungen an und entwickeln innovative Lösungsansätze für individuelle Herausforderungen.",
            services: ["Projektierung", "Projektmanagement", "Site Services", "Organisationsberatung", "Planung"],
            projects: ["Lebensmittelanlagen", "Recycling-Technologien", "Industrielle Automation", "Maßgeschneiderte Lösungen"],
            image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=400&fit=crop",
            expertise: [
                "Lebensmittelsicherheit und HACCP-Konzepte",
                "Hygienic Design und Clean-in-Place (CIP)",
                "Recycling-Technologien und Kreislaufwirtschaft",
                "Bergbau und Mineralaufbereitung",
                "Metallurgie und Gießerei-Technik",
                "Automotive-Produktionsanlagen",
                "Elektronik-Fertigung und Halbleiter",
                "Kosmetik- und Consumer Goods"
            ],
            technologies: ["Siemens TIA Portal", "Rockwell FactoryTalk", "Wonderware InTouch", "Aveva PI"],
            specializations: [
                "Getränkeproduktion und -abfüllung",
                "Fleisch- und Wurstverarbeitung",
                "Molkerei- und Käsetechnik",
                "Kunststoff-Recycling",
                "Elektroschrott-Aufbereitung",
                "Automobilzulieferer",
                "Oberflächentechnik"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Pop-up Modal */}
            {selectedBranch && (
                <div className="fixed inset-0 z-[1100] flex items-start justify-center pt-[110px] p-4 sm:p-6 md:p-8">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-slate-900 bg-opacity-75 backdrop-blur-sm transition-opacity duration-300"
                        onClick={() => setSelectedBranch(null)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-white rounded-2xl max-w-6xl w-full max-h-[calc(100vh-130px)] overflow-y-auto shadow-xl transform transition-all duration-500 animate-in fade-in zoom-in-95">
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedBranch(null)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white hover:bg-slate-50 rounded-full flex items-center justify-center transition-colors shadow-md border border-slate-200"
                        >
                            <span className="text-slate-600 text-xl">×</span>
                        </button>

                        {/* Modal Header */}
                        <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden rounded-t-2xl">
                            <img
                                src={selectedBranch.image}
                                alt={selectedBranch.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
                                    {selectedBranch.title}
                                </h3>
                                <p className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed max-w-2xl">
                                    Branchenspezifische Expertise und maßgeschneiderte Lösungen
                                </p>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 sm:p-8 md:p-10">
                            {/* Beschreibung */}
                            <div className="mb-8">
                                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-slate-200">
                                    Branchenexpertise
                                </h4>
                                <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                    {selectedBranch.detailedDescription}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
                                {/* Kernleistungen */}
                                <div className="bg-slate-50 rounded-xl p-6 sm:p-8">
                                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-slate-300">
                                        Kernleistungen
                                    </h4>
                                    <ul className="space-y-3">
                                        {selectedBranch.services.map((service, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="w-2 h-2 bg-slate-600 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                                                <span className="text-slate-700 text-sm sm:text-base leading-relaxed">{service}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Projektbeispiele */}
                                <div className="bg-orange-50 rounded-xl p-6 sm:p-8">
                                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-orange-300">
                                        Projektbeispiele
                                    </h4>
                                    <ul className="space-y-3">
                                        {selectedBranch.projects.map((project, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                                                <span className="text-slate-700 text-sm sm:text-base leading-relaxed">{project}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Fachexpertise */}
                            <div className="mb-8">
                                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-slate-200">
                                    Fachexpertise & Spezialisierungen
                                </h4>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {/* Expertise */}
                                    <div>
                                        <h5 className="text-lg font-semibold text-slate-900 mb-3">
                                            Branchenexpertise
                                        </h5>
                                        <ul className="space-y-2">
                                            {selectedBranch.expertise.map((item, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                                                    <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Spezialisierungen */}
                                    <div>
                                        <h5 className="text-lg font-semibold text-slate-900 mb-3">
                                            Technische Spezialisierungen
                                        </h5>
                                        <ul className="space-y-2">
                                            {selectedBranch.specializations.map((item, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                                                    <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Technologien */}
                            <div className="grid grid-cols-1 gap-6 sm:gap-8">
                                <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
                                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
                                        Technologien & Tools
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedBranch.technologies.map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-gray-100 text-slate-700 rounded-lg text-sm font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Header */}
            <div className="relative text-white py-32 overflow-hidden" style={{ backgroundColor: '#1e3767' }}>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-pattern"></div>
                </div>
                <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-7xl font-light mb-6 tracking-wide">BRANCHEN</h1>
                    <div className="w-32 h-1 bg-[#d97539] mx-auto mb-8"></div>
                    <p className="text-2xl font-light text-gray-200 max-w-4xl leading-relaxed mx-auto">
                        Entdecken Sie unsere Expertise in fünf Schlüsselbranchen
                    </p>
                </div>
            </div>

            {/* Fixed Timeline Navigation */}
            <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
                <div className="space-y-4">
                    {branches.map((branch, index) => (
                        <div key={index} className="relative">
                            <div
                                className={`w-4 h-4 rounded-full border-4 transition-all duration-300 cursor-pointer ${
                                    activeSection === index
                                        ? 'bg-[#d97539] border-[#d97539] scale-125'
                                        : 'bg-white border-[#1e3767] hover:bg-[#1e3767]'
                                }`}
                                onClick={() => {
                                    const element = document.querySelector(`[data-branch-index="${index}"]`);
                                    element?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            ></div>
                            {activeSection === index && (
                                <div className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-[#1e3767] text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
                                    {branch.title}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Immersive Scroll Sections */}
            <div className="relative">
                {branches.map((branch, index) => (
                    <div
                        key={index}
                        data-branch-index={index}
                        className="min-h-screen relative flex items-center"
                        style={{
                            background: index % 2 === 0
                                ? 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
                                : 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)'
                        }}
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${index % 2 === 0 ? '1e3767' : 'd97539'}' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                            }}></div>
                        </div>

                        <div className="max-w-7xl mx-auto px-16 w-full">
                            <div className={`grid grid-cols-12 gap-16 items-center ${index % 2 === 0 ? '' : 'direction-rtl'}`}>

                                {/* Content Side */}
                                <div className={`col-span-12 lg:col-span-7 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                                    {/* Title Section */}
                                    <div className="mb-12">
                                        <h2
                                            className="text-8xl font-bold mb-6 leading-tight"
                                            style={{ color: '#1e3767' }}
                                        >
                                            {branch.title}
                                        </h2>
                                        <div
                                            className="w-32 h-2 mb-8"
                                            style={{ backgroundColor: '#d97539' }}
                                        ></div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-xl text-gray-700 leading-relaxed mb-12">
                                        {branch.description}
                                    </p>

                                    {/* Key Points */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                        <div>
                                            <h4
                                                className="text-lg font-semibold mb-4 uppercase tracking-wider"
                                                style={{ color: '#1e3767' }}
                                            >
                                                Kernleistungen
                                            </h4>
                                            <ul className="space-y-3">
                                                {branch.services.slice(0, 3).map((service, serviceIndex) => (
                                                    <li key={serviceIndex} className="flex items-start">
                                                        <div
                                                            className="w-2 h-2 rounded-full mr-3 flex-shrink-0 mt-2"
                                                            style={{ backgroundColor: '#6b7280' }}
                                                        ></div>
                                                        <span className="text-gray-700">{service}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4
                                                className="text-lg font-semibold mb-4 uppercase tracking-wider"
                                                style={{ color: '#1e3767' }}
                                            >
                                                Projektbeispiele
                                            </h4>
                                            <ul className="space-y-3">
                                                {branch.projects.slice(0, 3).map((project, projectIndex) => (
                                                    <li key={projectIndex} className="flex items-start">
                                                        <div
                                                            className="w-2 h-2 rounded-full mr-3 flex-shrink-0 mt-2"
                                                            style={{ backgroundColor: '#d97539' }}
                                                        ></div>
                                                        <span className="text-gray-700">{project}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                            console.log('Button clicked for branch:', branch.title);
                                            setSelectedBranch(branch);
                                        }}
                                        className="px-8 py-4 text-white border-none rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer z-10 relative"
                                        style={{ backgroundColor: '#d97539' }}
                                        type="button"
                                    >
                                        Alle Details anzeigen
                                    </button>
                                </div>

                                {/* Image Side */}
                                <div className="col-span-12 lg:col-span-5">
                                    <div className="relative">
                                        <div
                                            className="absolute -inset-4 rounded-2xl opacity-20"
                                            style={{
                                                background: `linear-gradient(45deg, ${index % 2 === 0 ? '#1e3767' : '#d97539'}, ${index % 2 === 0 ? '#2a4870' : '#e6955a'})`
                                            }}
                                        ></div>
                                        <img
                                            src={branch.image}
                                            alt={`${branch.title} industrial facility`}
                                            className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>



            {/* Styles */}
            <style>{`
                .bg-pattern {
                    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                }
                
                .direction-rtl {
                    direction: rtl;
                }
                
                .direction-rtl > * {
                    direction: ltr;
                }
            `}</style>
        </div>
    );
};

export default BranchesOverview;