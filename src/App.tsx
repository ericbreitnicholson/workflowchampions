import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
    <div className="pt-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-primary">{title}</h1>
        <p className="text-lg text-gray-600 mb-4">
          Thank you for your interest in this page. We are currently working on creating valuable content for this section.
        </p>
        <p className="text-lg text-gray-600">
          Please check back soon for updates, or contact us if you have any immediate questions.
        </p>
      </div>
    </div>
  </div>
);

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
    <div className="pt-20 px-4 pb-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-primary">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8">Effective Date: 12/28/24</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">Introduction</h2>
          <p className="text-gray-600 mb-4">
            Workflow Champions ("we," "us," or "our") values your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you access or use our website and services related to real estate workflow automation (the "Services").
          </p>
          <p className="text-gray-600 mb-4">
            By using our website and Services, you agree to the terms outlined in this Privacy Policy. If you do not agree, please discontinue use of our website and Services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We collect various types of information to improve our Services and provide you with a seamless experience. The types of information we may collect include:
          </p>
          
          <h3 className="text-xl font-bold mt-4 mb-2">Personal Information:</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Job title</li>
          </ul>

          <h3 className="text-xl font-bold mt-4 mb-2">Account Information:</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Username and password</li>
            <li>Payment information (e.g., credit card details) for subscription or service fees</li>
          </ul>

          <h3 className="text-xl font-bold mt-4 mb-2">Technical Information:</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device type and operating system</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h3 className="text-xl font-bold mt-4 mb-2">Usage Information:</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Pages visited on our website</li>
            <li>Features used within our Services</li>
            <li>Duration and frequency of use</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect for purposes including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Providing and improving our Services</li>
            <li>Processing transactions and sending confirmations</li>
            <li>Sending administrative communications, such as updates or security alerts</li>
            <li>Personalizing user experiences based on preferences</li>
            <li>Analyzing usage trends to enhance our website’s performance</li>
            <li>Complying with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">Sharing and Disclosure of Information</h2>
          <p className="text-gray-600 mb-4">
            We do not sell your personal information. However, we may share your information in the following circumstances:
          </p>
          <h3 className="text-xl font-bold mt-4 mb-2">With Service Providers:</h3>
          <p className="text-gray-600 mb-4">
            We may share information with trusted third-party vendors who assist in providing Services, such as payment processors, cloud hosting, or analytics tools.
          </p>
          <h3 className="text-xl font-bold mt-4 mb-2">For Legal Compliance:</h3>
          <p className="text-gray-600 mb-4">
            We may disclose information if required to comply with legal obligations, respond to lawful requests, or protect our rights.
          </p>
          <h3 className="text-xl font-bold mt-4 mb-2">With Your Consent:</h3>
          <p className="text-gray-600 mb-4">
            We may share information with third parties if you have given explicit consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">Cookies and Tracking Technologies</h2>
          <p className="text-gray-600 mb-4">
            We use cookies and similar technologies to improve your browsing experience, analyze website traffic, and personalize content. You can manage your cookie preferences through your browser settings. Disabling cookies may impact your ability to use certain features of our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">Data Security</h2>
          <p className="text-gray-600 mb-4">
            We implement reasonable administrative, technical, and physical measures to safeguard your personal information against unauthorized access, loss, or misuse. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">Your Rights</h2>
          <p className="text-gray-600 mb-4">
            Depending on your location, you may have rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Accessing the data we hold about you</li>
            <li>Requesting correction of inaccurate data</li>
            <li>Requesting deletion of your personal information</li>
            <li>Objecting to or restricting processing of your data</li>
            <li>Withdrawing consent where applicable</li>
          </ul>
          <p className="text-gray-600 mb-4">
            To exercise these rights, please contact us at eric@workflowchampions.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">Third-Party Links</h2>
          <p className="text-gray-600 mb-4">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">Children’s Privacy</h2>
          <p className="text-gray-600 mb-4">
            Our Services are not directed toward children under the age of 13, and we do not knowingly collect personal information from children. If you believe a child under 13 has provided us with personal information, please contact us to remove such data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">Changes to This Privacy Policy</h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <div className="text-gray-600">
            <p>Eric Breit-Nicholson</p>
            <p>1758 North Rhodes Street Unit 337 Arlington, VA, USA 22201</p>
            <p>Email: eric@workflowchampions.com</p>
          </div>
        </section>

        <p className="mt-8 text-gray-600">
          By using our website and Services, you acknowledge that you have read and understood this Privacy Policy.
        </p>
      </div>
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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
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
