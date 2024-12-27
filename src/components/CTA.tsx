import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-8 text-white animate-slide-up">
          Let's Transform Your Real Estate Operations
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Discover how Workflow Champions can help you deliver exceptional service and drive growth.
        </p>
        <Button 
          size="lg"
          className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          Schedule a Free Audit
        </Button>
      </div>
    </section>
  );
};