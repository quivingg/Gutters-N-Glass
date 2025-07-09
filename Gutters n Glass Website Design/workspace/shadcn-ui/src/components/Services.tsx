import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Droplets, Home, Building, Sparkles, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: <Droplets className="w-12 h-12 text-blue-600" />,
      title: 'Window Cleaning',
      description: 'Professional interior and exterior window cleaning for crystal clear results.',
      features: ['Interior & Exterior', 'Streak-Free Finish', 'Screen Cleaning', 'Sill & Frame Care']
    },
    {
      icon: <Home className="w-12 h-12 text-green-600" />,
      title: 'Gutter Cleaning',
      description: 'Complete gutter cleaning and maintenance to protect your property.',
      features: ['Debris Removal', 'Downspout Clearing', 'Gutter Inspection', 'Minor Repairs']
    },
    {
      icon: <Building className="w-12 h-12 text-purple-600" />,
      title: 'Commercial Services',
      description: 'Professional cleaning services for businesses and commercial properties.',
      features: ['Office Buildings', 'Retail Stores', 'Regular Maintenance', 'Flexible Scheduling']
    },
    {
      icon: <Sparkles className="w-12 h-12 text-yellow-600" />,
      title: 'Pressure Washing',
      description: 'High-quality pressure washing for driveways, sidewalks, and building exteriors.',
      features: ['Driveway Cleaning', 'Sidewalk Washing', 'Building Exterior', 'Deck & Patio']
    },
    {
      icon: <Shield className="w-12 h-12 text-red-600" />,
      title: 'Emergency Services',
      description: 'Fast response for urgent cleaning needs and storm damage cleanup.',
      features: ['Storm Damage', '24/7 Availability', 'Quick Response', 'Insurance Claims']
    },
    {
      icon: <Clock className="w-12 h-12 text-indigo-600" />,
      title: 'Maintenance Plans',
      description: 'Regular scheduled cleaning to keep your property looking its best year-round.',
      features: ['Monthly Plans', 'Seasonal Service', 'Discounted Rates', 'Priority Scheduling']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine maintenance to emergency cleanup, we provide comprehensive 
            cleaning solutions for residential and commercial properties.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                    onClick={() => window.open('tel:6082078387', '_self')}
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-6 text-blue-100">
              Contact us today for a free estimate on any of our services.
            </p>
            <Button
              size="lg"
              onClick={() => window.open('tel:6082078387', '_self')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            >
              Call (608) 207-8387 Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}