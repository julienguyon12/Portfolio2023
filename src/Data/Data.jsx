import MPST from '../Assets/MPST.PNG';
import MPSTR from '../Assets/MPSTR.PNG';
import MPSS from '../Assets/MPSS.PNG';
import CV from '../Assets/CV.PNG';
import Fylo from '../Assets/Fylo.PNG';
import card from '../Assets/card.PNG';
import QR from '../Assets/qrcode.PNG';

import react from '../Assets/react native_icon.svg';
import sass from '../Assets/sass.svg';
import css from '../Assets/css.svg';
import html from '../Assets/html.svg';
import js from '../Assets/jsicon.svg';
import mysql from '../Assets/mysql.svg';
import en from '../Assets/english.png';
import fr from '../Assets/france.png';
import es from '../Assets/spain.png';
import git from '../Assets/git.svg';
import management from '../Assets/managament.svg';
import projet from '../Assets/projet.svg';

export const projectList = [
  {
    id: 0,
    name: "Mon P'tit Surf Shop",
    image: MPSS,
    skills: 'React, Redux, Strapi, PostgreSQL, HTML, SCSS',
    url: 'https://monpetitsurfshop.onrender.com/',
    urlGit: 'https://github.com/julienguyon12/MonPetitSurfShop',
    type: 'Front-end Back-end',
  },
  {
    id: 1,
    name: 'Mon cv',
    image: CV,
    skills: 'React, CSS, Html',
    url: 'https://cv-julien-guyon.netlify.app/',
    urlGit: 'https://github.com/julienguyon12/CV-Julien-Guyon-react',
    type: 'Front-end',
  },
  {
    id: 2,
    name: 'Monpetitsurftrip',
    image: MPSTR,
    skills: 'React, HTML, SCSS, Render',
    url: 'https://monptitsurftrip.onrender.com/',
    urlGit: 'https://github.com/julienguyon12/MonPtitSurfTrip-react',
    type: 'Front-end',
  },
  {
    id: 3,
    name: "Mon P'tit Surf Trip",
    image: MPST,
    skills: 'Javascript, Ajax, CSS, HTML',
    url: 'https://monptitsurftrip.netlify.app/',
    urlGit: 'https://github.com/julienguyon12/SurfTrip',
    type: 'Front-end',
  },
  {
    id: 4,
    name: 'Filo landing Page',
    image: Fylo,
    skills: 'CSS, HTML',
    url: 'https://julienfylo.netlify.app',
    urlGit: 'https://github.com/julienguyon12/filo-landingpage-challenge',
    type: 'Front-end',
  },
  {
    id: 5,
    name: 'Prview card',
    image: card,
    skills: 'CSS, HTML',
    url: 'https://super-scone-eceadc.netlify.app',
    urlGit: 'https://github.com/julienguyon12/preview-card-challenge',
    type: 'Front-end',
  },
  {
    id: 6,
    name: 'QR code',
    image: QR,
    skills: 'CSS, HTML',
    url: 'https://cozy-nasturtium-86c559.netlify.app/',
    urlGit: 'https://github.com/julienguyon12/Qr-code-challenge',
    type: 'Front-end',
  },
];
export const skills = [
  {
    id: 0,
    name: 'Front-end',
    images: [react, js, css, html, sass],
    skills:
      'ReactJS, Redux, Javascript, CSS, Sass, HTML, NPM, MaterialUI, EmailJS, Ajax , Netlify, Render',
  },
  {
    id: 1,
    name: 'Back-end',
    images: [mysql],
    skills: 'Strapi, MySQL',
  },
  {
    id: 2,
    name: 'Projet',
    images: [git, projet, management],
    skills: 'Git, Management, Gestion de projet, Planning, Budget, Ventes',
  },
  {
    id: 3,
    name: 'Langues',
    images: [fr, en, es],
    skills: 'Francais (maternelle), Anglais (courant), Espagnol (avancé)',
  },
];
