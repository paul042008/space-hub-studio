import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { content } from '../../data/content';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToContact = (e: React.MouseEvent) => {
    if (location.pathname !== '/') {
      return;
    }
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@300;400;500&display=swap');

        .header-root {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(10,9,7,0.92);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(201,168,76,0.12);
        }

        .header-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 64px;
        }

        .header-logo {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.3rem;
          font-weight: 400;
          color: #faf8f4;
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.3s;
        }
        .header-logo:hover { color: #c9a84c; }

        /* Desktop nav */
        .desktop-nav {
          display: none;
          align-items: center;
          gap: 2.5rem;
        }
        @media (min-width: 768px) {
          .desktop-nav { display: flex; }
          .mobile-toggle { display: none !important; }
        }

        .nav-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #8a8070;
          text-decoration: none;
          position: relative;
          transition: color 0.3s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: #c9a84c;
          transition: width 0.4s ease;
        }
        .nav-link:hover { color: #c9a84c; }
        .nav-link:hover::after { width: 100%; }

        /* Mobile toggle button */
        .mobile-toggle {
          background: transparent;
          border: 1px solid rgba(201,168,76,0.25);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #c9a84c;
          transition: all 0.3s;
          z-index: 9999;
          position: relative;
        }
        .mobile-toggle:hover {
          background: rgba(201,168,76,0.08);
          border-color: #c9a84c;
        }

        /* Full-screen overlay */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 9998;
          background: #0a0907;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mobile-overlay.open {
          opacity: 1;
          pointer-events: all;
        }

        /* Decorative side lines */
        .overlay-line-left,
        .overlay-line-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(201,168,76,0.15), transparent);
        }
        .overlay-line-left { left: 4vw; }
        .overlay-line-right { right: 4vw; }

        /* Gold ambient glow */
        .overlay-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .overlay-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.4);
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease 0.1s;
        }
        .mobile-overlay.open .overlay-label {
          opacity: 1;
          transform: translateY(0);
        }

        .overlay-nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .overlay-nav-item {
          overflow: hidden;
        }

        .overlay-nav-link {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(3rem, 10vw, 5.5rem);
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: rgba(250,248,244,0.9);
          text-decoration: none;
          display: block;
          text-align: center;
          transition: color 0.4s ease, letter-spacing 0.4s ease;
          opacity: 0;
          transform: translateY(40px);
          transition: color 0.4s ease, letter-spacing 0.4s ease,
                      opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mobile-overlay.open .overlay-nav-link {
          opacity: 1;
          transform: translateY(0);
        }
        .mobile-overlay.open .overlay-nav-item:nth-child(1) .overlay-nav-link { transition-delay: 0.15s; }
        .mobile-overlay.open .overlay-nav-item:nth-child(2) .overlay-nav-link { transition-delay: 0.25s; }
        .mobile-overlay.open .overlay-nav-item:nth-child(3) .overlay-nav-link { transition-delay: 0.35s; }

        .overlay-nav-link:hover {
          color: #faf8f4;
          letter-spacing: 0.02em;
        }
        .overlay-nav-link:hover em {
          color: #c9a84c;
        }
        .overlay-nav-link em {
          font-style: italic;
          color: rgba(201,168,76,0.8);
          transition: color 0.4s;
        }

        /* Bottom contact info */
        .overlay-footer {
          position: absolute;
          bottom: 3rem;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 3rem;
          padding: 0 4vw;
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.5s ease 0.5s;
        }
        .mobile-overlay.open .overlay-footer {
          opacity: 1;
          transform: translateY(0);
        }
        .overlay-footer a {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.6rem;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(138,128,112,0.6);
          text-decoration: none;
          transition: color 0.3s;
        }
        .overlay-footer a:hover { color: #c9a84c; }

        /* Horizontal rule in overlay */
        .overlay-rule {
          width: 40px;
          height: 1px;
          background: rgba(201,168,76,0.3);
          margin: 2rem auto;
          opacity: 0;
          transition: opacity 0.4s ease 0.45s;
        }
        .mobile-overlay.open .overlay-rule {
          opacity: 1;
        }
      `}</style>

      <header className="header-root">
        <nav className="header-inner">
          <Link to="/" className="header-logo" onClick={() => setMobileMenuOpen(false)}>
            {content.footer.copyright}
          </Link>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <Link to="/" className="nav-link">{content.nav.home}</Link>
            <Link to="/portfolio" className="nav-link">{content.nav.portfolio}</Link>
            {location.pathname === '/' ? (
              <a href="#contact" onClick={scrollToContact} className="nav-link">
                {content.nav.contact}
              </a>
            ) : (
              <Link to="/#contact" className="nav-link">{content.nav.contact}</Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </nav>
      </header>

      {/* Full-screen mobile overlay */}
      <div className={`mobile-overlay${mobileMenuOpen ? ' open' : ''}`}>
        <div className="overlay-line-left" />
        <div className="overlay-line-right" />
        <div className="overlay-glow" />

        <span className="overlay-label">Navigation</span>

        <ul className="overlay-nav">
          <li className="overlay-nav-item">
            <Link
              to="/"
              className="overlay-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <em>H</em>ome
            </Link>
          </li>
          <li className="overlay-nav-item">
            <Link
              to="/portfolio"
              className="overlay-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Port<em>folio</em>
            </Link>
          </li>
          <li className="overlay-nav-item">
            {location.pathname === '/' ? (
              <a
                href="#contact"
                className="overlay-nav-link"
                onClick={scrollToContact}
              >
                Con<em>tact</em>
              </a>
            ) : (
              <Link
                to="/#contact"
                className="overlay-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Con<em>tact</em>
              </Link>
            )}
          </li>
        </ul>

        <div className="overlay-rule" />

        <div className="overlay-footer">
          <a href={`mailto:${content.contact?.email}`}>{content.contact?.email}</a>
          <a href={`tel:${content.contact?.phone}`}>{content.contact?.phone}</a>
        </div>
      </div>
    </>
  );
}