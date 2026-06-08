export const siteConfig = {
  name: "John Hashim",
  title: "Full Stack Engineer",
  description: "Portfolio website of John Hashim",
  accentColor: "#1d4ed8",
  social: {
    email: "johnhashim10@gmail.com",
    linkedin: "https://www.linkedin.com/in/john-hashim/",
    github: "https://github.com/john-hashim",
  },
  aboutMe: [
    "Full-stack engineer, 4+ years building scalable web apps.",
    "Lead Front-End Engineer at TeamWave; led the Angular 17 migration.",
    "Shipped an e-signature module and a high-performance CRM.",
    "Architected Chatvio, a full-stack AI chatbot platform with RAG.",
    "Work mainly in React and Angular with TypeScript.",
    "Open to front-end and full-stack roles.",
  ],
  skills: [
    "React",
    "Angular",
    "Node.js",
    "PostgreSQL",
    "Express",
    "Prisma",
    "Redux",
    "NgRx",
    "Zustand",
    "RxJS",
    "Tailwind CSS",
    "Angular Material",
    "PrimeNG",
    "shadcn/ui",
    "Mantine",
    "Bootstrap",
    "Git",
  ],
  projects: [
    {
      name: "AI Chatbot Builder",
      description:
        "A full-stack SaaS platform for creating, training, and deploying custom AI chatbots. Features RAG-based chat with pgvector similarity search, an LLM-driven action registry that detects intent and triggers structured flows (like appointment booking) mid-stream, document/website training, embeddable widgets with domain whitelisting, per-chatbot model selection via OpenRouter, and analytics.",
      link: "https://github.com/john-hashim/ai-chatbot",
      skills: ["React 19", "TypeScript", "Node.js", "PostgreSQL", "pgvector", "RAG"],
    },
    {
      name: "TeamWave — Enterprise SaaS Suite",
      description:
        "Led front-end development across multiple modules of an enterprise SaaS suite. Built the CRM with Angular 17, NgRx, PrimeNG and AG Grid on an Nx monorepo; developed complete e-signature functionality with Stripe payment integration; and built the internal dashboard with Angular Material and component-level NgRx. Proprietary, closed-source company work.",
      skills: ["Angular 17", "NgRx", "RxJS", "PrimeNG", "AG Grid", "Nx Monorepo"],
    },
    {
      name: "EchoWrite — Personalized AI Chat App",
      description:
        "A full-stack AI chat app that adapts to the user's tone and remembers past conversations for natural, context-rich exchanges. Tone-adaptive responses via Google Generative AI, Redis-based session persistence and chat memory, Google OAuth sign-in, and a PostgreSQL/Prisma backend. Deployed on an AWS EC2 instance.",
      link: "https://github.com/john-hashim/echowrite",
      skills: ["React", "TypeScript", "Zustand", "Node.js", "Redis", "PostgreSQL"],
    },
    {
      name: "Unbanking.io — Landing Page",
      description:
        "Designed and developed the Unbanking.io marketing landing page end to end with Next.js and Tailwind CSS, owning the work from design through to a polished, responsive implementation.",
      skills: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
  ],
  experience: [
    {
      company: "TeamWave",
      title: "Lead Front-End Engineer",
      dateRange: "Feb 2023 - Dec 2024",
      bullets: [
        "Led the front-end migration to Angular 17 across the SaaS suite, modernizing legacy modules and setting the standards the team built against.",
        "Architected a modular Nx monorepo, improving scalability and letting product teams ship independently.",
        "Owned the CRM front end (Angular 17, NgRx, PrimeNG, AG Grid), focused on performance and interface consistency at enterprise data scale.",
        "Drove front-end architecture decisions and guided the team on state management and component design.",
      ],
    },
    {
      company: "TeamWave",
      title: "Associate Front-End Engineer",
      dateRange: "Feb 2021 - Feb 2023",
      bullets: [
        "Built and shipped features across multiple products, including the Project Management module (React, Redux) — task handling, collaboration, and project tracking.",
        "Developed the internal Dashboard (Angular, NgRx, Angular Material) with reusable, accessible UI components.",
        "Contributed to the e-signature module (Angular, NgRx) and led the Unbanking.io landing page (Next.js, Tailwind), owning it from design to delivery.",
        "Grew from feature delivery into broader ownership of front-end quality and architecture.",
      ],
    },
  ],
  education: [
    {
      school: "Amal Jyothi College of Engineering",
      university: "APJ Abdul Kalam Technological University",
      degree: "B.Tech in Computer Science and Engineering",
      dateRange: "Aug 2015 - Jul 2019",
      description:
        "Pursued a degree in Computer Science at Amal Jyothi College of Engineering from Aug 2015 to Jul 2019.",
      achievements: [],
    },
  ],
};
