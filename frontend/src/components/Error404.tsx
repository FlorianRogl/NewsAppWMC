import React from 'react';

const Error404: React.FC = () => {
    const navigate = (path: string) => {
        window.location.href = path;
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
            <div className="max-w-2xl mx-auto text-center">
                {/* 404 Number */}
                <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8">
                    404
                </h1>

                {/* Main Heading */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto">
                    The page you are looking for might have been removed, had its name changed,
                    or is temporarily unavailable.
                </p>

                {/* Simple Links */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center text-blue-600">
                    <a
                        href="/"
                        className="hover:text-blue-800 hover:underline font-medium"
                    >
                        Go to Homepage
                    </a>

                    <button
                        onClick={() => window.history.back()}
                        className="hover:text-blue-800 hover:underline font-medium"
                    >
                        Go Back
                    </button>
                </div>

                {/* Helpful Links */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-4">
                        You might find these links helpful:
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <button
                            onClick={() => navigate('/')}
                            className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => navigate('/Unternehmen')}
                            className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                            About Us
                        </button>
                        <button
                            onClick={() => navigate('/Leistungen')}
                            className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => navigate('/Kontakt')}
                            className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error404;