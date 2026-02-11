import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl md:text-5xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Contact Us
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Get in touch with us. We're here to help and answer any questions you may have
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Get in Touch
              </h2>
              <p className="mb-8 text-gray-700 leading-relaxed">
                Have a question about admissions, academics, or anything else? We'd love to hear from you. Our team is ready to assist you.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E3A8A]/10 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#1E3A8A]" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Address
                    </h3>
                    <p className="text-gray-600">
                      Scholar Mission School<br />
                      Kanpur, Uttar Pradesh<br />
                      India - 208001
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E3A8A]/10 flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#1E3A8A]" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Phone
                    </h3>
                    <p className="text-gray-600">
                      +91 9876543210<br />
                      +91 9876543211
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E3A8A]/10 flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#1E3A8A]" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Email
                    </h3>
                    <p className="text-gray-600">
                      info@scholarmission.edu.in<br />
                      admissions@scholarmission.edu.in
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E3A8A]/10 flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#1E3A8A]" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Office Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 4:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="mb-4 text-lg text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A8A]/10 hover:bg-[#1E3A8A] hover:text-white transition-colors text-[#1E3A8A]"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A8A]/10 hover:bg-[#1E3A8A] hover:text-white transition-colors text-[#1E3A8A]"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A8A]/10 hover:bg-[#1E3A8A] hover:text-white transition-colors text-[#1E3A8A]"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A8A]/10 hover:bg-[#1E3A8A] hover:text-white transition-colors text-[#1E3A8A]"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-md">
                <h3 className="mb-6 text-2xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
                    >
                      <option value="">Select a subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="academics">Academic Information</option>
                      <option value="facilities">Facilities</option>
                      <option value="transport">Transport</option>
                      <option value="general">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#16A34A] px-8 py-3.5 font-medium text-white shadow-lg hover:bg-[#15803d] transition-colors"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-gray-600 text-center">
                    We'll respond to your inquiry within 24-48 hours
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Find Us on Map
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Kanpur, easily accessible from all parts of the city
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-[16/9] bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-16 w-16 text-[#1E3A8A] mx-auto mb-4" />
                <p className="text-gray-600 mb-4">
                  Scholar Mission School<br />
                  Kanpur, Uttar Pradesh, India
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-[#1E3A8A] px-6 py-3 font-medium text-white hover:bg-[#1E3A8A]/90 transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Quick Access
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore more about our school
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            <Link
              to="/about"
              className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <h3 className="mb-2 text-lg text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                About Us
              </h3>
              <p className="text-sm text-gray-600">
                Learn about our history and values
              </p>
            </Link>
            <Link
              to="/academics"
              className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <h3 className="mb-2 text-lg text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Academics
              </h3>
              <p className="text-sm text-gray-600">
                Explore our curriculum
              </p>
            </Link>
            <Link
              to="/faculty"
              className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <h3 className="mb-2 text-lg text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Faculty
              </h3>
              <p className="text-sm text-gray-600">
                Meet our teachers
              </p>
            </Link>
            <Link
              to="/facilities"
              className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <h3 className="mb-2 text-lg text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Facilities
              </h3>
              <p className="text-sm text-gray-600">
                View our infrastructure
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF]">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl md:text-4xl text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Join Us?
          </h2>
          <p className="mb-8 text-lg text-blue-100 max-w-2xl mx-auto">
            Schedule a campus visit or start your admission application today
          </p>
          <Link
            to="/admissions"
            className="inline-block rounded-lg bg-[#16A34A] px-8 py-4 font-medium text-white shadow-lg hover:bg-[#15803d] transition-colors"
          >
            Apply for Admission
          </Link>
        </div>
      </section>
    </div>
  );
}