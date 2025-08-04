import {useState} from 'react';
import rogl from '../assets/rogl.png'
import fasching from '../assets/fasching.png'
import {useNavigate} from "react-router-dom";
const Kontakt = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Form submission logic here
    };

    return (
        <div className="font-sans leading-relaxed text-gray-900 bg-white overflow-x-hidden m-0 p-0 w-full">
            {/* Blue Contact Header */}
            <section className="bg-blue-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-16">
                    <h1 className="text-6xl font-black leading-tight mb-8 tracking-tight uppercase">
                        Kontakt
                    </h1>
                    <p className="text-xl leading-relaxed opacity-90 max-w-2xl">
                        Nehmen Sie Kontakt mit uns auf - wir freuen uns auf Ihre Anfrage und beraten Sie gerne zu Ihren Projekten.
                    </p>
                </div>
            </section>

            {/* Contact Information Grid */}
            <section className="py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-16 grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Main Office */}
                    <div className="bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative group">
                        <div className="px-8 py-8 bg-gray-900 text-white flex justify-between items-center relative">
                            <h2 className="text-2xl font-bold uppercase tracking-wider">Hauptsitz</h2>
                            <span className="bg-orange-600 text-white px-4 py-2 text-sm font-semibold uppercase tracking-wider">
                                Steiermark
                            </span>
                        </div>
                        <div className="h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="PROMAX Hauptsitz Raaba-Grambach"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-semibold text-blue-700 mb-6">PROMAX Project Management GesmbH</h3>
                            <div className="mb-8 pl-4 border-l-4 border-blue-700">
                                <p className="text-slate-600 font-medium mb-1">Parkring 18/F</p>
                                <p className="text-slate-600 font-medium mb-1">8074 Raaba-Grambach</p>
                                <p className="text-slate-600 font-medium">Österreich</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4 text-gray-900 font-medium">
                                    <span className="text-xl w-8 text-center">📞</span>
                                    <span>+43 (0) 316 241 393</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-900 font-medium">
                                    <span className="text-xl w-8 text-center">📧</span>
                                    <span>office@promax.at</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Vienna Office */}
                    <div className="bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative group">
                        <div className="px-8 py-8 bg-gray-900 text-white flex justify-between items-center relative">
                            <h2 className="text-2xl font-bold uppercase tracking-wider">Zweigstelle</h2>
                            <span className="bg-orange-600 text-white px-4 py-2 text-sm font-semibold uppercase tracking-wider">
                                Wien
                            </span>
                        </div>
                        <div className="h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="PROMAX Zweigstelle Wien"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-semibold text-blue-700 mb-6">PROMAX Project Management GesmbH</h3>
                            <div className="mb-8 pl-4 border-l-4 border-blue-700">
                                <p className="text-slate-600 font-medium mb-1">Löwengasse 3/5</p>
                                <p className="text-slate-600 font-medium mb-1">1030 Wien</p>
                                <p className="text-slate-600 font-medium">Österreich</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4 text-gray-900 font-medium">
                                    <span className="text-xl w-8 text-center">📞</span>
                                    <span>+43 (0) 1 710 7748</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-900 font-medium">
                                    <span className="text-xl w-8 text-center">📧</span>
                                    <span>office@promax.at</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Key Contacts */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-16 grid grid-cols-1 lg:grid-cols-10 gap-16 items-start">
                    <div className="lg:col-span-4 bg-gray-900 text-white p-12 h-fit">
                        <h2 className="text-3xl font-bold uppercase tracking-tight mb-4 text-white">Ansprechpartner</h2>
                        <p className="opacity-80 leading-relaxed text-white">Ihre direkten Ansprechpartner für strategische Projekte</p>
                    </div>

                    <div className="lg:col-span-3 bg-gray-50 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
                        <div className="h-64 overflow-hidden">
                            <img
                                src={rogl}
                                alt="Ing. Andreas Rogl"
                                className="w-full h-full object-contain bg-gray-100 transition-all duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-blue-700 mb-2">Ing. Andreas Rogl</h3>
                            <p className="text-orange-600 font-semibold uppercase tracking-wider text-sm mb-6">Geschäftsführer</p>
                            <div>
                                <p className="text-slate-600 mb-2 font-medium">andreas.rogl@promax.at</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 bg-gray-50 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
                        <div className="h-64 overflow-hidden">
                            <img
                                src={fasching}
                                alt="Ing. Michael Fasching"
                                className="w-full h-full object-contain bg-gray-100 transition-all duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-blue-700 mb-2">Ing. Michael Fasching</h3>
                            <p className="text-orange-600 font-semibold uppercase tracking-wider text-sm mb-6"></p>
                            <br/>
                            <div>
                                <p className="text-slate-600 mb-2 font-medium">michael.fasching@promax.at</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jobs Section */}
            <section className="bg-gray-900">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                    <div className="order-2 lg:order-1">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            alt="Team bei PROMAX"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="order-1 lg:order-2 p-16 bg-gray-900 text-white flex flex-col justify-center">
                        <h2 className="text-4xl font-bold mb-8 uppercase tracking-tight">Jobs & Karriere</h2>
                        <p className="text-lg leading-relaxed mb-6 opacity-90">
                            Werden Sie Teil unseres Teams! Als Dienstleister ist das Ergebnis unserer Arbeit
                            immer auch eine Teamleistung, deren Schlüsselfaktoren Qualifikation, Engagement,
                            Kreativität, Verantwortungsbewusstsein, Flexibilität und Zielorientierung sind.
                        </p>
                        <p className="leading-relaxed mb-8 opacity-80">
                            Wir bieten gute Dotierung, faire Vereinbarungen, interessante Aufgaben und
                            vielfältige Entwicklungsmöglichkeiten in einem tollen Team.
                        </p>
                        <button onClick={() => navigate('/Karriere')} className="bg-orange-600 text-white border-none px-8 py-4 text-sm font-semibold uppercase tracking-wider cursor-pointer transition-all duration-300 self-start hover:bg-red-600 hover:-translate-y-1 hover:shadow-lg">
                            Zu Jobs & Karriere
                        </button>
                    </div>
                </div>
            </section>

            {/* Google Maps Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-16">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-blue-700 mb-4 uppercase tracking-tight">Unser Standort</h2>
                        <p className="text-lg text-slate-600">Besuchen Sie uns in Raaba-Grambach, südöstlich von Graz</p>
                    </div>
                    <div className="bg-white border-8 border-gray-900 overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.7289447742!2d15.4461!3d47.0379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476e3597f3b5c5c5%3A0x5f6c5a5a5a5a5a5a!2sParkring%2018%2C%208074%20Raaba-Grambach%2C%20Austria!5e0!3m2!1sde!2sat!4v1"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="PROMAX Standort Parkring 18/F, Raaba-Grambach"
                            className="block transition-all duration-300 hover:grayscale-0 grayscale-[20%]"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-32 bg-white">
                <div className="max-w-4xl mx-auto px-16">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-blue-700 mb-4 uppercase tracking-tight">Nachricht senden</h2>
                        <p className="text-lg text-slate-600">Kontaktieren Sie uns für eine unverbindliche Beratung zu Ihrem Projekt</p>
                    </div>

                    <div className="bg-gray-50 p-12 border-2 border-gray-900">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold text-gray-900 uppercase tracking-wider text-sm">Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Ihr vollständiger Name"
                                    className="p-4 border-2 border-slate-300 bg-white text-base font-sans text-gray-900 transition-all duration-300 rounded-none focus:outline-none focus:border-blue-700 focus:bg-gray-50 focus:-translate-y-1 focus:shadow-md placeholder:text-slate-400 placeholder:italic"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-semibold text-gray-900 uppercase tracking-wider text-sm">E-Mail *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="ihre.email@unternehmen.com"
                                    className="p-4 border-2 border-slate-300 bg-white text-base font-sans text-gray-900 transition-all duration-300 rounded-none focus:outline-none focus:border-blue-700 focus:bg-gray-50 focus:-translate-y-1 focus:shadow-md placeholder:text-slate-400 placeholder:italic"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-semibold text-gray-900 uppercase tracking-wider text-sm">Unternehmen</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    placeholder="Ihr Unternehmen"
                                    className="p-4 border-2 border-slate-300 bg-white text-base font-sans text-gray-900 transition-all duration-300 rounded-none focus:outline-none focus:border-blue-700 focus:bg-gray-50 focus:-translate-y-1 focus:shadow-md placeholder:text-slate-400 placeholder:italic"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-semibold text-gray-900 uppercase tracking-wider text-sm">Telefon</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="+43 123 456 789"
                                    className="p-4 border-2 border-slate-300 bg-white text-base font-sans text-gray-900 transition-all duration-300 rounded-none focus:outline-none focus:border-blue-700 focus:bg-gray-50 focus:-translate-y-1 focus:shadow-md placeholder:text-slate-400 placeholder:italic"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mb-8">
                            <label className="font-semibold text-gray-900 uppercase tracking-wider text-sm">Betreff *</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                placeholder="Worum geht es in Ihrer Anfrage?"
                                className="p-4 border-2 border-slate-300 bg-white text-base font-sans text-gray-900 transition-all duration-300 rounded-none focus:outline-none focus:border-blue-700 focus:bg-gray-50 focus:-translate-y-1 focus:shadow-md placeholder:text-slate-400 placeholder:italic"
                            />
                        </div>

                        <div className="flex flex-col gap-2 mb-8">
                            <label className="font-semibold text-gray-900 uppercase tracking-wider text-sm">Nachricht *</label>
                            <textarea
                                name="message"
                                rows={6}
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                                className="p-4 border-2 border-slate-300 bg-white text-base font-sans text-gray-900 transition-all duration-300 rounded-none resize-y min-h-[120px] focus:outline-none focus:border-blue-700 focus:bg-gray-50 focus:-translate-y-1 focus:shadow-md placeholder:text-slate-400 placeholder:italic"
                            ></textarea>
                        </div>

                        <div className="mt-8 flex flex-col items-start gap-4">
                            <button
                                onClick={handleSubmit}
                                className="bg-blue-700 text-white border-none px-12 py-5 text-sm font-bold uppercase tracking-wider cursor-pointer transition-all duration-300 relative overflow-hidden hover:bg-blue-800 hover:-translate-y-1 hover:shadow-lg focus:outline-2 focus:outline-blue-700/30 focus:outline-offset-2"
                            >
                                Nachricht senden
                            </button>
                            <p className="text-slate-600 text-sm leading-relaxed max-w-lg">
                                * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Kontakt;