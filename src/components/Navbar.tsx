import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Phone, Mail } from 'lucide-react';
import CareAndCure from '../assets/CareAndCure_Logo.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@careandcure.org</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Serving Des Plaines, Niles & Surrounding Areas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-xl border-b border-gray-100' 
          : 'bg-white shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div>
                  <img
                    src={CareAndCure}
                    alt="Care And Cure Logo"
                    className="h-19 w-14 object-contain"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Care & Cure
                </span>
                <span className="text-sm font-medium text-blue-600">
                  Empowering Communities
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1 mr-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 group ${
                      isActive(item.href)
                        ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive(item.href) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg"></div>
                    )}
                    {!isActive(item.href) && (
                      <div className="absolute inset-0 bg-blue-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </Link>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center space-x-3">
                <button className="px-6 py-3 text-gray-700 font-semibold hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300">
                  Volunteer
                </button>
                <button className="relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl"></div>
                  <div className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Donate Now
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-gray-50 border-t border-gray-200">
            <div className="px-4 py-6 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 space-y-3 border-t border-gray-200">
                <button className="w-full text-left px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-white rounded-xl font-semibold transition-all duration-300">
                  Volunteer
                </button>
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;