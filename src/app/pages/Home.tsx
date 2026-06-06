import { Link } from 'react-router-dom';
import { Mail, Phone, Link as LinkIcon, Briefcase, Calendar, Palette, Heart, Camera } from 'lucide-react';
import { content } from '../../data/content';
import { HeroSlideshow } from '../components/HeroSlideshow';
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
    <div className="flex-1 bg-background">
      {/* Hero Section with Slideshow */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <HeroSlideshow />

        {/* Overlay to make text readable on any image */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 text-white animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {content.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            {content.hero.tagline}
          </p>
          <Link
            to={content.hero.ctaLink}
            className="inline-block bg-accent text-white px-10 py-4 rounded-lg hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400"
          >
            {content.hero.ctaText}
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Services / Categories Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">What We Do</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              {content.servicesIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={serviceIcons[service.id as keyof typeof serviceIcons]}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section – focused on Draiston as Creative Director */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-beige-light to-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={content.about.imageUrl}
                  alt={content.about.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">{content.about.title}</h2>
              <h3 className="text-2xl text-accent font-medium">{content.about.name}</h3>
              <p className="text-xl text-secondary">{content.about.role}</p>
              <p className="text-lg leading-relaxed text-primary/80">{content.about.bio}</p>
              <div className="flex gap-4 pt-6">
                <Link
                  to="/portfolio"
                  className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-md"
                >
                  View Portfolio
                </Link>
                <a
                  href="#contact"
                  className="border-2 border-accent text-accent px-8 py-3 rounded-lg hover:bg-accent hover:text-white transition-all duration-300"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">{content.contact.title}</h2>
            <p className="text-xl text-secondary">{content.contact.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                label: 'Email',
                value: content.contact.email,
                href: `mailto:${content.contact.email}`,
                isLink: true,
              },
              {
                icon: Phone,
                label: 'Phone',
                value: content.contact.phone,
                href: `tel:${content.contact.phone}`,
                isLink: true,
              },
              {
                icon: LinkIcon,
                label: 'Linktree',
                value: content.contact.linktree,
                href: content.contact.linktreeUrl,
                isLink: true,
                external: true,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group text-center p-8 border border-border rounded-lg hover:border-accent hover:shadow-xl transition-all duration-300 bg-beige-light/30"
              >
                <div className="inline-block p-4 bg-accent/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-accent" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-2">{item.label}</h4>
                {item.isLink ? (
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : '_self'}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="text-secondary hover:text-accent transition-colors break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-secondary">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}