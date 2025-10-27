import * as React from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MusicToggleProps {}

const MusicToggle: React.FC<MusicToggleProps> = () => {
  const [isMuted, setIsMuted] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    const audio = new Audio("/audio/Puppy%20Life.mp3");
    audio.loop = true;
    
    // Set up audio event listeners
    audio.addEventListener('canplaythrough', () => {
      setIsLoaded(true);
      if (!isMuted) {
        audio.play().catch(() => {
          // If auto-play fails (common on mobile), set muted to true
          setIsMuted(true);
        });
      }
    });

    audio.addEventListener('error', (e) => {
      console.error('Error loading audio:', e);
      setIsMuted(true);
    });

    audioRef.current = audio;

    // Cleanup function
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []); // Empty dependency array since we only want to create the audio once

  const toggleMusic = React.useCallback(() => {
    if (!audioRef.current || !isLoaded) return;

    setIsMuted((prev) => {
      const newMuted = !prev;
      if (newMuted) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play().catch(() => {
          setIsMuted(true);
        });
      }
      return newMuted;
    });
  }, [isLoaded]);

  return (
    <Button
      onClick={toggleMusic}
      variant="outline"
      size="icon"
      disabled={!isLoaded}
      className="fixed top-4 right-4 z-50 rounded-full bg-card/80 backdrop-blur-sm border-primary/30 hover:bg-primary hover:border-accent shadow-glow transition-all duration-300 disabled:opacity-50"
      aria-label={isMuted ? "Unmute background music" : "Mute background music"}
      title={isMuted ? "Unmute background music" : "Mute background music"}
    >
      {isMuted ? (
        <VolumeX className="h-5 w-5 text-accent" />
      ) : (
        <Volume2 className="h-5 w-5 text-accent animate-pulse" />
      )}
    </Button>
  );
};

export default MusicToggle;
