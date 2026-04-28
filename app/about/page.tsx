import React from 'react';
import { ProfileHero } from '@/components/about/ProfileHero';
import { ExperienceTimeline } from '@/components/about/ExperienceTimeline';
import { PhilosophySection } from '@/components/about/PhilosophySection';
import { PageTransition } from '@/components/layout/PageTransition';

export const metadata = {
  title: 'About — Ivan Nunez',
  description:
    'Learn about Ivan Nunez, a Senior Consultant and Experience Strategist with 25+ years of experience in UX strategy, platform design, and AI prototyping.',
};

export default function AboutPage() {
  return (
    <PageTransition>
      <ProfileHero />
      <ExperienceTimeline />
      <PhilosophySection />
    </PageTransition>
  );
}
