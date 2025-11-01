import React from 'react';
import { Shield, Clock, Award, CheckCircle, Phone } from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
}

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const features: Feature[] = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully certified professionals with comprehensive insurance coverage'
    },
    {
      icon: Clock,
      title: '24/7 Emergency Service',
      description: 'Available around the clock for urgent electrical needs'
    },
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Proven track record of quality workmanship and reliability'
    }
  ];

  const services = [
    'Residential Electrical Installations',
    'Commercial Wiring Solutions',
    'Emergency Repairs',
    'Panel Upgrades & Replacements',
    'Lighting Design & Installation',
    'Safety Inspections',
  ];

  const testimonials: Testimonial[] = [
    {
      name: "John Smith",
      role: "Homeowner",
      content: "Exceptional service! The team was professional, punctual, and thorough in their work. Highly recommended!"
    },
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      content: "Amma Electricals has been maintaining our office building's electrical systems for years. Their expertise and reliability are unmatched."
    },
    {
      name: "Michael Brown",
      role: "Property Manager",
      content: "Their emergency response service is fantastic. They've helped us resolve critical electrical issues quickly and efficiently."
    }
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative bg-gray-50 min-h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('g.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-xl">
            Powering Your Home & Business with Excellence
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Amma Electricals: Your Trusted Partner in Electrical Solutions Since 2010
          </p>
          <p className="text-xl text-white mb-8 leading-relaxed drop-shadow-md">
            Expert electrical solutions for residential and commercial properties. Licensed electricians delivering safe, reliable, and efficient service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold transition duration-300"
            >
              Get Free Quote
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Amma Electricals?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <feature.icon className="w-12 h-12 text-yellow-500 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16">
      Comprehensive Electrical Solutions
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div className="flex justify-center md:justify-end">
        <img
          src="c.jpg"
          alt="Residential Electrical Services"
          className="rounded-lg shadow-2xl w-full max-w-sm md:max-w-md"
        />
      </div>

      {/* Text & Services */}
      <div className="space-y-6">
        <h3 className="text-3xl font-semibold">Expert Residential & Commercial Services</h3>
        <p className="text-gray-700 text-lg">
          At Amma Electricals, we deliver comprehensive electrical solutions tailored to your specific needs. Our team of certified electricians brings expertise and precision to every project, ensuring safety and reliability in all our installations.
        </p>
        <ul className="grid grid-cols-1 gap-4">
          {services.map((service, index) => (
            <li key={index} className="flex items-center space-x-3">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <span className="text-lg">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* Emergency Services Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold mb-6">24/7 Emergency Electrical Services</h2>
              <p className="text-xl">
                Electrical emergencies don't wait for business hours. That's why our team is available 24/7 to handle any urgent electrical issues that may arise in your home or business.
              </p>
              <div className="flex items-center space-x-4">
                <Phone className="w-8 h-8 text-yellow-500" />
                <span className="text-2xl font-bold">Call Now: (555) 123-4567</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069"
                alt="Emergency Electrical Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Contact Amma Electricals today for a free consultation and experience the difference of working with true electrical professionals.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;