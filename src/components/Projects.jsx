import { motion } from 'framer-motion'
import { GitHub, OpenInNew } from '@mui/icons-material'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="section-wrap">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Projects</p>
          <h2>Selected work and prototype ideas.</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="project-topline">
                <span className="project-badge">{project.badge}</span>
              </div>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tech-list">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-feature-group">
                <h4>Implemented</h4>
                <ul>
                  {project.implemented.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="project-feature-group muted">
                <h4>Planned</h4>
                <ul>
                  {project.planned.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="project-actions">
                <a href={project.github} target="_blank" rel="noreferrer" className="secondary-button small-button">
                  <GitHub fontSize="small" />
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="primary-button small-button">
                  <OpenInNew fontSize="small" />
                  Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
