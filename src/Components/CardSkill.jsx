import React from 'react';
import '../Style/CardSkill.scss';

const CardSkill = ({ name, skills, images }) => {
  return (
    <div className='CardSkill'>
      <h3>{name}</h3>
      <p>{skills}</p>
      <div className='wrap'>
        {images.map((item, idx) => (
          <img key={idx} src={item} alt='' className='item' />
        ))}
      </div>
    </div>
  );
};

export default CardSkill;
