import { motion } from 'framer-motion';
import styles from './Skills.module.scss';
import HTML from '../../assets/icon_html.png'

export const Skills = () => {


  return (
    <section className={styles.skills}>

    <motion.h2 className={styles.skills_header}>Skills</motion.h2>

    <div className={styles.skills_images_container}>
        <img src={HTML} alt="HTML Icon" className={styles.skills_image}/>
        <img src={HTML} alt="HTML Icon" className={styles.skills_image}/>
        <img src={HTML} alt="HTML Icon" className={styles.skills_image}/>
        <img src={HTML} alt="HTML Icon" className={styles.skills_image}/>
        <img src={HTML} alt="HTML Icon" className={styles.skills_image}/>
        <img src={HTML} alt="HTML Icon" className={styles.skills_image}/>
        <img src={HTML} alt="HTML Icon" className={styles.skills_image}/>
        <img src={HTML} alt="HTML Icon" className={styles.skills_image}/>

    </div>
    </section>
  );
};
