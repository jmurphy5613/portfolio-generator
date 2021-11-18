import type { NextPage } from 'next';

import { useEffect, useRef } from 'react';

import Typed from 'typed.js';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {

  const typed = useRef<Typed|null>(null);
  const typedElement = useRef(null);

  useEffect(() => {
    console.log('Home page loaded');
    const options = {
      strings: [
        'Graphic Design',
        'Web Development',
        'UI/UX Design',
        'Photography'
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    }

    typed.current = new Typed('.animate', options);

  }, []);

  return (
    <div className="background">
      <div>
        <h3 className={styles["welcome-title"]}>Hello there, welcome to</h3>
        <h1 className={styles["description-title"]}>Portfolio Creator. The premier portfolio website builder for diplaying your skills in <span style={{ color: "#E879F9" }} className="animate" ref={typedElement} /> </h1>
      </div>
    </div>
  )
}

export default Home
