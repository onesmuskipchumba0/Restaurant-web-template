import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              Savory
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-dark hover:text-primary transition">Home</Link>
            <Link to="/menu" className="text-dark hover:text-primary transition">Menu</Link>
            <Link to="/about" className="text-dark hover:text-primary transition">About</Link>
            <Link to="/contact" className="text-dark hover:text-primary transition">Contact</Link>
            <Link to="/reservations" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition">
              Reserve Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark hover:text-primary"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-dark hover:text-primary">Home</Link>
            <Link to="/menu" className="block px-3 py-2 text-dark hover:text-primary">Menu</Link>
            <Link to="/about" className="block px-3 py-2 text-dark hover:text-primary">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-dark hover:text-primary">Contact</Link>
            <Link to="/reservations" className="block px-3 py-2 text-primary font-medium">Reserve Table</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 