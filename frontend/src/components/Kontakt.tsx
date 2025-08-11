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
            {/* Hero Section with Modern Gradient */}
            <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-800 overflow-hidden">
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

    {/* Main Content Section */}
    <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Contact Form */}
                <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nachricht senden</h2>
                        <p className="text-gray-600">Erzählen Sie uns von Ihrem Projekt. Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Ihr vollständiger Name"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    E-Mail *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="ihre.email@unternehmen.com"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Unternehmen
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    placeholder="Ihr Unternehmen"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Telefon
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="+43 123 456 789"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Betreff *
                            </label>
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none"
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
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Ihre Nachricht *
                            </label>
                            <textarea
                                name="message"
                                rows={6}
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage detailliert..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none resize-none"
                                required
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <Send className="w-5 h-5" />
                            Nachricht senden
                        </button>

                        <p className="text-xs text-gray-500 text-center">
                            * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                        </p>
                    </div>
                </div>

                {/* Office Information */}
                <div className="space-y-8">
                    {/* Main Office */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-2">
                                            HAUPTSITZ
                                        </span>
                                <h3 className="text-2xl font-bold text-gray-900">Steiermark</h3>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>

                        <div className="mb-6">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="PROMAX Hauptsitz"
                                className="w-full h-40 object-cover rounded-xl"
                            />
                        </div>

                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold text-gray-900">PROMAX Project Management GesmbH</p>
                                <p className="text-gray-600">Parkring 18/F</p>
                                <p className="text-gray-600">8074 Raaba-Grambach</p>
                                <p className="text-gray-600">Österreich</p>
                            </div>

                            <div className="flex items-center text-gray-600">
                                <Phone className="w-4 h-4 mr-2" />
                                <span>+43 (0) 316 241 393</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <Mail className="w-4 h-4 mr-2" />
                                <span>office@promax.at</span>
                            </div>
                        </div>
                    </div>

                    {/* Vienna Office */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full mb-2">
                                            ZWEIGSTELLE
                                        </span>
                                <h3 className="text-2xl font-bold text-gray-900">Wien</h3>
                            </div>
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-orange-600" />
                            </div>
                        </div>

                        <div className="mb-6">
                            <img
                                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="PROMAX Wien"
                                className="w-full h-40 object-cover rounded-xl"
                            />
                        </div>

                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold text-gray-900">PROMAX Project Management GesmbH</p>
                                <p className="text-gray-600">Löwengasse 3/5</p>
                                <p className="text-gray-600">1030 Wien</p>
                                <p className="text-gray-600">Österreich</p>
                            </div>

                            <div className="flex items-center text-gray-600">
                                <Phone className="w-4 h-4 mr-2" />
                                <span>+43 (0) 1 710 7748</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <Mail className="w-4 h-4 mr-2" />
                                <span>office@promax.at</span>
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

    {/* CTA Section */}
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
                Bereit für Ihr nächstes Projekt?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam Ihre Vision verwirklichen. Kontaktieren Sie uns noch heute
                für ein unverbindliches Beratungsgespräch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="tel:+433162414393"
                    className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                >
                    <Phone className="w-5 h-5" />
                    Jetzt anrufen
                </a>
                <a
                    href="mailto:office@promax.at"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all inline-flex items-center justify-center gap-2"
                >
                    <Mail className="w-5 h-5" />
                    E-Mail schreiben
                </a>
            </div>
        </div>
    </section>
</div>
);
};

export default Kontakt;