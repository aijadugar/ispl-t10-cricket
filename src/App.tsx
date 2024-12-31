import React from 'react';
import { Trophy, Calendar, Users, Award } from 'lucide-react';
import { Header } from './components/Header';
import { TeamCard } from './components/TeamCard';
import { OwnersSection } from './components/OwnersSection';
import { SponsorsSection } from './components/SponsorsSection';
import { Logo } from './components/Logo';
import { teams } from './data/teams';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Welcome to ISPL Cricket</h1>
            <p className="text-xl mb-8">Experience the thrill of India's newest cricket sensation with six powerhouse teams battling for glory.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition">
              View Schedule
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4">
              <Trophy className="w-12 h-12 text-blue-600" />
              <div>
                <h3 className="text-2xl font-bold">6</h3>
                <p className="text-gray-600">Teams</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Calendar className="w-12 h-12 text-blue-600" />
              <div>
                <h3 className="text-2xl font-bold">30</h3>
                <p className="text-gray-600">Matches</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Users className="w-12 h-12 text-blue-600" />
              <div>
                <h3 className="text-2xl font-bold">120+</h3>
                <p className="text-gray-600">Players</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Award className="w-12 h-12 text-blue-600" />
              <div>
                <h3 className="text-2xl font-bold">₹10Cr</h3>
                <p className="text-gray-600">Prize Pool</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section id="teams" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Teams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map(team => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>
        </div>
      </section>

      {/* Owners Section */}
      <OwnersSection />

      {/* Sponsors Section */}
      <SponsorsSection />

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Logo />
              <p className="text-blue-200 mt-4">The future of cricket entertainment</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#teams" className="text-blue-200 hover:text-white">Teams</a></li>
                <li><a href="#owners" className="text-blue-200 hover:text-white">Owners</a></li>
                <li><a href="#schedule" className="text-blue-200 hover:text-white">Schedule</a></li>
                <li><a href="#sponsors" className="text-blue-200 hover:text-white">Sponsors</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-blue-200">
                <li>Email: info@isplcricket.in</li>
                <li>Phone: +91 XXX XXX XXXX</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {/* Add social media icons */}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-200">
            <p>&copy; 2024 ISPL Cricket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;