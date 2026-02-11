import { Link } from 'react-router-dom';
import { Library, FlaskConical, Monitor, Trophy, Bus, Utensils, Shield, Droplets } from 'lucide-react';

export function Facilities() {
  const facilities = [
    {
      icon: Library,
      title: 'Modern Library',
      description: 'Extensive collection of books, journals, and digital resources to support learning and research.',
      image: 'https://images.unsplash.com/photo-1767356326735-2da0a10cf1f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwY2hpbGRyZW58ZW58MXx8fHwxNzcwMDA4MDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['10,000+ books', 'Digital library access', 'Reading rooms', 'Study spaces'],
    },
    {
      icon: FlaskConical,
      title: 'Science Laboratories',
      description: 'Well-equipped labs for Physics, Chemistry, and Biology with modern apparatus and safety equipment.',
      image: 'https://images.unsplash.com/photo-1694351075627-ed3aeacdc417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzY2llbmNlJTIwbGFifGVufDF8fHx8MTc2OTk4Nzg4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Separate labs for each subject', 'Latest equipment', 'Safety measures', 'Hands-on experiments'],
    },
    {
      icon: Monitor,
      title: 'Computer Labs',
      description: 'State-of-the-art computer labs with high-speed internet and latest software for digital literacy.',
      image: 'https://images.unsplash.com/photo-1719159381981-1327b22aff9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjb21wdXRlciUyMGxhYnxlbnwxfHx8fDE3Njk5NTE4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['50+ computers', 'High-speed internet', 'Coding classes', 'Smart boards'],
    },
    {
      icon: Trophy,
      title: 'Sports Complex',
      description: 'Comprehensive sports facilities including playgrounds, courts, and equipment for various sports.',
      image: 'https://images.unsplash.com/photo-1674573228894-3d8c97e9a394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzcG9ydHMlMjBwbGF5Z3JvdW5kfGVufDF8fHx8MTc2OTkyOTk2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Cricket ground', 'Basketball court', 'Volleyball court', 'Indoor games room'],
    },
  ];

  const additionalFacilities = [
    {
      icon: Bus,
      title: 'Transport',
      description: 'Safe and reliable school bus service covering major areas of Kanpur with GPS tracking.',
    },
    {
      icon: Utensils,
      title: 'Cafeteria',
      description: 'Hygienic cafeteria serving nutritious and delicious meals and snacks.',
    },
    {
      icon: Shield,
      title: 'Security',
      description: '24/7 security with CCTV surveillance ensuring a safe learning environment.',
    },
    {
      icon: Droplets,
      title: 'Medical Room',
      description: 'Well-equipped medical room with trained staff for health emergencies.',
    },
  ];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl md:text-5xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Facilities
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            World-class infrastructure designed to provide the best learning environment
          </p>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1E3A8A]/10">
                    <facility.icon className="h-7 w-7 text-[#1E3A8A]" />
                  </div>
                  <h3 className="mb-4 text-2xl md:text-3xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {facility.title}
                  </h3>
                  <p className="mb-6 text-gray-700 leading-relaxed">
                    {facility.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {facility.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-[#16A34A]"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Facilities */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Additional Amenities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Supporting facilities that ensure a safe and comfortable learning experience
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {additionalFacilities.map((facility, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1E3A8A]/10">
                  <facility.icon className="h-7 w-7 text-[#1E3A8A]" />
                </div>
                <h3 className="mb-2 text-lg text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {facility.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Classrooms */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] p-8 md:p-12 text-white overflow-hidden">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 text-3xl md:text-4xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Smart Classrooms
                </h2>
                <p className="mb-4 text-blue-100 leading-relaxed">
                  All our classrooms are equipped with smart boards, projectors, and audio-visual aids to make learning interactive and engaging.
                </p>
                <p className="mb-6 text-blue-100 leading-relaxed">
                  Teachers use multimedia presentations, educational videos, and digital content to enhance understanding and make complex concepts easier to grasp.
                </p>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#16A34A]"></div>
                    Interactive smart boards in every classroom
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#16A34A]"></div>
                    High-quality projectors and audio systems
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#16A34A]"></div>
                    Access to digital learning resources
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#16A34A]"></div>
                    Air-conditioned and well-ventilated rooms
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1654366698665-e6d611a9aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2OTk5NjEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Smart classroom"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Infrastructure Highlights
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key features that make our campus stand out
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#16A34A] mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Spacious Campus
                      </h4>
                      <p className="text-sm text-gray-600">
                        5-acre campus with green spaces and modern buildings
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#16A34A] mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Disabled-Friendly
                      </h4>
                      <p className="text-sm text-gray-600">
                        Ramps and elevators for accessibility
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#16A34A] mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Power Backup
                      </h4>
                      <p className="text-sm text-gray-600">
                        Uninterrupted power supply for all facilities
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#16A34A] mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Water Purification
                      </h4>
                      <p className="text-sm text-gray-600">
                        RO water systems throughout the campus
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#16A34A] mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Wi-Fi Campus
                      </h4>
                      <p className="text-sm text-gray-600">
                        High-speed internet access across campus
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#16A34A] mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Parking Facility
                      </h4>
                      <p className="text-sm text-gray-600">
                        Ample parking space for parents and staff
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Visit Our Campus
          </h2>
          <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
            Experience our world-class facilities firsthand. Schedule a campus tour today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block rounded-lg bg-[#1E3A8A] px-8 py-4 font-medium text-white shadow-lg hover:bg-[#1E3A8A]/90 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/admissions"
              className="inline-block rounded-lg bg-[#16A34A] px-8 py-4 font-medium text-white shadow-lg hover:bg-[#15803d] transition-colors"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
