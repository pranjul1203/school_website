import { Link } from 'react-router-dom';
import { BookOpen, Beaker, Calculator, Globe, Music, Palette, Trophy, Languages } from 'lucide-react';

export function Academics() {
  const programs = [
    {
      title: 'Primary (Classes I - V)',
      description: 'Foundation years focusing on basic literacy, numeracy, and social skills development.',
      features: ['Interactive learning', 'Activity-based teaching', 'Foundational concepts', 'Creative arts'],
    },
    {
      title: 'Middle School (Classes VI - VIII)',
      description: 'Bridging the gap between primary and secondary education with comprehensive curriculum.',
      features: ['Subject specialization', 'Practical learning', 'Skill development', 'Life skills education'],
    },
    {
      title: 'Secondary (Classes IX - X)',
      description: 'Preparing students for board examinations with focused academic guidance.',
      features: ['Board exam preparation', 'Career counseling', 'Competitive coaching', 'Comprehensive syllabus'],
    },
    {
      title: 'Senior Secondary (Classes XI - XII)',
      description: 'Stream-based education preparing students for higher studies and professional careers.',
      features: ['Science/Commerce/Arts', 'College preparation', 'Advanced concepts', 'Research projects'],
    },
  ];

  const subjects = [
    {
      icon: Calculator,
      title: 'Mathematics',
      description: 'Problem-solving and analytical thinking',
    },
    {
      icon: Beaker,
      title: 'Science',
      description: 'Physics, Chemistry, and Biology',
    },
    {
      icon: Languages,
      title: 'Languages',
      description: 'English, Hindi, and Sanskrit',
    },
    {
      icon: Globe,
      title: 'Social Studies',
      description: 'History, Geography, and Civics',
    },
    {
      icon: Music,
      title: 'Arts & Music',
      description: 'Creative expression and culture',
    },
    {
      icon: Trophy,
      title: 'Physical Education',
      description: 'Sports and fitness activities',
    },
  ];

  const cocurricular = [
    'Science Exhibitions',
    'Math Olympiads',
    'Debate Competitions',
    'Cultural Programs',
    'Sports Events',
    'Art & Craft Workshops',
    'Music & Dance Classes',
    'Community Service',
  ];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl md:text-5xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Academics
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            A comprehensive CBSE curriculum designed to foster academic excellence and holistic development
          </p>
        </div>
      </section>

      {/* CBSE Affiliation */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1654366698665-e6d611a9aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2OTk5NjEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students studying"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1E3A8A]/10">
                <BookOpen className="h-7 w-7 text-[#1E3A8A]" />
              </div>
              <h2 className="mb-6 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                CBSE Curriculum
              </h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Scholar Mission School follows the Central Board of Secondary Education (CBSE) curriculum, recognized nationwide for its comprehensive and balanced approach to education.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Our academic program emphasizes conceptual understanding, critical thinking, and practical application of knowledge, preparing students for both board examinations and real-world challenges.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We integrate modern teaching methods, digital resources, and experiential learning to make education engaging and effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Academic Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Age-appropriate curriculum from primary to senior secondary levels
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {programs.map((program, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="mb-3 text-xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {program.title}
                </h3>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#16A34A]"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Subject Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive subject offerings across all disciplines
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1E3A8A]/10">
                  <subject.icon className="h-7 w-7 text-[#1E3A8A]" />
                </div>
                <h3 className="mb-2 text-lg text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {subject.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {subject.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-curricular Activities */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Co-Curricular Activities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond the classroom - activities that enrich learning and develop diverse skills
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {cocurricular.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg bg-gray-50 p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16A34A]/10 flex-shrink-0">
                      <Palette className="h-5 w-5 text-[#16A34A]" />
                    </div>
                    <span className="text-gray-700">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] p-8 md:p-12 text-white">
            <div className="max-w-3xl">
              <h2 className="mb-6 text-3xl md:text-4xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Teaching Methodology
              </h2>
              <div className="space-y-4 text-blue-100 leading-relaxed">
                <p>
                  At Scholar Mission School, we employ a student-centered approach that combines traditional wisdom with modern pedagogical techniques.
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#16A34A] mt-2 flex-shrink-0"></div>
                    <span>Interactive and engaging classroom sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#16A34A] mt-2 flex-shrink-0"></div>
                    <span>Hands-on experiments and practical demonstrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#16A34A] mt-2 flex-shrink-0"></div>
                    <span>Digital learning tools and smart classrooms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#16A34A] mt-2 flex-shrink-0"></div>
                    <span>Regular assessments and personalized feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#16A34A] mt-2 flex-shrink-0"></div>
                    <span>Project-based learning and group activities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Excellence in Education Awaits
          </h2>
          <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
            Join us to experience a curriculum that nurtures minds and builds futures
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
