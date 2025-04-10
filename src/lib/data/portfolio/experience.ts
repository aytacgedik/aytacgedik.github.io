import { ExperienceEntry } from '@/types/portfolio'; 
import { FaMobileAlt, FaCogs, FaBrain } from 'react-icons/fa';

export const featuredWork: ExperienceEntry[] = [
  {
    company: "MentorHub",
    role:  "Co-Founder & Software Architect", 
    dateTitle: "Present", 
    dates: "Dec 2024 – Present",    
    location: "Candia, NH",
    description: "Co-founded MentorHub, defining the technology roadmap, architecting the full-stack system, and leading end-to-end development to scale the platform from MVP to a feature-rich web and mobile application.", 
    achievements: [
      "Architected and delivered a scalable, maintainable cross-platform solution (iOS, Android, Web) utilizing React Native (Expo) and Next.js in a monorepo structure, achieving consistent UX and broad market reach.", 
      "Engineered and integrated a core AI feature using the OpenAI API (ChatGPT) with effective prompt engineering, automating personalized plan generation and reducing manual trainer input time by over 80%.",
      "Implemented robust, secure, and scalable user authentication/authorization flows (OAuth, JWT, Firebase Auth) and integrated Stripe API for complex subscription logic and automated revenue operations.", 
      "Built and deployed real-time communication features (live chat, video calls via WebSockets) and designed performant, insightful data dashboards using Firebase listeners, significantly boosting user engagement and retention.", 
      "Established CI/CD pipelines using GitHub Actions, automating testing and deployment processes, improving code quality and release frequency." 
    ],
    technologies: [
      // Core Frontend/Mobile
      "React Native", "Expo", "React.js", "Next.js", "TypeScript", "JavaScript (ES6+)",
      // Styling
      "TailwindCSS", "CSS-in-JS",
      // State Management 
      "TanStack Query", "Zustand", 
      // Backend/API
      "Node.js", "NextJS", 
      // Database & Cloud
      "Firebase (Auth, Firestore, Functions, Hosting)", 
      // APIs & Services
      "Stripe API", "OpenAI API (ChatGPT)", "RESTful API Design",
      // Real-time & Comms
      "WebSockets", "Socket.IO",
      // Auth & Security
      "JWT", "OAuth 2.0",
      // Testing 
      "Jest", "Cypress (E2E)",
      // DevOps & Tools
      "Git", "GitHub Actions (CI/CD)", "Docker",
      // Concepts & Methodologies
      "System Architecture", "Agile Development", "Product Management", "Prompt Engineering", "Cross-Platform Development"
    ],
    icon: FaMobileAlt,
},
{
  company: "MicroStrategy",
  role: "Software Engineer",
  dateTitle:"2022 - 2024", 
  dates: "Feb 2022 – Dec 2024", 
  location: "Warsaw, PL",
  description: "Contributed to the development and enhancement of core features within MicroStrategy's large-scale enterprise business intelligence platform, focusing on backend API performance optimization, frontend architecture scalability, and overall system reliability.", 
  achievements: [
     "Spearheaded backend optimization for critical reporting APIs (C#/.NET Core), implementing distributed caching (Redis) and advanced SQL query tuning, achieving a 30% reduction in average response times under peak load.", 
     "Designed and implemented highly reusable, testable frontend components in React/TypeScript utilizing MVVM patterns within a large-scale codebase, contributing to a 40% decrease in regression bug introduction rate for key UI modules.", 
     "Collaborated closely with cross-functional teams on API design and microservice integration initiatives, significantly improving data processing throughput (~50%) for critical data ingestion and analytics workflows.", 
     "Championed BDD test automation practices using Jest (Unit/Integration) and Cucumber (E2E), establishing robust testing frameworks that ensured >99.9% reliability for core platform modules and enhanced application security through rigorous testing of updated OAuth 2.0/JWT protocols.", 
     "Mentored junior engineers on best practices for code quality, testing, and version control (Git), fostering team growth and improving overall code maintainability.",
      "Participated in Agile ceremonies (sprint planning, reviews, retrospectives), contributing to efficient delivery cycles and continuous process improvement."
  ],
  technologies: [
    // Core Backend
    "C#", ".NET Core", ".NET Framework", "ASP.NET Core",
    // Core Frontend
    "React.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3/SASS/LESS", "Tailwind", 
    // Architecture & Patterns
    "Microservices Architecture", "MVVM", "RESTful API Design", "System Design", "Design Patterns",
    // Database & Cache
    "SQL Server", "T-SQL", "Entity Framework Core/Dapper", 
    "Redis", "Caching Strategies",
    // Testing
    "Jest", "React Testing Library (RTL)", "Cucumber (Gherkin)", "BDD", "TDD",
    "Unit Testing", "Integration Testing", "End-to-End (E2E) Testing(Smoke test)",
    // Auth & Security
    "OAuth 2.0", "JWT", "IdentityServer", "Security Best Practices",
    // DevOps & Tools
    "Git", "Jira/Rally", "CI/CD Pipelines",
    // BI / Domain Specific
    "Business Intelligence Concepts", 
    // Methodologies
    "Agile Development", "Scrum"
  ],
   icon: FaCogs,
},
{
  company: "KPMG",
  role: "AI Engineer (Frontend & Data Viz)", 
  dateTitle:"2020 - 2022", 
  dates: "Mar 2020 – Jan 2022", 
  location: "Warsaw, PL",
  description: "Developed bespoke AI-driven solutions and interactive data visualization tools for financial services clients, focusing on extracting actionable insights from complex datasets and optimizing data workflows.", // Added 'bespoke', 'financial services clients', 'actionable'
  achievements: [
      "Developed highly interactive data visualization dashboards using Python (Dash, Plotly, Pandas) and frontend technologies (TypeScript, React), enabling financial analysts to intuitively explore and validate complex AI-generated risk/fraud detection insights.", 
      "Engineered and optimized Python-based data processing pipelines (potentially using Airflow/Luigi or custom scripts) for large-scale financial transaction analysis, improving data throughput by 30% and reducing cloud compute resource consumption on AWS.", 
      "Created and deployed NLP algorithms utilizing libraries like NLTK for tasks such as Named Entity Recognition (NER) and relation extraction from unstructured financial documents (e.g., regulatory filings, contracts), achieving an estimated >70% reduction in manual data extraction time for key audit/compliance processes.", 
      "Collaborated with data scientists and client stakeholders to define requirements, iterate on prototypes, and ensure alignment between AI model outputs and visualization needs.",
      "Contributed to internal knowledge sharing sessions on data visualization best practices and modern frontend development techniques."
  ],
  technologies: [
    // Core Languages & Libraries
    "Python", "Pandas", "NumPy", 
    "TypeScript", "JavaScript (ES6+)", "React.js",
    // Data Visualization
    "Dash (Plotly)", "Plotly.js", "Matplotlib/Seaborn", "Data Visualization Best Practices",
    // AI / NLP
    "NLP Fundamentals", "spaCy", "NLTK", "Scikit-learn (if used for related tasks)", 
    "Named Entity Recognition (NER)", "Text Classification",
    // Data Engineering & Pipelines
    "Data Pipelines", "ETL Concepts", "SQL", 
    "Docker",
    // Frontend & Web
    "HTML5", "CSS3", "REST APIs",
    // Cloud 
    "AWS", 
    // Tools & Methodologies
    "Git", "Jupyter Notebooks", "Agile/Scrum", "Client Collaboration" 
  ],
  icon: FaBrain, 
},
];