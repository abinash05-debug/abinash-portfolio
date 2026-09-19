import { motion } from 'framer-motion'

const journey = [
  'BCA',
  'Programming Fundamentals',
  'Web Development',
  'Java & Spring Boot',
  'React',
  'Full-Stack Projects',
  'Enterprise Application Development',
]

function LearningJourney() {
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
          <p className="eyebrow">Learning journey</p>
          <h2>Progressing from fundamentals to full-stack development.</h2>
        </motion.div>

        <div className="journey-flow" aria-label="Learning journey progression">
          {journey.map((step, index) => (
            <motion.div
              key={step}
              className="journey-step"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <span>{step}</span>
              {index < journey.length - 1 && <span className="journey-arrow">↓</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningJourney
