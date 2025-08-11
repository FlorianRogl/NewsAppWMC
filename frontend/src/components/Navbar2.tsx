import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/thumbnail_image002.png';

const Navbar2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Bestimme aktiven Item basierend auf aktueller Route
    const getActiveItem = () => {
        const path = location.pathname;
        if (path === '/Unternehmen') return 'unternehmen';
        if (path === '/Leistungen') return 'leistungen';
        if (path === '/Branchen') return 'branchen';
        if (path === '/Karriere') return 'karriere';
        if (path === '/Kontakt') return 'kontakt';
        return '';
    };

    const activeItem = getActiveItem();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* CSS Animations */}
            <style jsx>{`
                @keyframes slideIn {
                    0% {
                        transform: translateX(-50%) scaleX(0);
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(-50%) scaleX(1);
                        opacity: 1;
                    }
                }

                @keyframes fadeInUp {
                    0% {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .nav-link {
                    position: relative;
                    overflow: hidden;
                }

                .nav-link::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #E67E22, #d35400);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    transform: translateX(-50%);
                }

                .nav-link:hover::before {
                    width: 100%;
                }

                .nav-link.active::before {
                    width: 100%;
                    animation: slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .mobile-menu-enter {
                    animation: fadeInUp 0.3s ease-out;
                }

                /* Verhindert Überlappung mit nachfolgenden Elementen */
                body {
                    padding-top: 100px;
                }

                /* Responsive Anpassungen */
                @media (max-width: 768px) {
                    body {
                        padding-top: 80px;
                    }
                }
            `}</style>

            <nav style={styles.navbar}>
                <div style={styles.container}>
                    {/* Logo Section - weiter links positioniert */}
                    <div style={styles.logoSection}>
                        <Link to="/" style={styles.logo}>
                            <img
                                src={logo}
                                alt="PROMAX Logo"
                                style={styles.logoImage}
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div style={styles.desktopMenu}>
                        <div style={styles.navItem}>
                            <Link
                                to="/Unternehmen"
                                className={`nav-link ${activeItem === 'unternehmen' ? 'active' : ''}`}
                                style={{
                                    ...styles.navLink,
                                    ...(activeItem === 'unternehmen' ? styles.activeLink : {})
                                }}
                                onClick={handleNavClick}
                                onMouseEnter={(e) => {
                                    if (activeItem !== 'unternehmen') {
                                        e.target.style.transform = 'translateY(-1px)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeItem !== 'unternehmen') {
                                        e.target.style.transform = 'translateY(0)';
                                    }
                                }}
                            >
                                Das Unternehmen
                            </Link>
                        </div>

                        <div style={styles.navItem}>
                            <Link
                                to="/Leistungen"
                                className={`nav-link ${activeItem === 'leistungen' ? 'active' : ''}`}
                                style={{
                                    ...styles.navLink,
                                    ...(activeItem === 'leistungen' ? styles.activeLink : {})
                                }}
                                onClick={handleNavClick}
                                onMouseEnter={(e) => {
                                    if (activeItem !== 'leistungen') {
                                        e.target.style.transform = 'translateY(-1px)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeItem !== 'leistungen') {
                                        e.target.style.transform = 'translateY(0)';
                                    }
                                }}
                            >
                                Leistungen
                            </Link>
                        </div>

                        <div style={styles.navItem}>
                            <Link
                                to="/Branchen"
                                className={`nav-link ${activeItem === 'branchen' ? 'active' : ''}`}
                                style={{
                                    ...styles.navLink,
                                    ...(activeItem === 'branchen' ? styles.activeLink : {})
                                }}
                                onClick={handleNavClick}
                                onMouseEnter={(e) => {
                                    if (activeItem !== 'branchen') {
                                        e.target.style.transform = 'translateY(-1px)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeItem !== 'branchen') {
                                        e.target.style.transform = 'translateY(0)';
                                    }
                                }}
                            >
                                Branchen
                            </Link>
                        </div>

                        <div style={styles.navItem}>
                            <Link
                                to="/Karriere"
                                className={`nav-link ${activeItem === 'karriere' ? 'active' : ''}`}
                                style={{
                                    ...styles.navLink,
                                    ...(activeItem === 'karriere' ? styles.activeLink : {})
                                }}
                                onClick={handleNavClick}
                                onMouseEnter={(e) => {
                                    if (activeItem !== 'karriere') {
                                        e.target.style.transform = 'translateY(-1px)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeItem !== 'karriere') {
                                        e.target.style.transform = 'translateY(0)';
                                    }
                                }}
                            >
                                Karriere
                            </Link>
                        </div>

                        <div style={styles.navItem}>
                            <Link
                                to="/Kontakt"
                                className={`nav-link ${activeItem === 'kontakt' ? 'active' : ''}`}
                                style={{
                                    ...styles.navLink,
                                    ...(activeItem === 'kontakt' ? styles.activeLink : {})
                                }}
                                onClick={handleNavClick}
                                onMouseEnter={(e) => {
                                    if (activeItem !== 'kontakt') {
                                        e.target.style.transform = 'translateY(-1px)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeItem !== 'kontakt') {
                                        e.target.style.transform = 'translateY(0)';
                                    }
                                }}
                            >
                                Kontakt
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        style={styles.mobileMenuButton}
                        onClick={toggleMenu}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(30, 58, 95, 0.1)';
                            e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.transform = 'scale(1)';
                        }}
                    >
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu-enter" style={styles.mobileMenu}>
                        <Link
                            to="/Unternehmen"
                            style={{
                                ...styles.mobileNavLink,
                                ...(activeItem === 'unternehmen' ? styles.activeMobileLink : {})
                            }}
                            onClick={handleNavClick}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#E67E22';
                                e.target.style.paddingLeft = '20px';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#1E3A5F';
                                e.target.style.paddingLeft = '0';
                            }}
                        >
                            Das Unternehmen
                        </Link>
                        <Link
                            to="/Leistungen"
                            style={{
                                ...styles.mobileNavLink,
                                ...(activeItem === 'leistungen' ? styles.activeMobileLink : {})
                            }}
                            onClick={handleNavClick}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#E67E22';
                                e.target.style.paddingLeft = '20px';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#1E3A5F';
                                e.target.style.paddingLeft = '0';
                            }}
                        >
                            Leistungen
                        </Link>
                        <Link
                            to="/Branchen"
                            style={{
                                ...styles.mobileNavLink,
                                ...(activeItem === 'branchen' ? styles.activeMobileLink : {})
                            }}
                            onClick={handleNavClick}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#E67E22';
                                e.target.style.paddingLeft = '20px';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#1E3A5F';
                                e.target.style.paddingLeft = '0';
                            }}
                        >
                            Branchen
                        </Link>
                        <Link
                            to="/Karriere"
                            style={{
                                ...styles.mobileNavLink,
                                ...(activeItem === 'karriere' ? styles.activeMobileLink : {})
                            }}
                            onClick={handleNavClick}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#E67E22';
                                e.target.style.paddingLeft = '20px';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#1E3A5F';
                                e.target.style.paddingLeft = '0';
                            }}
                        >
                            Karriere
                        </Link>
                        <Link
                            to="/Kontakt"
                            style={{
                                ...styles.mobileNavLink,
                                ...(activeItem === 'kontakt' ? styles.activeMobileLink : {})
                            }}
                            onClick={handleNavClick}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#E67E22';
                                e.target.style.paddingLeft = '20px';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#1E3A5F';
                                e.target.style.paddingLeft = '0';
                            }}
                        >
                            Kontakt
                        </Link>
                    </div>
                )}
            </nav>
        </>
    );
};

