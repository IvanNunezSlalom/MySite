'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/lib/projects';
import { ProjectCategory } from '@/lib/types';

const categories: (ProjectCategory | 'all')[] = [
  'all',
  'UX Research & Strategy',
  'Platform Design',
  'AI & Agents',
  'Service Design',
  'CX Strategy',
  'Government',
];

export function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>(
    'all'
  );

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <section className="section-spacing">
      <div className="container-premium">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-slalom-blue text-white shadow-md'
                    : 'bg-white text-gray-70 hover:bg-gray-10 border border-gray-10'
                }`}
              >
                {category === 'all' ? 'All projects' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-h4 text-gray-50">
              No projects found in this category
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
