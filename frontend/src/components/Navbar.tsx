import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../css/Navbar.module.css';
import thumbnail from '../assets/thumbnail_image002.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Das Unternehmen', path: '/Unternehmen' },
        { name: 'Branchen', path: '/Branchen' },
        { name: 'Leistungen', path: '/Leistungen' },
        { name: 'Karriere', path: '/Karriere' },
        { name: 'Kontakt', path: '/Kontakt' }
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleNavClick = (e: React.MouseEvent<HTMLElement>) => {
        // Nur Click-Animation für Feedback
        const target = e.currentTarget;
        target.classList.add(styles.navLinkClick);

        setTimeout(() => {
            target.classList.remove(styles.navLinkClick);
        }, 300);

        closeMobileMenu();
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                {/* Logo/Brand - Ganz links positioniert */}
                <Link
                    to="/"
                    className={styles.brand}
                    onClick={(e) => handleNavClick(e)}
                >
                    <img
                        src={thumbnail}
                        alt="PROMAX Logo"
                        className={styles.logoImage}
                    />
                </Link>

                {/* Navigation Wrapper - Weiter rechts positioniert */}
                <div className={styles.navWrapper}>
                    <ul className={`${styles.navList} ${isMobileMenuOpen ? styles.navListOpen : ''}`}>
                        {navItems.map((item) => (
                            <li
                                key={item.name}
                                className={styles.navItem}
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

                {/* Mobile Menu Button */}
                <button
                    className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.mobileMenuBtnOpen : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <span className={styles.hamburger}></span>
                    <span className={styles.hamburger}></span>
                    <span className={styles.hamburger}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className={styles.mobileOverlay} onClick={closeMobileMenu}></div>
            )}
        </nav>
    );
};

export default Navbar;