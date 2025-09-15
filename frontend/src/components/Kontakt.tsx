import {Helmet} from "@vuer-ai/react-helmet-async";

const Kontakt = () => {
    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Kontakt - PROMAX Project Management",
                        "description": "Kontaktieren Sie PROMAX Project Management für Ihr Industrieanlagenbau-Projekt. Telefon, E-Mail und Adresse.",
                        "url": "https://www.promax.at/Kontakt",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "PROMAX Project Management GesmbH",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Parkring 18/F",
                                "addressLocality": "Raaba-Grambach",
                                "postalCode": "8074",
                                "addressCountry": "AT"
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+43 316 241 393",
                                "email": "office@promax.at",
                                "contactType": "customer service"
                            }
                        }
                    })}
                </script>
                <title>Kontakt | PROMAX Project Management</title>
                <meta name="description" content="Kontaktieren Sie uns für Projektanfragen, Beratung oder allgemeine Anfragen. Wir freuen uns auf Ihre Nachricht."/>
                <link rel="canonical" href="https://www.promax.at/Kontakt"/>
            </Helmet>
            <div className="min-h-screen bg-white">
                {/* Header mit mehr Farbe */}
                <section className="bg-[#1e3767] relative overflow-hidden">
                    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
                        <h1 className="text-5xl lg:text-6xl font-light text-white mb-4">Kontakt</h1>
                        <p className="text-lg text-[#d1d8dc] max-w-2xl">
                            Wir freuen uns auf Ihre Kontaktaufnahme und stehen Ihnen gerne für
                            ein persönliches Gespräch zur Verfügung.
                        </p>
                    </div>
                </section>

                {/* Main Content - Jetzt mit Kontaktinfo links und Karten rechts */}
                <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

                        {/* Linke Spalte - Kontaktinformationen */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Direkte Kontaktmöglichkeiten */}
                            <div>
                                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-light text-gray-900 mb-4">
                                    Sprechen Sie mit{' '}
                                    <span className="text-[#1e3767] font-semibold">
                                        uns
                                    </span>
                                </h2>
                                <div className="w-20 h-1 bg-[#d97539] mb-8"></div>

                                <div className="space-y-8">
                                    {/* Telefon Graz */}
                                    <div className="group">
                                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Telefon Graz</p>
                                        <a href="tel:+433162414393"
                                           className="text-lg text-[#1e3767] hover:text-[#d97539] transition-colors block font-medium">
                                            +43 316 241 4393
                                        </a>
                                    </div>

                                    {/* Telefon Wien */}
                                    <div className="group">
                                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Telefon Wien</p>
                                        <a href="tel:+431234567890"
                                           className="text-lg text-[#1e3767] hover:text-[#d97539] transition-colors block font-medium">
                                            +43 1 234 567 890
                                        </a>
                                    </div>

                                    <div className="group">
                                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">E-Mail</p>
                                        <a href="mailto:office@promax.at"
                                           className="text-lg text-[#1e3767] hover:text-[#d97539] transition-colors font-medium">
                                            office@promax.at
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Standorte mit Farbe */}
                            <div>
                                <h3 className="text-3xl sm:text-4xl lg:text-4xl font-light text-gray-900 mb-4">
                                    Unsere{' '}
                                    <span className="text-[#1e3767] font-semibold">
                                        Standorte
                                    </span>
                                </h3>
                                <div className="w-20 h-1 bg-[#d97539] mb-8"></div>

                                <div className="space-y-8">
                                    {/* Hauptsitz */}
                                    <div
                                        className="border-l-3 border-[#1e3767] pl-6 hover:border-[#d97539] transition-colors">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-2 h-2 bg-[#1e3767] rounded-full"></div>
                                            <h4 className="font-semibold text-[#1e3767] text-base">Hauptsitz Raaba-Grambach</h4>
                                        </div>
                                        <address className="not-italic text-gray-500 text-sm leading-relaxed">
                                            PROMAX Project Management GesmbH<br/>
                                            Parkring 18/F<br/>
                                            8074 Raaba-Grambach<br/>
                                            Österreich
                                        </address>
                                    </div>

                                    {/* Wien */}
                                    <div className="border-l-3 border-[#d97539] pl-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-2 h-2 bg-[#d97539] rounded-full"></div>
                                            <h4 className="font-semibold text-[#1e3767] text-base">Zweigstelle Wien</h4>
                                        </div>
                                        <address className="not-italic text-gray-500 text-sm leading-relaxed">
                                            PROMAX Project Management GesmbH<br/>
                                            Löwengasse 3/5<br/>
                                            1030 Wien<br/>
                                            Österreich
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Rechte Spalte - Anfahrt/Karten */}
                        <div className="lg:col-span-3">
                            <div>
                                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-light text-gray-900 mb-4">
                                    Anfahrt zu unseren{' '}
                                    <span className="text-[#1e3767] font-semibold">
                                        Standorten
                                    </span>
                                </h2>
                                <div className="w-20 h-1 bg-[#d97539] mb-8"></div>

                                <div className="space-y-6">
                                    {/* Graz Karte */}
                                    <div className="bg-white shadow-sm border border-gray-100 overflow-hidden rounded-lg">
                                        <div className="p-4 sm:p-6 bg-[#1e3767]">
                                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Hauptsitz Raaba-Grambach</h3>
                                            <p className="text-[#d1d8dc] text-sm">Parkring 18/F, 8074 Raaba-Grambach</p>
                                        </div>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.7289447742!2d15.4461!3d47.0379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476e35925b8c0c71%3A0x5b8c0c71b8c0c71b!2sParkring%2018%2C%208074%20Raaba-Grambach%2C%20Austria!5e0!3m2!1sde!2sat!4v1"
                                            width="100%"
                                            height="300"
                                            style={{border: 0}}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="PROMAX Standort Graz"
                                            className="w-full"
                                        />
                                    </div>

                                    {/* Wien Karte */}
                                    <div className="bg-white shadow-sm border border-gray-100 overflow-hidden rounded-lg">
                                        <div className="p-4 sm:p-6 bg-[#d97539]">
                                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Zweigstelle Wien</h3>
                                            <p className="text-white text-opacity-90 text-sm">Löwengasse 3/5, 1030 Wien</p>
                                        </div>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.8234567891!2d16.3897!3d48.1951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d078c3c9e4d4d%3A0x1e3f1e3f1e3f1e3f!2sL%C3%B6wengasse%203%2C%201030%20Wien%2C%20Austria!5e0!3m2!1sde!2sat!4v1"
                                            width="100%"
                                            height="300"
                                            style={{border: 0}}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="PROMAX Standort Wien"
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Kontakt;