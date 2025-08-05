import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../../css/Navbar.module.css';
import thumbnail from '../../assets/thumbnail_image002.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const prevLocation = useRef(location.pathname);

    const navItems = [
        { name: 'Das Unternehmen', path: '/Unternehmen' },
        { name: 'Branchen', path: '/Branchen' },
        { name: 'Leistungen', path: '/Leistungen' },
        { name: 'Karriere', path: '/Karriere' },
        { name: 'Kontakt', path: '/Kontakt' }
    ];

    // Trigger animation when route actually changes
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        if (prevLocation.current !== location.pathname) {
            prevLocation.current = location.pathname;
            setAnimationKey(prev => prev + 1);
        }
    }, [location.pathname]);

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

    return (
        <nav className={`${styles.navbar} ${styles.navbarReload}`} key={animationKey}>
            <div className={styles.container}>
                {/* Logo/Brand - Links positioniert */}
                <Link
                    to="/"
                    className={`${styles.brand} ${styles.brandReload}`}
                    onClick={(e) => handleNavClick(e)}
                >
                    <img
                        src={thumbnail}
                        alt="PROMAX Logo"
                        className={styles.logoImage}
                    />
                </Link>

                {/* Navigation Wrapper - Zentral-Rechts positioniert */}
                <div className={styles.navWrapper}>
                    <ul className={`${styles.navList} ${isMobileMenuOpen ? styles.navListOpen : ''} ${styles.navListReload}`}>
                        {navItems.map((item, index) => (
                            <li
                                key={item.name}
                                className={`${styles.navItem} ${styles.navItemReload}`}
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

                {/* Mobile Menu Button */}
                <button
                    className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.mobileMenuBtnOpen : ''} ${styles.mobileMenuReload}`}
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