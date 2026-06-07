import { content } from '../../data/content';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: '#0a0907',
      borderTop: '1px solid rgba(201,168,76,0.12)',
      marginTop: 'auto',
    }}>
      <style>{`
        .footer-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 3rem 4vw;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 2rem;
        }
        @media (max-width: 640px) {
          .footer-inner {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 1.5rem;
          }
          .footer-rule { display: none !important; }
          .footer-right { justify-content: center !important; }
        }
        .footer-logo {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.1rem;
          font-weight: 300;
          letter-spacing: 0.08em;
          color: #faf8f4;
        }
        .footer-copy {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.58rem;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #faf8f4;
          text-align: center;
          white-space: nowrap;
        }
        .footer-right {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 2rem;
        }
        .footer-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.58rem;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #faf8f4;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-link:hover { color: #c9a84c; }
        .footer-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(201,168,76,0.25);
          display: inline-block;
        }
      `}</style>

      <div className="footer-inner">
        {/* Left — brand name */}
        <span className="footer-logo">{content.footer.copyright}</span>

        {/* Center — copyright */}
        <span className="footer-copy">
          &copy; {currentYear} &nbsp;·&nbsp; All rights reserved
        </span>

        {/* Right — quick links */}
        <div className="footer-right">
          <a href="/" className="footer-link">Home</a>
          <span className="footer-dot" />
          <a href="/portfolio" className="footer-link">Portfolio</a>
          <span className="footer-dot" />
          <a href="#contact" className="footer-link">Contact</a>
        </div>
      </div>

      {/* Bottom gold line accent */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)',
      }} />
    </footer>
  );
}