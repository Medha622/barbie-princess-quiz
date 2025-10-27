import FloatingBackground from "@/components/FloatingBackground";
import MusicToggle from "@/components/MusicToggle";
import Quiz from "@/components/Quiz";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/10 to-secondary/20 relative overflow-hidden">
      <FloatingBackground />
      <MusicToggle />
      
      <main className="relative z-10 container mx-auto py-8">
        <Quiz />
      </main>
    </div>
  );
};

export default Index;
