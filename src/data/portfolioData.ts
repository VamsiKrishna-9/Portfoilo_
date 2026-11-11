export interface ProjectItem {
  id: string;
  projectNumber: string;
  title: string;
  category: string;
  tagline?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  researchPaperUrl?: string;
  statusBadge?: string;
  projectType?: string;
  isFeaturedPersonal?: boolean;
  phase?: string;
  metrics?: { label: string; value: string }[];
}

export interface TechnicalSkill {
  name: string;
  category:
    | 'Programming'
    | 'Generative AI'
    | 'Machine Learning & Deep Learning'
    | 'Data Analysis & Visualization'
    | 'Data Engineering'
    | 'Databases'
    | 'Developer Tools';
  icon: string;
  associatedProjects?: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  description: string;
}

export interface ExperienceItem {
  id?: string;
  title: string;
  company: string;
  parentOrg?: string;
  duration: string;
  period: string;
  joiningDate?: string;
  location: string;
  workMode?: 'On-site' | 'Virtual' | 'Hybrid';
  position?: string;
  isCurrent?: boolean;
  credentialUrl?: string;
  credentialName?: string;
  description: string[];
  skills: string[];
}

export interface EducationItem {
  label: string;
  degree: string;
  field?: string;
  institution: string;
  board?: string;
  duration: string;
  evaluation: string;
  location?: string;
  status?: string;
}

