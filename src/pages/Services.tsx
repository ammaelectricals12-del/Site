import React from 'react';
import { Shield } from 'lucide-react';
import { Page } from '../types';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

interface ServiceCategory {
  title: string;
  description: string;
  image: string;
  services: string[];
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const serviceCategories: ServiceCategory[] = [
    {
      title: 'Transformer Services',
      description: 'Comprehensive transformer maintenance, testing, and supply solutions for optimal performance and reliability.',
      image: '/t.jpg',
      services: [
        'Transformer oil filtration',
        'Dielectric Breakdown Voltage testing',
        'Dissolved Gas Analysis (DGA)',
        'Oil quality testing (Acidity, Moisture, Viscosity)',
        'Transformer painting and stickering',
        'Breathers with silica gel supply',
        'New transformer and spares supply',
        'Rented transformer solutions'
      ]
    },
    {
      title: 'OLTC Services',
      description: 'Specialized On-Load Tap Changer services ensuring smooth voltage regulation and system reliability.',
      image: '/oltc.jpg',
      services: [
        'OLTC oil filtration and servicing',
        'OLTC repair and maintenance',
        'OLTC spares supply',
        'New OLTC installation',
        'RTCC panel services'
      ]
    },
    {
      title: 'Earth Pit Works',
      description: 'Professional earthing solutions for electrical safety and protection.',
      image: '/ep.png',
      services: [
        'New earth pit construction',
        'Earth pit testing and reconditioning',
        'Earth pit spares supply',
        'Grounding system maintenance'
      ]
    },
    {
      title: 'HT & LT Works',
      description: 'Complete High Tension and Low Tension electrical solutions for industrial and commercial applications.',
      image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1974',
      services: [
        'Panel servicing and maintenance',
        'New panel supply and installation',
        'Cable supply and installation',
        'Cable potting and jointing',
        'Cable termination work',
        'Panel spares supply'
      ]
    },
    {
      title: 'Specialized Electrical Services',
      description: 'Advanced electrical testing, maintenance, and calibration services for industrial equipment.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070',
      services: [
        'Electrical meter calibration',
        'VCB (Vacuum Circuit Breaker) servicing',
        'ACB (Air Circuit Breaker) servicing',
        'OCB (Oil Circuit Breaker) servicing',
        'Industrial wiring and cabling',
        'Breaker servicing and spares supply',
        'Periodical maintenance'
      ]
    }
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Industrial Electrical Services
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Comprehensive industrial electrical solutions including transformer services, OLTC maintenance, earthing works, and specialized electrical services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold transition duration-300"
              >
                Get Free Quote
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="bg-gray-200 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 transition duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, index) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h2 className="text-3xl md:text-4xl font-bold">
                  {category.title}
                </h2>
                <p className="text-xl text-gray-700">
                  {category.description}
                </p>
                <ul className="space-y-4">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Shield className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate('contact')}
                  className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition duration-300"
                >
                  Enquire Now
                </button>
              </div>
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  src={category.image}
                  alt={category.title}
                  className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Industrial Electrical Services?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact Amma Electricals today for expert industrial electrical solutions and maintenance services.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition duration-300"
          >
            Contact Our Experts
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;