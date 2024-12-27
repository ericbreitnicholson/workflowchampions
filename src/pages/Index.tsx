import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Metrics } from "@/components/Metrics";
import { Services } from "@/components/Services";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Metrics />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;