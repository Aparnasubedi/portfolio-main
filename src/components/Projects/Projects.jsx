import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from 'framer-motion';
import styles from './Projects.module.scss';
import { images } from '../../assets/js/images';
import { Link } from '../Link/Link';
import { Project } from './Project';
import { variants } from '../../assets/js/variants';

export const Projects = () => {
  const ref = React.useRef();
  const scrollRef = React.useRef();
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress: projectsScrollProgress } = useScroll({
    target: scrollRef,
    offset: ['-0.5', '1'],
  });
  const projectsSpring = useSpring(
    projectsScrollProgress,
    variants.springPhysics
  );
  let translateValue = useTransform(
    projectsSpring,
    [0, 1],
    ['200px', '-450px']
  );

  const [windowSize, setWindowSize] = React.useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowSize]);

  return (
    <section className={styles.projects}>
      <motion.h2 className={styles.projects_header}>Projects</motion.h2>
      <div className={styles.projects_grid} ref={scrollRef}>
        <Project
          classes={styles.project}
          tags={['Autodesk Maya,', 'Realistic Environment']}
          title={'Hyper realstic 3d art'}
          description={`A candle light dinner set built with Autodesk maya and Arnold. The viewer can view this realistic 3d art in 3D. This project is made using Autodesk Maya, Photoshop`}
          website={'https://aparna.artstation.com/projects/9NDE0O'}
          img={images.candle_light_dinner}
          alt={'A candle light dinner'}
        />

        <Project
          classes={[
            styles.project,
            windowSize[0] >= 680 ? styles.project_uneven : '',
          ].join(' ')}
          translateValue={windowSize[0] >= 680 ? translateValue : 0}
          tags={['Autodesk Maya,','Realistic Environment,','Peace']}
          title={'Buddha Statue'}
          description={`A 3D nature made using Autodesk Maya and Vray.`}
          website={'https://aparna.artstation.com/projects/X1RnVy'}
          img={images.final_02}
          alt={'Buddha statue'}
        />

      

      

        <Project
          classes={[
            styles.project,
            windowSize[0] >= 680 ? styles.project_uneven : '',
          ].join(' ')}
          translateValue={windowSize[0] >= 680 ? translateValue : 0}
          tags={['2D game','gallaxy win']}
          title={`Galaxy win `}
          description={`Galaxy win is a 2D Shooter game. The user must kill all the monster characters in the shortest time possible. This will update their score and name to the scoreboard which is stored in the Firebase.`}
          website={'https://aparnasubedi93.itch.io/2d-shooter'}
          img={images.game_shooter}
          alt={'2D Shooter game '}
        />

        <motion.div
          className={styles.project}
          variants={variants.containerVariants}
          animate={isInView ? 'visible' : 'hidden'}
          ref={ref}
        >
          <motion.h3
            variants={variants.textVariants}
            className={styles.project_largeText}
          >
            Want to see more?
          </motion.h3>
          <motion.p variants={variants.textVariants}>
            If you&rsquo;d like to see more creative 3D projects, you can
            view my{' '}
            <Link
              href="https://aparna.artstation.com/"
              name={'Artstation'}
              label={'Check out the Pure Cove Restaurant site'}
            />

            .
          </motion.p>
          <motion.p variants={variants.textVariants}>
            If you want to play some of the games I&rsquo;ve made, you can check
            out my{' '}
            <Link
              href="https://itch.io/dashboard"
              name={'Itch Dashboard'}
              label={'Itch dashbord'}
            />
            ,{' '}
            or{' '}
            <Link
              href="https://aparnasubedi93.itch.io/solar-system-11"
              name={'Solar_system'}
              label={'solar_system'}
            />{' '}
            apps.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
