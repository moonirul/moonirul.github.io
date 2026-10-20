// ─────────────────────────────────────────────────────────────
// All personal content lives here (taken from Monirul_Islam CV).
// Edit this file to change the website text; nothing else is needed.
// ─────────────────────────────────────────────────────────────

export const profile = {
  firstName: 'Md. Monirul',
  lastName: 'Islam',
  roles: ['AI Engineer', 'Software Engineer'],
  location: 'Dhaka, Bangladesh',
  email: 'monirul.cse@gmail.com', // NOTE: the CV text layer reads "monirrul.cse@gmail.com" – verify!
  phone: '+880 1742 958888',
  linkedin: 'https://linkedin.com/in/moonirul',
  github: 'https://github.com/moonirul',
  website: 'https://moonirul.github.io',
  cv: '/Monirul_Islam_CV.pdf',
  hireStatus: 'Available for hire!', // tooltip on the avatar; set to '' to hide
  summary:
    'Software Engineer with a strong Computer Science foundation (Data Structures, Algorithms, OOP, Database Design all A+) and 1+ year of hands-on experience building backend systems, REST APIs, and automation pipelines in Python. Currently working as an AI Automation Engineer, applying core engineering fundamentals to build production-ready AI Agents, LLM-powered applications, and workflow automations. Comfortable owning a problem end-to-end: database design, API integration, and deployment.',
}

export const education = [
  // Bachelor's Degree

  {
    id: "bsc",
    type: "Academic",
    title: "Bachelor of Science in Computer Science & Engineering",
    org: "Green University of Bangladesh",
    place: "Purbachal, Rupganj, Narayanganj",
    from: "Feb 2022",
    to: "Feb 2026",
    initials: "GUB",

    intro:
      "A Computer Science and Engineering graduate from Green University of Bangladesh with a strong foundation in software engineering, programming, data structures, and algorithms. Passionate about Artificial Intelligence, Machine Learning, and Computer Vision, with hands-on experience in developing software solutions, backend systems, and AI-powered applications. Dedicated to solving real-world problems through innovative technologies and continuous learning.",

    bullets: [
      "CGPA: 3.72 / 4.00",
      "Strong foundation in Data Structures, Algorithms, Object-Oriented Programming, and Database Design.",
      "Achieved A+ grades in Data Structures, Algorithms, OOP, Operating Systems, Artificial Intelligence, and Data Mining.",
      "Thesis: Computer Vision-Based Real-Time Air Quality Index Estimation from Ground-Level Images.",
      "Experienced in Python, SQL, backend development, AI automation, and machine learning technologies.",
    ],

    tags: [
      "Computer Science",
      "Software Engineering",
      "Python",
      "Data Structures & Algorithms",
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "Database Management",
      "AI Automation",
    ],
  },

  // Higher Secondary Certificate
  {
    id: "hsc",
    type: "Academic",
    title: "Higher Secondary Certificate (HSC)",
    org: "Al Hera Academy School and College",
    place: "Bera, Pabna",
    year: "2020",
    initials: "AHAC",
    intro:
      "Completed Higher Secondary education with a strong academic foundation.",
    bullets: ["GPA: 5.00 / 5.00"],
    tags: ["Higher Secondary", "Science"],
  },

  // Secondary School Certificate
  // {
  //   id: "ssc",
  //   type: "Academic",
  //   title: "Secondary School Certificate (SSC)",
  //   org: "Al Hera Academy School and College",
  //   place: "Bera, Pabna",
  //   year: "2017",
  //   initials: "AHAC",
  //   intro:
  //     "Completed Secondary School education with excellent academic results.",
  //   bullets: ["GPA: 5.00 / 5.00"],
  //   tags: ["Secondary Education", "Science"],
  // },

  // Research 1
  {
    id: "r1",
    type: "Research",
    title:
      "Computer Vision-Based Real-Time Air Quality Index Estimation from Ground-Level Images",
    org: "Undergraduate Thesis",
    // place: "Manuscript in Preparation",
    initials: "AQ",
    intro:
      "Research on estimating air quality using computer vision and ground-level images.",
    bullets: [
      "Developed a deep learning-based computer vision approach for real-time air quality estimation from ground-level images.",
    ],
    tags: ["Computer Vision", "Deep Learning", "Air Quality"],
  },

  // Research 2
  // {
  //   id: "r2",
  //   type: "Research",
  //   title:
  //     "Towards Understanding Political Discourse in Bengali Memes: A Vision-Language Approach",
  //   org: "Data Mining Course T",
  //   // place: "Manuscript in Preparation",
  //   initials: "BM",
  //   intro:
  //     "Exploring multimodal understanding of political discourse in Bengali memes.",
  //   bullets: [
  //     "Explored vision-language models for multimodal analysis of Bengali memes using image-text understanding.",
  //   ],
  //   tags: ["Vision-Language Models", "Bengali NLP", "Multimodal AI"],
  // },

  // Awards
  // {
  //   id: "a1",
  //   type: "Awards",
  //   title: "Department Dean's List Award",
  //   org: "Department of Computer Science & Engineering",
  //   initials: "DL",
  //   bullets: [],
  //   tags: ["Academic Excellence"],
  // },
  // {
  //   id: "a2",
  //   type: "Awards",
  //   title: "Department VC's List Award",
  //   org: "Department of Computer Science & Engineering",
  //   initials: "VC",
  //   bullets: [],
  //   tags: ["Academic Excellence"],
  // },
  // {
  //   id: "a3",
  //   type: "Awards",
  //   title: "Junior School Certificate (JSC) Scholarship",
  //   org: "Board of Intermediate and Secondary Education, Rajshahi",
  //   initials: "JS",
  //   bullets: [],
  //   tags: ["Scholarship"],
  // },
];

