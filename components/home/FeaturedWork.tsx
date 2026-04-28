'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedProjects } from '@/lib/projects';
import { Badge } from '@/components/ui/Badge';

export function FeaturedWork() {
  const featuredProjects = getFeaturedProjects();
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length
    );
  };

  const currentProject = featuredProjects[currentIndex];

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
            Featured work
          </h2>
          <p className="text-h4 text-gray-70 max-w-2xl mx-auto">
            A selection of projects that showcase my approach to solving complex
            experience challenges
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-premium-lg">
                {/* TODO: Replace with actual project image */}
                <div className="w-full h-full bg-gradient-to-br from-slalom-blue/20 to-support-purple/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-gray-50 text-body-lg">
                      Project screenshot for
                      <br />
                      <strong>{currentProject.client}</strong>
                    </p>
                    <p className="text-gray-30 text-body-sm mt-2">
                      Replace: {currentProject.heroImage}
                    </p>
                  </div>
                </div>
                {/* When you have images, uncomment this:
                <Image
                  src={currentProject.heroImage}
                  alt={currentProject.title}
                  fill
                  className="object-cover"
                />
                */}
              </div>

              {/* Project Info */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="blue">{currentProject.client}</Badge>
                  <Badge>{currentProject.year}</Badge>
                </div>

                <h3 className="text-h2 font-bold text-gray-90 mb-4">
                  {currentProject.title}
                </h3>

                <p className="text-body-lg text-gray-70 mb-6">
                  {currentProject.subtitle}
                </p>

                <p className="text-body text-gray-70 mb-8 line-clamp-4">
                  {currentProject.overview}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {currentProject.category.map((cat) => (
                    <Badge key={cat} variant="default">
                      {cat}
                    </Badge>
                  ))}
                </div>

                <Link
                  href={`/work/${currentProject.slug}`}
                  className="inline-flex items-center gap-2 text-body-lg font-medium text-slalom-blue hover:gap-3 transition-all"
                >
                  View case study
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white border border-gray-10 hover:bg-slalom-blue hover:text-white hover:border-slalom-blue transition-all shadow-md"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-slalom-blue'
                      : 'w-2 bg-gray-30 hover:bg-gray-50'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-white border border-gray-10 hover:bg-slalom-blue hover:text-white hover:border-slalom-blue transition-all shadow-md"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
