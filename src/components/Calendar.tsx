import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Clock, MapPin, Users, CalendarIcon, ChevronLeft, ChevronRight, 
  Heart, HandHeart
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

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedView, setSelectedView] = useState<'month' | 'week'>('month');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAge, setSelectedAge] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', 'Digital Literacy', 'Life Skills', 'Creative Arts', 'Career Support', 'Health & Wellness', 'Community Building'];
  const ageGroups = ['All', 'Child', 'Seniors'];

  // Get current date for realistic event dates
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonthNum = today.getMonth();

  // Helper function to get age group color
  const getAgeGroupColor = (ageGroup: string[]) => {
    if (ageGroup.includes('Child')) {
      return 'bg-green-100 text-green-800 border-green-300';
    }
    if (ageGroup.includes('Seniors')) {
      return 'bg-amber-100 text-amber-800 border-amber-300';
    }
    return 'bg-gray-100 text-gray-800 border-gray-300';
  };

  // Helper function to get age group display text
  const getAgeGroupText = (ageGroup: string[]) => {
    if (ageGroup.includes('Child')) {
      return 'Child';
    }
    if (ageGroup.includes('Seniors')) {
      return 'Seniors';
    }
    return ageGroup[0];
  };

  const events: Event[] = [
    {
      id: '1',
      title: 'Kids Coding Workshop',
      description: 'Introduction to programming for children using Scratch',
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
      description: 'Patient tech instruction for seniors',
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
      description: 'Build and program robots using LEGO Mindstorms',
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
      description: 'Coffee and conversation circle for seniors',
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
      description: 'Fun experiments and problem solving for kids',
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
      description: 'Basic computer skills for seniors',
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
      description: 'One-on-one tech help for seniors',
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
      description: 'Learn programming basics with Python',
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
      description: 'Gentle fitness activities designed for seniors',
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
      description: 'Learn HTML, CSS and JavaScript basics',
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

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesAge = selectedAge === 'All' || event.ageGroup.includes(selectedAge);
    return matchesCategory && matchesAge;
  });

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    for (let i = 0; i < 42; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      days.push(currentDate);
    }
    return days;
  };

  const getEventsForDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return filteredEvents.filter(event => event.date === dateString);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleEventClick = (event: Event) => {
    navigate(`/event/${event.id}`);
  };

  const renderEventCard = (event: Event) => (
    <div 
      key={event.id} 
      className={`p-4 rounded-xl border-l-4 ${event.color} hover:shadow-md transition-shadow cursor-pointer`}
      onClick={() => navigate(`/event/${event.id}`)}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 mb-1">{event.title}</h4>
          <p className="text-sm text-gray-600 mb-2">{event.description}</p>
        </div>
        <div className="flex flex-col items-end space-y-1">
          {event.isVolunteerLed && (
            <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
              <HandHeart className="w-3 h-3" />
              <span>Volunteer</span>
            </div>
          )}
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getAgeGroupColor(event.ageGroup)}`}>
            {getAgeGroupText(event.ageGroup)}
          </span>
        </div>
      </div>
      
      <div className="space-y-1 text-sm text-gray-600 mb-2">
        <div className="flex items-center space-x-1">
          <Clock className="w-3 h-3" />
          <span>{event.time} ({event.duration})</span>
        </div>
        <div className="flex items-center space-x-1">
          <MapPin className="w-3 h-3" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Users className="w-3 h-3" />
          <span>{event.enrolled}/{event.capacity}</span>
          <span className={`px-1 py-0.5 rounded text-xs ${
            event.status === 'Open' ? 'bg-green-100 text-green-700' :
            event.status === 'Waitlist' ? 'bg-yellow-100 text-yellow-700' :
            'bg-red-100 text-red-700'
          }`}>
            {event.status}
          </span>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center space-x-1">
          {event.price === 'Free' && <Heart className="w-3 h-3 text-green-600" />}
          <span className="text-xs font-medium">{event.price}</span>
        </div>
        {event.isRecurring && (
          <span className="text-xs text-gray-500 bg-gray-100 px-1 py-0.5 rounded">Weekly</span>
        )}
      </div>
    </div>
  );

  const renderCalendarView = () => {
    const days = getDaysInMonth(currentMonth);
    const today = new Date();
    
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Calendar Header */}
        <div className="bg-blue-600 text-white p-6">
          <div className="flex items-center justify-between">
            <button onClick={prevMonth} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-bold">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h2>
            <button onClick={nextMonth} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Days of Week Header */}
        <div className="grid grid-cols-7 border-b border-gray-200">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="p-3 text-center font-semibold text-gray-700 bg-gray-50">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7">
          {days.map((date, index) => {
            const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
            const isToday = date.toDateString() === today.toDateString();
            const dayEvents = getEventsForDate(date);

            return (
              <div
                key={index}
                className={`min-h-[120px] p-2 border-r border-b border-gray-100 ${
                  !isCurrentMonth ? 'bg-gray-50 text-gray-400' : 'bg-white'
                } ${isToday ? 'bg-blue-50 border-blue-200' : ''}`}
              >
                <div className={`text-sm font-medium mb-2 ${
                  isToday ? 'text-blue-600' : isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                }`}>
                  {date.getDate()}
                  {isToday && (
                    <span className="ml-1 bg-blue-600 text-white text-xs px-1 py-0.5 rounded">Today</span>
                  )}
                </div>
                
                <div className="space-y-1">
                  {dayEvents.slice(0, 3).map(event => (
                    <div 
                      key={event.id} 
                      className={`text-xs p-1.5 rounded border-l-2 ${event.color} hover:shadow-sm cursor-pointer transition-shadow`}
                      title={`${event.title} - ${event.time} at ${event.location}`}
                      onClick={() => navigate(`/event/${event.id}`)}
                    >
                      <div className="font-medium truncate">{event.title}</div>
                      <div className="opacity-75 flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <span>{event.time}</span>
                          {event.isVolunteerLed && <HandHeart className="w-2 h-2" />}
                          {event.price === 'Free' && <Heart className="w-2 h-2" />}
                        </div>
                        <span className={`px-1 py-0.5 rounded text-xs border ${getAgeGroupColor(event.ageGroup)}`}>
                          {getAgeGroupText(event.ageGroup)}
                        </span>
                      </div>
                    </div>
                  ))}
                  {dayEvents.length > 3 && (
                    <div className="text-xs text-gray-500 bg-gray-100 px-1 py-0.5 rounded text-center">
                      +{dayEvents.length - 3} more
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderUpcomingEvents = () => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
      <div className="space-y-4">
        {filteredEvents.slice(0, 6).map(renderEventCard)}
      </div>
      
      {filteredEvents.length > 6 && (
        <div className="mt-4 text-center">
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
            View All Events ({filteredEvents.length - 6} more)
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Calendar</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay up-to-date with all our community programs, workshops, and events. 
            All activities are designed to bring our community together and support lifelong learning.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex gap-4 items-center">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={selectedAge}
                onChange={(e) => setSelectedAge(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                {ageGroups.map(age => (
                  <option key={age} value={age}>{age}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setSelectedView('month')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedView === 'month' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Month View
              </button>
              <button
                onClick={() => setSelectedView('week')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedView === 'week' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                List View
              </button>
            </div>
          </div>
        </div>

        {/* Calendar Content */}
        {selectedView === 'month' ? (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {renderCalendarView()}
            </div>
            <div className="space-y-6">
              {renderUpcomingEvents()}
              
              {/* Quick Stats */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">This Month</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{filteredEvents.length}</div>
                    <div className="text-sm text-gray-600">Events</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      {filteredEvents.filter(e => e.price === 'Free').length}
                    </div>
                    <div className="text-sm text-gray-600">Free Programs</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      {filteredEvents.filter(e => e.isVolunteerLed).length}
                    </div>
                    <div className="text-sm text-gray-600">Volunteer-Led</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">
                      {filteredEvents.filter(e => e.status === 'Open').length}
                    </div>
                    <div className="text-sm text-gray-600">Open to Join</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredEvents.map(event => (
              <div 
                key={event.id} 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => navigate(`/event/${event.id}`)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getAgeGroupColor(event.ageGroup)}`}>
                        {getAgeGroupText(event.ageGroup)}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{event.description}</p>
                  </div>
                  {event.isVolunteerLed && (
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <HandHeart className="w-4 h-4" />
                      <span>Volunteer-led</span>
                    </div>
                  )}
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">{formatDate(new Date(event.date))}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">{event.time} ({event.duration})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">{event.enrolled}/{event.capacity}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      event.status === 'Open' ? 'bg-green-100 text-green-700' :
                      event.status === 'Waitlist' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    {event.price === 'Free' && <Heart className="w-4 h-4 text-green-600" />}
                    <span className="font-semibold text-lg text-gray-900">{event.price}</span>
                    {event.isRecurring && (
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">Weekly</span>
                    )}
                  </div>
                  <button 
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/event/${event.id}`);
                    }}
                  >
                    {event.status === 'Open' ? 'Register Now' : 'Join Waitlist'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar; 