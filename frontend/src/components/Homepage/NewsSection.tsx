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

    const newsArticles: Article[] = [
        {
            id: 1,
            title: "KI-Revolution im Industrieanlagenbau: Wie maschinelles Lernen die Zukunft der Automatisierung prägt",
            excerpt: "Künstliche Intelligenz transformiert die Art, wie wir Industrieanlagen planen, bauen und betreiben. Ein tiefer Einblick in die Technologien von morgen.",
            content: `Die Digitalisierung hat eine neue Ära im Industrieanlagenbau eingeläutet, und künstliche Intelligenz steht dabei im Zentrum dieser Revolution. Bei PROMAX setzen wir seit Jahren auf innovative KI-Technologien, die nicht nur die Effizienz unserer Projekte steigern, sondern auch völlig neue Möglichkeiten in der Anlagenplanung und -optimierung eröffnen.

            **Maschinelles Lernen in der Projektplanung**
            
            Unsere KI-gestützten Planungstools analysieren historische Projektdaten, um präzise Vorhersagen über Projektlaufzeiten, Ressourcenbedarf und potenzielle Risiken zu treffen. Durch den Einsatz von Machine Learning-Algorithmen können wir Projektlaufzeiten um durchschnittlich 35% verkürzen und gleichzeitig die Planungsgenauigkeit erheblich verbessern.
            
            Die Integration von neuronalen Netzwerken in unsere CAD-Systeme ermöglicht es, automatisch optimierte Anlagenlayouts zu generieren, die sowohl betriebliche Effizienz als auch Sicherheitsstandards berücksichtigen. Diese Systeme lernen kontinuierlich aus jedem abgeschlossenen Projekt und werden dadurch immer präziser.
            
            **Predictive Analytics für vorausschauende Wartung**
            
            Ein Schwerpunkt unserer KI-Entwicklung liegt auf der vorausschauenden Wartung. Durch die Integration von IoT-Sensoren und fortschrittlichen Analysealgorithmen können wir den Zustand kritischer Anlagenkomponenten in Echtzeit überwachen und Wartungsbedarfe bis zu 6 Monate im Voraus prognostizieren.
            
            Diese Technologie hat bereits bei mehreren Großprojekten zu einer Reduktion ungeplanter Stillstände um über 90% geführt. Die KI erkennt dabei Muster in den Sensordaten, die für menschliche Analysten nicht erkennbar wären, und kann so präventive Maßnahmen rechtzeitig einleiten.
            
            **Automatisierte Qualitätskontrolle**
            
            Computer Vision-Systeme revolutionieren unsere Qualitätssicherung. Hochauflösende Kameras in Kombination mit Deep Learning-Algorithmen erkennen kleinste Abweichungen in der Fertigung bereits während des Produktionsprozesses. Diese Systeme arbeiten 24/7 mit einer Genauigkeit von 99.7% und haben die Ausschussrate in unseren Projekten um durchschnittlich 85% reduziert.
            
            **Die Zukunft ist digital**
            
            Die nächste Generation unserer KI-Systeme wird noch einen Schritt weitergehen: Durch den Einsatz von Generative AI können wir bereits heute erste Prototypen für selbstoptimierende Anlagen entwickeln, die ihre Betriebsparameter autonom an veränderte Produktionsanforderungen anpassen.`,
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
            content: `Die Transformation zu einer nachhaltigen Prozessindustrie ist nicht nur eine ökologische Notwendigkeit, sondern auch ein entscheidender Wettbewerbsfaktor. PROMAX entwickelt ganzheitliche Konzepte für Kreislaufwirtschaft, die Umweltschutz und Wirtschaftlichkeit optimal vereinen.

            **Innovative Recycling-Technologien**
            
            Unsere neuesten Anlagen verwandeln industrielle Abfallströme in wertvolle Rohstoffe. Durch den Einsatz fortschrittlicher Separationstechnologien können wir bis zu 95% der Materialien in den Produktionskreislauf zurückführen. Besonders erfolgreich sind unsere Lösungen in der Chemie- und Pharmaindustrie, wo komplexe Molekülstrukturen präzise getrennt und wiederverwendet werden.
            
            **Energieeffizienz durch intelligente Vernetzung**
            
            Durch die Kopplung verschiedener Produktionsprozesse entstehen Synergien, die den Gesamtenergieverbrauch um bis zu 60% reduzieren. Abwärme aus einem Prozess wird direkt als Eingangswärme für nachgelagerte Produktionsschritte genutzt. Diese intelligente Energiekaskadierung ist ein Kernbestandteil unserer nachhaltigen Anlagenkonzepte.
            
            **CO2-neutrale Produktion bis 2030**
            
            Unser ambitioniertes Ziel ist es, bis 2030 alle von uns geplanten Anlagen CO2-neutral zu betreiben. Dazu setzen wir auf eine Kombination aus erneuerbaren Energien, Carbon Capture-Technologien und geschlossenen Materialkreisläufen. Erste Pilotprojekte zeigen bereits heute, dass eine klimaneutrale Industrie nicht nur möglich, sondern auch wirtschaftlich vorteilhaft ist.`,
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
            content: `Die Smart Factory ist keine Zukunftsvision mehr, sondern gelebte Realität in modernen Produktionsanlagen. PROMAX entwickelt intelligente Fertigungssysteme, die Flexibilität, Effizienz und Qualität auf ein neues Level heben.

            **Echtzeit-Vernetzung durch 5G**
            
            Der neue Mobilfunkstandard 5G ermöglicht es erstmals, alle Komponenten einer Produktionsanlage in Echtzeit zu vernetzen. Latenzzeiten unter einer Millisekunde erlauben präzise Koordination zwischen Maschinen, Robotern und Qualitätskontrollsystemen. Diese ultraschnelle Kommunikation ist die Grundlage für adaptive Fertigungsprozesse.
            
            **Edge Computing für dezentrale Intelligenz**
            
            Durch die Verlagerung von KI-Algorithmen direkt an die Produktionsmaschinen entstehen autonome Fertigungsinseln, die selbstständig Entscheidungen treffen können. Diese dezentrale Intelligenz reduziert Ausfallzeiten und erhöht die Produktionsflexibilität erheblich.
            
            **Digital Twin-Technologie**
            
            Jede von uns entwickelte Anlage besitzt einen digitalen Zwilling, der das Verhalten der realen Anlage in Echtzeit simuliert. Diese virtuellen Modelle ermöglichen es, Optimierungen zunächst digital zu testen, bevor sie in der realen Produktion implementiert werden. So können wir Stillstandszeiten auf ein Minimum reduzieren.`,
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
            content: `Die Pharmaindustrie durchläuft derzeit eine der größten Transformationen ihrer Geschichte. Digitale Technologien ermöglichen nicht nur effizientere Produktionsprozesse, sondern auch eine bessere Rückverfolgbarkeit und höhere Arzneimittelsicherheit.

            **Blockchain für lückenlose Rückverfolgbarkeit**
            
            Jeder Produktionsschritt wird in einer unveränderlichen Blockchain dokumentiert. Dies gewährleistet absolute Transparenz von der Rohstoffbeschaffung bis zur Auslieferung an den Patienten. Fälschungen werden dadurch praktisch unmöglich.
            
            **Automatisierte GMP-Compliance**
            
            Unsere KI-Systeme überwachen kontinuierlich alle relevanten Parameter und dokumentieren automatisch die Einhaltung der Good Manufacturing Practice-Richtlinien. Dies reduziert den Aufwand für Compliance-Dokumentation um über 80% und minimiert gleichzeitig das Risiko von Regelabweichungen.
            
            **Personalisierte Medizin durch flexible Produktion**
            
            Modulare Produktionsanlagen ermöglichen es, auch kleine Chargen individualisierter Medikamente wirtschaftlich herzustellen. Dies ebnet den Weg für die personalisierte Medizin und maßgeschneiderte Therapien.`,
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
            content: `Wasserstoff gilt als einer der wichtigsten Energieträger der Zukunft. PROMAX entwickelt innovative Anlagen für die Produktion, Speicherung und Nutzung von grünem Wasserstoff in industriellem Maßstab.

            **Elektrolyse-Technologien der nächsten Generation**
            
            Unsere hocheffizienten Elektrolyseure erreichen Wirkungsgrade von über 85% und können flexibel auf schwankende Strommengen aus erneuerbaren Energien reagieren. Durch modularen Aufbau sind sie skalierbar von kleinen Pilotanlagen bis hin zu Gigawatt-Produktionsstätten.
            
            **Sichere Wasserstoffspeicherung**
            
            Die Entwicklung sicherer und effizienter Speichersysteme ist entscheidend für den Erfolg der Wasserstoffwirtschaft. Unsere innovativen Drucktanksysteme und Flüssigspeicher-Technologien ermöglichen eine langfristige und verlustfreie Lagerung auch großer Wasserstoffmengen.
            
            **Integration in bestehende Infrastrukturen**
            
            Besonders erfolgreich sind unsere Retrofitting-Lösungen, mit denen bestehende Erdgasanlagen für Wasserstoff umgerüstet werden können. Dies beschleunigt den Übergang zu einer wasserstoffbasierten Energieversorgung erheblich.`,
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
            content: `Die zunehmende Vernetzung von Industrieanlagen bringt neue Sicherheitsherausforderungen mit sich. PROMAX entwickelt umfassende Cybersecurity-Konzepte, die sowohl präventive als auch reaktive Sicherheitsmaßnahmen umfassen.

            **Zero Trust-Architektur**
            
            Unser Sicherheitskonzept basiert auf dem Prinzip "Never trust, always verify". Jeder Zugriff auf kritische Systeme wird kontinuierlich validiert und autorisiert. Multi-Faktor-Authentifizierung und verschlüsselte Kommunikation sind dabei Standard.
            
            **KI-basierte Bedrohungserkennung**
            
            Machine Learning-Algorithmen analysieren kontinuierlich Netzwerkverkehr und Systemverhalten, um Anomalien und potenzielle Bedrohungen zu identifizieren. Unser System erkennt auch bisher unbekannte Angriffsmuster und kann automatisch Gegenmaßnahmen einleiten.
            
            **Incident Response und Recovery**
            
            Für den Fall eines erfolgreichen Angriffs haben wir umfassende Notfallpläne entwickelt, die eine schnelle Wiederherstellung des Betriebs gewährleisten. Regelmäßige Sicherheitsübungen stellen sicher, dass alle Beteiligten optimal vorbereitet sind.`,
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
                                    <div className={styles.metaItem}>
                                        <Clock size={16} />
                                        <span>{selectedArticle.readTime}</span>
                                    </div>
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