export const educationTabs = ["Academic", "Research"];

export const techStack = [
  // Languages
  { name: 'Python', cat: 'Languages', icon: 'SiPython', color: '#3776AB' },
  { name: 'JavaScript', cat: 'Languages', icon: 'SiJavascript', color: '#F7DF1E' },
  { name: 'SQL', cat: 'Languages', icon: 'FaDatabase', color: '#F29111' },
  { name: 'C', cat: 'Languages', icon: 'SiC', color: '#2F7BFF' },
  { name: 'HTML5', cat: 'Languages', icon: 'SiHtml5', color: '#E34F26' },
  { name: 'CSS3', cat: 'Languages', icon: 'SiCss', color: '#2965F1' },
  // Tools
  { name: 'FastAPI', cat: 'Tools', icon: 'SiFastapi', color: '#05998B' },
  { name: 'n8n', cat: 'Tools', icon: 'SiN8N', color: '#EA4B71' },
  { name: 'LangChain', cat: 'Tools', icon: 'SiLangchain', color: '#1C9C8C' },
  { name: 'LangGraph', cat: 'Tools', icon: 'SiLanggraph', color: '#5ACBBE' },
  { name: 'MCP Server', cat: 'Tools', icon: 'SiModelcontextprotocol', color: '#E5E7EB' },
  { name: 'OpenAI API', cat: 'Tools', icon: 'RiOpenaiFill', color: '#74AA9C' },
  { name: 'Gemini API', cat: 'Tools', icon: 'SiGooglegemini', color: '#8E75B2' },
  { name: 'Docker', cat: 'Tools', icon: 'SiDocker', color: '#2496ED' },
  { name: 'Git', cat: 'Tools', icon: 'SiGit', color: '#F05032' },
  { name: 'GitHub', cat: 'Tools', icon: 'SiGithub', color: '#E5E7EB' },
  { name: 'Linux', cat: 'Tools', icon: 'SiLinux', color: '#FCC624' },
  { name: 'React.js', cat: 'Tools', icon: 'SiReact', color: '#61DAFB' },
  { name: 'Tailwind CSS', cat: 'Tools', icon: 'SiTailwindcss', color: '#38BDF8' },
  // Libraries
  { name: 'Pandas', cat: 'Libraries', icon: 'SiPandas', color: '#E70488' },
  { name: 'NumPy', cat: 'Libraries', icon: 'SiNumpy', color: '#4D77CF' },
  { name: 'Matplotlib', cat: 'Libraries', icon: 'FaChartBar', color: '#E0A55B' },
  { name: 'OpenCV', cat: 'Libraries', icon: 'SiOpencv', color: '#5C3EE8' },
  { name: 'Scikit-learn', cat: 'Libraries', icon: 'SiScikitlearn', color: '#F7931E' },
  { name: 'PyTorch', cat: 'Libraries', icon: 'SiPytorch', color: '#EE4C2C' },
  { name: 'TensorFlow', cat: 'Libraries', icon: 'SiTensorflow', color: '#FF6F00' },
  { name: 'Keras', cat: 'Libraries', icon: 'SiKeras', color: '#D00000' },
  { name: 'SQLAlchemy', cat: 'Libraries', icon: 'SiSqlalchemy', color: '#D71F00' },
  // Databases
  { name: 'PostgreSQL', cat: 'Databases', icon: 'SiPostgresql', color: '#4A90C8' },
]
export const techTabs = ['Languages', 'Tools', 'Libraries', 'Databases']

