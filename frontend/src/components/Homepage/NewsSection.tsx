import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, ArrowRight, User, TrendingUp } from 'lucide-react';

const NewsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const newsArticles = [
        {
            id: 1,
            title: "Digitalisierung im Industrieanlagenbau: Neue Wege für mehr Effizienz",
            excerpt: "Wie moderne Technologien die Planung und Umsetzung von Industrieprojekten revolutionieren und dabei Kosten sparen.",
            content: "Die Digitalisierung transformiert den Industrieanlagenbau grundlegend. Bei PROMAX setzen wir auf modernste Technologien wie Building Information Modeling (BIM) für präzise 3D-Planungen, digitale Zwillinge zur Simulation komplexer Prozesse und IoT-basierte Überwachungssysteme für Echtzeitdatenanalyse. Diese innovativen Ansätze ermöglichen es uns, Projektlaufzeiten um bis zu 30% zu verkürzen und gleichzeitig die Qualität signifikant zu steigern. Durch die nahtlose Integration verschiedener Planungsdisziplinen minimieren wir Fehlerquellen und optimieren den gesamten Projektablauf von der Konzeption bis zur Inbetriebnahme.",
            category: "Technologie",
            author: "Dr. Michael Weber",
            date: "15. Januar 2025",
            readTime: "5 Min.",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
            featured: true,
            size: "large"
        },
        {
            id: 2,
            title: "Nachhaltigkeit in der Prozessindustrie",
            excerpt: "Umweltfreundliche Lösungen für moderne Industrieanlagen.",
            content: "Nachhaltigkeit ist heute ein entscheidender Erfolgsfaktor im Anlagenbau. Wir entwickeln ganzheitliche Konzepte zur Reduzierung des CO2-Fußabdrucks industrieller Prozesse. Durch intelligente Wärmerückgewinnung, optimierte Materialflüsse und den Einsatz erneuerbarer Energien erreichen unsere Kunden Energieeinsparungen von durchschnittlich 40%. Besonders im Fokus stehen dabei zirkuläre Wirtschaftskonzepte, die Abfallströme in wertvolle Ressourcen verwandeln. Unsere Experten begleiten Sie von der Nachhaltigkeitsstrategie bis zur konkreten technischen Umsetzung.",
            category: "Nachhaltigkeit",
            author: "Sarah Klein",
            date: "12. Januar 2025",
            readTime: "3 Min.",
            image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800",
            size: "medium"
        },
        {
            id: 3,
            title: "KI-Revolution in der Qualitätskontrolle",
            excerpt: "Maschinelles Lernen optimiert Fertigungsprozesse.",
            content: "Künstliche Intelligenz revolutioniert die Qualitätssicherung in der Produktion. Unsere KI-gestützten Systeme erkennen Abweichungen im Produktionsprozess in Echtzeit und ermöglichen präventive Eingriffe bevor Ausschuss entsteht. Machine Learning Algorithmen analysieren kontinuierlich Sensordaten und optimieren Prozessparameter selbstständig. Das Ergebnis: 95% weniger Ausschuss und eine deutlich höhere Produktqualität. Die Integration dieser Technologien in bestehende Anlagen erfolgt dabei nahtlos und ohne Produktionsunterbrechungen.",
            category: "Innovation",
            author: "Dr. Lisa Schmidt",
            date: "10. Januar 2025",
            readTime: "4 Min.",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
            size: "small"
        },
        {
            id: 4,
            title: "Pharma-Anlage in Rekordzeit fertiggestellt",
            excerpt: "Innovatives Projektmanagement spart 3 Monate Zeit.",
            content: "Durch den Einsatz agiler Projektmanagement-Methoden und digitaler Planungstools konnten wir eine hochkomplexe Pharmaproduktionsanlage drei Monate früher als geplant fertigstellen. Das Geheimnis des Erfolgs lag in der parallelen Ausführung verschiedener Gewerke, ermöglicht durch präzise BIM-Modellierung und tägliche digitale Abstimmungsrunden. Die frühzeitige Einbindung aller Stakeholder und eine transparente Kommunikation über unsere Cloud-Plattform minimierten Schnittstellenprobleme. Das Projekt zeigt eindrucksvoll, wie moderne Projektsteuerung Zeit und Kosten spart.",
            category: "Projekte",
            author: "Thomas Müller",
            date: "8. Januar 2025",
            readTime: "6 Min.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
            size: "wide"
        },
        {
            id: 5,
            title: "Smart Manufacturing",
            excerpt: "Die Zukunft der vernetzten Produktion.",
            content: "Industrie 4.0 ist keine Zukunftsvision mehr, sondern gelebte Realität in modernen Produktionsanlagen. Unsere Smart Manufacturing Lösungen vernetzen Maschinen, Systeme und Menschen zu einem intelligenten Gesamtsystem. Durch Edge Computing und 5G-Technologie entstehen Echtzeit-Regelkreise, die eine adaptive Produktion ermöglichen. Predictive Analytics reduzieren ungeplante Stillstände um 60%, während flexible Automatisierung die Umrüstzeiten minimiert. So entstehen hocheffiziente Produktionsumgebungen, die sich dynamisch an Marktanforderungen anpassen.",
            category: "Technologie",
            author: "Anna Becker",
            date: "5. Januar 2025",
            readTime: "2 Min.",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
            size: "medium"
        },
        {
            id: 6,
            title: "Strategische Projektplanung als Erfolgsfaktor",
            excerpt: "Systematische Ansätze minimieren Risiken und maximieren den Projekterfolg.",
            content: "Erfolgreiche Industrieprojekte beginnen mit einer durchdachten Strategie. Unser systematischer Planungsansatz identifiziert potenzielle Risiken bereits in der Konzeptphase und entwickelt proaktive Gegenmaßnahmen. Durch den Einsatz von Monte-Carlo-Simulationen und Szenarioanalysen schaffen wir robuste Projektpläne, die auch bei unvorhergesehenen Ereignissen Bestand haben. Die Integration von Lean-Prinzipien in die Projektabwicklung reduziert Verschwendung und optimiert Ressourceneinsatz. Das Resultat sind Projekte, die termingerecht und im Budget abgeschlossen werden.",
            category: "Planung",
            author: "Robert Chen",
            date: "3. Januar 2025",
            readTime: "4 Min.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
            size: "medium"
        },
        {
            id: 7,
            title: "Energieeffizienz in der Chemiebranche",
            excerpt: "Innovative Lösungen reduzieren den Energieverbrauch um bis zu 40%.",
            content: "Die Chemieindustrie steht vor der Herausforderung, Energiekosten zu senken und gleichzeitig Nachhaltigkeitsziele zu erreichen. Unsere integrierten Energiekonzepte kombinieren Prozessoptimierung, Wärmeintegration und alternative Energiequellen zu einem ganzheitlichen Ansatz. Durch Pinch-Analysen identifizieren wir Einsparpotenziale in Wärmetauschernetzwerken, während moderne Regelungstechnik den Energieeinsatz in Echtzeit optimiert. Besonders erfolgreich sind unsere Lösungen zur Abwärmenutzung, die bisher ungenutzte Energieströme in den Produktionsprozess zurückführen.",
            category: "Nachhaltigkeit",
            author: "Dr. Maria Schneider",
            date: "1. Januar 2025",
            readTime: "5 Min.",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
            size: "medium"
        },
        {
            id: 8,
            title: "Predictive Maintenance Revolution",
            excerpt: "IoT-Sensoren und Machine Learning verhindern Ausfälle bevor sie entstehen.",
            content: "Ungeplante Anlagenstillstände gehören mit unseren Predictive Maintenance Lösungen der Vergangenheit an. Hochauflösende Sensoren überwachen kontinuierlich kritische Anlagenkomponenten und erkennen kleinste Abweichungen vom Normalzustand. KI-Algorithmen analysieren diese Datenströme und prognostizieren den optimalen Wartungszeitpunkt. Dadurch verlängern sich Wartungsintervalle um durchschnittlich 35%, während die Ausfallwahrscheinlichkeit gegen Null tendiert. Die nahtlose Integration in bestehende Maintenance-Management-Systeme macht die Implementierung besonders effizient.",
            category: "Innovation",
            author: "Alex Rodriguez",
            date: "28. Dezember 2024",
            readTime: "3 Min.",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
            size: "medium"
        }
    ];

    const handleArticleClick = (article) => {
        setSelectedArticle(article);
    };

    const closeModal = () => {
        setSelectedArticle(null);
    };

    // Verwende die Service Section Farben
    const getCategoryColor = (category) => {
        const colors = {
            'Technologie': '#1E3A5F',
            'Nachhaltigkeit': '#1E3A5F',
            'Projekte': '#E67E22',
            'Innovation': '#1E3A5F',
            'Planung': '#E67E22'
        };
        return colors[category] || '#1E3A5F';
    };

    const getCategoryGradient = (category) => {
        const gradients = {
            'Technologie': 'linear-gradient(135deg, #1E3A5F, #2d4a73)',
            'Nachhaltigkeit': 'linear-gradient(135deg, #1E3A5F, #2d4a73)',
            'Projekte': 'linear-gradient(135deg, #E67E22, #d97706)',
            'Innovation': 'linear-gradient(135deg, #1E3A5F, #2d4a73)',
            'Planung': 'linear-gradient(135deg, #E67E22, #d97706)'
        };
        return gradients[category] || gradients['Technologie'];
    };

    const styles = {
        newsSection: {
            padding: '5rem 0',
            background: '#f5f7fa',
            fontFamily: "'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif",
            position: 'relative',
            overflow: 'hidden'
        },
        container: {
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 1.5rem',
            position: 'relative',
            zIndex: 1
        },
        header: {
            textAlign: 'center',
            marginBottom: '4rem',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
        },
        badge: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid #e2e8f0',
            borderRadius: '50px',
            padding: '0.75rem 1.25rem',
            marginBottom: '1.5rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: '#1E3A5F',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
        },
        badgeDot: {
            width: '8px',
            height: '8px',
            background: '#E67E22',
            borderRadius: '50%',
            animation: 'pulse 2s infinite'
        },
        title: {
            fontSize: '3.5rem',
            fontWeight: '600',
            color: '#1E3A5F',
            marginBottom: '1rem',
            letterSpacing: '-0.5px',
            lineHeight: 1,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
        },
        titleAccent: {
            color: '#E67E22'
        },
        titleUnderline: {
            width: '120px',
            height: '5px',
            background: '#E67E22',
            margin: '0 auto 2rem',
            borderRadius: '3px',
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
        },
        subtitle: {
            fontSize: '1.2rem',
            color: '#64748b',
            maxWidth: '48rem',
            margin: '0 auto',
            lineHeight: '1.6',
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1) 0.8s'
        },
        masonryGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem'
        },
        newsCard: {
            cursor: 'pointer',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '0.1s'
        },
        cardWrapper: {
            background: '#ffffff',
            borderRadius: '16px',
            overflow: 'hidden',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #e2e8f0',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative'
        },
        cardImageWrapper: {
            position: 'relative',
            overflow: 'hidden',
            height: '200px',
            minHeight: '200px'
        },
        cardImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        },
        imageGradient: {
            position: 'absolute',
            inset: 0,
            opacity: 0,
            transition: 'opacity 0.4s ease',
            mixBlendMode: 'overlay'
        },
        cardBadges: {
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap'
        },
        categoryBadge: {
            padding: '0.5rem 1rem',
            borderRadius: '50px',
            fontSize: '0.75rem',
            fontWeight: '700',
            color: 'white',
            backdropFilter: 'blur(10px)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
        },
        featuredBadge: {
            background: '#E67E22',
            color: 'white',
            padding: '0.375rem 0.75rem',
            borderRadius: '50px',
            fontSize: '0.625rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 15px rgba(230, 126, 34, 0.3)'
        },
        cardContent: {
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            flex: 1
        },
        cardHeader: {
            marginBottom: '1.5rem',
            flex: 1
        },
        cardTitle: {
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#1E3A5F',
            marginBottom: '1rem',
            lineHeight: '1.3',
            transition: 'all 0.3s ease'
        },
        cardText: {
            fontSize: '0.95rem',
            color: '#64748b',
            lineHeight: '1.6',
            display: '-webkit-box',
            WebkitLineClamp: 6,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        cardFooter: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginTop: 'auto',
            borderTop: '1px solid rgba(226, 232, 240, 0.5)',
            paddingTop: '1.5rem'
        },
        cardMeta: {
            flex: 1
        },
        metaGroup: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            marginBottom: '0.75rem'
        },
        metaItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.75rem',
            color: '#8FA0A5'
        },
        readTime: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.75rem',
            color: '#E67E22',
            fontWeight: '600'
        },
        cardAction: {
            width: '2rem',
            height: '2rem',
            background: '#E67E22',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            opacity: 0,
            transform: 'scale(0.8)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        },
        ctaContainer: {
            textAlign: 'center',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 1s'
        },
        ctaButton: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            background: '#E67E22',
            color: 'white',
            padding: '1.25rem 2.5rem',
            borderRadius: '60px',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 8px 30px rgba(230, 126, 34, 0.3)',
            position: 'relative',
            overflow: 'hidden'
        },
        ctaIcon: {
            padding: '0.5rem',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        },
        modalOverlay: {
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50,
            padding: '1rem'
        },
        modalContent: {
            background: '#ffffff',
            borderRadius: '32px',
            maxWidth: '64rem',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.25)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
        },
        closeBtn: {
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            width: '3rem',
            height: '3rem',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#64748b',
            fontSize: '1.5rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            zIndex: 10,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        },
        modalHeader: {
            position: 'relative',
            height: '24rem',
            overflow: 'hidden'
        },
        modalHeaderImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        },
        modalHeaderOverlay: {
            position: 'absolute',
            inset: 0,
            opacity: 0.7,
            mixBlendMode: 'overlay'
        },
        modalHeaderContent: {
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            right: '2rem',
            color: 'white'
        },
        modalCategoryBadge: {
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            borderRadius: '50px',
            fontSize: '0.875rem',
            fontWeight: '700',
            color: 'white',
            backdropFilter: 'blur(10px)',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
        },
        modalTitle: {
            fontSize: '2.5rem',
            fontWeight: '600',
            lineHeight: '1.2',
            marginBottom: '1.5rem',
            textShadow: '0 2px 20px rgba(0, 0, 0, 0.3)'
        },
        modalMeta: {
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            fontSize: '0.875rem',
            opacity: 0.9
        },
        modalBody: {
            padding: '3rem'
        },
        modalExcerpt: {
            fontSize: '1.375rem',
            color: '#475569',
            marginBottom: '2rem',
            fontWeight: '600',
            lineHeight: '1.6',
            paddingLeft: '1rem',
            borderLeft: '4px solid #E67E22'
        },
        modalText: {
            fontSize: '1.125rem',
            color: '#64748b',
            lineHeight: '1.8'
        }
    };

    // Grid styles für verschiedene Kartengrößen
    const cardStyles = {
        large: {
            gridColumn: 'span 2',
            gridRow: 'span 2'
        },
        wide: {
            gridColumn: 'span 2',
            gridRow: 'span 1'
        },
        medium: {
            gridColumn: 'span 1',
            gridRow: 'span 1'
        },
        small: {
            gridColumn: 'span 1',
            gridRow: 'span 1'
        }
    };

    // Bildgrößen für verschiedene Card-Typen
    const imageHeights = {
        large: '280px',
        wide: '180px',
        medium: '200px',
        small: '200px'
    };

    // Responsive grid für größere Bildschirme
    const responsiveGridStyle = window.innerWidth >= 768 ? {
        ...styles.masonryGrid,
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(4, 320px)'
    } : styles.masonryGrid;

    // Hover styles
    const [hoveredCard, setHoveredCard] = useState(null);

    const getCardStyle = (article, index) => {
        const isHovered = hoveredCard === article.id;
        return {
            ...styles.newsCard,
            ...cardStyles[article.size],
            transitionDelay: `${0.1 + index * 0.1}s`
        };
    };

    const getCardWrapperStyle = (article) => {
        const isHovered = hoveredCard === article.id;
        return {
            ...styles.cardWrapper,
            transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
            boxShadow: isHovered ? '0 15px 50px rgba(0, 0, 0, 0.15)' : '0 10px 40px rgba(0, 0, 0, 0.1)',
            borderColor: isHovered ? '#E67E22' : '#e2e8f0'
        };
    };

    const getCardImageStyle = (article) => {
        const isHovered = hoveredCard === article.id;
        return {
            ...styles.cardImage,
            transform: isHovered ? 'scale(1.1) rotate(1deg)' : 'scale(1)'
        };
    };

    const getCardActionStyle = (article) => {
        const isHovered = hoveredCard === article.id;
        return {
            ...styles.cardAction,
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'scale(1) rotate(45deg)' : 'scale(0.8)'
        };
    };

    const getCtaButtonStyle = () => {
        const [isCtaHovered, setIsCtaHovered] = useState(false);
        return {
            ...styles.ctaButton,
            transform: isCtaHovered ? 'translateY(-4px) scale(1.05)' : 'translateY(0) scale(1)',
            boxShadow: isCtaHovered ? '0 15px 40px rgba(230, 126, 34, 0.4)' : '0 8px 30px rgba(230, 126, 34, 0.3)'
        };
    };

    return (
        <section ref={sectionRef} style={styles.newsSection}>
            <div style={styles.container}>
                {/* Header */}
                <div style={styles.header}>
                    <div style={styles.badge}>
                        <div style={styles.badgeDot}></div>
                        <span>Latest Updates</span>
                        <TrendingUp size={14} />
                    </div>
                    <h2 style={styles.title}>
                        News & <span style={styles.titleAccent}>Insights</span>
                    </h2>
                    <div style={styles.titleUnderline}></div>
                    <p style={styles.subtitle}>
                        Aktuelle Entwicklungen und Expertenwissen aus der Welt des Industrieanlagenbaus
                    </p>
                </div>

                {/* Dynamic Masonry Grid */}
                <div style={responsiveGridStyle}>
                    {newsArticles.map((article, index) => (
                        <article
                            key={article.id}
                            style={getCardStyle(article, index)}
                            onMouseEnter={() => setHoveredCard(article.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            onClick={() => handleArticleClick(article)}
                        >
                            <div style={getCardWrapperStyle(article)}>
                                <div style={{
                                    ...styles.cardImageWrapper,
                                    height: imageHeights[article.size] || '200px',
                                    minHeight: imageHeights[article.size] || '200px'
                                }}>
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        style={getCardImageStyle(article)}
                                    />
                                    <div
                                        style={{
                                            ...styles.imageGradient,
                                            background: getCategoryGradient(article.category),
                                            opacity: hoveredCard === article.id ? 0.3 : 0
                                        }}
                                    ></div>
                                    <div style={styles.cardBadges}>
                                        <span
                                            style={{
                                                ...styles.categoryBadge,
                                                background: getCategoryGradient(article.category)
                                            }}
                                        >
                                            {article.category}
                                        </span>
                                        {article.featured && (
                                            <span style={styles.featuredBadge}>
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div style={{
                                    ...styles.cardContent,
                                    padding: article.size === 'large' ? '2.5rem' : '2rem'
                                }}>
                                    <div style={styles.cardHeader}>
                                        <h3 style={{
                                            ...styles.cardTitle,
                                            fontSize: article.size === 'large' ? '1.5rem' : '1.25rem',
                                            color: hoveredCard === article.id ? '#E67E22' : '#1E3A5F',
                                            transform: hoveredCard === article.id ? 'translateX(4px)' : 'translateX(0)'
                                        }}>
                                            {article.title}
                                        </h3>
                                        <p style={{
                                            ...styles.cardText,
                                            WebkitLineClamp: article.size === 'large' ? 8 : article.size === 'wide' ? 4 : 6
                                        }}>
                                            {article.content}
                                        </p>
                                    </div>

                                    <div style={styles.cardFooter}>
                                        <div style={styles.cardMeta}>
                                            <div style={styles.metaGroup}>
                                                <div style={styles.metaItem}>
                                                    <User size={12} />
                                                    <span>{article.author}</span>
                                                </div>
                                                <div style={styles.metaItem}>
                                                    <Calendar size={12} />
                                                    <span>{article.date}</span>
                                                </div>
                                            </div>
                                            <div style={styles.readTime}>
                                                <Clock size={12} />
                                                <span>{article.readTime}</span>
                                            </div>
                                        </div>
                                        <div style={getCardActionStyle(article)}>
                                            <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedArticle && (
                <div
                    style={styles.modalOverlay}
                    onClick={closeModal}
                >
                    <div
                        style={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            style={styles.closeBtn}
                            onClick={closeModal}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'white';
                                e.currentTarget.style.color = '#1E3A5F';
                                e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                                e.currentTarget.style.color = '#64748b';
                                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                            }}
                        >
                            ×
                        </button>
                        <div style={styles.modalHeader}>
                            <img
                                src={selectedArticle.image}
                                alt={selectedArticle.title}
                                style={styles.modalHeaderImage}
                            />
                            <div
                                style={{
                                    ...styles.modalHeaderOverlay,
                                    background: getCategoryGradient(selectedArticle.category)
                                }}
                            ></div>
                            <div style={styles.modalHeaderContent}>
                                <span
                                    style={{
                                        ...styles.modalCategoryBadge,
                                        background: getCategoryGradient(selectedArticle.category)
                                    }}
                                >
                                    {selectedArticle.category}
                                </span>
                                <h2 style={styles.modalTitle}>
                                    {selectedArticle.title}
                                </h2>
                                <div style={styles.modalMeta}>
                                    <div style={styles.metaItem}>
                                        <User size={16} />
                                        <span>{selectedArticle.author}</span>
                                    </div>
                                    <div style={styles.metaItem}>
                                        <Calendar size={16} />
                                        <span>{selectedArticle.date}</span>
                                    </div>
                                    <div style={styles.metaItem}>
                                        <Clock size={16} />
                                        <span>{selectedArticle.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={styles.modalBody}>
                            <p style={styles.modalExcerpt}>
                                {selectedArticle.excerpt}
                            </p>
                            <p style={styles.modalText}>
                                {selectedArticle.content}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.7;
                        transform: scale(1.1);
                    }
                }
            `}</style>
        </section>
    );
};

export default NewsSection;