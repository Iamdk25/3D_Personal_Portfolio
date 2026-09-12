import {
  mobile,
  backend,
  creator,
  web,
  python,
  typescript,
  javascript,
  reactjs,
  nodejs,
  tailwind,
  mongodb,
  postgresql,
  pytorch,
  aws,
  docker,
  threejs,
  COE,
  USF,
  abbvie,
  veer,
  engcouncil,
  gwc,
  paal,
  eeris,
  quantumstock,
  LinkedInLogo,
  GithubLogo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/dkarmariya/",
    imgSrc: LinkedInLogo,
  },
  {
    id: "github",
    title: "GitHub",
    href: "https://github.com/Iamdk25",
    imgSrc: GithubLogo,
  },
];

const services = [
  {
    title: "Full-Stack Engineering",
    icon: web,
    description:
      "React, TypeScript and Next.js front ends over Node and FastAPI services — schema, API and UI built end to end.",
  },
  {
    title: "AI / ML Engineering",
    icon: backend,
    description:
      "PyTorch and I-JEPA embeddings, RAG pipelines with LangChain, CrewAI and Pinecone, plus evaluation harnesses that keep output grounded.",
  },
  {
    title: "Data Visualization at Scale",
    icon: creator,
    description:
      "WebGPU and Web Workers rendering 1M+ concurrent interactive points at sub-100ms latency and 60 fps.",
  },
  {
    title: "iOS Development",
    icon: mobile,
    description:
      "Swift applications built through CodePath's Intermediate iOS Development program.",
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "AbbVie",
    icon: abbvie,
    iconBg: "#071D49",
    date: "May 2026 - Present",
    points: [
      "Accelerated enterprise drug discovery by 20% by engineering an end-to-end MLOps image-processing CI/CD pipeline that classifies clinical cellular phenotypic phases from I-JEPA PyTorch embeddings.",
      "Scaled visualization capacity 20x by building bioinformatics platforms that render 1M+ concurrent interactive data points at sub-100ms latency and 60 fps using React 18, TypeScript, WebGPU, Web Workers and TanStack routing.",
      "Cut data retrieval latency by 40% by constructing an asynchronous FastAPI microservice (15+ REST endpoints) on AWS S3 that executes cosine similarity over microscopy datasets.",
    ],
  },
  {
    title: "AI/ML Research Assistant",
    company_name: "USF Bellini College of AI, Cybersecurity, and Computing",
    icon: USF,
    iconBg: "#006747",
    date: "May 2026 - Present",
    points: [
      "Diagnosed student cognitive states in real time with sub-250 ms latency by building a secure CanvasLTI platform that maps memory context, reaching 83.3% risk-flag detection accuracy.",
      "Reduced passive answer seeking by 40% with a React generative UI and a zero-leakage Python evaluation harness (LangChain + Pydantic) that enforces deterministic JSON schemas and generates context-aware follow-up prompts.",
    ],
  },
  {
    title: "Procurement Card Student Assistant",
    company_name: "USF College of Engineering - Resource Management",
    icon: COE,
    iconBg: "#008631",
    date: "September 2023 - April 2026",
    points: [
      "Streamlined expenditure approvals for 350+ PCards by automating financial verification with Python libraries.",
      "Optimized reconciliation workflows for J.P. Morgan & Chase, reducing statement processing time by 10%.",
      "Accelerated approval flow to securely process 150+ approvals per day by developing AI-driven ticketing systems on Jira APIs.",
    ],
  },
  {
    title: "Business and Technology Intern",
    company_name: "Veer Pharmachem",
    icon: veer,
    iconBg: "#0E7490",
    date: "April 2022 - July 2022",
    points: [
      "Reduced reporting errors by 95% and analysis time by 20% by developing a Power BI dashboard that visualizes 500+ QC batches.",
      "Eliminated 3+ hours of weekly manual checks by programming an automated inventory tracker in C for 250+ reagents.",
      "Increased sales inquiries by over 30% by redesigning website lead-capture forms in Figma using standard UX principles.",
    ],
  },
  {
    title: "Marketing & Communications Chair",
    company_name: "Engineering Council, University of South Florida",
    icon: engcouncil,
    iconBg: "#006747",
    date: "May 2024 - May 2026",
    points: [],
  },
  {
    title: "Technical Chair",
    company_name: "Girls Who Code College Loop, USF Chapter",
    icon: gwc,
    iconBg: "#0EA5A4",
    date: "January 2023 - May 2024",
    points: [],
  },
];

const projects = [
  {
    name: "PAAL - Promptless AI-Assisted Learning",
    description:
      "A deterministic RAG learning platform that removes prompt-engineering friction. A 5-agent CrewAI pipeline on Gemini 2.5 Flash ingests course material through LlamaParse and LangChain into Pinecone, while a 7-endpoint FastAPI backend and a React 19 front end generate dynamic quizzes and personalized study guides with fully grounded output.",
    tags: [
      { name: "CrewAI", color: "blue-text-gradient" },
      { name: "LangChain", color: "green-text-gradient" },
      { name: "FastAPI", color: "pink-text-gradient" },
      { name: "React 19", color: "blue-text-gradient" },
    ],
    image: paal,
    source_code_link: "https://github.com/Iamdk25/PAALapp",
  },
  {
    name: "EERIS - Expense Management Platform",
    description:
      "A secure full-stack expense manager for 1,000+ users, with a React and Vite front end providing OTP login and real-time tracking over a Node.js/Express REST API. An OpenAI-powered receipt classifier cut processing time by 27%, with Nodemailer handling automated notifications.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express", color: "pink-text-gradient" },
      { name: "MongoDB", color: "blue-text-gradient" },
    ],
    image: eeris,
    source_code_link: "https://github.com/deshninad/EERIS",
  },
  {
    name: "QuantumStock - Predictive Market Analysis",
    description:
      "A C# stock analysis application on the .NET Framework that models 5,000+ data points behind a Windows Forms GUI, with a Gemini API-powered 'SmartCandlestick' module that detects 12+ patterns and improved trend-forecasting accuracy by 35%.",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: ".NET", color: "green-text-gradient" },
      { name: "Gemini API", color: "pink-text-gradient" },
      { name: "Tableau", color: "blue-text-gradient" },
    ],
    image: quantumstock,
    source_code_link: "https://github.com/Iamdk25/QuantumStock",
  },
];

export { services, technologies, experiences, projects };
