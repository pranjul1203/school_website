import { Link } from 'react-router-dom';
import { Target, Eye, Award, BookOpen, Users, Heart } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for the highest standards in academics and character',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Building strong moral values and ethical principles',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Fostering a supportive and inclusive learning environment',
    },
    {
      icon: BookOpen,
      title: 'Innovation',
      description: 'Embracing modern teaching methods and technology',
    },
  ];

  const achievements = [
    { number: '500+', label: 'Happy Students' },
    { number: '98%', label: 'Board Results' },
    { number: '30+', label: 'Expert Teachers' },
    { number: '15+', label: 'Years of Excellence' },
  ];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl md:text-5xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            About Us
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Learn more about our school's history, vision, and commitment to excellence
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1603958956194-cf9718dba4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMG1vZGVybnxlbnwxfHx8fDE3Njk5NzI3NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="School Building"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="mb-6 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Scholar Mission School
              </h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Established with a vision to provide quality education, Scholar Mission School has been a pillar of academic excellence in Kanpur, Uttar Pradesh for over 15 years. As a CBSE-affiliated senior secondary school, we are committed to nurturing young minds and preparing them for a bright future.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Our school combines traditional values with modern teaching methodologies, ensuring that students receive a well-rounded education that prepares them for both academic success and life beyond the classroom.
              </p>
              <p className="mb-6 text-gray-700 leading-relaxed">
                With state-of-the-art facilities, experienced faculty, and a supportive learning environment, we strive to bring out the best in every student, helping them discover their unique talents and potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Vision */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1E3A8A]/10">
                <Eye className="h-7 w-7 text-[#1E3A8A]" />
              </div>
              <h3 className="mb-4 text-2xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be a leading educational institution that empowers students with knowledge, values, and skills to become responsible global citizens who contribute positively to society.
              </p>
            </div>

            {/* Mission */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#16A34A]/10">
                <Target className="h-7 w-7 text-[#16A34A]" />
              </div>
              <h3 className="mb-4 text-2xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To provide quality education through innovative teaching methods, foster moral and ethical values, promote holistic development, and create a nurturing environment where every child can thrive and excel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Scholar Mission School
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1E3A8A]/10 mx-auto">
                  <value.icon className="h-7 w-7 text-[#1E3A8A]" />
                </div>
                <h3 className="mb-2 text-lg text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Achievements
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              A legacy of excellence and success
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl md:text-5xl text-[#16A34A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {achievement.number}
                </div>
                <div className="text-blue-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Campus Life
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A glimpse into our vibrant school community
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-2xl shadow-md">
              <img
                src="https://images.unsplash.com/photo-1654366698665-e6d611a9aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2OTk5NjEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students in classroom"
                className="h-64 w-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-md">
              <img
                src="https://images.unsplash.com/photo-1543689604-6fe8dbcd1f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnRzJTIwZGl2ZXJzZXxlbnwxfHx8fDE3NzAwMDgwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy students"
                className="h-64 w-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-md">
              <img
                src="https://images.unsplash.com/photo-1767356326735-2da0a10cf1f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwY2hpbGRyZW58ZW58MXx8fHwxNzcwMDA4MDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="School library"
                className="h-64 w-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Join Our School Community
          </h2>
          <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
            Experience the difference of quality education with strong values
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
