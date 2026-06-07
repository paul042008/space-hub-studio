import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { VideoIntro } from './VideoIntro';
import { useVideoIntro } from './useVideoIntro';

export function RootLayout() {
  const { showIntro, handleComplete } = useVideoIntro();

  return (
    <div className="min-h-screen flex flex-col">
      {showIntro && (
        <VideoIntro
          src="/videos/intro.mp4"
          onComplete={handleComplete}
        />
      )}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}