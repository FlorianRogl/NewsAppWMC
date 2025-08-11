import { useState } from 'react';
import { Phone, Mail, MapPin, Send} from 'lucide-react';
import {useNavigate} from "react-router-dom";

const Kontakt2 = () => {
    const navigate = useNavigate();
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
        alert('Nachricht gesendet! Wir melden uns bald bei Ihnen.');
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Clean Hero Section */}
            <section className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-6xl font-light mb-6 tracking-tight text-blue-900">
                            Kontakt
                        </h1>
                        <div className="w-24 h-0.5 bg-orange-600 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Lassen Sie uns über Ihr nächstes Projekt sprechen. Wir freuen uns auf Ihre Anfrage
                            und beraten Sie gerne zu Ihren individuellen Anforderungen.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content - Form and Contact Info */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

                        {/* Contact Form - Takes 3 columns */}
                        <div className="lg:col-span-3">
                            <div className="bg-white p-12 shadow-sm border border-gray-100">
                                <div className="mb-10">
                                    <h2 className="text-3xl font-light mb-4 text-blue-900">Ihre Anfrage</h2>
                                    <p className="text-gray-600">Senden Sie uns eine Nachricht. Wir antworten innerhalb von 24 Stunden.</p>
                                </div>

                                <div className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-900 bg-transparent outline-none transition-colors text-gray-900"
                                                placeholder="Ihr vollständiger Name"
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
                                                className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-900 bg-transparent outline-none transition-colors text-gray-900"
                                                placeholder="ihre.email@unternehmen.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Unternehmen
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-900 bg-transparent outline-none transition-colors text-gray-900"
                                                placeholder="Ihr Unternehmen"
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
                                                className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-900 bg-transparent outline-none transition-colors text-gray-900"
                                                placeholder="+43 123 456 789"
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
                                            className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-900 bg-transparent outline-none transition-colors text-gray-900"
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
                                            className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-900 bg-transparent outline-none transition-colors text-gray-900 resize-none"
                                            placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                                            required
                                        />
                                    </div>

                                    <div className="pt-8">
                                        <button
                                            onClick={handleSubmit}
                                            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 font-medium transition-all duration-200 flex items-center gap-2 mb-4"
                                        >
                                            <Send className="w-4 h-4" />
                                            Nachricht senden
                                        </button>
                                        <p className="text-xs text-gray-500">
                                            * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information - Takes 2 columns */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Quick Contact */}
                            <div className="bg-white p-8 shadow-sm border border-gray-100">
                                <h3 className="text-xl font-light mb-6 text-blue-900">Direkter Kontakt</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <Phone className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-900 mb-1">Telefon</p>
                                            <div className="space-y-1 text-sm text-gray-600">
                                                <div>
                                                    <a href="tel:+433162414393" className="hover:text-blue-900 transition-colors">
                                                        +43 (0) 316 241 393
                                                    </a>
                                                    <span className="text-xs text-gray-400 ml-2">Steiermark</span>
                                                </div>
                                                <div>
                                                    <a href="tel:+43117107748" className="hover:text-blue-900 transition-colors">
                                                        +43 (0) 1 710 7748
                                                    </a>
                                                    <span className="text-xs text-gray-400 ml-2">Wien</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Mail className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-900 mb-1">E-Mail</p>
                                            <a href="mailto:office@promax.at" className="text-sm text-gray-600 hover:text-blue-900 transition-colors">
                                                office@promax.at
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Office Locations */}
                            <div className="bg-white p-8 shadow-sm border border-gray-100">
                                <h3 className="text-xl font-light mb-6 text-blue-900">Standorte</h3>
                                <div className="space-y-8">

                                    {/* Main Office */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <MapPin className="w-4 h-4 text-orange-600" />
                                            <span className="text-xs font-medium text-orange-600 uppercase tracking-wider">Hauptsitz</span>
                                        </div>
                                        <div className="ml-6">
                                            <p className="font-medium text-gray-900 mb-2">Steiermark</p>
                                            <div className="text-sm text-gray-600 space-y-1">
                                                <p>Parkring 18/F</p>
                                                <p>8074 Raaba-Grambach</p>
                                                <p>Österreich</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Vienna Office */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <MapPin className="w-4 h-4 text-orange-600" />
                                            <span className="text-xs font-medium text-orange-600 uppercase tracking-wider">Zweigstelle</span>
                                        </div>
                                        <div className="ml-6">
                                            <p className="font-medium text-gray-900 mb-2">Wien</p>
                                            <div className="text-sm text-gray-600 space-y-1">
                                                <p>Löwengasse 3/5</p>
                                                <p>1030 Wien</p>
                                                <p>Österreich</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-light mb-4 text-blue-900">Unser Standort</h2>
                        <div className="w-24 h-0.5 bg-orange-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Besuchen Sie uns in unserem Hauptsitz in Raaba-Grambach, südöstlich von Graz
                        </p>
                    </div>

                    <div className="bg-white shadow-sm border border-gray-100 overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.7289447742!2d15.4461!3d47.0379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476e3597f3b5c5c5%3A0x5f6c5a5a5a5a5a5a!2sParkring%2018%2C%208074%20Raaba-Grambach%2C%20Austria!5e0!3m2!1sde!2sat!4v1"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="PROMAX Standort"
                            className="w-full"
                        />
                    </div>
                </div>
            </section>

            {/* Jobs Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-light mb-6 text-blue-900">Jobs & Karriere</h2>
                            <div className="w-16 h-0.5 bg-orange-600 mb-8"></div>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Werden Sie Teil unseres Teams! Als Dienstleister ist das Ergebnis unserer Arbeit
                                immer auch eine Teamleistung, deren Schlüsselfaktoren Qualifikation, Engagement,
                                Kreativität, Verantwortungsbewusstsein, Flexibilität und Zielorientierung sind.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Wir bieten gute Dotierung, faire Vereinbarungen, interessante Aufgaben und
                                vielfältige Entwicklungsmöglichkeiten in einem professionellen Team.
                            </p>
                            <button onClick={() => {navigate('/Karriere')}} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 font-medium transition-colors">
                                Zu Jobs & Karriere
                            </button>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Team bei PROMAX"
                                className="w-full h-96 object-cover shadow-sm"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Kontakt2;