import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Clock, MapPin, Users, CalendarIcon, Heart, HandHeart, 
  ArrowLeft, CheckCircle, AlertCircle, XCircle 
} from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  category: string;
  ageGroup: string[];
  instructor: string;
  capacity: number;
  enrolled: number;
  price: string;
  status: 'Open' | 'Waitlist' | 'Full';
  isRecurring?: boolean;
  isVolunteerLed?: boolean;
  color: string;
}

const EventDetail: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();

  // Get current date for realistic event dates
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonthNum = today.getMonth();

  // Event data (should be shared from Calendar component in real app)
  const events: Event[] = [
    {
      id: '1',
      title: 'Kids Coding Workshop',
      description: 'Introduction to programming for children using Scratch. Kids will learn the fundamentals of coding through fun, interactive games and animations. No prior experience needed - our volunteer instructors will guide each child through creating their first programs step by step.',
      date: `${currentYear}-${String(currentMonthNum + 1).padStart(2, '0')}-15`,
      time: '10:00 AM',
      duration: '1.5 hours',
      location: 'Computer Lab',
      category: 'Digital Literacy',
      ageGroup: ['Child'],
      instructor: 'Volunteer Tech Coaches',
      capacity: 12,
      enrolled: 9,
      price: 'Free',
      status: 'Open',
      isRecurring: true,
      isVolunteerLed: true,
      color: 'bg-green-100 border-green-300 text-green-800'
    },
    {
      id: '2',
      title: 'Senior Digital Literacy',
      description: 'Patient, one-on-one tech instruction designed specifically for seniors. Learn to use smartphones, tablets, email, and social media at your own pace. Our friendly volunteers understand that technology can feel overwhelming and provide gentle, encouraging guidance.',
      date: `${currentYear}-${String(currentMonthNum + 1).padStart(2, '0')}-11`,
      time: '2:00 PM',
      duration: '1 hour',
      location: 'Computer Lab',
      category: 'Digital Literacy',
      ageGroup: ['Seniors'],
      instructor: 'Linda Thompson',
      capacity: 8,
      enrolled: 8,
      price: 'Free',
      status: 'Waitlist',
      isRecurring: true,
      isVolunteerLed: true,
      color: 'bg-blue-100 border-blue-300 text-blue-800'
    },
    {
      id: '4',
      title: 'STEM Robotics Club',
      description: 'Build and program robots using LEGO Mindstorms kits. Children work in teams to construct robots and learn basic programming concepts to make them move, respond to sensors, and complete challenges. Perfect for developing problem-solving and teamwork skills.',
      date: `${currentYear}-${String(currentMonthNum + 1).padStart(2, '0')}-12`,
      time: '4:00 PM',
      duration: '1.5 hours',
      location: 'STEM Lab',
      category: 'Digital Literacy',
      ageGroup: ['Child'],
      instructor: 'James Rodriguez',
      capacity: 20,
      enrolled: 16,
      price: 'Free',
      status: 'Open',
      isRecurring: true,
      color: 'bg-green-100 border-green-300 text-green-800'
    },
    {
      id: '5',
      title: 'Senior Social Hour',
      description: 'A warm, welcoming gathering for seniors to connect over coffee and conversation. Share stories, make new friends, and enjoy community in a comfortable setting. Light refreshments provided by volunteers.',
      date: `${currentYear}-${String(currentMonthNum + 1).padStart(2, '0')}-13`,
      time: '10:00 AM',
      duration: '1.5 hours',
      location: 'Main Hall',
      category: 'Community Building',
      ageGroup: ['Seniors'],
      instructor: 'Community Volunteers',
      capacity: 25,
      enrolled: 18,
      price: 'Free',
      status: 'Open',
      isRecurring: true,
      isVolunteerLed: true,
      color: 'bg-teal-100 border-teal-300 text-teal-800'
    },
    {
      id: '7',
      title: 'Math & Science Workshop',
      description: 'Hands-on experiments and problem-solving activities that make STEM subjects exciting and accessible. Kids explore scientific concepts through fun experiments, math games, and interactive demonstrations that spark curiosity and critical thinking.',
      date: `${currentYear}-${String(currentMonthNum + 1).padStart(2, '0')}-06`,
      time: '3:00 PM',
      duration: '2 hours',
      location: 'Science Lab',
      category: 'Life Skills',
      ageGroup: ['Child'],
      instructor: 'Sarah Chen',
      capacity: 15,
      enrolled: 11,
      price: 'Free',
      status: 'Open',
      isRecurring: true,
      color: 'bg-green-100 border-green-300 text-green-800'
    },
    {
      id: '8',
      title: 'Senior Computer Skills',
      description: 'Learn essential computer skills including using Windows, creating documents, browsing the internet safely, and managing files. Classes are designed for complete beginners with patient, step-by-step instruction.',
      date: `${currentYear}-${String(currentMonthNum + 1).padStart(2, '0')}-10`,
      time: '10:00 AM',
      duration: '1.5 hours',
      location: 'Computer Lab',
      category: 'Digital Literacy',
      ageGroup: ['Seniors'],
      instructor: 'Tech Volunteers',
      capacity: 10,
      enrolled: 8,
      price: 'Free',
      status: 'Open',
      isRecurring: true,
      isVolunteerLed: true,
      color: 'bg-indigo-100 border-indigo-300 text-indigo-800'
    },
    {
      id: '9',
      title: 'Senior Tech Hour',
      description: 'Personalized one-on-one technology help sessions. Bring your smartphone, tablet, or laptop and get individual assistance with any tech questions or challenges you face.',
      date: `${currentYear}-${String(currentMonthNum + 1).padStart(2, '0')}-18`,
      time: '2:00 PM',
      duration: '1 hour',
      location: 'Computer Lab',
      category: 'Digital Literacy',
      ageGroup: ['Seniors'],
      instructor: 'Linda Thompson',
      capacity: 8,
      enrolled: 6,
      price: 'Free',
      status: 'Open',
      isRecurring: true,
      isVolunteerLed: true,
      color: 'bg-blue-100 border-blue-300 text-blue-800'
    },
    {
      id: '11',
      title: 'Python for Kids',
      description: 'Introduction to Python programming language for children ages 10 and up. Learn programming fundamentals through creating simple games, animations, and interactive stories. All materials and computers provided.',
      date: `${currentYear}-${String(currentMonthNum + 1).padStart(2, '0')}-08`,
      time: '4:00 PM',
      duration: '2 hours',
      location: 'Computer Lab',
      category: 'Digital Literacy',
      ageGroup: ['Child'],
      instructor: 'Tech Volunteers',
      capacity: 12,
      enrolled: 10,
      price: 'Free',
      status: 'Open',
      isRecurring: true,
      isVolunteerLed: true,
      color: 'bg-green-100 border-green-300 text-green-800'
    },
    {
      id: '12',
      title: 'Senior Exercise Class',
      description: 'Gentle fitness activities designed specifically for seniors. Low-impact exercises to improve flexibility, balance, and strength. All fitness levels welcome - modifications provided for different abilities.',
      date: `${currentYear}-${String(currentMonthNum + 1).padStart(2, '0')}-14`,
      time: '9:00 AM',
      duration: '1 hour',
      location: 'Main Hall',
      category: 'Health & Wellness',
      ageGroup: ['Seniors'],
      instructor: 'Fitness Volunteers',
      capacity: 15,
      enrolled: 12,
      price: 'Free',
      status: 'Open',
      isRecurring: true,
      isVolunteerLed: true,
      color: 'bg-pink-100 border-pink-300 text-pink-800'
    },
    {
      id: '13',
      title: 'Web Development for Teens',
      description: 'Learn to build your own websites using HTML, CSS, and JavaScript. Students will create their own personal websites and learn the fundamentals of web development in a supportive, hands-on environment.',
      date: `${currentYear}-${String(currentMonthNum + 1).padStart(2, '0')}-22`,
      time: '3:00 PM',
      duration: '2 hours',
      location: 'Computer Lab',
      category: 'Digital Literacy',
      ageGroup: ['Child'],
      instructor: 'Web Volunteers',
      capacity: 15,
      enrolled: 12,
      price: 'Free',
      status: 'Open',
      isRecurring: true,
      isVolunteerLed: true,
      color: 'bg-green-100 border-green-300 text-green-800'
    }
  ];

  const event = events.find(e => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
            <button
              onClick={() => navigate('/calendar')}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Calendar
            </button>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Open':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'Waitlist':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case 'Full':
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return null;
    }
  };

  const getAgeGroupColor = (ageGroup: string[]) => {
    if (ageGroup.includes('Child')) {
      return 'bg-green-100 text-green-800 border-green-300';
    }
    if (ageGroup.includes('Seniors')) {
      return 'bg-amber-100 text-amber-800 border-amber-300';
    }
    return 'bg-gray-100 text-gray-800 border-gray-300';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/calendar')}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Calendar</span>
        </button>

        {/* Event Header */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-blue-600 text-white p-8">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
                <div className="flex items-center space-x-4 text-blue-100">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getAgeGroupColor(event.ageGroup).replace('text-', 'text-white bg-white/20 border-white/30')}`}>
                    {event.ageGroup[0]}
                  </span>
                  <span className="px-3 py-1 bg-white/20 border border-white/30 rounded-full text-sm">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2 mb-2">
                  {getStatusIcon(event.status)}
                  <span className="font-semibold">{event.status}</span>
                </div>
                <div className="text-2xl font-bold">{event.price}</div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Event Details Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <CalendarIcon className="w-5 h-5 text-gray-500" />
                  <div>
                    <div className="font-medium text-gray-900">{formatDate(event.date)}</div>
                    <div className="text-sm text-gray-600">
                      {event.isRecurring && 'Recurring weekly'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <div>
                    <div className="font-medium text-gray-900">{event.time}</div>
                    <div className="text-sm text-gray-600">{event.duration}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <div className="font-medium text-gray-900">{event.location}</div>
                </div>

                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-gray-500" />
                  <div>
                    <div className="font-medium text-gray-900">
                      {event.enrolled} / {event.capacity} participants
                    </div>
                    <div className="text-sm text-gray-600">
                      {event.capacity - event.enrolled} spots remaining
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Instructor</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-700">{event.instructor}</span>
                    {event.isVolunteerLed && (
                      <div className="flex items-center space-x-1 bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                        <HandHeart className="w-3 h-3" />
                        <span>Volunteer-led</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Age Group</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getAgeGroupColor(event.ageGroup)}`}>
                    {event.ageGroup[0]}
                  </span>
                </div>

                {event.price === 'Free' && (
                  <div className="flex items-center space-x-2 text-green-600">
                    <Heart className="w-5 h-5" />
                    <span className="font-medium">Free Community Program</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About This Event</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{event.description}</p>
            </div>

            {/* Registration Section */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Join?</h3>
                  <p className="text-gray-600">
                    {event.status === 'Open' 
                      ? 'Registration is currently open for this event.' 
                      : event.status === 'Waitlist'
                      ? 'This event is full, but you can join the waitlist.'
                      : 'This event is currently full.'}
                  </p>
                </div>
                <button 
                  className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                    event.status === 'Open' 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : event.status === 'Waitlist'
                      ? 'bg-yellow-600 text-white hover:bg-yellow-700'
                      : 'bg-gray-400 text-white cursor-not-allowed'
                  }`}
                  disabled={event.status === 'Full'}
                >
                  {event.status === 'Open' ? 'Register Now' : 
                   event.status === 'Waitlist' ? 'Join Waitlist' : 'Event Full'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail; 