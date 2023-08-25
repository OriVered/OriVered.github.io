import {
  frontend,
  backend,
  realTimeEmbedded,
  engineering,
  javascript,
  html,
  css,
  raspberry,
  linux,
  java,
  springboot,
  python,
  reactjs,
  c,
  cplusplus,
  nodejs,
  git,
  docker,
  postgresql,
  mixologia,
  movieapp,
  LF2,
  circlethedragon,
  proxydownloader,
  hac,
  scaleup,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Real Time Embedded Developer',
    icon: realTimeEmbedded,
  },
  {
    title: 'Software Engineer',
    icon: engineering,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'raspberry pi',
    icon: raspberry,
  },
  {
    name: 'linux',
    icon: linux,
  },
  {
    name: 'c',
    icon: c,
  },  {
    name: 'c++',
    icon: cplusplus,
  },
  {
    name: 'java',
    icon: java,
  },
  {
    name: 'spring boot',
    icon: springboot,
  },
  {
    name: 'python',
    icon: python,
  },
];

const experiences = [
  {
    title: 'Bs.c Computer Science',
    company_name: 'Hadassah Academic College Jerusalem',
    icon: hac,
    iconBg: '#333333',
    date: 'Oct 2020 - Aug 2023',
  },
  {
    title: '5 weeks Bootcamp',
    company_name: 'Scale Up Velocity',
    icon: scaleup,
    iconBg: '#333333',
    date: 'Aug 2023',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Mixologia',
    description: 'Comprehensive online platform for reviewing and discussing a wide variety of alcoholic beverages.',
    tags: [
      {
        name: 'springboot',
        color: 'blue-text-gradient',
      },
      {
        name: 'SQLite',
        color: 'green-text-gradient',
      },
      {
        name: 'boostrap',
        color: 'pink-text-gradient',
      },
      {
        name: 'thymlef',
        color: 'orange-text-gradient',
      },
    ],
    image: mixologia,
    repo: 'https://github.com/OriVered/mixologia',
    demo: '',
  },
  {
    id: 'project-2',
    name: 'Movie App',
    description:
      'Movie E-commerce Website.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'restapi',
        color: 'pink-text-gradient',
      },
    ],
    image: movieapp,
    repo: 'https://github.com/OriVered/movie-app',
    demo: '',
  },
  {
    id: 'project-3',
    name: 'LF-2',
    description: 'This is a rebuild version of the game little fighter 2',
    tags: [
      {
        name: 'C++',
        color: 'blue-text-gradient',
      },
      {
        name: 'SFML',
        color: 'green-text-gradient',
      },
      {
        name: 'OOP',
        color: 'pink-text-gradient',
      },
    ],
    image: LF2,
    repo: 'https://github.com/OriVered/Little-Fighter-2---Rebuild',
    demo: '',
  },
  {
    id: 'project-4',
    name: 'Circle The Dragon',
    description: `OOP project, this game is Original version for the game Circle The Cat.`,
    tags: [
      {
        name: 'C++',
        color: 'blue-text-gradient',
      },
      {
        name: 'SFML',
        color: 'green-text-gradient',
      },
      {
        name: 'OOP',
        color: 'pink-text-gradient',
      },
    ],
    image: circlethedragon,
    repo: 'https://github.com/OriVered/Circle-The-Dragon-Game',
    demo: '',
  },
  {
    id: 'project-5',
    name: 'Proxy downloader',
    description:
      'This project is a console-based program to test some proxy-like functions that control the downloading of URL resources from the web.',
    tags: [
      {
        name: 'java',
        color: 'blue-text-gradient',
      },
      {
        name: 'bean',
        color: 'green-text-gradient',
      },
    ],
    image: proxydownloader,
    repo: 'https://github.com/OriVered/Proxy-downloader',
    demo: '',
  },
];

export { services, technologies, experiences, projects };
