import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<div className="pt-20">About Page Coming Soon</div>} />
          <Route path="/services" element={<div className="pt-20">Services Page Coming Soon</div>} />
          <Route path="/blog" element={<div className="pt-20">Blog Page Coming Soon</div>} />
          <Route path="/contact" element={<div className="pt-20">Contact Page Coming Soon</div>} />
          <Route path="/privacy-policy" element={<div className="pt-20">Privacy Policy Coming Soon</div>} />
          <Route path="/terms-of-service" element={<div className="pt-20">Terms of Service Coming Soon</div>} />
          <Route path="/cookie-notice" element={<div className="pt-20">Cookie Notice Coming Soon</div>} />
          <Route path="/accessibility" element={<div className="pt-20">Accessibility Coming Soon</div>} />
          <Route path="/advertising-notice" element={<div className="pt-20">Internet-Based Advertising Notice Coming Soon</div>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;