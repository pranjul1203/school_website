import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo and School Name */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E3A8A]">
              <GraduationCap className="h-7 w-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Scholar Mission School
              </span>
              <span className="text-xs text-gray-600">CBSE Senior Secondary</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-[#1E3A8A]'
                    : 'text-gray-700 hover:text-[#1E3A8A]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admissions"
              className="rounded-lg bg-[#16A34A] px-6 py-2.5 text-sm font-medium text-white shadow-md hover:bg-[#15803d] transition-colors"
            >
              Apply for Admission
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-[#1E3A8A]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-[#1E3A8A] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admissions"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full rounded-lg bg-[#16A34A] px-6 py-2.5 text-center text-sm font-medium text-white shadow-md hover:bg-[#15803d] transition-colors"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}