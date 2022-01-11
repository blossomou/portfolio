import { AiOutlineApi } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs';
import { FaMobileAlt, FaServer } from 'react-icons/fa';
import { MdDeveloperMode } from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';

import { IProject, IService, ISkill } from './models/type';

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about: 'I can build websites using <b> HTML</b>, <b>CSS,</b> and <b>React.js</b> ',
  },
  {
    Icon: FaMobileAlt,
    title: 'Mobile Development',
    about: 'iOS and Android apps using <b> React Native with Expo</b>, <b>Tailwind CSS</b> and <b>Typescript</b> ',
  },
  {
    Icon: FaServer,
    title: 'Backend  Development',
    about: 'Design database using <b>entity framework</b>, api using <b>C# </b> & other popular frameworks',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about: 'I can develop REST API using <b>C#</b> & <b>Node.js</b> ',
  },
  {
    Icon: MdDeveloperMode,
    title: 'Interactive Challenges',
    about: 'A problem solver in <b>Codewars</b> and <b>Edabit</b> ',
  },
  // {
  //   Icon: AiOutlineAntDesign,
  //   title: 'UI/UX designer',
  //   about: 'stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ',
  // },
  // {
  //   Icon: RiComputerLine,
  //   title: 'Whatever',
  //   about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
  // },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: 'C#',
    level: '75%',
  },
  {
    Icon: BsCircleFill,
    name: 'JavaScript',
    level: '70%',
  },
  {
    Icon: BsCircleFill,
    name: 'React Native',
    level: '70%',
  },
  {
    Icon: BsCircleFill,
    name: 'React',
    level: '70%',
  },

  {
    Icon: BsCircleFill,
    name: 'Tailwind CSS',
    level: '50%',
  },
  {
    Icon: BsCircleFill,
    name: 'TypeScript',
    level: '65%',
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: 'SQL',
    level: '70%',
  },

  {
    Icon: BsCircleFill,
    name: 'Visual Studio',
    level: '75%',
  },
  {
    Icon: BsCircleFill,
    name: 'Visual Studio Code',
    level: '75%',
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: 'Weather Dashboard',
    description: 'A simple weather app that retrieves temperature any city',
    image_path: '/images/weatherdashboard.png',
    deployed_url: 'https://blossomou.github.io/WeatherDashboard/',
    github_url: 'https://github.com/blossomou/WeatherDashboard',
    category: ['javascript'],
    key_techs: ['Javascript', 'HTML', 'CSS', 'JQuery'],
  },
  {
    id: 2,
    name: 'Tic-Tac-Toe',
    image_path: '/images/tictactoe.png',
    deployed_url: '',
    github_url: 'https://github.com/blossomou/TicTacToe',
    category: ['typescript', 'react'],
    description: 'A simple mobile game with two difficulty levels',
    key_techs: ['React Native', 'TypeScript'],
  },

  // {
  //   id: 3,
  //   name: 'Tic-Tac-Toe',
  //   image_path: '/images/dev.jpg',
  //   deployed_url: '',
  //   github_url: 'https://github.com/blossomou/TicTacToe',
  //   category: ['typescript', 'react'],
  //   description: 'A simple Tic-tac-toe mobile app',
  //   key_techs: ['React Native', 'TypeScript'],
  // },

  // {
  //   id: 4,
  //   name: 'Realtime Chat App',
  //   image_path: '/images/chatapp.jpg',
  //   deployed_url: 'https://sumit-chat.netlify.app/',
  //   github_url: 'https://github.com/Dey-Sumit/chat-app-socket.io-react-node',
  //   category: ['node', 'react'],
  //   description: 'Basic Realtime Chat App where one can create a room can talk to each other',
  //   key_techs: ['React', 'Node', 'Express', 'Socket', 'Bootstrap'],
  // },

  // {
  //   id: 5,
  //   name: 'Tweeter Clone',
  //   image_path: '/images/tweetme.jpg',
  //   deployed_url: 'http://sumaxtweetme.pythonanywhere.com/',
  //   github_url: 'https://github.com/Dey-Sumit/tweetme',
  //   category: ['react'],
  //   description: 'First Django Project :) | Typical Social Media App where one can post,like ,comment etc',
  //   key_techs: ['React', 'Django', 'Django REST API'],
  // },

  // {
  //   id: 6,
  //   name: 'Color Classification using tf.js',
  //   image_path: '/images/color.jpg',
  //   deployed_url: '!#',
  //   github_url: 'https://github.com/Dey-Sumit/color-classification',
  //   category: ['express'],
  //   description: 'Tried ML with JS :) | this app classifies a color using CNN algorithm in browser',
  //   key_techs: ['Express', 'TensorFlow.js', 'Vanilla js'],
  // },
  // {
  //   id: 7,
  //   name: 'YouTube using YouTube ',
  //   image_path: '/images/youtubeClone.png',
  //   deployed_url: 'https://not-utube.web.app/',
  //   github_url: 'https://github.com/Dey-Sumit/youtube-clone-tutorial-up',
  //   category: ['express'],
  //   description:
  //     'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
  //   key_techs: ['React', 'Redux', 'Firebase Auth', 'YouTube API', 'Sass', 'Bootstrap'],
  // },
  // {
  //   id: 8,
  //   name: 'Football App',
  //   image_path: '/images/football.png',
  //   deployed_url: 'https://o-my-goal.web.app/',
  //   github_url: 'https://github.com/Dey-Sumit/football-app',
  //   category: ['react'],
  //   description:
  //     'o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ',
  //   key_techs: ['React', 'Redux', 'Firebase Auth', 'API', 'Sass', 'Bootstrap'],
  // },
];
