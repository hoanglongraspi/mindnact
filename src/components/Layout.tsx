import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, ChevronDown, Code2, GraduationCap, Menu, X } from 'lucide-react';



interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuredOpen, setFeaturedOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Activity Center', href: '/activity-center' },
    { name: 'Calendar', href: '/calendar' },
    { name: 'News', href: '/news' },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setFeaturedOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 text-white">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
                  </svg>
                </div>
              </div>
              <span className="text-xl font-bold text-gray-900">Minds and Actions</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`transition-colors py-2 ${location.pathname === item.href
                    ? 'text-purple-600 font-medium'
                    : 'text-gray-700 hover:text-purple-600'
                    }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Featured Program Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors py-2"
                >
                  <span>Featured Program</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 w-80 mt-0 origin-top-right bg-white border border-gray-100 rounded-2xl shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-300 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50 overflow-hidden">
                  <div className="p-2 space-y-1">
                    <a
                      href="https://turing.mindnact.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/item flex items-start p-4 rounded-xl transition-all duration-200 hover:bg-purple-50"
                    >
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4 group-hover/item:bg-purple-600 transition-colors shrink-0">
                        <Code2 className="w-5 h-5 text-purple-600 group-hover/item:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900 group-hover/item:text-purple-600 transition-colors">
                          WNY Turing Challenge
                        </div>
                        <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                          Youth competition in coding and creative problem solving.
                        </div>
                      </div>
                    </a>

                    <a
                      href="https://bira.mindnact.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/item flex items-start p-4 rounded-xl transition-all duration-200 hover:bg-blue-50"
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover/item:bg-blue-600 transition-colors shrink-0">
                        <GraduationCap className="w-5 h-5 text-blue-600 group-hover/item:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900 group-hover/item:text-blue-600 transition-colors">
                          Buffalo Innovation Research Academy
                        </div>
                        <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                          Pre-college research and innovation excellence.
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

              </div>

            </nav>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className={`block px-3 py-2 rounded-lg text-base transition-colors ${location.pathname === item.href
                    ? 'text-purple-600 font-medium bg-purple-50'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-gray-100'
                    }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Featured Program accordion */}
              <div>
                <button
                  onClick={() => setFeaturedOpen(!featuredOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-base text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <span>Featured Program</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${featuredOpen ? 'rotate-180' : ''}`} />
                </button>
                {featuredOpen && (
                  <div className="mt-1 ml-3 space-y-1">
                    <a
                      href="https://turing.mindnact.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-purple-50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                        <Code2 className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">WNY Turing Challenge</div>
                        <div className="text-xs text-gray-500">Youth coding competition</div>
                      </div>
                    </a>
                    <a
                      href="https://bira.mindnact.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                        <GraduationCap className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Buffalo Innovation Research Academy</div>
                        <div className="text-xs text-gray-500">Pre-college research program</div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center transform rotate-12">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Minds and Actions</span>
              </div>
              <p className="text-sm text-gray-600">
                Empowering children and seniors through STEM education, digital literacy, and community connection.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Navigate</h4>
              <div className="space-y-2">
                <Link to="/" className="block text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
                <Link to="/activity-center" className="block text-gray-600 hover:text-gray-900 transition-colors">Activity Center</Link>
                <Link to="/calendar" className="block text-gray-600 hover:text-gray-900 transition-colors">Calendar</Link>
                <Link to="/news" className="block text-gray-600 hover:text-gray-900 transition-colors">News</Link>
                {/* <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">About Us</a> */}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Programs</h4>
              <div className="space-y-2">
                <a href="https://turing.mindnact.org/" target="_blank" rel="noopener noreferrer" className="block text-purple-600 font-medium hover:text-purple-700 transition-colors">WNY Turing Challenge</a>
                <a href="https://bira.mindnact.org/" target="_blank" rel="noopener noreferrer" className="block text-purple-600 font-medium hover:text-purple-700 transition-colors mb-4">Buffalo Innovation Research Academy</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Kids Coding Workshop</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">STEM Robotics Club</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Python for Kids</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Senior Digital Literacy</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Senior Tech Hour</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Community</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Volunteer With Us</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Donate</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              </div>
              <div className="text-sm text-gray-500 pt-4">
                © 2025 Minds and Actions — All Rights Reserved
              </div>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 