import { useState, useEffect } from 'react';
import { ImageWithFallback } from './ImageWithFallback';

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1647427854253-b92bb40c9330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjcmVhdGl2ZSUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvJTIwd29ya3NwYWNlfGVufDF8fHx8MTc4MDc2OTgxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Photo studio with pink backdrop and yellow chair"
  },
  {
    url: "https://images.unsplash.com/photo-1545242640-7c9e9cc07d23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjcmVhdGl2ZSUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvJTIwd29ya3NwYWNlfGVufDF8fHx8MTc4MDc2OTgxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Video camera and photography equipment"
  },
  {
    url: "https://images.unsplash.com/photo-1744686909358-915e14866592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjcmVhdGl2ZSUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvJTIwd29ya3NwYWNlfGVufDF8fHx8MTc4MDc2OTgxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Photographer editing photos in studio"
  },
  {
    url: "https://images.unsplash.com/photo-1522204538344-922f76ecc041?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjcmVhdGl2ZSUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvJTIwd29ya3NwYWNlfGVufDF8fHx8MTc4MDc2OTgxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Cameras beside computer and smartphone"
  }
];

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-2000"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            transitionDuration: '2000ms'
          }}
        >
          <ImageWithFallback
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>
      ))}
    </div>
  );
}