const styles = {
    navbar: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: '#C5C9D4',
        borderBottom: '1px solid rgba(139, 155, 180, 0.2)',
        zIndex: 1000,
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        fontFamily: "'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif",
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        paddingLeft: '0', // Entfernt jeglichen linken Padding
    },

    container: {
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 0', // Kein padding mehr
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
    },

    logoSection: {
        display: 'flex',
        alignItems: 'center',
        flex: '0 0 auto',
        marginLeft: '-4rem', // Noch viel weiter nach links
        marginRight: 'auto', // Schiebt das Logo ganz nach links
        position: 'relative',
        left: '-2rem', // Zusätzliche Verschiebung nach links
    },

    logo: {
        display: 'flex',
        alignItems: 'center',
    },

    logoImage: {
        height: '220px',
        width: 'auto',
        objectFit: 'contain',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
    },

    desktopMenu: {
        display: 'flex',
        alignItems: 'center',
        gap: '3rem',
        flex: '0 0 auto', // Geändert von flex: '1 1 auto'
        marginRight: '1rem', // Etwas Abstand vom rechten Rand
    },

    navItem: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    navLink: {
        fontSize: '1.2rem',
        fontWeight: '500',
        color: '#1E3A5F',
        textDecoration: 'none',
        padding: '14px 18px',
        borderRadius: '8px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        position: 'relative',
    },

    activeLink: {
        fontWeight: '600',
    },

    mobileMenuButton: {
        display: 'none',
        background: 'none',
        border: 'none',
        color: '#1E3A5F',
        cursor: 'pointer',
        padding: '8px',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
    },

    mobileMenu: {
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        background: '#C5C9D4',
        borderTop: '1px solid rgba(139, 155, 180, 0.2)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    },

    mobileNavLink: {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#1E3A5F',
        textDecoration: 'none',
        padding: '16px 0',
        borderBottom: '1px solid rgba(139, 155, 180, 0.2)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },

    activeMobileLink: {
        color: '#E67E22',
        fontWeight: '700',
    },

    // Media Queries für responsive Design
    '@media (max-width: 768px)': {
        navbar: {
            height: '80px',
        },
        logoImage: {
            height: '160px',
        },
        desktopMenu: {
            display: 'none',
        },
        mobileMenuButton: {
            display: 'block',
        },
    }
};

export default Navbar2;