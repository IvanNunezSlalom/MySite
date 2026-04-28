'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Project } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface ProjectDetailProps {
  project: Project;
  nextProject?: Project;
}

export function ProjectDetail({ project, nextProject }: ProjectDetailProps) {
  return (
    <article>
      {/* Back Button */}
      <div className="container-premium py-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-body text-gray-70 hover:text-slalom-blue transition-colors"
        >
          <ArrowLeft size={20} />
          Back to all projects
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-10/30 to-white py-16">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="blue" size="md">
                {project.client}
              </Badge>
              <Badge size="md">{project.year}</Badge>
              {project.featured && (
                <Badge variant="green" size="md">
                  Featured
                </Badge>
              )}
            </div>

            <h1 className="text-display font-bold text-gray-90 mb-6">
              {project.title}
            </h1>

            <p className="text-h3 text-gray-70 mb-8">{project.subtitle}</p>

            <div className="flex flex-wrap gap-2">
              {project.category.map((cat) => (
                <Badge key={cat}>{cat}</Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container-premium py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-premium-lg"
        >
          {/* TODO: Replace with actual project hero image */}
          <div className="w-full h-full bg-gradient-to-br from-slalom-blue/20 to-support-purple/20 flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-gray-50 text-body-lg">
                Project hero image for
                <br />
                <strong>{project.client}</strong>
              </p>
              <p className="text-gray-30 text-body-sm mt-2">
                Replace: {project.heroImage}
              </p>
            </div>
          </div>
          {/* When you have images, uncomment this:
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
          />
          */}
        </motion.div>
      </section>

      {/* Overview */}
      <section className="container-premium py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-h4 text-gray-90 leading-relaxed">
              {project.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why / What / Wow Grid */}
      <section className="container-premium py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 h-full">
              <h2 className="text-h3 font-bold text-slalom-blue mb-4">Why</h2>
              <p className="text-body text-gray-70 leading-relaxed">
                {project.why}
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-8 h-full">
              <h2 className="text-h3 font-bold text-slalom-blue mb-4">What</h2>
              <p className="text-body text-gray-70 leading-relaxed">
                {project.what}
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8 h-full">
              <h2 className="text-h3 font-bold text-slalom-blue mb-4">Wow</h2>
              <p className="text-body text-gray-70 leading-relaxed">
                {project.wow}
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Solutions & Deliverables */}
      <section className="container-premium py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-h2 font-bold text-gray-90 mb-6">Solutions</h2>
              <p className="text-body-lg text-gray-70 leading-relaxed">
                {project.solutions}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-h2 font-bold text-gray-90 mb-6">
                Deliverables
              </h2>
              <ul className="space-y-3">
                {project.deliverables.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-body text-gray-70"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-slalom-blue flex-shrink-0 mt-0.5"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="container-premium py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-body-lg font-bold text-gray-90 mb-4">
            Technologies & methods
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Next Project */}
      {nextProject && (
        <section className="bg-gray-10/30 py-16 mt-12">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="text-body-lg text-gray-70 mb-6">Next project</p>
              <h3 className="text-h2 font-bold text-gray-90 mb-8">
                {nextProject.title}
              </h3>
              <Button href={`/work/${nextProject.slug}`} variant="primary" icon>
                View case study
              </Button>
            </motion.div>
          </div>
        </section>
      )}
    </article>
  );
}
