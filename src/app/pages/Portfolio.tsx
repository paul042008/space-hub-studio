import { useState } from 'react';
import { X, Image as ImageIcon, ZoomIn } from 'lucide-react';
import { portfolioItems, categories, PortfolioCategory } from '../../data/portfolioData';
import { ImageWithFallback } from '../components/ImageWithFallback';

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<{ title: string; category: string; imageUrl?: string } | null>(null);

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="flex-1 bg-background">
      {/* Header */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-beige-light to-background overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-primary mb-6">Portfolio</h1>
          <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto">
            A collection of our finest work, telling stories through visual excellence
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-background/90 backdrop-blur-sm sticky top-16 z-40 border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === 'All'
                  ? 'bg-accent text-white shadow-lg scale-105'
                  : 'bg-background border border-border text-primary hover:border-accent hover:scale-105'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent text-white shadow-lg scale-105'
                    : 'bg-background border border-border text-primary hover:border-accent hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-beige-light to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxImage(item)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 bg-background"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative aspect-[4/3] bg-muted flex items-center justify-center overflow-hidden">
                  {item.imageUrl ? (
                    <ImageWithFallback
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <ImageIcon className="text-secondary/30" size={64} />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/90 p-4 rounded-full">
                      <ZoomIn className="text-primary" size={32} />
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-background group-hover:bg-beige-light transition-colors duration-300">
                  <h3 className="text-xl font-serif text-primary mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-secondary text-sm">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <ImageIcon className="mx-auto mb-4 text-secondary/30" size={80} />
              <p className="text-2xl text-secondary">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white hover:text-accent transition-all hover:scale-110 bg-white/10 p-3 rounded-full backdrop-blur-sm"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          <div className="max-w-6xl w-full animate-in zoom-in-95 duration-500" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center rounded-2xl overflow-hidden mb-6 shadow-2xl">
              {lightboxImage.imageUrl ? (
                <ImageWithFallback
                  src={lightboxImage.imageUrl}
                  alt={lightboxImage.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                <ImageIcon className="text-secondary/30" size={128} />
              )}
            </div>

            <div className="text-center text-white bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h2 className="text-3xl font-serif mb-3 text-white">{lightboxImage.title}</h2>
              <p className="text-xl text-white/80">{lightboxImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}