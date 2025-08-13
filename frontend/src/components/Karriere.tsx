import { useEffect, useRef, useState, useCallback } from 'react';
import { MapPin, Clock, Users, ArrowRight, Calendar, Send, Upload, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import planungImage from '../assets/Fotolia Planung M.jpg';

// Interface für Job und Formular
interface Job {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    posted: string;
    description: string;
    teamSize: string;
    responsibilities: string[];
    requirements: string[];
    benefits: string[];
}

interface ApplicationForm {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    position: string;
    message: string;
    cv: File | null;
}

// Mock Job Data
const jobOpenings: Job[] = [
    {
        id: 1,
        title: "Senior Verfahrensingenieur",
        department: "Engineering",
        location: "Graz",
        type: "Vollzeit",
        experience: "5+ Jahre",
        posted: "vor 2 Tagen",
        description: "Entwicklung und Optimierung verfahrenstechnischer Prozesse für die chemische und pharmazeutische Industrie. Verantwortung für komplexe Anlagenprojekte von der Konzeption bis zur Inbetriebnahme.",
        teamSize: "8-12",
        responsibilities: [
            "Konzeptionierung und Auslegung verfahrenstechnischer Anlagen",
            "Durchführung von Prozesssimulationen und -optimierungen",
            "Projektleitung komplexer Anlagenprojekte",
            "Zusammenarbeit mit interdisziplinären Teams",
            "Kundenbetreuung und technische Präsentationen"
        ],
        requirements: [
            "Abgeschlossenes Studium der Verfahrenstechnik oder vergleichbar",
            "Mindestens 5 Jahre Berufserfahrung in der Anlagenplanung",
            "Erfahrung mit Prozesssimulation (ChemCAD, Aspen Plus)",
            "Sehr gute Deutsch- und Englischkenntnisse",
            "Reisebereitschaft für internationale Projekte"
        ],
        benefits: [
            "Überkollektivvertragliche Entlohnung",
            "Flexible Arbeitszeiten und Home-Office",
            "Internationale Projekttätigkeit",
            "Umfassende Weiterbildungsmöglichkeiten",
            "Betriebliche Gesundheitsvorsorge"
        ]
    },
    {
        id: 2,
        title: "CAD-Konstrukteur Rohrleitungstechnik",
        department: "Design",
        location: "Graz",
        type: "Vollzeit",
        experience: "3+ Jahre",
        posted: "vor 1 Woche",
        description: "3D-Konstruktion und Detailplanung von Rohrleitungssystemen für industrielle Anlagen. Schwerpunkt auf AutoCAD Plant 3D und PDMS für komplexe Anlagenprojekte.",
        teamSize: "6-10",
        responsibilities: [
            "3D-Konstruktion von Rohrleitungssystemen",
            "Erstellung von Isometrien und Stücklisten",
            "Kollisionsprüfung und Optimierung",
            "Zusammenarbeit mit Verfahrens- und Statik-Ingenieuren",
            "Qualitätssicherung und Dokumentation"
        ],
        requirements: [
            "Ausbildung als Maschinenbautechniker oder vergleichbar",
            "Fundierte Kenntnisse in AutoCAD Plant 3D oder PDMS",
            "Erfahrung in der Rohrleitungsplanung",
            "Kenntnisse in Normen und Standards (ASME, DIN)",
            "Teamorientierte Arbeitsweise"
        ],
        benefits: [
            "Moderne CAD-Arbeitsplätze",
            "Regelmäßige Software-Schulungen",
            "Abwechslungsreiche Projektarbeit",
            "Gute Work-Life-Balance",
            "Firmenparkplatz"
        ]
    },
    {
        id: 3,
        title: "Projektmanager Anlagenbau",
        department: "Projektmanagement",
        location: "Graz",
        type: "Vollzeit",
        experience: "7+ Jahre",
        posted: "vor 3 Tagen",
        description: "Gesamtverantwortung für Anlagenbauprojekte von der Akquisition bis zur Übergabe. Koordination aller Projektbeteiligten und Sicherstellung der termingerechten Projektumsetzung.",
        teamSize: "15-25",
        responsibilities: [
            "End-to-End Projektmanagement großer Anlagenprojekte",
            "Budgetverantwortung und Kostenkontrolle",
            "Koordination interner und externer Stakeholder",
            "Risikomanagement und Qualitätssicherung",
            "Kundenbetreuung auf Managementebene"
        ],
        requirements: [
            "Studium im technischen Bereich oder vergleichbare Qualifikation",
            "Mehrjährige Erfahrung im Projektmanagement",
            "PMP oder vergleichbare Zertifizierung von Vorteil",
            "Exzellente Kommunikations- und Führungsqualitäten",
            "Verhandlungssichere Englischkenntnisse"
        ],
        benefits: [
            "Hohe Eigenverantwortung und Gestaltungsspielraum",
            "Internationale Karrieremöglichkeiten",
            "Leistungsabhängige Vergütung",
            "Firmenhandy und Laptop",
            "Reisekostenerstattung"
        ]
    },
    {
        id: 4,
        title: "Mess- und Regelungstechniker",
        department: "Automatisierung",
        location: "Graz",
        type: "Vollzeit",
        experience: "4+ Jahre",
        posted: "vor 5 Tagen",
        description: "Planung und Programmierung von Automatisierungssystemen für industrielle Anlagen. Inbetriebnahme und Service von Mess-, Steuer- und Regelungstechnik.",
        teamSize: "5-8",
        responsibilities: [
            "Programmierung von SPS-Systemen (Siemens, ABB)",
            "Erstellung von Schalt- und Verrohrungsplänen",
            "Inbetriebnahme vor Ort beim Kunden",
            "Fehlerdiagnose und Störungsbehebung",
            "Dokumentation und Schulung der Anlagenbediener"
        ],
        requirements: [
            "Ausbildung als Automatisierungstechniker oder vergleichbar",
            "Erfahrung mit SPS-Systemen (Step 7, TIA Portal)",
            "Kenntnisse in Prozessleittechnik",
            "Bereitschaft zu Dienstreisen und Montagen",
            "Problemlösungskompetenz und selbstständiges Arbeiten"
        ],
        benefits: [
            "Abwechslungsreiche Tätigkeiten",
            "Moderne Arbeitsausrüstung",
            "Regelmäßige Herstellerschulungen",
            "Montage- und Reisezulagen",
            "Kollegiales Arbeitsklima"
        ]
    },
    {
        id: 5,
        title: "Junior Verfahrensingenieur",
        department: "Engineering",
        location: "Graz",
        type: "Vollzeit",
        experience: "0-2 Jahre",
        posted: "vor 1 Woche",
        description: "Einstiegsposition für Absolventen mit Interesse an verfahrenstechnischen Fragestellungen. Mitarbeit in spannenden Projekten mit umfassendem Mentoring-Programm.",
        teamSize: "8-12",
        responsibilities: [
            "Unterstützung bei Prozessberechnungen",
            "Erstellung technischer Dokumentationen",
            "Mitarbeit in Projektteams",
            "Durchführung von Literaturrecherchen",
            "Teilnahme an Kundenterminen"
        ],
        requirements: [
            "Abgeschlossenes Studium der Verfahrenstechnik, Maschinenbau oder ähnlich",
            "Grundkenntnisse in Prozesssimulation von Vorteil",
            "Gute analytische Fähigkeiten",
            "Motivation zur Einarbeitung in neue Themengebiete",
            "Gute Deutsch- und Englischkenntnisse"
        ],
        benefits: [
            "Strukturiertes Einarbeitungsprogramm",
            "Persönlicher Mentor",
            "Vielfältige Weiterbildungsmöglichkeiten",
            "Junges, dynamisches Team",
            "Gute Übernahmechancen"
        ]
    }
];

const getDepartmentColor = (department: string): string => {
    const colors: { [key: string]: string } = {
        'Engineering': '#1e3767',
        'Design': '#d97539',
        'Projektmanagement': '#1e3767',
        'Automatisierung': '#d97539',
        'Management': '#1e3767'
    };
    return colors[department] || '#1e3767';
};

const Karriere = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [formData, setFormData] = useState<ApplicationForm>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        message: '',
        cv: null
    });
    const [showForm, setShowForm] = useState<boolean>(false);
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

    // Refs
    const heroRef = useRef<HTMLElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    // Helper function for section refs
    const setSectionRef = (key: string) => (el: HTMLElement | null) => {
        sectionRefs.current[key] = el;
    };

    // SEO Meta Tags setzen
    // Intersection Observer für Scroll-Animationen
    useEffect(() => {
        // Title setzen
        document.title = 'Karriere bei PROMAX - Jobs im Industrieanlagenbau in Graz';

        // Meta Tags setzen/aktualisieren
        const setMetaTag = (name: string, content: string, property = false) => {
            const attribute = property ? 'property' : 'name';
            let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute(attribute, name);
                document.head.appendChild(meta);
            }
            meta.content = content;
        };

        // Basic Meta Tags
        setMetaTag('description', 'Karrieremöglichkeiten bei PROMAX in Graz. Offene Stellen für Verfahrensingenieure, CAD-Konstrukteure, Projektmanager und Automatisierungstechniker. Jetzt bewerben!');
        setMetaTag('keywords', 'Jobs Graz, Karriere Industrieanlagenbau, Verfahrensingenieur Jobs, CAD Konstrukteur, Projektmanager Anlagenbau, Automatisierungstechniker, PROMAX Karriere');
        setMetaTag('author', 'PROMAX Projektmanagement');
        setMetaTag('robots', 'index, follow');

        // Open Graph Tags
        setMetaTag('og:title', 'Karriere bei PROMAX - Jobs im Industrieanlagenbau', true);
        setMetaTag('og:description', 'Werden Sie Teil unseres innovativen Teams von über 100 Experten. Offene Stellen in Engineering, Design und Projektmanagement.', true);
        setMetaTag('og:url', 'https://www.promax.at/karriere', true);
        setMetaTag('og:type', 'website', true);
        setMetaTag('og:locale', 'de_AT', true);
        setMetaTag('og:site_name', 'PROMAX', true);

        // Twitter Cards
        setMetaTag('twitter:card', 'summary_large_image');
        setMetaTag('twitter:title', 'Karriere bei PROMAX - Jobs im Industrieanlagenbau');
        setMetaTag('twitter:description', 'Werden Sie Teil unseres innovativen Teams von über 100 Experten.');

        // Canonical Link
        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = 'https://www.promax.at/karriere';

    }, []);
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('data-section');
                    if (sectionId === 'hero') {
                        setIsVisible(true);
                    } else if (sectionId) {
                        setVisibleSections(prev => new Set(prev).add(sectionId));
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe hero
        if (heroRef.current) {
            heroRef.current.setAttribute('data-section', 'hero');
            observer.observe(heroRef.current);
        }

        // Observe other sections
        Object.entries(sectionRefs.current).forEach(([key, ref]) => {
            if (ref) {
                ref.setAttribute('data-section', key);
                observer.observe(ref);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    // Carousel scroll functions
    const scrollCarousel = useCallback((direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const scrollAmount = 350;
            const currentScroll = carouselRef.current.scrollLeft;
            const targetScroll = direction === 'left'
                ? currentScroll - scrollAmount
                : currentScroll + scrollAmount;

            carouselRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    }, []);

    // Check if carousel can scroll
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollability = useCallback(() => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    }, []);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('scroll', checkScrollability);
            checkScrollability();

            window.addEventListener('resize', checkScrollability);

            return () => {
                carousel.removeEventListener('scroll', checkScrollability);
                window.removeEventListener('resize', checkScrollability);
            };
        }
    }, [checkScrollability]);

    // Touch handling for mobile
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            scrollCarousel('right');
        }
        if (isRightSwipe) {
            scrollCarousel('left');
        }
    };

    // Split jobs into featured and carousel
    const featuredJobs = jobOpenings.slice(0, 3);
    const carouselJobs = jobOpenings.slice(3);

    const handleJobClick = (job: Job) => {
        setSelectedJob(job);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedJob(null);
        document.body.style.overflow = 'unset';
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({
                ...prev,
                cv: e.target.files![0]
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Vielen Dank für Ihre Bewerbung! Wir melden uns bald bei Ihnen.');
        setShowForm(false);
        document.body.style.overflow = 'unset';
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            position: '',
            message: '',
            cv: null
        });
    };

    const openApplicationForm = (position?: string) => {
        setSelectedJob(null);
        setShowForm(true);
        document.body.style.overflow = 'hidden';
        if (position) {
            setFormData(prev => ({
                ...prev,
                position
            }));
        }
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', color: '#1e3767' }}>
            {/* Hero Section */}
            <section ref={heroRef} className="max-w-6xl mx-auto px-6 py-20">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ backgroundColor: '#d1d8dc' }}>
                        <Sparkles size={16} style={{ color: '#1e3767' }} />
                        <span className="text-sm font-medium" style={{ color: '#1e3767' }}>Wir stellen ein</span>
                    </div>

                    <h1 className="text-7xl font-bold mb-8" style={{ color: '#1e3767' }}>
                        KARRIERE
                    </h1>

                    <p className="text-xl max-w-3xl leading-relaxed mb-12" style={{ color: '#1e3767' }}>
                        Werden Sie Teil eines innovativen Teams von über 100 Experten und arbeiten Sie an
                        wegweisenden Projekten in der Pharma-, Chemie- und Lebensmittelindustrie.
                    </p>
                </div>
            </section>

            {/* Values Section with Text and Image */}
            <section
                ref={setSectionRef('values')}
                className="max-w-6xl mx-auto px-6 py-20"
            >
                <div className={`transition-all duration-1000 ${visibleSections.has('values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Text Content */}
                        <div>
                            <h2 className="text-5xl font-bold mb-8" style={{ color: '#1e3767' }}>
                                Innovation trifft auf Tradition
                            </h2>

                            <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#1e3767' }}>
                                <p>
                                    Bei uns erleben Sie eine einzigartige Arbeitskultur, die <strong>technische Exzellenz</strong> mit
                                    menschlichen Werten verbindet. Seit über drei Jahrzehnten entwickeln wir wegweisende Lösungen
                                    für die komplexesten Herausforderungen der Industrie.
                                </p>

                                <p>
                                    Unser Team aus über 100 Spezialisten lebt von der perfekten Balance zwischen <strong>Innovation
                                    und Teamgeist</strong>. Wir investieren nicht nur in modernste Technologien, sondern vor allem
                                    in die Menschen, die diese zum Leben erwecken.
                                </p>

                                <p>
                                    Flexible Arbeitsmodelle, internationale Projekte und eine Kultur des kontinuierlichen Lernens
                                    schaffen ein Umfeld, in dem sich <strong>persönliche Ambitionen mit beruflichem Erfolg</strong>
                                    vereinen lassen.
                                </p>
                            </div>

                            <div className="mt-8 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1e3767' }}>
                                    <span className="text-white text-xl">💼</span>
                                </div>
                                <span className="text-lg font-medium" style={{ color: '#1e3767' }}>
                                        Work-Life-Balance ist bei uns kein Buzzword, sondern gelebte Realität
                                    </span>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <div className="w-full h-96 lg:h-[500px] rounded-2xl shadow-2xl overflow-hidden">
                                <img
                                    src={planungImage}
                                    alt="PROMAX Team bei der Projektplanung"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    width="600"
                                    height="500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jobs Section */}
            <section
                ref={setSectionRef('jobs')}
                className="max-w-6xl mx-auto px-6 py-20"
            >
                <div className={`transition-all duration-1000 ${visibleSections.has('jobs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-4xl font-bold mb-4" style={{ color: '#1e3767' }}>
                        Offene Stellen
                    </h2>
                    <p className="text-lg mb-16 max-w-2xl" style={{ color: '#1e3767' }}>
                        Finden Sie Ihre perfekte Position in unserem wachsenden Unternehmen
                    </p>

                    {/* Featured Jobs - First 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {featuredJobs.map((job, index) => (
                            <div
                                key={job.id}
                                className="bg-white border rounded-xl p-6 cursor-pointer hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                                style={{
                                    borderColor: '#d1d8dc',
                                    transitionDelay: `${index * 100}ms`
                                }}
                                onClick={() => handleJobClick(job)}
                            >
                                <div className="mb-4">
                                        <span
                                            className="px-3 py-1 rounded-lg text-sm font-medium text-white mb-3 inline-block"
                                            style={{ backgroundColor: getDepartmentColor(job.department) }}
                                        >
                                            {job.department}
                                        </span>

                                    <h3 className="text-xl font-bold mb-3" style={{ color: '#1e3767' }}>
                                        {job.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-4 mb-4 text-sm" style={{ color: '#1e3767' }}>
                                        <div className="flex items-center gap-1">
                                            <MapPin size={14} />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock size={14} />
                                            <span>{job.type}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users size={14} />
                                            <span>Team: {job.teamSize}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-sm leading-relaxed mb-6" style={{ color: '#1e3767' }}>
                                    {job.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="text-xs" style={{ color: '#1e3767' }}>
                                        <div className="mb-1">
                                            <span className="font-medium">Erfahrung: </span>
                                            <span>{job.experience}</span>
                                        </div>
                                        <div>
                                            <span className="font-medium">Veröffentlicht: </span>
                                            <span>{job.posted}</span>
                                        </div>
                                    </div>
                                    <ArrowRight size={16} style={{ color: '#1e3767' }} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Carousel for additional jobs */}
                    {carouselJobs.length > 0 && (
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-bold" style={{ color: '#1e3767' }}>Weitere Positionen</h3>
                                <div className="flex gap-2">
                                    <button
                                        className="w-10 h-10 rounded-lg border flex items-center justify-center transition-colors disabled:opacity-50"
                                        style={{
                                            borderColor: '#d1d8dc',
                                            backgroundColor: canScrollLeft ? '#1e3767' : '#d1d8dc',
                                            color: canScrollLeft ? 'white' : '#1e3767'
                                        }}
                                        onClick={() => scrollCarousel('left')}
                                        disabled={!canScrollLeft}
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        className="w-10 h-10 rounded-lg border flex items-center justify-center transition-colors disabled:opacity-50"
                                        style={{
                                            borderColor: '#d1d8dc',
                                            backgroundColor: canScrollRight ? '#1e3767' : '#d1d8dc',
                                            color: canScrollRight ? 'white' : '#1e3767'
                                        }}
                                        onClick={() => scrollCarousel('right')}
                                        disabled={!canScrollRight}
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>

                            <div
                                className="overflow-x-auto scrollbar-hide"
                                ref={carouselRef}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                <div className="flex gap-6" style={{ width: 'max-content' }}>
                                    {carouselJobs.map((job) => (
                                        <div
                                            key={job.id}
                                            className="bg-white border rounded-xl p-6 cursor-pointer hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                                            style={{
                                                borderColor: '#d1d8dc',
                                                width: '320px',
                                                flexShrink: 0
                                            }}
                                            onClick={() => handleJobClick(job)}
                                        >
                                            <div className="mb-4">
                                                    <span
                                                        className="px-3 py-1 rounded-lg text-sm font-medium text-white mb-3 inline-block"
                                                        style={{ backgroundColor: getDepartmentColor(job.department) }}
                                                    >
                                                        {job.department}
                                                    </span>

                                                <h3 className="text-xl font-bold mb-3" style={{ color: '#1e3767' }}>
                                                    {job.title}
                                                </h3>

                                                <div className="flex flex-col gap-2 mb-4 text-sm" style={{ color: '#1e3767' }}>
                                                    <div className="flex items-center gap-1">
                                                        <MapPin size={14} />
                                                        <span>{job.location}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock size={14} />
                                                        <span>{job.type}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Users size={14} />
                                                        <span>Team: {job.teamSize}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-sm leading-relaxed mb-6" style={{ color: '#1e3767' }}>
                                                {job.description}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <div className="text-xs" style={{ color: '#1e3767' }}>
                                                    <div className="mb-1">
                                                        <span className="font-medium">Erfahrung: </span>
                                                        <span>{job.experience}</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-medium">Veröffentlicht: </span>
                                                        <span>{job.posted}</span>
                                                    </div>
                                                </div>
                                                <ArrowRight size={16} style={{ color: '#1e3767' }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="text-center mt-6 text-sm" style={{ color: '#1e3767' }}>
                                ← Wischen Sie für weitere Stellen →
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Benefits Section */}
            <section
                ref={setSectionRef('benefits')}
                className="max-w-6xl mx-auto px-6 py-20"
            >
                <div className={`transition-all duration-1000 ${visibleSections.has('benefits') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-4xl font-bold mb-16" style={{ color: '#1e3767' }}>
                        Was wir bieten
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h4 className="text-lg font-bold mb-3" style={{ color: '#1e3767' }}>Attraktive Vergütung</h4>
                            <p className="text-sm" style={{ color: '#1e3767' }}>Leistungsgerechte Bezahlung über Kollektivvertrag</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-lg font-bold mb-3" style={{ color: '#1e3767' }}>Flexible Arbeitszeiten</h4>
                            <p className="text-sm" style={{ color: '#1e3767' }}>Gleitzeit und Home-Office Möglichkeiten</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-lg font-bold mb-3" style={{ color: '#1e3767' }}>Weiterbildung</h4>
                            <p className="text-sm" style={{ color: '#1e3767' }}>Individuelle Entwicklungsprogramme und Schulungen</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-lg font-bold mb-3" style={{ color: '#1e3767' }}>Gesundheitsvorsorge</h4>
                            <p className="text-sm" style={{ color: '#1e3767' }}>Betriebsarzt und Gesundheitsprogramme</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-lg font-bold mb-3" style={{ color: '#1e3767' }}>Internationale Projekte</h4>
                            <p className="text-sm" style={{ color: '#1e3767' }}>Spannende Projekte weltweit</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-lg font-bold mb-3" style={{ color: '#1e3767' }}>Modernes Arbeitsumfeld</h4>
                            <p className="text-sm" style={{ color: '#1e3767' }}>State-of-the-art Büros und Technologie</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Process Section */}
            <section
                ref={setSectionRef('process')}
                className="max-w-6xl mx-auto px-6 py-20"
            >
                <div className={`transition-all duration-1000 ${visibleSections.has('process') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-4xl font-bold mb-16" style={{ color: '#1e3767' }}>
                        Unser Bewerbungsprozess
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#1e3767' }}>
                                1
                            </div>
                            <h4 className="text-lg font-bold mb-2" style={{ color: '#1e3767' }}>Bewerbung</h4>
                            <p className="text-sm" style={{ color: '#1e3767' }}>Senden Sie uns Ihre aussagekräftigen Unterlagen</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#1e3767' }}>
                                2
                            </div>
                            <h4 className="text-lg font-bold mb-2" style={{ color: '#1e3767' }}>Erstgespräch</h4>
                            <p className="text-sm" style={{ color: '#1e3767' }}>Persönliches oder virtuelles Kennenlernen</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#1e3767' }}>
                                3
                            </div>
                            <h4 className="text-lg font-bold mb-2" style={{ color: '#1e3767' }}>Fachgespräch</h4>
                            <p className="text-sm" style={{ color: '#1e3767' }}>Detailliertes Gespräch mit dem Fachbereich</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#1e3767' }}>
                                4
                            </div>
                            <h4 className="text-lg font-bold mb-2" style={{ color: '#1e3767' }}>Angebot</h4>
                            <p className="text-sm" style={{ color: '#1e3767' }}>Individuelles Vertragsangebot</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#1e3767' }}>
                                5
                            </div>
                            <h4 className="text-lg font-bold mb-2" style={{ color: '#1e3767' }}>Onboarding</h4>
                            <p className="text-sm" style={{ color: '#1e3767' }}>Strukturierte Einarbeitung im Team</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                ref={setSectionRef('cta')}
                className="max-w-6xl mx-auto px-6 py-20"
            >
                <div className={`text-center transition-all duration-1000 ${visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h3 className="text-3xl font-bold mb-4" style={{ color: '#1e3767' }}>
                        Keine passende Stelle gefunden?
                    </h3>
                    <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#1e3767' }}>
                        Wir sind immer auf der Suche nach talentierten Menschen.
                        Senden Sie uns Ihre Initiativbewerbung!
                    </p>
                    <button
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-medium transition-colors hover:opacity-90"
                        style={{ backgroundColor: '#1e3767' }}
                        onClick={() => openApplicationForm('Initiativbewerbung')}
                    >
                        <span>Initiativbewerbung senden</span>
                        <ArrowRight size={16} />
                    </button>
                </div>
            </section>

            {/* Job Details Modal */}
            {selectedJob && (
                <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4">
                    <div
                        className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
                        onClick={closeModal}
                    ></div>

                    <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[calc(100vh-40px)] overflow-y-auto">
                        <button
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center transition-colors shadow-md border"
                            style={{ borderColor: '#d1d8dc' }}
                            onClick={closeModal}
                        >
                            <span className="text-xl" style={{ color: '#1e3767' }}>×</span>
                        </button>

                        <div className="relative h-48 rounded-t-2xl" style={{ backgroundColor: '#1e3767' }}>
                            <div className="absolute bottom-6 left-6 text-white">
                                    <span
                                        className="px-3 py-1 rounded-lg text-sm font-medium mb-3 inline-block"
                                        style={{ backgroundColor: getDepartmentColor(selectedJob.department) }}
                                    >
                                        {selectedJob.department}
                                    </span>

                                <h2 className="text-3xl font-bold mb-2">
                                    {selectedJob.title}
                                </h2>

                                <div className="flex flex-wrap gap-4 text-sm">
                                    <div className="flex items-center gap-1">
                                        <MapPin size={14} />
                                        <span>{selectedJob.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        <span>{selectedJob.type}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users size={14} />
                                        <span>Team: {selectedJob.teamSize}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>{selectedJob.posted}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div>
                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold mb-4" style={{ color: '#1e3767' }}>Beschreibung</h3>
                                        <p className="leading-relaxed" style={{ color: '#1e3767' }}>
                                            {selectedJob.description}
                                        </p>
                                    </div>

                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold mb-4" style={{ color: '#1e3767' }}>Ihre Aufgaben</h3>
                                        <ul className="space-y-2">
                                            {selectedJob.responsibilities.map((item, index) => (
                                                <li key={index} className="flex items-start">
                                                    <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0 mt-2" style={{ backgroundColor: '#1e3767' }}></div>
                                                    <span className="text-sm" style={{ color: '#1e3767' }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold mb-4" style={{ color: '#1e3767' }}>Ihr Profil</h3>
                                        <ul className="space-y-2">
                                            {selectedJob.requirements.map((item, index) => (
                                                <li key={index} className="flex items-start">
                                                    <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0 mt-2" style={{ backgroundColor: '#1e3767' }}></div>
                                                    <span className="text-sm" style={{ color: '#1e3767' }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold mb-4" style={{ color: '#1e3767' }}>Wir bieten</h3>
                                        <ul className="space-y-2">
                                            {selectedJob.benefits.map((item, index) => (
                                                <li key={index} className="flex items-start">
                                                    <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0 mt-2" style={{ backgroundColor: '#d97539' }}></div>
                                                    <span className="text-sm" style={{ color: '#1e3767' }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center pt-8 border-t" style={{ borderColor: '#d1d8dc' }}>
                                <button
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-medium transition-colors hover:opacity-90"
                                    style={{ backgroundColor: '#1e3767' }}
                                    onClick={() => openApplicationForm(selectedJob.title)}
                                >
                                    <span>Jetzt bewerben</span>
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Application Form Modal */}
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4">
                    <div
                        className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
                        onClick={() => {
                            setShowForm(false);
                            document.body.style.overflow = 'unset';
                        }}
                    ></div>

                    <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[calc(100vh-40px)] overflow-y-auto">
                        <button
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center transition-colors shadow-md border"
                            style={{ borderColor: '#d1d8dc' }}
                            onClick={() => {
                                setShowForm(false);
                                document.body.style.overflow = 'unset';
                            }}
                        >
                            <span className="text-xl" style={{ color: '#1e3767' }}>×</span>
                        </button>

                        <div className="p-8">
                            <h2 className="text-3xl font-bold mb-2" style={{ color: '#1e3767' }}>Bewerbungsformular</h2>
                            <p className="text-lg mb-8" style={{ color: '#1e3767' }}>
                                Wir freuen uns auf Ihre Bewerbung! Bitte füllen Sie das folgende Formular aus.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium mb-2" style={{ color: '#1e3767' }}>
                                            Vorname *
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                                            style={{
                                                borderColor: '#d1d8dc'
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium mb-2" style={{ color: '#1e3767' }}>
                                            Nachname *
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                                            style={{
                                                borderColor: '#d1d8dc'
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#1e3767' }}>
                                            E-Mail *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                                            style={{
                                                borderColor: '#d1d8dc'
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: '#1e3767' }}>
                                            Telefon
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                                            style={{
                                                borderColor: '#d1d8dc'
                                            }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="position" className="block text-sm font-medium mb-2" style={{ color: '#1e3767' }}>
                                        Position
                                    </label>
                                    <input
                                        type="text"
                                        id="position"
                                        name="position"
                                        value={formData.position}
                                        onChange={handleInputChange}
                                        placeholder="z.B. Initiativbewerbung oder gewünschte Position"
                                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                                        style={{
                                            borderColor: '#d1d8dc'
                                        }}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#1e3767' }}>
                                        Nachricht
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={5}
                                        placeholder="Erzählen Sie uns mehr über sich..."
                                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                                        style={{
                                            borderColor: '#d1d8dc'
                                        }}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="cv" className="block text-sm font-medium mb-2" style={{ color: '#1e3767' }}>
                                        Lebenslauf (PDF, max. 5MB)
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="file"
                                            id="cv"
                                            name="cv"
                                            onChange={handleFileChange}
                                            accept=".pdf"
                                            className="hidden"
                                        />
                                        <label
                                            htmlFor="cv"
                                            className="flex items-center gap-2 w-full px-4 py-3 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50"
                                            style={{ borderColor: '#d1d8dc', color: '#1e3767' }}
                                        >
                                            <Upload size={20} />
                                            <span>{formData.cv ? formData.cv.name : 'Datei auswählen'}</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-6">
                                    <button
                                        type="button"
                                        className="flex-1 py-3 px-6 border rounded-lg font-medium transition-colors"
                                        style={{
                                            borderColor: '#d1d8dc',
                                            color: '#1e3767'
                                        }}
                                        onClick={() => {
                                            setShowForm(false);
                                            document.body.style.overflow = 'unset';
                                        }}
                                    >
                                        Abbrechen
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-white font-medium transition-colors hover:opacity-90"
                                        style={{ backgroundColor: '#1e3767' }}
                                    >
                                        <Send size={16} />
                                        <span>Bewerbung senden</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default Karriere;