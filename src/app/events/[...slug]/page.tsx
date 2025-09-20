// ===============================
// FILE: src/app/events/[slug]/page.tsx
// ===============================
import { events } from '@/data/events';
import Conference from '@/features/conference/Conference';
import { notFound } from 'next/navigation';

export default function Page({ params }: { params: { slug: string } }) {
  const event = events[params.slug];
  if (!event) return notFound();
  return <Conference event={event} />;
}
