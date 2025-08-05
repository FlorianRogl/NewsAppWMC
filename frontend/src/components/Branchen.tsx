

const BranchesOverview = () => {
    const branches = [
        {
            title: "Chemie",
            description: "Industrieller Anlagenbau für Chemieunternehmen mit umfassendem Know-how in der Verfahrenstechnik und Anlagenplanung. Von thermischen Verfahren bis zu komplexen chemischen Produktionsprozessen - wir bieten maßgeschneiderte Lösungen für höchste Sicherheitsstandards.",
            services: ["Layoutplanung", "Stahlbauleitplanung", "Rohrleitungsdetailplanung", "ROHR 2 Berechnung", "Montageüberwachung", "Qualitätskontrolle"],
            projects: ["Salzanlage - Thermisches Verfahren", "Rohstoffbunker - Projektabwicklung", "Chemisches Verfahren - Anlagendetailplanung", "Abluftwäscheranlage - Dehnungskonzept"],
            image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=400&fit=crop"
        },
        {
            title: "Energie & Umwelt",
            description: "Nachhaltige Energielösungen und Umweltplanung für moderne Industrieanlagen. Fokus auf Energieeffizienz, Emissionsreduktion und umweltschonende Technologien für eine klimaneutrale Zukunft.",
            services: ["Kanal und Rohrleitungstechnik", "Ausschreibungsunterlagen", "Angebotsvergleiche", "Layout Planung", "Rohrleitungsplanung"],
            projects: ["Energieeffizienz-Konzepte", "Umweltschutzanlagen", "Regenerative Energiesysteme", "Emissionsminderung"],
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=400&fit=crop"
        },
        {
            title: "Pharma",
            description: "Hochspezialisierte Planungsleistungen für die pharmazeutische Industrie unter Berücksichtigung strenger GMP-Richtlinien und Qualitätsstandards. Von der ersten Konzeption bis zur Qualifizierungsassistenz.",
            services: ["Anlagentechnische Projektleitung", "Schema- und Layout-Planung", "Lieferantenmonitoring", "User requirement specifications (URS)", "Herstellerüberwachung", "Qualifizierungsassistenz"],
            projects: ["Anlagenkonzept", "Material- und Personalflusspläne", "Logistikkonzept", "Dokumentationserstellung"],
            image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=400&fit=crop"
        },
        {
            title: "Papier & Zellstoff",
            description: "Umfassende Projektbetreuung für die Papier- und Zellstoffindustrie von der Rohstoffaufbereitung bis zur fertigen Papierproduktion. Expertise in nachhaltigen Produktionsverfahren und Recycling-Technologien.",
            services: ["Detailkonstruktion", "Rohrleitungstechnik", "Montageaufsicht", "Anlagenlayout", "Simulation"],
            projects: ["Zellstoffanlagen", "Papiermaschinen-Layout", "Recycling-Systeme", "Energierückgewinnung"],
            image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&h=400&fit=crop"
        },
        {
            title: "Weitere Branchen",
            description: "Vielseitige Expertise in Lebensmittelindustrie, Recycling und anderen Industriezweigen. Anpassungsfähige Lösungen für spezifische Branchenanforderungen mit innovativen Ansätzen.",
            services: ["Projektierung", "Projektmanagement", "Site Services", "Organisationsberatung", "Planung"],
            projects: ["Lebensmittelanlagen", "Recycling-Technologien", "Industrielle Automation", "Maßgeschneiderte Lösungen"],
            image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=400&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="bg-gray-900 text-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl font-light mb-4 tracking-wide">BRANCHEN</h1>
                    <div className="w-24 h-0.5 bg-white mb-8"></div>
                    <p className="text-xl font-light text-gray-300 max-w-3xl leading-relaxed">
                        Spezialisierte Planungsleistungen und Projektmanagement für industrielle Anlagen in verschiedenen Branchen.
                    </p>
                </div>
            </div>

            {/* Hero Image Section */}
            <div className="relative h-64 bg-gray-100 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&h=300&fit=crop"
                    alt="Industrial facility overview"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h2 className="text-2xl font-light mb-2">Know-how und Leidenschaft für Ihr Projekt</h2>
                        <p className="text-sm opacity-90">Über 20 Jahre Erfahrung im industriellen Anlagenbau</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Branches Grid */}
                <section>
                    <h2 className="text-2xl font-light mb-12 text-gray-900">Branchenspezialisierung</h2>

                    <div className="space-y-20">
                        {branches.map((branch, index) => (
                            <div key={index} className="border-b border-gray-200 pb-20 last:border-b-0">
                                <div className="grid grid-cols-2 gap-12 items-center">

                                    {/* Content Side */}
                                    <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                                        <div className="flex items-start gap-4 mb-6">
                                            <span className="text-6xl font-thin text-gray-300">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <div>
                                                <h3 className="text-2xl font-light text-gray-900 mb-2">
                                                    {branch.title}
                                                </h3>
                                                <div className="w-12 h-0.5 bg-gray-900"></div>
                                            </div>
                                        </div>

                                        <p className="text-gray-700 leading-relaxed mb-8">
                                            {branch.description}
                                        </p>

                                        <div className="grid grid-cols-2 gap-8">
                                            {/* Services */}
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-900 mb-4 uppercase tracking-wider">
                                                    Kernleistungen
                                                </h4>
                                                <ul className="space-y-2">
                                                    {branch.services.map((service, serviceIndex) => (
                                                        <li key={serviceIndex} className="text-sm text-gray-600 flex items-center">
                                                            <span className="w-1 h-1 bg-gray-400 mr-3 flex-shrink-0"></span>
                                                            {service}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Projects */}
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-900 mb-4 uppercase tracking-wider">
                                                    Projektbeispiele
                                                </h4>
                                                <ul className="space-y-2">
                                                    {branch.projects.map((project, projectIndex) => (
                                                        <li key={projectIndex} className="text-sm text-gray-600 flex items-center">
                                                            <span className="w-1 h-1 bg-gray-400 mr-3 flex-shrink-0"></span>
                                                            {project}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Side */}
                                    <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                                        <div className="relative">
                                            <img
                                                src={branch.image}
                                                alt={`${branch.title} industrial facility`}
                                                className="w-full h-80 object-cover rounded-sm"
                                            />
                                            <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 text-xs font-medium text-gray-900">
                                                {branch.title.toUpperCase()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Project Approach */}
                <section className="mt-20 bg-gray-50 p-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl font-light mb-8 text-gray-900">Unser Projektansatz</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Von der ersten Konzeptphase bis zur erfolgreichen Inbetriebnahme begleiten wir Sie mit umfassendem Engineering-Know-how. Unsere interdisziplinären Teams entwickeln maßgeschneiderte Lösungen, die höchsten technischen und wirtschaftlichen Anforderungen entsprechen.
                        </p>

                        <div className="grid grid-cols-4 gap-8 mt-12">
                            <div className="text-center">
                                <div className="w-16 h-16 border border-gray-300 mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-sm font-medium">01</span>
                                </div>
                                <h4 className="text-sm font-medium text-gray-900 mb-2">Konzeption</h4>
                                <p className="text-xs text-gray-600">Bedarfsanalyse und Lösungskonzept</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 border border-gray-300 mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-sm font-medium">02</span>
                                </div>
                                <h4 className="text-sm font-medium text-gray-900 mb-2">Planung</h4>
                                <p className="text-xs text-gray-600">Detailengineering und Ausführungsplanung</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 border border-gray-300 mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-sm font-medium">03</span>
                                </div>
                                <h4 className="text-sm font-medium text-gray-900 mb-2">Umsetzung</h4>
                                <p className="text-xs text-gray-600">Projektmanagement und Montageaufsicht</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 border border-gray-300 mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-sm font-medium">04</span>
                                </div>
                                <h4 className="text-sm font-medium text-gray-900 mb-2">Inbetriebnahme</h4>
                                <p className="text-xs text-gray-600">Commissioning und Support</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BranchesOverview;