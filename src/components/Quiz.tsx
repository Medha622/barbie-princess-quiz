import { useState } from "react";
import { quizQuestions, Princess, princessInfo } from "@/data/quizData";
import QuestionCard from "./QuestionCard";
import ResultCard from "./ResultCard";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Princess[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (princess: Princess) => {
    const newAnswers = [...answers, princess];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 500);
    } else {
      setTimeout(() => {
        setShowResult(true);
      }, 500);
    }
  };

  const calculateResult = (): Princess => {
    const counts: Record<Princess, number> = {
      alexa: 0,
      blair: 0,
      barbara: 0,
      merliah: 0,
      mariposa: 0,
    };

    answers.forEach((answer) => {
      counts[answer]++;
    });

    const maxCount = Math.max(...Object.values(counts));
    const winners = Object.keys(counts).filter(
      (key) => counts[key as Princess] === maxCount
    ) as Princess[];

    return winners[Math.floor(Math.random() * winners.length)];
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const result = calculateResult();
    return <ResultCard princess={result} onRestart={restartQuiz} />;
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 flex items-center justify-center gap-3">
          <Sparkles className="text-accent animate-sparkle" />
          Shop & Discover Your Princess
          <Sparkles className="text-accent animate-sparkle" />
        </h1>
        <p className="text-lg text-muted-foreground">Question {currentQuestion + 1} of {quizQuestions.length}</p>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-muted rounded-full h-3 mb-8 overflow-hidden shadow-soft">
        <div
          className="h-full bg-gradient-to-r from-accent via-primary to-secondary transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question Card */}
      <QuestionCard
        question={quizQuestions[currentQuestion]}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
