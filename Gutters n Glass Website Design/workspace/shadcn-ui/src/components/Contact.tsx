import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Quote Request - ${formData.service}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`;
    window.open(`mailto:agyad@guttersglass.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: 'Phone',
      content: '(608) 207-8387',
      action: () => window.open('tel:6082078387', '_self')
    },
    {
      icon: <Mail className="w-6 h-6 text-green-600" />,
      title: 'Email',
      content: 'info@guttersglass.com',
      action: () => window.open('mailto:info@guttersglass.com')
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      title: 'Service Area',
      content: 'Madison & Surrounding Areas',
      action: null
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: 'Hours',
      content: 'Mon-Sat: 8AM-6PM',
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience crystal clear results? Contact us today for a free, 
            no-obligation estimate on any of our cleaning services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Request a Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Service Needed *</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a service...</option>
                      <option value="Window Cleaning">Window Cleaning</option>
                      <option value="Gutter Cleaning">Gutter Cleaning</option>
                      <option value="Both Windows & Gutters">Both Windows & Gutters</option>
                      <option value="Pressure Washing">Pressure Washing</option>
                      <option value="Commercial Services">Commercial Services</option>
                      <option value="Emergency Service">Emergency Service</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your property, specific needs, or any questions you have..."
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                    size="lg"
                  >
                    Get Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    className={`p-4 hover:shadow-md transition-shadow ${info.action ? 'cursor-pointer' : ''}`}
                    onClick={info.action || undefined}
                  >
                    <div className="flex items-center space-x-4">
                      {info.icon}
                      <div>
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                        <p className="text-gray-600">{info.content}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Call Section */}
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Need Immediate Service?</h3>
                <p className="text-blue-100 mb-6">
                  For urgent cleaning needs or same-day service, give us a call directly.
                </p>
                <Button
                  onClick={() => window.open('tel:6082078387', '_self')}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (608) 207-8387
                </Button>
              </div>
            </Card>

            {/* Business Info Card */}
            <Card className="bg-white p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About Our Service</h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Free estimates for all services</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Same-day service available</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Fully insured and bonded</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span>100% satisfaction guaranteed</span>
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}