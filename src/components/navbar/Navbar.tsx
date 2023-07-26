'use client'


import styles from '@/components/navbar/navbar.module.css';
import menu from '@/images/menu.png';

import Image from 'next/image';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.nav_container}>
                <nav>
                    <span className={`${styles.text_logo}`}>
                        Youth Center Education
                    </span>


                    <ul className={`${styles.anchors}`}>
                        <li onClick={() => {}}>
                            About
                        </li>
                        <li>
                            Services
                        </li>
                        <li>
                            Contact Us
                        </li>
                    </ul>

                    <Image className={`${styles.menu_icon}`} src={menu} alt="menu" />


                </nav>
            </div>
        </header>
    )
}

export default Navbar;