import { useState, useEffect } from 'react';

const Unternehmen = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        {
            id: 1,
            title: "Chemie Projekte",
            description: "Innovative und sichere Lösungen für komplexe chemische Prozesse mit höchsten Sicherheitsstandards",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Chemie"
        },
        {
            id: 2,
            title: "Pharma Projekte",
            description: "GMP-konforme Anlagen für die Pharmaindustrie mit präziser Planung und fachgerechter Umsetzung",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Pharma"
        },
        {
            id: 3,
            title: "Energie & Umwelt",
            description: "Nachhaltige Lösungen für moderne Energie- und Umwelttechnik mit Fokus auf Effizienz",
            image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Energie"
        },
        {
            id: 4,
            title: "Papier & Zellstoff",
            description: "Spezialisierte Anlagenlösungen für die Papier- und Zellstoffindustrie mit jahrzehntelanger Erfahrung",
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Papier"
        }
    ];

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

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-100/50"></div>
                <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
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
                                <div className="text-center">
                                    <div className="text-3xl font-light text-slate-900 mb-1">25+</div>
                                    <div className="text-sm text-slate-500 uppercase tracking-wider">Jahre Erfahrung</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-light text-slate-900 mb-1">35</div>
                                    <div className="text-sm text-slate-500 uppercase tracking-wider">Mitarbeiter</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-light text-blue-600 mb-1">ISO</div>
                                    <div className="text-sm text-slate-500 uppercase tracking-wider">9001:2015</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-orange-400/10 rounded-3xl transform rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="Industrieanlage"
                                className="relative rounded-3xl shadow-2xl w-full h-80 lg:h-96 object-cover"
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
                                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-orange-400"></div>
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
                            <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 to-orange-400/5 rounded-2xl transform -rotate-2"></div>
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="PROMAX Bürogebäude"
                                className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="order-2 lg:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Team bei der Arbeit"
                                className="rounded-2xl shadow-xl w-full h-80 lg:h-96 object-cover"
                            />
                        </div>

                        <div className="order-1 lg:order-2 space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl lg:text-4xl font-light text-slate-900">
                                    Unser Leitbild
                                </h2>
                                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-orange-400"></div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <h3 className="text-lg font-medium text-slate-900 mb-3">
                                        Teamleistung & Qualifikation
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Als Dienstleister ist das Ergebnis unserer Arbeit immer auch eine Teamleistung, deren
                                        Schlüsselfaktoren Qualifikation, Engagement, Kreativität, Verantwortungsbewusstsein,
                                        Flexibilität und Zielorientierung sind.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <h3 className="text-lg font-medium text-slate-900 mb-3">
                                        Arbeitsumfeld & Entwicklung
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Es freut uns ein Arbeitsumfeld geschaffen zu haben, das einen konstruktiven Teamgeist
                                        ermöglicht, in dem sich Mitarbeiter weiterentwickeln und so zur Entwicklung des
                                        Unternehmens beitragen.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <h3 className="text-lg font-medium text-slate-900 mb-3">
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
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/10 to-blue-500/10 rounded-2xl transform rotate-2"></div>
                            <img
                                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Gesundheit am Arbeitsplatz"
                                className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
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
                                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-orange-400"></div>
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                Die Gesundheit und das Wohlbefinden unserer Mitarbeiter stehen bei PROMAX im Mittelpunkt.
                                Durch gezielte Maßnahmen zur Gesundheitsförderung schaffen wir ein Arbeitsumfeld, das nicht
                                nur produktiv, sondern auch gesund und motivierend ist.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg">
                                    <div className="text-2xl">🍎</div>
                                    <span className="text-slate-700">Täglich frischer Obstteller für alle Mitarbeiter</span>
                                </div>
                                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg">
                                    <div className="text-2xl">🍽️</div>
                                    <span className="text-slate-700">Tägliche Essensbons für warme Mittagessen</span>
                                </div>
                                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg">
                                    <div className="text-2xl">💪</div>
                                    <span className="text-slate-700">Kostenloser Fitnessraum am Standort Raaba-Grambach</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                    Mehr über Fit im Job
                                </button>
                                <button className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium">
                                    Jobs & Karriere
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Carousel */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-4">
                            Projektberichte
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Entdecken Sie unsere Referenzprojekte aus verschiedenen Industriebereichen
                        </p>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-orange-400 mx-auto mt-6"></div>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden rounded-2xl">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {projects.map((project) => (
                                    <div key={project.id} className="w-full flex-shrink-0">
                                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mx-2">
                                            <div className="relative h-64 lg:h-80">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                                <div className="absolute top-4 left-4">
                                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 rounded-full text-sm font-medium">
                                                        {project.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-8">
                                                <h3 className="text-2xl font-light text-slate-900 mb-4">
                                                    {project.title}
                                                </h3>
                                                <p className="text-slate-600 leading-relaxed mb-6">
                                                    {project.description}
                                                </p>
                                                <button className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                                                    Projekte ansehen
                                                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <div className="flex justify-center space-x-2 mt-8">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${
                                        index === currentSlide
                                            ? 'bg-blue-600'
                                            : 'bg-slate-300 hover:bg-slate-400'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-4">
                            Ansprechpartner
                        </h2>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-orange-400 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-slate-50 rounded-2xl p-8">
                            <div className="flex flex-col items-center text-center space-y-6">
                                <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                                        alt="Geschäftsführer"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-light text-slate-900">Geschäftsführung</h3>
                                    <p className="text-sm text-blue-600 uppercase tracking-wider font-medium">
                                        Gesamtleitung & Strategie
                                    </p>
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    Verantwortlich für die strategische Ausrichtung und Gesamtleitung des Unternehmens
                                    mit über 25 Jahren Erfahrung im Industrieanlagenbau.
                                </p>
                                <div className="space-y-2 text-sm text-slate-500">
                                    <div className="flex items-center justify-center space-x-2">
                                        <span>📧</span>
                                        <span>office@promax.at</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2">
                                        <span>📞</span>
                                        <span>+43 316 241393</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-8">
                            <div className="flex flex-col items-center text-center space-y-6">
                                <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                                        alt="Projektleitung"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-light text-slate-900">Projektleitung</h3>
                                    <p className="text-sm text-blue-600 uppercase tracking-wider font-medium">
                                        Projekt Management & Koordination
                                    </p>
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    Koordination und Leitung komplexer Industrieprojekte in den Bereichen Pharma,
                                    Chemie und Energie- & Umwelttechnik.
                                </p>
                                <div className="space-y-2 text-sm text-slate-500">
                                    <div className="flex items-center justify-center space-x-2">
                                        <span>📧</span>
                                        <span>office@promax.at</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2">
                                        <span>📞</span>
                                        <span>+43 316 241393</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ISO Certification */}
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
                            <img
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="ISO Zertifizierung"
                                className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Downloads */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-4">
                            Downloads
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Laden Sie unsere wichtigsten Unternehmensunterlagen und Zertifikate herunter
                        </p>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-orange-400 mx-auto mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-200">
                            <div className="text-center space-y-6">
                                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                    <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium text-slate-900">
                                    Unternehmens-Präsentation
                                </h3>
                                <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium group-hover:shadow-lg">
                                    PDF herunterladen
                                </button>
                            </div>
                        </div>

                        <div className="group bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-200">
                            <div className="text-center space-y-6">
                                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                    <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium text-slate-900">
                                    AGB Ingenieurbüros
                                </h3>
                                <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium group-hover:shadow-lg">
                                    PDF herunterladen
                                </button>
                            </div>
                        </div>

                        <div className="group bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-200">
                            <div className="text-center space-y-6">
                                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                    <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium text-slate-900">
                                    Leistungsübersicht
                                </h3>
                                <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium group-hover:shadow-lg">
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