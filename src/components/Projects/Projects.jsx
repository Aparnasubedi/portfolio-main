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
          website={'https://aparna.artstation.com/'}
          img={images.candle_light_dinner}
          alt={'A candle light dinner'}
        />

        <Project
          classes={[
            styles.project,
            windowSize[0] >= 680 ? styles.project_uneven : '',
          ].join(' ')}
          translateValue={windowSize[0] >= 680 ? translateValue : 0}
          tags={['Autodesk Maya,', 'Realistic Environment']}
          title={'Buddha Statue'}
          description={`A simple fake store React application made to practice routing, Jest testing and using CSS modules. It allows users to log in through Google, browse the store catalog, add items to cart and store that information in the Firebase database. I wanted the design to be simple yet effective.`}
          website={'https://aparna.artstation.com/'}
          img={images.final_02}
          alt={'Buddha statue'}
        />

        <Project
          classes={styles.project}
          tags={['JavaScript', 'Webpack', 'SCSS']}
          title={'Weather App'}
          description={`Weather app that displays current forecast data for a given location. It was a part of the The Odin Project curriculum and I made it with a model-view-controller design pattern. I created the design in Figma using grids for the first time and I focused on making the design user-friendly and minimalistic.`}
          website={'https://Aparna.github.io/weather/'}
          img={images.candle_light_dinner}
          alt={'weather app ui design'}
        />

        <Project
          classes={[
            styles.project,
            windowSize[0] >= 680 ? styles.project_uneven : '',
          ].join(' ')}
          translateValue={windowSize[0] >= 680 ? translateValue : 0}
          tags={['JavaScript', 'Webpack', 'SCSS']}
          title={'Todo List'}
          description={`A simple task organizer made with pure JavaScript. The user can add projects, add and edit tasks, sort the tasks by due date, name and date of creation, delete taks and projects, set priority of the tasks and monitor their progress with a progress bar for each project.`}
          website={'https://Aparna.github.io/todo-list/'}
          img={images.todoList}
          alt={'adding tasks at a todo list app'}
        />

        <Project
          classes={[
            styles.project,
            windowSize[0] >= 680 ? styles.project_uneven : '',
          ].join(' ')}
          translateValue={windowSize[0] >= 680 ? translateValue : 0}
          tags={['React', 'Firebase', 'Vite', 'CSS']}
          title={`Where's waldo?`}
          description={`A Stardew Valley themed Where's Waldo type of game made with React and Firebase. The user must find three hidden characters in the shortest time possible. They can then submit their score and name to the leaderboard which is stored in the Firebase. I wanted to recreate the pixel art vibe of the game while keeping things plain and simple.`}
          website={'https://Aparna.github.io/wheres-waldo/'}
          img={images.wheresWaldo}
          alt={'where is waldo game screenshot'}
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
            If you&rsquo;d like to see more design-oriented projects, you can
            view my{' '}
            <Link
              href="https://Aparna.github.io/restaurant/"
              name={'Pure Cove Restaurant site'}
              label={'Check out the Pure Cove Restaurant site'}
            />
            ,{' '}
            <Link
              href="https://Aparna.github.io/admin-dashboard/"
              name={'Admin Dashboard'}
              label={'Check out the Admin Dashboard site'}
            />{' '}
            or{' '}
            <Link
              href="https://Aparna.github.io/cv-project/"
              name={'the CV Creator'}
              label={'Check out the CV Creator site'}
            />
            .
          </motion.p>
          <motion.p variants={variants.textVariants}>
            If you want to play some of the games I&rsquo;ve made, you can check
            out my{' '}
            <Link
              href="https://Aparna.github.io/memory-card/"
              name={'Memory Card'}
              label={'Check out the Memory Card game'}
            />
            ,{' '}
            <Link
              href="https://Aparna.github.io/battleship/"
              name={'Battleship'}
              label={'Check out Battleship game'}
            />{' '}
            or{' '}
            <Link
              href="https://Aparna.github.io/tic-tac-toe/"
              name={'Tic-Tac-Toe'}
              label={'Check out the Tic-Tac-Toe game'}
            />{' '}
            apps.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
