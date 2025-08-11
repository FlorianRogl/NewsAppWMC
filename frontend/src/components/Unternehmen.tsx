import {useState, useEffect, JSX} from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'

// Import images (these would be your actual imports)
const rogl = '/src/assets/rogl.png';
const fasching = '/src/assets/fasching.png';
const iso = '/src/assets/iso.png';
const iq = '/src/assets/iqZert.png';

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

interface Service {
    title: string;
    description: string;
    icon: JSX.Element;
    color: 'blue' | 'orange';
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

    // Services
    const services: Service[] = [
        {
            title: "Projektierung",
            description: "Konzeption und technische Ausarbeitung",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            ),
            color: 'blue'
        },
        {
            title: "Planung",
            description: "Detailplanung und Engineering",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
            color: 'orange'
        },
        {
            title: "Site Services",
            description: "Baustellenbetreuung vor Ort",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            color: 'blue'
        },
        {
            title: "Beratung",
            description: "Organisationsberatung & Optimierung",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            color: 'orange'
        }
    ];

    // Resources
    const resources: Resource[] = [
        {
            title: "Unternehmenspräsentation",
            type: "PDF",
            size: "2.4 MB",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            color: 'blue'
        },
        {
            title: "ISO 9001:2015 Zertifikat",
            type: "PDF",
            size: "1.1 MB",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            color: 'orange'
        },
        {
            title: "AGB Ingenieurbüros",
            type: "PDF",
            size: "485 KB",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            color: 'blue'
        }
    ];

    // Handle scroll for parallax and navbar
    useEffect(() => {
        const handleScroll = () => {
            // Check which sections are in view
            const sections = [
                { id: 'stats', element: document.getElementById('stats-section') },  // HINZUFÜGEN
                { id: 'about', element: document.getElementById('about-section') },
                { id: 'projects', element: document.getElementById('projects-section') },
                { id: 'team', element: document.getElementById('team-section') },
                { id: 'services', element: document.getElementById('services-section') },
                { id: 'fitimjob', element: document.getElementById('fitimjob-section') },
                { id: 'certification', element: document.getElementById('certification-section') },
                { id: 'resources', element: document.getElementById('resources-section') }
            ];

            const newVisibleSections = new Set(visibleSections);

            sections.forEach(({ id, element }) => {
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
        setCurrentProjectIndex((prev) => (prev + 3) % projects.length);
    };

    const prevProject = () => {
        setCurrentProjectIndex((prev) => (prev - 3 + projects.length) % projects.length);
    };

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            {/* Hero Section with Parallax */}
            <section
                className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(30, 55, 103, 0.7), rgba(30, 55, 103, 0.7)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10"></div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-light text-white mb-6 animate-fade-in-up">
                        Engineering Excellence.
                        <span className="block font-semibold text-[#d97539] mt-2">Since 1999.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                        Ihr Partner für komplexe Industrieprojekte in Papier, Zellstoff, Pharma und Chemie
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
                        <button
                            onClick={() => navigate('/leistungen')}
                            className="px-8 py-4 bg-[#d97539] text-white rounded-full hover:bg-[#c56830] transform hover:scale-105 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
                        >
                            Unsere Expertise
                        </button>
                        <button
                            onClick={() => navigate('/projektberichte')}
                            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-[#1e3767] transition-all duration-300 font-medium text-lg"
                        >
                            Projekte ansehen
                        </button>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Stats Section */}
            <section id="stats-section" className="py-20 bg-gradient-to-r from-[#1e3767] to-[#2a4a7f] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-pattern"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className={`text-center ${visibleSections.has('stats') ? 'animate-zoom-in opacity-100' : 'opacity-0'}`}>
                            <div className="text-5xl md:text-6xl font-light text-white mb-2">25+</div>
                            <div className="text-sm uppercase tracking-wider text-gray-300">Jahre Erfahrung</div>
                        </div>
                        <div className={`text-center ${visibleSections.has('stats') ? 'animate-zoom-in opacity-100' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
                            <div className="text-5xl md:text-6xl font-light text-white mb-2">35</div>
                            <div className="text-sm uppercase tracking-wider text-gray-300">Experten</div>
                        </div>
                        <div className={`text-center ${visibleSections.has('stats') ? 'animate-zoom-in opacity-100' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
                            <div className="text-5xl md:text-6xl font-light text-white mb-2">500+</div>
                            <div className="text-sm uppercase tracking-wider text-gray-300">Projekte</div>
                        </div>
                        <div className={`text-center ${visibleSections.has('stats') ? 'animate-zoom-in opacity-100' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
                            <div className="text-5xl md:text-6xl font-light text-white mb-2">ISO</div>
                            <div className="text-sm uppercase tracking-wider text-gray-300">Zertifiziert</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about-section" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className={`animate-fade-in-right ${visibleSections.has('about') ? 'opacity-100' : 'opacity-0'}`}>
                            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                                Kompetenz trifft{' '}
                                <span className="text-[#1e3767] font-semibold">
                                    Innovation
                                </span>
                            </h2>
                            <div className="w-20 h-1 bg-[#d97539] mb-8"></div>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Seit 1999 steht PROMAX für exzellentes Projektmanagement im Industrieanlagenbau.
                                Mit unserem 35-köpfigen Expertenteam realisieren wir komplexe Projekte in den
                                Bereichen Papier, Zellstoff, Pharma und Chemie.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Unser ganzheitlicher Ansatz umfasst Projektierung, Planung, Site Services und
                                Organisationsberatung – alles aus einer Hand, mit höchster Qualität und Zuverlässigkeit.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-[#d97539] rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">International tätig</h4>
                                        <p className="text-sm text-gray-600">Projekte weltweit</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-[#d97539] rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">ISO 9001:2015</h4>
                                        <p className="text-sm text-gray-600">Zertifizierte Qualität</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`relative animate-fade-in-left ${visibleSections.has('about') ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#1e3767] to-[#d97539] rounded-lg opacity-10 blur-lg"></div>
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="PROMAX Office"
                                className="relative rounded-lg shadow-2xl w-full h-[500px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Carousel Section */}
            <section id="projects-section" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                            Unsere <span className="text-[#1e3767] font-semibold">Referenzprojekte</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Einblicke in erfolgreich realisierte Industrieprojekte
                        </p>
                    </div>

                    <div className="relative">
                        {/* Navigation Buttons */}
                        <button
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-[#1e3767] hover:bg-[#1e3767] hover:text-white"
                            onClick={prevProject}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-[#1e3767] hover:bg-[#1e3767] hover:text-white"
                            onClick={nextProject}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Projects Grid - Only 3 visible */}
                        <div className="grid lg:grid-cols-3 gap-8 px-16">
                            {projects.slice(currentProjectIndex, currentProjectIndex + 3).map((project, index) => (
                                <div
                                    key={project.id}
                                    className={`group cursor-pointer transform hover:-translate-y-2 transition-all duration-300 ${
                                        visibleSections.has('projects') ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                                    }`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    onClick={() => navigate(`/projektberichte?project=${project.id}`)}
                                >
                                    {/* Rest bleibt gleich */}
                                    <div className="relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#d97539] text-white text-xs rounded-full">
                            {project.category}
                        </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#1e3767] transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4 line-clamp-2">
                                                {project.excerpt}
                                            </p>
                                            <div className="flex items-center text-[#1e3767] font-medium">
                                                <span>Mehr erfahren</span>
                                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <button
                            onClick={() => navigate('/projektberichte')}
                            className="px-8 py-3 bg-[#1e3767] text-white rounded-full hover:bg-[#2a4a7f] transform hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                        >
                            Alle Projekte ansehen
                        </button>
                    </div>
                </div>
            </section>


            {/* Team Section */}
            <section id="team-section" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                            Ihre{' '}
                            <span className="text-[#1e3767] font-semibold">
                                Ansprechpartner
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Erfahrene Experten für Ihre Projekte
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <div
                                key={member.name}
                                className={`bg-white rounded-lg p-8 border border-transparent hover:border-[#1e3767] hover:shadow-2xl transition-all duration-300 ${
                                    visibleSections.has('team') ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                                }`}
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className="text-center">
                                    <div className="w-48 h-60 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-100">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                                    <p className="text-[#d97539] font-medium mb-4">{member.role}</p>
                                    <p className="text-gray-600 mb-2">{member.description}</p>
                                    <p className="text-sm text-gray-500 mb-6">{member.email}</p>

                                    <div className="flex justify-center space-x-4">
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="text-gray-400 hover:text-[#1e3767] transition-colors"
                                        >
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                            </svg>
                                        </a>
                                        {member.linkedin && (
                                            <a
                                                href={member.linkedin}
                                                className="text-gray-400 hover:text-[#1e3767] transition-colors"
                                            >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
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
            <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                            Unsere{' '}
                            <span className="text-[#1e3767] font-semibold">
                                Leistungen
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Ganzheitliche Lösungen für Ihre Industrieprojekte
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={service.title}
                                className="text-center group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={`w-20 h-20 mx-auto mb-4 ${
                                    service.color === 'blue'
                                        ? 'bg-gradient-to-br from-[#1e3767] to-[#2a4a7f]'
                                        : 'bg-gradient-to-br from-[#d97539] to-[#e89050]'
                                } rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fit im Job Section */}
            <section id="fitimjob" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#d97539] to-[#1e3767] rounded-lg opacity-10 blur-lg"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Fit im Job"
                                    className="relative rounded-lg shadow-2xl w-full h-[400px] object-cover"
                                />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                                Fit im{' '}
                                <span className="text-[#1e3767] font-semibold">
                                    Job
                                </span>
                            </h2>
                            <div className="w-20 h-1 bg-[#d97539] mb-8"></div>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Die Gesundheit und das Wohlbefinden unserer Mitarbeiter stehen bei PROMAX im Mittelpunkt.
                                Durch gezielte Maßnahmen zur Gesundheitsförderung schaffen wir ein Arbeitsumfeld, das
                                produktiv, gesund und motivierend ist.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <div className="w-12 h-12 bg-[#d97539]/10 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">🍎</span>
                                    </div>
                                    <span className="text-gray-700 font-medium">Täglich frischer Obstteller</span>
                                </div>
                                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <div className="w-12 h-12 bg-[#d97539]/10 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">🍽️</span>
                                    </div>
                                    <span className="text-gray-700 font-medium">Essensbons für warme Mittagessen</span>
                                </div>
                                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <div className="w-12 h-12 bg-[#d97539]/10 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">💪</span>
                                    </div>
                                    <span className="text-gray-700 font-medium">Kostenloser Fitnessraum</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => navigate('/FitImJob')}
                                    className="px-8 py-3 bg-[#d97539] text-white rounded-full hover:bg-[#c56830] transform hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                                >
                                    Mehr über unsere Benefits
                                </button>
                                <button
                                    onClick={() => navigate('/Karriere')}
                                    className="px-8 py-3 bg-transparent border-2 border-[#1e3767] text-[#1e3767] rounded-full hover:bg-[#1e3767] hover:text-white transition-all duration-300 font-medium"
                                >
                                    Jobs & Karriere
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certification Section */}
            <section id="certification" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                                Zertifizierte{' '}
                                <span className="text-[#1e3767] font-semibold">
                                    Qualität
                                </span>
                            </h2>
                            <div className="w-20 h-1 bg-[#d97539] mb-8"></div>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                PROMAX Project Management GesmbH ist nach ISO 9001:2015 zertifiziert und gewährleistet
                                damit höchste Qualitätsstandards in allen Bereichen unserer Dienstleistungen.
                            </p>

                            <div className="space-y-6">
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
                                    <div key={index} className="flex space-x-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h4>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 to-orange-400/5 rounded-2xl transform rotate-2"></div>
                            <div className="relative bg-white rounded-2xl shadow-xl p-8 space-y-6">
                                <div className="flex justify-center">
                                    <img
                                        src={iso}
                                        alt="Quality Austria ISO 9001:2015 Zertifizierung"
                                        className="h-24 w-auto object-contain"
                                    />
                                </div>

                                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

                                <div className="flex justify-center">
                                    <img
                                        src={iq}
                                        alt="IQNet Certified Management System"
                                        className="h-16 w-auto object-contain"
                                    />
                                </div>

                                <div className="text-center space-y-2 pt-4">
                                    <p className="text-sm font-medium text-slate-700">ISO 9001:2015</p>
                                    <p className="text-xs text-slate-500">Qualitätsmanagementsystem</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources/Downloads Section */}
            <section id="resources" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                            Resource{' '}
                            <span className="text-[#1e3767] font-semibold">
                                Center
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Wichtige Dokumente und Informationen zum Download
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {resources.map((resource, index) => (
                            <div
                                key={resource.title}
                                className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-8 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className={`w-16 h-16 ${
                                        resource.color === 'blue'
                                            ? 'bg-gradient-to-br from-[#1e3767] to-[#2a4a7f]'
                                            : 'bg-gradient-to-br from-[#d97539] to-[#e89050]'
                                    } rounded-lg flex items-center justify-center`}>
                                        {resource.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">{resource.title}</h3>
                                    <p className="text-gray-600 text-sm">{resource.type} • {resource.size}</p>
                                    <div className={`flex items-center ${
                                        resource.color === 'blue' ? 'text-[#1e3767]' : 'text-[#d97539]'
                                    } font-medium pt-2`}>
                                        <span>Download</span>
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8l-8 8-8-8" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-[#1e3767] to-[#2a4a7f] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-pattern"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                        Bereit für Ihr nächstes <span className="font-semibold">Projekt?</span>
                    </h2>
                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                        Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen.
                        Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate('/Kontakt')}
                            className="px-8 py-4 bg-[#d97539] text-white rounded-full hover:bg-[#c56830] transform hover:scale-105 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
                        >
                            Projekt besprechen
                        </button>
                        <a
                            href="tel:+43316123456"
                            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-[#1e3767] transition-all duration-300 font-medium text-lg inline-flex items-center justify-center"
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
            `}</style>
        </div>
    );
};

export default Unternehmen;