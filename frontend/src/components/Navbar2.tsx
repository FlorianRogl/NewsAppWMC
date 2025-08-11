import React, {useState} from 'react';
import {Menu, X} from 'lucide-react';
import {Link, useLocation} from 'react-router-dom';
import logo from '../assets/thumbnail_image002.png';

const Navbar2: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Bestimme aktiven Item basierend auf aktueller Route
    const getActiveItem = (): string => {
        const path = location.pathname;
        if (path === '/Unternehmen') return 'unternehmen';
        if (path === '/Leistungen') return 'leistungen';
        if (path === '/Branchen') return 'branchen';
        if (path === '/Karriere') return 'karriere';
        if (path === '/Kontakt') return 'kontakt';
        return '';
    };

    const activeItem = getActiveItem();

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = (): void => {
        setIsOpen(false);
    };

    return (
        <>
            {/* CSS Animations */}
            <style>{`
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
                @media (max-width: 1200px) {
                    .desktop-menu {
                        gap: 2rem !important;
                    }
                    .nav-link {
                        font-size: 1.1rem !important;
                        padding: 12px 16px !important;
                    }
                    .logo-image {
                        height: 200px !important;
                    }
                }

                @media (max-width: 1024px) {
                    .desktop-menu {
                        gap: 1.5rem !important;
                    }
                    .nav-link {
                        font-size: 1rem !important;
                        padding: 10px 14px !important;
                    }
                    .logo-image {
                        height: 180px !important;
                    }
                    .logo-section {
                        margin-left: -2rem !important;
                        left: -1rem !important;
                    }
                }

                @media (max-width: 992px) {
                    .desktop-menu {
                        gap: 1rem !important;
                    }
                    .nav-link {
                        font-size: 0.95rem !important;
                        padding: 8px 12px !important;
                    }
                    .logo-image {
                        height: 160px !important;
                    }
                }

                @media (max-width: 768px) {
                    body {
                        padding-top: 80px !important;
                    }
                    .navbar {
                        height: 80px !important;
                    }
                    .logo-image {
                        height: 140px !important;
                    }
                    .desktop-menu {
                        display: none !important;
                    }
                    .mobile-menu-button {
                        display: block !important;
                        margin-right: 1rem !important;
                    }
                    .logo-section {
                        margin-left: -1rem !important;
                        left: -0.5rem !important;
                    }
                }

                @media (max-width: 640px) {
                    .navbar {
                        height: 70px !important;
                    }
                    body {
                        padding-top: 70px !important;
                    }
                    .logo-image {
                        height: 120px !important;
                    }
                    .mobile-nav-link {
                        font-size: 1.3rem !important;
                        padding: 14px 0 !important;
                    }
                    .mobile-menu {
                        padding: 1.5rem !important;
                        gap: 1.2rem !important;
                    }
                    .logo-section {
                        margin-left: -0.5rem !important;
                        left: 0 !important;
                    }
                }

                @media (max-width: 480px) {
                    .navbar {
                        height: 65px !important;
                    }
                    body {
                        padding-top: 65px !important;
                    }
                    .logo-image {
                        height: 100px !important;
                    }
                    .mobile-nav-link {
                        font-size: 1.2rem !important;
                        padding: 12px 0 !important;
                    }
                    .mobile-menu {
                        padding: 1rem !important;
                        gap: 1rem !important;
                    }
                    .container {
                        padding: 0 0.5rem !important;
                    }
                }

                @media (max-width: 360px) {
                    .navbar {
                        height: 60px !important;
                    }
                    body {
                        padding-top: 60px !important;
                    }
                    .logo-image {
                        height: 85px !important;
                    }
                    .mobile-nav-link {
                        font-size: 1.1rem !important;
                        padding: 10px 0 !important;
                    }
                    .container {
                        padding: 0 0.25rem !important;
                    }
                }
            `}</style>

            <nav className="navbar" style={styles.navbar}>
                <div className="container" style={styles.container}>
                    {/* Logo Section - weiter links positioniert */}
                    <div className="logo-section" style={styles.logoSection}>
                        <Link to="/" style={styles.logo}>
                            <img
                                src={logo}
                                alt="PROMAX Logo"
                                className="logo-image"
                                style={styles.logoImage}
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="desktop-menu" style={styles.desktopMenu}>
                        <div style={styles.navItem}>
                            <Link
                                to="/Unternehmen"
                                className={`nav-link ${activeItem === 'unternehmen' ? 'active' : ''}`}
                                style={{
                                    ...styles.navLink,
                                    ...(activeItem === 'unternehmen' ? styles.activeLink : {})
                                }}
                                onClick={handleNavClick}
                                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    if (activeItem !== 'unternehmen') {
                                        (e.target as HTMLElement).style.transform = 'translateY(-1px)';
                                    }
                                }}
                                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    if (activeItem !== 'unternehmen') {
                                        (e.target as HTMLElement).style.transform = 'translateY(0)';
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
                                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    if (activeItem !== 'leistungen') {
                                        (e.target as HTMLElement).style.transform = 'translateY(-1px)';
                                    }
                                }}
                                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    if (activeItem !== 'leistungen') {
                                        (e.target as HTMLElement).style.transform = 'translateY(0)';
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
                                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    if (activeItem !== 'branchen') {
                                        (e.target as HTMLElement).style.transform = 'translateY(-1px)';
                                    }
                                }}
                                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    if (activeItem !== 'branchen') {
                                        (e.target as HTMLElement).style.transform = 'translateY(0)';
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
                                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    if (activeItem !== 'karriere') {
                                        (e.target as HTMLElement).style.transform = 'translateY(-1px)';
                                    }
                                }}
                                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    if (activeItem !== 'karriere') {
                                        (e.target as HTMLElement).style.transform = 'translateY(0)';
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
                                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    if (activeItem !== 'kontakt') {
                                        (e.target as HTMLElement).style.transform = 'translateY(-1px)';
                                    }
                                }}
                                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    if (activeItem !== 'kontakt') {
                                        (e.target as HTMLElement).style.transform = 'translateY(0)';
                                    }
                                }}
                            >
                                Kontakt
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-button"
                        style={styles.mobileMenuButton}
                        onClick={toggleMenu}
                        onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                            (e.target as HTMLElement).style.backgroundColor = 'rgba(30, 58, 95, 0.1)';
                            (e.target as HTMLElement).style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                            (e.target as HTMLElement).style.backgroundColor = 'transparent';
                            (e.target as HTMLElement).style.transform = 'scale(1)';
                        }}
                    >
                        {isOpen ? <X size={32}/> : <Menu size={32}/>}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu-enter mobile-menu" style={styles.mobileMenu}>
                        <Link
                            to="/Unternehmen"
                            className="mobile-nav-link"
                            style={{
                                ...styles.mobileNavLink,
                                ...(activeItem === 'unternehmen' ? styles.activeMobileLink : {})
                            }}
                            onClick={handleNavClick}
                            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                (e.target as HTMLElement).style.color = '#E67E22';
                                (e.target as HTMLElement).style.paddingLeft = '20px';
                            }}
                            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                (e.target as HTMLElement).style.color = '#1E3A5F';
                                (e.target as HTMLElement).style.paddingLeft = '0';
                            }}
                        >
                            Das Unternehmen
                        </Link>
                        <Link
                            to="/Leistungen"
                            className="mobile-nav-link"
                            style={{
                                ...styles.mobileNavLink,
                                ...(activeItem === 'leistungen' ? styles.activeMobileLink : {})
                            }}
                            onClick={handleNavClick}
                            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                (e.target as HTMLElement).style.color = '#E67E22';
                                (e.target as HTMLElement).style.paddingLeft = '20px';
                            }}
                            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                (e.target as HTMLElement).style.color = '#1E3A5F';
                                (e.target as HTMLElement).style.paddingLeft = '0';
                            }}
                        >
                            Leistungen
                        </Link>
                        <Link
                            to="/Branchen"
                            className="mobile-nav-link"
                            style={{
                                ...styles.mobileNavLink,
                                ...(activeItem === 'branchen' ? styles.activeMobileLink : {})
                            }}
                            onClick={handleNavClick}
                            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                (e.target as HTMLElement).style.color = '#E67E22';
                                (e.target as HTMLElement).style.paddingLeft = '20px';
                            }}
                            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                (e.target as HTMLElement).style.color = '#1E3A5F';
                                (e.target as HTMLElement).style.paddingLeft = '0';
                            }}
                        >
                            Branchen
                        </Link>
                        <Link
                            to="/Karriere"
                            className="mobile-nav-link"
                            style={{
                                ...styles.mobileNavLink,
                                ...(activeItem === 'karriere' ? styles.activeMobileLink : {})
                            }}
                            onClick={handleNavClick}
                            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                (e.target as HTMLElement).style.color = '#E67E22';
                                (e.target as HTMLElement).style.paddingLeft = '20px';
                            }}
                            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                (e.target as HTMLElement).style.color = '#1E3A5F';
                                (e.target as HTMLElement).style.paddingLeft = '0';
                            }}
                        >
                            Karriere
                        </Link>
                        <Link
                            to="/Kontakt"
                            className="mobile-nav-link"
                            style={{
                                ...styles.mobileNavLink,
                                ...(activeItem === 'kontakt' ? styles.activeMobileLink : {})
                            }}
                            onClick={handleNavClick}
                            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                (e.target as HTMLElement).style.color = '#E67E22';
                                (e.target as HTMLElement).style.paddingLeft = '20px';
                            }}
                            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                (e.target as HTMLElement).style.color = '#1E3A5F';
                                (e.target as HTMLElement).style.paddingLeft = '0';
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

