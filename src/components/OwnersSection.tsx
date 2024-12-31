import React from 'react';
import { OwnerCard } from './OwnerCard';
import { teams } from '../data/teams';

export function OwnersSection() {
  return (
    <section id="owners" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Team Owners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map(team => (
            <OwnerCard 
              key={team.id} 
              owner={team.owner} 
              teamName={team.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}