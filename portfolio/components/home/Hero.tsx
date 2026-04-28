'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-radial" />

      <div className="container-premium relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-body-lg text-slalom-blue font-medium mb-6"
            >
              Senior Consultant — Experience Strategist
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-display font-bold text-gray-90 mb-8"
            >
              {SITE_CONFIG.tagline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-h4 text-gray-70 mb-12 leading-relaxed"
            >
              I use AI-driven prototyping to help teams clarify workflows,
              surface assumptions, align stakeholders, and reduce
              implementation risk before build.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/work" variant="primary" size="lg" icon>
                View my work
              </Button>
              <Button href="/about" variant="secondary" size="lg">
                About me
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating elements for visual interest */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-20 right-20 w-32 h-32 bg-slalom-blue/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute bottom-20 right-40 w-40 h-40 bg-support-purple/5 rounded-full blur-3xl"
          />
        </div>
      </div>
    </section>
  );
}
