import React, { useState } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { TestimonialCard, VideoTestimonialModal } from '../components/common/TestimonialCard';
import { TESTIMONIALS } from '../data/testimonials';
import { Video, Star, ThumbsUp } from 'lucide-react';

export const Testimonials = () => {
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={[{ name: 'Témoignages Patients' }]} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-8 text-center max-w-3xl">
        <span className="text-xs font-bold text-[#1FA971] uppercase tracking-wider bg-emerald-100 px-3.5 py-1.5 rounded-full">
          EXPÉRIENCES VÉCUES
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mt-3 mb-3">
          TémoignagesVidéo & Retours Patients
        </h1>
        <p className="text-sm text-gray-600">
          Découvrez les réactions authentiques des patients ayant effectué des cures Zezepagnon au Bénin et à l'international.
        </p>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map(t => (
            <TestimonialCard
              key={t.id}
              testimonial={t}
              onOpenVideo={(url) => setActiveVideoUrl(url)}
            />
          ))}
        </div>
      </section>

      <VideoTestimonialModal
        videoUrl={activeVideoUrl}
        onClose={() => setActiveVideoUrl(null)}
      />
    </div>
  );
};
