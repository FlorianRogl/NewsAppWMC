import {useState} from 'react';
import {Send, Clock, CheckCircle} from 'lucide-react';
import {Helmet} from "@vuer-ai/react-helmet-async";

const Kontakt = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Vielen Dank für Ihre Nachricht. Wir melden uns innerhalb von 24 Stunden bei Ihnen.');
    };

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

                        {/* Quick Info Pills */}
                        <div className="flex flex-wrap gap-4 mt-8">
                            <div
                                className="flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur px-4 py-2 rounded-full">
                                <Clock className="w-4 h-4 text-[#d97539]"/>
                                <span className="text-sm text-white">24h Antwortzeit</span>
                            </div>
                            <div
                                className="flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur px-4 py-2 rounded-full">
                                <CheckCircle className="w-4 h-4 text-[#d97539]"/>
                                <span className="text-sm text-white">Persönliche Beratung</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content - Zweispaltig */}
                <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

                        {/* Linke Spalte - Kontaktinformationen */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Direkte Kontaktmöglichkeiten */}
                            <div>
                                <h2 className="text-2xl font-light text-[#1e3767] mb-8">
                                    Sprechen Sie mit uns
                                </h2>

                                <div className="space-y-6">
                                    <div className="group">
                                        <p className="text-sm text-[#9ba8b3] uppercase tracking-wider mb-2">Telefon</p>
                                        <a href="tel:+433162414393"
                                           className="text-lg text-[#1e3767] hover:text-[#d97539] transition-colors block font-medium">
                                            +43 316 241 393
                                        </a>
                                    </div>

                                    <div className="group">
                                        <p className="text-sm text-[#9ba8b3] uppercase tracking-wider mb-2">E-Mail</p>
                                        <a href="mailto:office@promax.at"
                                           className="text-lg text-[#1e3767] hover:text-[#d97539] transition-colors font-medium">
                                            office@promax.at
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Standorte mit Farbe */}
                            <div>
                                <h3 className="text-xl font-light text-[#1e3767] mb-6">Unsere Standorte</h3>

                                <div className="space-y-8">
                                    {/* Hauptsitz */}
                                    <div
                                        className="border-l-3 border-[#1e3767] pl-6 hover:border-[#d97539] transition-colors">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-2 h-2 bg-[#1e3767] rounded-full"></div>
                                            <h4 className="font-medium text-[#1e3767]">Hauptsitz Raaba-Grambach</h4>
                                        </div>
                                        <address className="not-italic text-[#9ba8b3] text-sm leading-relaxed">
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
                                            <h4 className="font-medium text-[#1e3767]">Zweigstelle Wien</h4>
                                        </div>
                                        <address className="not-italic text-[#9ba8b3] text-sm leading-relaxed">
                                            PROMAX Project Management GesmbH<br/>
                                            Löwengasse 3/5<br/>
                                            1030 Wien<br/>
                                            Österreich
                                        </address>
                                    </div>
                                </div>
                            </div>

                            {/* Öffnungszeiten mit Akzentfarbe */}
                            <div className="bg-[#d1d8dc] bg-opacity-10 p-6 rounded-lg">
                                <h3 className="text-xl font-light text-[#1e3767] mb-6">Geschäftszeiten</h3>
                                <div className="space-y-3 text-[#9ba8b3]">
                                    <div className="flex justify-between items-center">
                                        <span>Montag - Donnerstag</span>
                                        <span
                                            className="text-[#1e3767] font-medium bg-[#d97539] bg-opacity-10 px-3 py-1 rounded">08:00 - 17:00</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Freitag</span>
                                        <span
                                            className="text-[#1e3767] font-medium bg-[#d97539] bg-opacity-10 px-3 py-1 rounded">08:00 - 14:00</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Samstag - Sonntag</span>
                                        <span className="text-[#9ba8b3]">Geschlossen</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Rechte Spalte - Kontaktformular */}
                        <div className="lg:col-span-3">
                            <div
                                className="bg-gradient-to-br from-[#d1d8dc] from-10% to-transparent to-90% bg-opacity-20 p-10 rounded-lg">
                                <h2 className="text-2xl font-light text-[#1e3767] mb-2">
                                    Schreiben Sie uns
                                </h2>
                                <p className="text-[#9ba8b3] mb-8">
                                    Wir antworten innerhalb eines Werktages.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm text-[#1e3767] mb-2 font-medium">
                                                Vor- und Nachname *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-[#9ba8b3] focus:border-[#d97539] outline-none transition-colors text-[#1e3767] placeholder-[#9ba8b3]"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-[#1e3767] mb-2 font-medium">
                                                E-Mail-Adresse *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-[#9ba8b3] focus:border-[#d97539] outline-none transition-colors text-[#1e3767] placeholder-[#9ba8b3]"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm text-[#1e3767] mb-2 font-medium">
                                                Unternehmen
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-[#9ba8b3] focus:border-[#d97539] outline-none transition-colors text-[#1e3767] placeholder-[#9ba8b3]"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-[#1e3767] mb-2 font-medium">
                                                Telefonnummer
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-[#9ba8b3] focus:border-[#d97539] outline-none transition-colors text-[#1e3767] placeholder-[#9ba8b3]"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm text-[#1e3767] mb-2 font-medium">
                                            Betreff *
                                        </label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-[#9ba8b3] focus:border-[#d97539] outline-none transition-colors text-[#1e3767] cursor-pointer"
                                            required
                                        >
                                            <option value="">Bitte wählen</option>
                                            <option value="projektanfrage">Projektanfrage</option>
                                            <option value="beratung">Beratung</option>
                                            <option value="karriere">Karriere</option>
                                            <option value="allgemein">Allgemeine Anfrage</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm text-[#1e3767] mb-2 font-medium">
                                            Ihre Nachricht *
                                        </label>
                                        <textarea
                                            name="message"
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-[#9ba8b3] focus:border-[#d97539] outline-none transition-colors resize-none text-[#1e3767] placeholder-[#9ba8b3]"
                                            placeholder="Beschreiben Sie Ihr Anliegen..."
                                            required
                                        />
                                    </div>

                                    <div className="flex items-center justify-between pt-6">
                                        <p className="text-xs text-[#9ba8b3]">
                                            * Pflichtfelder
                                        </p>
                                        <button
                                            type="submit"
                                            className="bg-[#d97539] hover:bg-[#1e3767] text-white px-8 py-3 transition-all duration-300 flex items-center gap-2 group font-medium"
                                        >
                                            Nachricht senden
                                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Datenschutzhinweis mit Akzent */}
                            <div className="mt-8 p-6 bg-[#1e3767] bg-opacity-5 border-l-4 border-[#d97539]">
                                <p className="text-sm text-[#9ba8b3] leading-relaxed">
                                    <strong className="text-[#1e3767]">Datenschutz:</strong> Ihre Angaben werden
                                    vertraulich behandelt und ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
                                    Weitere Informationen finden Sie in unserer Datenschutzerklärung.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Karte Section - IN FARBE */}
                <section className="border-t border-[#d1d8dc] bg-[#d1d8dc] bg-opacity-10">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                        <div className="mb-12">
                            <h2 className="text-3xl font-light text-[#1e3767] mb-4">Anfahrt</h2>
                        </div>

                        <div className="bg-white shadow-sm border border-gray-100 overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.7289447742!2d15.4461!3d47.0379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476e3597f3b5c5c5%3A0x5f6c5a5a5a5a5a5a!2sParkring%2018%2C%208074%20Raaba-Grambach%2C%20Austria!5e0!3m2!1sde!2sat!4v1"
                                width="100%"
                                height="400"
                                style={{border: 0}}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="PROMAX Standort"
                                className="w-full"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Kontakt;