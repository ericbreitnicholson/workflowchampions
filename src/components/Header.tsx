import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-primary">
            Workflow Champions
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-primary">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-primary">
              Services
            </button>
            <a href="https://calendly.com/eric-workflowchampions/30min" target="_blank" rel="noopener noreferrer">
              <Button>Schedule a Free Audit</Button>
            </a>
          </nav>

          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50"
            >
              Services
            </button>
            <a
              href="https://calendly.com/eric-workflowchampions/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button className="w-full">Schedule a Free Audit</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};