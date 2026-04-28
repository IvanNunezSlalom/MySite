import React from 'react';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/lib/projects';
import { ProjectDetail } from '@/components/work/ProjectDetail';
import { PageTransition } from '@/components/layout/PageTransition';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} — ${project.client} — Ivan Nunez`,
    description: project.overview,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Get next project for navigation
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <PageTransition>
      <ProjectDetail project={project} nextProject={nextProject} />
    </PageTransition>
  );
}
