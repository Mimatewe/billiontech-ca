import type { IconType } from 'react-icons'
import { FaAndroid, FaBrain, FaCloud, FaCode, FaDatabase, FaGithub, FaMobileAlt, FaNodeJs, FaReact, FaTools } from 'react-icons/fa'

export type Project = {
  title: string
  description: string
  technologies: string[]
  href: string
  action: 'Live Demo' | 'Google Play' | 'Website'
  kind: 'forum' | 'movie' | 'ai' | 'mobile' | 'rental'
}

export const projects: Project[] = [
  { title: 'Evangadi Forum', description: 'Modern community forum where users can ask questions, share answers, and discuss topics.', technologies: ['React', 'Node.js', 'Express', 'Supabase', 'Render'], href: 'https://evangadi-forum-frontend-eyg6.onrender.com/', action: 'Live Demo', kind: 'forum' },
  { title: 'MovieFlix', description: 'Movie discovery application with search, categories, and detailed movie information.', technologies: ['React', 'Vite', 'REST API', 'Netlify'], href: 'https://movieflixteam.netlify.app/', action: 'Live Demo', kind: 'movie' },
  { title: 'ChatGPT Clone', description: 'AI chat application with conversations, authentication, and a modern interface.', technologies: ['React', 'AI Chat', 'Authentication', 'Netlify'], href: 'https://chat-gp.netlify.app/', action: 'Live Demo', kind: 'ai' },
  { title: 'Alberta Driving Test Practice', description: 'Android and iOS learning app for Alberta Class 4, Class 7, and Canadian Citizenship practice tests.', technologies: ['Android', 'Capacitor', 'React', 'Mobile'], href: 'https://play.google.com/store/apps/details?id=com.million.class74english', action: 'Google Play', kind: 'mobile' },
  { title: 'Biet App', description: 'Community rental platform for Eritrean and Ethiopian communities to find houses and apartments.', technologies: ['Full Stack', 'Community', 'Rental Platform'], href: 'https://bietapp.com', action: 'Website', kind: 'rental' }
]

export const skillGroups: { name: string; items: string[]; icon: IconType }[] = [
  { name: 'Frontend', items: ['React', 'Vite', 'JavaScript', 'HTML', 'CSS', 'Tailwind'], icon: FaReact },
  { name: 'Backend', items: ['Node.js', 'Express', 'REST API'], icon: FaNodeJs },
  { name: 'Database', items: ['PostgreSQL', 'MySQL', 'Prisma', 'Supabase'], icon: FaDatabase },
  { name: 'Cloud', items: ['Render', 'Netlify', 'GitHub'], icon: FaCloud },
  { name: 'Mobile', items: ['Android', 'Capacitor', 'React'], icon: FaMobileAlt },
  { name: 'AI', items: ['Google Gemini', 'RAG', 'AI Chat', 'Prompt Engineering'], icon: FaBrain },
  { name: 'Tools', items: ['Git', 'VS Code', 'Cursor', 'Photoshop', 'Canva'], icon: FaTools }
]

export const focusAreas = [
  { label: 'Full Stack Applications', icon: FaCode },
  { label: 'AI Applications', icon: FaBrain },
  { label: 'Mobile Apps', icon: FaAndroid },
  { label: 'Community Platforms', icon: FaGithub }
]
