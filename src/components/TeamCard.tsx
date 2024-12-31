import React from 'react';
import type { Team } from '../data/teams';

interface TeamCardProps {
  team: Team;
}

export function TeamCard({ team }: TeamCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={team.logo} 
          alt={team.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">{team.name}</h3>
          <span 
            className="text-sm font-semibold px-3 py-1 rounded-full"
            style={{ backgroundColor: team.color, color: '#fff' }}
          >
            {team.shortName}
          </span>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-600">Owner</h4>
          <div className="flex items-center mt-2">
            <img 
              src={team.owner.image} 
              alt={team.owner.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="ml-3">
              <p className="font-medium">{team.owner.name}</p>
              <p className="text-sm text-gray-500">{team.owner.company}</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-600 mb-2">Key Players</h4>
          <div className="flex -space-x-2">
            {team.players.slice(0, 4).map((player, index) => (
              <img 
                key={index}
                src={player.image}
                alt={player.name}
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
                title={`${player.name} - ${player.role}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}