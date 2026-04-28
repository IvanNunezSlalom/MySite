'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Linkedin, Mail } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function ProfileHero() {
  return (
    <section className="section-spacing bg-gradient-to-b from-gray-10/30 to-white">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-premium-lg">
              {/* TODO: Replace with your actual photo */}
              {/* The photo from your PDF should be placed at /public/images/ivan-nunez.jpg */}
              <div className="w-full h-full bg-gradient-to-br from-slalom-blue/20 to-support-purple/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-gray-50 text-body-lg">
                    Your professional photo
                  </p>
                  <p className="text-gray-30 text-body-sm mt-2">
                    Place image at:
                    <br />
                    /public/images/ivan-nunez.jpg
                  </p>
                </div>
              </div>
              {/* When you have your photo, uncomment this:
              <Image
                src="/images/ivan-nunez.jpg"
                alt="Ivan Nunez"
                fill
                className="object-cover"
                priority
              />
              */}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-slalom-blue/10 rounded-full -z-10" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-support-purple/10 rounded-full -z-10" />
          </motion.div>

          {/* Profile Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-body-lg text-slalom-blue font-medium mb-4">
              About me
            </p>
            <h1 className="text-h1 font-bold text-gray-90 mb-6">
              Ivan Nunez
            </h1>
            <h2 className="text-h3 text-gray-70 mb-8">
              Senior Consultant — Experience Strategist
            </h2>

            <div className="prose prose-lg mb-8">
              <p className="text-body-lg text-gray-70 leading-relaxed mb-4">
                I have over 25 years of experience using strategic, analytical,
                and creative skills to identify user and business needs. I
                leverage data analysis and empathy to design human-centered
                experiences and find opportunities for improvement.
              </p>
              <p className="text-body-lg text-gray-70 leading-relaxed">
                I'm a UX strategist and design leader helping organizations make
                complex ideas visible, understandable, and actionable. My work
                spans enterprise systems, service workflows, and digital
                transformation, with a focus on turning ambiguity into aligned
                direction through thoughtful prototyping.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-body text-gray-70">
                <MapPin size={20} className="text-slalom-blue" />
                <span>{SITE_CONFIG.contact.location}</span>
              </div>
              <div className="flex items-center gap-3 text-body text-gray-70">
                <Mail size={20} className="text-slalom-blue" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-slalom-blue transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-body text-gray-70">
                <Linkedin size={20} className="text-slalom-blue" />
                <a
                  href={SITE_CONFIG.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slalom-blue transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
