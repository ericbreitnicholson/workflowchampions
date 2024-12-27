import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Let's Transform Your Real Estate Operations
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Discover how Workflow Champions can help you deliver exceptional service and drive growth.
        </p>
        <Button 
          size="lg"
          variant="secondary"
          className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg"
        >
          Schedule a Free Audit
        </Button>
      </div>
    </section>
  );
};