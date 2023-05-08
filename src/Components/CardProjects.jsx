import React from 'react';
import '../Style/CardProjects.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
const CardProjects = ({ name, image, skills, url, urlGit }) => {
  return (
    <div className='CardProjects'>
      <div className='imgBox'>
        <img src={image} alt='' />
      </div>
      <div className='links'>
        <a className='git' href={urlGit} target='_blank' rel='noreferrer'>
          <GitHubIcon sx={{ fontSize: 40 }} />
        </a>
        <a className='git' href={url} target='_blank' rel='noreferrer'>
          <LinkIcon sx={{ fontSize: 40 }} />
        </a>
      </div>
      <div className='content'>
        <h2>{name}</h2>
        <span>{skills}</span>
      </div>
    </div>
  );
};

export default CardProjects;
