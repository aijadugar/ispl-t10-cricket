import React from 'react';
import type { TeamOwner } from '../data/teams';

interface OwnerCardProps {
  owner: TeamOwner;
  teamName: string;
}

export function OwnerCard({ owner, teamName }: OwnerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
      <div className="flex flex-col items-center text-center">
        <img 
          src={owner.image} 
          alt={owner.name}
          className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-600"
        />
        <h3 className="text-xl font-bold mb-1">{owner.name}</h3>
        <p className="text-blue-600 font-semibold mb-2">{teamName}</p>
        <p className="text-gray-600">{owner.company}</p>
      </div>
    </div>
  );
}