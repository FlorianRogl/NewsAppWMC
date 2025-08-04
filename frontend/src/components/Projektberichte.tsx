import React, { useState, useEffect } from 'react';
import { ChevronRight, Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

// TypeScript Interfaces
export interface ProjectSection {
    title: string;
    content: string;
}

export interface ProjectContent {
    sections: ProjectSection[];
}

export interface Project {
    id: number;
    title: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    excerpt: string;
    content: ProjectContent;
    tags: string[];
}

// Mock-Daten für CMS-Integration - erweitert um mehr Projekte
const mockProjects: Project[] = [
    {
        id: 1,
        title: "Säurefeste Auskleidungen mit zusätzlichen Abriebfestigkeitseigenschaften",
        category: "Chemische Industrie",
        date: "2024-03-15",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop",
        excerpt: "Entwicklung einer technisch und wirtschaftlich optimalen Lösung für einen 80 m³ Pufferbehälter mit chemisch aggressiven Abwässern bei Temperaturen bis 85°C.",
        content: {
            sections: [
                {
                    title: "1. Aufgabenstellung",
                    content: "In einem Pufferbehälter werden chemische Abwässer gesammelt. Mittels Direktdampfbeheizung werden die Abwässer auf Temperaturen bis 85 °C gebracht. Es wird im Behälter der pH Wert auf einen Wert von ca. 2 eingestellt (schwefelsauer). Eine kontinuierliche Durchmischung des Behälters ist durch ein Rührwerk gewährleistet.\n\nDas Behältervolumen ist 80 m³, um eine gewisse Pufferkapazität zu ermöglichen. Aus aufstellungstechnischen Gründen ist der Behälter mit einer Höhe der Oberkante von 4 Meter begrenzt. Dadurch ergibt sich eine Längenausdehnung des Behälters von ca. 6 mm.\n\nDie örtlich bedingten Umstände ergaben, dass ein betonierter Behälter die wirtschaftlichste Lösung darstellt. Um eine Behälterform mit wenig nichtdurchströmten Bereichen zu erhalten, ist die Auswahl auf ein 10 Eck Polygon in Fertigteilbauweise gefallen.\n\nDurch die chemische Aggressivität der Abwässer ist der Beton zu schützen. Darüber hinaus sind die im Abwasser nicht gelösten Inhaltsstoffe zu berücksichtigen, die einen Verschleiß verursachen."
                },
                {
                    title: "2. Technische Beschreibung des Systems und dessen Alternativen",
                    content: "Alternativvarianten, die bei der technischen Prüfung zur Auswahl stehen:\na) Stahlbehälter mit Innengummierung\nb) Betonbehälter mit\n   1) Auskleidung mit PP-Platten\n   2) Auskleidung mit glasfaserverstärktem Kunststoff und chemisch beständigem Inliner\n\nAd a) Stahlbehälter in Dimensionen, die einen Durchmesser von 4 m überschreiten, haben einen erhöhten Vorfertigungsaufwand. Deshalb wären zwei Behälter in kleineren Dimensionen umzusetzen gewesen, wobei sich der Aufwand der Rührtechnik verdoppelt. Verschleißschutz ist keiner gegeben.\n\nAd b)1) Auskleidungen mit PP-Platten sind lediglich bis max. 80 °C dauertemperaturbelastbar.\n\nAd b)2) Der temperaturbeständige GFK mit Inliner hat keinen Abriebschutz und bietet überdies auch nur einen bedingten chemischen Schutz."
                },
                {
                    title: "Technisch umgesetzte Ausführung",
                    content: "Auskleidung mit Gummierung und säurefester Vormauerung.\n\nDer Schichtaufbau dieses Säureschutzes beinhaltet ab der Betonwand:\n• leitfähige Spachtel\n• Gummierung Stellabutyl 2 mm\n• Vormauerung mit säurefesten Steinen 100 mm und Kitt auf Furanharzbasis\n\nDie Mauerung übernimmt somit zwei Funktionen: einerseits den Abriebschutz und andererseits einen zusätzlichen Temperaturschutz besonders an den Dampfeinleitstellen.\n\nBesonderes Augenmerk ist auf das Verfugen der Mauerung zu legen, da ein erhöhter Aufwand für den Zuschnitt der Steine zu beachten ist. Ein spezielles Detail sind die Wanddurchführungen. Besonders ist auch die Erdung des Behälters zu berücksichtigen."
                },
                {
                    title: "3. Wirtschaftlichkeit",
                    content: "Unter den örtlichen Gegebenheiten konnte neben der technisch besten Lösung auch die ausgeführte Umsetzung wirtschaftlich am günstigsten reüssieren."
                },
                {
                    title: "4. Zusammenfassung",
                    content: "Die Erkenntnis der intensiven Marktanalyse ist, dass zum Thema Säureschutz mehrere Lösungsansätze für Säureschutzmaßnahmen im Bereich des industriellen Anlagenbaus mit verschiedenen Herstellern angeboten werden.\n\nDies bietet einen großen Vorteil der Auswahlmöglichkeit. Um jedoch für einen bestimmten Anwendungsfall die technisch und wirtschaftlichste Lösung zu finden ist eine exakte Beschreibung der Aufgabenstellung erforderlich."
                }
            ]
        },
        tags: ["Säureschutz", "Betonbau", "Chemische Industrie", "Abriebschutz"]
    },
    {
        id: 2,
        title: "GMP-konforme Pharmanlage Modernisierung",
        category: "Pharma",
        date: "2024-02-20",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        excerpt: "Komplette Modernisierung einer pharmazeutischen Produktionsanlage unter Einhaltung aller GMP-Richtlinien und ohne Produktionsunterbrechung.",
        content: {
            sections: [
                {
                    title: "1. Projektübersicht",
                    content: "Die Modernisierung einer bestehenden pharmazeutischen Produktionsanlage stellte eine besondere Herausforderung dar, da der laufende Betrieb nicht unterbrochen werden durfte. Die Anlage musste dabei vollständig den aktuellen GMP-Richtlinien (Good Manufacturing Practice) entsprechen.\n\nDas Projekt umfasste die Erneuerung der kompletten Prozesstechnik, einschließlich der Steuerungssysteme, Reinraumtechnik und Dokumentationssysteme. Besonderes Augenmerk lag auf der Validierung aller Systeme und Prozesse."
                },
                {
                    title: "2. Technische Herausforderungen",
                    content: "Die größte Herausforderung bestand darin, die Modernisierung in mehreren Phasen durchzuführen, ohne die Produktion zu stoppen. Dies erforderte eine detaillierte Planung und enge Abstimmung mit der Produktion.\n\nAlle neuen Komponenten mussten den strengen pharmazeutischen Standards entsprechen:\n• Materialien in pharmazeutischer Qualität\n• Validierbare Automatisierungssysteme\n• Dokumentation nach 21 CFR Part 11\n• Qualifizierung nach GAMP 5"
                },
                {
                    title: "3. Umsetzung und Validierung",
                    content: "Die Umsetzung erfolgte in vier Hauptphasen:\n\nPhase 1: Installation der neuen Steuerungstechnik parallel zum bestehenden System\nPhase 2: Schrittweise Migration der Prozesse auf das neue System\nPhase 3: Validierung aller kritischen Prozessparameter\nPhase 4: Komplette Umstellung und Außerbetriebnahme der alten Systeme\n\nJede Phase wurde vollständig dokumentiert und validiert, bevor mit der nächsten Phase begonnen wurde."
                },
                {
                    title: "4. Ergebnisse",
                    content: "Das Projekt wurde erfolgreich innerhalb des geplanten Zeitrahmens und Budgets abgeschlossen. Die neue Anlage erfüllt alle aktuellen GMP-Anforderungen und bietet eine deutlich verbesserte Prozessstabilität und Dokumentation.\n\nDie Produktionskapazität konnte um 15% gesteigert werden, während gleichzeitig die Betriebskosten um 8% reduziert wurden."
                }
            ]
        },
        tags: ["GMP", "Pharma", "Modernisierung", "Validierung"]
    },
    {
        id: 3,
        title: "Nachhaltige Energiegewinnung in der Papierindustrie",
        category: "Energie & Umwelt",
        date: "2024-01-10",
        readTime: "7 min",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        excerpt: "Implementierung eines innovativen Energierückgewinnungssystems in einer Papierfabrik zur Reduzierung des CO2-Ausstoßes um 40%.",
        content: {
            sections: [
                {
                    title: "1. Ausgangssituation",
                    content: "Eine große Papierfabrik suchte nach Möglichkeiten, ihren Energieverbrauch zu reduzieren und gleichzeitig die CO2-Emissionen deutlich zu senken. Die bestehende Anlage verbrauchte jährlich etwa 150 GWh Energie, hauptsächlich für Trocknungsprozesse.\n\nZiel war es, ein nachhaltiges Energiekonzept zu entwickeln, das sowohl ökologische als auch wirtschaftliche Vorteile bietet."
                },
                {
                    title: "2. Entwickeltes Energiekonzept",
                    content: "Das entwickelte Konzept basiert auf mehreren Säulen:\n\n• Wärmerückgewinnung aus Abluft und Abwasser\n• Installation einer Kraft-Wärme-Kopplungsanlage\n• Optimierung der Prozessdampferzeugung\n• Integration erneuerbarer Energien (Biomasse)\n• Intelligentes Energiemanagementsystem\n\nDurch die Kombination dieser Technologien konnte eine Gesamteffizienz von über 85% erreicht werden."
                },
                {
                    title: "3. Technische Umsetzung",
                    content: "Die Umsetzung erfolgte in mehreren Schritten:\n\nSchritt 1: Installation von Wärmetauschern zur Abwärmenutzung\nSchritt 2: Aufbau der KWK-Anlage mit 5 MW elektrischer Leistung\nSchritt 3: Integration der Biomasse-Feuerung\nSchritt 4: Implementierung des Energiemanagementsystems\n\nBesondere Herausforderung war die Integration in den laufenden Betrieb ohne Produktionsunterbrechungen."
                },
                {
                    title: "4. Ergebnisse und Nachhaltigkeit",
                    content: "Die Maßnahmen führten zu beeindruckenden Ergebnissen:\n\n• 40% Reduktion der CO2-Emissionen\n• 25% Senkung der Energiekosten\n• Erhöhung der Energieeffizienz um 30%\n• Amortisation der Investition in 4,5 Jahren\n\nDas Projekt dient als Referenz für nachhaltige Energielösungen in der Papierindustrie und wurde mit dem Umweltpreis der Branche ausgezeichnet."
                }
            ]
        },
        tags: ["Nachhaltigkeit", "Energieeffizienz", "Papierindustrie", "CO2-Reduktion"]
    },
    {
        id: 4,
        title: "Hochmoderne Zellstoffaufbereitung",
        category: "Papier & Zellstoff",
        date: "2023-12-05",
        readTime: "9 min",
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        excerpt: "Planung und Umsetzung einer neuen Zellstoffaufbereitungsanlage mit modernster Bleichsequenz-Technologie für höchste Produktqualität.",
        content: {
            sections: [
                {
                    title: "1. Projektanforderungen",
                    content: "Ein führender Zellstoffhersteller beauftragte PROMAX mit der Planung einer neuen Aufbereitungsanlage für hochwertige Bleichzellstoffe. Die Anlage sollte eine Kapazität von 500.000 Tonnen pro Jahr haben und modernste Umweltstandards erfüllen.\n\nBesondere Anforderungen:\n• Höchste Weißgrade (ISO-Helligkeit > 90%)\n• Minimaler Chemikalienverbrauch\n• Geschlossene Wasserkreisläufe\n• Flexibilität für verschiedene Rohstoffe"
                },
                {
                    title: "2. Innovative Bleichsequenz-Technologie",
                    content: "Die implementierte Bleichsequenz basiert auf der modernsten ECF-Technologie (Elemental Chlorine Free) mit folgenden Stufen:\n\n• Sauerstoffdelignifizierung\n• Chlordioxid-Bleichung (D0)\n• Extraktion mit Sauerstoff (Eo)\n• Chlordioxid-Bleichung (D1)\n• Wasserstoffperoxid-Bleichung (P)\n\nDiese Sequenz ermöglicht höchste Qualität bei minimaler Umweltbelastung."
                },
                {
                    title: "3. Anlagentechnik und Automatisierung",
                    content: "Die Anlage umfasst modernste Komponenten:\n\n• Hochkonsistenz-Bleichtürme mit optimierter Verweilzeit\n• Mehrstufige Waschsysteme mit Displacement-Technologie\n• Vollautomatische Chemikaliendosierung\n• Prozessleitsystem mit prädiktiven Algorithmen\n• Inline-Qualitätsmessung\n\nDie Automatisierung gewährleistet konstante Produktqualität und optimalen Ressourcenverbrauch."
                },
                {
                    title: "4. Umwelt und Wirtschaftlichkeit",
                    content: "Das Projekt übertrifft alle gesetzten Ziele:\n\nUmweltaspekte:\n• 50% weniger AOX-Bildung als konventionelle Anlagen\n• 30% Reduktion des Wasserverbrauchs\n• Vollständige Rückgewinnung der Bleichchemikalien\n\nWirtschaftliche Ergebnisse:\n• 15% höhere Ausbeute durch optimierte Prozessführung\n• 20% geringere Betriebskosten\n• Premiumpreise durch höchste Produktqualität\n\nDie Anlage gilt heute als Referenz für moderne Zellstoffbleiche in Europa."
                }
            ]
        },
        tags: ["Zellstoff", "Bleichsequenz", "Modernisierung", "Qualitätssteigerung"]
    }
];

const Projektberichte: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
    const [searchParams, setSearchParams] = useSearchParams();

    const categories: string[] = ['Alle', ...new Set(mockProjects.map(p => p.category))];

    const filteredProjects: Project[] = selectedCategory === 'Alle'
        ? mockProjects
        : mockProjects.filter(p => p.category === selectedCategory);

    // URL-Parameter überwachen und entsprechendes Projekt laden
    useEffect(() => {
        const projectId = searchParams.get('project');
        if (projectId) {
            const project = mockProjects.find(p => p.id === parseInt(projectId));
            if (project) {
                setSelectedProject(project);
            }
        }
    }, [searchParams]);

    // URL aktualisieren wenn Projekt ausgewählt wird
    const handleProjectSelect = (project: Project) => {
        setSelectedProject(project);
        setSearchParams({ project: project.id.toString() });
    };

    // Zurück zur Übersicht
    const handleBackToOverview = () => {
        setSelectedProject(null);
        setSearchParams({});
    };

    const formatDate = (dateString: string): string => {
        return new Date(dateString).toLocaleDateString('de-DE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (selectedProject) {
        return (
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <header className="bg-white shadow-sm border-b">
                    <div className="max-w-4xl mx-auto px-6 py-4">
                        <button
                            onClick={handleBackToOverview}
                            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Zurück zur Übersicht
                        </button>
                        <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                            {selectedProject.title}
                        </h1>
                        <div className="flex items-center text-gray-500 mt-3 space-x-4">
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                {formatDate(selectedProject.date)}
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                {selectedProject.readTime}
                            </div>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                {selectedProject.category}
                            </span>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="max-w-4xl mx-auto px-6 py-8">
                    {/* Hero Image */}
                    <div className="mb-8">
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-64 object-cover rounded-lg shadow-sm"
                        />
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-8">
                        <div className="prose prose-lg max-w-none">
                            {selectedProject.content.sections.map((section: ProjectSection, index: number) => (
                                <div key={index} className="mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                                        {section.title}
                                    </h2>
                                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                        {section.content}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tags */}
                        <div className="mt-8 pt-6 border-t">
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tags.map((tag: string, index: number) => (
                                    <span
                                        key={index}
                                        className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                    >
                                        <Tag className="w-3 h-3 mr-1" />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navigation zu anderen Projekten */}
                    <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Weitere Projekte</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {mockProjects
                                .filter(p => p.id !== selectedProject.id)
                                .slice(0, 4)
                                .map((project) => (
                                    <div
                                        key={project.id}
                                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                                        onClick={() => handleProjectSelect(project)}
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-12 h-12 object-cover rounded"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate">
                                                {project.title}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {project.category}
                                            </p>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-gray-400" />
                                    </div>
                                ))}
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Projektberichte
                    </h1>
                    <p className="text-xl text-gray-600">
                        Technische Lösungen und Innovationen aus der Praxis
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">
                {/* Category Filter */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category: string) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    selectedCategory === category
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project: Project) => (
                        <article
                            key={project.id}
                            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200 overflow-hidden"
                            onClick={() => handleProjectSelect(project)}
                        >
                            {/* Project Image */}
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                        {project.category}
                                    </span>
                                    <ChevronRight className="w-5 h-5 text-gray-400" />
                                </div>

                                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                    {project.title}
                                </h2>

                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {project.excerpt}
                                </p>

                                <div className="flex items-center text-sm text-gray-500 space-x-4">
                                    <div className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-1" />
                                        {formatDate(project.date)}
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-1" />
                                        {project.readTime}
                                    </div>
                                </div>

                                {/* Tags Preview */}
                                <div className="flex flex-wrap gap-1 mt-3">
                                    {project.tags.slice(0, 2).map((tag: string, index: number) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 2 && (
                                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                            +{project.tags.length - 2}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Keine Projekte gefunden */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            Keine Projekte gefunden
                        </h3>
                        <p className="text-gray-600">
                            Für die ausgewählte Kategorie sind derzeit keine Projekte verfügbar.
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Projektberichte;