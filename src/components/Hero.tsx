import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-slide-up">
            Empowering Real Estate Professionals
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Streamline your workflows, strengthen relationships, and accelerate growth with custom automation solutions.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            Schedule a Free Audit
          </Button>
        </div>
      </div>
    </div>
  );
};