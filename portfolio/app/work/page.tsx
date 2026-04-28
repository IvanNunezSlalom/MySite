import React from 'react';
import { motion } from 'framer-motion';
import { ProjectGrid } from '@/components/work/ProjectGrid';
import { PageTransition } from '@/components/layout/PageTransition';

export const metadata = {
  title: 'Work — Ivan Nunez',
  description:
    'Explore my portfolio of UX strategy, platform design, and service design projects across enterprise clients.',
};

export default function WorkPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="section-spacing pt-12 bg-gradient-to-b from-gray-10/30 to-white">
        <div className="container-premium text-center">
          <h1 className="text-h1 font-bold text-gray-90 mb-6">
            Selected work
          </h1>
          <p className="text-h4 text-gray-70 max-w-3xl mx-auto">
            A collection of projects showcasing strategic thinking,
            human-centered design, and cross-functional collaboration across
            enterprise platforms and service ecosystems
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <ProjectGrid />
    </PageTransition>
  );
}
