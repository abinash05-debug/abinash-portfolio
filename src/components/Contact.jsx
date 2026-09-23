import { useState } from 'react'
import { motion } from 'framer-motion'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'

const contactDetails = [
  {
    label: 'Email',
    value: 'abinashmmohanty@gmail.com',
    href: 'mailto:abinashmmohanty@gmail.com?subject=Portfolio%20Inquiry',
    icon: Email,
  },
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

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { name, email, message } = form
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('Please complete all fields before sending the message.')
      return
    }

    setStatus('Sending your message...')

    const formData = new URLSearchParams()
    formData.append('form-name', 'contact')
    formData.append('name', name.trim())
    formData.append('email', email.trim())
    formData.append('message', message.trim())

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      })

      if (!response.ok) {
        throw new Error('Netlify form submission failed')
      }

      setStatus('Message sent successfully. Thank you for reaching out!')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('Your message could not be sent. Please try again or email me directly.')
    }
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
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="contact-form"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="hidden-field" aria-hidden="true">
            <label htmlFor="bot-field">Don&apos;t fill this out</label>
            <input id="bot-field" name="bot-field" tabIndex="-1" autoComplete="off" />
          </div>

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

          {status && (
            <p className="form-status" role="status" aria-live="polite">
              {status}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
