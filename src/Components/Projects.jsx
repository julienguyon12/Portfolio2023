import React, { useState, forwardRef } from 'react';
import '../Style/Projects.scss';
import ButtonUnderlined from './ButtonUnderlined';
import CardProjects from './CardProjects';
import { projectList } from '../Data/Data';

const Projects = forwardRef((props, ref) => {
  const [select, setSelect] = useState('Front-end');
  return (
    <section className='projects' ref={ref}>
      <h2>Projets</h2>
      <div className='wrap'>
        <button
          onClick={() => {
            setSelect('Front-end');
          }}
        >
          <ButtonUnderlined text='Front-end' mode='dark' action='' />
        </button>
        <button
          onClick={() => {
            setSelect('Back-end');
          }}
        >
          <ButtonUnderlined text='Back-end' mode='dark' />
        </button>
      </div>
      <div className='container'>
        {projectList
          .filter((list) => list.type.includes(select))
          .map((item) => (
            <CardProjects
              key={item.id}
              name={item.name}
              image={item.image}
              skills={item.skills}
              url={item.url}
              urlGit={item.urlGit}
            />
          ))}
      </div>
    </section>
  );
});

export default Projects;
