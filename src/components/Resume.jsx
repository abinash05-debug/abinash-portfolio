import { motion } from 'framer-motion'
import { Download } from '@mui/icons-material'

function Resume() {
  return (
    <section className="section-wrap">
      <div className="container">
        <motion.div
          className="resume-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Resume</p>
          <h2>Interested in working together?</h2>
          <p>
            I&apos;m open to learning opportunities, collaborative projects, and software
            development roles where I can contribute and keep growing.
          </p>
          <a href="/resume.pdf" className="primary-button" download>
            <Download fontSize="small" />
            Download Resume
          </a>
          <p className="resume-note">
            Click above to download my resume. 
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
