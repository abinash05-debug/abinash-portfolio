import { useState } from 'react'
import { motion } from 'framer-motion'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'

const contactDetails = [
  { label: 'Email', value: 'abinashmmohanty@gmail.com', href: 'mailto:abinashmmohanty@gmail.com', icon: Email },
  { label: 'GitHub', value: 'abinash05-debug', href: 'https://github.com/abinash05-debug', icon: GitHub },
  { label: 'LinkedIn', value: 'Abinash Mohanty', href: 'https://www.linkedin.com/in/abinash-mohanty-845759344', icon: LinkedIn },
]

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const { name, email, message } = form
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('Please complete all fields before sending the message.')
      return
    }

    setStatus('Form validated successfully. Connect a backend or email service to send messages.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-wrap">
      <div className="container contact-grid">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="contact-details"
        >
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s connect.</h2>
          <div className="contact-list">
            {contactDetails.map(({ label, value, href, icon: Icon }) => (
              <a key={label} href={href} className="contact-item" target={label === 'Email' ? undefined : '_blank'} rel={label === 'Email' ? undefined : 'noreferrer'}>
                <span className="contact-icon"><Icon fontSize="small" /></span>
                <div>
                  <strong>{label}</strong>
                  <small>{value}</small>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" value={form.name} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} />
          </div>

          <button type="submit" className="primary-button submit-button">
            Send Message
          </button>

          {status && <p className="form-status">{status}</p>}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
