import React from 'react';
import { ContactForm } from '@/components/contact/ContactForm';
import { PageTransition } from '@/components/layout/PageTransition';

export const metadata = {
  title: 'Contact — Ivan Nunez',
  description:
    'Get in touch with Ivan Nunez to discuss UX strategy, platform design, or collaboration opportunities.',
};

export default function ContactPage() {
  return (
    <PageTransition>
      <ContactForm />
    </PageTransition>
  );
}
