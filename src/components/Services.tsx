import { 
  BarChart3, 
  MessageSquare, 
  Search, 
  Mail 
} from "lucide-react";

const services = [
  {
    icon: <BarChart3 className="h-12 w-12" />,
    title: "Custom CRM Setup",
    description: "Tailored CRM solutions to manage your client relationships effectively"
  },
  {
    icon: <MessageSquare className="h-12 w-12" />,
    title: "Missed Call Auto Text Follow-Up",
    description: "Never miss an opportunity with automated follow-up systems"
  },
  {
    icon: <Search className="h-12 w-12" />,
    title: "Site SEO & Google Business Profile",
    description: "Optimize your online presence and attract more leads"
  },
  {
    icon: <Mail className="h-12 w-12" />,
    title: "Email Automations",
    description: "Streamline your communication with powerful email automation"
  }
];

export const Services = () => {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-6 text-white animate-slide-up">
          How We Empower Your Business
        </h2>
        <p className="text-xl text-gray-300 text-center mb-20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Our expert services are designed to drive growth and streamline operations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-white mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};