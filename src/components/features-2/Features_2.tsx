import styles from "./features_2.module.css";

const Features_2 = () => {
    return (
        <section className={`${styles.features_2_section} section`}>
            <div className={`${styles.content_box}`}>
                <div className={`${styles.content_box_item}`}>
                    <h2>Why Us?</h2>
                </div>
                <div className={`${styles.content_box_item}`}>
                    <p>17 years of experience</p>
                </div>
                <div className={`${styles.content_box_item}`}>
                    <p>Over 1000 satisfied customers</p>
                </div>
                <div className={`${styles.content_box_item}`}>
                    <p>Acceptable prices</p>
                </div>

            </div>
        </section>
    )
}

export default Features_2;