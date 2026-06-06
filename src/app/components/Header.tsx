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
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-medium hover:text-accent transition-colors">
            {content.footer.copyright}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="relative hover:text-accent transition-colors group"
            >
              {content.nav.home}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </Link>
            <Link
              to="/portfolio"
              className="relative hover:text-accent transition-colors group"
            >
              {content.nav.portfolio}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </Link>
            {location.pathname === '/' ? (
              <a
                href="#contact"
                onClick={scrollToContact}
                className="relative hover:text-accent transition-colors group"
              >
                {content.nav.contact}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </a>
            ) : (
              <Link to="/#contact" className="relative hover:text-accent transition-colors group">
                {content.nav.contact}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {content.nav.home}
              </Link>
              <Link
                to="/portfolio"
                className="hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {content.nav.portfolio}
              </Link>
              {location.pathname === '/' ? (
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="hover:text-accent transition-colors"
                >
                  {content.nav.contact}
                </a>
              ) : (
                <Link
                  to="/#contact"
                  className="hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {content.nav.contact}
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
