import styles from "./features_2.module.css";
import { useTranslations } from "next-intl";

const Features_2 = () => {
    const currDate : Date = new Date();
    const t = useTranslations("Home");

    return (
        <section className={`${styles.features_2_section} section`}>
            <div className={`${styles.content_box}`}>
                <div className={`${styles.content_box_item}`}>
                    <h2>{t("whyUs")}</h2>
                </div>
                <div className={`${styles.content_box_item}`}>
                    <p>{`${currDate.getFullYear() - 2004} ${t("yOfExp")}`}</p>
                </div>
                <div className={`${styles.content_box_item}`}>
                    <p>{t("satisfCustomers")}</p>
                </div>
                <div className={`${styles.content_box_item}`}>
                    <p>{t("prices")}</p>
                </div>
            </div>
        </section>
    )
}

export default Features_2;