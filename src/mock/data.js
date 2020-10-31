import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Emmanuel Hembrom',
  subtitle: 'MERN Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilePic.jpg',
  paragraphOne:
    'My strongest suit in web based development is the ability to handle wide range of latest web technologies. I strive to build detailed, user-friendly, and responsive user interfaces using JavaScript libraries (my current favorite is React ). For backend development I prefer some fresher backend technologies, such as Node.js, Express js, Mongodb.',
  // paragraphTwo: '',
  // paragraphThree: '',
  resume: 'https://drive.google.com/file/d/13NX-LOIj48VW5E6ru94lH2j7hWepOkon/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'React-Creative-Agency-App-Web.png',
    title: 'Creative Agency',
    info: 'A full-stack agency service app using React js, MongoDb, Node js and Express js.',
    info2: '',
    url: 'https://creative-client-agency.web.app/',
    repo: 'https://github.com/Emmauel99/creative-agency-server', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'React-Volunteer-Network-App-web.png',
    title: 'Volunteer Network',
    info:
      'A full stack Volunteer registration website using React js, MongoDb, Node js and Express js',
    info2: '',
    url: 'https://volunteer-network-auth-b52c8.web.app/?',
    repo: 'https://github.com/Emmauel99/volunteer-client-server', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'react-travel-guru-2-web.png',
    title: 'Travel Guru',
    info: 'A simple firebase authentication website using React js,Frebase,Google Map',
    info2: '',
    url: 'https://mystifying-northcutt-3acfcb.netlify.app/',
    repo: 'https://github.com/Emmauel99/travel-guru', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Contact me',
  email: 'emuhembrom@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/EmuHembrom?s=09',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/emu-hembrom-5325a31b1/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Emmauel99',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
