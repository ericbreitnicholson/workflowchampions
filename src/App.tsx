import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen pt-20 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <p className="text-lg text-gray-600 mb-4">
        Thank you for your interest in this page. We are currently working on creating valuable content for this section.
      </p>
      <p className="text-lg text-gray-600">
        Please check back soon for updates, or contact us if you have any immediate questions.
      </p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<PlaceholderPage title="About Us" />} />
          <Route path="/services" element={<PlaceholderPage title="Our Services" />} />
          <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
          <Route path="/privacy-policy" element={<PlaceholderPage title="Privacy Policy" />} />
          <Route path="/terms-of-service" element={<PlaceholderPage title="Terms of Service" />} />
          <Route path="/cookie-notice" element={<PlaceholderPage title="Cookie Notice" />} />
          <Route path="/accessibility" element={<PlaceholderPage title="Accessibility" />} />
          <Route path="/advertising-notice" element={<PlaceholderPage title="Internet-Based Advertising Notice" />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;