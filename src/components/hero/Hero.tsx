'use client'

import styles from '@/components/hero/hero.module.css';
import right_arrow from '@/images/right-arrow.png';

import Image from 'next/image';

const Hero = () => {
    return (
        <section className={`section ${styles.hero_section}`}>
            <div className={`${styles.hero_gradient}`}>

            </div>
            <div className={`${styles.hero_container}`}>
                <h2>
                    We focus on the result!
                </h2>
                <h1>
                    Korean and English courses
                </h1>

                <button className={`${styles.button}`}>
                    <Image className={`${styles.right_arrow}`}
                        src={right_arrow} alt='right arrow' />
                    LEARN NOW
                </button>
            </div>
        </section>
    )
}

export default Hero;