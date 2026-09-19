import { motion } from 'framer-motion'

const stats = [
  'BCA Student',
  'Full-Stack Development',
  'Multiple Projects',
  'Always Learning',
]

function About() {
  return (
    <section id="about" className="section-wrap">
      <div className="container section-inner">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">About me</p>
          <h2>Building practical software with modern technology.</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <p>
              I am a BCA student with a deep interest in software development, especially
              full-stack engineering and building applications that solve real-world problems.
            </p>
            <p>
              My focus includes Java and Spring Boot for backend systems, React for engaging
              user experiences, and database design for efficient, scalable data handling.
            </p>
            <p>
              I enjoy learning by building projects, improving my engineering decisions, and
              growing my understanding of modern web development from concept to deployment.
            </p>
          </motion.div>

          <motion.div
            className="stats-panel"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {stats.map((stat) => (
              <div key={stat} className="stat-item">
                <span>{stat}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
