import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, GraduationCap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <GraduationCap className="h-6 w-6 text-[#1E3A8A]" />
              </div>
              <span className="text-lg font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Scholar Mission
              </span>
            </div>
            <p className="text-sm text-blue-100 leading-relaxed">
              Committed to academic excellence, discipline, and holistic development of every student.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Faculty
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Academics
            </h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>Classes I - V (Primary)</li>
              <li>Classes VI - VIII (Middle)</li>
              <li>Classes IX - X (Secondary)</li>
              <li>Classes XI - XII (Senior)</li>
              <li>CBSE Affiliated</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-blue-200 flex-shrink-0" />
                <span className="text-sm text-blue-100">
                  Kanpur, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-blue-200 flex-shrink-0" />
                <span className="text-sm text-blue-100">
                  +91 9876543210
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-blue-200 flex-shrink-0" />
                <span className="text-sm text-blue-100">
                  info@scholarmission.edu.in
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-blue-100">
            © {new Date().getFullYear()} Scholar Mission School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}