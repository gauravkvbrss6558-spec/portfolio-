import {
  BarChart3,
  Brain,
  Code2,
  Database,
  Globe,
  Layers,
  Lightbulb,
  Terminal,
  type LucideIcon,
} from 'lucide-react';

export const profile = {
  name: 'Gaurav Kumar',
  headline: 'Web Development & Python Developer',
  tagline: 'Web Developer | Python | AI/ML',
  location: 'Patna, Bihar, India',
  email: 'gauravkvbrss6558@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gauravkumar004',
  status: 'Open to opportunities in data analytics, software development and tech roles',
  summary:
    'Highly motivated tech enthusiast and student at Patna University with hands-on internship experience in data science, AI/ML, Python development and web design. I build responsive web applications, work with data models and enjoy turning raw information into clear decisions through research and problem solving.',
};

export interface Service {
  title: string;
  icon: LucideIcon;
  summary: string;
  highlights: string[];
}

export const services: Service[] = [
  {
    title: 'Web Development',
    icon: Globe,
    summary: 'Responsive, well-structured websites and web apps that look sharp on every screen.',
    highlights: ['HTML, CSS & JavaScript', 'Responsive layouts', 'Accessible design'],
  },
  {
    title: 'Python Development',
    icon: Code2,
    summary: 'Clean Python programs and scripts that automate work and handle real data.',
    highlights: ['Python scripting', 'Data handling', 'Problem solving'],
  },
  {
    title: 'Data & AI/ML',
    icon: Brain,
    summary: 'Turning raw data into clear analysis and models that support better decisions.',
    highlights: ['Data analysis', 'SQL & DBMS', 'AI/ML fundamentals'],
  },
];

export const marqueeTags = [
  'Python',
  'Web Development',
  'JavaScript',
  'SQL',
  'Data Analysis',
  'AI/ML',
  'HTML & CSS',
  'Responsive Design',
  'DBMS',
  'Google Analytics',
  'Problem Solving',
  'Visual Basic .NET',
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  points?: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Web Development & Design',
    company: 'Oasis Infobyte',
    period: 'Jul 2026 - Aug 2026',
    location: 'India',
  },
  {
    role: 'Web Development Intern',
    company: 'InAmigos Foundation (IAF)',
    period: 'May 2026 - Jun 2026',
    location: 'Patna, Bihar, India',
  },
  {
    role: 'AI/ML',
    company: 'QSkill',
    period: 'Apr 2026 - May 2026',
  },
  {
    role: 'Python Developer',
    company: 'UptoSkills',
    period: 'Jan 2026 - May 2026',
    location: 'India',
    points: ['Python internship focused on hands-on development.'],
  },
  {
    role: 'Research Intern',
    company: 'International Institute of SDG\'s and Public Policy Research',
    period: 'Feb 2026 - Apr 2026',
  },
  {
    role: 'Data Science Intern',
    company: 'Cognifyz Technologies',
    period: 'Feb 2026 - Mar 2026',
  },
  {
    role: 'NGO Internship - Charity & Community Engagement',
    company: 'Odisha Development Management Programme (ODMP)',
    period: 'Jan 2026 - Feb 2026',
    points: [
      'Engaged in community-building activities, communicating ODMP\'s impact.',
      'Maintained structured records of outreach and funds raised.',
    ],
  },
  {
    role: 'Frontend Development',
    company: 'SR India',
    period: 'Jan 2026 - Feb 2026',
    location: 'Navi Mumbai, Maharashtra, India',
    points: [
      'Guided sessions on HTML, CSS and JavaScript fundamentals.',
      'Explored modern frameworks such as React, Angular and Vue.',
      'Learned responsive design and accessibility standards.',
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'CodSoft',
    period: 'Jan 2026 - Feb 2026',
  },
];

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Data & Analytics',
    icon: BarChart3,
    items: ['Data Analysis', 'SQL', 'DBMS', 'Google Analytics'],
  },
  {
    title: 'Programming',
    icon: Code2,
    items: ['Python', 'JavaScript', 'Visual Basic .NET'],
  },
  {
    title: 'Web Development',
    icon: Globe,
    items: ['HTML', 'CSS', 'Responsive Design', 'Web Design'],
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    items: ['AI/ML', 'Data Science', 'Python'],
  },
  {
    title: 'Research & Impact',
    icon: Lightbulb,
    items: ['Research', 'Problem Solving', 'Community Impact'],
  },
];

export const ringSkills: { label: string; icon: LucideIcon }[] = [
  { label: 'Python', icon: Code2 },
  { label: 'SQL', icon: Database },
  { label: 'Data Analysis', icon: BarChart3 },
  { label: 'AI / ML', icon: Brain },
  { label: 'JavaScript', icon: Terminal },
  { label: 'HTML & CSS', icon: Globe },
  { label: 'DBMS', icon: Layers },
  { label: 'Problem Solving', icon: Lightbulb },
];

export const certifications = [
  'Deloitte Australia - Data Analytics Job Simulation',
  'Amazon DSP Advanced Certification',
  'AI-Powered Shopping Ads Certification',
  'Google Analytics Certification',
  'Lloyds Banking Group - Data Science Job Simulation',
];

export const education = [
  {
    school: 'Patna University',
    detail: 'Current student',
    period: '2024',
  },
  {
    school: 'Kendriya Vidyalaya (KV)',
    detail: '12th passed',
    period: '',
  },
];
