import { GitHub, LinkedIn, Email } from '@mui/icons-material'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© 2026 Abinash Mohanty. All rights reserved.</p>
        <p>Full Stack Developer</p>
        <div className="footer-links">
          <a href="https://github.com/abinash05-debug'" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHub fontSize="small" />
          </a>
          <a href="https://www.linkedin.com/in/abinash-mohanty-845759344" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedIn fontSize="small" />
          </a>
          <a href="mailto:abinashmmohanty@gmail.com" aria-label="Email">
            <Email fontSize="small" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
