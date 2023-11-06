import styles from './footer.module.css';
import whatsapp from './../../images/whatsapp-250.png';
import instagram from './../../images/instagram-250.png';

import location_icon from './../../images/location-100.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Footer = () => {
    const t = useTranslations("Home");


    return (
        <section className={`${styles.footer} section`} id="contactus">
            <div className={`${styles.footer_container}`}>
                <p>{t("social")}</p>
                <div className={`${styles.socials}`}>
                    <a href='https://wa.me/7471367858' target='blank'>
                        <Image className={`${styles.social_icon}`} 
                        src={whatsapp} 
                        alt='whatsapp'
                        title='whatsapp icon' />
                    </a>
                    <a href="https://www.instagram.com/tdk_english_learning/?igshid=MzRlODBiNWFlZA%3D%3D" target='blank'>
                        <Image className={`${styles.social_icon}`} 
                        src={instagram} 
                        alt='instagram'
                        title='instagram icon' />
                    </a>
                </div>
                <p className={`${styles.location_line}`}>
                    <Image className={`${styles.social_icon}`}
                        src={location_icon}
                        alt="location"
                        title='location icon' />
                    {t("address")}
                </p>
                <p className={`${styles.copyright}`}>
                    {t("madeBy")} <a href='https://www.instagram.com/a_akito_o/' target='blank'>AlisherSk</a>
                    <br />
                    {t("copyright")}
                </p>
            </div>
        </section>
    )
}

export default Footer;