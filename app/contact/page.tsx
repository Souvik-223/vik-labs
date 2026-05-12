import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — VikLabs',
  description: 'Start a project with VikLabs. We reply within 12 hours.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT · Q3 2026 OPEN"
        title={<>Tell us what <span className="dim">you&apos;re trying to</span> <span className="acc">make true</span>.</>}
        lede="Three lines or three paragraphs — both work. We read every message and reply within 12 hours with whether we can help, and how."
      />
      <ContactForm />
    </>
  );
}
