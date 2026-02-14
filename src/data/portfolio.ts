// src/data/portfolio.ts

// Add these fields to your existing project objects
export interface Project {
  id: string;          // The URL slug (e.g., 'smart-logistics')
  title: string;
  tagline: string;     // Short description for the hero section
  tech: string[];      // ["C++", "React", "Node"]
  github: string;
  live: string;        // Live demo link
  challenge: string;   // "The Problem" section
  solution: string;    // "How I solved it" section
  features: string[];  // List of key features
}

// Example Data (The Template uses this structure)
export const PROJECTS: Project[] = [
  {
    id: "template-project", // This will be at /projects/template-project
    title: "Project Name",
    tagline: "A one-sentence hook about what this project achieves.",
    tech: ["Tech 1", "Tech 2", "Tech 3"],
    github: "https://github.com/yourusername",
    live: "https://yourdemo.com",
    challenge: "Describe the core problem here. What was difficult? Why did this need to be built? This section shows you understand 'User Needs'.",
    solution: "Describe your technical approach. Did you use a specific algorithm? How did you handle scalability? This section shows 'Engineering Depth'.",
    features: [
      "Feature 1: Explain a key capability",
      "Feature 2: Explain another capability",
      "Feature 3: Explain a third capability"
    ]
  }
  // Add more projects here...
];

export const PROFILE = {
  name: "Sunil Dehru",
  role: "B.Tech CSE Undergraduate",
  bio: "A first-year Computer Science student specializing in low-level programming (C++), cybersecurity, and mathematical problem-solving. Currently exploring the intersection of secure systems and scalable architecture.",
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "mailto:student@college.edu",
  },
};

export const TIMELINE = [
  {
    id: 1,
    year: "2026",
    title: "B.Tech Computer Science (2nd Year)",
    organization: "Your University Name",
    description: "Specializing in Cybersecurity and Algorithms. Core member of the Tech Club.",
    tags: ["Data Structures", "Network Security", "C++"]
  },
  {
    id: 2,
    year: "2025",
    title: "Smart India Hackathon Finalist",
    organization: "Government of India",
    description: "Led a team of 4 to build a reverse logistics app. Handled the backend architecture using Node.js.",
    tags: ["Team Leadership", "System Design"]
  },
  {
    id: 3,
    year: "2024",
    title: "Higher Secondary Education",
    organization: "Your School Name",
    description: "Graduated with 95% in PCM (Physics, Chemistry, Math). Founded the school Coding Club.",
    tags: ["Mathematics", "Physics"]
  }
];

export const SKILLS = [
  { category: "Core", items: ["C", "C++", "Data Structures", "Algorithms"] },
  { category: "Web", items: ["HTML/CSS", "JavaScript", "React", "Next.js"] },
  { category: "Tools", items: ["Git", "VS Code", "Linux", "Wireshark"] },
  { category: "Academic", items: ["System Design", "Mathematics", "Digital Logic"] },
];

export const PROJECTSS = [
  {
    id: "sih-logistics",
    title: "Eco-Reverse: E-commerce Waste Logistics",
    description: "A Smart India Hackathon (SIH) project designing a reverse logistics system for managing e-commerce packaging waste.",
    tech: ["C++", "Data Structures", "Optimization Algorithms"],
    link: "#",
    github: "#",
    details: "Built a simulation to optimize the route for collection trucks using graph algorithms...",
  },
  {
    id: "cyber-roadmap",
    title: "Cybersecurity Learning Path",
    description: "An interactive roadmap for students to learn ethical hacking and network security.",
    tech: ["React", "Tailwind CSS", "JSON"],
    link: "#",
    github: "#",
  },
  {
    id: "matrix-solver",
    title: "Eigenvalue Calculator",
    description: "A C++ tool to calculate eigenvalues and eigenvectors for n x n matrices, utilized in my M&C coursework.",
    tech: ["C++", "Linear Algebra"],
    link: "#",
    github: "#",
  },
];
