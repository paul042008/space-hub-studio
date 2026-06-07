import { useState } from 'react';
import { X, Image as ImageIcon, ZoomIn } from 'lucide-react';
import { portfolioItems, categories } from '../../data/portfolioData';
import { ImageWithFallback } from '../components/ImageWithFallback';

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<{ title: string; category: string; imageUrl?: string } | null>(null);

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div style={{ background: '#0a0907', minHeight: '100vh' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@300;400;500&display=swap');

        :root {
          --gold: #c9a84c;
          --gold-light: #e8d5a3;
          --ink: #0a0907;
          --warm-white: #faf8f4;
          --text-muted: #8a8070;
        }

        .label-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .filter-btn {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          background: transparent;
          border: 1px solid rgba(201,168,76,0.2);
          color: var(--text-muted);
          padding: 0.6rem 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .filter-btn:hover { border-color: var(--gold); color: var(--gold); }
        .filter-btn.active { background: var(--gold); border-color: var(--gold); color: var(--ink); }

        /* ── Card wrapper ── */
        .portfolio-card {
          cursor: pointer;
          border: 1px solid rgba(201,168,76,0.12);
          background: #111009;
          transition: border-color 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease;
          overflow: hidden;
        }
        .portfolio-card:hover {
          border-color: rgba(201,168,76,0.5);
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.15);
        }

        /* ── Image area ── */
        .portfolio-img-wrap {
          position: relative;
          overflow: hidden;
        }
        .portfolio-item-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s cubic-bezier(0.16,1,0.3,1), filter 0.6s ease;
          filter: grayscale(15%) contrast(1.05);
        }
        .portfolio-card:hover .portfolio-item-img {
          transform: scale(1.06);
          filter: grayscale(0%) contrast(1.08);
        }

        .portfolio-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,9,7,0.85) 0%, rgba(10,9,7,0.1) 50%, transparent 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
        }
        .portfolio-card:hover .portfolio-overlay { opacity: 1; }

        .portfolio-zoom {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 38px;
          height: 38px;
          border: 1px solid rgba(201,168,76,0.6);
          background: rgba(10,9,7,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateY(-8px);
          transition: all 0.4s ease;
        }
        .portfolio-card:hover .portfolio-zoom { opacity: 1; transform: translateY(0); }

        .portfolio-title-overlay {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.2rem;
          font-weight: 400;
          color: var(--warm-white);
          margin: 0 0 0.2rem;
          transform: translateY(8px);
          transition: transform 0.4s ease;
        }
        .portfolio-cat-overlay {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.55rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          transform: translateY(8px);
          transition: transform 0.4s ease 0.05s;
        }
        .portfolio-card:hover .portfolio-title-overlay,
        .portfolio-card:hover .portfolio-cat-overlay { transform: translateY(0); }

        /* ── Card footer ── */
        .portfolio-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          border-top: 1px solid rgba(201,168,76,0.1);
          transition: border-color 0.4s ease;
        }
        .portfolio-card:hover .portfolio-card-footer {
          border-color: rgba(201,168,76,0.25);
        }
        .portfolio-card-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.05rem;
          font-weight: 400;
          color: var(--warm-white);
          margin: 0 0 0.2rem;
          transition: color 0.3s;
        }
        .portfolio-card:hover .portfolio-card-title { color: var(--gold-light); }

        .portfolio-card-cat {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.55rem;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .portfolio-card-arrow {
          width: 30px;
          height: 30px;
          border: 1px solid rgba(201,168,76,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(201,168,76,0.4);
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .portfolio-card:hover .portfolio-card-arrow {
          border-color: var(--gold);
          color: var(--gold);
          background: rgba(201,168,76,0.08);
        }

        /* ── Lightbox ── */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(10,9,7,0.97);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: lbFadeIn 0.3s ease both;
        }
        @keyframes lbFadeIn { from { opacity: 0; } to { opacity: 1; } }

        .lightbox-inner {
          max-width: 1100px;
          width: 100%;
          animation: lbZoomIn 0.4s cubic-bezier(0.16,1,0.3,1) both;
        }
        @keyframes lbZoomIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .lightbox-close {
          position: fixed;
          top: 1.5rem;
          right: 1.5rem;
          width: 44px;
          height: 44px;
          border: 1px solid rgba(201,168,76,0.3);
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
          transition: all 0.3s ease;
          z-index: 10000;
        }
        .lightbox-close:hover { background: var(--gold); color: var(--ink); }

        @keyframes gridReveal {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .grid-item-animate {
          animation: gridReveal 0.6s cubic-bezier(0.16,1,0.3,1) both;
        }
      `}</style>

      {/* ── Page Header ── */}
      <section style={{ padding: '8rem 4vw 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: '50%', height: '100%',
          borderLeft: '1px solid rgba(201,168,76,0.06)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <span className="label-text" style={{ display: 'block', marginBottom: '1.25rem' }}>Work</span>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 300,
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            color: 'var(--warm-white)',
            margin: '0 0 2rem',
          }}>
            Port<em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>folio</em>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ width: '60px', height: '1px', background: 'var(--gold)', display: 'block' }} />
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300, fontSize: '0.85rem',
              letterSpacing: '0.05em', lineHeight: 1.8,
              color: 'var(--text-muted)', margin: 0,
            }}>
              Visual stories told through light and composition
            </p>
          </div>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 40,
        background: 'rgba(10,9,7,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
        padding: '1rem 4vw',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button onClick={() => setSelectedCategory('All')} className={`filter-btn${selectedCategory === 'All' ? ' active' : ''}`}>All</button>
          {categories.map((category) => (
            <button key={category} onClick={() => setSelectedCategory(category)} className={`filter-btn${selectedCategory === category ? ' active' : ''}`}>
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* ── Gallery Grid ── */}
      <section style={{ padding: '3rem 4vw 8rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {filteredItems.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}>
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="portfolio-card grid-item-animate"
                  style={{ animationDelay: `${(index % 9) * 60}ms` }}
                  onClick={() => setLightboxImage(item)}
                >
                  {/* Image box */}
                  <div className="portfolio-img-wrap" style={{ aspectRatio: index % 5 === 0 ? '3/4' : '4/3' }}>
                    {item.imageUrl ? (
                      <ImageWithFallback src={item.imageUrl} alt={item.title} className="portfolio-item-img" />
                    ) : (
                      <div style={{
                        width: '100%', height: '100%', minHeight: '240px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: '#111009',
                      }}>
                        <ImageIcon size={40} style={{ color: 'rgba(201,168,76,0.15)' }} />
                      </div>
                    )}
                    <div className="portfolio-zoom">
                      <ZoomIn size={14} style={{ color: 'var(--gold)' }} />
                    </div>
                    <div className="portfolio-overlay">
                      <p className="portfolio-cat-overlay">{item.category}</p>
                      <h3 className="portfolio-title-overlay">{item.title}</h3>
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="portfolio-card-footer">
                    <div>
                      <h3 className="portfolio-card-title">{item.title}</h3>
                      <span className="portfolio-card-cat">{item.category}</span>
                    </div>
                    <div className="portfolio-card-arrow">
                      <ZoomIn size={13} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '8rem 0' }}>
              <ImageIcon size={48} style={{ color: 'rgba(201,168,76,0.2)', marginBottom: '1.5rem' }} />
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 300, color: 'var(--text-muted)' }}>
                Nothing yet in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxImage && (
        <div className="lightbox-backdrop" onClick={() => setLightboxImage(null)}>
          <button className="lightbox-close" onClick={() => setLightboxImage(null)} aria-label="Close">
            <X size={18} />
          </button>

          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <div style={{ aspectRatio: '4/3', background: '#111009', overflow: 'hidden' }}>
              {lightboxImage.imageUrl ? (
                <ImageWithFallback
                  src={lightboxImage.imageUrl}
                  alt={lightboxImage.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ImageIcon size={80} style={{ color: 'rgba(201,168,76,0.15)' }} />
                </div>
              )}
            </div>

            {/* Caption bar */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '1.25rem 1.5rem',
              borderTop: '1px solid rgba(201,168,76,0.15)',
              background: 'rgba(201,168,76,0.03)',
            }}>
              <div>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 400, color: 'var(--warm-white)', margin: '0 0 0.2rem' }}>
                  {lightboxImage.title}
                </h2>
                <span className="label-text">{lightboxImage.category}</span>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                style={{
                  fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', fontWeight: 500,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  background: 'transparent', border: '1px solid rgba(201,168,76,0.3)',
                  color: 'var(--text-muted)', padding: '0.6rem 1.25rem',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
              >
                Close <X size={12} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}