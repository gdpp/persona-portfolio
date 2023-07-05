import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  company,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Finware",
    icon: company,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Present",
    points: [
      "",
      ""
    ],
  },
  {
    title: "Web Developer",
    company_name: "Softtek",
    icon: company,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - May 2023",
    points: [
      "Development features and bugfix on Azure and C# of internal project.",
      "Development features and bugfix on lit element for the project Blaulabs."
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Digitalife",
    icon: company,
    iconBg: "#E6DEDD",
    date: "Jun 2020 - Dec 2021",
    points: [
      "Development and maintenance of CMS and internal ERP for Digitalife company, developed with laravel 5 and angularjs 1.7.",
      "Development, implementation and maintenance of POS (Sales, Orders, Quotes, Products, Product Inputs and Outputs, Validations with webcam and JWT) for company stores developed with Angular 5 and Angular Material in Single Page Application (SPA) for front-end and lumen for the backend api creation- Development and maintenance of CMS and internal ERP for Digitalife company, developed with laravel 5 and angularjs 1.7. - Development, implementation and maintenance of POS (Sales, Orders, Quotes, Products, Product Inputs and Outputs, Validations with webcam and JWT) for company stores developed with Angular 5 and Angular Material in Single Page Application (SPA) for front-end and lumen for the backend api creation"
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Planincorp",
    icon: company,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - May 2020",
    points: [
      "Implementation and development of internal ERP for the company planincorp, developed with php, mvc architecture and object-oriented programming and javascript.",
      "Complete development of the platform recibosmx.com, for the server side: the express js node js framework was implemented and for the frontend was used React in a Single Page Application (SPA) with Plain Css.",
      "Implementation and development of CRM for the company itfisc, developed with php, mvc architecture and object-oriented programming and javascript."
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Sustam",
    icon: company,
    iconBg: "#E6DEDD",
    date: "Jan 2017 - Jan 2018",
    points: [
      "CMS development to peregrinaciones.mx developed with the company's own php framework, mysql and jquery.",
      "Back-end development to camara de joyeria developed with the company's own php framework, mysql and jquery.",
      "Api development to rescue pet developed with php.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };