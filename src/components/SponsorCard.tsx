import React from 'react';
import type { Sponsor } from '../data/sponsors';

interface SponsorCardProps {
  sponsor: Sponsor;
}

export function SponsorCard({ sponsor }: SponsorCardProps) {
  const getBadgeColor = (type: Sponsor['type']) => {
    switch (type) {
      case 'title':
        return 'bg-purple-100 text-purple-800';
      case 'platinum':
        return 'bg-gray-100 text-gray-800';
      case 'gold':
        return 'bg-yellow-100 text-yellow-800';
      case 'silver':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={sponsor.logo} 
          alt={sponsor.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">{sponsor.name}</h3>
          <span className={`text-sm font-semibold px-3 py-1 rounded-full capitalize ${getBadgeColor(sponsor.type)}`}>
            {sponsor.type}
          </span>
        </div>
        <p className="text-gray-600">{sponsor.description}</p>
      </div>
    </div>
  );
}