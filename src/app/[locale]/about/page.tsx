import logo from "@/images/favicon.png";
import Image from "next/image";

import styles from "./about-page.module.css";
import { useTranslations } from "next-intl";

const About = () => {

    const t = useTranslations("About");

    return (
        <main className={`${styles.about_page}`}>
            <div className={`${styles.intro_block}`}>
                <Image className={`${styles.logo}`} src={logo} alt="Youth center logo" />
                <p>
                    {t("intro")}
                </p>
            </div>
            <div className={`${styles.methodology_block}`}>
                <b className={`${styles.subtitle}`}>{t("methodology")}</b>
                <ul>
                    <li>
                        <b>{t("resOriented")}</b>
                        {t("ro_text")}
                    </li>
                    <li>
                        <b>{t("practDriven")}</b>
                        {t("pd_text")}
                    </li>
                    <li>
                        <b>{t("ContEval")}</b>
                        {t("ce_text")}
                    </li>
                </ul>
            </div>
            <div className={`${styles.achievements_block}`}>
                <b className={`${styles.subtitle}`}>{t("achievements")}</b>
                <p>
                    {t("achievements_text")}
                </p>
            </div>
        </main>)
}

export default About;