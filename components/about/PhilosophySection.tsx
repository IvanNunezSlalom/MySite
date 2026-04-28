'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { SKILLS } from '@/lib/constants';
import { CheckCircle2 } from 'lucide-react';

const philosophySteps = [
  {
    phase: 'Frame',
    title: 'Understand',
    items: ['Actors', 'Goals', 'Outcomes', 'Success criteria'],
  },
  {
    phase: 'Plan',
    title: 'Define',
    items: ['AI-assisted PRD or structured prototype plan'],
  },
  {
    phase: 'Structure',
    title: 'Shape',
    items: [
      'Design System or pattern integration',
      'Prompts',
      'Components',
      'Patterns',
      'Scoped requests',
    ],
  },
  {
    phase: 'Prototype',
    title: 'Experience',
    items: ['Interactive concepts for workflow exploration'],
  },
  {
    phase: 'Learn',
    title: 'Refine',
    items: ['Walkthroughs', 'Alignment', 'Feasibility', 'Iteration'],
  },
];

export function PhilosophySection() {
  return (
    <section className="section-spacing">
      <div className="container-premium">
        {/* Philosophy Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-h1 font-bold text-gray-90 mb-6">
            My AI prototyping approach
          </h2>
          <p className="text-body-lg text-gray-70 mb-4">
            Prototype to learn, align, and decide clearly—not just to impress.
          </p>
          <p className="text-body text-gray-70">
            I use AI-driven prototyping to help teams clarify workflows, surface
            assumptions, align stakeholders, and reduce implementation risk
            before build.
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {philosophySteps.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex-1 min-w-[200px]"
              >
                <Card className="p-6 h-full bg-gradient-to-br from-slalom-blue to-support-purple text-white">
                  <div className="text-body-sm font-bold mb-2 opacity-90">
                    {step.phase.toUpperCase()}
                  </div>
                  <h3 className="text-h4 font-bold mb-4">{step.title}</h3>
                  <ul className="space-y-2 text-body-sm">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-support-green mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-h2 font-bold text-gray-90 mb-8 text-center">
            Core capabilities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="p-4 h-full">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-slalom-blue flex-shrink-0 mt-0.5"
                    />
                    <span className="text-body text-gray-90">{skill}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
