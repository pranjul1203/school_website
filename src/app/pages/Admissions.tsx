import { Link } from 'react-router-dom';
import { FileText, Calendar, CheckCircle, Users, Phone, Mail } from 'lucide-react';

export function Admissions() {
  const process = [
    {
      step: '1',
      title: 'Submit Application',
      description: 'Fill out the admission form with required details and documents.',
    },
    {
      step: '2',
      title: 'Document Verification',
      description: 'Our team will verify submitted documents and contact you.',
    },
    {
      step: '3',
      title: 'Interaction',
      description: 'Parent-child interaction with the principal and academic coordinator.',
    },
    {
      step: '4',
      title: 'Admission Confirmation',
      description: 'Upon selection, complete the admission formalities and fee payment.',
    },
  ];

  const documents = [
    'Birth Certificate (original for verification)',
    'Passport-sized photographs (4 copies)',
    'Previous school leaving certificate (if applicable)',
    'Transfer certificate from previous school',
    'Progress report/Mark sheet of previous class',
    'Aadhar card copy of student and parents',
    'Address proof (utility bill/rent agreement)',
    'Caste certificate (if applicable)',
  ];

  const ageGroups = [
    { class: 'Class I', age: '6 years as on March 31, 2026' },
    { class: 'Class II - V', age: 'Age as per CBSE norms' },
    { class: 'Class VI - VIII', age: 'Age as per CBSE norms' },
    { class: 'Class IX', age: 'Age as per CBSE norms' },
    { class: 'Class XI', age: 'Passed Class X examination' },
  ];

  const fees = [
    { class: 'Classes I - V', amount: '₹35,000 per annum' },
    { class: 'Classes VI - VIII', amount: '₹40,000 per annum' },
    { class: 'Classes IX - X', amount: '₹45,000 per annum' },
    { class: 'Classes XI - XII', amount: '₹50,000 per annum' },
  ];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl md:text-5xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Admissions 2026-27
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Join the Scholar Mission School family and give your child the gift of quality education
          </p>
        </div>
      </section>

      {/* Admission Open Banner */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#16A34A] p-8 text-center text-white shadow-lg">
            <Calendar className="h-12 w-12 mx-auto mb-4" />
            <h2 className="mb-3 text-2xl md:text-3xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Admissions Open for Academic Year 2026-27
            </h2>
            <p className="mb-6 text-green-100 max-w-2xl mx-auto">
              Limited seats available. Apply early to secure your child's admission!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#application"
                className="inline-block rounded-lg bg-white px-8 py-3 font-medium text-[#16A34A] hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </a>
              <a
                href="#contact"
                className="inline-block rounded-lg border-2 border-white px-8 py-3 font-medium text-white hover:bg-white hover:text-[#16A34A] transition-colors"
              >
                Contact Admissions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Admission Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple and transparent admission procedure
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1E3A8A] text-white text-xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Criteria */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Age Criteria */}
            <div>
              <div className="mb-6">
                <Users className="h-10 w-10 text-[#1E3A8A] mb-4" />
                <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Age Criteria
                </h2>
                <p className="text-gray-600">
                  Minimum age requirements as per CBSE guidelines
                </p>
              </div>
              <div className="space-y-3">
                {ageGroups.map((group, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-lg bg-gray-50 p-4"
                  >
                    <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {group.class}
                      </p>
                      <p className="text-sm text-gray-600">{group.age}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents */}
            <div>
              <div className="mb-6">
                <FileText className="h-10 w-10 text-[#1E3A8A] mb-4" />
                <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Required Documents
                </h2>
                <p className="text-gray-600">
                  Please keep the following documents ready
                </p>
              </div>
              <div className="space-y-2">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#16A34A] mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">{doc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Fee Structure
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent and affordable fee structure for quality education
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl bg-white shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#1E3A8A] text-white">
                      <th className="px-6 py-4 text-left font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Class
                      </th>
                      <th className="px-6 py-4 text-left font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Annual Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {fees.map((fee, index) => (
                      <tr key={index} className="border-b border-gray-200 last:border-0">
                        <td className="px-6 py-4 text-gray-900">{fee.class}</td>
                        <td className="px-6 py-4 text-gray-900 font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {fee.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-blue-50 px-6 py-4 text-sm text-gray-600">
                <p className="mb-2">
                  <strong>Note:</strong> Fee includes tuition, examination, sports, and library charges.
                </p>
                <p>
                  Additional charges may apply for transport, uniform, and optional activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Apply for Admission
              </h2>
              <p className="text-gray-600">
                Fill out the form below to start the admission process
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-md">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="studentName" className="block text-sm text-gray-700 mb-2">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
                      placeholder="Enter student name"
                    />
                  </div>
                  <div>
                    <label htmlFor="class" className="block text-sm text-gray-700 mb-2">
                      Class Applying For *
                    </label>
                    <select
                      id="class"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
                    >
                      <option value="">Select Class</option>
                      <option value="1">Class I</option>
                      <option value="2">Class II</option>
                      <option value="3">Class III</option>
                      <option value="4">Class IV</option>
                      <option value="5">Class V</option>
                      <option value="6">Class VI</option>
                      <option value="7">Class VII</option>
                      <option value="8">Class VIII</option>
                      <option value="9">Class IX</option>
                      <option value="10">Class X</option>
                      <option value="11">Class XI</option>
                      <option value="12">Class XII</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="dob" className="block text-sm text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      id="dob"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="gender" className="block text-sm text-gray-700 mb-2">
                      Gender *
                    </label>
                    <select
                      id="gender"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="parentName" className="block text-sm text-gray-700 mb-2">
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
                    placeholder="Enter parent/guardian name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
                      placeholder="parent@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm text-gray-700 mb-2">
                    Address *
                  </label>
                  <textarea
                    id="address"
                    required
                    rows={3}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
                    placeholder="Enter complete address"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="previousSchool" className="block text-sm text-gray-700 mb-2">
                    Previous School (if any)
                  </label>
                  <input
                    type="text"
                    id="previousSchool"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
                    placeholder="Enter previous school name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
                    placeholder="Any additional information you'd like to share"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#16A34A] px-8 py-3.5 font-medium text-white shadow-lg hover:bg-[#15803d] transition-colors"
                >
                  Submit Application
                </button>

                <p className="text-xs text-gray-600 text-center">
                  By submitting this form, you agree to be contacted by Scholar Mission School regarding the admission process.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#1E3A8A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Need Help?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our admissions team is here to assist you
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="rounded-2xl bg-white p-6 shadow-md text-center">
              <Phone className="h-10 w-10 text-[#1E3A8A] mx-auto mb-4" />
              <h3 className="mb-2 text-lg text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Call Us
              </h3>
              <p className="text-sm text-gray-600">+91 9876543210</p>
              <p className="text-sm text-gray-600">Mon-Sat: 9 AM - 5 PM</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-md text-center">
              <Mail className="h-10 w-10 text-[#1E3A8A] mx-auto mb-4" />
              <h3 className="mb-2 text-lg text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Email Us
              </h3>
              <p className="text-sm text-gray-600">admissions@scholarmission.edu.in</p>
              <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-md text-center">
              <Users className="h-10 w-10 text-[#1E3A8A] mx-auto mb-4" />
              <h3 className="mb-2 text-lg text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Visit Us
              </h3>
              <p className="text-sm text-gray-600">Kanpur, Uttar Pradesh</p>
              <Link to="/contact" className="text-sm text-[#16A34A] hover:underline">
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
