import React, { useState } from 'react';
import styles from '../../css/Navbar.module.css';
// Import the logo
import thumbnail from '../../assets/thumbnail_image002.png';

const Navbar = () => {
    const [activeItem, setActiveItem] = useState('Home');

    const navItems = [
        'Home',
        'Das Unternehmen',
        'Branchen',
        'Leistungen',
        'Referenzen',
        'Kontakt'
    ];

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                {/* Logo/Brand */}
                <div className={styles.brand}>
                    <img
                        src={thumbnail}
                        alt="PROMAX Logo"
                        className={styles.logoImage}
                    />
                </div>

                {/* Navigation Items */}
                <ul className={styles.navList}>
                    {navItems.map((item) => (
                        <li key={item} className={styles.navItem}>
                            <a
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className={`${styles.navLink} ${activeItem === item ? styles.active : ''}`}
                                onClick={() => setActiveItem(item)}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button className={styles.mobileMenuBtn}>
                    <span className={styles.hamburger}></span>
                    <span className={styles.hamburger}></span>
                    <span className={styles.hamburger}></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;