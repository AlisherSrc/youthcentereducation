import styles from './footer.module.css';
import whatsapp from './../../images/whatsapp-50.png';
import location_icon from './../../images/location-100.png';
import Image from 'next/image';


const Footer = () => {
    return (
        <section className={`${styles.footer} section`}>
            <div className={`${styles.footer_container}`}>
                <p>Social:</p>
                <p>
                    <Image className={`${styles.social_icon}`} src={whatsapp} alt='whatsapp'/>
                </p>
                <p className={`${styles.location_line}`}><Image className={`${styles.social_icon}`} 
                src={location_icon} 
                alt="location icon" />
                Nursultan Nazarbayev Avenue 145/149
                </p>
                <p className={`${styles.copyright}`}>
                    © Copyright - All Rights Reserved.
                </p>
            </div>
        </section>
    )
}

export default Footer;