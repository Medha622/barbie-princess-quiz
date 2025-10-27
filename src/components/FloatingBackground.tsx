import { Music, Sparkles } from "lucide-react";

const FloatingBackground = () => {
  const musicNotes = Array.from({ length: 15 }, (_, i) => i);
  const butterflies = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Music Notes */}
      {musicNotes.map((note) => (
        <div
          key={`note-${note}`}
          className="absolute text-hot-pink opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            fontSize: `${Math.random() * 20 + 20}px`,
          }}
        >
          <Music className={note % 2 === 0 ? "animate-float" : "animate-float-slow"} />
        </div>
      ))}

      {/* Butterflies (sparkles) */}
      {butterflies.map((butterfly) => (
        <div
          key={`butterfly-${butterfly}`}
          className="absolute text-secondary opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            fontSize: `${Math.random() * 15 + 15}px`,
          }}
        >
          <Sparkles className="animate-butterfly-flutter" />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20" />
    </div>
  );
};

export default FloatingBackground;
