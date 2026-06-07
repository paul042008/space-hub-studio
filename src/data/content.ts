export interface Content {
  hero: {
    title: string;
    tagline: string;
    ctaText: string;
    ctaLink: string;
  };
  servicesIntro: string;
  services: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  about: {
    title: string;
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    linktree: string;
    linktreeUrl: string;
  };
  footer: {
    copyright: string;
  };
  nav: {
    home: string;
    portfolio: string;
    contact: string;
  };
}

export const content: Content = {
  hero: {
    title: "Space Hub Studio",
    tagline: "Visual Storytelling for Brands & Moments",
    ctaText: "View Portfolio",
    ctaLink: "/portfolio"
  },

  servicesIntro: "Capturing the essence of your brand – from boardrooms to ballrooms.",

  services: [
    {
      id: "corporate",
      title: "Corporate",
      description: "Professional brand photography and visual content for businesses"
    },
    {
      id: "events",
      title: "Events",
      description: "Capturing memorable moments at conferences, launches, and gatherings"
    },
    {
      id: "brand",
      title: "Brand",
      description: "Complete visual identity and brand photography solutions"
    },
    {
      id: "weddings",
      title: "Weddings",
      description: "Elegant and timeless wedding photography"
    },
    {
      id: "studio-portraits",
      title: "Studio Portraits",
      description: "Professional headshots and portrait sessions"
    }
  ],

  about: {
    title: "Behind the Lens",
    name: "Iradukunda Elyse (Draiston)",
    role: "Creative Director & Graphic Designer",
    bio: "With over 6 years of experience in brand consulting, graphic design, social media management, and visual storytelling. I craft designs that tell stories, build connections, and achieve goals.",
    imageUrl: "https://images.unsplash.com/photo-1628657485319-5865d0f2791d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },

  logo: {
    url: "/images/logo.jpg",   // adjust path to match where you put the logo
    alt: "Space Hub Studio"
  },


  contact: {
    title: "Let’s Create Something Beautiful",
    subtitle: "Reach out for collaborations, commissions, or just a creative chat.",
    email: "Your Email",
    phone: "+250 793 837 472",
    linktree: "linktr.ee/DRALSTON",
    linktreeUrl: "https://linktr.ee/DRALSTON"
  },

  footer: {
    copyright: "Space Hub Studio"
  },

  nav: {
    home: "Home",
    portfolio: "Portfolio",
    contact: "Contact"
  }
};