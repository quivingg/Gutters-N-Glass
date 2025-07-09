import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Award, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-600" />, number: '500+', label: 'Happy Customers' },
    { icon: <Clock className="w-8 h-8 text-green-600" />, number: '5+', label: 'Years Experience' },
    { icon: <Star className="w-8 h-8 text-yellow-600" />, number: '5.0', label: 'Star Rating' },
    { icon: <Award className="w-8 h-8 text-purple-600" />, number: '100%', label: 'Satisfaction' }
  ];

  const values = [
    {
      title: 'Reliability',
      description: 'We show up on time, every time, and deliver consistent quality service you can count on.'
    },
    {
      title: 'Quality',
      description: 'Using professional-grade equipment and eco-friendly solutions for superior results.'
    },
    {
      title: 'Trust',
      description: 'Fully insured and bonded with transparent pricing and honest communication.'
    },
    {
      title: 'Service',
      description: 'Going above and beyond to exceed expectations and build lasting relationships.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <Badge className="bg-blue-100 text-blue-800 mb-4">About Gutters n Glass</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your Trusted Local
                <span className="block text-blue-600">Cleaning Professional</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Hi, I'm Agyad Sarakbi, owner and operator of Gutters n Glass. With years of 
                experience in the cleaning industry, I'm committed to providing exceptional 
                service to every customer.
              </p>
              <p className="text-lg text-gray-600">
                What started as a passion for helping neighbors keep their properties beautiful 
                has grown into a trusted local business. I take pride in delivering reliable, 
                professional service with a personal touch that larger companies can't match.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex justify-center mb-3">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Credentials */}
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Gutters n Glass?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-700">Fully Licensed & Insured</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-700">Eco-Friendly Cleaning Solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-700">100% Satisfaction Guarantee</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-700">Competitive & Transparent Pricing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-700">Local Owner-Operated Business</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial */}
            <Card className="bg-white border-2 border-yellow-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-3">
                  "Agyad did an amazing job on our windows and gutters. Professional, 
                  punctual, and the results were perfect. Highly recommend!"
                </p>
                <p className="text-sm text-gray-600 font-medium">- Sarah M., Local Customer</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}