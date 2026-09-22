import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import {
  FaApple,
  FaArrowRight,
  FaCheck,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaGooglePlay,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTimes,
  FaWhatsapp,
} from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'
import {
  company,
  navLinks,
  portfolioExtras,
  process,
  products,
  reasons,
  services,
  stats,
  technologies,
  type Project,
} from './data'

const ease = [0.22, 1, 0.36, 1] as const

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-72px' }}
      transition={{ duration: 0.65, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduced = useReducedMotion()
  const [display, setDisplay] = useState(0)
  const shown = reduced || !inView ? (reduced ? value : 0) : display

  useEffect(() => {
    if (!inView || reduced) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [inView, reduced, value])

  return (
    <span ref={ref} className="stat-value">
      {shown}
      {suffix}
    </span>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="container nav" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label={`${company.name}, home`}>
          <span aria-hidden="true">BT</span>
          <b>{company.name}</b>
        </a>
        <div className={`nav-links ${open ? 'is-open' : ''}`} id="primary-navigation">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>
            Hire Us <FaArrowRight aria-hidden="true" />
          </a>
        </div>
        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          {open ? <FaTimes /> : <HiMenuAlt3 />}
        </button>
      </nav>
    </header>
  )
}

function FloatingShapes() {
  const reduced = useReducedMotion()
  if (reduced) return null
  return (
    <div className="hero-shapes" aria-hidden="true">
      <motion.span
        className="shape shape-a"
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="shape shape-b"
        animate={{ y: [0, 22, 0], x: [0, -14, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="shape shape-c"
        animate={{ y: [0, -12, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

function Hero() {
  const featuredApps = products.filter((project) => project.appStoreHref && project.googlePlayHref)

  return (
    <section id="home" className="hero section" aria-labelledby="hero-heading">
      <div className="hero-bg" aria-hidden="true" />
      <FloatingShapes />
      <div className="container hero-layout">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
        >
          <p className="hero-brand">{company.name}</p>
          <h1 id="hero-heading">Calgary Web, Mobile App & Custom Software Development</h1>
          <p className="hero-lead">
            {company.name} builds websites, iOS and Android apps, AI-powered software, and custom business systems from Calgary, Alberta.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#products">
              Explore Projects <FaArrowRight aria-hidden="true" />
            </a>
            <a className="button secondary" href="#contact">
              Hire Us
            </a>
            <a className="button ghost" href="#contact">
              Contact <FaEnvelope aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.aside
          className="hero-app-panel"
          aria-label="Download Billion Tech apps"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.12 }}
        >
          <div className="hero-app-panel-heading">
            <span>Available now</span>
            <h2>Study smarter. Download today.</h2>
          </div>

          <div className="hero-app-list">
            {featuredApps.map((app) => (
              <article className="hero-app-card" key={app.title}>
                <div>
                  <span className="hero-app-category">{app.category}</span>
                  <h3>{app.title}</h3>
                </div>
                <div className="hero-store-buttons" aria-label={`Download ${app.title}`}>
                  <a href={app.appStoreHref} target="_blank" rel="noopener noreferrer">
                    <FaApple aria-hidden="true" />
                    <span>App Store</span>
                  </a>
                  <a href={app.googlePlayHref} target="_blank" rel="noopener noreferrer">
                    <FaGooglePlay aria-hidden="true" />
                    <span>Google Play</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="hero-app-note">Free to download · iPhone, iPad & Android</p>
        </motion.aside>
      </div>
    </section>
  )
}

function chunkItems<T>(items: readonly T[], size: number) {
  const chunks: T[][] = []
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size))
  }
  return chunks
}

function useAutoSlide(total: number, delay = 2000) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (total <= 1) return

    const interval = window.setInterval(() => {
      setCurrent((previous) => (previous + 1) % total)
    }, delay)

    return () => window.clearInterval(interval)
  }, [delay, total])

  useEffect(() => {
    if (current >= total && total > 0) setCurrent(0)
  }, [current, total])

  return [current, setCurrent] as const
}

function SliderControls({
  current,
  count,
  onSelect,
  label,
}: {
  current: number
  count: number
  onSelect: (index: number) => void
  label: string
}) {
  if (count <= 1) return null

  return (
    <div className="slider-controls">
      <span className="slider-timing">Auto · 2 sec</span>
      <div className="slider-dots" aria-label={label}>
        {Array.from({ length: count }, (_, index) => (
          <button
            key={index}
            type="button"
            className={index === current ? 'is-active' : ''}
            aria-label={`Show slide ${index + 1} of ${count}`}
            aria-current={index === current ? 'true' : undefined}
            onClick={() => onSelect(index)}
          />
        ))}
      </div>
      <span className="slider-count">
        {String(current + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
      </span>
    </div>
  )
}

function Stats() {
  return (
    <section className="section stats" aria-label="Company statistics">
      <div className="container stats-grid">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} className="stat" delay={index * 0.05}>
            <Counter value={stat.value} suffix={stat.suffix} />
            <span className="stat-label">{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Services() {
  const slides = chunkItems(services, 4)
  const [currentSlide, setCurrentSlide] = useAutoSlide(slides.length)
  const visibleServices = slides[currentSlide] ?? []

  return (
    <section id="services" className="section services" aria-labelledby="services-heading">
      <div className="container">
        <Reveal className="section-heading compact-heading">
          <span>Services</span>
          <div>
            <h2 id="services-heading">Enterprise capabilities, without the wall of text.</h2>
            <p>Four focused capabilities at a time. The next set appears automatically every 2 seconds.</p>
          </div>
        </Reveal>

        <motion.div
          key={currentSlide}
          className="services-grid carousel-grid"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease }}
        >
          {visibleServices.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="service-item">
                <Icon aria-hidden="true" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            )
          })}
        </motion.div>

        <SliderControls
          current={currentSlide}
          count={slides.length}
          onSelect={setCurrentSlide}
          label="Service slides"
        />
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const ActionIcon = project.action === 'Google Play' ? FaGooglePlay : FaExternalLinkAlt
  const hasActions =
    Boolean(project.appStoreHref) ||
    Boolean(project.googlePlayHref) ||
    Boolean(project.landingHref) ||
    Boolean(project.href && project.action) ||
    Boolean(project.githubHref)

  return (
    <Reveal className="project-card">
      <article className="project-content">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        {hasActions ? (
          <div className="project-actions">
            {project.landingHref && (
              <a href={project.landingHref}>
                Details <FaArrowRight aria-hidden="true" />
              </a>
            )}
            {project.appStoreHref && (
              <a className="store-link" href={project.appStoreHref} target="_blank" rel="noopener noreferrer">
                App Store <FaApple aria-hidden="true" />
              </a>
            )}
            {project.googlePlayHref && (
              <a className="store-link" href={project.googlePlayHref} target="_blank" rel="noopener noreferrer">
                Google Play <FaGooglePlay aria-hidden="true" />
              </a>
            )}
            {project.href && project.action && (
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                {project.action} <ActionIcon aria-hidden="true" />
              </a>
            )}
            {project.githubHref && (
              <a href={project.githubHref} target="_blank" rel="noopener noreferrer">
                GitHub <FaGithub aria-hidden="true" />
              </a>
            )}
          </div>
        ) : null}
      </article>
    </Reveal>
  )
}

function Products() {
  const slides = chunkItems(products, 4)
  const [currentSlide, setCurrentSlide] = useAutoSlide(slides.length)
  const visibleProducts = slides[currentSlide] ?? []

  return (
    <section id="products" className="section products" aria-labelledby="products-heading">
      <div className="container">
        <Reveal className="section-heading compact-heading">
          <span>Products</span>
          <div>
            <h2 id="products-heading">Software products built for real users.</h2>
            <p>Four products at a time, with the next set rotating automatically every 2 seconds.</p>
          </div>
        </Reveal>

        <motion.div
          key={currentSlide}
          className="products-slide-grid carousel-grid"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease }}
        >
          {visibleProducts.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        <SliderControls
          current={currentSlide}
          count={slides.length}
          onSelect={setCurrentSlide}
          label="Product slides"
        />
      </div>
    </section>
  )
}

function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio" aria-labelledby="portfolio-heading">
      <div className="container">
        <Reveal className="section-heading">
          <span>Portfolio</span>
          <div>
            <h2 id="portfolio-heading">Additional selected work.</h2>
            <p>More shipped applications across web, mobile, and AI.</p>
          </div>
        </Reveal>
        <div className="projects-layout">
          {portfolioExtras.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Technologies() {
  return (
    <section id="technologies" className="section technologies" aria-labelledby="tech-heading">
      <div className="container">
        <Reveal className="section-heading">
          <span>Technologies</span>
          <div>
            <h2 id="tech-heading">Modern stack for reliable delivery.</h2>
            <p>Tools we use to design, build, deploy, and scale production systems.</p>
          </div>
        </Reveal>
        <div className="tech-grid">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <Reveal key={tech.name} className="tech-item" delay={(index % 7) * 0.03}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <Icon aria-hidden="true" />
                  <span>{tech.name}</span>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section id="why-us" className="section why-us" aria-labelledby="why-heading">
      <div className="container">
        <Reveal className="section-heading">
          <span>Why us</span>
          <div>
            <h2 id="why-heading">Why choose {company.name}</h2>
            <p>A Canadian technology partner focused on quality, speed, and lasting systems.</p>
          </div>
        </Reveal>
        <div className="why-grid">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Reveal key={reason.title} className="why-item" delay={(index % 4) * 0.04}>
                <Icon aria-hidden="true" />
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-heading">
      <div className="container about-layout">
        <Reveal>
          <span className="section-label">About</span>
          <h2 id="about-heading">About {company.name}</h2>
          <p className="about-lead">
            We build thoughtful software that helps organizations move faster, serve people better, and unlock the
            value of modern AI.
          </p>
        </Reveal>
        <Reveal className="about-director">
          <p className="director-label">Director</p>
          <h3>{company.director}</h3>
          <ul className="role-list" aria-label="Roles">
            {company.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
            <li>{company.directorTitle} of {company.name}</li>
          </ul>
          <div className="about-copy">
            <p>
              Million Tewelde is a software engineer and AI engineer passionate about building scalable systems that
              solve real business problems. From community platforms to enterprise applications, he leads{' '}
              {company.name} with a focus on clean architecture, practical AI, and products people actually use.
            </p>
            <p>
              Based in Calgary, Alberta, the company partners with businesses, startups, and government organizations to
              design, ship, and maintain modern digital platforms.
            </p>
          </div>
          <a className="inline-link" href="#products">
            Explore our products <FaArrowRight aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="process" className="section process" aria-labelledby="process-heading">
      <div className="container">
        <Reveal className="section-heading">
          <span>Process</span>
          <div>
            <h2 id="process-heading">From idea to a reliable product.</h2>
            <p>A clear delivery path from discovery through maintenance.</p>
          </div>
        </Reveal>
        <div className="process-track">
          {process.map(([label, detail], index) => (
            <Reveal className="process-step" key={label}>
              <div className="step-icon" aria-hidden="true">
                <FaCheck />
              </div>
              <span>0{index + 1}</span>
              <h3>{label}</h3>
              <p>{detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')
    try {
      const data = new FormData(form)
      data.set('form-name', 'contact')
      const body = new URLSearchParams()
      data.forEach((value, key) => {
        if (typeof value === 'string') body.append(key, value)
      })
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!response.ok) throw new Error('Failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-heading">
      <div className="container contact-panel">
        <Reveal>
          <span className="section-label">Contact</span>
          <h2 id="contact-heading">Let&apos;s build something useful.</h2>
          <p>Tell us about your project. We respond quickly and keep the conversation practical.</p>
          <dl className="contact-meta">
            <div>
              <dt>Director</dt>
              <dd>{company.director}</dd>
            </div>
            <div>
              <dt>Company</dt>
              <dd>{company.name}</dd>
            </div>
            <div>
              <dt>Address</dt>
              <dd>{company.location}</dd>
            </div>
            <div>
              <dt>Website</dt>
              <dd>
                <a href={company.website} target="_blank" rel="noopener noreferrer">
                  billiontech.ca
                </a>
              </dd>
            </div>
          </dl>
          <div className="contact-links" aria-label="Contact channels">
            <a href={`mailto:${company.email}`}>
              <FaEnvelope aria-hidden="true" />
              <span>
                Email<small>{company.email}</small>
              </span>
            </a>
            <a href={`tel:${company.phoneTel}`}>
              <FaPhoneAlt aria-hidden="true" />
              <span>
                Phone<small>{company.phone}</small>
              </span>
            </a>
            <a href={company.whatsapp} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp aria-hidden="true" />
              <span>
                WhatsApp<small>Message us</small>
              </span>
            </a>
            <a href={company.github} target="_blank" rel="noopener noreferrer">
              <FaGithub aria-hidden="true" />
              <span>
                GitHub<small>@Mimatewe</small>
              </span>
            </a>
            <a href={company.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin aria-hidden="true" />
              <span>
                LinkedIn<small>milliontewelde</small>
              </span>
            </a>
            <div>
              <FaMapMarkerAlt aria-hidden="true" />
              <span>
                Address<small>{company.location}</small>
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal className="contact-aside">
          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={onSubmit}
            aria-label="Contact form"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="sr-only">
              <label>
                Don&apos;t fill this out if you&apos;re human: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>
            <label>
              Name
              <input name="name" type="text" required autoComplete="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
            </label>
            <label>
              Message
              <textarea name="message" required rows={5} placeholder="Tell us about your project" />
            </label>
            <button className="button primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'} <FaArrowRight aria-hidden="true" />
            </button>
            <p className="form-status" role="status" aria-live="polite">
              {status === 'sent' && 'Thanks — your message was sent.'}
              {status === 'error' && (
                <>
                  Something went wrong. Email us at <a href={`mailto:${company.email}`}>{company.email}</a>.
                </>
              )}
            </p>
          </form>

          <div className="map-wrap">
            <iframe
              title={`Map of ${company.location}`}
              src={company.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <a className="brand" href="#home" aria-label={`${company.name}, home`}>
            <span aria-hidden="true">BT</span>
            <b>{company.name}</b>
          </a>
          <p className="footer-tagline">{company.tagline}</p>
        </div>
        <div className="footer-meta">
          <p>
            Director
            <strong>{company.director}</strong>
          </p>
          <p>
            Location
            <strong>{company.location}</strong>
          </p>
        </div>
        <div className="footer-copy">
          <p>Copyright © 2026 {company.name}</p>
          <p>All Rights Reserved.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Products />
        <Portfolio />
        <Technologies />
        <WhyUs />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
