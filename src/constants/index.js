import {
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
    firebase,
    nextjs,
    python,
    opencv,
    sumitup,
    figpro,
    codopedia,
    github,
    linkedin,
    instagram
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
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "‎ CSS 3",
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
      name: "ReactJS",
      icon: reactjs,
    },
    {
      name: "Redux",
      icon: redux,
    },
    {
      name: "Tailwind",
      icon: tailwind,
    },
    {
      name: "NodeJS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "‎ Next.js",
      icon: nextjs,
    },
    {
      name: "‎‎ ‎ ‎ ‎ ‎  Git",
      icon: git,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "OpenCV",
      icon: opencv,
    },
  ];
  
  const projects = [
    {
      name: "Fig Pro",
      description:
        "This website integrates LiveBlocks for real-time design, allowing seamless creation, editing, and PDF exportation. It incorporates version control and captivating UI/UX",
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
      image: figpro,
      source_code_link: "https://github.com/mansidhamne/figma-clone",
    },
    {
      name: "Codepedia",
      description:
        "This is the ultimate MERN web application, seamlessly blending CRUD operations, user authentication, and an intuitive Dark Mode/Light Mode toggle.",
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
      image: codopedia,
      source_code_link: "https://github.com/mansidhamne/codopedia",
    },
    {
      name: "Sum It Up",
      description:
        "This is an innovative project designed to address the challenge of processing and condensing lengthy articles using AI techniques.",
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
      image: sumitup,
      source_code_link: "https://github.com/mansidhamne/AI-Summarizer",
    },
  ];

  const contacts = [
    {
      name: "Github",
      link: "https://github.com/mansidhamne",
      image: github,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/mansi-dhamne/",
      image: linkedin,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/mansidhamne_/",
      image: instagram,
    }
    
  ]
  
  export { technologies, projects, contacts };