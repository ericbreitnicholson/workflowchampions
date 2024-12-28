import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header 
      className={`fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 transition-transform duration-300 border-b ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-primary">
            <img src="/lovable-uploads/afb5c114-35ec-454c-8006-0db270ee01f2.png" alt="Workflow Champions" className="h-8" />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* CTA Button */}
            <a 
              href="https://calendly.com/eric-workflowchampions/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:inline-flex"
            >
              <Button size="sm">
                Schedule a Free Audit
              </Button>
            </a>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger className="md:hidden">
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link to="/" className="text-lg hover:text-primary transition-colors">
                    Home
                  </Link>
                  <Link to="/about" className="text-lg hover:text-primary transition-colors">
                    About
                  </Link>
                  <Link to="/services" className="text-lg hover:text-primary transition-colors">
                    Services
                  </Link>
                  <Link to="/blog" className="text-lg hover:text-primary transition-colors">
                    Blog
                  </Link>
                  <a 
                    href="https://calendly.com/eric-workflowchampions/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg hover:text-primary transition-colors"
                  >
                    Schedule a Free Audit
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};