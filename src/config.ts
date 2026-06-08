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
      name: "Chatvio",
      label: "Personal",
      liveUrl: "https://chatvio.io",
      githubUrl: "https://github.com/john-hashim/ai-chatbot",
      description:
        "A full-stack SaaS platform for building, training, and embedding custom AI chatbots — RAG-based answers, document training, in-chat booking, and analytics.",
      skills: ["React 19", "TypeScript", "Express", "PostgreSQL", "pgvector", "Prisma"],
      screenshots: [
        "/projects/chatvio1.png",
        "/projects/chatvio2.png",
        "/projects/chatvio3.png",
      ],
      whatIDid: [
        "Designed the product, the UI, and the full system architecture — data model, RAG pipeline, and how every piece fits together.",
        "Built a retrieval-augmented (RAG) chat flow using pgvector similarity search over document embeddings for context-aware answers.",
        "Designed an LLM-driven action system where the model detects intent (e.g. booking) and triggers structured flows mid-stream, with action tokens buffered server-side so they never leak to the client.",
        "Built document training (PDF / DOCX / text / Q&A + website crawling), an appointment-booking flow with availability and email confirmations, and an embeddable widget with domain whitelisting.",
        "Added an analytics dashboard (message/session metrics, geolocation, feedback) and chat history export (JSON / CSV / PDF).",
        "Chose and integrated the stack: React 19, TypeScript, Mantine, Tailwind (frontend); Express, Prisma, PostgreSQL + pgvector (backend); OpenRouter for per-chatbot model selection, HuggingFace embeddings, Cloudflare R2 storage, Google OAuth.",
        "Handled deployment end to end, gaining a working understanding of Vercel (frontend), Railway (backend), and Neon (production PostgreSQL database).",
      ],
    },
    {
      name: "TeamWave CRM",
      label: "TeamWave",
      description:
        "The CRM product in TeamWave's enterprise SaaS suite, built for performance and interface consistency at scale. It spans Deals, People, and Products with rich, data-heavy tables — in-table filtering, custom fields, and custom filters — plus dedicated detail pages for each entity with tag management, all backed by NgRx state.",
      skills: ["Angular 17", "NgRx", "PrimeNG", "AG Grid", "Nx Monorepo", "RxJS"],
      screenshots: [
        "/projects/tw_crm1.png",
        "/projects/tw_crm2.png",
        "/projects/tw_crm3.png",
      ],
      whatIDid: [
        "Built the core CRM data tables for Deals, People, and Products with in-table filtering, custom fields, and user-defined custom filters over large datasets.",
        "Developed per-entity detail pages with tag management for Deals, People, and Products.",
        "Modeled and managed all of this state with NgRx for predictable, scalable data flow across the app.",
        "Enhanced the CRM front end with Angular 17, NgRx, PrimeNG, and AG Grid, driving performance optimization and interface consistency across data-heavy views.",
        "Worked within an Nx monorepo, scaling the app through modular implementation.",
      ],
    },
    {
      name: "TeamWave WorkAI",
      label: "TeamWave",
      description:
        "An in-house, ChatGPT-style AI assistant — a conversational Q&A interface integrated with OpenAI, with support for custom, reusable prompts.",
      skills: ["React", "Tailwind CSS", "Mantine", "OpenAI API"],
      screenshots: ["/projects/tw_workai.png"],
      whatIDid: [
        "Built an internal ChatGPT-style Q&A interface integrated with the OpenAI API, giving the team a private AI assistant.",
        "Implemented a custom prompt system so users could create and reuse their own prompt templates.",
        "Designed the full chat UI with React, Tailwind CSS, and Mantine — responsive, clean, and consistent with the product's design language.",
      ],
    },
    {
      name: "TeamWave — PM, Dashboard & Support Analytics",
      label: "TeamWave",
      description:
        "A set of internal TeamWave modules I contributed to across the suite — the Project Management module, the internal Dashboard, and a support-ticket analytics page.",
      skills: ["React", "Redux", "Angular", "NgRx", "Angular Material"],
      screenshots: [
        "/projects/tw_users_list.png",
        "/projects/tw_dashboard.png",
        "/projects/tw_esign_dashboard.png",
      ],
      whatIDid: [
        "Built features for the Project Management module (React, Redux) — task handling, team collaboration, and project tracking, with reusable, scalable components.",
        "Developed the internal Dashboard (Angular, NgRx, Angular Material) with accessible, responsive components and component-level state management.",
        "Built a support-ticket analytics page, surfacing ticket metrics and trends for the support team.",
      ],
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
