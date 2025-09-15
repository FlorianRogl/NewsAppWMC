import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../css/Navbar.module.css';
import thumbnail from '../assets/img.png';
import navLogo from '../assets/Final_V1-a.png'
import navLogo2 from '../assets/Final_V1-b.png'
import navLogo4 from '../assets/Final_V2-b.png'
import navLogo3 from '../assets/Final_V2-a.png'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hasInitiallyLoaded, setHasInitiallyLoaded] = useState(false);
    const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
    const location = useLocation();

    // Logo Pool
    const logoPool = [navLogo, navLogo2, navLogo3, navLogo4, thumbnail];

    const navItems = [
        { name: 'Unternehmen', path: '/Unternehmen' },
        { name: 'Branchen', path: '/Branchen' },
        { name: 'Leistungen', path: '/Leistungen' },
        { name: 'Karriere', path: '/Karriere' },
        { name: 'Kontakt', path: '/Kontakt' }
    ];

    // Nur beim ersten Laden der Website die Animation aktivieren
    useEffect(() => {
        if (!hasInitiallyLoaded) {
            setHasInitiallyLoaded(true);
        }
    }, []); // Nur beim ersten Mount ausführen

    // Schließe Mobile Menu beim Route-Wechsel
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Verhindere Body-Scroll wenn Mobile Menu offen ist
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleNavClick = (e: React.MouseEvent<HTMLElement>) => {
        // Add click animation to the clicked element
        const target = e.currentTarget;
        target.classList.add(styles.navLinkClick);

        setTimeout(() => {
            target.classList.remove(styles.navLinkClick);
        }, 300);

        closeMobileMenu();
    };

    const switchLogo = () => {
        setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logoPool.length);
    };

    return (
        <nav className={`${styles.navbar} ${hasInitiallyLoaded ? styles.navbarReload : ''}`}>
            <div className={styles.container}>
                {/* Logo/Brand - Links positioniert */}
                <Link
                    to="/"
                    className={`${styles.brand} ${hasInitiallyLoaded ? styles.brandReload : ''}`}
                    onClick={(e) => handleNavClick(e)}
                >
                    <img
                        src={logoPool[currentLogoIndex]}
                        alt="PROMAX Logo"
                        className={styles.logoImage}
                    />
                </Link>

                {/* Navigation Wrapper - Zentral-Rechts positioniert */}
                <div className={`${styles.navWrapper} ${isMobileMenuOpen ? styles.navWrapperOpen : ''}`}>
                    <ul className={`${styles.navList} ${hasInitiallyLoaded ? styles.navListReload : ''}`}>
                        {navItems.map((item, index) => (
                            <li
                                key={item.name}
                                className={`${styles.navItem} ${hasInitiallyLoaded ? styles.navItemReload : ''}`}
                                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                            >
                                <Link
                                    to={item.path}
                                    className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''}`}
                                    onClick={(e) => handleNavClick(e)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Logo Switcher Button - Ganz rechts */}
                <button
                    className={`${styles.logoSwitcher} ${hasInitiallyLoaded ? styles.logoSwitcherReload : ''}`}
                    onClick={switchLogo}
                    aria-label="Logo wechseln"
                    title="Logo wechseln"
                >
                    🔄
                </button>

                {/* Mobile Menu Button */}
                <button
                    className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.mobileMenuBtnOpen : ''} ${hasInitiallyLoaded ? styles.mobileMenuReload : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <span className={styles.hamburger}></span>
                    <span className={styles.hamburger}></span>
                    <span className={styles.hamburger}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className={styles.mobileOverlay}
                    onClick={closeMobileMenu}
                    aria-hidden="true"
                ></div>
            )}
        </nav>
    );
};

export default Navbar;