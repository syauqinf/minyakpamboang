'use client';

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false); // Close mobile menu after click
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false); // Close mobile menu after click
  };

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false); // Close mobile menu after click
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 fixed w-full z-50 transition-all duration-300 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Minyak Pamboang" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <button 
              onClick={scrollToTop}
              className="text-gray-700 hover:text-red-900 transition-colors duration-200 font-medium"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('cerita')}
              className="text-gray-700 hover:text-red-900 transition-colors duration-200 font-medium"
            >
              Cerita
            </button>
            <button 
              onClick={() => scrollToSection('produk')}
              className="text-gray-700 hover:text-red-900 transition-colors duration-200 font-medium"
            >
              Produk
            </button>
            <button 
              onClick={() => scrollToSection('testimoni')}
              className="text-gray-700 hover:text-red-900 transition-colors duration-200 font-medium"
            >
              Testimoni
            </button>
            <button 
              onClick={() => scrollToSection('bantuan')}
              className="text-gray-700 hover:text-red-900 transition-colors duration-200 font-medium"
            >
              FAQ
            </button>
            <button 
              onClick={scrollToCTA}
              className="bg-red-900 hover:bg-red-800 text-white px-8 py-3 rounded-xl transition-all duration-200 font-medium shadow-sm hover:shadow-md"
            >
              Pesan Sekarang
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-xl text-gray-700 hover:text-red-900 hover:bg-gray-50 focus:outline-none transition-all duration-200"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-6 space-y-4">
            <button 
              onClick={scrollToTop}
              className="block w-full px-4 py-4 rounded-xl text-lg font-medium text-gray-700 hover:text-red-900 hover:bg-gray-50 transition-all duration-200 text-left"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('cerita')}
              className="block w-full px-4 py-4 rounded-xl text-lg font-medium text-gray-700 hover:text-red-900 hover:bg-gray-50 transition-all duration-200 text-left"
            >
              Cerita
            </button>
            <button 
              onClick={() => scrollToSection('produk')}
              className="block w-full px-4 py-4 rounded-xl text-lg font-medium text-gray-700 hover:text-red-900 hover:bg-gray-50 transition-all duration-200 text-left"
            >
              Produk
            </button>
            <button 
              onClick={() => scrollToSection('testimoni')}
              className="block w-full px-4 py-4 rounded-xl text-lg font-medium text-gray-700 hover:text-red-900 hover:bg-gray-50 transition-all duration-200 text-left"
            >
              Testimoni
            </button>
            <button 
              onClick={() => scrollToSection('bantuan')}
              className="block w-full px-4 py-4 rounded-xl text-lg font-medium text-gray-700 hover:text-red-900 hover:bg-gray-50 transition-all duration-200 text-left"
            >
              FAQ
            </button>
            <button 
              onClick={scrollToCTA}
              className="w-full mt-6 bg-red-900 hover:bg-red-800 text-white px-6 py-4 rounded-xl transition-all duration-200 font-medium shadow-md"
            >
              Pesan Sekarang
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;