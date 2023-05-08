import React, { useRef } from 'react';
import '../Style/Home.scss';
import Skills from '../Components/Skills';
import Hero from '../Components/Hero';
import Projects from '../Components/Projects';
import Navbar from '../Components/Navbar';
import Experiences from '../Components/Experiences';
import Contact from '../Components/Contact';

const Home = () => {
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
  return (
    <div className='home'>
      <Navbar
        contactRef={contactRef}
        experienceRef={experienceRef}
        projectRef={projectRef}
        skillsRef={skillsRef}
      />
      <Hero contactRef={contactRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectRef} />
      <Experiences ref={experienceRef} />
      <Contact ref={contactRef} />
    </div>
  );
};

export default Home;
