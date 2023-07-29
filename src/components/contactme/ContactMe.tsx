import styles from './contactme.module.css';

const ContactMe = () => {
    return (
        <section className={`${styles.contactme_section} section`}>
            <div className={`${styles.cm_container}`}>
                <h2>Contact Us!</h2>
                <form>
                    <input className={`${styles.phone}`} type='text' placeholder='+7 (___) ___ ____' />
                    <input className={`${styles.submit_btn}`} value="SEND" type='submit' />
                </form>
            </div>
        </section>
    )
}

export default ContactMe;