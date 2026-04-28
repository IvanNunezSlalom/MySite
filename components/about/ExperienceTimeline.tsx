'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_TIMELINE } from '@/lib/constants';

export function ExperienceTimeline() {
  return (
    <section className="section-spacing bg-gray-10/30">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 font-bold text-gray-90 mb-4">
            Professional journey
          </h2>
          <p className="text-h4 text-gray-70 max-w-2xl mx-auto">
            Three decades of experience across design, strategy, and digital transformation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slalom-blue via-support-purple to-support-green" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {EXPERIENCE_TIMELINE.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-24"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="absolute left-[26px] top-2 w-4 h-4 rounded-full bg-slalom-blue border-4 border-white shadow-md"
                  />

                  {/* Year Badge */}
                  <div className="absolute left-0 top-0 text-body-sm font-bold text-slalom-blue">
                    {item.year}
                  </div>

                  {/* Content Card */}
                  <div className="glass rounded-xl p-6 shadow-premium hover:shadow-premium-lg transition-shadow">
                    <h3 className="text-h4 font-bold text-gray-90 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-body-lg text-slalom-blue font-medium mb-3">
                      {item.company}
                    </p>
                    <p className="text-body text-gray-70">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
