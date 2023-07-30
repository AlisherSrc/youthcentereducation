import styles from "./features_1.module.css";

const Features_1 = () => {
    return <section className={`${styles.features_1_section} section`} id="f_1_section">
        <h2>Our courses</h2>
        <div className={`${styles.f_1_container}`}>
            <article className={`${styles.card}`}>
                <div className={`${styles.card_container}`}>
                    <h3>English</h3>
                    <ul>
                        <li>General English</li>
                        <li>IELTS</li>
                        <li>Preparation to university</li>
                        <li>UNT</li>
                        <li>Interviews</li>
                    </ul>
                </div>
            </article>
            <article className={`${styles.card}`}>
                <div className={`${styles.card_container}`}>
                    <h3>Korean</h3>
                    <ul>
                        <li>General Korean</li>
                    </ul>
                </div>
            </article>
        </div>
    </section>
}

export default Features_1;
