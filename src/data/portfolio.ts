export interface Project {
  id: number;
  title: string;
  description: string;
  shortDesc: string;
  tags: string[];
  image: string;
  github: string;
  live?: string;
  featured: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sastra life coaching",
    shortDesc: "Transform your life with expert guidance.",
    description: "Developed a psychology-focused web platform to support mental well-being, enabling users to access coaching services, resources, and personalized guidance in a secure and responsive environment.",
    tags: ["React.js","Supabase","TypeScript"],
    image: "https://res.cloudinary.com/dq2jknhhf/image/upload/v1775806690/sastralife_coed4y.jpg",
    github: "https://github.com/Pk320308/sastralifecoaching",
    live: "https://sastralifecoaching.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    shortDesc: "Full-featured online store with payments",
    description:
      "Complete e-commerce solution with product catalog, shopping cart, Stripe payment integration, and admin dashboard. Deployed with serverless backend and CDN.",
    tags: ["React.js", "MongoDB" ,"TypeScript"],
    image: "https://res.cloudinary.com/dq2jknhhf/image/upload/v1775807072/eshop_xnfu6g.png",
    github: "https://github.com/Pk320308/eshop_fronted",
    live: "https://eshop-fronted.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio HTML",
    shortDesc: "Built a personal portfolio website using HTML",
    description:
      "Built a personal portfolio website using HTML to showcase projects, skills, and personal information in a clean and structured layout.",
    tags: ["Html,Css,Javascript"],
    image: "https://res.cloudinary.com/dq2jknhhf/image/upload/q_auto/f_auto/v1775807088/htmlportfolio_ehpzkq.png",
    github: "https://github.com/Pk320308/Portfolio-html",
     live: "https://priyanshu-eta.vercel.app/",
    featured: true,
  },
 
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "ReactNativ",
      "HTML/CSS",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git – Used for version control, branching, and collaboration",
"Vercel – Used for fast deployment, hosting, and serverless functions",
"Supabase – Used for authentication, real-time database, and backend services",
"GitHub Actions – Used for CI/CD automation, testing, and deployment workflows",
"Render – Used for deploying backend APIs, managing servers, and enabling continuous deployment",],
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Communication", "Team Collaboration", "Project Management"],
  },
];

export const experience: Experience[] = [
  {
    id: 1,
    role: "WEB Development Intern",
    company: "TechOctanet",
    period: "Jun 2024 - Jul 2024",
    description: [
      "Developed responsive and user-friendly UI components using React.js and Tailwind CSS",
    "Assisted in improving frontend performance and optimizing page load time",
    "Used Git for version control and collaborated with team on frontend tasks",
    ],
    skills: ["HTML", "JavaScript", "CSS", "Reactjs", "Git"],
  },
  {
    id: 2,
    role: "MERN Stack",
    company: "CODEC Technology",
    period: "Aug 2025 - sep 2025",
    description: [
   "Developed full-stack web applications using MERN stack (React.js, Node.js, Express.js, MongoDB)",
    "Built RESTful APIs and handled backend logic for scalable applications",
    "Integrated Razorpay payment gateway and managed application deployment",
    ],
    skills: ["React.js", "Node.js", "MongoDb", "Express.js", "RazorPay", "Deployment"],
  },
  {
    id: 3,
    role: "Back End Developer",
    company: "ShyamEdTech (Freelance)",
    period: "Aug 2025 - present",
    description: [
      "Designed and developed backend services and APIs using Node.js and Express.js",
    "Managed MongoDB databases ensuring data efficiency and scalability",
    "Handled deployment processes and maintained codebase using Git and GitHub",
    ],
    skills: ["Node.js", "MongoDb", "Express.js", "Deployment",  "Git", "GitHub"],
  },
];
