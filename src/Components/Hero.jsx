import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../Style/Hero.scss';
import me from '../Assets/julien-git1.png';

const Hero = ({ contactRef }) => {
  return (
    <div className='hero'>
      <div className='about'>
        <div className='left'>
          <h2>Julien Guyon</h2>
          <div className='prompt'>
            <p>
              <span>Ingénieur </span> ICAM
              <br />
              développeur
              <span> front-end</span>
            </p>
            <a
              href='https://github.com/julienguyon12'
              target='_blank'
              rel='noreferrer'
            >
              <GitHubIcon />
            </a>
            <a
              href='https://www.linkedin.com/in/julien-guyon-9079a0189'
              target='_blank'
              rel='noreferrer'
            >
              <LinkedInIcon />
            </a>
            <button
              onClick={(e) =>
                contactRef.current?.scrollIntoView(
                  { behavior: 'smooth' },
                  e.preventDefault()
                )
              }
            >
              <EmailIcon />
            </button>
          </div>
        </div>
        <div className='right'>
          <img src={me} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
