import React from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Logo />
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#teams" className="hover:text-blue-200 transition">Teams</a>
            <a href="#owners" className="hover:text-blue-200 transition">Owners</a>
            <a href="#schedule" className="hover:text-blue-200 transition">Schedule</a>
            <a href="#sponsors" className="hover:text-blue-200 transition">Sponsors</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#teams" className="block hover:text-blue-200 transition">Teams</a>
            <a href="#owners" className="block hover:text-blue-200 transition">Owners</a>
            <a href="#schedule" className="block hover:text-blue-200 transition">Schedule</a>
            <a href="#sponsors" className="block hover:text-blue-200 transition">Sponsors</a>
          </div>
        )}
      </nav>
    </header>
  );
}