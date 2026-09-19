import { motion } from 'framer-motion'

function Certifications() {
  return (
    <section className="section-wrap">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Certifications &amp; achievements</p>
          <h2>Continuing to learn and grow.</h2>
        </motion.div>

        <motion.div
          className="placeholder-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          Certifications and achievements will be added here.
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
