import React from 'react';
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import styles from './AboutMe.module.scss';
import { variants } from '../../assets/js/variants';

export const AboutMe = () => {
  const ref = React.useRef();
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['-1', '0'],
  });
  const headerSpring = useSpring(scrollYProgress, variants.springPhysics);
  let transformValue = useTransform(headerSpring, [0, 1], ['80px', '0px']);

  return (
    <motion.section
      className={styles.aboutMe}
      variants={variants.containerVariants}
      animate={isInView ? 'visible' : 'hidden'}
      ref={ref}
    >
      <div className={styles.aboutMe_header}>
        <motion.h2
          style={{ translateX: transformValue }}
          variants={variants.textVariants}
          className={styles.aboutMe_left}
        >
          Read more
        </motion.h2>
        <motion.h1
          variants={variants.textVariants}
          className={styles.aboutMe_title}
        >
          about me
        </motion.h1>
      </div>
      <motion.p
        variants={variants.textVariants}
        className={styles.aboutMe_text}
      >
        Hello, my name is Aparna Subedi and I&rsquo;m a 3D Artist, Graphic and motion Designer 
        Curently updating my web development skills. I am creative and love designing . I&rsquo;m committed to
        developing products that focus on usability and simplicity.
      </motion.p>
      <motion.p
        variants={variants.textVariants}
        className={styles.aboutMe_text}
      >
        I love learning new things and technologies and I&rsquo;m always
        gathering inspiration and exploring different ideas and techniques.
        I&rsquo;m curious and passionate, especially when it comes to CG art, designing
        and gaming.
      </motion.p>
    </motion.section>
  );
};
