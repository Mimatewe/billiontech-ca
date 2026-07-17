import type { IconType } from 'react-icons'
import {
  FaAws,
  FaBrain,
  FaBuilding,
  FaCloud,
  FaCogs,
  FaDatabase,
  FaHandshake,
  FaLock,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaRobot,
  FaRocket,
  FaServer,
  FaShieldAlt,
} from 'react-icons/fa'
import {
  SiCapacitor,
  SiCloudflare,
  SiDocker,
  SiExpo,
  SiFirebase,
  SiGithub,
  SiGooglegemini,
  SiGooglecloud,
  SiNeon,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

export const company = {
  name: 'BILLION TECH INC.',
  shortName: 'BILLION TECH',
  tagline: 'Building the Future Through Technology.',
  director: 'Million Tewelde',
  directorTitle: 'Founder & Director',
  roles: ['Software Engineer', 'AI Engineer', 'Full Stack Developer'],
  location: 'Calgary, Alberta, Canada',
  locationShort: 'Calgary, Alberta',
  website: 'https://billiontech.ca',
  email: 'milimeasho@gmail.com',
  phone: '+1 368 886 8015',
  phoneTel: '+13688868015',
  whatsapp: 'https://wa.me/13688868015',
  linkedin: 'https://www.linkedin.com/in/milliontewelde',
  github: 'https://github.com/Mimatewe',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d315164.6908855435!2d-114.37138855!3d51.027495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca',
} as const

export type Project = {
  title: string
  description: string
  category: string
  technologies: string[]
  href?: string
  action?: 'Live Demo' | 'Google Play' | 'Website' | 'Learn More'
  githubHref?: string
}

export const products: Project[] = [
  {
    title: 'Biet',
    description:
      'Community rental platform helping people find houses and apartments with a modern full-stack experience across web and mobile.',
    category: 'Community Platform',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Cloudflare', 'Vercel', 'Capacitor', 'Android', 'iOS'],
    href: 'https://bietapp.com/',
    action: 'Website',
  },
  {
    title: 'Alberta Citizenship Quiz',
    description:
      'AI-powered citizenship preparation platform with practice quizzes and study tools for Android, iOS, and web.',
    category: 'Education · AI',
    technologies: ['Android', 'iOS', 'Web', 'AI', 'React'],
    href: 'https://play.google.com/store/apps/details?id=com.million.class74english',
    action: 'Google Play',
  },
  {
    title: 'Kal Service',
    description:
      'Business website for accounting, payroll, immigration, and professional services with a clean corporate presence.',
    category: 'Business Website',
    technologies: ['Accounting', 'Payroll', 'Immigration', 'Web'],
    action: 'Learn More',
  },
  {
    title: 'Cheers Pictures',
    description:
      'Photography, video production, and media platform showcasing creative work and client storytelling.',
    category: 'Media Platform',
    technologies: ['Photography', 'Video Production', 'Media'],
    href: 'https://cheerspictures.com',
    action: 'Website',
  },
  {
    title: 'Tigrinya Kids Learning',
    description:
      'Educational platform helping children learn Tigrinya through interactive lessons on Android and web.',
    category: 'Education',
    technologies: ['Android', 'Web', 'Education'],
    action: 'Learn More',
  },
  {
    title: 'School Management Platform',
    description:
      'Education management system for schools to organize students, staff, and academic operations.',
    category: 'Enterprise · Education',
    technologies: ['Full Stack', 'Database', 'Admin Systems'],
    action: 'Learn More',
  },
  {
    title: 'AI Projects',
    description:
      'Applied AI systems including prompt engineering, LLM integration, RAG pipelines, vector databases, and AI assistants.',
    category: 'Artificial Intelligence',
    technologies: ['Prompt Engineering', 'LLM Integration', 'RAG', 'Vector Databases', 'AI Assistants'],
    action: 'Learn More',
  },
]

/** Legacy portfolio pieces retained so existing work remains visible. */
export const portfolioExtras: Project[] = [
  {
    title: 'Evangadi Forum',
    description: 'Modern community forum where users can ask questions, share answers, and discuss topics.',
    category: 'Web App',
    technologies: ['React', 'Node.js', 'Express', 'Supabase', 'Render'],
    href: 'https://evangadi-forum-frontend-eyg6.onrender.com/',
    action: 'Live Demo',
  },
  {
    title: 'MovieFlix',
    description: 'Movie discovery application with search, categories, and detailed movie information.',
    category: 'Web App',
    technologies: ['React', 'Vite', 'REST API', 'Netlify'],
    href: 'https://movieflixteam.netlify.app/',
    action: 'Live Demo',
  },
  {
    title: 'ChatGPT Clone',
    description: 'AI chat application with conversations, authentication, and a modern interface.',
    category: 'AI',
    technologies: ['React', 'AI Chat', 'Authentication', 'Netlify'],
    href: 'https://chat-gp.netlify.app/',
    action: 'Live Demo',
  },
]

export const projects: Project[] = [...products, ...portfolioExtras]

export type Service = {
  title: string
  description: string
  icon: IconType
}

export const services: Service[] = [
  { title: 'AI Development', description: 'Custom AI systems, assistants, and intelligent workflows.', icon: FaBrain },
  { title: 'Custom Software Development', description: 'Tailored software built around your business processes.', icon: FaCogs },
  { title: 'Web Applications', description: 'Fast, secure, and scalable web platforms.', icon: FaServer },
  { title: 'Mobile Apps', description: 'Cross-platform apps for customers and teams.', icon: FaMobileAlt },
  { title: 'Android Development', description: 'Native-quality Android experiences ready for Play Store.', icon: FaMobileAlt },
  { title: 'iOS Development', description: 'Polished iOS apps with modern UX and performance.', icon: FaMobileAlt },
  { title: 'Next.js Development', description: 'Production-grade React apps with SEO and speed.', icon: FaRocket },
  { title: 'React Development', description: 'Interactive interfaces with clean component architecture.', icon: FaRocket },
  { title: 'Node.js APIs', description: 'Reliable APIs and backend services for modern products.', icon: FaServer },
  { title: 'Cloud Architecture', description: 'Cloud-native systems designed for growth and uptime.', icon: FaCloud },
  { title: 'Database Design', description: 'Structured data models optimized for performance.', icon: FaDatabase },
  { title: 'Automation', description: 'Workflow automation that reduces manual operations.', icon: FaCogs },
  { title: 'AI Integration', description: 'Embed LLMs and AI features into existing products.', icon: FaBrain },
  { title: 'Prompt Engineering', description: 'High-signal prompts and evaluation for AI quality.', icon: FaBrain },
  { title: 'Business Digital Transformation', description: 'Modernize operations with practical digital systems.', icon: FaBuilding },
  { title: 'Government Solutions', description: 'Secure digital platforms for public-sector needs.', icon: FaShieldAlt },
  { title: 'UI/UX Design', description: 'Clear interfaces that feel premium and easy to use.', icon: FaRocket },
  { title: 'Deployment', description: 'CI/CD, hosting, and production rollout with confidence.', icon: FaCloud },
  { title: 'Maintenance', description: 'Ongoing support, monitoring, and continuous improvement.', icon: FaHandshake },
  { title: 'Technical Consulting', description: 'Architecture guidance and technology decisions that scale.', icon: FaLock },
]

export type TechItem = {
  name: string
  icon: IconType
}

export const technologies: TechItem[] = [
  { name: 'Next.js', icon: TbBrandNextjs },
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Prisma', icon: SiPrisma },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'Neon', icon: SiNeon },
  { name: 'Cloudflare', icon: SiCloudflare },
  { name: 'Docker', icon: SiDocker },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Capacitor', icon: SiCapacitor },
  { name: 'Expo', icon: SiExpo },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Google Cloud', icon: SiGooglecloud },
  { name: 'AWS', icon: FaAws },
  { name: 'OpenAI', icon: FaRobot },
  { name: 'Gemini AI', icon: SiGooglegemini },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Stripe', icon: SiStripe },
]

export const stats = [
  { value: 10, suffix: '+', label: 'Projects' },
  { value: 5000, suffix: '+', label: 'Development Hours' },
  { value: 100, suffix: '%', label: 'Client Commitment' },
  { value: 24, suffix: '/7', label: 'Support' },
] as const

export const reasons = [
  { title: 'Enterprise Architecture', description: 'Systems designed for reliability, clarity, and long-term scale.', icon: FaBuilding },
  { title: 'Secure Development', description: 'Security-conscious engineering from design through deployment.', icon: FaShieldAlt },
  { title: 'Modern Technology', description: 'Current frameworks and cloud tooling that stay maintainable.', icon: FaRocket },
  { title: 'AI First', description: 'Practical AI features that create real business leverage.', icon: FaBrain },
  { title: 'Scalable Infrastructure', description: 'Infrastructure that grows with your users and revenue.', icon: FaServer },
  { title: 'Fast Delivery', description: 'Focused execution with clear milestones and shipping cadence.', icon: FaCogs },
  { title: 'Professional Support', description: 'Responsive partnership before, during, and after launch.', icon: FaHandshake },
  { title: 'Canadian Business', description: 'Based in Calgary, Alberta — built for Canadian and global clients.', icon: FaMapMarkerAlt },
] as const

export const navLinks = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['Products', '#products'],
  ['Portfolio', '#portfolio'],
  ['Technologies', '#technologies'],
  ['About', '#about'],
  ['Contact', '#contact'],
] as const

export const process = [
  ['Idea', 'Discover the problem and outcome'],
  ['Planning', 'Scope, architecture, and milestones'],
  ['UI Design', 'Interfaces that feel clear and premium'],
  ['Backend', 'APIs and business logic'],
  ['Database', 'Reliable data models'],
  ['AI', 'Intelligent features where they matter'],
  ['Testing', 'Quality before release'],
  ['Deployment', 'Ship to production'],
  ['Maintenance', 'Support and continuous improvement'],
] as const
