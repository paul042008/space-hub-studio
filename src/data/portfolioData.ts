export type PortfolioCategory = "Corporate" | "Events" | "Brand" | "Weddings" | "Studio Portraits";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  imageUrl?: string;
}

export const portfolioItems: PortfolioItem[] = [
  // Corporate
  {
    id: "corp-1",
    title: "Tech Conference 2025",
    category: "Corporate",
    imageUrl: "https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc4MDc2OTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "corp-2",
    title: "Executive Networking Event",
    category: "Corporate",
    imageUrl: "https://images.unsplash.com/photo-1768508951262-42931f7ad924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjb3Jwb3JhdGUlMjBldmVudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc4MDc2OTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "corp-3",
    title: "Corporate Gala Dinner",
    category: "Corporate",
    imageUrl: "https://images.unsplash.com/photo-1768508950719-4d76978fdf44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb3Jwb3JhdGUlMjBldmVudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc4MDc2OTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "corp-4",
    title: "Panel Discussion",
    category: "Corporate",
    imageUrl: "https://images.unsplash.com/photo-1772690445981-78b22eacda4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjb3Jwb3JhdGUlMjBldmVudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc4MDc2OTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },

  // Events
  {
    id: "event-1",
    title: "Elegant Event Space",
    category: "Events",
    imageUrl: "https://images.unsplash.com/photo-1768851244529-39180171a168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjb3Jwb3JhdGUlMjBldmVudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc4MDc2OTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "event-2",
    title: "Community Festival",
    category: "Events",
    imageUrl: "https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc4MDc2OTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "event-3",
    title: "Networking Summit",
    category: "Events",
    imageUrl: "https://images.unsplash.com/photo-1768508950719-4d76978fdf44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb3Jwb3JhdGUlMjBldmVudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc4MDc2OTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "event-4",
    title: "Charity Fundraiser",
    category: "Events",
    imageUrl: "https://images.unsplash.com/photo-1772690445981-78b22eacda4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjb3Jwb3JhdGUlMjBldmVudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc4MDc2OTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },

  // Brand
  {
    id: "brand-1",
    title: "Fashion Brand Photoshoot",
    category: "Brand",
    imageUrl: "https://images.unsplash.com/photo-1759308553474-ce2c768a6b7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHBob3RvZ3JhcGh5JTIwY3JlYXRpdmV8ZW58MXx8fHwxNzgwNzY5ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "brand-2",
    title: "Luxury Product Photography",
    category: "Brand",
    imageUrl: "https://images.unsplash.com/photo-1711443982852-b3df5c563448?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxicmFuZCUyMHBob3RvZ3JhcGh5JTIwY3JlYXRpdmV8ZW58MXx8fHwxNzgwNzY5ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "brand-3",
    title: "Minimalist Brand Identity",
    category: "Brand",
    imageUrl: "https://images.unsplash.com/photo-1711355249709-1733df63e028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxicmFuZCUyMHBob3RvZ3JhcGh5JTIwY3JlYXRpdmV8ZW58MXx8fHwxNzgwNzY5ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "brand-4",
    title: "Artisan Craftsmanship",
    category: "Brand",
    imageUrl: "https://images.unsplash.com/photo-1711356240240-2516c04b3585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxicmFuZCUyMHBob3RvZ3JhcGh5JTIwY3JlYXRpdmV8ZW58MXx8fHwxNzgwNzY5ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },

  // Weddings
  {
    id: "wedding-1",
    title: "Garden Ceremony",
    category: "Weddings",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBlbGVnYW50fGVufDF8fHx8MTc4MDc2OTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "wedding-2",
    title: "Elegant Bridal Portrait",
    category: "Weddings",
    imageUrl: "https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBlbGVnYW50fGVufDF8fHx8MTc4MDc2OTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "wedding-3",
    title: "Beachside Celebration",
    category: "Weddings",
    imageUrl: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBlbGVnYW50fGVufDF8fHx8MTc4MDc2OTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "wedding-4",
    title: "Romantic Moment",
    category: "Weddings",
    imageUrl: "https://images.unsplash.com/photo-1607357910286-1ff94ac13c24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBlbGVnYW50fGVufDF8fHx8MTc4MDc2OTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },

  // Studio Portraits
  {
    id: "portrait-1",
    title: "Professional Headshot",
    category: "Studio Portraits",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMHBvcnRyYWl0c3xlbnwxfHx8fDE3ODA3Njk4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "portrait-2",
    title: "Elegant Portrait",
    category: "Studio Portraits",
    imageUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMHBvcnRyYWl0c3xlbnwxfHx8fDE3ODA3Njk4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "portrait-3",
    title: "Creative Professional",
    category: "Studio Portraits",
    imageUrl: "https://images.unsplash.com/photo-1621024994278-e409544f4085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMHBvcnRyYWl0c3xlbnwxfHx8fDE3ODA3Njk4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "portrait-4",
    title: "Artistic Expression",
    category: "Studio Portraits",
    imageUrl: "https://images.unsplash.com/photo-1606143412458-acc5f86de897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMHBvcnRyYWl0c3xlbnwxfHx8fDE3ODA3Njk4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export const categories: PortfolioCategory[] = [
  "Corporate",
  "Events",
  "Brand",
  "Weddings",
  "Studio Portraits"
];
