import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden border border-border rounded-lg p-8 bg-background hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      <div className="relative z-10">
        <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
          <Icon className="text-accent" size={32} />
        </div>

        <h3 className="mb-3 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>

        <p className="text-secondary leading-relaxed">
          {description}
        </p>
      </div>

      <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-accent/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
    </div>
  );
}
