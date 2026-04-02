import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Star, 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight
} from 'lucide-react';

interface Program {
  title: string;
  description: string;
  category: string;
  color: string;
}

type AgeGroup = 'Child' | 'Seniors';

const Homepage: React.FC = () => {
  const [selectedAge, setSelectedAge] = useState<AgeGroup>('Child');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const ageGroups: AgeGroup[] = ['Child', 'Seniors'];
  
  const programs: Record<AgeGroup, Program[]> = {
    'Child': [
      {
        title: 'Kids Coding Workshop',
        description: 'Learn programming fundamentals through Scratch and create your first interactive games and animations. Perfect for young coders!',
        category: 'Together Lab',
        color: 'bg-green-100 text-green-800'
      },
      {
        title: 'STEM Robotics Club',
        description: 'Build and program robots using LEGO Mindstorms. Work in teams to solve challenges and compete in robotics competitions.',
        category: 'Together Lab',
        color: 'bg-blue-100 text-blue-800'
      },
      {
        title: 'Python for Kids',
        description: 'Advanced coding class for children ready to learn real programming languages. Create games, animations, and simple applications.',
        category: 'Together Lab',
        color: 'bg-purple-100 text-purple-800'
      }
    ],
    'Seniors': [
      {
        title: 'Senior Digital Literacy',
        description: 'Patient, one-on-one tech instruction designed for seniors. Learn smartphones, tablets, email, and social media at your own pace.',
        category: 'AgeWell Lab',
        color: 'bg-amber-100 text-amber-800'
      },
      {
        title: 'Senior Computer Skills',
        description: 'Learn essential computer skills including Windows, creating documents, internet browsing, and file management with step-by-step guidance.',
        category: 'AgeWell Lab',
        color: 'bg-teal-100 text-teal-800'
      },
      {
        title: 'Video Calling & Connection',
        description: 'Stay connected with family and friends through video calls. Learn Zoom, Skype, and FaceTime to maintain meaningful relationships.',
        category: 'AgeWell Lab',
        color: 'bg-pink-100 text-pink-800'
      }
    ]
  };

  const events = [
    {
      id: '1',
      date: { month: 'Jan', day: '15' },
      title: 'Kids Coding Workshop',
      time: '10:00 AM - 11:30 AM',
      location: 'Computer Lab',
      type: 'In-person session',
      audience: 'Child',
      tags: ['Together Lab']
    },
    {
      id: '2',
      date: { month: 'Jan', day: '11' },
      title: 'Senior Digital Literacy',
      time: '2:00 PM - 3:00 PM',
      location: 'Computer Lab',
      type: 'In-person session',
      audience: 'Seniors',
      tags: ['AgeWell Lab']
    },
    {
      id: '4',
      date: { month: 'Jan', day: '12' },
      title: 'STEM Robotics Club',
      time: '4:00 PM - 5:30 PM',
      location: 'STEM Lab',
      type: 'In-person session',
      audience: 'Child',
      tags: ['Together Lab']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white pt-12 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Headline */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-black tracking-tight">
              <span className="text-lime-400 font-black text-6xl md:text-7xl lg:text-8xl inline-block transform -rotate-12 mr-2">#</span>
              <span className="font-bold">Empowering Generations,</span>
              <span className="text-orange-500 text-4xl md:text-5xl lg:text-6xl inline-block ml-2">🔥</span>
              <br />
              <span className="font-bold">Building </span>
              <span className="bg-blue-500 text-white px-6 py-3 rounded-2xl inline-block transform -rotate-2 shadow-lg">
                Futures
              </span>
            </h1>
          </div>
          
          {/* Main curved background container */}
          <div className="relative">
            <div className="bg-gradient-to-br from-lime-300 via-lime-200 to-yellow-300 rounded-t-[3rem] rounded-b-[3rem] p-8 relative overflow-hidden shadow-2xl">
              {/* Red decorative element on right */}
              <div className="absolute top-0 right-0 w-20 h-32 bg-red-400 rounded-bl-full shadow-lg"></div>
              
              {/* Community image with enhanced decorations */}
              <div className="relative">
                {/* Left side decorative elements */}
                <div className="absolute -top-6 -left-6 z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg flex items-center justify-center transform -rotate-12">
                    <span className="text-white text-xl">💻</span>
                  </div>
                </div>
                
                <div className="absolute top-12 -left-4 z-10">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg flex items-center justify-center">
                    <span className="text-white text-sm">🤖</span>
                  </div>
                </div>
                
                <div className="absolute top-32 -left-8 z-10">
                  <div className="w-6 h-6 bg-purple-400 rounded-full shadow-lg"></div>
                </div>
                
                <div className="absolute bottom-20 -left-3 z-10">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-lg flex items-center justify-center transform rotate-12">
                    <span className="text-white">🎓</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 left-8 z-10">
                  <div className="w-7 h-7 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center">
                    <span className="text-sm">⭐</span>
                  </div>
                </div>
                
                {/* Additional floating shapes for left side */}
                <div className="absolute top-6 left-12 w-4 h-4 bg-pink-400 transform rotate-45 shadow-lg z-10"></div>
                <div className="absolute bottom-12 left-20 w-5 h-5 bg-teal-400 rounded-full shadow-lg z-10"></div>
                <div className="absolute top-24 left-4 w-3 h-3 bg-red-400 rounded-full shadow-lg z-10"></div>
                
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                  alt="Diverse group of learners in a bright learning space" 
                  className="w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover rounded-2xl shadow-xl"
                />
                
                {/* Enhanced Welcome Box with Friendly Shapes */}
                <div className="hidden sm:block absolute -bottom-12 -right-12 z-20">
                  {/* Decorative shapes around the box */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full shadow-lg"></div>
                  <div className="absolute -top-2 right-4 w-6 h-6 bg-pink-400 rounded-full shadow-lg"></div>
                  <div className="absolute -bottom-2 -left-6 w-4 h-4 bg-blue-400 rounded-full shadow-lg"></div>
                  <div className="absolute top-2 -right-2 w-5 h-5 bg-green-400 rounded-full shadow-lg"></div>

                  {/* Main welcome box */}
                  <div className="relative bg-white rounded-3xl p-6 shadow-2xl max-w-sm border-4 border-orange-200 transform rotate-1">
                    {/* Speech bubble pointer */}
                    <div className="absolute -left-3 top-8 w-6 h-6 bg-white border-l-4 border-b-4 border-orange-200 transform rotate-45"></div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>

                      <p className="text-lg font-bold text-gray-900 leading-tight">
                        Welcome to Minds and Actions, where children learn STEM and seniors master technology!
                        <span className="text-2xl ml-2">🚀</span>
                      </p>

                      <p className="text-sm text-gray-700 leading-relaxed">
                        Discover coding workshops, robotics clubs, digital literacy programs, and tech support-bridging generations through learning and innovation.
                      </p>

                      {/* Fun decorative elements inside box */}
                      <div className="flex justify-between items-center pt-2">
                        <div className="flex space-x-2">
                          <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">🧒 Kids</span>
                          <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded-full">👴 Seniors</span>
                        </div>
                        <div className="text-orange-500 text-xl">💡</div>
                      </div>
                    </div>
                  </div>

                  {/* Additional floating shapes for friendliness */}
                  <div className="absolute -top-8 left-12 w-3 h-3 bg-purple-400 transform rotate-45"></div>
                  <div className="absolute bottom-4 -right-8 w-6 h-6 bg-orange-300 transform rotate-12"></div>
                </div>

                {/* Mobile welcome box - inline, not overlapping */}
                <div className="sm:hidden mt-4 bg-white rounded-2xl p-4 shadow-lg border-2 border-orange-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <p className="text-base font-bold text-gray-900 leading-tight mb-2">
                    Welcome to Minds and Actions! 🚀
                  </p>
                  <div className="flex space-x-2">
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">🧒 Kids</span>
                    <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded-full">👴 Seniors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Orange decorative curve at bottom left */}
          <div className="relative">
            <div className="absolute -top-2 left-0 w-24 h-12 bg-orange-400 rounded-tr-full shadow-lg"></div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="pt-16 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Orange curved section */}
          <div className="bg-gradient-to-br from-yellow-200 to-orange-200 rounded-t-[2.5rem] rounded-b-[2.5rem] p-8 text-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Explore What We Offer</h2>
              <p className="max-w-2xl mx-auto text-base text-gray-700 leading-relaxed">
                The Minds and Actions Learning Center offers specialized programs for children and seniors. From hands-on STEM 
                workshops and coding classes for kids to patient digital literacy and computer skills training for seniors. 
                Our volunteer-led programs build confidence, practical skills, and meaningful connections across generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Foundational Growth Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Learning together" 
                className="w-full h-80 object-cover rounded-3xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Generational Learning</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Minds and Actions bridges the digital divide by offering tailored programs for both ends of the age spectrum. 
                Children explore STEM through coding and robotics while seniors gain confidence with technology and digital communication.
              </p>
            </div>
          </div>

          {/* Age Group Selection */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <div className="flex bg-gray-100 rounded-full p-1 space-x-1">
                {ageGroups.map((age) => (
                  <button
                    key={age}
                    onClick={() => setSelectedAge(age)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedAge === age
                        ? 'bg-blue-500 text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>

            {/* Program Categories */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {selectedAge === 'Child' 
                ? ['Together Lab'].map((category) => (
                    <span key={category} className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {category}
                    </span>
                  ))
                : ['AgeWell Lab'].map((category) => (
                    <span key={category} className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                      {category}
                    </span>
                  ))
              }
            </div>

            {/* Program Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {programs[selectedAge].map((program, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="space-y-4">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${program.color}`}>
                      {program.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{program.description}</p>
                    <button className="flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors">
                      Read more <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-blue-500 rounded transform rotate-45"></div>
              <div className="w-6 h-6 bg-teal-500 rounded transform -rotate-12"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Upcoming Events</h2>
          </div>

          <div className="space-y-6">
            {events.map((event, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => navigate(`/event/${event.id}`)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <div className="text-center shrink-0">
                      <div className="text-sm font-medium text-gray-600 uppercase">{event.date.month}</div>
                      <div className="text-2xl font-bold text-gray-900">{event.date.day}</div>
                    </div>

                    <div className="space-y-2 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">{event.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 shrink-0" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4 shrink-0" />
                          <span>{event.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4 shrink-0" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:flex-col sm:text-right items-center sm:items-end justify-between sm:justify-start gap-2 sm:gap-1 sm:shrink-0">
                    <div className="flex flex-wrap gap-1 sm:justify-end">
                      <span className="text-sm font-medium text-gray-900">{event.audience}</span>
                      {event.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Click indicator */}
                    <div className="flex items-center space-x-1 text-blue-600 text-xs shrink-0">
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Get Help */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-white fill-current" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 text-center">
                    Get <span className="text-orange-500">support</span> and<br />
                    find <span className="text-orange-500">programs</span>.
                  </h3>
                  
                  <div className="space-y-3 text-center">
                    <button className="block w-full font-semibold text-gray-900 hover:text-orange-500 transition-colors">
                      Contact Us
                    </button>
                    <button className="block w-full text-gray-600 hover:text-gray-900 transition-colors">
                      Browse Programs
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Join Community */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 text-center">
                    Join our<br />
                    <span className="text-green-500">Community</span>
                  </h3>
                  
                  <p className="text-gray-600 text-center">Find a program that fits your age group</p>
                  <p className="text-sm text-gray-500 text-center">Subscribe for program updates and events</p>
                  
                  <div className="flex space-x-2 max-w-sm mx-auto">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm"
                    />
                    <button className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium text-sm">
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage; 