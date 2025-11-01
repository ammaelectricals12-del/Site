import { Users, Target, Award, Heart, CheckCircle, TrendingUp } from 'lucide-react';
import { Page } from '../types';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality electrical work on every project.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest, transparent pricing and communication throughout every job.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction and safety are our top priorities in everything we do.',
    },
    {
      icon: Target,
      title: 'Reliability',
      description: 'On-time service and dependable solutions you can count on.',
    },
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '5000+', label: 'Projects Completed' },
    { number: '100%', label: 'Licensed & Insured' },
    { number: '24/7', label: 'Emergency Service' },
  ];

  const certifications = [
    'Licensed Master Electricians',
    'OSHA Safety Certified',
    'National Electrical Code Compliant',
    'Bonded & Insured',
    'Background Checked Technicians',
    'Continuing Education Trained',
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Amma Electricals</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Your trusted partner for professional electrical services. Building safer,
              more efficient electrical systems since 2008.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Story & Certifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2008, Amma Electricals began with a simple mission: to provide honest,
                  reliable electrical services that homeowners and businesses can trust. What
                  started as a small local operation has grown into a full-service electrical
                  company serving the entire region.
                </p>
                <p>
                  Our team of licensed master electricians brings decades of combined experience
                  to every project. We stay current with the latest electrical codes, technologies,
                  and safety standards to ensure your electrical systems are built to last.
                </p>
                <p>
                  Whether it's a simple repair or a complex commercial installation, we approach
                  every job with the same level of professionalism and attention to detail. Your
                  safety and satisfaction drive everything we do.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Fully Certified & Qualified
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and relationships with every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <TrendingUp className="h-12 w-12 mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Work Together?
                </h2>
                <p className="text-xl text-amber-50 leading-relaxed">
                  Experience the difference of working with a dedicated team that puts
                  your safety and satisfaction first. Let's discuss your electrical needs.
                </p>
              </div>
              <div className="text-center md:text-right">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                >
                  Contact Us Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
