import {useState, useEffect, JSX} from 'react';
import {useNavigate} from 'react-router-dom';
import '../index.css'
import rogl from '../assets/rogl.png';
import fasching from '../assets/fasching.png';
import iso from '../assets/iso.png';
import iq from '../assets/iqZert.png';
import {Helmet} from "@vuer-ai/react-helmet-async";

// Types
interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    excerpt: string;
    tags: string[];
}

interface TeamMember {
    name: string;
    role: string;
    description: string;
    email: string;
    image: string;
    linkedin?: string;
}

interface Resource {
    title: string;
    type: string;
    size: string;
    icon: JSX.Element;
    color: 'blue' | 'orange';
}

const Unternehmen = () => {
    const navigate = useNavigate();
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
    const [projectsPerPage, setProjectsPerPage] = useState(3);

    // Projects data
    const projects: Project[] = [
        {
            id: 1,
            title: "Säurefeste Auskleidungen",
            category: "Chemie",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            excerpt: "Entwicklung einer technisch optimalen Lösung für einen 80 m³ Pufferbehälter",
            tags: ["Säureschutz", "Betonbau", "Abriebschutz"]
        },
        {
            id: 2,
            title: "GMP-konforme Modernisierung",
            category: "Pharma",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            excerpt: "Komplette Modernisierung einer pharmazeutischen Produktionsanlage",
            tags: ["GMP", "Validierung", "Modernisierung"]
        },
        {
            id: 3,
            title: "Nachhaltige Energiegewinnung",
            category: "Energie",
            image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            excerpt: "Innovatives Energierückgewinnungssystem zur CO2-Reduktion",
            tags: ["Nachhaltigkeit", "CO2-Reduktion", "Energieeffizienz"]
        },
        {
            id: 4,
            title: "Zellstoffaufbereitung",
            category: "Papier",
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            excerpt: "Modernste Bleichsequenz-Technologie für höchste Produktqualität",
            tags: ["Zellstoff", "Bleichsequenz", "Qualität"]
        },
        {
            id: 5,
            title: "Chemiepark-Infrastruktur",
            category: "Chemie",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            excerpt: "Komplette Neugestaltung der Versorgungsinfrastruktur",
            tags: ["Infrastruktur", "Versorgung", "Chemiepark"]
        },
        {
            id: 6,
            title: "Biotechnologie-Anlage",
            category: "Pharma",
            image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            excerpt: "State-of-the-art Biotechnologie-Produktionsanlage",
            tags: ["Biotech", "Innovation", "GMP"]
        }
    ];

    // Team members
    const teamMembers: TeamMember[] = [
        {
            name: "Ing. Andreas Rogl",
            role: "Geschäftsführer",
            description: "Projektierung, Planung, Site Services",
            email: "andreas.rogl@promax.at",
            image: rogl,
            linkedin: "#"
        },
        {
            name: "Ing. Michael Fasching",
            role: "Projektleitung",
            description: "Projektmanagement",
            email: "michael.fasching@promax.at",
            image: fasching,
            linkedin: "#"
        }
    ];

    // Resources
    const resources: Resource[] = [
        {
            title: "Unternehmenspräsentation",
            type: "PDF",
            size: "2.4 MB",
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
            ),
            color: 'blue'
        },
        {
            title: "ISO 9001:2015 Zertifikat",
            type: "PDF",
            size: "1.1 MB",
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
            ),
            color: 'orange'
        },
        {
            title: "AGB Ingenieurbüros",
            type: "PDF",
            size: "485 KB",
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
            ),
            color: 'blue'
        }
    ];

    // Handle responsive projects per page
    useEffect(() => {
        const updateProjectsPerPage = () => {
            if (window.innerWidth < 640) {
                setProjectsPerPage(1); // Mobile: 1 project
            } else if (window.innerWidth < 1024) {
                setProjectsPerPage(2); // Tablet: 2 projects
            } else {
                setProjectsPerPage(3); // Desktop: 3 projects
            }
        };

        updateProjectsPerPage();
        window.addEventListener('resize', updateProjectsPerPage);
        return () => window.removeEventListener('resize', updateProjectsPerPage);
    }, []);

    // Handle scroll for parallax and navbar
    useEffect(() => {
        const handleScroll = () => {
            // Check which sections are in view
            const sections = [
                {id: 'stats', element: document.getElementById('stats-section')},
                {id: 'about', element: document.getElementById('about-section')},
                {id: 'projects', element: document.getElementById('projects-section')},
                {id: 'team', element: document.getElementById('team-section')},
                {id: 'services', element: document.getElementById('services-section')},
                {id: 'fitimjob', element: document.getElementById('fitimjob-section')},
                {id: 'certification', element: document.getElementById('certification-section')},
                {id: 'resources', element: document.getElementById('resources-section')}
            ];

            const newVisibleSections = new Set(visibleSections);

            sections.forEach(({id, element}) => {
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const isVisible = rect.top <= window.innerHeight * 0.7 && rect.bottom >= 0;

                    if (isVisible && !visibleSections.has(id)) {
                        newVisibleSections.add(id);
                    }
                }
            });

            if (newVisibleSections.size !== visibleSections.size) {
                setVisibleSections(newVisibleSections);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, [visibleSections]);

    const nextProject = () => {
        setCurrentProjectIndex((prev) => (prev + projectsPerPage) % projects.length);
    };

    const prevProject = () => {
        setCurrentProjectIndex((prev) => (prev - projectsPerPage + projects.length) % projects.length);
    };

    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Das Unternehmen - PROMAX Project Management",
                        "description": "PROMAX Project Management GesmbH wurde 1999 gegründet und beschäftigt derzeit ca. 35 Mitarbeiter. Spezialisiert auf Projektmanagement im Industrieanlagenbau.",
                        "url": "https://www.promax.at/Unternehmen",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "PROMAX Project Management GesmbH",
                            "foundingDate": "1999",
                            "employee": "35",
                            "description": "Dienstleistungsunternehmen im Industrieanlagenbau"
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://www.promax.at/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Das Unternehmen",
                                    "item": "https://www.promax.at/Unternehmen"
                                }
                            ]
                        }
                    })}
                </script>
                <title>Das Unternehmen - PROMAX Projektmanagement</title>
                <meta name="description" content="PROMAX bietet seit 1999 exzellentes Projektmanagement im Industrieanlagenbau. Erfahren Sie mehr über unsere Expertise in Papier, Zellstoff, Pharma und Chemie." />
                <link rel="canonical" href="https://www.promax.at/Unternehmen" />

                {/* Open Graph für Social Media */}
                <meta property="og:title" content="Das Unternehmen - PROMAX Projektmanagement" />
                <meta property="og:description" content="PROMAX bietet seit 1999 exzellentes Projektmanagement im Industrieanlagenbau." />
                <meta property="og:url" content="https://www.promax.at/Unternehmen" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.promax.at/og-image.jpg" />
                <meta property="og:locale" content="de_AT" />
                <meta property="og:site_name" content="PROMAX" />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Das Unternehmen - PROMAX" />
                <meta name="twitter:description" content="PROMAX bietet seit 1999 exzellentes Projektmanagement im Industrieanlagenbau." />
                <meta name="twitter:image" content="https://www.promax.at/og-image.jpg" />
            </Helmet>
            <div className="min-h-screen bg-white overflow-x-hidden">
                {/* Hero Section with Parallax */}
                <section
                    className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(rgba(30, 55, 103, 0.7), rgba(30, 55, 103, 0.7)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
                        backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
                    }}
                >
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10"></div>

                    <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-white mb-4 sm:mb-6 animate-fade-in-up">
                            Engineering Excellence.
                            <span className="block font-semibold text-[#d97539] mt-1 sm:mt-2">Since 1999.</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                            Ihr Partner für komplexe Industrieprojekte in Papier, Zellstoff, Pharma und Chemie
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
                            <button
                                onClick={() => navigate('/leistungen')}
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#d97539] text-white rounded-full hover:bg-[#c56830] transform hover:scale-105 transition-all duration-300 font-medium text-base sm:text-lg shadow-lg hover:shadow-xl"
                            >
                                Unsere Expertise
                            </button>
                            <button
                                onClick={() => navigate('/projektberichte')}
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-[#1e3767] transition-all duration-300 font-medium text-base sm:text-lg"
                            >
                                Projekte ansehen
                            </button>
                        </div>
                    </div>

                    {/* Scroll indicator - hidden on mobile */}
                    <div
                        className="hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                        </svg>
                    </div>
                </section>

                {/* Stats Section */}
                <section id="stats-section"
                         className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#1e3767] to-[#2a4a7f] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-pattern"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                            <div
                                className={`text-center ${visibleSections.has('stats') ? 'animate-zoom-in opacity-100' : 'opacity-0'}`}>
                                <div
                                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-2">25+
                                </div>
                                <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-300">Jahre
                                    Erfahrung
                                </div>
                            </div>
                            <div
                                className={`text-center ${visibleSections.has('stats') ? 'animate-zoom-in opacity-100' : 'opacity-0'}`}
                                style={{animationDelay: '200ms'}}>
                                <div
                                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-2">35
                                </div>
                                <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-300">Experten
                                </div>
                            </div>
                            <div
                                className={`text-center ${visibleSections.has('stats') ? 'animate-zoom-in opacity-100' : 'opacity-0'}`}
                                style={{animationDelay: '400ms'}}>
                                <div
                                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-2">500+
                                </div>
                                <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-300">Projekte
                                </div>
                            </div>
                            <div
                                className={`text-center ${visibleSections.has('stats') ? 'animate-zoom-in opacity-100' : 'opacity-0'}`}
                                style={{animationDelay: '600ms'}}>
                                <div
                                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-2">ISO
                                </div>
                                <div
                                    className="text-xs sm:text-sm uppercase tracking-wider text-gray-300">Zertifiziert
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about-section" className="py-16 sm:py-20 lg:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div
                                className={`animate-fade-in-right ${visibleSections.has('about') ? 'opacity-100' : 'opacity-0'}`}>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6">
                                    Kompetenz trifft{' '}
                                    <span className="text-[#1e3767] font-semibold">
                                    Innovation
                                </span>
                                </h2>
                                <div className="w-20 h-1 bg-[#d97539] mb-6 sm:mb-8"></div>
                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                                    Seit 1999 steht PROMAX für exzellentes Projektmanagement im Industrieanlagenbau.
                                    Mit unserem 35-köpfigen Expertenteam realisieren wir komplexe Projekte in den
                                    Bereichen Papier, Zellstoff, Pharma und Chemie.
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                                    Unser ganzheitlicher Ansatz umfasst Projektierung, Planung, Site Services und
                                    Organisationsberatung – alles aus einer Hand, mit höchster Qualität und
                                    Zuverlässigkeit.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-[#d97539] rounded-full mt-2"></div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">International
                                                tätig</h4>
                                            <p className="text-xs sm:text-sm text-gray-600">Projekte weltweit</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-[#d97539] rounded-full mt-2"></div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">ISO
                                                9001:2015</h4>
                                            <p className="text-xs sm:text-sm text-gray-600">Zertifizierte Qualität</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image - Hidden on mobile as requested */}
                            <div
                                className={`hidden lg:block relative animate-fade-in-left ${visibleSections.has('about') ? 'opacity-100' : 'opacity-0'}`}>
                                <div
                                    className="absolute -inset-4 bg-gradient-to-r from-[#1e3767] to-[#d97539] rounded-lg opacity-10 blur-lg"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="PROMAX Office"
                                    className="relative rounded-lg shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Carousel Section */}
                <section id="projects-section" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-3 sm:mb-4">
                                Unsere <span className="text-[#1e3767] font-semibold">Referenzprojekte</span>
                            </h2>
                            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                                Einblicke in erfolgreich realisierte Industrieprojekte
                            </p>
                        </div>

                        <div className="relative">
                            {/* Navigation Buttons - Mobile optimiert */}
                            <button
                                className="absolute left-1 sm:left-2 lg:left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-[#1e3767] hover:bg-[#1e3767] hover:text-white touch-manipulation"
                                onClick={prevProject}
                                aria-label="Vorheriges Projekt"
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M15 19l-7-7 7-7"/>
                                </svg>
                            </button>

                            <button
                                className="absolute right-1 sm:right-2 lg:right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-[#1e3767] hover:bg-[#1e3767] hover:text-white touch-manipulation"
                                onClick={nextProject}
                                aria-label="Nächstes Projekt"
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 5l7 7-7 7"/>
                                </svg>
                            </button>

                            {/* Projects Grid - Vollständig responsive */}
                            <div className="px-10 sm:px-12 lg:px-16">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                                    {projects.slice(currentProjectIndex, currentProjectIndex + projectsPerPage).map((project, index) => (
                                        <div
                                            key={project.id}
                                            className={`group cursor-pointer transform hover:-translate-y-2 transition-all duration-300 touch-manipulation ${
                                                visibleSections.has('projects') ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                                            }`}
                                            style={{animationDelay: `${index * 100}ms`}}
                                            onClick={() => navigate(`/projektberichte?project=${project.id}`)}
                                        >
                                            <div className="relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                {/* Projekt Bild */}
                                                <div className="relative h-36 sm:h-40 lg:h-48 overflow-hidden">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        loading="lazy"
                                                    />
                                                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                                        <span className="px-2 sm:px-3 py-1 bg-[#d97539] text-white text-xs sm:text-sm rounded-full font-medium">
                                            {project.category}
                                        </span>
                                                    </div>
                                                </div>

                                                {/* Projekt Inhalt */}
                                                <div className="p-4 sm:p-5 lg:p-6">
                                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#1e3767] transition-colors leading-tight">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                                                        {project.excerpt}
                                                    </p>
                                                    <div className="flex items-center text-[#1e3767] font-medium text-sm sm:text-base">
                                                        <span>Mehr erfahren</span>
                                                        <svg
                                                            className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  strokeWidth={2} d="M9 5l7 7-7 7"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Pagination Dots für Mobile */}
                            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                                {Array.from({length: Math.ceil(projects.length / projectsPerPage)}).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentProjectIndex(index * projectsPerPage)}
                                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                                            Math.floor(currentProjectIndex / projectsPerPage) === index
                                                ? 'bg-[#1e3767] w-6 sm:w-8'
                                                : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                        aria-label={`Zu Seite ${index + 1} gehen`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Alle Projekte Button */}
                        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
                            <button
                                onClick={() => navigate('/Projektberichte')}
                                className="px-6 sm:px-8 py-3 bg-[#1e3767] text-white rounded-full hover:bg-[#2a4a7f] transform hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-sm sm:text-base touch-manipulation"
                            >
                                Alle Projekte ansehen
                            </button>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section id="team-section" className="py-16 sm:py-20 lg:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                                Ihre{' '}
                                <span className="text-[#1e3767] font-semibold">
                                Ansprechpartner
                            </span>
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                                Erfahrene Experten für Ihre Projekte
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={member.name}
                                    className={`bg-white rounded-lg p-6 sm:p-8 border border-transparent hover:border-[#1e3767] hover:shadow-2xl transition-all duration-300 ${
                                        visibleSections.has('team') ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                                    }`}
                                    style={{animationDelay: `${index * 200}ms`}}
                                >
                                    <div className="text-center">
                                        <div
                                            className="w-32 h-40 sm:w-48 sm:h-60 mx-auto mb-4 sm:mb-6 rounded-lg overflow-hidden bg-gray-100">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                                        <p className="text-[#d97539] font-medium mb-4">{member.role}</p>
                                        <p className="text-sm sm:text-base text-gray-600 mb-2">{member.description}</p>
                                        <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">{member.email}</p>

                                        <div className="flex justify-center space-x-4">
                                            <a
                                                href={`mailto:${member.email}`}
                                                className="text-gray-400 hover:text-[#1e3767] transition-colors"
                                            >
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor"
                                                     viewBox="0 0 24 24">
                                                    <path
                                                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                                </svg>
                                            </a>
                                            {member.linkedin && (
                                                <a
                                                    href={member.linkedin}
                                                    className="text-gray-400 hover:text-[#1e3767] transition-colors"
                                                >
                                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor"
                                                         viewBox="0 0 24 24">
                                                        <path
                                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-200 to-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                                Unsere{' '}
                                <span className="text-[#1e3767] font-semibold">
                                Leistungen
                            </span>
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                                Ganzheitliche Lösungen für Ihre Industrieprojekte
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
                            <div className="text-center group">
                                <div
                                    className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-br from-[#1e3767] to-[#2a4a7f] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Technische Planung &
                                    Engineering</h3>
                                <p className="text-sm sm:text-base text-gray-600">Umfassende technische Konzeption und
                                    detaillierte Ingenieursplanung für komplexe Industrieprojekte</p>
                            </div>

                            <div className="text-center group">
                                <div
                                    className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-br from-[#d97539] to-[#e89050] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Projektmanagement &
                                    Koordination</h3>
                                <p className="text-sm sm:text-base text-gray-600">Professionelle Projektsteuerung und
                                    Koordination aller Beteiligten für termingerechte Umsetzung</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fit im Job Section */}
                <section id="fitimjob" className="py-16 sm:py-20 lg:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Image - Hidden on mobile as requested */}
                            <div className="hidden lg:block order-2 lg:order-1">
                                <div className="relative">
                                    <div
                                        className="absolute -inset-4 bg-gradient-to-r from-[#d97539] to-[#1e3767] rounded-lg opacity-10 blur-lg"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Fit im Job"
                                        className="relative rounded-lg shadow-2xl w-full h-[400px] object-cover"
                                    />
                                </div>
                            </div>

                            <div className="order-1 lg:order-2">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6">
                                    Fit im{' '}
                                    <span className="text-[#1e3767] font-semibold">
                                    Job
                                </span>
                                </h2>
                                <div className="w-20 h-1 bg-[#d97539] mb-6 sm:mb-8"></div>
                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                                    Die Gesundheit und das Wohlbefinden unserer Mitarbeiter stehen bei PROMAX im
                                    Mittelpunkt.
                                    Durch gezielte Maßnahmen zur Gesundheitsförderung schaffen wir ein Arbeitsumfeld,
                                    das
                                    produktiv, gesund und motivierend ist.
                                </p>

                                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                    <div
                                        className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                        <div
                                            className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d97539]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl sm:text-2xl">🍎</span>
                                        </div>
                                        <span className="text-sm sm:text-base text-gray-700 font-medium">Täglich frischer Obstteller</span>
                                    </div>
                                    <div
                                        className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                        <div
                                            className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d97539]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl sm:text-2xl">🍽️</span>
                                        </div>
                                        <span className="text-sm sm:text-base text-gray-700 font-medium">Essensbons für warme Mittagessen</span>
                                    </div>
                                    <div
                                        className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                        <div
                                            className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d97539]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl sm:text-2xl">💪</span>
                                        </div>
                                        <span className="text-sm sm:text-base text-gray-700 font-medium">Kostenloser Fitnessraum</span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={() => navigate('/FitImJob')}
                                        className="px-6 sm:px-8 py-3 bg-[#d97539] text-white rounded-full hover:bg-[#c56830] transform hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-sm sm:text-base"
                                    >
                                        Mehr über unsere Benefits
                                    </button>
                                    <button
                                        onClick={() => navigate('/Karriere')}
                                        className="px-6 sm:px-8 py-3 bg-transparent border-2 border-[#1e3767] text-[#1e3767] rounded-full hover:bg-[#1e3767] hover:text-white transition-all duration-300 font-medium text-sm sm:text-base"
                                    >
                                        Jobs & Karriere
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Certification Section */}
                <section id="certification" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6">
                                    Zertifizierte{' '}
                                    <span className="text-[#1e3767] font-semibold">
                    Qualität
                </span>
                                </h2>
                                <div className="w-20 h-1 bg-[#d97539] mb-6 sm:mb-8"></div>
                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                                    PROMAX Project Management GesmbH ist nach ISO 9001:2015 zertifiziert und
                                    gewährleistet
                                    damit höchste Qualitätsstandards in allen Bereichen unserer Dienstleistungen.
                                </p>

                                <div className="space-y-4 sm:space-y-6">
                                    {[
                                        {
                                            title: "Qualitätsmanagementsystem",
                                            description: "Systematische Prozesse für konstante Qualität und kontinuierliche Verbesserung"
                                        },
                                        {
                                            title: "Kundenorientierung",
                                            description: "Fokus auf Kundenzufriedenheit und Erfüllung von Kundenanforderungen"
                                        },
                                        {
                                            title: "Prozessverbesserung",
                                            description: "Regelmäßige Bewertung und Optimierung aller Geschäftsprozesse"
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="flex space-x-3 sm:space-x-4">
                                            <div
                                                className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                <svg className="w-3 h-3 sm:w-5 sm:h-5 text-[#1e3767]"
                                                     fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd"
                                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-1 sm:mb-2">{item.title}</h4>
                                                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div
                                    className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 to-orange-400/5 rounded-2xl transform rotate-2"></div>
                                <div
                                    className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-4 sm:space-y-6">
                                    <div className="flex justify-center">
                                        <img
                                            src={iso}
                                            alt="Quality Austria ISO 9001:2015 Zertifizierung"
                                            className="h-20 sm:h-24 w-auto object-contain"
                                        />
                                    </div>

                                    <div
                                        className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

                                    <div className="flex justify-center">
                                        <img
                                            src={iq}
                                            alt="IQNet Certified Management System"
                                            className="h-12 sm:h-16 w-auto object-contain"
                                        />
                                    </div>

                                    <div className="text-center space-y-2 pt-2 sm:pt-4">
                                        <p className="text-xs sm:text-sm font-medium text-slate-700">ISO 9001:2015</p>
                                        <p className="text-xs text-slate-500">Qualitätsmanagementsystem</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Resources/Downloads Section */}
                <section id="resources" className="py-16 sm:py-20 lg:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                                Resource{' '}
                                <span className="text-[#1e3767] font-semibold">
                                Center
                            </span>
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                                Wichtige Dokumente und Informationen zum Download
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {resources.map((resource, index) => (
                                <div
                                    key={resource.title}
                                    className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 sm:p-8 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                                    style={{animationDelay: `${index * 100}ms`}}
                                >
                                    <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                                        <div className={`w-12 h-12 sm:w-16 sm:h-16 ${
                                            resource.color === 'blue'
                                                ? 'bg-gradient-to-br from-[#1e3767] to-[#2a4a7f]'
                                                : 'bg-gradient-to-br from-[#d97539] to-[#e89050]'
                                        } rounded-lg flex items-center justify-center`}>
                                            {resource.icon}
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{resource.title}</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm">{resource.type} • {resource.size}</p>
                                        <div className={`flex items-center ${
                                            resource.color === 'blue' ? 'text-[#1e3767]' : 'text-[#d97539]'
                                        } font-medium pt-2 text-sm sm:text-base`}>
                                            <span>Download</span>
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M12 4v16m8-8l-8 8-8-8"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section
                    className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#1e3767] to-[#2a4a7f] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-pattern"></div>
                    </div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6">
                            Bereit für Ihr nächstes <span className="font-semibold">Projekt?</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-10 max-w-2xl mx-auto">
                            Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen.
                            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => navigate('/Kontakt')}
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#d97539] text-white rounded-full hover:bg-[#c56830] transform hover:scale-105 transition-all duration-300 font-medium text-base sm:text-lg shadow-lg hover:shadow-xl"
                            >
                                Projekt besprechen
                            </button>
                            <a
                                href="tel:+43316123456"
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-[#1e3767] transition-all duration-300 font-medium text-base sm:text-lg inline-flex items-center justify-center"
                            >
                                +43 (0) 316 241 393
                            </a>
                        </div>
                    </div>
                </section>

                {/* Add required styles */}
                <style>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fade-in-right {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes fade-in-left {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes zoom-in {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
                
                .animate-fade-in-right {
                    animation: fade-in-right 0.8s ease-out forwards;
                }
                
                .animate-fade-in-left {
                    animation: fade-in-left 0.8s ease-out forwards;
                }
                
                .animate-zoom-in {
                    animation: zoom-in 0.6s ease-out forwards;
                }
                
                .animation-delay-200 {
                    animation-delay: 200ms;
                }
                
                .animation-delay-400 {
                    animation-delay: 400ms;
                }
                
                .animation-delay-600 {
                    animation-delay: 600ms;
                }
                
                .bg-pattern {
                    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                }
                
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                /* Mobile touch optimizations */
                @media (max-width: 640px) {
                    .hover\\:scale-105:hover {
                        transform: none;
                    }
                    
                    .hover\\:-translate-y-1:hover {
                        transform: none;
                    }
                    
                    .hover\\:-translate-y-2:hover {
                        transform: none;
                    }
                }
                
                /* Improve text legibility on mobile */
                @media (max-width: 640px) {
                    body {
                        -webkit-text-size-adjust: 100%;
                    }
                }
            `}</style>
            </div>
        </>
    );
};

export default Unternehmen;