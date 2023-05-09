import React, { forwardRef } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ExploreIcon from '@mui/icons-material/Explore';
import '../Style/Experiences.scss';

const Experiences = forwardRef((props, ref) => {
  return (
    <section className='experience' ref={ref}>
      <h2>Expérience</h2>
      <div className='vertical'>
        <VerticalTimeline lineColor='#3e497a'>
          <VerticalTimelineElement
            className='vertcal-timeline-element--education'
            date="Mars 2022 - aujourd'hui"
            iconStyle={{ background: '#3e497a', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              Formation développeur web
            </h3>
            <ul>
              <li>Formation autodidacte en développement web </li>
              <li>Technologies maîtrisées : React, JavaScript, HTML et CSS </li>
              <li>
                Acquis de compétences pratiques en développement front-end
              </li>
              <li>
                Suivi de cours en ligne, lecture de documentations techniques et
                travaux sur des projets personnels
              </li>
              <li>
                Maîtrise des compétences nécessaires pour concevoir, développer
                et maintenir des applications web de haute qualité.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertcal-timeline-element--education'
            date='Avril 2021 - Juin 2023'
            iconStyle={{ background: '#33FF80', color: '#fff' }}
            icon={<ExploreIcon />}
          >
            <h3 className='vertical-timeline-element-title'>Voyage Surf</h3>
            <ul>
              <li>
                Voyage en solo de 1 an et demi en Amérique du Sud et en Asie
              </li>
              <li>
                Objectifs : découvrir de nouvelles cultures, élargir mes
                horizons et relever des défis personnels
              </li>
              <li>
                Développement de compétences en autonomie et en adaptation à des
                environnements différents
              </li>
              <li>
                Perfectionnement des compétences linguistiques en apprenant
                l'espagnol et en pratiquant l'anglais dans des contextes réels
              </li>
              <li>Apprentissage du code de manière autodidacte</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertcal-timeline-element--work'
            date='Juillet 2020 - Avril 2021'
            iconStyle={{ background: '#e9d35b', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              Responsable des travaux chez les particuliers - Colas
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>Landes</h4>
            <ul>
              <li>Réalisation de devis </li>
              <li>Prospection commerciale </li>
              <li>Négociation</li>
              <li>Dessins, optimisation et planning de chantiers</li>
              <li>Management de 1 ou 2 équipes </li>
              <li>Gestion financière de projets (650k€/an ) </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertcal-timeline-element--work'
            date='Février 2020 - Juillet 2020'
            iconStyle={{ background: '#e9d35b', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              Ingénieur Travaux - Colas
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Mont de Marsan
            </h4>
            <ul>
              <li>Optimisation de chantiers et planning </li>
              <li>Gestion financiere de projets (2M€/an ) </li>
              <li>Realisation de devis </li>
              <li>Management de 3 ou 4 chef de chantiers </li>
              <li>Relation client </li>
              <li>Négociation</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertcal-timeline-element--work'
            date='Février 2019 - Février 2020'
            iconStyle={{ background: '#e9d35b', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              Chef de chantier - Colas
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Bordeaux/Angouleme
            </h4>
            <ul>
              <li>Optimisation de chantiers et planning </li>
              <li>Management de 1 ou 2 équipes d'ouvriers </li>
              <li>Garant technique du chantier</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertcal-timeline-element--work'
            date='Octobre 2018 - Février 2019'
            iconStyle={{ background: '#e9d35b', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              Ingénieur bureau d'études - Colas
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>Périgueux</h4>
            <ul>
              <li>Dessins et optimisation de chantiers (mensura) </li>
              <li>Etude de prix et chiffrage </li>
              <li>Réponse d'appel d'offres </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertcal-timeline-element--work'
            date='Juillet 2017 - Janvier 2018'
            iconStyle={{ background: '#e9d35b', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              Stage ingénieur bureau d'études - Colas
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>Toulouse</h4>
            <ul>
              <li>Dessins de projets (mensura) </li>
              <li>Optimisation de projets </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertcal-timeline-element--education'
            date='2013 - 2018'
            iconStyle={{ background: '#3e497a', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className='vertical-timeline-element-title'>Icam, Toulouse</h3>
            <p>Diplome d'ingénieur généraliste ICAM</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertcal-timeline-element--education'
            date='2010 - 2013'
            iconStyle={{ background: '#3e497a', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              Lycée Ozenne, Toulouse
            </h3>
            <p>Bac S</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
});

export default Experiences;
