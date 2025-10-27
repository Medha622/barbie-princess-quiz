import { Princess, princessInfo } from "@/data/quizData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, RotateCcw } from "lucide-react";

interface ResultCardProps {
  princess: Princess;
  onRestart: () => void;
}

const ResultCard = ({ princess, onRestart }: ResultCardProps) => {
  const info = princessInfo[princess];

  const princessImages = {
    alexa: "/images/result_alexa.jpg",
    blair: "/images/result_blair.jpg",
    barbara: "/images/result_barbara.jpg",
    merliah: "/images/result_merliah.jpg",
    mariposa: "/images/result_mariposa.jpg",
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 animate-fade-in">
      <Card className="overflow-hidden border-2 border-accent shadow-glow">
        <div className="bg-gradient-to-br from-primary via-secondary to-primary/80 p-8 text-center">
          <div className="flex justify-center mb-4">
            <Sparkles className="text-accent w-12 h-12 animate-sparkle" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            You Are...
          </h1>
        </div>

        <div className="p-8 bg-card space-y-6">
          {/* Princess Image */}
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-glow">
            <img 
              src={princessImages[princess]} 
              alt={info.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback styling if image fails to load
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.className += ' bg-gradient-to-br from-primary/50 to-secondary/50 flex items-center justify-center text-8xl';
                  const fallbackEmoji = {
                    alexa: "✨",
                    blair: "👑",
                    barbara: "💖",
                    merliah: "🌊",
                    mariposa: "🦋",
                  };
                  parent.textContent = fallbackEmoji[princess];
                }
              }}
            />
          </div>

          {/* Princess Info */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {info.name}
            </h2>
            <p className="text-lg text-muted-foreground italic">{info.subtitle}</p>
            <p className="text-xl text-foreground leading-relaxed">{info.description}</p>
            <p className="text-lg text-accent font-medium">Your colors: {info.colors}</p>
          </div>

          {/* Play Again Button */}
          <div className="flex justify-center pt-4">
            <Button
              onClick={onRestart}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white shadow-glow transition-all duration-300 hover:scale-105 gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Play Again
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ResultCard;
