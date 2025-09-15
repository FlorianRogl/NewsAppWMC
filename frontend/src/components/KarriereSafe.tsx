import { useEffect, useRef, useState, useCallback } from 'react';
import { MapPin, Clock, Users, ArrowRight, Calendar, ChevronLeft, ChevronRight, Sparkles, Mail } from 'lucide-react';
import planungImage from '../assets/Fotolia_59046832_XS.jpg';
import { jobService } from '../services/jobService';
import type { FormattedJob } from '../types/job.types';

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

const Karriere: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [selectedJob, setSelectedJob] = useState<FormattedJob | null>(null);
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

    // Sanity Integration States
    const [jobOpenings, setJobOpenings] = useState<FormattedJob[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Refs
    const heroRef = useRef<HTMLElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    // Helper function for section refs
    const setSectionRef = (key: string) => (el: HTMLElement | null) => {
        sectionRefs.current[key] = el;
    };

    // Jobs von Sanity laden
    useEffect(() => {
        const loadJobs = async () => {
            try {
                setLoading(true);
                setError(null);
                const jobs = await jobService.getActiveJobs();
                setJobOpenings(jobs);
            } catch (err) {
                console.error('Fehler beim Laden der Jobs:', err);
                setError('Jobs konnten nicht geladen werden. Bitte versuchen Sie es später erneut.');
            } finally {
                setLoading(false);
            }
        };

        loadJobs();
    }, []);

    // SEO Meta Tags setzen
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

    // Intersection Observer für Scroll-Animationen
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

    const handleJobClick = (job: FormattedJob) => {
        setSelectedJob(job);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedJob(null);
        document.body.style.overflow = 'unset';
    };

    // Loading State
    if (loading) {
        return (
            <div style={{ fontFamily: 'Arial, sans-serif', color: '#1e3767' }}>
                <div className="max-w-6xl mx-auto px-6 py-40 text-center">
                    <div className="animate-pulse">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full" style={{ backgroundColor: '#d1d8dc' }}></div>
                        <div className="text-xl">Jobs werden geladen...</div>
                    </div>
                </div>
            </div>
        );
    }

    // Error State
    if (error) {
        return (
            <div style={{ fontFamily: 'Arial, sans-serif', color: '#1e3767' }}>
                <div className="max-w-6xl mx-auto px-6 py-40 text-center">
                    <div className="text-xl text-red-600 mb-4">{error}</div>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-3 rounded-lg text-white hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: '#1e3767' }}
                    >
                        Seite neu laden
                    </button>
                </div>
            </div>
        );
    }

    // Keine Jobs vorhanden
    if (!loading && jobOpenings.length === 0) {
        return (
            <div style={{ fontFamily: 'Arial, sans-serif', color: '#1e3767' }}>
                <section className="max-w-6xl mx-auto px-6 py-40 text-center">
                    <h1 className="text-4xl font-bold mb-4">Karriere bei PROMAX</h1>
                    <p className="text-xl mb-8">
                        Momentan sind keine offenen Stellen verfügbar.
                    </p>
                    <p className="text-lg mb-8">
                        Wir freuen uns aber jederzeit über Initiativbewerbungen!
                    </p>
                    <div className="bg-white border rounded-xl p-8 max-w-md mx-auto" style={{ borderColor: '#d1d8dc' }}>
                        <Mail size={48} className="mx-auto mb-4" style={{ color: '#1e3767' }} />
                        <h3 className="text-xl font-bold mb-2">Initiativbewerbung</h3>
                        <p className="text-sm mb-4">
                            Senden Sie uns Ihre Bewerbungsunterlagen an:
                        </p>
                        <a
                            href="mailto:karriere@promax.at"
                            className="text-lg font-medium hover:underline"
                            style={{ color: '#d97539' }}
                        >
                            karriere@promax.at
                        </a>
                    </div>
                </section>
            </div>
        );
    }

    // Split jobs into featured and carousel
    const featuredJobs = jobOpenings.slice(0, 3);
    const carouselJobs = jobOpenings.slice(3);

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

                        {/* Image - Hidden on mobile */}
                        <div className="relative hidden lg:block">
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
                        Bewerbungen und Kontakt
                    </h3>
                    <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#1e3767' }}>
                        Interessiert? Senden Sie Ihre vollständigen Bewerbungsunterlagen
                        per E-Mail an unser HR-Team.
                    </p>
                    <div className="bg-white border rounded-xl p-8 max-w-md mx-auto" style={{ borderColor: '#d1d8dc' }}>
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1e3767' }}>
                                <Mail size={24} color="white" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold mb-2" style={{ color: '#1e3767' }}>E-Mail Bewerbung</h4>
                        <a
                            href="mailto:karriere@promax.at"
                            className="text-lg font-medium hover:underline"
                            style={{ color: '#d97539' }}
                        >
                            karriere@promax.at
                        </a>
                        <p className="text-sm mt-4" style={{ color: '#1e3767' }}>
                            Bitte fügen Sie Lebenslauf, Anschreiben und relevante Zeugnisse bei.
                        </p>
                    </div>
                </div>
            </section>

            {/* Job Details Modal */}
            {selectedJob && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ paddingTop: '80px' }}>
                    <div
                        className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
                        onClick={closeModal}
                    ></div>

                    <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[calc(100vh-160px)] overflow-y-auto">
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
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h4 className="text-lg font-bold mb-2" style={{ color: '#1e3767' }}>Jetzt bewerben</h4>
                                    <p className="text-sm mb-4" style={{ color: '#1e3767' }}>
                                        Senden Sie Ihre Bewerbungsunterlagen an:
                                    </p>
                                    <a
                                        href={`mailto:karriere@promax.at?subject=Bewerbung: ${selectedJob.title}`}
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-colors hover:opacity-90"
                                        style={{ backgroundColor: '#1e3767' }}
                                    >
                                        <Mail size={16} />
                                        <span>karriere@promax.at</span>
                                    </a>
                                </div>
                            </div>
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