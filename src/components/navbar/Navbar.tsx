'use client'


import styles from '@/components/navbar/navbar.module.css';
import menu from '@/images/menu.png';
import cross from '@/images/cross.png';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Anchor from '../anchor/Anchor';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);


    const handleClickShowMenu = () => {
        // const elem = document.querySelector(".image") as HTMLElement;
        // if (elem) {
        //     elem.style.animation = "scale_down 0.5s ease 0s 1 normal forwards";

        // }
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        showMenu ? document.body.classList.add('no-scroll') :
            document.body.classList.remove('no-scroll');
    }, [showMenu])



    return (
        <header className={styles.header}>
            <div className={styles.nav_container}>
                <nav>
                    <Link href="/" className={`${styles.text_logo}`}>
                        Youth Center Education
                    </Link>


                    <ul className={`${styles.anchors}`}>
                        <li>
                            <Anchor href='#f_1_section'>Services</Anchor>
                        </li>
                        <li>
                            <Anchor href='#contactus'>Contact Us</Anchor>
                        </li>
                    </ul>

                    <Image className={`${styles.menu_icon}`}
                        src={showMenu ? cross : menu}
                        alt="menu"
                        onClick={handleClickShowMenu} />
                    {showMenu && (<div
                        className={`${styles.fullscreen_menu}`}>
                        <a href='#f_1_section' onClick={() => setShowMenu(!showMenu)}>Services</a>
                        <a href='#contactus' onClick={() => setShowMenu(!showMenu)}>Contact Us</a>
                    </div>)}

                </nav>
            </div>
        </header>
    )
}

export default Navbar;