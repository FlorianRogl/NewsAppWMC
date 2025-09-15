import { useEffect, useRef, useState } from 'react';

const VideoSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [yearsCount, setYearsCount] = useState(0);
    const [projectsCount, setProjectsCount] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    useEffect(() => {
        const statsObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Jahre Animation
                    const yearsDuration = 2000;
                    const yearsStart = performance.now();
                    const animateYears = (currentTime: number) => {
                        const elapsed = currentTime - yearsStart;
                        const progress = Math.min(elapsed / yearsDuration, 1);
                        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                        setYearsCount(Math.round(easeOutQuart * 25));

                        if (progress < 1) {
                            requestAnimationFrame(animateYears);
                        }
                    };
                    requestAnimationFrame(animateYears);

                    // Projekte Animation (mit Delay)
                    setTimeout(() => {
                        const projectsDuration = 1800;
                        const projectsStart = performance.now();
                        const animateProjects = (currentTime: number) => {
                            const elapsed = currentTime - projectsStart;
                            const progress = Math.min(elapsed / projectsDuration, 1);
                            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                            setProjectsCount(Math.round(easeOutQuart * 250));

                            if (progress < 1) {
                                requestAnimationFrame(animateProjects);
                            }
                        };
                        requestAnimationFrame(animateProjects);
                    }, 500);
                }
            },
            { threshold: 0.1 }
        );

        if (statsRef.current) {
            statsObserver.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                statsObserver.unobserve(statsRef.current);
            }
        };
    }, []);

    return (
        <>
            <style>{`
                .hero-gradient {
                    background: linear-gradient(
                        135deg,
                        rgba(30, 55, 103, 0.85) 0%,
                        rgba(30, 55, 103, 0.7) 40%,
                        rgba(217, 117, 57, 0.3) 100%
                    );
                }

                .floating-element {
                    animation: float 6s ease-in-out infinite;
                }

                .floating-element:nth-child(2) {
                    animation-delay: -2s;
                }

                .floating-element:nth-child(3) {
                    animation-delay: -4s;
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(5deg);
                    }
                }

                .glass-effect {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
                }

                .text-shadow-custom {
                    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                }

                .scroll-indicator {
                    animation: bounce-custom 2s infinite;
                }

                @keyframes bounce-custom {
                    0%, 20%, 50%, 80%, 100% {
                        transform: translateY(0) translateX(-50%);
                    }
                    40% {
                        transform: translateY(-10px) translateX(-50%);
                    }
                    60% {
                        transform: translateY(-5px) translateX(-50%);
                    }
                }

                .particle {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: rgba(217, 117, 57, 0.6);
                    border-radius: 50%;
                    animation: particle-float 8s linear infinite;
                }

                @keyframes particle-float {
                    0% {
                        opacity: 0;
                        transform: translateY(100vh) translateX(0);
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        transform: translateY(-100px) translateX(100px);
                    }
                }

                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 2.8rem !important;
                    }
                    .hero-subtitle {
                        font-size: 1.2rem !important;
                    }
                    .stats-number {
                        font-size: 2.5rem !important;
                    }
                    .floating-element {
                        display: none;
                    }
                }

                @media (max-width: 480px) {
                    .hero-title {
                        font-size: 2.2rem !important;
                    }
                    .hero-subtitle {
                        font-size: 1rem !important;
                    }
                    .stats-number {
                        font-size: 2rem !important;
                    }
                }
            `}</style>

            <section ref={sectionRef} className="relative h-screen overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/promaxstockvideo_VrMEem5A.mp4"
                    />
                    <div className="absolute inset-0 hero-gradient"></div>
                </div>

                {/* Floating Particles */}
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${i * 2}s`,
                            animationDuration: `${8 + Math.random() * 4}s`
                        }}
                    />
                ))}

                {/* Floating Geometric Elements */}
                <div
                    className="floating-element absolute w-32 h-32 opacity-20 rounded-full"
                    style={{
                        backgroundColor: '#d97539',
                        top: '20%',
                        right: '10%',
                        transform: `translateY(${scrollY * 0.3}px)`
                    }}
                />
                <div
                    className="floating-element absolute w-24 h-24 opacity-15 rounded-lg"
                    style={{
                        backgroundColor: '#1e3767',
                        bottom: '30%',
                        left: '15%',
                        transform: `rotate(45deg) translateY(${scrollY * -0.2}px)`
                    }}
                />
                <div
                    className="floating-element absolute w-16 h-16 opacity-25 rounded-full"
                    style={{
                        backgroundColor: '#d97539',
                        top: '60%',
                        right: '20%',
                        transform: `translateY(${scrollY * 0.4}px)`
                    }}
                />

                {/* Main Content */}
                <div className="relative z-20 h-full flex flex-col items-center justify-center px-6">

                    {/* Main Title */}
                    <div
                        className="text-center mb-8"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                            transition: 'all 0.8s ease 0.4s'
                        }}
                    >
                        <h1 className="hero-title text-6xl md:text-7xl font-light mb-4 text-white text-shadow-custom leading-tight">
                            PROMAX
                        </h1>
                        <p className="hero-subtitle text-xl md:text-2xl font-semibold text-shadow-custom" style={{color: '#d97539'}}>
                            Engineering
                        </p>
                    </div>

                    {/* Stats Container */}
                    <div
                        ref={statsRef}
                        className="glass-effect rounded-2xl p-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                            transition: 'all 0.8s ease 0.8s'
                        }}
                    >
                        {/* Years of Experience */}
                        <div className="text-center">
                            <div className="stats-number text-4xl md:text-5xl font-light text-white mb-2">
                                {yearsCount}+
                            </div>
                            <div className="text-white/80 text-sm font-medium uppercase tracking-wider">
                                Jahre Erfahrung
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-12 bg-white/30"></div>
                        <div className="md:hidden w-12 h-px bg-white/30"></div>

                        {/* Projects Completed */}
                        <div className="text-center">
                            <div className="stats-number text-4xl md:text-5xl font-light" style={{color: '#d97539'}}>
                                {projectsCount}+
                            </div>
                            <div className="text-white/80 text-sm font-medium uppercase tracking-wider">
                                Projekte realisiert
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-12 bg-white/30"></div>
                        <div className="md:hidden w-12 h-px bg-white/30"></div>

                        {/* ISO Certification */}
                        <div className="text-center">
                            <div className="stats-number text-4xl md:text-5xl font-light text-white mb-2">
                                ISO
                            </div>
                            <div className="text-white/80 text-sm font-medium uppercase tracking-wider">
                                9001:2015
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Scroll Indicator */}
                <div className="scroll-indicator absolute bottom-8 left-1/2 z-20">
                    <div className="glass-effect w-8 h-12 rounded-full flex flex-col items-center justify-start p-2">
                        <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
                    </div>
                    <div className="text-white/70 text-xs font-medium uppercase tracking-wider mt-2 text-center">
                        Scroll
                    </div>
                </div>

                {/* Corner Accent */}
                <div
                    className="absolute top-0 right-0 w-32 h-32 opacity-30"
                    style={{
                        background: 'linear-gradient(135deg, transparent 50%, #d97539 50%)',
                        transform: `translateY(${scrollY * 0.1}px)`
                    }}
                />
            </section>
        </>
    );
};

export default VideoSection;