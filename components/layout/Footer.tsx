import React from 'react';
import Link from 'next/link';
import { Linkedin, Mail } from 'lucide-react';
import { SITE_CONFIG, NAVIGATION } from '@/lib/constants';
import WeatherWidget from '@/components/ui/WeatherWidget';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-90 text-white">
      <div className="container-premium py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-h4 font-bold mb-4">{SITE_CONFIG.name}</h3>
            <p className="text-gray-30 mb-6">
              {SITE_CONFIG.tagline}
            </p>
            <div className="flex gap-4">
              {/* TODO: Update social links */}
              <a
                href={SITE_CONFIG.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-70 hover:bg-slalom-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="p-2 rounded-lg bg-gray-70 hover:bg-slalom-blue transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-body-lg font-bold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-30 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-body-lg font-bold mb-4">Get in touch</h4>
            <ul className="space-y-3 text-gray-30">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li>{SITE_CONFIG.contact.location}</li>
            </ul>
          </div>

          {/* Weather Column */}
          <div>
            <WeatherWidget />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-70 flex flex-col md:flex-row justify-between items-center gap-4 text-body-sm text-gray-30">
          <p>© {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Built with{' '}
            <span className="text-slalom-blue" aria-label="care">
              ♥
            </span>{' '}
            using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
