import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import rogl from '../assets/rogl.png'
import fasching from '../assets/fasching.png'
import pic1 from '../assets/Fotolia_59885870_M.jpg'
import iso from '../assets/iso.png'
import iq from '../assets/iqZert.png'
import '../index.css';

// Import der Project Interface aus Projektberichte
interface ProjectSection {
    title: string;
    content: string;
}

interface ProjectContent {
    sections: ProjectSection[];
}

interface Project {
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

// Mock-Daten (später aus einem gemeinsamen Service holen)
const mockProjects: Project[] = [
    {
        id: 1,
        title: "Säurefeste Auskleidungen mit zusätzlichen Abriebfestigkeitseigenschaften",
        category: "Chemische Industrie",
        date: "2024-03-15",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        excerpt: "Entwicklung einer technisch und wirtschaftlich optimalen Lösung für einen 80 m³ Pufferbehälter mit chemisch aggressiven Abwässern bei Temperaturen bis 85°C.",
        content: {
            sections: [
                {
                    title: "1. Aufgabenstellung",
                    content: "In einem Pufferbehälter werden chemische Abwässer gesammelt..."
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
                    title: "Projektübersicht",
                    content: "Modernisierung einer bestehenden Pharmanlage..."
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
                    title: "Energiekonzept",
                    content: "Entwicklung eines nachhaltigen Energiekonzepts..."
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
                    title: "Technologie",
                    content: "Implementierung modernster Bleichsequenz-Technologie..."
                }
            ]
        },
        tags: ["Zellstoff", "Bleichsequenz", "Modernisierung", "Qualitätssteigerung"]
    }
];

const Unternehmen = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    // Verwende echte Projekte statt Mock-Daten
    const projects = mockProjects;

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

    const handleProjectClick = (projectId: number) => {
        navigate(`/projektberichte?project=${projectId}`);
    };

