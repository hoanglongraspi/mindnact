import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Activity Center', href: '/activity-center' },
    { name: 'Calendar', href: '/calendar' },
    { name: 'News', href: '/news' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 text-white">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
              </div>
              <span className="text-xl font-bold text-gray-900">Minds and Actions</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`transition-colors ${
                    location.pathname === item.href
                      ? 'text-purple-600 font-medium'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
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