const styles: { [key: string]: React.CSSProperties } = {
    navbar: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: '#C5C9D4',
        borderBottom: '1px solid rgba(139, 155, 180, 0.2)',
        zIndex: 1000,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        fontFamily: "'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif",
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        paddingLeft: 0,
    },

    container: {
        width: '100%',
        maxWidth: 1400,
        margin: '0 auto',
        padding: '0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
    },

    logoSection: {
        display: 'flex',
        alignItems: 'center',
        flex: '0 0 auto',
        marginLeft: '-4rem',
        marginRight: 'auto',
        position: 'relative',
        left: '-2rem',
    },

    logo: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },

    logoImage: {
        height: 220,
        width: 'auto',
        objectFit: 'contain',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
    },

    desktopMenu: {
        display: 'flex',
        alignItems: 'center',
        gap: '3rem',
        flex: '0 0 auto',
        marginRight: '1rem',
    },

    navItem: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    navLink: {
        fontSize: '1.2rem',
        fontWeight: 500,
        color: '#1E3A5F',
        textDecoration: 'none',
        padding: '14px 18px',
        borderRadius: 8,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        position: 'relative',
    },

    activeLink: {
        fontWeight: 600,
    },

    mobileMenuButton: {
        display: 'none',
        background: 'none',
        border: 'none',
        color: '#1E3A5F',
        cursor: 'pointer',
        padding: 8,
        borderRadius: 8,
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
        fontWeight: 600,
        color: '#1E3A5F',
        textDecoration: 'none',
        padding: '16px 0',
        borderBottom: '1px solid rgba(139, 155, 180, 0.2)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },

    activeMobileLink: {
        color: '#E67E22',
        fontWeight: 700,
    },
};

export default Navbar2;