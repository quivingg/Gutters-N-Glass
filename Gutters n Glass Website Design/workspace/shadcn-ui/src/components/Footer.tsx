import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Gutters <span className="text-cyan-400">n</span> Glass
            </h3>
            <p className="text-gray-300 mb-4">
              Professional on-call window and gutter cleaning services. 
              Reliable, efficient, and spotless results every time.
            </p>
            <p className="text-gray-300">
              <strong>Owner:</strong> Agyad Sarakbi
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Window Cleaning</li>
              <li>Gutter Cleaning</li>
              <li>Pressure Washing</li>
              <li>Commercial Services</li>
              <li>Emergency Cleaning</li>
              <li>Maintenance Plans</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">(608) 207-8387</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">info@guttersglass.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">Madison & Surrounding Areas</span>
              </div>
            </div>

            <Button
              onClick={() => window.open('tel:6082078387', '_self')}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Gutters n Glass. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => {
                  const element = document.querySelector('#home');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-400 hover:text-white text-sm"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => {
                  const element = document.querySelector('#home');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-400 hover:text-white text-sm"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}