export const experience = [
  {
    title: 'Junior Executive, AI', org: 'Softvence IT LTD', place: 'Mohakhali, Dhaka',
    from: 'Apr 2026', to: 'Present', icon: 'briefcase',
    intro: null,
    bullets: [
      'Delivered 25+ AI automation workflows using Python, FastAPI, n8n, JavaScript, and LLM APIs to automate business processes.',
      'Built backend services with database modeling, API integration, and automated data processing pipelines.',
      'Integrated 10+ APIs including OpenAI, Google, Apollo, Hunter, and Apify to automate business workflows.',
      'Designed and deployed REST APIs using FastAPI with PostgreSQL-based backend systems.',
    ],
    tags: ['python', 'fastapi', 'n8n', 'llm apis', 'postgresql'],
  },
  {
    title: 'Founder & Educator', org: 'StudyWithMoniRuL YouTube Channel', place: 'Online',
    from: 'Feb 2024', to: 'Present', icon: 'briefcase',
    bullets: [
      'Created tutorials on AI, Machine Learning, Algorithms, Programming, and Computer Science concepts.',
      'Explained complex technical topics through structured examples and problem-solving approaches.',
    ],
    tags: ['teaching', 'ai', 'machine learning', 'algorithms'],
  },
  // {
  //   title: 'Technical Documentation & Presentation Design (LaTeX)', org: 'Self-directed', place: 'Bangladesh',
  //   from: '2024', to: 'Present', icon: 'briefcase',
  //   bullets: ['Developed IEEE-style reports, technical documents, and presentations using LaTeX with citations and visual elements.'],
  //   tags: ['latex', 'ieee', 'documentation'],
  // },
  // {
  //   title: 'Mathematics Tutor (Calculus)', org: 'Tutoring', place: 'Bangladesh',
  //   from: '2022', to: '2024', icon: 'briefcase',
  //   bullets: ['Guided students in calculus, mathematical reasoning, and problem-solving techniques.'],
  //   tags: ['calculus', 'tutoring'],
  // },
]

