import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Users, MessageCircle } from 'lucide-react';

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
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Here you would typically send the data to your backend
        alert('Nachricht gesendet! Wir melden uns bald bei Ihnen.');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Single Blue Color */}
            <section className="relative bg-[#1e3767] overflow-hidden">
                <div className="absolute inset-0"></div>

                <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Wir sind für Sie da
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                            Kontakt
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
                            Lassen Sie uns über Ihr nächstes Projekt sprechen. Unsere Experten stehen Ihnen
                            mit individueller Beratung zur Seite.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-blue-100">
                            <div className="flex items-center">
                                <Clock className="w-5 h-5 mr-2" />
                                <span>Antwort innerhalb von 24h</span>
                            </div>
                            <div className="flex items-center">
                                <Users className="w-5 h-5 mr-2" />
                                <span>Persönliche Beratung</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Contact Cards */}
            <section className="relative -mt-16 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Phone Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <Phone className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Sofort erreichbar</h3>
                            <p className="text-gray-600 mb-4">Rufen Sie uns an für eine direkte Beratung</p>
                            <div className="space-y-2">
                                <a href="tel:+433162414393" className="block text-blue-600 hover:text-blue-800 font-medium transition-colors">
                                    +43 (0) 316 241 393
                                </a>
                                <a href="tel:+43117107748" className="block text-blue-600 hover:text-blue-800 font-medium transition-colors">
                                    +43 (0) 1 710 7748
                                </a>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                                <Mail className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">E-Mail Kontakt</h3>
                            <p className="text-gray-600 mb-4">Schreiben Sie uns Ihre Anfrage</p>
                            <a href="mailto:office@promax.at" className="text-orange-600 hover:text-orange-800 font-medium transition-colors">
                                office@promax.at
                            </a>
                        </div>

                        {/* Location Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                                <MapPin className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Unsere Standorte</h3>
                            <p className="text-gray-600 mb-4">Besuchen Sie uns vor Ort</p>
                            <div className="space-y-1 text-sm text-gray-600">
                                <p>Raaba-Grambach (Hauptsitz)</p>
                                <p>Wien (Zweigstelle)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Section - Professional Layout */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Contact Form - Modern Professional Design */}
                        <div className="bg-white rounded-lg shadow-sm p-8 lg:p-10 border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-3">Kontakt aufnehmen</h2>
                                <p className="text-gray-600 leading-relaxed">Beschreiben Sie uns Ihr Anliegen. Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.</p>
                            </div>

                            <div className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Ihr vollständiger Name"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1e3767] focus:ring-2 focus:ring-[#1e3767]/10 transition-all duration-200 outline-none text-gray-900"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            E-Mail *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="ihre.email@unternehmen.com"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1e3767] focus:ring-2 focus:ring-[#1e3767]/10 transition-all duration-200 outline-none text-gray-900"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Unternehmen
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            placeholder="Ihr Unternehmen"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1e3767] focus:ring-2 focus:ring-[#1e3767]/10 transition-all duration-200 outline-none text-gray-900"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Telefon
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="+43 123 456 789"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1e3767] focus:ring-2 focus:ring-[#1e3767]/10 transition-all duration-200 outline-none text-gray-900"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Betreff *
                                    </label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1e3767] focus:ring-2 focus:ring-[#1e3767]/10 transition-all duration-200 outline-none text-gray-900"
                                        required
                                    >
                                        <option value="">Wählen Sie ein Thema</option>
                                        <option value="projektmanagement">Projektmanagement</option>
                                        <option value="beratung">Beratung</option>
                                        <option value="karriere">Karriere</option>
                                        <option value="allgemein">Allgemeine Anfrage</option>
                                        <option value="sonstiges">Sonstiges</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Ihre Nachricht *
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage detailliert..."
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1e3767] focus:ring-2 focus:ring-[#1e3767]/10 transition-all duration-200 outline-none resize-none text-gray-900"
                                        required
                                    />
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-[#1e3767] hover:bg-[#1e3767]/90 text-white font-medium py-3.5 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg"
                                >
                                    <Send className="w-5 h-5" />
                                    Nachricht senden
                                </button>

                                <p className="text-xs text-gray-500 text-center leading-relaxed">
                                    * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                                </p>
                            </div>
                        </div>

                        {/* Office Information - Professional Design */}
                        <div className="space-y-6">
                            {/* Main Office */}
                            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <span className="inline-block px-3 py-1 bg-[#1e3767]/10 text-[#1e3767] text-xs font-medium rounded-full mb-3">
                                            HAUPTSITZ
                                        </span>
                                        <h3 className="text-xl font-bold text-gray-900">Raaba-Grambach</h3>
                                    </div>
                                    <div className="w-10 h-10 bg-[#1e3767]/10 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-[#1e3767]" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="pb-4 border-b border-gray-100">
                                        <p className="font-medium text-gray-900 mb-1">PROMAX Project Management GesmbH</p>
                                        <div className="text-gray-600 text-sm space-y-0.5">
                                            <p>Parkring 18/F</p>
                                            <p>8074 Raaba-Grambach</p>
                                            <p>Österreich</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center text-gray-700">
                                            <Phone className="w-4 h-4 mr-3 text-[#1e3767]" />
                                            <span className="text-sm">+43 (0) 316 241 393</span>
                                        </div>
                                        <div className="flex items-center text-gray-700">
                                            <Mail className="w-4 h-4 mr-3 text-[#1e3767]" />
                                            <span className="text-sm">office@promax.at</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Vienna Office */}
                            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <span className="inline-block px-3 py-1 bg-[#1e3767]/10 text-[#1e3767] text-xs font-medium rounded-full mb-3">
                                            ZWEIGSTELLE
                                        </span>
                                        <h3 className="text-xl font-bold text-gray-900">Wien</h3>
                                    </div>
                                    <div className="w-10 h-10 bg-[#1e3767]/10 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-[#1e3767]" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="pb-4 border-b border-gray-100">
                                        <p className="font-medium text-gray-900 mb-1">PROMAX Project Management GesmbH</p>
                                        <div className="text-gray-600 text-sm space-y-0.5">
                                            <p>Löwengasse 3/5</p>
                                            <p>1030 Wien</p>
                                            <p>Österreich</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center text-gray-700">
                                            <Phone className="w-4 h-4 mr-3 text-[#1e3767]" />
                                            <span className="text-sm">+43 (0) 1 710 7748</span>
                                        </div>
                                        <div className="flex items-center text-gray-700">
                                            <Mail className="w-4 h-4 mr-3 text-[#1e3767]" />
                                            <span className="text-sm">office@promax.at</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">So finden Sie uns</h2>
                        <p className="text-xl text-gray-600">Unser Hauptsitz in Raaba-Grambach, südöstlich von Graz</p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.7289447742!2d15.4461!3d47.0379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476e3597f3b5c5c5%3A0x5f6c5a5a5a5a5a5a!2sParkring%2018%2C%208074%20Raaba-Grambach%2C%20Austria!5e0!3m2!1sde!2sat!4v1"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="PROMAX Standort"
                            className="w-full"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Kontakt;