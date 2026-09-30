import { Project, SkillItem, ExperienceItem, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Madhusree Kandasamy',
  role: 'Java & Python Developer',
  tagline: 'BCA student passionate about backend systems, clean OOP patterns, and modern RESTful APIs.',
  email: 'madhusreekandasamy@gmail.com',
  phone: '+91 82201 88310',
  location: 'Coimbatore, Tamil Nadu, India',
  status: 'Open to internships & entry-level roles',
  photoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCshWm_WSgubM1F_ZQ-laXubruwTeE8RjmkerxSIESSbrEitMyKRDax3xx-v7WWB8ymbS_czcYyUKIUc0W9SDw8ZU2wsZs364OtFLVyeyrp6o7bFsK8_Ax3nJ02bDXLFwqN-RRS5gzOR9LndQkpIuK6K2O1yhTmCC6KRo1fLh35FqZCAPwxL6o0n7jC9GYeUCn3J8wAbBnnfdLZWDlzet4ndxrnG3HXJAJTiY6pIi97gyc424i1yVLdqJPycNGv8wpOdw',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  summary: `I am a Bachelor of Computer Applications (BCA) student with a dedication to software engineering discipline. My primary focus centers on core backend architectures in Java and agile API development using Python & FastAPI. I take pride in understanding system internals, clean code organization, and building software that addresses real-world operational challenges.`,
  stats: [
    { label: 'Degree CGPA', value: '8.5 / 10' },
    { label: 'Industry Internship', value: 'Java Developer' },
    { label: 'Primary Languages', value: 'Java & Python' },
    { label: 'Certifications', value: '3 Credentials' },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'nutriron',
    title: 'Nutriron — Nutrition & Wellness Tracker',
    category: 'Full-Stack Web Application',
    description: 'A comprehensive nutrition logging and dietary analytics application featuring secure user onboarding, daily intake calculations, and automated macronutrient breakdowns.',
    highlights: [
      'Engineered fast, asynchronous REST endpoints with Python and FastAPI for logging and aggregating nutritional metrics.',
      'Configured Supabase for relational user data storage, meal registries, and real-time state synchronization.',
      'Developed a responsive client-side UI with vanilla JavaScript, HTML5, and CSS3 for intuitive food logging and caloric progress feedback.',
      'Integrated dynamic macro ratio computations (carbs, protein, fat) with real-time target adjustments.'
    ],
    technologies: ['Python', 'FastAPI', 'Supabase', 'PostgreSQL', 'JavaScript', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com',
    liveDemoType: 'nutriron',
    featured: true,
  },
  {
    id: 'attendance',
    title: 'Student Attendance Management System',
    category: 'Enterprise Database System',
    description: 'A collaborative academic management software engineered to track, compute, and report student attendance percentages reliably using Java OOP models and MySQL.',
    highlights: [
      'Designed structured relational database schemas in MySQL with constraints, foreign keys, and indexed queries for rapid retrieval.',
      'Implemented Core Java business logic utilizing strict Object-Oriented principles, encapsulation, and error handling.',
      'Configured JDBC drivers for secure, connection-pooled database interactions and transactional consistency.',
      'Automated aggregate attendance reports, highlighting students with attendance deficits below academic thresholds.'
    ],
    technologies: ['Java', 'MySQL', 'JDBC', 'OOP', 'Data Modeling', 'SQL'],
    githubUrl: 'https://github.com',
    liveDemoType: 'attendance',
    featured: true,
  },
  {
    id: 'algocraft',
    title: 'Algorithm & Data Structure Playground',
    category: 'Interactive Utility & Educational Tool',
    description: 'An interactive simulator demonstrating algorithmic execution, time-complexity analysis, and search/sort operations implemented in Python and Java paradigms.',
    highlights: [
      'Visualized linear search, binary search, and divide-and-conquer sorting routines with step-by-step state visualization.',
      'Benchmarked runtime performance and step counts across varying dataset distributions.',
      'Implemented clean modular data structures including Stacks, Queues, and Priority Queues.'
    ],
    technologies: ['Python', 'Java', 'Algorithms', 'Data Structures', 'TypeScript'],
    githubUrl: 'https://github.com',
    liveDemoType: 'algo',
    featured: false,
  }
];

export const SKILLS: SkillItem[] = [
  {
    name: 'Python',
    category: 'languages',
    level: 88,
    usage: 'Data manipulation, backend scripting, automation, and API development with FastAPI.',
    iconName: 'Code'
  },
  {
    name: 'Java',
    category: 'languages',
    level: 85,
    usage: 'Core OOP architecture, multithreading fundamentals, collections framework, and JDBC database access.',
    iconName: 'Coffee'
  },
  {
    name: 'C / C++',
    category: 'languages',
    level: 75,
    usage: 'Foundational programming concepts, memory pointers, logic design, and basic data structures.',
    iconName: 'Terminal'
  },
  {
    name: 'FastAPI',
    category: 'web',
    level: 84,
    usage: 'Asynchronous REST APIs, Pydantic data schemas, routing, and Swagger documentation.',
    iconName: 'Server'
  },
  {
    name: 'HTML5 & CSS3',
    category: 'web',
    level: 85,
    usage: 'Semantic markup, responsive layouts, flexbox, grid, and cross-browser styling.',
    iconName: 'Layout'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'web',
    level: 80,
    usage: 'DOM manipulation, asynchronous fetch APIs, event listeners, and dynamic client UI states.',
    iconName: 'Cpu'
  },
  {
    name: 'MySQL',
    category: 'databases',
    level: 80,
    usage: 'Relational schema design, normalization, complex joins, indexing, and aggregate queries.',
    iconName: 'Database'
  },
  {
    name: 'Supabase',
    category: 'databases',
    level: 76,
    usage: 'PostgreSQL-backed serverless databases, row-level security, and client SDK integration.',
    iconName: 'Layers'
  },
  {
    name: 'Git & GitHub',
    category: 'databases',
    level: 82,
    usage: 'Branch management, pull requests, version tracking, and collaborative code reviews.',
    iconName: 'GitBranch'
  },
  {
    name: 'Data Structures & Algorithms',
    category: 'languages',
    level: 80,
    usage: 'Arrays, Linked Lists, Stacks, Queues, Sorting routines, and algorithmic complexity (Big-O).',
    iconName: 'Binary'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Java Developer Intern',
    company: 'Ether Services',
    period: 'Internship Term',
    type: 'Software Engineering Internship',
    location: 'India',
    responsibilities: [
      'Gained intensive hands-on experience in Java core architecture and real-world software lifecycle workflows.',
      'Applied strict Object-Oriented Programming (OOP) paradigms to engineer structured, reusable system components.',
      'Engaged in debugging methodologies, error logging analysis, and runtime performance diagnostics.',
      'Participated in agile development practices, code review routines, and collaborative feature implementations.'
    ],
    skills: ['Java', 'OOP', 'Debugging', 'Code Reviews', 'Software Lifecycle']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'KPR College of Arts Science and Research',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '2024 — 2027',
    score: '8.5 CGPA',
    scoreType: 'Current CGPA',
    details: [
      'Core Coursework: Object-Oriented Programming with Java, Data Structures, Relational Database Management Systems, Web Development.',
      'Actively developing full-stack academic and independent software projects.',
      'Maintained consistent top-tier academic standing across coursework.'
    ]
  },
  {
    institution: 'Vivekananda Vidhyalaya Matric Hr. Sec. School',
    degree: 'Higher Secondary Certificate (12th Grade)',
    period: '2023 — 2024',
    score: '77.3%',
    scoreType: 'Final Score',
    details: [
      'Focus in Computer Science, Mathematics, and Physical Sciences.',
      'Gained early foundations in programming logic and structured problem solving.'
    ]
  },
  {
    institution: 'Vivekananda Vidhyalaya Matric Hr. Sec. School',
    degree: 'Secondary School Leaving Certificate (10th Grade)',
    period: '2021 — 2022',
    score: '86.8%',
    scoreType: 'Final Score',
    details: [
      'Distinction in Mathematics and General Sciences.'
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Python Programming Certification',
    issuer: 'Recognized Technical Academy',
    description: 'Validated competency in data structures, file handling, backend scripting logic, and functional programming.',
    category: 'Languages & Scripting'
  },
  {
    title: 'Java Certification',
    issuer: 'Technical Training Program',
    description: 'Core language mechanics, inheritance, encapsulation, polymorphism, and robust exception handling.',
    category: 'Object-Oriented Design'
  },
  {
    title: 'Basic AI Tools & Prompt Engineering',
    issuer: 'Developer Workshop',
    description: 'Modern developer workflow integration, generative AI tools, prompt structuring, and productivity enhancement.',
    category: 'Productivity & AI Tools'
  }
];

export const ATTRIBUTES = [
  {
    title: 'Time & Task Management',
    desc: 'Structured scheduling, breaking large engineering tasks into actionable milestones, and meeting delivery deadlines.'
  },
  {
    title: 'Analytical & Logical Thinking',
    desc: 'Deep enthusiasm for dissecting complex requirements into clean algorithmic steps and reliable edge-case handling.'
  },
  {
    title: 'Team Collaboration',
    desc: 'Respectful peer reviews, clear communication, and adaptable team dynamics gained through internship and group projects.'
  },
  {
    title: 'Adaptability & Curiosity',
    desc: 'Quick to absorb new tools, frameworks, and coding standards with eagerness to continuously level up technical depth.'
  },
  {
    title: 'Mathematics & Quantitative Reasoning',
    desc: 'Strong foundation in mathematical logic, probability, and analytical problem-solving.'
  },
  {
    title: 'Creative Problem Solving',
    desc: 'Balancing algorithmic rigor with intuitive user experiences and aesthetic attention to detail.'
  }
];
