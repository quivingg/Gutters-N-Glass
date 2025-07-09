import { Button } from '@/components/ui/button';
import { Phone, Calendar, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
              >
                Crystal Clear
                <span className="block text-blue-600">Results</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-600 mt-6 max-w-lg"
              >
                Professional on-call window and gutter cleaning services. 
                Reliable, efficient, and spotless results every time.
              </motion.p>
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">Premium Service</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Calendar className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">On-Call Available</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">Quick Response</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => window.open('tel:6082078387', '_self')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (608) 207-8387
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg"
              >
                Get Free Quote
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="pt-6 border-t border-gray-200"
            >
              <p className="text-gray-600 font-medium">Agyad Sarakbi - Owner & Operator</p>
              <p className="text-gray-500">Serving the local community with pride</p>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-300 rounded-full" />
                    <span>Professional & Insured</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-300 rounded-full" />
                    <span>Eco-Friendly Solutions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-300 rounded-full" />
                    <span>Satisfaction Guaranteed</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-300 rounded-full" />
                    <span>Competitive Pricing</span>
                  </li>
                </ul>
              </div>
              
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold shadow-lg"
            >
              ⭐ 5-Star Service
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 px-4 py-2 rounded-full font-bold shadow-lg"
            >
              💧 Spotless Clean
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}