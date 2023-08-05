import styles from "./features_1.module.css";
import { useTranslations } from "next-intl";

const Features_1 = () => {
    const t = useTranslations("Home");


    return <section className={`${styles.features_1_section} section`} id="f_1_section">
        <h2>{t("courses")}</h2>
        <div className={`${styles.f_1_container}`}>
            <article className={`${styles.card}`}>
                <div className={`${styles.card_container}`}>
                    <h3>{t("english")}</h3>
                    <ul>
                        <li>{t("genEng")}</li>
                        <li>{t("ielts")}</li>
                        <li>{t("prepToUni")}</li>
                        <li>{t("unt")}</li>
                    </ul>
                </div>
            </article>
            <article className={`${styles.card}`}>
                <div className={`${styles.card_container}`}>
                    <h3>{t("korean")}</h3>
                    <ul>
                        <li>{t("genKorean")}</li>
                        <li>{t("topik")}</li>
                    </ul>
                </div>
            </article>
        </div>
    </section>
}

export default Features_1;
