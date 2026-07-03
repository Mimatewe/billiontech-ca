import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState, type ReactNode } from 'react'
import { FaArrowRight, FaCheck, FaCode, FaDatabase, FaDownload, FaEnvelope, FaExternalLinkAlt, FaGithub, FaGlobe, FaGooglePlay, FaLightbulb, FaLinkedin, FaMapMarkerAlt, FaMobileAlt, FaPaintBrush, FaPhoneAlt, FaRocket, FaSearch, FaServer, FaTimes, FaWrench } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'
import { focusAreas, projects, skillGroups, type Project } from './data'

const ease = [0.22, 1, 0.36, 1] as const

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .65, ease }}>{children}</motion.div>
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = [['Projects', '#projects'], ['About', '#about'], ['Skills', '#skills'], ['Process', '#process']]
  return <header className="site-header">
    <nav className="container nav" aria-label="Main navigation">
      <a className="brand" href="#home" aria-label="Million Tewelde, home"><span>MM</span><b>Million Tewelde</b></a>
      <div className={`nav-links ${open ? 'is-open' : ''}`}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let's talk <FaArrowRight /></a>
      </div>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? <FaTimes /> : <HiMenuAlt3 />}</button>
    </nav>
  </header>
}

function Hero() {
  return <section id="home" className="hero section">
    <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
    <div className="container hero-grid">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, ease }}>
        <h1>Hi, I'm <span>Million Measho <br className="mobile-break" />Tewelde</span></h1>
        <p className="hero-role">Full Stack Software Developer</p>
        <p className="hero-lead">I build modern web applications, mobile apps, AI systems, and business platforms.</p>
        <p className="hero-note">I enjoy solving real problems with software.</p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">View Projects <FaArrowRight /></a>
          <a className="button secondary" href="#contact">Contact Me <FaEnvelope /></a>
          <a
            className="text-button"
            href="/Million%20Measho%20Tewelde%20Resume.pdf"
            download="Million Measho Tewelde Resume.pdf"
          >
            Download Resume <FaDownload />
          </a>
        </div>
      </motion.div>
      <motion.div className="system-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .15, ease }} aria-label="Software systems visualization">
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="core"><FaCode /><span>Build</span></div>
        {focusAreas.map(({ label, icon: Icon }, index) => <motion.div key={label} className={`focus-node node-${index + 1}`} animate={{ y: [0, -7, 0] }} transition={{ repeat: Infinity, duration: 4 + index, delay: index * .3 }}><Icon /><span>{label}</span></motion.div>)}
      </motion.div>
    </div>
    <div className="container focus-strip">{focusAreas.map(({ label, icon: Icon }) => <div key={label}><Icon /><span>{label}</span></div>)}</div>
  </section>
}

