'use client'


import styles from '@/components/navbar/navbar.module.css';
import menu from '@/images/menu.png';
import cross from '@/images/cross.png';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [showMenu,setShowMenu] = useState<boolean>(false);

    return (
        <header className={styles.header}>
            <div className={styles.nav_container}>
                <nav>
                    <Link href="/" className={`${styles.text_logo}`}>
                        Youth Center Education
                    </Link>


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

                    <Image className={`${styles.menu_icon}`} src={showMenu ? cross : menu} alt="menu" onClick={() => setShowMenu(!showMenu)} />
                    {showMenu && (<div className={`${styles.fullscreen_menu}`}>
                        <a onClick={() => setShowMenu(!showMenu)}>About</a>
                        <a onClick={() => setShowMenu(!showMenu)}>Services</a>
                        <a onClick={() => setShowMenu(!showMenu)}>Contact Us</a>
                    </div>)}

                </nav>
            </div>
        </header>
    )
}

export default Navbar;