import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useVideoIntro() {
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();

  // Re-trigger on every route change
  useEffect(() => {
    setShowIntro(true);
  }, [location.pathname]);

  const handleComplete = () => setShowIntro(false);

  return { showIntro, handleComplete };
}