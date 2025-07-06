'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Heart, Brain, Users, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agreeToContact: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'This field is required';
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'Preferred time is required';
    if (!formData.agreeToContact) newErrors.agreeToContact = 'You must agree to be contacted';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission here
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-semibold text-gray-900">Dr. Serena Blake</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
            Helping You Heal and Thrive
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
            Dr. Serena Blake, Clinical Psychologist
          </h2>
          <Button 
            size="lg" 
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Book a Free Consult
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-light text-gray-900 mb-8">About Dr. Blake</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
                with eight years of experience and over 500 client sessions. She blends evidence-based 
                approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
                personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-teal-600" />
                  <span>Los Angeles, CA</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-3 text-teal-600" />
                  <span>(323) 555-0192</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-3 text-teal-600" />
                  <span>serena@blakepsychology.com</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <img 
                  src="/image.png" 
                  alt="Dr. Serena Blake" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Services</h2>
            <p className="text-xl text-gray-600">Specialized care tailored to your unique needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg flex items-center justify-center">
                <Brain className="w-16 h-16 text-blue-600" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Anxiety & Stress Management</h3>
                <p className="text-gray-600 leading-relaxed">
                  Learn effective coping strategies and evidence-based techniques to manage anxiety, 
                  reduce stress, and regain control over your daily life. We'll work together to 
                  identify triggers and develop personalized tools for lasting relief.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-video bg-gradient-to-br from-pink-100 to-pink-200 rounded-t-lg flex items-center justify-center">
                <Users className="w-16 h-16 text-pink-600" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Relationship Counseling</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strengthen your relationships through improved communication, conflict resolution, 
                  and deeper emotional connection. Whether you're working on romantic partnerships, 
                  family dynamics, or friendships, we'll help you build healthier bonds.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-t-lg flex items-center justify-center">
                <Heart className="w-16 h-16 text-green-600" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Trauma Recovery</h3>
                <p className="text-gray-600 leading-relaxed">
                  Heal from past experiences with trauma-informed care in a safe, supportive environment. 
                  Using proven therapeutic approaches, we'll help you process difficult experiences 
                  and develop resilience for moving forward.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Session Fees</h3>
            <div className="flex justify-center space-x-12">
              <div>
                <p className="text-3xl font-light text-teal-600 mb-2">$200</p>
                <p className="text-gray-600">Individual Sessions</p>
              </div>
              <div>
                <p className="text-3xl font-light text-teal-600 mb-2">$240</p>
                <p className="text-gray-600">Couples Sessions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about therapy and my practice</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="insurance" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-teal-600 transition-colors">
                Do you accept insurance?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                I am currently out-of-network with insurance providers, but I can provide you with a superbill 
                to submit to your insurance company for potential reimbursement. Many clients find that the 
                flexibility and personalized care of out-of-network therapy is worth the investment. I'm happy 
                to discuss payment options and help you understand your benefits.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="online" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-teal-600 transition-colors">
                Are online sessions available?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                Yes, I offer secure telehealth sessions for clients throughout California. Online therapy 
                can be just as effective as in-person sessions and provides greater flexibility for busy 
                schedules. All sessions are conducted through a HIPAA-compliant platform to ensure your 
                privacy and confidentiality.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cancellation" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-teal-600 transition-colors">
                What is your cancellation policy?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                I require 24 hours notice for cancellations or rescheduling. Appointments cancelled with 
                less than 24 hours notice will be charged the full session fee. This policy helps me 
                maintain availability for all clients and ensures that everyone has access to consistent 
                care. Emergency situations are handled on a case-by-case basis.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Get Started Today</h2>
            <p className="text-xl text-gray-600">Take the first step towards healing and growth</p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`mt-2 ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">Phone *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`mt-2 ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="Your phone number"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`mt-2 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">What brings you here? *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`mt-2 min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Please share what you'd like to work on or any questions you have..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <div>
                  <Label htmlFor="preferredTime" className="text-gray-700 font-medium">Preferred time to reach you *</Label>
                  <Input
                    id="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                    className={`mt-2 ${errors.preferredTime ? 'border-red-500' : ''}`}
                    placeholder="e.g., Weekday mornings, Tuesday evenings, etc."
                  />
                  {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreeToContact"
                    checked={formData.agreeToContact}
                    onCheckedChange={(checked) => handleInputChange('agreeToContact', checked as boolean)}
                    className={errors.agreeToContact ? 'border-red-500' : ''}
                  />
                  <div>
                    <Label htmlFor="agreeToContact" className="text-gray-700 font-medium cursor-pointer">
                      I agree to be contacted *
                    </Label>
                    {errors.agreeToContact && <p className="text-red-500 text-sm mt-1">{errors.agreeToContact}</p>}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 text-lg rounded-full transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-light mb-4">Dr. Serena Blake</h3>
            <p className="text-gray-400 mb-6">Clinical Psychologist • Los Angeles, CA</p>
            <div className="flex justify-center space-x-8 text-gray-400">
              <span>(323) 555-0192</span>
              <span>serena@blakepsychology.com</span>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              © 2024 Dr. Serena Blake. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}