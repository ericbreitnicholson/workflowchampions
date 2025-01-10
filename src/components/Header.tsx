import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/85ee48fc-0470-4235-999d-da14ae8c44c2.png" alt="WC Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-primary">
              Workflow Champions
            </span>
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

      {/* Mobile menu - slides from right */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ zIndex: 1000 }}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="px-4 py-2 space-y-4">
          <button
            onClick={() => scrollToSection('home')}
            className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50"
          >
            Home
          </button>
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

      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          style={{ zIndex: 999 }}
        />
      )}
    </header>
  );
};