import { QuizQuestion, Princess } from "@/data/quizData";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface QuestionCardProps {
  question: QuizQuestion;
  onAnswer: (princess: Princess) => void;
}

const QuestionCard = ({ question, onAnswer }: QuestionCardProps) => {
  const [selectedOption, setSelectedOption] = useState<Princess | null>(null);

  const handleSelect = (princess: Princess) => {
    setSelectedOption(princess);
    setTimeout(() => {
      onAnswer(princess);
      setSelectedOption(null);
    }, 300);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold text-center text-foreground mb-8">
        {question.question}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {question.options.map((option) => (
          <Card
            key={option.id}
            onClick={() => handleSelect(option.id)}
            className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-glow overflow-hidden border-2 ${
              selectedOption === option.id
                ? "border-accent scale-105 shadow-glow"
                : "border-primary/30"
            }`}
          >
            <div className="aspect-square bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center overflow-hidden">
              <img 
                src={option.image} 
                alt={option.text}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  console.error(`Failed to load image: ${option.image}`);
                  // Fallback to emoji if image fails to load
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const emoji = document.createElement('div');
                    emoji.className = 'text-6xl flex items-center justify-center h-full';
                    emoji.textContent = 
                      option.id === "alexa" ? "✨" :
                      option.id === "blair" ? "👑" :
                      option.id === "barbara" ? "💖" :
                      option.id === "merliah" ? "🌊" : "🦋";
                    parent.appendChild(emoji);
                  }
                }}
              />
            </div>
            <div className="p-4 bg-card">
              <p className="text-center font-medium text-foreground">{option.text}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
