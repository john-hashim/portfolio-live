export const siteConfig = {
  name: "John Hashim",
  title: "Frontend Engineer",
  description: "Portfolio website of John Hashim",
  accentColor: "#1d4ed8",
  social: {
    email: "johnhashim10@gmail.com",
    linkedin: "https://www.linkedin.com/in/john-hashim/",
    github: "https://github.com/john-hashim",
  },
  aboutMe:
    "I'm a front-end engineer with 4+ years of professional experience building robust, scalable web applications — primarily with Angular, NgRx and TypeScript. At TeamWave I led front-end work across an enterprise SaaS suite, from a CRM and an e-signature platform to internal dashboards, and played a key role in transitioning the codebase to Angular 17 with a modular Nx monorepo. Lately I've been going deep on the full-stack React ecosystem, building production-grade AI products like a RAG-powered chatbot platform with LLM-driven actions, vector search and real-time streaming. I care about clean, performant interfaces and shipping things end to end.",
  skills: [
    "Angular",
    "NgRx",
    "RxJS",
    "React",
    "Redux",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "PrimeNG",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Nx Monorepo",
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
      dateRange: "Feb 2021 - Dec 2024",
      bullets: [
        "Led front-end development across the CRM, E-Signature, Dashboard and Project Management modules of an enterprise SaaS suite.",
        "Built the CRM with Angular 17, NgRx, PrimeNG and AG Grid on an Nx monorepo, improving performance and interface consistency.",
        "Developed complete e-signature functionality with Angular and NgRx, integrating Stripe for secure payments and subscription management.",
        "Built and maintained the Project Management module in React and Redux, delivering reusable components for task handling and team collaboration.",
        "Played a pivotal role in transitioning the front-end to Angular 17 and scaling the app through modular monorepo architecture.",
      ],
    },
  ],
  education: [
    {
      school: "APJ Abdul Kalam Technological University",
      degree: "Bachelor of Computer Science and Engineering",
      dateRange: "Aug 2015 - Jul 2019",
      achievements: [],
    },
  ],
};
