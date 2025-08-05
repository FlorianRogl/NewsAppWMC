import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, ArrowRight, User, TrendingUp, Star } from 'lucide-react';
import styles from '../../css/NewsSection.module.css';

// Interface für Article-Objekte
interface Article {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    author: string;
    date: string;
    image: string;
    featured: boolean;
    layout: 'hero' | 'featured' | 'standard';
    readTime?: string;
}

const NewsSection = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Kleine Verzögerung für sanfteren Übergang
                    setTimeout(() => {
                        setIsVisible(true);
                    }, 100);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px' // Triggert früher
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

    const newsArticles: Article[] = [
        {
            id: 1,
            title: "KI-Revolution im Industrieanlagenbau: Wie maschinelles Lernen die Zukunft der Automatisierung prägt",
            excerpt: "Künstliche Intelligenz transformiert die Art, wie wir Industrieanlagen planen, bauen und betreiben. Ein tiefer Einblick in die Technologien von morgen.",
            content: `Die Digitalisierung hat eine neue Ära im Industrieanlagenbau eingeläutet...`,
            category: "Technologie",
            author: "Dr. Sarah Chen",
            date: "15. Januar 2025",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=800&fit=crop",
            featured: true,
            layout: "hero"
        },
        {
            id: 2,
            title: "Nachhaltige Prozessindustrie: Kreislaufwirtschaft als Schlüssel zum Erfolg",
            excerpt: "Wie innovative Recycling-Technologien und geschlossene Materialkreisläufe die Industrie revolutionieren.",
            content: `Die Transformation zu einer nachhaltigen Prozessindustrie...`,
            category: "Nachhaltigkeit",
            author: "Maria Hofstetter",
            date: "12. Januar 2025",
            image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
            featured: false,
            layout: "featured"
        },
        {
            id: 3,
            title: "Smart Manufacturing: Die vernetzte Fabrik wird Realität",
            excerpt: "Industrie 4.0 in der Praxis: Wie IoT, 5G und Edge Computing die Produktion revolutionieren.",
            content: `Die Smart Factory ist keine Zukunftsvision mehr...`,
            category: "Innovation",
            author: "Dr. Thomas Reichert",
            date: "10. Januar 2025",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop",
            featured: false,
            layout: "standard"
        },
        {
            id: 4,
            title: "Pharma 4.0: Digitalisierung in der Arzneimittelproduktion",
            excerpt: "Wie digitale Technologien die Pharmaindustrie sicherer, effizienter und patientenorientierter machen.",
            content: `Die Pharmaindustrie durchläuft derzeit...`,
            category: "Pharma",
            author: "Prof. Dr. Lisa Wagner",
            date: "8. Januar 2025",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
            featured: true,
            layout: "standard"
        },
        {
            id: 5,
            title: "Wasserstofftechnologie: Der Energieträger der Zukunft",
            excerpt: "Grüne Wasserstoffproduktion als Schlüsseltechnologie für die Energiewende und klimaneutrale Industrie.",
            content: `Wasserstoff gilt als einer der wichtigsten Energieträger...`,
            category: "Energie",
            author: "Ing. Michael Braun",
            date: "5. Januar 2025",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
            featured: false,
            layout: "standard"
        },
        {
            id: 6,
            title: "Cybersecurity in kritischen Infrastrukturen",
            excerpt: "Wie wir Industrieanlagen gegen Cyberangriffe schützen und gleichzeitig die Vorteile der Digitalisierung nutzen.",
            content: `Die zunehmende Vernetzung von Industrieanlagen...`,
            category: "Sicherheit",
            author: "Dr. Alexandra Müller",
            date: "3. Januar 2025",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
            featured: false,
            layout: "standard"
        }
    ];

    const handleArticleClick = (article: Article) => {
        setSelectedArticle(article);
    };

    const closeModal = () => {
        setSelectedArticle(null);
    };

    const getCategoryGradient = (category: string): string => {
        const gradients: Record<string, string> = {
            'Technologie': 'linear-gradient(135deg, #1E3A5F, #2d4a73)',
            'Nachhaltigkeit': 'linear-gradient(135deg, #10b981, #059669)',
            'Innovation': 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
            'Pharma': 'linear-gradient(135deg, #E67E22, #d97706)',
            'Energie': 'linear-gradient(135deg, #f59e0b, #d97706)',
            'Sicherheit': 'linear-gradient(135deg, #ef4444, #dc2626)'
        };
        return gradients[category] || gradients['Technologie'];
    };

    const getCardLayoutClass = (layout: Article['layout']): string => {
        const layoutClasses: Record<Article['layout'], string> = {
            'hero': styles.heroCard,
            'featured': styles.featuredCard,
            'standard': styles.standardCard
        };
        return layoutClasses[layout] || styles.standardCard;
    };

    return (
        <section ref={sectionRef} className={styles.newsSection}>
            <div className={styles.container}>
                {/* Header */}
                <div className={`${styles.header} ${isVisible ? styles.headerVisible : ''}`}>
                    <div className={styles.badge}>
                        <div className={styles.badgeDot}></div>
                        <span>Aktuelle Insights</span>
                        <TrendingUp size={16} />
                    </div>

                    <h2 className={styles.title}>
                        News & <span className={styles.titleAccent}>Innovation</span>
                    </h2>

                    <div className={styles.titleUnderline}></div>

                    <p className={styles.subtitle}>
                        Entdecken Sie die neuesten Entwicklungen und Innovationen im Industrieanlagenbau –
                        von KI-Revolution bis hin zu nachhaltigen Produktionstechnologien.
                    </p>
                </div>

                {/* News Grid */}
                <div className={styles.newsGrid}>
                    {newsArticles.map((article, index) => (
                        <article
                            key={article.id}
                            className={`${styles.newsCard} ${getCardLayoutClass(article.layout)} ${isVisible ? styles.newsCardVisible : ''} ${styles[`delay-${Math.min(index + 1, 6)}`]}`}
                            onClick={() => handleArticleClick(article)}
                        >
                            <div className={styles.cardWrapper}>
                                <div className={styles.cardImageWrapper}>
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className={styles.cardImage}
                                        loading="lazy"
                                    />
                                    <div className={styles.imageOverlay}></div>
                                    <div className={styles.cardBadges}>
                                        <span
                                            className={styles.categoryBadge}
                                            style={{ background: getCategoryGradient(article.category) }}
                                        >
                                            {article.category}
                                        </span>
                                        {article.featured && (
                                            <span className={styles.featuredBadge}>
                                                <Star size={12} />
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className={styles.cardContent}>
                                    <div className={styles.cardContentHeader}>
                                        {article.layout !== 'hero' && (
                                            <span
                                                className={styles.cardCategoryBadge}
                                                style={{ background: getCategoryGradient(article.category) }}
                                            >
                                                {article.category}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className={styles.cardTitle}>
                                        {article.title}
                                    </h3>
                                    <p className={styles.cardExcerpt}>
                                        {article.excerpt}
                                    </p>

                                    <div className={styles.cardFooter}>
                                        <div className={styles.cardMeta}>
                                            <div className={styles.metaItem}>
                                                <User size={14} />
                                                <span>{article.author}</span>
                                            </div>
                                            <div className={styles.metaItem}>
                                                <Calendar size={14} />
                                                <span>{article.date}</span>
                                            </div>
                                        </div>
                                        <div className={styles.cardAction}>
                                            <ArrowRight size={20} />
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
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={closeModal}>
                            ×
                        </button>

                        <div className={styles.modalHeader}>
                            <img
                                src={selectedArticle.image}
                                alt={selectedArticle.title}
                                className={styles.modalHeaderImage}
                            />
                            <div className={styles.modalHeaderOverlay}></div>
                            <div className={styles.modalHeaderContent}>
                                <span
                                    className={styles.modalCategoryBadge}
                                    style={{ background: getCategoryGradient(selectedArticle.category) }}
                                >
                                    {selectedArticle.category}
                                </span>
                                <h2 className={styles.modalTitle}>
                                    {selectedArticle.title}
                                </h2>
                                <div className={styles.modalMeta}>
                                    <div className={styles.metaItem}>
                                        <User size={16} />
                                        <span>{selectedArticle.author}</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <Calendar size={16} />
                                        <span>{selectedArticle.date}</span>
                                    </div>
                                    {selectedArticle.readTime && (
                                        <div className={styles.metaItem}>
                                            <Clock size={16} />
                                            <span>{selectedArticle.readTime}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className={styles.modalBody}>
                            <div className={styles.modalExcerpt}>
                                {selectedArticle.excerpt}
                            </div>
                            <div className={styles.modalText}>
                                {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                                    <p key={index}>
                                        {paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**') ? (
                                            <strong>{paragraph.replace(/\*\*/g, '')}</strong>
                                        ) : (
                                            paragraph
                                        )}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default NewsSection;