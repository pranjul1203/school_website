import { useState } from 'react';
import { Search, GraduationCap, Award, BookOpen, X } from 'lucide-react';

interface Teacher {
  id: number;
  name: string;
  photo: string;
  subject: string;
  qualification: string;
  experience: number;
  achievement: string;
  department: 'Primary' | 'Middle School' | 'Secondary' | 'Senior Secondary';
  bio: string;
  specializations: string[];
  awards: string[];
  email?: string;
}

export function Faculty() {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const [selectedSubject, setSelectedSubject] = useState<string>('All');

  const teachers: Teacher[] = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      subject: 'Mathematics',
      qualification: 'Ph.D. in Mathematics, M.Sc., B.Ed.',
      experience: 18,
      achievement: 'National Math Olympiad Coach',
      department: 'Senior Secondary',
      bio: 'Dr. Rajesh Kumar brings 18 years of teaching excellence to our senior mathematics program. His innovative teaching methods have helped hundreds of students excel in competitive exams and board examinations.',
      specializations: ['Calculus', 'Algebra', 'Competitive Math Preparation', 'IIT-JEE Coaching'],
      awards: ['Best Teacher Award 2023', 'Excellence in Mathematics Education 2021', 'National Math Olympiad Coach Certification'],
      email: 'rajesh.kumar@scholarmission.edu.in',
    },
    {
      id: 2,
      name: 'Mrs. Priya Sharma',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      subject: 'English',
      qualification: 'M.A. English, B.Ed.',
      experience: 15,
      achievement: 'Published Author & Literary Expert',
      department: 'Secondary',
      bio: 'Mrs. Priya Sharma is passionate about literature and language. Her engaging teaching style and deep knowledge of English literature inspire students to develop a love for reading and writing.',
      specializations: ['English Literature', 'Creative Writing', 'Grammar & Composition', 'Public Speaking'],
      awards: ['Outstanding English Teacher 2022', 'Published Author - Educational Books', 'Best Communicator Award 2020'],
      email: 'priya.sharma@scholarmission.edu.in',
    },
    {
      id: 3,
      name: 'Dr. Sunita Verma',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      subject: 'Physics',
      qualification: 'Ph.D. in Physics, M.Sc., B.Ed.',
      experience: 20,
      achievement: 'CBSE Resource Person for Physics',
      department: 'Senior Secondary',
      bio: 'Dr. Sunita Verma is a renowned physics educator with expertise in making complex concepts accessible to students. She has been a CBSE resource person and examiner for over a decade.',
      specializations: ['Modern Physics', 'Mechanics', 'Electronics', 'Practical Lab Work'],
      awards: ['CBSE Resource Person Certification', 'Best Science Teacher 2024', 'Research Publication Award'],
      email: 'sunita.verma@scholarmission.edu.in',
    },
    {
      id: 4,
      name: 'Mr. Anil Gupta',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      subject: 'Chemistry',
      qualification: 'M.Sc. Chemistry, B.Ed.',
      experience: 12,
      achievement: 'Excellence in Lab-Based Learning',
      department: 'Secondary',
      bio: 'Mr. Anil Gupta believes in hands-on learning and conducts innovative practical sessions that make chemistry come alive for students. His students consistently score high in board examinations.',
      specializations: ['Organic Chemistry', 'Inorganic Chemistry', 'Laboratory Techniques', 'Environmental Chemistry'],
      awards: ['Innovation in Teaching Award 2023', 'Safe Lab Practices Certification', 'Student Favorite Teacher 2022'],
      email: 'anil.gupta@scholarmission.edu.in',
    },
    {
      id: 5,
      name: 'Mrs. Meera Patel',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      subject: 'Biology',
      qualification: 'M.Sc. Botany, B.Ed.',
      experience: 14,
      achievement: 'Environmental Education Specialist',
      department: 'Senior Secondary',
      bio: 'Mrs. Meera Patel integrates environmental awareness with biology education. Her field trips and eco-club activities have won several state-level recognitions.',
      specializations: ['Botany', 'Ecology', 'Human Biology', 'Environmental Science'],
      awards: ['Green Teacher Award 2023', 'Best Biology Educator 2021', 'Environmental Champion Recognition'],
      email: 'meera.patel@scholarmission.edu.in',
    },
    {
      id: 6,
      name: 'Mr. Vikram Singh',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      subject: 'Social Studies',
      qualification: 'M.A. History, B.Ed.',
      experience: 16,
      achievement: 'Heritage & Culture Expert',
      department: 'Middle School',
      bio: 'Mr. Vikram Singh brings history to life through storytelling and interactive sessions. His passion for Indian heritage and culture inspires students to appreciate their roots.',
      specializations: ['Indian History', 'World History', 'Geography', 'Civics'],
      awards: ['Cultural Heritage Educator 2022', 'Outstanding Social Studies Teacher 2020', 'Historical Research Award'],
      email: 'vikram.singh@scholarmission.edu.in',
    },
    {
      id: 7,
      name: 'Mrs. Kavita Joshi',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      subject: 'Hindi',
      qualification: 'M.A. Hindi, B.Ed.',
      experience: 13,
      achievement: 'Hindi Literature Scholar',
      department: 'Secondary',
      bio: 'Mrs. Kavita Joshi is dedicated to promoting Hindi language and literature. Her creative teaching methods help students appreciate the beauty and richness of Hindi.',
      specializations: ['Hindi Literature', 'Grammar', 'Poetry', 'Creative Writing'],
      awards: ['Hindi Sevi Samman 2023', 'Best Hindi Teacher 2021', 'Literary Excellence Award'],
      email: 'kavita.joshi@scholarmission.edu.in',
    },
    {
      id: 8,
      name: 'Mr. Rahul Desai',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      subject: 'Computer Science',
      qualification: 'M.Tech. Computer Science, B.Ed.',
      experience: 10,
      achievement: 'Coding & Robotics Expert',
      department: 'Senior Secondary',
      bio: 'Mr. Rahul Desai brings industry experience to the classroom. His focus on practical coding skills and emerging technologies prepares students for the digital future.',
      specializations: ['Programming', 'Web Development', 'Artificial Intelligence', 'Robotics'],
      awards: ['Tech Educator of the Year 2024', 'Coding Competition Mentor Award', 'Innovation in IT Education'],
      email: 'rahul.desai@scholarmission.edu.in',
    },
    {
      id: 9,
      name: 'Mrs. Anjali Kapoor',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      subject: 'Primary Teacher',
      qualification: 'B.Ed., Diploma in Early Childhood Education',
      experience: 11,
      achievement: 'Child Psychology Specialist',
      department: 'Primary',
      bio: 'Mrs. Anjali Kapoor specializes in early childhood education and creates a nurturing, fun learning environment for young learners. Her patient and caring approach helps children develop confidence.',
      specializations: ['Early Literacy', 'Numeracy Skills', 'Child Development', 'Activity-Based Learning'],
      awards: ['Best Primary Teacher 2023', 'Child-Friendly Educator Award', 'Excellence in Early Education'],
      email: 'anjali.kapoor@scholarmission.edu.in',
    },
    {
      id: 10,
      name: 'Mr. Suresh Yadav',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      subject: 'Physical Education',
      qualification: 'M.P.Ed., National Sports Coach',
      experience: 17,
      achievement: 'State-Level Athletics Coach',
      department: 'Secondary',
      bio: 'Mr. Suresh Yadav has trained multiple students who have represented the state in various sports competitions. His holistic approach to physical education emphasizes fitness, discipline, and sportsmanship.',
      specializations: ['Athletics', 'Cricket', 'Basketball', 'Fitness Training'],
      awards: ['Best Sports Coach 2024', 'State Athletics Trainer Certification', 'Youth Sports Development Award'],
      email: 'suresh.yadav@scholarmission.edu.in',
    },
    {
      id: 11,
      name: 'Mrs. Deepa Sharma',
      photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      subject: 'Art & Craft',
      qualification: 'M.F.A., Diploma in Art Education',
      experience: 9,
      achievement: 'Award-Winning Artist',
      department: 'Middle School',
      bio: 'Mrs. Deepa Sharma is a professional artist who nurtures creativity in students. Her art classes go beyond textbooks, encouraging students to express themselves through various mediums.',
      specializations: ['Painting', 'Sculpture', 'Craft Work', 'Digital Art'],
      awards: ['Creative Arts Educator 2023', 'National Art Exhibition Winner', 'Best Art Teacher 2022'],
      email: 'deepa.sharma@scholarmission.edu.in',
    },
    {
      id: 12,
      name: 'Mr. Amit Malhotra',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      subject: 'Commerce',
      qualification: 'M.Com., CA (Intermediate), B.Ed.',
      experience: 14,
      achievement: 'Commerce & Accountancy Expert',
      department: 'Senior Secondary',
      bio: 'Mr. Amit Malhotra combines real-world business knowledge with academic excellence. His practical approach to commerce education helps students understand economic principles and business practices.',
      specializations: ['Accountancy', 'Business Studies', 'Economics', 'Financial Literacy'],
      awards: ['Excellence in Commerce Education 2023', 'CA Coaching Excellence Award', 'Best Commerce Teacher 2021'],
      email: 'amit.malhotra@scholarmission.edu.in',
    },
  ];

  // Get unique subjects and departments for filters
  const subjects = ['All', ...Array.from(new Set(teachers.map(t => t.subject)))];
  const departments = ['All', 'Primary', 'Middle School', 'Secondary', 'Senior Secondary'];

  // Filter teachers based on search and filters
  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || teacher.department === selectedDepartment;
    const matchesSubject = selectedSubject === 'All' || teacher.subject === selectedSubject;
    
    return matchesSearch && matchesDepartment && matchesSubject;
  });

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl md:text-5xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Faculty
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Meet our dedicated and experienced teaching professionals committed to your child's success
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b border-gray-200 py-8 sticky top-20 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {/* Search */}
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2.5 text-sm focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
              />
            </div>

            {/* Department Filter */}
            <div>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            {/* Subject Filter */}
            <div>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters Display */}
          {(searchTerm || selectedDepartment !== 'All' || selectedSubject !== 'All') && (
            <div className="mt-4 flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-600">Active filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#1E3A8A]/10 px-3 py-1 text-sm text-[#1E3A8A]">
                  Search: "{searchTerm}"
                  <button onClick={() => setSearchTerm('')} className="hover:text-[#1E3A8A]/70">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {selectedDepartment !== 'All' && (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#1E3A8A]/10 px-3 py-1 text-sm text-[#1E3A8A]">
                  {selectedDepartment}
                  <button onClick={() => setSelectedDepartment('All')} className="hover:text-[#1E3A8A]/70">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {selectedSubject !== 'All' && (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#1E3A8A]/10 px-3 py-1 text-sm text-[#1E3A8A]">
                  {selectedSubject}
                  <button onClick={() => setSelectedSubject('All')} className="hover:text-[#1E3A8A]/70">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredTeachers.length > 0 ? (
            <>
              <div className="mb-8 text-center">
                <p className="text-gray-600">
                  Showing {filteredTeachers.length} {filteredTeachers.length === 1 ? 'teacher' : 'teachers'}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredTeachers.map((teacher) => (
                  <div
                    key={teacher.id}
                    className="group rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Teacher Photo */}
                    <div className="mb-4 overflow-hidden rounded-xl">
                      <img
                        src={teacher.photo}
                        alt={teacher.name}
                        className="aspect-square w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Teacher Info */}
                    <div className="mb-4">
                      <h3 className="mb-1 text-lg text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {teacher.name}
                      </h3>
                      <p className="mb-2 text-sm font-medium text-[#1E3A8A]">
                        {teacher.subject}
                      </p>
                      <p className="mb-2 text-xs text-gray-600">
                        {teacher.qualification}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <GraduationCap className="h-3.5 w-3.5" />
                          {teacher.experience} years
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-[#16A34A]">
                        <Award className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                        <span>{teacher.achievement}</span>
                      </div>
                    </div>

                    {/* View Profile Button */}
                    <button
                      onClick={() => setSelectedTeacher(teacher)}
                      className="w-full rounded-lg bg-[#16A34A] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#15803d] transition-colors"
                    >
                      View Profile
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="mb-2 text-xl text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                No teachers found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Teacher Detail Modal */}
      {selectedTeacher && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedTeacher(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Left Column - Photo and Basic Info */}
                <div className="lg:col-span-1">
                  <div className="overflow-hidden rounded-2xl mb-6">
                    <img
                      src={selectedTeacher.photo}
                      alt={selectedTeacher.name}
                      className="w-full object-cover aspect-square"
                    />
                  </div>
                  <div className="rounded-xl bg-gray-50 p-4 space-y-3">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Subject</p>
                      <p className="text-sm font-medium text-[#1E3A8A]">{selectedTeacher.subject}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Department</p>
                      <p className="text-sm font-medium text-gray-900">{selectedTeacher.department}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Experience</p>
                      <p className="text-sm font-medium text-gray-900">{selectedTeacher.experience} years</p>
                    </div>
                    {selectedTeacher.email && (
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Email</p>
                        <p className="text-sm text-[#16A34A] break-all">{selectedTeacher.email}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column - Detailed Info */}
                <div className="lg:col-span-2">
                  <h2 className="mb-2 text-3xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {selectedTeacher.name}
                  </h2>
                  <p className="mb-6 text-lg font-medium text-gray-700">
                    {selectedTeacher.subject} Teacher
                  </p>

                  {/* Academic Qualifications */}
                  <div className="mb-6">
                    <h3 className="mb-3 text-lg text-gray-900 flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      <GraduationCap className="h-5 w-5 text-[#1E3A8A]" />
                      Academic Qualifications
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedTeacher.qualification}
                    </p>
                  </div>

                  {/* Professional Bio */}
                  <div className="mb-6">
                    <h3 className="mb-3 text-lg text-gray-900 flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      <BookOpen className="h-5 w-5 text-[#1E3A8A]" />
                      About
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedTeacher.bio}
                    </p>
                  </div>

                  {/* Specializations */}
                  <div className="mb-6">
                    <h3 className="mb-3 text-lg text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Teaching Specializations
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedTeacher.specializations.map((spec, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-[#1E3A8A]/10 px-3 py-1.5 text-sm text-[#1E3A8A]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Awards and Achievements */}
                  <div>
                    <h3 className="mb-3 text-lg text-gray-900 flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      <Award className="h-5 w-5 text-[#16A34A]" />
                      Awards & Achievements
                    </h3>
                    <ul className="space-y-2">
                      {selectedTeacher.awards.map((award, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#16A34A] mt-2 flex-shrink-0"></div>
                          <span>{award}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Why Our Teachers Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Why Our Teachers Make a Difference
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our faculty members are the heart of Scholar Mission School
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1E3A8A]/10 mx-auto">
                <GraduationCap className="h-7 w-7 text-[#1E3A8A]" />
              </div>
              <h3 className="mb-2 text-lg text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Highly Qualified
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                All our teachers hold advanced degrees and specialized teaching certifications in their respective fields.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1E3A8A]/10 mx-auto">
                <Award className="h-7 w-7 text-[#1E3A8A]" />
              </div>
              <h3 className="mb-2 text-lg text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Experienced Professionals
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                With an average of 14+ years of teaching experience, our faculty brings proven expertise to the classroom.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#16A34A]/10 mx-auto">
                <BookOpen className="h-7 w-7 text-[#16A34A]" />
              </div>
              <h3 className="mb-2 text-lg text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Dedicated Mentors
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Beyond academics, our teachers serve as mentors, guiding students in their personal and professional growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
