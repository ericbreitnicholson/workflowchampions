import { useEffect, useState } from "react";

const metrics = [
  { label: "Years of Process Documentation", value: 10, suffix: "+" },
  { label: "Hours Saved", value: 100, suffix: "+" },
  { label: "States with Active Clients", value: 3, suffix: "+" },
];

export const Metrics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className={`text-5xl font-bold mb-2 ${isVisible ? 'animate-counter' : 'opacity-0'}`}>
                {metric.value}{metric.suffix}
              </div>
              <div className="text-xl">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};