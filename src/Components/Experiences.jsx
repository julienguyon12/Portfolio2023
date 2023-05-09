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
              <li>Prospection de nouveaux clients</li>
              <li>Réalisation et négociation de devis </li>
              <li>Conception de plans et de documents de chantier</li>
              <li>
                Gestion de la planification et du suivi de l'avancement des
                chantiers pour assurer leur bonne réalisation
              </li>
              <li>Management de 1 ou 2 équipes </li>
              <li>
                Gestion de l'aspect financier, y compris la gestion des coûts,
                le suivi des budgets et la facturation (650k€/an )
              </li>
              <li>
                Communication régulière avec les différents intervenants pour
                assurer la réussite des projets
              </li>
              <li>
                Ces compétences témoignent de ma capacité à gérer efficacement
                les chantiers de travaux publics, à négocier des contrats, à
                concevoir des plans, à planifier les travaux et à communiquer
                avec les différents intervenants pour assurer la réussite des
                projets
              </li>
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
              <li>
                Gestion des chantiers : planification, achat de matériaux, suivi
                de l'avancement des travaux et respect des normes de sécurité
              </li>
              <li>
                Réalisation de plannings et de contre-études de coûts pour les
                projets
              </li>
              <li>Management de 3 ou 4 équipes </li>
              <li>
                Communication régulière avec les différents intervenants pour
                s'assurer que les projets sont réalisés conformément aux
                spécifications et aux exigences
              </li>
              <li>Négociation et réalisation de devis suplémentaires</li>
              <li>
                Dessin de plans et réalisation de documents de chantier tels que
                les rapports de suivi et les ordres de travail
              </li>
              <li>
                Utilisation de logiciels de gestion de projet pour suivre
                l'avancement des travaux et la conformité aux budgets prévus
              </li>
              <li>
                Gestion de l'aspect financier, y compris la gestion des coûts,
                le suivi des budgets et la facturation (2M€/an )
              </li>
              <li>
                Ces compétences témoignent de ma capacité à gérer efficacement
                les chantiers de travaux publics et à communiquer avec les
                différents intervenants pour assurer la réussite des projets
              </li>
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
              <li>Supervision et coordination des activités de construction</li>
              <li>
                Gestion des travailleurs (1 ou 2 équipes d'ouvriers), des
                sous-traitants et de la sécurité sur les chantiers
              </li>
              <li>
                Coordination avec les différents intervenants pour assurer la
                qualité et le respect des délais des projets
              </li>
              <li>
                Résolution de problèmes et prise de décisions en temps réel
              </li>
              <li>
                Compétences en gestion d'équipe, en travail sous pression et en
                résolution de problèmes.
              </li>
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
              <li>
                Dessin de plans et d'organigrammes pour les projets de
                construction
              </li>
              <li>
                Estimation des coûts de construction et élaboration de budgets
                prévisionnels pour les projets
              </li>
              <li>
                Réponse aux appels d'offres pour les projets de construction, y
                compris la préparation de propositions et de devis
              </li>
              <li>
                Analyse des plans et des devis pour s'assurer que les projets
                répondent aux normes de construction et de sécurité
              </li>
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
              <li>
                Dessin de plans et d'organigrammes pour les projets de
                construction
              </li>
              <li>
                Estimation des coûts de construction et élaboration de budgets
                prévisionnels pour les projets
              </li>
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