export interface AchievementItem {
  id?: string;
  title: string;
  year?: string;
  type: string;
  category?: 'competition' | 'hackathon' | 'sports';
  recognition?: string;
  institutionRepresented?: string;
  venue?: string;
  description: string;
  linkedinUrl?: string;
  badge?: string;
  isPlacement?: boolean;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Vamsi Krishna Vadlamudi',
    shortName: 'Vamsi Krishna',
    initials: 'VK',
    title: 'AI Engineer & Data Engineer',
    heroSubtitle: 'AI Engineer & Data Engineer',
    heroHeading: 'Vamsi Krishna Vadlamudi',
    heroDescription:
      'Data Science graduate building AI-powered applications, intelligent data solutions, and analytics-driven systems with Machine Learning, Deep Learning, LLMs and Agentic AI.',
    bio:
      'I am a Data Science graduate specialized in engineering intelligent applications that bridge raw data, machine learning models, and production-ready software. With strong foundational expertise in Artificial Intelligence, Machine Learning, Deep Learning, Data Engineering, and Generative AI, I build end-to-end systems—from predictive diagnostics and explainable ML models to multi-agent LLM architectures and structured data analytics.',
    lifecycleNote:
      'I approach every technical project holistically: from raw data ingestion and architectural modeling to API deployment and intuitive user-facing interfaces.',
    email: 'vadlamudivamsikrishnaa@gmail.com',
    location: 'India',
    locationDetail: 'Guntur, Andhra Pradesh, India',
    github: 'https://github.com/VamsiKrishna-9',
    linkedin: 'https://www.linkedin.com/in/vamsi-krishna-vadlamudi-b1baa6263',
    availability: 'Available for Full-Time Roles',
    status: 'Available for Full-Time Roles',
  },

  specializations: [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      focus: 'Predictive Modeling & Neural Architectures',
      description:
        'Formulating high-accuracy predictive models, CNN-LSTM deep learning pipelines, and model interpretability with SHAP and LIME for healthcare and data-driven domains.',
      tags: ['Supervised Learning', 'Deep Learning (CNN/LSTM)', 'Scikit-Learn', 'TensorFlow', 'Explainable AI (SHAP/LIME)'],
    },
    {
      id: 'data-eng',
      title: 'Data Engineering',
      focus: 'Scalable Pipelines & Analytics Infrastructure',
      description:
        'Designing Medallion architecture (Bronze, Silver, Gold), relational schema models, high-performance SQL transformations, and executive Power BI dashboards.',
      tags: ['Medallion Architecture', 'SQL & PostgreSQL', 'Data Modeling', 'ETL Pipelines', 'Power BI Analytics'],
    },
    {
      id: 'gen-ai',
      title: 'Generative AI & LLMs',
      focus: 'RAG & Autonomous Agent Workflows',
      description:
        'Engineering context-aware LLM agents, semantic search with Retrieval-Augmented Generation (RAG), LangChain, LangGraph orchestration, and Groq ultra-fast inference.',
      tags: ['Generative AI', 'RAG Pipelines', 'LangChain', 'LangGraph', 'Vector Search', 'Groq LPU'],
    },
  ],

  developmentLifecycle: [
    {
      step: '01',
      title: 'Data Preparation & Engineering',
      desc: 'Cleaning, transforming, and structuring raw inputs with Medallion architecture (Bronze, Silver, Gold) and pipeline integrity.',
    },
    {
      step: '02',
      title: 'Model Development & Experimentation',
      desc: 'Architecting machine learning, deep learning (CNN, LSTM), and generative LLM pipelines with rigorous validation.',
    },
    {
      step: '03',
      title: 'Explainability & Evaluation',
      desc: 'Auditing feature influence and decision boundaries using SHAP, LIME, and comprehensive performance metrics (MAE, RMSE).',
    },
    {
      step: '04',
      title: 'Backend & API Integration',
      desc: 'Deploying high-throughput RESTful endpoints using FastAPI and Python with relational SQL and Supabase auth.',
    },
    {
      step: '05',
      title: 'Frontend & Analytics Experience',
      desc: 'Crafting responsive user interfaces with React, TypeScript, and interactive dashboards via Power BI.',
    },
  ],

  technicalSkills: [
    // Programming
    { name: 'Python', category: 'Programming', icon: 'Terminal', associatedProjects: ['mediai', 'battery-soh'] },
    { name: 'SQL', category: 'Programming', icon: 'Database', associatedProjects: ['mediai', 'sql-data-warehouse'] },
    { name: 'React', category: 'Programming', icon: 'Code2', associatedProjects: ['mediai', 'campus-connections'] },
    { name: 'TypeScript', category: 'Programming', icon: 'Code2', associatedProjects: ['mediai', 'campus-connections'] },

    // Generative AI
    { name: 'Large Language Models (LLMs)', category: 'Generative AI', icon: 'Sparkles', associatedProjects: ['campus-connections'] },
    { name: 'Retrieval-Augmented Generation (RAG)', category: 'Generative AI', icon: 'Layers', associatedProjects: ['campus-connections'] },
    { name: 'Agentic AI', category: 'Generative AI', icon: 'Bot', associatedProjects: ['campus-connections'] },
    { name: 'Prompt Engineering', category: 'Generative AI', icon: 'MessageSquareCode', associatedProjects: ['campus-connections'] },
    { name: 'LangChain', category: 'Generative AI', icon: 'Workflow', associatedProjects: [] },
    { name: 'LangGraph', category: 'Generative AI', icon: 'Network', associatedProjects: [] },
    { name: 'Groq', category: 'Generative AI', icon: 'Zap', associatedProjects: [] },

    // Machine Learning & Deep Learning
    { name: 'Machine Learning', category: 'Machine Learning & Deep Learning', icon: 'Brain', associatedProjects: ['battery-soh', 'mediai'] },
    { name: 'Deep Learning', category: 'Machine Learning & Deep Learning', icon: 'Cpu', associatedProjects: ['battery-soh', 'mediai'] },
    { name: 'Scikit-learn', category: 'Machine Learning & Deep Learning', icon: 'Sliders', associatedProjects: ['battery-soh'] },
    { name: 'TensorFlow', category: 'Machine Learning & Deep Learning', icon: 'Binary', associatedProjects: ['battery-soh'] },
    { name: 'Keras', category: 'Machine Learning & Deep Learning', icon: 'Binary', associatedProjects: ['battery-soh'] },
    { name: 'CNN', category: 'Machine Learning & Deep Learning', icon: 'Network', associatedProjects: ['battery-soh'] },
    { name: 'LSTM', category: 'Machine Learning & Deep Learning', icon: 'Cpu', associatedProjects: ['battery-soh'] },
    { name: 'NLP', category: 'Machine Learning & Deep Learning', icon: 'Languages', associatedProjects: [] },
    { name: 'SHAP', category: 'Machine Learning & Deep Learning', icon: 'Eye', associatedProjects: ['battery-soh'] },
    { name: 'LIME', category: 'Machine Learning & Deep Learning', icon: 'ScanSearch', associatedProjects: ['battery-soh'] },

    // Data Analysis & Visualization
    { name: 'NumPy', category: 'Data Analysis & Visualization', icon: 'Calculator', associatedProjects: ['battery-soh'] },
    { name: 'Pandas', category: 'Data Analysis & Visualization', icon: 'Table', associatedProjects: ['battery-soh'] },
    { name: 'Matplotlib', category: 'Data Analysis & Visualization', icon: 'BarChart2', associatedProjects: [] },
    { name: 'Seaborn', category: 'Data Analysis & Visualization', icon: 'PieChart', associatedProjects: [] },
    { name: 'Data Cleaning', category: 'Data Analysis & Visualization', icon: 'Filter', associatedProjects: ['mediai'] },
    { name: 'Data Preprocessing', category: 'Data Analysis & Visualization', icon: 'Boxes', associatedProjects: ['mediai'] },
    { name: 'Data Visualization', category: 'Data Analysis & Visualization', icon: 'PieChart', associatedProjects: ['sales-analysis-dashboard'] },
    { name: 'Exploratory Data Analysis (EDA)', category: 'Data Analysis & Visualization', icon: 'SearchCheck', associatedProjects: ['sales-analysis-dashboard'] },
    { name: 'Power BI', category: 'Data Analysis & Visualization', icon: 'BarChart3', associatedProjects: ['mediai', 'sales-analysis-dashboard'] },
    { name: 'Excel', category: 'Data Analysis & Visualization', icon: 'Sheet', associatedProjects: ['sales-analysis-dashboard'] },
    { name: 'DAX', category: 'Data Analysis & Visualization', icon: 'Calculator', associatedProjects: ['sales-analysis-dashboard'] },

    // Data Engineering
    { name: 'ETL', category: 'Data Engineering', icon: 'ArrowLeftRight', associatedProjects: ['mediai', 'sql-data-warehouse'] },
    { name: 'Medallion Architecture', category: 'Data Engineering', icon: 'Layers', associatedProjects: ['mediai', 'sql-data-warehouse'] },
    { name: 'Data Warehousing', category: 'Data Engineering', icon: 'HardDrive', associatedProjects: ['sql-data-warehouse'] },
    { name: 'Data Modeling', category: 'Data Engineering', icon: 'Boxes', associatedProjects: ['sql-data-warehouse'] },
    { name: 'REST APIs', category: 'Data Engineering', icon: 'ArrowLeftRight', associatedProjects: ['mediai'] },

    // Databases
    { name: 'MySQL', category: 'Databases', icon: 'Database', associatedProjects: ['mediai'] },
    { name: 'PostgreSQL', category: 'Databases', icon: 'Server', associatedProjects: ['mediai', 'campus-connections'] },
    { name: 'Supabase', category: 'Databases', icon: 'HardDrive', associatedProjects: ['mediai', 'campus-connections'] },
    { name: 'SQL Server', category: 'Databases', icon: 'Server', associatedProjects: ['sql-data-warehouse'] },
    { name: 'T-SQL', category: 'Databases', icon: 'Database', associatedProjects: ['sql-data-warehouse'] },

    // Developer Tools
    { name: 'Git', category: 'Developer Tools', icon: 'GitBranch', associatedProjects: [] },
    { name: 'GitHub', category: 'Developer Tools', icon: 'Github', associatedProjects: [] },
    { name: 'Jupyter Notebook', category: 'Developer Tools', icon: 'BookOpen', associatedProjects: [] },
    { name: 'VS Code', category: 'Developer Tools', icon: 'Laptop', associatedProjects: [] },
    { name: 'Google AI Studio', category: 'Developer Tools', icon: 'Sparkles', associatedProjects: [] },
  ] as TechnicalSkill[],

  skillCategories: [
    {
      title: 'Programming',
      icon: 'Code2',
      skills: ['Python', 'SQL'],
      description: 'Core languages for algorithm engineering, statistical computing, and database management.',
    },
    {
      title: 'Data Science',
      icon: 'Binary',
      skills: ['NumPy', 'Pandas', 'Scikit-learn', 'Jupyter Notebook'],
      description: 'Foundational scientific stack for exploratory analysis, numerical computing, and data wrangling.',
    },
    {
      title: 'Machine Learning',
      icon: 'Brain',
      skills: [
        'Linear Regression',
        'Polynomial Regression',
        'Ridge',
        'Lasso',
        'Elastic Net',
        'Model Evaluation',
        'Hyperparameter Tuning',
      ],
      description: 'Supervised predictive modeling, regularization techniques, and rigorous validation metrics.',
    },
    {
      title: 'Deep Learning',
      icon: 'Network',
      skills: ['CNN', 'LSTM', 'CNN-LSTM', 'CNN-BiLSTM', 'TensorFlow/Keras'],
      description: 'Spatial and sequential neural network architectures for complex time-series and pattern recognition.',
    },
    {
      title: 'Explainable AI (XAI)',
      icon: 'Sparkles',
      skills: ['SHAP', 'LIME'],
      description: 'Model interpretability frameworks for transparent, explainable feature attributions.',
    },
    {
      title: 'Generative AI & LLMs',
      icon: 'Cpu',
      skills: ['LLMs', 'LangChain', 'LangGraph', 'Prompt Engineering', 'Groq'],
      description: 'Agentic workflows, orchestrating reasoning chains, prompt strategies, and ultra-fast LLM inference.',
    },
    {
      title: 'Data Visualization',
      icon: 'BarChart3',
      skills: ['Power BI', 'Matplotlib', 'Seaborn'],
      description: 'Business intelligence storytelling, executive dashboards, and statistical distribution plots.',
    },
    {
      title: 'Database & Data Engineering',
      icon: 'Database',
      skills: ['MySQL', 'PostgreSQL', 'Supabase', 'Hadoop', 'Medallion Architecture'],
      description: 'Relational data modeling, scalable distributed pipelines, and structured multi-hop layers.',
    },
    {
      title: 'Development & Tools',
      icon: 'Layers',
      skills: ['React', 'FastAPI', 'REST APIs', 'Git', 'GitHub'],
      description: 'Full-stack application delivery, robust microservices, version control, and collaboration.',
    },
  ] as SkillCategory[],

  experience: [
    {
      id: 'vajra-ai',
      title: 'Data Science with AI Intern',
      company: 'Vajra.ai',
      parentOrg: 'SOCIAL TEK AI & ML Business Solutions Pvt Ltd',
      period: 'September 2026 – Present',
      joiningDate: '28 September 2026',
      duration: 'September 2026 – Present',
      location: 'Hyderabad, India',
      workMode: 'On-site',
      position: 'Team Lead',
      isCurrent: true,
      description: [
        'Leading a 3-member development team working on MediAI – Hospital Patient Experience & Operations Platform.',
        'Coordinating development activities, task allocation, and integration across team members.',
        'Designing and implementing data workflows using Medallion Architecture (Bronze, Silver, Gold).',
        'Working on MySQL and Supabase database integration, data migration, and validation.',
        'Contributing to backend APIs, authentication, and role-based workflows for Patients, Doctors, Staff, and Admin.',
        'Developing healthcare application workflows, including appointment booking and operational dashboards.',
      ],
      skills: [
        'Python',
        'SQL',
        'MySQL',
        'Supabase',
        'React',
        'TypeScript',
        'REST APIs',
        'Data Engineering',
        'Machine Learning',
        'AI',
      ],
    },
    {
      id: 'aicte-cloud',
      title: 'Cloud Foundations Virtual Internship',
      company: 'AICTE',
      period: '8 Weeks',
      duration: '8 Weeks',
      location: 'Virtual',
      workMode: 'Virtual',
      credentialName: 'Credly Verified Badge',
      credentialUrl: 'https://www.credly.com/users/vamsi-krishna-vadlamudi.ccffd86e',
      description: [
        'Completed comprehensive virtual internship on Cloud Foundations certified through AICTE.',
        'Acquired core competencies in cloud architecture principles, compute virtualization, and distributed infrastructure.',
        'Studied foundational cloud security configurations, identity management, and resilient system deployment patterns.',
      ],
      skills: [
        'Cloud Computing',
        'Cloud Architecture',
        'Virtualization',
        'Distributed Systems',
        'Cloud Security',
      ],
    },
    {
      id: 'aicte-data-eng',
      title: 'Data Engineering Virtual Internship',
      company: 'AICTE',
      period: '8 Weeks',
      duration: '8 Weeks',
      location: 'Virtual',
      workMode: 'Virtual',
      credentialName: 'Credly Verified Badge',
      credentialUrl: 'https://www.credly.com/users/vamsi-krishna-vadlamudi.ccffd86e',
      description: [
        'Completed intensive virtual internship in Data Engineering certified through AICTE.',
        'Gained hands-on knowledge in designing scalable ETL pipelines, schema modeling, and data warehousing.',
        'Explored data validation, relational database query optimization, and structured analytical reporting.',
      ],
      skills: [
        'Data Engineering',
        'ETL Pipelines',
        'SQL',
        'Data Warehousing',
        'Data Transformation',
        'Relational Databases',
      ],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: 'mediai',
      projectNumber: '01',
      title: 'MediAI – Hospital Patient Experience & Operations Platform',
      category: 'Healthcare AI & Data Engineering',
      statusBadge: 'BETA STAGE',
      description:
        'An integrated healthcare platform designed to improve hospital management, patient experience, operational efficiency, and AI-powered healthcare analytics.',
      highlights: [
        'Developing role-based dashboards for Patients, Doctors, Staff, and Admin.',
        'Implementing Medallion Architecture with Bronze, Silver, and Gold layers.',
        'Integrating MySQL and Supabase for database management.',
        'Building appointment booking and authentication workflows.',
        'Implementing backend APIs and healthcare data workflows.',
        'Integrating operational dashboards and analytics.',
      ],
      technologies: [
        'Python',
        'SQL',
        'React',
        'TypeScript',
        'MySQL',
        'Supabase',
        'PostgreSQL',
        'Power BI',
        'REST APIs',
        'Data Engineering',
        'Machine Learning',
        'Deep Learning',
      ],
      githubUrl: 'https://github.com/VamsiKrishna-9/AI-Hospital-Patient-Experience-Operations-Platform',
      demoUrl: 'https://mediai-ai-hospital-patient-experience-operations.ai.studio',
      phase: 'Beta Stage',
    },
    {
      id: 'campus-connections',
      projectNumber: '02',
      title: 'Campus Connections – Placements',
      category: 'Generative AI & EdTech',
      projectType: 'Personal Project',
      statusBadge: 'BETA STAGE',
      isFeaturedPersonal: true,
      description:
        'A student-focused placement preparation platform designed to bring placement experiences, company insights, interview preparation, and AI-powered career guidance into one centralized platform.',
      highlights: [
        'Centralized placement experiences and student knowledge sharing.',
        'Company-wise interview and assessment preparation.',
        'Placement-related company insights and reviews.',
        'AI-powered placement guidance.',
        'Personalized career preparation features.',
        'Interactive student-focused platform.',
      ],
      technologies: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Generative AI',
        'AI Career Mentor',
        'Interactive UI',
        'EdTech Workflows',
      ],
      demoUrl: 'https://campus-connections-29.lovable.app',
      phase: 'Personal Project · Beta Stage',
    },
    {
      id: 'battery-soh',
      projectNumber: '03',
      title: 'Explainable AI for Battery SOH Prediction',
      category: 'Deep Learning & Explainable AI',
      description:
        'A deep learning-based battery State of Health prediction project using the NASA Battery Dataset, combining CNN-LSTM modeling with explainable AI techniques to interpret model predictions.',
      highlights: [
        'Used the NASA Battery Dataset for battery health prediction.',
        'Developed a CNN-LSTM hybrid deep learning model.',
        'Applied SHAP for feature contribution analysis.',
        'Used LIME for local model interpretability.',
        'Evaluated prediction performance using regression metrics.',
        'Explored explainability to improve model transparency.',
      ],
      technologies: [
        'Python',
        'TensorFlow',
        'Keras',
        'CNN-LSTM',
        'Deep Learning',
        'SHAP',
        'LIME',
        'Machine Learning',
      ],
      githubUrl: 'https://github.com/VamsiKrishna-9/Explainable-AI-for-Battery-State-of-Health-Prediction-using-SHAP-and-LIME',
      researchPaperUrl:
        'https://github.com/VamsiKrishna-9/Explainable-AI-for-Battery-State-of-Health-Prediction-using-SHAP-and-LIME/blob/main/Research_Paper_Kittu%2C_Raya%2C_Jedzz%5B1%5D.doc',
      phase: 'Research & Model Benchmarked',
    },
    {
      id: 'sql-data-warehouse',
      projectNumber: '04',
      title: 'End-to-End SQL Data Warehouse',
      category: 'Data Engineering & SQL',
      description:
        'An end-to-end SQL Server data warehouse project integrating CRM and ERP datasets, implementing ETL workflows, data cleansing, dimensional modeling, and analytical reporting.',
      highlights: [
        'Integrated CRM and ERP source datasets.',
        'Implemented Bronze, Silver, and Gold layers.',
        'Developed SQL-based ETL workflows.',
        'Performed data cleansing and standardization.',
        'Designed fact and dimension tables using Star Schema.',
        'Implemented surrogate keys and analytical SQL queries.',
        'Created reporting views for business analysis.',
      ],
      technologies: [
        'SQL Server',
        'T-SQL',
        'SSMS',
        'ETL',
        'Medallion Architecture',
        'Star Schema',
        'Stored Procedures',
        'Data Modeling',
        'SQL Analytics',
      ],
      githubUrl: 'https://github.com/VamsiKrishna-9/sql-data-warehouse-project',
      phase: 'Completed Data Warehouse',
    },
    {
      id: 'sales-analysis-dashboard',
      projectNumber: '05',
      title: 'Sales Analysis Reporting Dashboard for Business Decision Making',
      category: 'Business Intelligence & Analytics',
      description:
        'An interactive Power BI dashboard designed to analyze business sales performance, customer behavior, product demand, profitability, and sales trends.',
      highlights: [
        'Analyzed total sales, profit, and quantity.',
        'Visualized monthly sales trends.',
        'Identified top-performing customers.',
        'Analyzed most ordered products.',
        'Compared customer-wise sales performance.',
        'Created interactive business reporting visuals.',
      ],
      metrics: [
        { label: 'Total Sales', value: '1.20M' },
        { label: 'Total Profit', value: '215.21K' },
        { label: 'Total Quantity', value: '19K' },
        { label: 'Sales Growth', value: '17.93%' },
      ],
      technologies: [
        'Power BI',
        'DAX',
        'Data Analytics',
        'Data Visualization',
        'Data Modeling',
        'Business Intelligence',
      ],
      githubUrl:
        'https://github.com/VamsiKrishna-9/Sales-Analysis-Reporting-Dashboard-for-Business-Decision-Making',
      phase: 'Completed BI Suite',
    },
  ] as ProjectItem[],

  education: [
    {
      label: 'B.TECH',
      degree: 'Computer Science and Engineering (Data Science)',
      institution: 'RVR & JC College of Engineering, Guntur',
      duration: '2022 – 2026',
      evaluation: 'CGPA 8.25 / 10',
      location: 'Guntur, Andhra Pradesh',
      status: 'Graduated',
    },
    {
      label: 'INTERMEDIATE',
      degree: 'Intermediate (MPC)',
      institution: 'Jawahar Navodaya Vidyalaya, Maddhirala Village, Guntur District',
      board: 'CBSE',
      duration: '2020 – 2022',
      evaluation: '71%',
      location: 'Maddhirala, Guntur District',
    },
    {
      label: 'MATRICULATION',
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Jawahar Navodaya Vidyalaya, Maddhirala Village, Guntur District',
      board: 'CBSE',
      duration: '2019 – 2020',
      evaluation: '69%',
      location: 'Maddhirala, Guntur District',
    },
  ] as EducationItem[],

  achievements: [
    {
      id: 'uncalled-innovators',
      title: 'Uncalled Innovators Hackathon',
      year: '2023',
      type: 'Hackathon Participation',
      category: 'hackathon',
      badge: 'Participation',
      description:
        'Participated in the Uncalled Innovators Hackathon, gaining experience in collaborative problem-solving and technology innovation.',
    },
    {
      id: 'ziro-demo-day-2026',
      title: 'Ziro Demo Day 2026',
      year: 'August 2026',
      recognition: '4th Place',
      type: 'AI Innovation & Competition',
      category: 'competition',
      badge: '4th Place',
      isPlacement: true,
      description:
        'Participated in Ziro Demo Day 2026, showcasing practical AI applications and demonstrating how AI-powered solutions can address real-world problems.',
      linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7500037475734802432/',
    },
    {
      id: 'national-netball',
      title: 'National-Level Netball Meet',
      year: '2025–2026',
      institutionRepresented: 'RVR & JC College of Engineering',
      venue: 'SAGE University, Madhya Pradesh',
      type: 'National-Level Sports Participation',
      category: 'sports',
      badge: 'National Representation',
      description:
        'Represented RVR & JC College of Engineering at the National-Level Netball Meet conducted at SAGE University, Madhya Pradesh.',
    },
    {
      id: 'inter-university-basketball',
      title: 'Inter-University Basketball Competition',
      year: '2025–2026',
      institutionRepresented: 'RVR & JC College of Engineering',
      venue: 'Acharya Nagarjuna University (ANU)',
      recognition: '2nd Place',
      type: 'Inter-University Competition',
      category: 'competition',
      badge: '2nd Place',
      isPlacement: true,
      description:
        'Represented RVR & JC College of Engineering in an inter-university basketball competition and secured 2nd place.',
    },
    {
      id: 'inter-university-handball',
      title: 'Inter-University Handball Competition',
      year: '2025–2026',
      institutionRepresented: 'RVR & JC College of Engineering',
      venue: 'Acharya Nagarjuna University (ANU)',
      recognition: '4th Place',
      type: 'Inter-University Competition',
      category: 'competition',
      badge: '4th Place',
      isPlacement: true,
      description:
        'Represented RVR & JC College of Engineering in an inter-university handball competition and secured 4th place.',
    },
  ] as AchievementItem[],
};
