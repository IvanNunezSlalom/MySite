'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Lightbulb, Users, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Lightbulb,
    title: 'Strategic thinking',
    description: 'Focused on goals, workflows, and decisions—not just faster output.',
  },
  {
    icon: Users,
    title: 'Human-centered learning',
    description: 'Prototype behavior to understand what users think, feel, and do.',
  },
  {
    icon: Zap,
    title: 'Cross-functional alignment',
    description:
      'Create visible concepts that help business, design, and engineering move forward together.',
  },
];

export function QuickIntro() {
  return (
    <section className="section-spacing">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-h1 font-bold text-gray-90 mb-6">
              25+ years turning complex problems into clear solutions
            </h2>
            <p className="text-body-lg text-gray-70 mb-8 leading-relaxed">
              I leverage strategic, analytical, and creative skills to identify
              user and business needs. Through data analysis and empathy, I
              design human-centered experiences and find opportunities for
              improvement across enterprise platforms and service ecosystems.
            </p>
            <Button href="/about" variant="primary" icon>
              Learn more about me
            </Button>
          </motion.div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slalom-blue/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-slalom-blue" />
                      </div>
                      <div>
                        <h3 className="text-h4 font-bold text-gray-90 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-body text-gray-70">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
