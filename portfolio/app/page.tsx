import React from 'react';
import { Hero } from '@/components/home/Hero';
import { FeaturedWork } from '@/components/home/FeaturedWork';
import { QuickIntro } from '@/components/home/QuickIntro';
import { PageTransition } from '@/components/layout/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <FeaturedWork />
      <QuickIntro />
    </PageTransition>
  );
}
