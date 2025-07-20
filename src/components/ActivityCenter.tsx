import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  Filter,
  Star,
  ChevronRight,
  Phone,
  Mail,
  Heart,
  HandHeart,
  Gift
} from 'lucide-react';

interface Program {
  id: string;
  title: string;
  description: string;
  category: string;
  ageGroup: string[];
  duration: string;
  schedule: string;
  location: string;
  instructor: string;
  capacity: number;
  enrolled: number;
  price: string;
  image: string;
  tags: string[];
  nextSession: string;
  status: 'Open' | 'Waitlist' | 'Full';
  isVolunteerLed?: boolean;
}

const ActivityCenter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAge, setSelectedAge] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const categories = ['All', 'Digital Literacy', 'Life Skills', 'Creative Arts', 'Career Support', 'Health & Wellness', 'Community Building'];
  const ageGroups = ['All', 'Youth (6-17)', 'Adult (18-64)', 'Senior (65+)', 'All Ages'];

  const programs: Program[] = [
    {
      id: '1',
      title: 'Free Resume & Job Search Support',
      description: 'Volunteer career coaches help community members create professional resumes and develop job search skills. Individual and group sessions available.',
      category: 'Career Support',
      ageGroup: ['Adult (18-64)'],
      duration: '1.5 hours',
      schedule: 'Saturdays 10:00 AM - 11:30 AM',
      location: 'Community Center Room A',
      instructor: 'Volunteer Career Coaches',
      capacity: 12,
      enrolled: 9,
      price: 'Free',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Resume', 'Job Search', 'Career', 'Free'],
      nextSession: 'June 15, 2024',
      status: 'Open',
      isVolunteerLed: true
    },
    {
      id: '2',
      title: 'Senior Digital Literacy Program',
      description: 'Patient, one-on-one instruction for seniors learning smartphones, email, video calls, and online safety. Funded by community donations.',
      category: 'Digital Literacy',
      ageGroup: ['Senior (65+)'],
      duration: '1 hour',
      schedule: 'Tuesdays & Fridays 2:00 PM - 3:00 PM',
      location: 'Computer Lab',
      instructor: 'Linda Thompson, Tech Volunteer',
      capacity: 8,
      enrolled: 8,
      price: 'Free',
      image: 'https://images.pexels.com/photos/4545962/pexels-photo-4545962.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Technology', 'Seniors', 'Digital Safety', 'Free'],
      nextSession: 'June 11, 2024',
      status: 'Waitlist',
      isVolunteerLed: true
    },
    {
      id: '3',
      title: 'Community Art & Creative Expression',
      description: 'Free art workshops for all ages using donated supplies. Painting, drawing, crafts, and creative projects that bring our community together.',
      category: 'Creative Arts',
      ageGroup: ['All Ages'],
      duration: '2 hours',
      schedule: 'Saturdays 1:00 PM - 3:00 PM',
      location: 'Art Studio',
      instructor: 'Maria Santos, Art Therapist (Volunteer)',
      capacity: 15,
      enrolled: 12,
      price: 'Free',
      image: 'https://images.pexels.com/photos/8613261/pexels-photo-8613261.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Art', 'Creative', 'Family', 'Free'],
      nextSession: 'June 15, 2024',
      status: 'Open',
      isVolunteerLed: true
    },
    {
      id: '4',
      title: 'Youth Leadership & Life Skills',
      description: 'Mentorship program for teens focusing on leadership, financial literacy, college prep, and life skills. Scholarships available.',
      category: 'Life Skills',
      ageGroup: ['Youth (6-17)'],
      duration: '1.5 hours',
      schedule: 'Wednesdays 4:00 PM - 5:30 PM',
      location: 'Youth Center',
      instructor: 'James Rodriguez, Youth Coordinator',
      capacity: 20,
      enrolled: 16,
      price: 'Free',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Leadership', 'Youth', 'Mentorship', 'Free'],
      nextSession: 'June 12, 2024',
      status: 'Open'
    },
    {
      id: '5',
      title: 'English Conversation Circle',
      description: 'Welcoming space for non-native English speakers to practice conversation skills with volunteer tutors and community members.',
      category: 'Community Building',
      ageGroup: ['Adult (18-64)', 'Senior (65+)'],
      duration: '1.5 hours',
      schedule: 'Thursdays 6:00 PM - 7:30 PM',
      location: 'Main Hall',
      instructor: 'Community Volunteers',
      capacity: 25,
      enrolled: 18,
      price: 'Free',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['English', 'Community', 'Language', 'Free'],
      nextSession: 'June 13, 2024',
      status: 'Open',
      isVolunteerLed: true
    },
    {
      id: '6',
      title: 'Financial Wellness Workshop',
      description: 'Learn budgeting, saving, and financial planning. Sliding scale donations welcome but never required. Materials provided.',
      category: 'Life Skills',
      ageGroup: ['Adult (18-64)'],
      duration: '2 hours',
      schedule: 'First Saturday of each month, 9:00 AM - 11:00 AM',
      location: 'Community Center Room B',
      instructor: 'Sarah Chen, Certified Financial Counselor',
      capacity: 15,
      enrolled: 11,
      price: 'Donation-based',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Financial', 'Budgeting', 'Life Skills', 'Donation'],
      nextSession: 'July 6, 2024',
      status: 'Open'
    },
    {
      id: '7',
      title: 'Community Garden & Nutrition',
      description: 'Learn gardening, healthy cooking, and nutrition education. Harvest shared with local food bank. All supplies provided.',
      category: 'Health & Wellness',
      ageGroup: ['All Ages'],
      duration: '2 hours',
      schedule: 'Saturdays 8:00 AM - 10:00 AM',
      location: 'Community Garden',
      instructor: 'Dr. Emma Davis, Volunteer Nutritionist',
      capacity: 20,
      enrolled: 14,
      price: 'Free',
      image: 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Gardening', 'Nutrition', 'Health', 'Free'],
      nextSession: 'June 15, 2024',
      status: 'Open',
      isVolunteerLed: true
    },
    {
      id: '8',
      title: 'Basic Computer Skills',
      description: 'Introduction to computers, internet, and digital skills for beginners. Equipment provided through grants and donations.',
      category: 'Digital Literacy',
      ageGroup: ['Adult (18-64)', 'Senior (65+)'],
      duration: '1.5 hours',
      schedule: 'Mondays & Wednesdays 10:00 AM - 11:30 AM',
      location: 'Computer Lab',
      instructor: 'Tech Volunteers',
      capacity: 10,
      enrolled: 8,
      price: 'Free',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Technology', 'Basic Skills', 'Digital', 'Free'],
      nextSession: 'June 10, 2024',
      status: 'Open',
      isVolunteerLed: true
    }
  ];

  const filteredPrograms = programs.filter(program => {
    const matchesCategory = selectedCategory === 'All' || program.category === selectedCategory;
    const matchesAge = selectedAge === 'All' || program.ageGroup.includes(selectedAge);
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesAge && matchesSearch;
  });

  const renderProgramCard = (program: Program) => (
    <div 
      key={program.id}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105"
      onClick={() => setSelectedProgram(program.id)}
    >
      <div className="relative">
        <img 
          src={program.image} 
          alt={program.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            program.status === 'Open' ? 'bg-green-100 text-green-800' :
            program.status === 'Waitlist' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {program.status}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          <div className={`bg-white rounded-lg px-2 py-1 flex items-center space-x-1 ${
            program.price === 'Free' ? 'bg-green-50 border border-green-200' : 'bg-blue-50 border border-blue-200'
          }`}>
            {program.price === 'Free' && <Heart className="w-3 h-3 text-green-600" />}
            <span className={`text-sm font-semibold ${
              program.price === 'Free' ? 'text-green-700' : 'text-blue-700'
            }`}>
              {program.price}
            </span>
          </div>
          {program.isVolunteerLed && (
            <div className="bg-purple-50 border border-purple-200 rounded-lg px-2 py-1 flex items-center space-x-1">
              <HandHeart className="w-3 h-3 text-purple-600" />
              <span className="text-xs font-medium text-purple-700">Volunteer-led</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            program.category === 'Creative Arts' ? 'bg-purple-100 text-purple-800' :
            program.category === 'Digital Literacy' ? 'bg-blue-100 text-blue-800' :
            program.category === 'Community Building' ? 'bg-green-100 text-green-800' :
            program.category === 'Career Support' ? 'bg-orange-100 text-orange-800' :
            program.category === 'Health & Wellness' ? 'bg-pink-100 text-pink-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {program.category}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2">{program.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{program.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{program.schedule}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{program.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            <span>{program.enrolled}/{program.capacity} participants</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">{program.instructor}</span>
          <button className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            program.status === 'Open' ? 'bg-blue-600 text-white hover:bg-blue-700' :
            program.status === 'Waitlist' ? 'bg-yellow-600 text-white hover:bg-yellow-700' :
            'bg-gray-400 text-white cursor-not-allowed'
          }`}>
            {program.status === 'Open' ? 'Sign Up' : 
             program.status === 'Waitlist' ? 'Join Waitlist' : 'Full'}
          </button>
        </div>
      </div>
    </div>
  );

  const renderProgramDetail = (programId: string) => {
    const program = programs.find(p => p.id === programId);
    if (!program) return null;

    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative h-64">
          <img 
            src={program.image} 
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 flex space-x-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              program.status === 'Open' ? 'bg-green-100 text-green-800' :
              program.status === 'Waitlist' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {program.status}
            </span>
            {program.isVolunteerLed && (
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 flex items-center space-x-1">
                <HandHeart className="w-4 h-4" />
                <span>Volunteer-led</span>
              </span>
            )}
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => setSelectedProgram(null)}
              className="text-blue-600 hover:text-blue-700 flex items-center space-x-1"
            >
              <span>← Back to programs</span>
            </button>
            <div className={`text-2xl font-bold flex items-center space-x-2 ${
              program.price === 'Free' ? 'text-green-600' : 'text-blue-600'
            }`}>
              {program.price === 'Free' && <Heart className="w-6 h-6" />}
              <span>{program.price}</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{program.title}</h1>
          <p className="text-gray-600 mb-6">{program.description}</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Program Details</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium">Schedule</div>
                    <div className="text-sm text-gray-600">{program.schedule}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-medium">Duration</div>
                    <div className="text-sm text-gray-600">{program.duration} per session</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-gray-600">{program.location}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-orange-600" />
                  <div>
                    <div className="font-medium">Participants</div>
                    <div className="text-sm text-gray-600">{program.enrolled}/{program.capacity} signed up</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {program.isVolunteerLed ? 'Volunteer Facilitator' : 'Program Leader'}
              </h3>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="font-medium text-gray-900">{program.instructor}</div>
                <div className="text-sm text-gray-600 mt-2">
                  {program.isVolunteerLed 
                    ? 'Dedicated community volunteer committed to serving our neighbors.'
                    : 'Experienced professional committed to community empowerment.'
                  }
                </div>
              </div>
              
              <div>
                <div className="font-medium mb-2">Next Session</div>
                <div className="text-lg text-blue-600 font-semibold">{program.nextSession}</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-6">
            <div className="flex items-center space-x-3 mb-3">
              <Heart className="w-6 h-6 text-green-600" />
              <h4 className="text-lg font-bold text-gray-900">Community Impact</h4>
            </div>
            <p className="text-gray-700">
              This program is made possible through community donations and volunteer support. 
              Your participation helps strengthen our entire community and creates opportunities for everyone to thrive.
            </p>
          </div>
          
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
            <div>
              <h4 className="font-bold text-gray-900">Ready to join our community?</h4>
              <p className="text-gray-600">
                {program.status === 'Open' ? `${program.capacity - program.enrolled} spots available` :
                 program.status === 'Waitlist' ? 'Join our waitlist - we\'ll notify you when space opens' :
                 'This program is currently at capacity'}
              </p>
            </div>
            <div className="flex space-x-3">
              <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Contact Us
              </button>
              <button className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                program.status === 'Open' ? 'bg-blue-600 text-white hover:bg-blue-700' :
                program.status === 'Waitlist' ? 'bg-yellow-600 text-white hover:bg-yellow-700' :
                'bg-gray-400 text-white cursor-not-allowed'
              }`}>
                {program.status === 'Open' ? 'Sign Up Now' : 
                 program.status === 'Waitlist' ? 'Join Waitlist' : 'Program Full'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (selectedProgram) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          {renderProgramDetail(selectedProgram)}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Minds and Actions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering children and seniors through STEM education and digital literacy programs. 
            Join our volunteer-led community focused on bridging the technology gap across generations.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-blue-600">{programs.length}</div>
            <div className="text-gray-600">Free Programs</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-green-600">150+</div>
            <div className="text-gray-600">Community Members Served</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-purple-600">25+</div>
            <div className="text-gray-600">Active Volunteers</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-orange-600">100%</div>
            <div className="text-gray-600">Donation-Funded</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search free programs, skills, or community services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={selectedAge}
                onChange={(e) => setSelectedAge(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                {ageGroups.map(age => (
                  <option key={age} value={age}>{age}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Program Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPrograms.map(renderProgramCard)}
        </div>

        {/* Empty State */}
        {filteredPrograms.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No programs found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedAge('All');
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Show all programs
            </button>
          </div>
        )}

        {/* Combined CTA Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-8">
          <div className="text-center">
            <div className="flex justify-center space-x-2 mb-4">
              <Heart className="w-8 h-8 text-green-600" />
              <HandHeart className="w-8 h-8 text-purple-600" />
              <Gift className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Involved in Your Community</h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              As a non-profit organization, we depend on community support to keep our programs free and accessible. 
              Whether you want to support our mission, volunteer your time, or learn more about our programs - we're here to help you get involved!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Support Our Mission</h4>
                <p className="text-gray-600 text-sm mb-4">Help us serve more neighbors and strengthen our community</p>
                <div className="flex space-x-3">
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    <Gift className="w-4 h-4" />
                    <span>Donate</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    <HandHeart className="w-4 h-4" />
                    <span>Volunteer</span>
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Connect With Us</h4>
                <p className="text-gray-600 text-sm mb-4">Have questions or want to learn more about our programs?</p>
                <div className="flex space-x-3">
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>Call Us</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>Email Us</span>
                  </button>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600">
              Every donation and volunteer hour helps us create opportunities for everyone to thrive together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCenter; 