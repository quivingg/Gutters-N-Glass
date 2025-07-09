import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b shadow-sm"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => scrollToSection('#home')}
        >
          Gutters <span className="text-cyan-500">n</span> Glass
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Call Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            onClick={() => window.open('tel:6082078387', '_self')}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Phone className="w-4 h-4 mr-2" />
            (608) 207-8387
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col space-y-6 mt-8">
              <div className="text-xl font-bold text-blue-600 mb-4">
                Gutters <span className="text-cyan-500">n</span> Glass
              </div>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-lg text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => window.open('tel:6082078387', '_self')}
                className="bg-blue-600 hover:bg-blue-700 text-white mt-6"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}