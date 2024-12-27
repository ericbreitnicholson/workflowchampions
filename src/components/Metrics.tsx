import { useEffect, useState } from "react";

const metrics = [
  { label: "Years of Real Estate Expertise", value: 10, suffix: "+" },
  { label: "Workflows Optimized", value: 1000, suffix: "+" },
  { label: "Countries with Active Clients", value: 20, suffix: "+" },
];

export const Metrics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={`text-6xl font-bold mb-4 text-white ${isVisible ? 'animate-counter' : 'opacity-0'}`}>
                {metric.value}{metric.suffix}
              </div>
              <div className="text-xl text-gray-300">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};