import React, { useState, MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/thumbnail_image002.png';

// Interface für Navigation Items
interface NavItem {
    path: string;
    key: string;
    label: string;
}

const Navbar2: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const location = useLocation();

    const getActiveItem = (): string => {
        const path: string = location.pathname;
        if (path === '/Unternehmen') return 'unternehmen';
        if (path === '/Leistungen') return 'leistungen';
        if (path === '/Branchen') return 'branchen';
        if (path === '/Karriere') return 'karriere';
        if (path === '/Kontakt') return 'kontakt';
        return '';
    };

    const activeItem: string = getActiveItem();
    const toggleMenu = (): void => setIsOpen(!isOpen);
    const handleNavClick = (): void => setIsOpen(false);

    // Navigation Items Array
    const navItems: NavItem[] = [
        { path: '/Unternehmen', key: 'unternehmen', label: 'Unternehmen' },
        { path: '/Leistungen', key: 'leistungen', label: 'Leistungen' },
        { path: '/Branchen', key: 'branchen', label: 'Branchen' },
        { path: '/Karriere', key: 'karriere', label: 'Karriere' },
        { path: '/Kontakt', key: 'kontakt', label: 'Kontakt' },
    ];

    // Event Handler für Hover-Effekte
    const handleMouseEnter = (e: MouseEvent<HTMLAnchorElement>, key: string): void => {
        if (activeItem !== key) {
            (e.target as HTMLAnchorElement).style.transform = 'translateY(-1px)';
        }
    };

    const handleMouseLeave = (e: MouseEvent<HTMLAnchorElement>, key: string): void => {
        if (activeItem !== key) {
            (e.target as HTMLAnchorElement).style.transform = 'translateY(0)';
        }
    };

    const handleMobileMouseEnter = (e: MouseEvent<HTMLAnchorElement>): void => {
        (e.target as HTMLAnchorElement).style.color = '#E67E22';
        (e.target as HTMLAnchorElement).style.paddingLeft = '20px';
    };

    const handleMobileMouseLeave = (e: MouseEvent<HTMLAnchorElement>, key: string): void => {
        (e.target as HTMLAnchorElement).style.color = activeItem === key ? '#E67E22' : '#1E3A5F';
        (e.target as HTMLAnchorElement).style.paddingLeft = '0';
    };

    return (
        <>
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

                @keyframes slideDown {
                    0% {
                        opacity: 0;
                        transform: translateX(-100%);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes staggerFadeIn {
                    0% {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes menuIconRotate {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(180deg);
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

                body {
                    padding-top: clamp(80px, 10vw, 120px);
                }

                .navbar {
                    height: clamp(80px, 10vw, 100px);
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    background: #C5C9D4;
                    border-bottom: 1px solid rgba(139, 155, 180, 0.2);
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
                    backdrop-filter: blur(10px);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                }

                .container {
                    width: 85%;
                    max-width: none;
                    margin: 0 auto;
                    padding: 0 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .logo-section {
                    display: flex;
                    align-items: center;
                    flex: 0 0 auto;
                }

                .logo {
                    display: flex;
                    align-items: center;
                }

                .logo-image {
                    height: clamp(110px, 30vw, 195px);
                    width: auto;
                    object-fit: contain;
                    transition: transform 0.3s ease;
                    cursor: pointer;
                }

                .logo-image:hover {
                    transform: scale(1.05);
                }

                .desktop-menu {
                    display: flex;
                    align-items: center;
                    gap: clamp(0.5rem, 2vw, 3rem);
                }

                .nav-item {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .nav-link {
                    font-size: clamp(1rem, 1.5vw, 1.25rem);
                    font-weight: 500;
                    color: #1E3A5F;
                    text-decoration: none;
                    padding: clamp(6px, 1vw, 14px) clamp(8px, 1.2vw, 18px);
                    border-radius: 8px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                    position: relative;
                }

                .nav-link.active {
                    font-weight: 600;
                }

                .mobile-menu-button {
                    background: none;
                    border: none;
                    color: #1E3A5F;
                    cursor: pointer;
                    padding: 8px;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                    display: none;
                    position: relative;
                    overflow: hidden;
                }

                .mobile-menu-button::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    background: rgba(30, 58, 95, 0.1);
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    transition: all 0.4s ease;
                    z-index: -1;
                }

                .mobile-menu-button:hover::before {
                    width: 120%;
                    height: 120%;
                }

                .mobile-menu-button svg {
                    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .mobile-menu-button.open svg {
                    transform: rotate(180deg);
                }

                .mobile-menu {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: #C5C9D4;
                    border-top: 1px solid rgba(139, 155, 180, 0.3);
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
                    animation: slideDown 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                    overflow: hidden;
                }

                .mobile-nav-link {
                    font-size: 1.1rem;
                    font-weight: 500;
                    color: #1E3A5F;
                    text-decoration: none;
                    padding: 16px 0;
                    border-bottom: 1px solid rgba(139, 155, 180, 0.2);
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                    animation: staggerFadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                    opacity: 0;
                }

                .mobile-nav-link:nth-child(1) { animation-delay: 0.2s; }
                .mobile-nav-link:nth-child(2) { animation-delay: 0.3s; }
                .mobile-nav-link:nth-child(3) { animation-delay: 0.4s; }
                .mobile-nav-link:nth-child(4) { animation-delay: 0.5s; }
                .mobile-nav-link:nth-child(5) { animation-delay: 0.6s; }

                .mobile-nav-link::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #E67E22, #d35400);
                    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .mobile-nav-link:hover::before {
                    width: 100%;
                }

                .mobile-nav-link.active {
                    color: #E67E22;
                    font-weight: 600;
                }

                .mobile-nav-link.active::before {
                    width: 100%;
                }

                @media (max-width: 1000px) {
                    .desktop-menu {
                        display: none !important;
                    }
                    .mobile-menu-button {
                        display: block !important;
                    }
                }
            `}</style>

            <nav className="navbar">
                <div className="container">
                    <div className="logo-section">
                        <Link to="/" className="logo">
                            <img
                                src={logo}
                                alt="PROMAX Logo"
                                className="logo-image"
                            />
                        </Link>
                    </div>

                    <div className="desktop-menu">
                        {navItems.map(({ path, key, label }: NavItem) => (
                            <div key={key} className="nav-item">
                                <Link
                                    to={path}
                                    className={`nav-link ${activeItem === key ? 'active' : ''}`}
                                    onClick={handleNavClick}
                                    onMouseEnter={(e) => handleMouseEnter(e, key)}
                                    onMouseLeave={(e) => handleMouseLeave(e, key)}
                                >
                                    {label}
                                </Link>
                            </div>
                        ))}
                    </div>

                    <button
                        className={`mobile-menu-button ${isOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                        type="but
                        ton"
                        aria-label="Menu toggle"
                    >
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>

                {isOpen && (
                    <div className="mobile-menu-enter mobile-menu">
                        {navItems.map(({ path, key, label }: NavItem) => (
                            <Link
                                key={key}
                                to={path}
                                className={`mobile-nav-link ${activeItem === key ? 'active' : ''}`}
                                onClick={handleNavClick}
                                onMouseEnter={handleMobileMouseEnter}
                                onMouseLeave={(e) => handleMobileMouseLeave(e, key)}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar2;