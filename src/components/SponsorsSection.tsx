import React from 'react';
import { SponsorCard } from './SponsorCard';
import { sponsors } from '../data/sponsors';

export function SponsorsSection() {
  const titleSponsors = sponsors.filter(s => s.type === 'title');
  const otherSponsors = sponsors.filter(s => s.type !== 'title');

  return (
    <section id="sponsors" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Sponsors</h2>
        
        {/* Title Sponsors */}
        {titleSponsors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-8">Title Sponsor</h3>
            <div className="max-w-2xl mx-auto">
              {titleSponsors.map(sponsor => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} />
              ))}
            </div>
          </div>
        )}

        {/* Other Sponsors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherSponsors.map(sponsor => (
            <SponsorCard key={sponsor.id} sponsor={sponsor} />
          ))}
        </div>
      </div>
    </section>
  );
}