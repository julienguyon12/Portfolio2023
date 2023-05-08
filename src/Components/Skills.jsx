import React, { forwardRef } from 'react';
import CardSkill from '../Components/CardSkill';
import '../Style/Skills.scss';
import { skills } from '../Data/Data';
const Skills = forwardRef((props, ref) => {
  return (
    <section className='skills' ref={ref}>
      <h2>Skills</h2>
      <h4>Mes compétences de développeur Front-end</h4>
      <div className='container'>
        {skills.map((item) => (
          <CardSkill
            key={item.id}
            name={item.name}
            images={item.images}
            skills={item.skills}
          />
        ))}
      </div>
    </section>
  );
});

export default Skills;
