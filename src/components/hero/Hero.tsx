'use client'

import styles from '@/components/hero/hero.module.css';
import right_arrow from '@/images/right-arrow.png';

import Image from 'next/image';

interface HeroProps {
    props: {
        title: string,
        subtitle: string,
        CTAbutton: string,
    }
}


const Hero = ({ props }: HeroProps) => {
    return (
        <section className={`section ${styles.hero_section}`}>
            <div className={`${styles.hero_gradient}`}>

            </div>
            <div className={`${styles.hero_container}`}>
                <h2>
                    {props.subtitle}
                </h2>
                <h1>
                    {props.title}
                </h1>
                <a href="https://wa.me/7471367858" target='blank'>
                    <button className={`${styles.button}`}>
                        <Image className={`${styles.right_arrow}`}
                            src={right_arrow} 
                            alt='right arrow' 
                            loading='eager'
                            title='right arrow icon' />
                        {props.CTAbutton}
                    </button>
                </a>
            </div>
        </section>
    )
}

export default Hero;