import { Link } from 'react-router-dom';
import { Mail, Phone, Link as LinkIcon, Briefcase, Calendar, Palette, Heart, Camera } from 'lucide-react';
import { content } from '../../data/content';
import { ServiceCard } from '../components/ServiceCard';

const serviceIcons = {
  corporate: Briefcase,
  events: Calendar,
  brand: Palette,
  weddings: Heart,
  'studio-portraits': Camera,
};

export function Home() {
  return (
    <div className="flex-1" style={{ background: '#0a0907', fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}>

      {/* Google Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@300;400;500&display=swap');

        :root {
          --gold: #c9a84c;
          --gold-light: #e8d5a3;
          --ink: #0a0907;
          --ink-mid: #1a1814;
          --parchment: #f5f0e8;
          --warm-white: #faf8f4;
          --text-muted: #8a8070;
        }

        .hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 300;
          font-size: clamp(4rem, 12vw, 10rem);
          line-height: 0.9;
          letter-spacing: -0.02em;
          color: var(--warm-white);
          margin: 0;
        }

        .hero-title em {
          font-style: italic;
          color: var(--gold-light);
        }

        .label-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .gold-rule {
          width: 60px;
          height: 1px;
          background: var(--gold);
          display: block;
        }

        .section-heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 300;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          line-height: 1.05;
          letter-spacing: -0.01em;
        }

        .body-text {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 0.9rem;
          line-height: 1.8;
          letter-spacing: 0.02em;
        }

        .btn-primary {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          background: var(--gold);
          color: var(--ink);
          padding: 1rem 2.5rem;
          border: none;
          cursor: pointer;
          transition: all 0.4s ease;
          text-decoration: none;
          display: inline-block;
        }

        .btn-primary:hover {
          background: var(--gold-light);
          letter-spacing: 0.3em;
        }

        .btn-ghost {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          background: transparent;
          color: var(--gold);
          padding: 1rem 2.5rem;
          border: 1px solid var(--gold);
          cursor: pointer;
          transition: all 0.4s ease;
          text-decoration: none;
          display: inline-block;
        }

        .btn-ghost:hover {
          background: var(--gold);
          color: var(--ink);
        }

        .service-card-luxury {
          border: 1px solid rgba(201,168,76,0.15);
          padding: 2.5rem;
          transition: all 0.4s ease;
          background: rgba(255,255,255,0.02);
        }

        .service-card-luxury:hover {
          border-color: rgba(201,168,76,0.5);
          background: rgba(201,168,76,0.04);
          transform: translateY(-4px);
        }

        .contact-card-luxury {
          border: 1px solid rgba(201,168,76,0.15);
          padding: 2.5rem;
          text-align: center;
          transition: all 0.4s ease;
          background: rgba(255,255,255,0.02);
        }

        .contact-card-luxury:hover {
          border-color: var(--gold);
          background: rgba(201,168,76,0.05);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          animation: fadeInUp 2s ease 1s both;
        }

        .scroll-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, rgba(201,168,76,0), var(--gold));
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .reveal {
          animation: revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .reveal-delay-1 { animation-delay: 0.15s; }
        .reveal-delay-2 { animation-delay: 0.3s; }
        .reveal-delay-3 { animation-delay: 0.5s; }
        .reveal-delay-4 { animation-delay: 0.7s; }

        .divider {
          border: none;
          border-top: 1px solid rgba(201,168,76,0.2);
          margin: 0;
        }
      `}</style>

      {/* ── Hero ── */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '8rem 4vw 6rem',
        overflow: 'hidden',
      }}>
        {/* Ambient texture */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', top: 0, right: 0, width: '40%', height: '100%',
          borderLeft: '1px solid rgba(201,168,76,0.08)', pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <div className="reveal" style={{ marginBottom: '2rem' }}>
            <span className="label-text">{content.hero.tagline || 'Visual Storytelling'}</span>
          </div>

          <h1 className="hero-title reveal reveal-delay-1">
            {content.hero.title
              ? content.hero.title.split(' ').map((word: string, i: number) =>
                  i % 3 === 2
                    ? <span key={i}><em>{word}</em>{' '}</span>
                    : <span key={i}>{word}{' '}</span>
                )
              : <><em>Light,</em> Story,<br />Craft.</>
            }
          </h1>

          <div className="reveal reveal-delay-2" style={{
            display: 'flex', alignItems: 'center', gap: '1.5rem', margin: '3rem 0',
          }}>
            <span className="gold-rule" />
            <span className="body-text" style={{ color: 'var(--text-muted)', maxWidth: '360px' }}>
              Photography that speaks before words do.
            </span>
          </div>

          <div className="reveal reveal-delay-3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to={content.hero.ctaLink || '/portfolio'} className="btn-primary">
              {content.hero.ctaText || 'View Portfolio'}
            </Link>
            <a href="#contact" className="btn-ghost">Get in Touch</a>
          </div>

          {/* Bottom right — editorial counter detail */}
          <div style={{
            position: 'absolute', bottom: '5rem', right: '4vw',
            textAlign: 'right', pointerEvents: 'none',
          }} className="reveal reveal-delay-4">
            <span className="label-text" style={{ display: 'block', marginBottom: '0.5rem' }}>Est.</span>
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '5rem', fontWeight: 300,
              color: 'rgba(201,168,76,0.12)',
              lineHeight: 1,
            }}>2026</span>
          </div>
        </div>

        <div className="scroll-indicator">
          <span className="label-text" style={{ color: 'rgba(201,168,76,0.5)' }}>scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      <hr className="divider" />

      {/* ── Services ── */}
      <section style={{ padding: '8rem 4vw', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <span className="label-text" style={{ display: 'block', marginBottom: '1rem' }}>Specialisms</span>
            <h2 className="section-heading" style={{ color: 'var(--warm-white)', margin: 0 }}>
              What We<br /><em style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>Create</em>
            </h2>
          </div>
          <p className="body-text" style={{ color: 'var(--text-muted)', maxWidth: '340px' }}>
            {content.servicesIntro}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: 'rgba(201,168,76,0.1)' }}>
          {content.services.map((service: { id: string; title: string; description: string }, idx: number) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons];
            return (
              <div key={service.id} className="service-card-luxury" style={{ background: 'var(--ink)' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '0.75rem', fontWeight: 300,
                    color: 'var(--gold)', letterSpacing: '0.2em',
                  }}>0{idx + 1}</span>
                </div>
                {Icon && <Icon size={20} style={{ color: 'var(--gold)', marginBottom: '1rem', opacity: 0.8 }} />}
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.5rem', fontWeight: 400,
                  color: 'var(--warm-white)', marginBottom: '0.75rem',
                }}>{service.title}</h3>
                <p className="body-text" style={{ color: 'var(--text-muted)', margin: 0 }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <hr className="divider" />

      {/* ── About ── */}
      <section style={{ padding: '8rem 4vw' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'center' }}>

          {/* Image */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', top: '-1.5rem', left: '-1.5rem',
              right: '1.5rem', bottom: '1.5rem',
              border: '1px solid rgba(201,168,76,0.2)',
              pointerEvents: 'none', zIndex: 0,
            }} />
            <div style={{ position: 'relative', zIndex: 1, aspectRatio: '4/5', overflow: 'hidden' }}>
              <img
                src={content.about.imageUrl}
                alt={content.about.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%) contrast(1.05)' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,9,7,0.4) 0%, transparent 50%)',
              }} />
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="label-text" style={{ display: 'block', marginBottom: '1.5rem' }}>
              {content.about.role}
            </span>
            <h2 className="section-heading" style={{ color: 'var(--warm-white)', margin: '0 0 0.25rem' }}>
              {content.about.title}
            </h2>
            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.75rem', fontStyle: 'italic',
              fontWeight: 300, color: 'var(--gold-light)',
              margin: '0 0 2rem',
            }}>{content.about.name}</h3>
            <span className="gold-rule" style={{ marginBottom: '2rem', display: 'block' }} />
            <p className="body-text" style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              {content.about.bio}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/portfolio" className="btn-primary">View Portfolio</Link>
              <a href="#contact" className="btn-ghost">Let's Connect</a>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Contact ── */}
      <section id="contact" style={{ padding: '8rem 4vw' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="label-text" style={{ display: 'block', marginBottom: '1rem' }}>Contact</span>
            <h2 className="section-heading" style={{ color: 'var(--warm-white)', margin: '0 0 1rem' }}>
              {content.contact.title}
            </h2>
            <p className="body-text" style={{ color: 'var(--text-muted)' }}>{content.contact.subtitle}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: 'rgba(201,168,76,0.1)' }}>
            {[
              { icon: Mail, label: 'Email', value: content.contact.email, href: `mailto:${content.contact.email}`, external: false },
              { icon: Phone, label: 'Phone', value: content.contact.phone, href: `tel:${content.contact.phone}`, external: false }, 
            ].map((item, idx) => (
              <div key={idx} className="contact-card-luxury" style={{ background: 'var(--ink)' }}>
                <div style={{
                  width: '48px', height: '48px',
                  border: '1px solid rgba(201,168,76,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                }}>
                  <item.icon size={18} style={{ color: 'var(--gold)' }} />
                </div>
                <span className="label-text" style={{ display: 'block', marginBottom: '0.75rem' }}>{item.label}</span>
                <a
                  href={item.href}
                  target={item.external ? '_blank' : '_self'}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.8rem', fontWeight: 300,
                    color: 'var(--warm-white)',
                    textDecoration: 'none', letterSpacing: '0.05em',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--warm-white)')}
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer line */}
      <div style={{
        padding: '2rem 4vw',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderTop: '1px solid rgba(201,168,76,0.1)',
      }}>
        <span className="label-text" style={{ color: 'rgba(201,168,76,0.3)' }}>
          {content.about.name}
        </span>
        <span className="label-text" style={{ color: 'rgba(201,168,76,0.3)' }}>
          © {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
}