function ProjectVisual({ kind }: { kind: Project['kind'] }) {
  if (kind === 'forum') return <div className="project-visual forum"><div className="visual-top"><span /><span /><span /></div><div className="forum-body"><div className="forum-side" /><div className="forum-feed"><i /><b /><i /><b /></div></div></div>
  if (kind === 'movie') return <div className="project-visual movie"><div className="movie-search"><FaSearch /> Search movies</div><div className="poster-row"><i /><i /><i /><i /></div></div>
  if (kind === 'ai') return <div className="project-visual ai"><div className="ai-mark">M</div><div className="chat-lines"><i /><i /><i /></div><div className="prompt">Ask anything <FaArrowRight /></div></div>
  if (kind === 'mobile') return <div className="project-visual mobile"><div className="phone"><div className="phone-head">Practice Test</div><div className="score">82%</div><i /><i /><i /></div></div>
  return <div className="project-visual rental"><div className="map"><i /><i /><i /></div><div className="listing"><span /><div><b>Biet</b><small>Find your next home</small></div></div></div>
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ActionIcon = project.action === 'Google Play' ? FaGooglePlay : FaExternalLinkAlt
  return <Reveal className={`project-card project-${index + 1}`}>
    <ProjectVisual kind={project.kind} />
    <div className="project-content">
      <div className="project-number">0{index + 1}</div>
      <h3>{project.title}</h3><p>{project.description}</p>
      <div className="tech-list">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
      <div className="project-actions">
        <a href={project.href} target="_blank" rel="noreferrer">{project.action} <ActionIcon /></a>
        <a className="icon-link" href="https://github.com/Mimatewe" target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub placeholder`}><FaGithub /></a>
      </div>
    </div>
  </Reveal>
}

function Projects() {
  return <section id="projects" className="section projects"><div className="container"><Reveal className="section-heading"><span>Selected work</span><h2>Projects built for real people.</h2><p>Web, mobile, AI, and community products.</p></Reveal><div className="projects-layout">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div></div></section>
}

function AboutSkills() {
  return <section className="section about-skills"><div className="container split-layout">
    <Reveal className="about" ><span className="section-label">About</span><h2>I build thoughtful software that solves real problems.</h2><div className="about-copy"><p>I enjoy building software that solves real problems.</p><p>I like designing complete systems from idea to deployment.</p><p>I enjoy learning new technologies and creating products for businesses and communities.</p><p>I focus on clean architecture, modern UI, scalability, and user experience.</p><p>I enjoy solving difficult problems more than writing code.</p></div><a className="inline-link" href="#projects">View selected projects <FaArrowRight /></a></Reveal>
    <div id="skills" className="skills"><span className="section-label">Skills</span><div className="skills-grid">{skillGroups.map(({ name, items, icon: Icon }) => <Reveal className="skill-group" key={name}><div className="skill-title"><Icon /><h3>{name}</h3></div><div>{items.map(item => <span key={item}>{item}</span>)}</div></Reveal>)}</div></div>
  </div></section>
}

const strengths = [
  ['Problem Solver', 'I enjoy solving difficult software problems.', FaLightbulb],
  ['Creative Builder', 'I enjoy turning ideas into working products.', FaPaintBrush],
  ['System Thinker', 'I like designing complete systems, not only writing code.', FaServer],
  ['Continuous Learner', 'I enjoy learning new technologies.', FaRocket]
] as const

function Experience() {
  const work = ['Designed and built complete web applications.', 'Created backend APIs.', 'Designed databases.', 'Integrated AI.', 'Deployed applications to cloud platforms.', 'Built responsive mobile-friendly interfaces.', 'Published Android applications.', 'Managed production deployments.']
  return <section id="about" className="section experience"><div className="container split-layout">
    <Reveal><span className="section-label">Experience</span><h2>Full Stack Software Developer</h2><div className="work-list">{work.map(item => <p key={item}><FaCheck />{item}</p>)}</div></Reveal>
    <div><span className="section-label">Strengths</span><div className="strength-grid">{strengths.map(([title, text, Icon]) => <Reveal className="strength" key={title}><Icon /><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div>
  </div></section>
}

const process = [['Idea', FaLightbulb], ['Planning', FaWrench], ['UI Design', FaPaintBrush], ['Backend', FaServer], ['Database', FaDatabase], ['AI', FaCode], ['Testing', FaCheck], ['Deployment', FaRocket], ['Maintenance', FaWrench]] as const

function Process() {
  return <section id="process" className="section process"><div className="container"><Reveal className="section-heading"><span>Development process</span><h2>From idea to a reliable product.</h2></Reveal><div className="process-track">{process.map(([label, Icon], index) => <Reveal className="process-step" key={label}><div className="step-icon"><Icon /></div><span>0{index + 1}</span><h3>{label}</h3></Reveal>)}</div></div></section>
}

function Community() {
  return <section className="section community"><div className="container"><Reveal className="community-panel"><div><span className="section-label">Personal & Community Projects</span><h2>I build software for my community.</h2></div><p>Many of my projects solve everyday problems for people and small businesses.</p><div className="community-icon"><FaMobileAlt /></div></Reveal></div></section>
}

function Contact() {
  return <section id="contact" className="section contact"><div className="container contact-panel"><Reveal><span className="section-label">Contact</span><h2>Let's build something useful.</h2><p>Have a project or opportunity? Send me a message.</p><a className="button primary" href="mailto:milimeasho@gmail.com">Email Me <FaArrowRight /></a></Reveal><Reveal className="contact-links"><a href="mailto:milimeasho@gmail.com"><FaEnvelope /><span>Email<small>milimeasho@gmail.com</small></span></a><a href="tel:+13688868015"><FaPhoneAlt /><span>Phone<small>+1 368 886 8015</small></span></a><a href="https://github.com/Mimatewe" target="_blank" rel="noreferrer"><FaGithub /><span>GitHub<small>@Mimatewe</small></span></a><a href="https://www.linkedin.com/in/milliontewelde" target="_blank" rel="noreferrer"><FaLinkedin /><span>LinkedIn<small>milliontewelde</small></span></a><a href="https://www.cheerspictures.com/" target="_blank" rel="noreferrer"><FaGlobe /><span>Website<small>cheerspictures.com</small></span></a><div><FaMapMarkerAlt /><span>Location<small>Calgary, Alberta, Canada</small></span></div></Reveal></div></section>
}

export default function App() {
  useEffect(() => { document.documentElement.classList.add('dark') }, [])
  return <><Header /><main><Hero /><Projects /><Community /><AboutSkills /><Experience /><Process /><Contact /></main><footer><div className="container"><span className="brand"><span>MM</span><b>Million Tewelde</b></span><p>Designed and built by Million Measho Tewelde.</p><a href="#home">Back to top ↑</a></div></footer></>
}


