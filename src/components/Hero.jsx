import { motion } from 'framer-motion'
import { Email, GitHub, LinkedIn, ArrowForward } from '@mui/icons-material'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/abinash05-debug', icon: GitHub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abinash-mohanty-845759344', icon: LinkedIn },
  {
    label: 'Email',
    href: 'mailto:abinashmmohanty@gmail.com?subject=Portfolio%20Inquiry',
    icon: Email,
  },
]

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="eyebrow">Hi, I&apos;m</p>
          <h1>Abinash Mohanty</h1>
          <h2 className="hero-title">BCA Student &amp; Full-Stack Developer</h2>
          <p className="hero-description">
            I build modern, practical and scalable web applications using technologies such
            as React, Java, Spring Boot and modern databases.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              View My Projects
              <ArrowForward fontSize="small" />
            </a>
            <a href="/resume.pdf" className="secondary-button" download>
              Download Resume
            </a>
          </div>

          <div className="social-row" aria-label="Social links">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noreferrer'}
                className="social-pill"
                aria-label={label}
              >
                <Icon fontSize="small" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="visual-glow" aria-hidden="true" />
          <div className="visual-window">
            <div className="window-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>

            <div className="window-body">
              <div className="code-card code-card-large">
                <span className="label">spring.boot</span>
                <strong>Backend</strong>
                <small>Java • REST APIs • JWT</small>
              </div>

              <div className="row-cards">
                <div className="code-card">
                  <span className="label">react</span>
                  <strong>Frontend</strong>
                  <small>UI + UX</small>
                </div>
                <div className="code-card">
                  <span className="label">db</span>
                  <strong>Database</strong>
                  <small>MySQL • MariaDB</small>
                </div>
              </div>

              <div className="stat-panel">
                <div>
                  <span>Projects</span>
                  <strong>03+</strong>
                </div>
                <div>
                  <span>Focus</span>
                  <strong>Full-stack</strong>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
