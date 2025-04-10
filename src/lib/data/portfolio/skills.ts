import { SkillCategoryData } from '@/types/portfolio'; 
import { FaReact, FaNodeJs, FaAws, FaDocker, FaDatabase, FaMobileAlt, FaBrain, FaPalette, FaCloud, FaShieldAlt, FaProjectDiagram, FaMicrosoft } from 'react-icons/fa';
import { SiTypescript, SiDotnet, SiSharp, SiNextdotjs, SiTailwindcss, SiKubernetes, SiPostgresql, SiJest, SiPython, SiGit, SiHtml5, SiJavascript, SiVite, SiCss3, SiRedux, SiGraphql, SiCucumber, SiTensorflow, SiFirebase, SiRedis, SiGooglecloud, SiTerraform, SiApachekafka, SiTestinglibrary, SiOpenai, SiSpacy, SiPlotly, SiPandas, SiScikitlearn, SiAuth0, SiFigma } from 'react-icons/si';

export const skills: SkillCategoryData[] = [
    {
        title: "Frontend Development",
        skills: [
            { name: "React.js / React Native", icon: FaReact },
            { name: "Next.js (SSR, SSG, ISR)", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "JavaScript (ES6+)", icon: SiJavascript },
            { name: "Expo (React Native)", icon: FaMobileAlt }, 
            { name: "State Management (Zustand, Redux, Context, TanStack Query)", icon: SiRedux }, 
            { name: "TailwindCSS / Utility-First CSS", icon: SiTailwindcss },
            { name: "CSS-in-JS (Styled-components)", icon: SiCss3 },
            { name: "HTML5 & Semantic CSS3", icon: SiHtml5 }, 
            { name: "Vite / Webpack", icon: SiVite }, 
            { name: "Responsive Design & Accessibility (A11y)" },
        ],
    },
    {
        title: "Backend Development",
        skills: [
            { name: "C# (.NET Core / ASP.NET Core)", icon: SiSharp }, 
            { name: "Node.js (Express / NestJS)", icon: FaNodeJs }, 
            { name: "Python (Flask / Dash)", icon: SiPython }, 
            { name: "RESTful API Design & Development" },
            { name: "GraphQL API Development", icon: SiGraphql },
            { name: "Microservices Architecture", icon: FaProjectDiagram }, 
            { name: "WebSockets / Real-time Communication" },
        ],
    },
     {
        title: "Databases & Data Management",
        skills: [
            { name: "SQL Server (T-SQL)", icon: FaDatabase }, 
            { name: "PostgreSQL (SQL)", icon: SiPostgresql },
            { name: "Firebase Firestore (NoSQL)", icon: SiFirebase }, 
            { name: "Entity Framework Core / Dapper", icon: SiDotnet }, 
            { name: "Redis / Caching Strategies", icon: SiRedis }, 
            { name: "Database Design & Modeling" }, 
        ],
    },
    {
        title: "Cloud, DevOps & Infrastructure",
        skills: [
            { name: "AWS (EC2, S3, Lambda, etc.)", icon: FaAws }, 
            { name: "Firebase Platform", icon: SiFirebase }, 
            { name: "Azure (App Service, Functions - Basic)", icon: FaMicrosoft }, 
             { name: "GCP (Cloud Functions - via Firebase)", icon: SiGooglecloud }, 
            { name: "Docker / Containerization", icon: FaDocker },
            { name: "CI/CD Pipelines (GitHub Actions, Jenkins)", icon: SiGit },
            { name: "Kubernetes (K8s)", icon: SiKubernetes }, 
            { name: "Terraform / IaC", icon: SiTerraform }, 
            { name: "Kafka", icon: SiApachekafka }, 
            { name: "Monitoring & Logging Concepts" }, 
        ],
    },
    {
        title: "Testing & Automation",
        skills: [
            { name: "Jest / Vitest", icon: SiJest }, 
            { name: "React Testing Library (RTL)", icon: SiTestinglibrary }, 
            { name: "Cypress (E2E Testing)", icon: SiCucumber }, 
            { name: "Cucumber (BDD)", icon: SiCucumber }, 
            { name: "Unit, Integration, E2E Testing Strategies" },
            { name: "Test-Driven Development (TDD)" }, 
        ],
    },
    {
        title: "AI, Machine Learning & Data",
        skills: [
            { name: "AI API Integration (OpenAI/ChatGPT)", icon: SiOpenai }, 
            { name: "NLP Fundamentals (spaCy, NLTK)", icon: SiSpacy }, 
            { name: "Prompt Engineering" }, 
            { name: "Data Visualization (Dash, Plotly)", icon: SiPlotly }, 
            { name: "Data Manipulation (Pandas, NumPy)", icon: SiPandas }, 
            { name: "TensorFlow / Keras", icon: SiTensorflow }, 
            { name: "Scikit-learn", icon: SiScikitlearn }, 
            { name: "Data Preprocessing & Analysis" }, 
        ],
    },
    {
        title: "Authentication & Security",
        skills: [
            { name: "OAuth 2.0 / OpenID Connect (OIDC)", icon: SiAuth0}, 
            { name: "JWT (JSON Web Tokens)" },
            { name: "Firebase Authentication", icon: SiFirebase }, 
            { name: "Role-Based Access Control (RBAC)" }, 
            { name: "Web Security Best Practices (OWASP)" }, 
        ],
    },
    {
        title: "Methodologies & Collaboration",
        skills: [
            { name: "Agile / Scrum Methodologies" },
            { name: "Git / Version Control (GitHub, GitLab)", icon: SiGit }, 
            { name: "Code Reviews & Pair Programming" }, 
            { name: "Technical Leadership & Mentoring" }, 
            { name: "Cross-functional Collaboration" }, 
            { name: "Technical Documentation" }, 
            { name: "Figma (Design Collaboration)", icon: SiFigma }, 
        ],
    },
    {
        title: "Software Design & Architecture",
        skills: [
            { name: "System Design Principles" },
            { name: "Microservices vs Monoliths" },
            { name: "Design Patterns (OOD, GoF, etc.)" },
            { name: "SOLID Principles" },
            { name: "Domain-Driven Design (DDD - Basic Concepts)" }, 
            { name: "API Design Best Practices" },
        ],
    }
];