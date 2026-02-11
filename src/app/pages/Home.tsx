import { Link } from 'react-router-dom';
import { BookOpen, Award, Users, Heart, Library, FlaskConical, Trophy, Monitor, Quote } from 'lucide-react';

export function Home() {
  const features = [
    {
      icon: BookOpen,
      title: 'CBSE Curriculum',
      description: 'Comprehensive CBSE syllabus with modern teaching methods',
    },
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Proven track record of outstanding board results',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced teaching staff',
    },
    {
      icon: Heart,
      title: 'Holistic Development',
      description: 'Focus on moral values, discipline, and character building',
    },
  ];

  const facilities = [
    {
      icon: Library,
      title: 'Modern Library',
      image: 'https://images.unsplash.com/photo-1767356326735-2da0a10cf1f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwY2hpbGRyZW58ZW58MXx8fHwxNzcwMDA4MDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: FlaskConical,
      title: 'Science Labs',
      image: 'https://images.unsplash.com/photo-1694351075627-ed3aeacdc417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzY2llbmNlJTIwbGFifGVufDF8fHx8MTc2OTk4Nzg4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Trophy,
      title: 'Sports Ground',
      image: 'https://images.unsplash.com/photo-1674573228894-3d8c97e9a394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzcG9ydHMlMjBwbGF5Z3JvdW5kfGVufDF8fHx8MTc2OTkyOTk2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Monitor,
      title: 'Computer Labs',
      image: 'https://images.unsplash.com/photo-1719159381981-1327b22aff9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjb21wdXRlciUyMGxhYnxlbnwxfHx8fDE3Njk5NTE4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const testimonials = [
    {
      name: 'Mrs. Priya Sharma',
      role: 'Parent of Class X Student',
      content: 'Scholar Mission School has transformed my child\'s life. The teachers are dedicated and the environment is truly nurturing.',
    },
    {
      name: 'Mr. Rajesh Kumar',
      role: 'Parent of Class XII Student',
      content: 'The school\'s focus on both academics and character building is commendable. Our daughter has grown tremendously here.',
    },
    {
      name: 'Mrs. Anjali Verma',
      role: 'Parent of Class VIII Student',
      content: 'Excellent facilities and a caring faculty. We couldn\'t have chosen a better school for our son\'s education.',
    },
  ];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Welcome to<br />
                <span className="text-[#16A34A]">Scholar Mission School</span>
              </h1>
              <p className="mb-4 text-lg text-blue-100 leading-relaxed">
                CBSE Senior Secondary School
              </p>
              <p className="mb-8 text-base text-blue-50 leading-relaxed max-w-xl">
                Empowering young minds through academic excellence, moral values, and holistic development. Located in Kanpur, Uttar Pradesh.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admissions"
                  className="inline-block rounded-lg bg-[#16A34A] px-8 py-3.5 text-center font-medium text-white shadow-lg hover:bg-[#15803d] transition-colors"
                >
                  Apply for Admission
                </Link>
                <Link
                  to="/about"
                  className="inline-block rounded-lg border-2 border-white px-8 py-3.5 text-center font-medium text-white hover:bg-white hover:text-[#1E3A8A] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1603958956194-cf9718dba4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMG1vZGVybnxlbnwxfHx8fDE3Njk5NzI3NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="School Building"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what makes Scholar Mission School the right choice for your child's education
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1E3A8A]/10">
                  <feature.icon className="h-7 w-7 text-[#1E3A8A]" />
                </div>
                <h3 className="mb-2 text-lg text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmluY2lwYWwlMjB3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzAwMDgwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Principal"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <div className="mb-4">
                <Quote className="h-10 w-10 text-[#16A34A]" />
              </div>
              <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Principal's Message
              </h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                At Scholar Mission School, we believe in nurturing not just academically excellent students, but well-rounded individuals who are prepared to face the challenges of tomorrow with confidence and integrity.
              </p>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Our dedicated faculty, state-of-the-art facilities, and holistic approach to education ensure that every child receives the guidance and support they need to reach their full potential.
              </p>
              <div className="mb-6">
                <p className="font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Dr. Sunita Mehta
                </p>
                <p className="text-sm text-gray-600">Principal, Scholar Mission School</p>
              </div>
              <Link
                to="/faculty"
                className="inline-block rounded-lg border-2 border-[#1E3A8A] px-6 py-3 font-medium text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-colors"
              >
                Meet Our Faculty
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Preview Section */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Facilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              World-class infrastructure designed to provide the best learning experience
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <facility.icon className="h-6 w-6 mb-2" />
                  <h3 className="text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {facility.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/facilities"
              className="inline-block rounded-lg bg-[#1E3A8A] px-8 py-3 font-medium text-white hover:bg-[#1E3A8A]/90 transition-colors"
            >
              View All Facilities
            </Link>
          </div>
        </div>
      </section>

      {/* Parent Testimonials Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              What Parents Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our parent community about their experience
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <Quote className="h-8 w-8 text-[#16A34A] mb-4" />
                <p className="mb-6 text-gray-700 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl md:text-4xl text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Join Our Community?
          </h2>
          <p className="mb-8 text-lg text-blue-100 max-w-2xl mx-auto">
            Give your child the gift of quality education. Admissions are now open for the academic year 2026-27.
          </p>
          <Link
            to="/admissions"
            className="inline-block rounded-lg bg-[#16A34A] px-8 py-4 font-medium text-white shadow-lg hover:bg-[#15803d] transition-colors"
          >
            Apply Now for Admission
          </Link>
        </div>
      </section>
    </div>
  );
}