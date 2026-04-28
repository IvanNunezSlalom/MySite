'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Project } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`}>
      <Card hover className="overflow-hidden h-full group">
        {/* Project Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slalom-blue/10 to-support-purple/10">
          {/* TODO: Replace with actual project thumbnails */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center p-6">
              <p className="text-gray-50 text-body">
                {project.client}
                <br />
                Thumbnail
              </p>
            </div>
          </div>
          {/* When you have images, uncomment this:
          <Image
            src={project.thumbnailImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          */}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-90/80 via-gray-90/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              className="flex items-center gap-2 text-white"
            >
              <span className="font-medium">View case study</span>
              <ArrowRight size={20} />
            </motion.div>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="blue">{project.client}</Badge>
            {project.featured && <Badge variant="green">Featured</Badge>}
          </div>

          <h3 className="text-h4 font-bold text-gray-90 mb-2 group-hover:text-slalom-blue transition-colors">
            {project.title}
          </h3>

          <p className="text-body text-gray-70 mb-4 line-clamp-2">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.category.slice(0, 2).map((cat) => (
              <Badge key={cat} variant="default" size="sm">
                {cat}
              </Badge>
            ))}
            {project.category.length > 2 && (
              <Badge variant="default" size="sm">
                +{project.category.length - 2}
              </Badge>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
