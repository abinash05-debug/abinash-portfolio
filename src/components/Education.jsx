import { motion } from 'framer-motion'

function Education() {
  return (
    <section id="education" className="section-wrap">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Education</p>
          <h2>Academic foundation.</h2>
        </motion.div>

        <div className="education-stack">
          <motion.div
            className="timeline-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <p className="timeline-label">Schooling</p>
              <h3>Stewart School, BBSR</h3>
              <p>Secondary and higher secondary education</p>
            </div>
          </motion.div>

          <motion.div
            className="timeline-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <p className="timeline-label">Board qualifications</p>
              <div className="qualification-row">
                <h3 className="qualification-primary">10th: ICSE Board</h3>
              </div>
              <h3 className="qualification-secondary">12th: ISC Board</h3>
            </div>
          </motion.div>

          <motion.div
            className="timeline-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <p className="timeline-label">Current program</p>
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <p>ITER, SOA University</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
