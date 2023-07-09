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
  tailwind,
  nodejs,
  mongodb,
  git,
  jobit,
  tripguide,
  threejs,
  wordpress,
  funktion,
  mmbbs,
  nextJS,
  promptshare,
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
    title: "Junior Web Developer",
    icon: web,
  },
  {
    title: "Frameworks - React.js, next.js and Vite",
    icon: backend,
  },
  {
    title: "SEO Optimisation",
    icon: mobile,
  },
  {
    title: "WordPress and CMS",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  }, {
    name: "WordPress",
    icon: wordpress,
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
    name: "next.js",
    icon: nextJS,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "mongodb",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "School - MMBBS Hannover - Application Development",
    company_name: "MMBBS",
    icon: mmbbs,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Present",
    points: [
      "Learning Java, python and C#.",
      "Learning Oracle and Cloud Solutions.",
      "Understanding key principles in Networking.",
      "Gaining an understanding of Standup meetings and Scrums.",
    ],
  },
  {
    title: "Junior Web Developer",
    company_name: "Funktion5 GmbH",
    icon: funktion,
    iconBg: "#fff",
    date: "Feb 2022 - Present",
    points: [
      "Developing and maintaining web applications using CMS and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Development of Custom Plugins and functionaleties according to Customers visions."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Chris proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Chris does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Chris optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "PromptShare - AI Prompts",
    description:
      "Full-stack CRUD project using Next.js and deployed on Vercel. Use of Google OAuth, MongoDB, and API routes. Allows users to share their collection of AI prompts for ChatGPT and other AI.",
    tags: [
      {
        name: "next.js",
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
    image: promptshare,
    source_code_link: "https://github.com/ChrisM922/project_prompt_share",
  },
  {
    name: "Job IT (Placeholder)",
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
    name: "Trip Guide (Placeholder)",
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
    source_code_link: "https://github.com/ChrisM922",
  },
];

export { services, technologies, experiences, testimonials, projects };