    return (
        <div className="min-h-screen bg-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-50 to-blue-50/30">
                <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-4xl lg:text-6xl font-light text-slate-900 leading-tight">
                                    Know-How und
                                    <span className="block font-normal text-blue-600">Leidenschaft</span>
                                    für Ihr Projekt
                                </h1>
                                <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                                    PROMAX Project Management GesmbH - Ihr verlässlicher Partner im Industrieanlagenbau seit 1999
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-8 pt-8">
                                <div className="text-center group">
                                    <div className="text-3xl font-light text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">25+</div>
                                    <div className="text-sm text-slate-500 uppercase tracking-wider">Jahre Erfahrung</div>
                                </div>
                                <div className="text-center group">
                                    <div className="text-3xl font-light text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">35</div>
                                    <div className="text-sm text-slate-500 uppercase tracking-wider">Mitarbeiter</div>
                                </div>
                                <div className="text-center group">

                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-orange-400/10 rounded-lg transform rotate-2"></div>
                            <img
                                src={pic1}
                                alt="Industrieanlage"
                                className="relative rounded-lg shadow-2xl w-full h-80 lg:h-96 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <h2 className="text-3xl lg:text-4xl font-light text-slate-900">
                                    Das Unternehmen
                                </h2>
                                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-orange-400 rounded-full"></div>
                            </div>

                            <div className="space-y-6 text-slate-600 leading-relaxed">
                                <p className="text-lg">
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
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 to-orange-400/5 rounded-lg transform -rotate-1"></div>
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="PROMAX Bürogebäude"
                                className="relative rounded-lg shadow-xl w-full h-80 object-cover hover:shadow-2xl transition-shadow duration-300"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="order-2 lg:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Team bei der Arbeit"
                                className="rounded-lg shadow-xl w-full h-80 lg:h-96 object-cover hover:shadow-2xl transition-shadow duration-300"
                            />
                        </div>

                        <div className="order-1 lg:order-2 space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl lg:text-4xl font-light text-slate-900">
                                    Unser Leitbild
                                </h2>
                                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-orange-400 rounded-full"></div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-500 hover:bg-white hover:shadow-md transition-all duration-300 group">
                                    <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                        Teamleistung & Qualifikation
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Als Dienstleister ist das Ergebnis unserer Arbeit immer auch eine Teamleistung, deren
                                        Schlüsselfaktoren Qualifikation, Engagement, Kreativität, Verantwortungsbewusstsein,
                                        Flexibilität und Zielorientierung sind.
                                    </p>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-500 hover:bg-white hover:shadow-md transition-all duration-300 group">
                                    <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                                        Arbeitsumfeld & Entwicklung
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Es freut uns ein Arbeitsumfeld geschaffen zu haben, das einen konstruktiven Teamgeist
                                        ermöglicht, in dem sich Mitarbeiter weiterentwickeln und so zur Entwicklung des
                                        Unternehmens beitragen.
                                    </p>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-500 hover:bg-white hover:shadow-md transition-all duration-300 group">
                                    <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                        Faire Bedingungen
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Wir bieten gute Dotierung, faire Vereinbarungen, interessante Aufgaben und vielfältige
                                        Entwicklungsmöglichkeiten in einem tollen Team.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fit im Job Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50/50 to-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/10 to-blue-500/10 rounded-lg transform rotate-1"></div>
                            <img
                                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Gesundheit am Arbeitsplatz"
                                className="relative rounded-lg shadow-xl w-full h-80 object-cover hover:shadow-2xl transition-shadow duration-300"
                            />
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl lg:text-4xl font-light text-slate-900">
                                    Fit im Job
                                </h2>
                                <h3 className="text-xl text-slate-600">
                                    Gesundheit und Wohlbefinden unserer Mitarbeiter
                                </h3>
                                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-orange-400 rounded-full"></div>
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                Die Gesundheit und das Wohlbefinden unserer Mitarbeiter stehen bei PROMAX im Mittelpunkt.
                                Durch gezielte Maßnahmen zur Gesundheitsförderung schaffen wir ein Arbeitsumfeld, das nicht
                                nur produktiv, sondern auch gesund und motivierend ist.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group">
                                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">🍎</div>
                                    <span className="text-slate-700">Täglich frischer Obstteller für alle Mitarbeiter</span>
                                </div>
                                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group">
                                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">🍽️</div>
                                    <span className="text-slate-700">Tägliche Essensbons für warme Mittagessen</span>
                                </div>
                                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group">
                                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">💪</div>
                                    <span className="text-slate-700">Kostenloser Fitnessraum am Standort Raaba-Grambach</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
                                    Mehr über Fit im Job
                                </button>
                                <button className="px-6 py-3 border-2 border-orange-400 text-orange-600 rounded-lg hover:bg-orange-400 hover:text-white transform hover:scale-105 transition-all duration-300 font-medium">
                                    Jobs & Karriere
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Carousel - Jetzt mit echten Projekten */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                            Projektberichte
                        </h2>
                        <p className="text-gray-600">
                            Unsere Referenzprojekte aus verschiedenen Bereichen
                        </p>
                    </div>

                    {/* Carousel */}
                    <div className="relative max-w-2xl mx-auto">
                        <div className="overflow-hidden rounded-xl">
                            <div
                                className="flex transition-transform duration-500"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {projects.map((project) => (
                                    <div key={project.id} className="w-full flex-shrink-0">
                                        <div
                                            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                                            onClick={() => handleProjectClick(project.id)}
                                        >
                                            {/* Image */}
                                            <div className="relative h-48">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="p-5">
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    {project.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-md transition-all"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-md transition-all"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Dots */}
                        <div className="flex justify-center space-x-2 mt-6">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        index === currentSlide
                                            ? 'bg-blue-600 w-6'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-4">
                            Ansprechpartner
                        </h2>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Andreas Rogl */}
                        <div className="group">
                            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex flex-col items-center text-center space-y-6">
                                    <div className="w-32 h-40 bg-gray-100">
                                        <img
                                            src={rogl}
                                            alt="Ing. Andreas Rogl - Geschäftsführer"
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-light text-slate-900">
                                            Ing. Andreas Rogl
                                        </h3>
                                        <div className="text-sm text-blue-600 uppercase tracking-wider font-medium">
                                            Geschäftsführer
                                        </div>
                                    </div>

                                    <p className="text-slate-600 leading-relaxed">
                                        Projektierung, Planung, Site Services
                                    </p>

                                    <div className="pt-4">
                                        <div className="flex items-center justify-center space-x-3 text-slate-600">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                            </svg>
                                            <span>andreas.rogl@promax.at</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Michael Fasching */}
                        <div className="group">
                            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex flex-col items-center text-center space-y-6">
                                    <div className="w-32 h-40 bg-gray-100">
                                        <img
                                            src={fasching}
                                            alt="Ing. Michael Fasching - Projektmanagement"
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-light text-slate-900">
                                            Ing. Michael Fasching
                                        </h3>
                                        <div className="text-sm text-blue-600 uppercase tracking-wider font-medium">
                                            Projektleitung
                                        </div>
                                    </div>

                                    <p className="text-slate-600 leading-relaxed">
                                        Projektmanagement
                                    </p>

                                    <div className="pt-4">
                                        <div className="flex items-center justify-center space-x-3 text-slate-600">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                            </svg>
                                            <span>michael.fasching@promax.at</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certification Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl lg:text-4xl font-light text-slate-900">
                                    Zertifizierung
                                </h2>
                                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-orange-400"></div>
                            </div>

                            <p className="text-lg text-slate-600 leading-relaxed">
                                PROMAX Project Management GesmbH ist nach ISO 9001:2015 zertifiziert und gewährleistet
                                damit höchste Qualitätsstandards in allen Bereichen unserer Dienstleistungen.
                            </p>

                            <div className="space-y-6">
                                <div className="flex space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-slate-900 mb-2">
                                            Qualitätsmanagementsystem
                                        </h4>
                                        <p className="text-slate-600">
                                            Systematische Prozesse für konstante Qualität und kontinuierliche Verbesserung
                                        </p>
                                    </div>
                                </div>

                                <div className="flex space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-slate-900 mb-2">
                                            Kundenorientierung
                                        </h4>
                                        <p className="text-slate-600">
                                            Fokus auf Kundenzufriedenheit und Erfüllung von Kundenanforderungen
                                        </p>
                                    </div>
                                </div>

                                <div className="flex space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-slate-900 mb-2">
                                            Prozessverbesserung
                                        </h4>
                                        <p className="text-slate-600">
                                            Regelmäßige Bewertung und Optimierung aller Geschäftsprozesse
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 to-orange-400/5 rounded-2xl transform rotate-2"></div>
                            <div className="relative bg-white rounded-2xl shadow-xl p-8 space-y-6">
                                {/* Quality Austria Logo - Main certification */}
                                <div className="flex justify-center">
                                    <img
                                        src={iso}
                                        alt="Quality Austria ISO 9001:2015 Zertifizierung"
                                        className="h-24 w-auto object-contain"
                                    />
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

                                {/* IQNet Logo - Partner certification */}
                                <div className="flex justify-center">
                                    <img
                                        src={iq}
                                        alt="IQNet Certified Management System"
                                        className="h-16 w-auto object-contain"
                                    />
                                </div>

                                {/* Certification details */}
                                <div className="text-center space-y-2 pt-4">
                                    <p className="text-sm font-medium text-slate-700">
                                        ISO 9001:2015
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        Qualitätsmanagementsystem
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Downloads Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-4">
                            Downloads
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Laden Sie unsere wichtigsten Unternehmensunterlagen und Zertifikate herunter
                        </p>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-orange-400 rounded-full mx-auto mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-200">
                            <div className="text-center space-y-6">
                                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                                    <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                                    Unternehmens-Präsentation
                                </h3>
                                <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
                                    PDF herunterladen
                                </button>
                            </div>
                        </div>

                        <div className="group bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-orange-200">
                            <div className="text-center space-y-6">
                                <div className="w-16 h-16 mx-auto bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                                    <svg className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-orange-600 transition-colors duration-300">
                                    AGB Ingenieurbüros
                                </h3>
                                <button className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
                                    PDF herunterladen
                                </button>
                            </div>
                        </div>

                        <div className="group bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-200">
                            <div className="text-center space-y-6">
                                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                                    <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                                    Leistungsübersicht
                                </h3>
                                <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
                                    PDF herunterladen
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Unternehmen;