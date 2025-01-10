import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/85ee48fc-0470-4235-999d-da14ae8c44c2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="container mx-auto px-4 text-center relative z-20">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Best Real Estate Marketing Agency
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Streamline your workflows, strengthen relationships, and accelerate growth with custom automation solutions.
        </p>
        <a href="https://calendly.com/eric-workflowchampions/30min" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
            Schedule a Free Audit
          </Button>
        </a>
      </div>
    </div>
  );
};