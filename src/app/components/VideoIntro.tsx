import { useState, useEffect, useRef } from 'react';

interface VideoIntroProps {
  src: string;
  onComplete?: () => void;
}

export function VideoIntro({ src, onComplete }: VideoIntroProps) {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const dismiss = () => {
    setFading(true);
    setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 900);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Play on mount
    video.play().catch(() => {
      // Autoplay blocked — dismiss immediately
      dismiss();
    });

    const handleEnded = () => dismiss();
    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, []);

  if (!visible) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');

        .vi-root {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: #0a0907;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .vi-root.fading {
          opacity: 0;
          pointer-events: none;
        }

        .vi-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
        }

        /* Vignette overlay */
        .vi-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 40%, rgba(10,9,7,0.7) 100%);
          pointer-events: none;
          z-index: 1;
        }

        /* Skip button */
        .vi-skip {
          position: absolute;
          bottom: 2.5rem;
          right: 2.5rem;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: transparent;
          border: 1px solid rgba(201,168,76,0.35);
          color: rgba(201,168,76,0.7);
          font-family: 'Montserrat', sans-serif;
          font-size: 0.58rem;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          padding: 0.6rem 1.25rem;
          cursor: pointer;
          transition: all 0.3s ease;
          animation: viFadeIn 0.6s ease 1.5s both;
        }
        .vi-skip:hover {
          background: rgba(201,168,76,0.1);
          border-color: #c9a84c;
          color: #c9a84c;
        }
        .vi-skip-line {
          width: 20px;
          height: 1px;
          background: currentColor;
          display: inline-block;
        }

        /* Progress bar */
        .vi-progress-track {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: rgba(201,168,76,0.1);
          z-index: 2;
        }
        .vi-progress-fill {
          height: 100%;
          background: linear-gradient(to right, rgba(201,168,76,0.4), #c9a84c);
          transition: width 0.25s linear;
        }

        /* Logo watermark */
        .vi-logo {
          position: absolute;
          top: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1rem;
          font-weight: 300;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(250,248,244,0.4);
          white-space: nowrap;
          animation: viFadeIn 0.8s ease 0.3s both;
        }

        @keyframes viFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(8px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>

      <div className={`vi-root${fading ? ' fading' : ''}`}>
        <video
          ref={videoRef}
          className="vi-video"
          src={src}
          muted
          playsInline
          preload="auto"
        />

        <div className="vi-vignette" />

        <span className="vi-logo">
          {/* Will inherit the site brand if you swap content.footer.copyright here */}
          Studio
        </span>

        <button className="vi-skip" onClick={dismiss}>
          Skip <span className="vi-skip-line" />
        </button>

        <ProgressBar videoRef={videoRef} />
      </div>
    </>
  );
}

function ProgressBar({ videoRef }: { videoRef: React.RefObject<HTMLVideoElement> }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const update = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', update);
    return () => video.removeEventListener('timeupdate', update);
  }, []);

  return (
    <div className="vi-progress-track">
      <div className="vi-progress-fill" style={{ width: `${progress}%` }} />
    </div>
  );
}