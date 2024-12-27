import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
          Empowering Real Estate Professionals to Thrive
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Streamline your workflows, strengthen relationships, and accelerate growth with custom automation solutions.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
          Schedule a Free Audit
        </Button>
      </div>
    </div>
  );
};