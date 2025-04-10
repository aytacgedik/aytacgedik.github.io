import { ProjectEntry } from '@/types/portfolio';
import { SiDotnet, SiTensorflow, SiPython,  SiUnity } from 'react-icons/si';

export const projects: ProjectEntry[] = [
  {
    name: "Candy MazeTD: Published Indie Game (itch.io)",
    description: "Independently designed, developed, and published 'Candy MazeTD,' a strategic tower defense game on itch.io. Managed the full solo development lifecycle from concept to release using Unity and C#.", 
    technologies: [
        "Unity Engine", "C#", "Game AI", "A* Pathfinding", "UI/UX Design (Unity UI)", 
        "Game State Management", "Asset Management", "itch.io Publishing", 
        "Version Control (Git)"
    ],
    details: [
        "Implemented a dynamic A* pathfinding algorithm allowing intelligent enemy navigation through complex, player-altered mazes in real-time.", 
        "Engineered core gameplay systems: procedural wave spawning, tower placement/upgrades logic, resource management, and persistent scoring.", 
        "Designed and integrated intuitive UI elements (menus, HUD, tooltips) using Unity's UI system and managed complex game state transitions.", 
        "Handled the complete build, packaging, testing, and distribution process for successful publication on the itch.io platform.", 
    ],
    url: "https://astryo.itch.io/candy-mazetd",
    src: "/images/projects/CandyMaze.jpg",
    icon: SiUnity, 
  },

  // --- Cookify ---
  {
    name: "Cookify: Full-Stack Recipe Platform",
    description: "Architected and co-developed a feature-rich, cross-platform recipe application (Web/Mobile) within a 4-person Agile team using TDD principles. Focused on scalable backend architecture and seamless UI/UX.", // Added 'cross-platform', 'TDD principles', 'UI/UX'
    technologies: [
        "ASP.NET Core (C#)", "Entity Framework Core", "MS SQL Server", "Azure SQL Database", 
        "React.js", "React Native", "RESTful API Design", "JWT Authentication", 
        "Azure App Service", "Azure DevOps (CI/CD)", 
        "Unit Testing (xUnit/MSTest)", "Integration Testing", 
        "Agile/Scrum", "TDD"
    ],
    details: [
        "Engineered robust RESTful APIs using ASP.NET Core for comprehensive CRUD operations on users, recipes, ingredients, and meal planning data.", 
        "Developed a responsive web frontend (React.js) and native mobile UI (React Native) utilizing shared component logic where applicable for consistent UX.", 
        "Implemented secure authentication and authorization flows using JWT tokens integrated with the ASP.NET Core Identity framework.", 
        "Designed the relational database schema (MS SQL Server) and configured CI/CD pipelines using Azure DevOps for automated builds and deployments to Azure App Service.", 
    ],
    url: "https://github.com/aytacgedik/Cookify", 
    src: "/images/projects/cookify.jpg", 
    icon: SiDotnet, 
  },

  // --- Sith vs Jedi ---
  {
    name: "Sith vs Jedi (Real-time Multiplayer Game)", 
    description: "Developed a proof-of-concept, real-time multiplayer browser game featuring basic combat mechanics. Utilized Python with WebSockets for backend state synchronization and vanilla JavaScript for frontend rendering.", // Added detail on type and tech usage
    technologies: [
        "Python", "WebSockets (e.g., websockets library or Flask-SocketIO)", 
        "JavaScript (ES6+)", "HTML5 Canvas API", "CSS3", 
        "Real-time Communication", "State Synchronization", 
        "Git"
    ],
    details: [
        "Implemented server-side game logic in Python, managing player positions, actions, and game state.",
        "Utilized WebSockets for low-latency, bi-directional communication between the server and multiple clients.",
        "Developed the frontend rendering loop using vanilla JavaScript and the HTML5 Canvas API to draw game entities and animations.",
        "Handled client-side input and state updates based on messages received from the server via WebSockets.",
    ],
    url: "https://github.com/aytacgedik/Sith-vs-Jedi/tree/master", 
    src: "/images/projects/sithvsjedi.jpg", 
    icon: SiPython, 
  },

  // --- ML Stock Trend Forecaster ---
  {
    name: "ML Stock Trend Forecaster (LSTM)",
    description: "Engineered an end-to-end proof-of-concept application leveraging LSTM neural networks (TensorFlow/Keras) to predict stock market price trends from historical time-series data.", 
    technologies: [
        "Python", "TensorFlow", "Keras", "Scikit-learn", 
        "Pandas", "NumPy", 
        "Matplotlib", 
        "Tkinter (GUI)", 
        "Time Series Analysis", "Deep Learning", "Machine Learning Workflow", 
        "Data Preprocessing", "Feature Engineering"
    ],
    details: [
        "Developed data ingestion and feature engineering pipelines using Pandas for cleaning, transforming, and scaling large historical stock price datasets.", 
        "Implemented, trained, and evaluated LSTM models in TensorFlow/Keras, analyzing performance metrics (e.g., MAE, RMSE) against baseline statistical models.", 
        "Created an interactive desktop GUI using Tkinter allowing users to select stocks, configure prediction parameters, and visualize forecast results against actual price movements.", 
        "Demonstrated practical application of deep learning for complex, noisy financial time-series forecasting.",
    ],
    url: "https://github.com/aytacgedik/Stock-Trend-Prediction-with-LSTM/tree/master", 
    src: "/images/projects/stockAI.jpg", 
    icon: SiTensorflow, 
  },
];