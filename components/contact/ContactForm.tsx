'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle'
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // TODO: Implement your form submission logic here
    // This could be sending to a backend API, using a service like Formspree, etc.
    // For now, we'll simulate a submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="section-spacing">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-h1 font-bold text-gray-90 mb-6">
              Let's work together
            </h1>
            <p className="text-body-lg text-gray-70 mb-12 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out.
            </p>

            <div className="space-y-6 mb-12">
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slalom-blue/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-slalom-blue" />
                  </div>
                  <div>
                    <h3 className="text-body-lg font-bold text-gray-90 mb-1">
                      Email
                    </h3>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-body text-slalom-blue hover:underline"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slalom-blue/10 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-slalom-blue" />
                  </div>
                  <div>
                    <h3 className="text-body-lg font-bold text-gray-90 mb-1">
                      LinkedIn
                    </h3>
                    <a
                      href={SITE_CONFIG.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body text-slalom-blue hover:underline"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slalom-blue/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-slalom-blue" />
                  </div>
                  <div>
                    <h3 className="text-body-lg font-bold text-gray-90 mb-1">
                      Location
                    </h3>
                    <p className="text-body text-gray-70">
                      {SITE_CONFIG.contact.location}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-body font-medium text-gray-90 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-30 focus:border-slalom-blue focus:ring-2 focus:ring-slalom-blue/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-body font-medium text-gray-90 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-30 focus:border-slalom-blue focus:ring-2 focus:ring-slalom-blue/20 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-body font-medium text-gray-90 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-30 focus:border-slalom-blue focus:ring-2 focus:ring-slalom-blue/20 outline-none transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-body font-medium text-gray-90 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-30 focus:border-slalom-blue focus:ring-2 focus:ring-slalom-blue/20 outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  {status === 'sending' && 'Sending...'}
                  {status === 'sent' && 'Message sent!'}
                  {status === 'error' && 'Error sending'}
                  {status === 'idle' && 'Send message'}
                </Button>

                {status === 'sent' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-body text-support-green font-medium"
                  >
                    Thank you! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
