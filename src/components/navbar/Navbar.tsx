'use client'


import styles from '@/components/navbar/navbar.module.css';
import menu from '@/images/menu.png';
import cross from '@/images/cross.png';

import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import IntlLink from 'next-intl/link';
import Anchor from '../anchor/Anchor';
import { usePathname } from 'next/navigation';

interface NavbarProps {
    props: {
        about: string,
        services: string,
        contactus: string,
        locale: string
    }
}


const Navbar = ({ props }: NavbarProps) => {
    const path = usePathname();
    const isMainPage = !path.includes("about");
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [showLangList, setShowLangList] = useState<boolean>(false);
    const [lang, setLang] = useState<string>(props.locale);


    if (lang === "en") setLang("English")
    else if (lang === "kk") setLang("Қазақ")
    else if (lang === "ru") setLang("Русский")

    const handleClickShowMenu = () => {
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

                    {isMainPage && (
                        <ul className={`${styles.anchors}`}>
                            <li>
                                <Link href="/about">{props.about}</Link>
                            </li>
                            <li>
                                <Anchor href='#f_1_section'>{props.services}</Anchor>
                            </li>
                            <li>
                                <Anchor href='#contactus'>{props.contactus}</Anchor>
                            </li>
                        </ul>)}
                    <button className={`${styles.lang_list_btn}`} onClick={() => setShowLangList(!showLangList)}>{lang}</button>

                    {showLangList && <ul className={`${styles.lang_list}`}>
                        <li>
                            <IntlLink href={isMainPage ? "/" : "/about"} locale='en'>English</IntlLink>
                        </li>
                        <li>
                            <IntlLink href={isMainPage ? "/" : "/about"} locale='kk'>Қазақ</IntlLink>
                        </li>
                        <li>
                            <IntlLink href={isMainPage ? "/" : "/about"} locale='ru'>Русский</IntlLink>
                        </li>
                    </ul>}
                    {isMainPage && (<Image className={`${styles.menu_icon}`}
                        src={showMenu ? cross : menu}
                        alt="menu"
                        onClick={handleClickShowMenu}
                        title='menu icon' />)}

                    {showMenu && (<div
                        className={`${styles.fullscreen_menu}`}>
                        <Link href="/about" onClick={() => setShowMenu(!showMenu)}>{props.about}</Link>
                        <a href='#f_1_section' onClick={() => setShowMenu(!showMenu)}>{props.services}</a>
                        <a href='#contactus' onClick={() => setShowMenu(!showMenu)}>{props.contactus}</a>
                    </div>)}

                </nav>
            </div>
        </header>
    )
}

export default Navbar;