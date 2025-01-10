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
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">
          How We Empower Your Business
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Our expert services are designed to drive growth and streamline operations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};