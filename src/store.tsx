import { AiOutlineHome, AiOutlineUser, AiFillPhone } from 'react-icons/ai';
import { BsWindowFullscreen } from 'react-icons/bs';
import {
  BiLogoReact,
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoGraphql,
  BiLogoPostgresql,
} from 'react-icons/bi';
import { BsFiletypeSql, BsGithub, BsGit } from 'react-icons/bs';
import { SiExpress, SiJest, SiMongoose, SiApollographql } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import htmlIcon from '/assets/html.svg';
import cssIcon from '/assets/css.svg';
import jsIcon from '/assets/js.svg';
import typescriptIcon from '/assets/typescript.svg';
import reactIcon from '/assets/react.svg';
import nodeIcon from '/assets/node.svg';
import vscodeIcon from '/assets/vscode.svg';
import githubIcon from '/assets/github.svg';
import linkeInIcon from '/assets/linkedin.svg';
import graphqlIcon from '/assets/graphql.svg';
import materialUIIcon from '/assets/material-ui.svg';

export const svgs: string[] = [
  htmlIcon,
  cssIcon,
  jsIcon,
  typescriptIcon,
  reactIcon,
  nodeIcon,
  vscodeIcon,
  githubIcon,
  linkeInIcon,
  graphqlIcon,
  materialUIIcon,
];

export const iconList: { skill: string; icon: JSX.Element }[] = [
  { skill: 'React', icon: <BiLogoReact /> },
  { skill: 'TypeScript', icon: <BiLogoTypescript /> },
  { skill: 'JavaScript', icon: <BiLogoJavascript /> },
  { skill: 'Node', icon: <BiLogoNodejs /> },
  { skill: 'Express', icon: <SiExpress /> },
  { skill: 'Mongoose', icon: <SiMongoose /> },
  { skill: 'Apollo', icon: <SiApollographql /> },
  { skill: 'GraphQL', icon: <BiLogoGraphql /> },
  { skill: 'RestfulAPI', icon: <TbApi /> },
  { skill: 'Jest', icon: <SiJest /> },
  { skill: 'MongoDB', icon: <BiLogoMongodb /> },
  { skill: 'PostgreSQL', icon: <BiLogoPostgresql /> },
  { skill: 'SQL Server', icon: <BsFiletypeSql /> },
  { skill: 'Git', icon: <BsGit /> },
  { skill: 'GitHub', icon: <BsGithub /> },
];

export const navMenu: { label: string; to: string; icon: JSX.Element }[] = [
  { label: 'Home', to: '/', icon: <AiOutlineHome /> },
  { label: 'About', to: '/about', icon: <AiOutlineUser /> },
  { label: 'Project', to: '/projects', icon: <BsWindowFullscreen /> },
  { label: 'Contact', to: '/contact', icon: <AiFillPhone /> },
];

export const jobTitle: string[] = [
  'Software Engineer',
  'Mern Developer',
  'Fullstack Developer',
  'Still Growing Developer',
];

export const projects: {
  id: number;
  title: string;
  link: string;
  description: string;
  skills: string;
}[] = [
  {
    id: 1,
    title: 'Mern Post',
    link: 'https://github.com/HyunwooMoon-developer/mern-post',
    description:
      'Mern Post is a blog app. The user can post, like or comment. Users can sign up and log in, and users can delete their comments or posts. This app based on MongoDB, Express, React, TypeScript, Node.js, and Graphql.',
    skills: 'Mongoose, Express.js, Node.js, Graphql, React',
  },
  {
    id: 2,
    title: 'Coin World',
    link: 'https://github.com/HyunwooMoon-developer/coin-world',
    description:
      'Coin World can check real-time information on coin through charts. You can add or remove coins to your wallet. Based on React, we imported the data using Restful API and charted it as Chart.js.',
    skills: 'React, JavaScript, HTML/CSS, Web APIs, Chart.js',
  },
  {
    id: 3,
    title: 'Your Moon Client',
    link: 'https://github.com/HyunwooMoon-developer/yourmoon-client',
    description:
      'Your Moon sells Candle as an E-commerce shopping mall. Users can sign up and log in as members and select items they want and save them in Cart. Also user can share reviews and rate. Client side based on React, RestfulAPIs.',
    skills: 'React, Javascript, HTML/CSS, RESTful',
  },
  {
    id: 4,
    title: 'Your Moon Server',
    link: 'https://github.com/HyunwooMoon-developer/yourmoon-api',
    description:
      'Your Moon sells Candle as an E-commerce shopping mall. Users can sign up and log in as members and select items they want and save them in Cart. Also user can share reviews and rate. Server side based on Node Express.js, PostgreSQL.',
    skills: 'Node Express.js, PostgreSQL',
  },
  {
    id: 5,
    title: 'Petful Client',
    link: 'https://github.com/HyunwooMoon-developer/petful-app',
    description:
      'An app that allows users to navigate through pet availability and adoption. Adoption here is first in, first out. Adoption is possible after the early adopter is over. Client side based on React, RestfulAPIs.',
    skills: 'React, Javascript, HTML/CSS, RESTful',
  },
  {
    id: 6,
    title: 'Petful Server',
    link: 'https://github.com/HyunwooMoon-developer/petful-server',
    description:
      'An app that allows users to navigate through pet availability and adoption. Adoption here is first in, first out. Adoption is possible after the early adopter is over. Server side based on Node Express.js, PostgreSQL.',
    skills: 'Node Express.js, PostgreSQL',
  },
];