export const projects = [
  {
    title: 'Podcast & WordPress Content Automation', cat: 'AI Automation', icon: 'FaMicrophoneAlt',
    tags: ['python', 'fastapi', 'openai gpt', 'whisper', 'n8n', 'docker', 'hostinger'],
    desc: 'Automated podcast transcription and content repurposing to generate blogs, show notes, and social media assets. Built a FastAPI Whisper service and integrated OpenAI GPT for AI-driven content generation, with n8n workflows for Google Drive, Sheets, and WordPress API integrations with duplicate detection.',
    github: 'https://github.com/moonirul/AI-Powered-Podcast-WordPress-Content-Automation',
  },
  {
    title: 'AI Voice Doctor Appointment System', cat: 'AI Agent', icon: 'FaUserMd',
    tags: ['vapi ai', 'fastapi', 'react', 'postgresql', 'hostinger'],
    desc: 'Built an AI voice receptionist for automated appointment booking and patient management. Designed REST APIs and PostgreSQL database workflows, integrating Vapi AI, FastAPI, and React to deliver 24/7 healthcare workflow automation.',
    live: 'https://app.pixelstack.cloud',
  },
  {
    title: 'ML Based Diabetes Prediction', cat: 'Machine Learning', icon: 'FaHeartbeat',
    tags: ['n8n', 'fastapi', 'scikit-learn', 'react', 'google gemini api'],
    desc: 'Built an AI SaaS platform for diabetes risk prediction using ML models and FastAPI, reducing manual assessment effort. Integrated React, Gemini API, and n8n workflows for automated health insights and efficient processing.',
    live: 'https://diabetes-prediction-amber.vercel.app',
  },
  {
    title: 'AI Resume Builder SaaS', cat: 'AI Automation', icon: 'FaFileAlt',
    tags: ['n8n', 'google gemini api', 'pdf generation'],
    desc: 'Built an AI resume generation platform that reduces manual formatting effort and enables faster ATS-friendly PDF creation. Automated resume generation, PDF processing, and email delivery using Gemini API and n8n workflows.',
    live: 'https://resume-n8n.vercel.app',
  },
]
export const projectTabs = ['AI Automation', 'AI Agent', 'Machine Learning']

export const services = {
  title: 'AI Automation Services',
  p1: "I've been working as an AI Automation Engineer since April 2026, delivering 15+ AI automation workflows across diverse business processes. Whether building an AI agent from scratch or wiring up APIs and backend services, I turn manual work into reliable, production-ready systems.",
  p2: "If you're interested in working with me, don't hesitate to contact me by email.",
  offers: [
    { icon: 'FaRobot', title: 'AI Agents & LLM Applications', text: 'LangChain, LangGraph, RAG, MCP servers, prompt engineering, and OpenAI / Gemini API integrations.' },
    { icon: 'FaProjectDiagram', title: 'Workflow Automation', text: 'n8n workflows, webhooks, Google APIs, and third-party API integration (OpenAI, Apollo, Hunter, Apify).' },
    { icon: 'FaServer', title: 'Backend & REST APIs', text: 'FastAPI, PostgreSQL, SQLAlchemy, database design, and API development.' },
    { icon: 'FaCloudUploadAlt', title: 'Deployment', text: 'Docker, Git/GitHub, CI/CD, Linux, and cloud hosting for production-grade delivery.' },
  ],
}

export const counters = [
  { icon: 'FaProjectDiagram', n: '15+', label: 'Automation Workflows' },
  { icon: 'FaPlug', n: '10+', label: 'APIs Integrated' },
  { icon: 'FaCode', n: '150+', label: 'Problems Solved' },
  { icon: 'FaLaptopCode', n: '04', label: 'Projects Built' },
  { icon: 'FaFlask', n: '02', label: 'Research Manuscripts' },
  { icon: 'FaAward', n: '03', label: 'Awards' },
]

export const lifeUpdates = [
  { title: 'Working as AI Automation Engineer', hl: 'AI Automation Engineer', date: 'Apr 2026', place: 'Dhaka, Bangladesh',
    text: 'Working at Softvence Delta, building production-ready AI agents, LLM-powered applications, and workflow automations with Python, FastAPI, and n8n.' },
  { title: 'Graduated in Computer Science & Engineering', hl: 'Computer Science & Engineering', date: 'Feb 2026', place: 'Bangladesh',
    text: 'Completed a B.Sc. in Computer Science & Engineering at Green University of Bangladesh with a CGPA of 3.72 / 4.00.' },
  { title: 'Started StudyWithMoniRuL YouTube Channel', hl: 'StudyWithMoniRuL', date: 'Feb 2024', place: 'Online',
    text: 'Founded a YouTube channel with tutorials on AI, Machine Learning, Algorithms, Programming, and Computer Science concepts.' },
]
