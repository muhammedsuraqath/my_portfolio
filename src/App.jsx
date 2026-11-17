import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import {
  profile, stats, skillGroups, globeSkills, experience, projects,
  flowClips, education, research, certifications,
} from './data.js'
import SpinPortrait from './components/SpinPortrait.jsx'

const HeroScene = lazy(() => import('./components/HeroScene.jsx'))
const SkillGlobe = lazy(() => import('./components/SkillGlobe.jsx'))

/* ── helpers ─────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Tilt({ children, className = '', max = 10 }) {
  const ref = useRef()
  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.transform = `perspective(900px) rotateY(${x * max}deg) rotateX(${-y * max}deg)`
    ref.current.style.setProperty('--gx', `${(x + 0.5) * 100}%`)
    ref.current.style.setProperty('--gy', `${(y + 0.5) * 100}%`)
  }
  const leave = () => (ref.current.style.transform = 'perspective(900px) rotateY(0) rotateX(0)')
  return (
    <div ref={ref} className={`tilt ${className}`} onMouseMove={move} onMouseLeave={leave}>
      {children}
    </div>
  )
}

function SectionHead({ kicker, title, id }) {
  return (
    <header className="section-head reveal" id={id}>
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
    </header>
  )
}

/* ── sections ────────────────────────────────────────── */
function Nav() {
  const links = [['about', 'About'], ['skills', 'Skills'], ['experience', 'Experience'], ['projects', 'Projects'], ['flow', 'Google Flow'], ['contact', 'Contact']]
  return (
    <nav className="nav">
      <a href="#top" className="logo">MS<span>.</span></a>
      <div className="nav-links">
        {links.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
      </div>
      <a href="#contact" className="btn btn-sm">Let's talk</a>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <Suspense fallback={null}><HeroScene /></Suspense>
      <div className="hero-inner">
        <div className="hero-text">
          <span className="pill"><i className="dot" /> {profile.location}</span>
          <h1>
            {profile.firstName}<br /><span className="grad">{profile.lastName}</span>
          </h1>
          <p className="role">{profile.title}</p>
          <div className="specialties">
            {profile.specialties.map((s) => <span key={s}>{s}</span>)}
          </div>
          <p className="lead">{profile.tagline}</p>
          <div className="cta">
            <a href="#projects" className="btn">View my work</a>
            <a href={profile.links.product} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <i className="dot" /> stimes.app ↗
            </a>
            <a href="#flow" className="btn btn-ghost">Google Flow reel</a>
            {profile.resumeUrl && <a href={profile.resumeUrl} className="btn btn-ghost" download>Résumé</a>}
          </div>
        </div>
        <Tilt className="hero-photo" max={6}>
          <SpinPortrait frames={profile.photos.spin} alt={`360° portrait of ${profile.name}`} />
          <div className="photo-glare" />
          <div className="photo-badge">
            <strong>{profile.name}</strong>
            <span>{profile.title}</span>
          </div>
        </Tilt>
      </div>
      <a href="#about" className="scroll-hint" aria-label="Scroll down"><span /></a>
    </section>
  )
}

function About() {
  return (
    <section className="section">
      <SectionHead id="about" kicker="01 · About" title="Engineer. Builder. AI-augmented." />
      <div className="about-grid">
        <div className="reveal">
          <p className="body-lg">{profile.summary}</p>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="gallery reveal">
          {profile.photos.gallery.map((src, i) => (
            <Tilt key={src} className={`g-item g-${i}`} max={8}>
              <img src={src} alt={`${profile.name}, portrait ${i + 1}`} loading="lazy" />
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section">
      <SectionHead id="skills" kicker="02 · Skills" title="The stack I ship with" />
      <div className="skills-grid">
        <div className="globe-wrap reveal">
          <Suspense fallback={<div className="globe-fallback">Loading 3D…</div>}>
            <SkillGlobe items={globeSkills} />
          </Suspense>
          <p className="globe-hint">Move your cursor to spin</p>
        </div>
        <div className="skill-list reveal">
          {skillGroups.map((g) => (
            <div className="skill-group" key={g.name}>
              <h3>{g.name}</h3>
              <div className="chips">
                {g.items.map((s) => (
                  <span key={s} className={`chip${s === 'Google Flow' ? ' chip-hl' : ''}`}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Bullets({ points }) {
  return (
    <ul>
      {points.map(([k, v], i) => (
        <li key={i}>{k && <strong>{k}</strong>}{v}</li>
      ))}
    </ul>
  )
}

function Experience() {
  return (
    <section className="section">
      <SectionHead id="experience" kicker="03 · Experience" title="Where I've built" />
      <ol className="timeline">
        {experience.map((job) => (
          <li className="tl-item reveal" key={job.company}>
            <div className="tl-dot" />
            <div className="tl-card">
              <div className="tl-head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="company">{job.company}</p>
                </div>
                <span className="period">{job.period}</span>
              </div>
              {job.products?.map((p) => (
                <div className="tl-product" key={p.name}>
                  <h4>
                    {p.name}
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noreferrer" className="ext">
                        {p.url.replace('https://', '')} ↗
                      </a>
                    )}
                  </h4>
                  <p className="stack">{p.stack}</p>
                  <Bullets points={p.points} />
                </div>
              ))}
              {job.points && <Bullets points={job.points} />}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Projects() {
  return (
    <section className="section">
      <SectionHead id="projects" kicker="04 · Projects" title="Selected work" />
      <div className="projects">
        {projects.map((p, i) => (
          <Tilt key={p.title} className="project reveal" max={9}>
            <span className="p-num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{p.title}</h3>
            <p className="p-org">{p.org}</p>
            <p>{p.desc}</p>
            {p.url && (
              <a href={p.url} target="_blank" rel="noreferrer" className="ext p-link">
                <i className="dot" /> Live · {p.url.replace('https://', '')} ↗
              </a>
            )}
            <div className="chips">{p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
          </Tilt>
        ))}
      </div>
    </section>
  )
}

function FlowClip({ clip, index }) {
  const [missing, setMissing] = useState(false)
  return (
    <Tilt className="flow-card reveal" max={7}>
      <div className="flow-screen">
        {missing ? (
          <div className="flow-empty">
            <span className="play">▶</span>
            <p>Add your Google Flow export</p>
            <code>public/videos/{clip.src.split('/').pop()}</code>
          </div>
        ) : (
          <video src={clip.src} muted loop autoPlay playsInline preload="metadata" onError={() => setMissing(true)} />
        )}
      </div>
      <div className="flow-meta">
        <span className="kicker">Clip {String(index + 1).padStart(2, '0')}</span>
        <h3>{clip.title}</h3>
        <p className="prompt">“{clip.prompt}”</p>
      </div>
    </Tilt>
  )
}

function FlowStudio() {
  return (
    <section className="section flow-section">
      <SectionHead id="flow" kicker="05 · Google Flow" title="AI filmmaking with Google Flow" />
      <p className="body-lg flow-intro reveal">
        Beyond code, I use <strong>Google Flow</strong> — Google's AI filmmaking tool — to turn written prompts into cinematic video:
        directing scenes, camera movement and visual style through prompt engineering.
      </p>
      <div className="flow-grid">
        {flowClips.map((c, i) => <FlowClip key={c.src} clip={c} index={i} />)}
      </div>
    </section>
  )
}

function Credentials() {
  return (
    <section className="section">
      <SectionHead id="education" kicker="06 · Education & Credentials" title="Foundations" />
      <div className="cred-grid">
        <div className="reveal">
          {education.map((e) => (
            <div className="edu" key={e.degree}>
              <div>
                <h3>{e.degree}</h3>
                <p>{e.school}</p>
              </div>
              <div className="edu-side"><span>{e.year}</span><strong>{e.score}</strong></div>
            </div>
          ))}
          <div className="research">
            <span className="kicker">Research</span>
            <p>“{research}”</p>
          </div>
        </div>
        <div className="certs reveal">
          {certifications.map((c) => (
            <div className="cert" key={c.name}>
              <span className="cert-by">{c.by}</span>
              <strong>{c.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const { email, phone, links } = profile
  return (
    <section className="section contact" id="contact">
      <div className="contact-card reveal">
        <span className="kicker">07 · Contact</span>
        <h2>Let's build something <span className="grad">together.</span></h2>
        <p className="body-lg">Open to full stack, .NET / Angular / Flutter and AI-integration roles. Based in {profile.location}.</p>
        <div className="cta">
          <a className="btn" href={`mailto:${email}`}>{email}</a>
          {phone && <a className="btn btn-ghost" href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>}
        </div>
        <div className="socials">
          {links.linkedin && <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>}
          {links.github && <a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
          {links.product && <a href={links.product} target="_blank" rel="noreferrer">stimes.app ↗</a>}
        </div>
      </div>
      <footer className="footer">© {new Date().getFullYear()} {profile.name}</footer>
    </section>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <FlowStudio />
        <Credentials />
        <Contact />
      </main>
    </>
  )
}
