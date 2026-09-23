import { useEffect, useState } from 'react'
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { Close, GitHub, LinkedIn, Menu } from '@mui/icons-material'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [profileImageAvailable, setProfileImageAvailable] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          setActiveSection(visible.target.id)
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.2, 0.4, 0.6] },
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`topbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container nav-shell" aria-label="Main navigation">
        <a href="#home" className="brand-mark" aria-label="Abinash home section">
          <span className="nav-profile-image">
            {profileImageAvailable ? (
              <img
                src="/profile.jpg"
                alt=""
                onError={() => setProfileImageAvailable(false)}
              />
            ) : (
              <span>AM</span>
            )}
          </span>
          <span>ABINASH</span>
        </a>

        <div className="nav-links desktop-nav" aria-label="Desktop navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={activeSection === item.href.replace('#', '') ? 'active' : ''}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="icon-link"
            aria-label="GitHub profile"
          >
            <GitHub fontSize="small" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="icon-link"
            aria-label="LinkedIn profile"
          >
            <LinkedIn fontSize="small" />
          </a>
          <a href="/resume.pdf" className="primary-button nav-button" download>
            Resume
          </a>

          <IconButton
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            edge="end"
          >
            {menuOpen ? <Close /> : <Menu />}
          </IconButton>
        </div>
      </nav>

      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        PaperProps={{ className: 'mobile-drawer' }}
      >
        <div className="drawer-header">
          <span>Menu</span>
          <IconButton aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <Close />
          </IconButton>
        </div>
        <List className="drawer-list">
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component="a"
                href={item.href}
                onClick={handleNavClick}
                selected={activeSection === item.href.replace('#', '')}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </header>
  )
}

export default Navbar
