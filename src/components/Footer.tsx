import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Workflow Champions</h3>
            <p className="text-gray-400">
              Empowering real estate professionals with innovative automation solutions.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Email: info@workflowchampions.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Business Ave, Suite 100</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-16 pt-8 text-sm text-center text-gray-400">
          <p>&copy; 2024 Workflow Champions. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            {" | "}
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};