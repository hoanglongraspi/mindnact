import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: 'Child' | 'Seniors';
  featured?: boolean;
  image?: string;
}

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'Child' | 'Seniors'>('Child');

  const newsItems: NewsItem[] = [
    // Featured News
    {
      id: '1',
      title: 'Minds and Actions Wins Regional STEM Education Award',
      excerpt: 'Our innovative programming approach for children and seniors has been recognized by the Regional Education Council.',
      content: 'Minds and Actions has been honored with the prestigious Regional STEM Education Award for our outstanding work in bridging the technology gap between generations. Our unique programs that pair children with senior mentors have shown remarkable results in both digital literacy and community building.',
      date: '2025-01-20',
      author: 'Sarah Johnson, Program Director',
      category: 'Child',
      featured: true,
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=300&fit=crop&auto=format'
    },
    {
      id: '2',
      title: 'Intergenerational Tech Program Reaches 1,000 Participants',
      excerpt: 'Historic milestone as children and seniors learn technology skills together in our groundbreaking partnership program.',
      content: 'Our intergenerational technology program has reached an incredible milestone with 1,000 total participants. The program pairs tech-savvy children with seniors learning digital skills, creating meaningful connections while bridging the digital divide in our community.',
      date: '2025-01-19',
      author: 'Community Program Coordinators',
      category: 'Seniors',
      featured: true,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop&auto=format'
    },
    {
      id: '3',
      title: 'New STEM Lab Opens with State-of-the-Art Equipment',
      excerpt: 'Cutting-edge robotics and programming equipment now available for both child and senior programs.',
      content: 'Thanks to community donations and grants, our new STEM Lab features the latest in educational technology including 3D printers, robotics kits, programming stations, and interactive science equipment. The lab serves both our children\'s coding programs and senior digital literacy classes.',
      date: '2025-01-17',
      author: 'Facilities & Programs Team',
      category: 'Child',
      featured: true,
      image: 'https://picsum.photos/600/300?random=1'
    },
    
    // Child News
    {
      id: '4',
      title: 'Kids Coding Club Creates First Mobile App',
      excerpt: 'Young programmers showcase their skills with a community helper app.',
      content: 'Students in our Kids Coding Workshop have successfully developed their first mobile application - a community resource finder that helps families locate local services. The app was built using Scratch and Python skills learned in our STEM programs.',
      date: '2025-01-18',
      author: 'Tech Volunteer Team',
      category: 'Child',
      image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=400&h=200&fit=crop&auto=format'
    },
    {
      id: '5',
      title: 'Youth Robotics Team Advances to State Competition',
      excerpt: 'STEM Robotics Club qualifies for state-level competition after impressive regional showing.',
      content: 'Our STEM Robotics Club has earned a spot at the state competition after their robot successfully completed all challenges at the regional level. The team of 12 students will compete against 50+ teams statewide.',
      date: '2025-01-15',
      author: 'James Rodriguez, STEM Instructor',
      category: 'Child',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop&auto=format'
    },
    {
      id: '6',
      title: 'New Python Programming Course for Teens Launches',
      excerpt: 'Advanced coding class now available for students ready for real programming languages.',
      content: 'Building on the success of our Kids Coding Workshop, we are launching an advanced Python programming course for teenagers. The course covers game development, web programming, and data science fundamentals.',
      date: '2025-01-12',
      author: 'Volunteer Tech Coaches',
      category: 'Child',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop&auto=format'
    },
    {
      id: '7',
      title: 'Math & Science Workshop Wins Student Choice Award',
      excerpt: 'Hands-on STEM activities voted most popular program by participating children.',
      content: 'Our Math & Science Workshop has been voted the most engaging program by participating children in our annual program survey. The combination of experiments, problem-solving, and interactive learning continues to inspire young scientists.',
      date: '2025-01-08',
      author: 'Sarah Chen, Science Instructor',
      category: 'Child',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=200&fit=crop&auto=format'
    },

    // Senior News
    {
      id: '8',
      title: 'Senior Digital Literacy Program Reaches 500th Graduate',
      excerpt: 'Milestone achievement as program celebrates helping seniors master technology.',
      content: 'Our Senior Digital Literacy Program has reached a significant milestone with its 500th graduate. The program has helped seniors aged 65+ learn to use smartphones, tablets, email, and social media to stay connected with family and community.',
      date: '2025-01-19',
      author: 'Linda Thompson, Senior Tech Instructor',
      category: 'Seniors',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=200&fit=crop&auto=format'
    },
    {
      id: '9',
      title: 'Seniors Become Tech Mentors for Intergenerational Program',
      excerpt: 'Program graduates now teaching technology skills to other community members.',
      content: 'In an inspiring turn of events, graduates of our Senior Digital Literacy Program have volunteered to become tech mentors, helping other seniors and even assisting with children\'s programs. This creates a beautiful cycle of knowledge sharing.',
      date: '2025-01-16',
      author: 'Community Volunteers Coordinator',
      category: 'Seniors',
      image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=400&h=200&fit=crop&auto=format'
    },
    {
      id: '10',
      title: 'Senior Exercise Class Expands Due to Popular Demand',
      excerpt: 'New morning and evening sessions added to accommodate growing participation.',
      content: 'Due to overwhelming positive response, we are adding two additional Senior Exercise Class sessions. The gentle fitness program has helped participants improve flexibility, balance, and social connections.',
      date: '2025-01-14',
      author: 'Fitness Volunteers Team',
      category: 'Seniors',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=200&fit=crop&auto=format'
    },
    {
      id: '11',
      title: 'Seniors Social Hour Features Guest Speaker Series',
      excerpt: 'Monthly guest speakers share insights on health, hobbies, and community involvement.',
      content: 'Our popular Seniors Social Hour is expanding to include monthly guest speakers covering topics like healthy aging, hobby development, volunteer opportunities, and local history. Coffee and conversation continue as always.',
      date: '2025-01-10',
      author: 'Community Volunteers',
      category: 'Seniors',
      image: 'https://picsum.photos/400/200?random=2'
    },
    {
      id: '12',
      title: 'Senior Computer Skills Class Introduces Video Calling',
      excerpt: 'New curriculum helps seniors stay connected with distant family members.',
      content: 'We\'ve updated our Senior Computer Skills curriculum to include video calling setup and usage. Seniors are learning to use Zoom, Skype, and FaceTime to maintain connections with family members across the country.',
      date: '2025-01-07',
      author: 'Tech Volunteers',
      category: 'Seniors',
      image: 'https://picsum.photos/400/200?random=3'
    }
  ];

  const featuredNews = newsItems.filter(item => item.featured);
  const categoryNews = newsItems.filter(item => item.category === selectedCategory && !item.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const NewsCard: React.FC<{ news: NewsItem; featured?: boolean }> = ({ news, featured = false }) => (
    <article className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden`}>
      {news.image && (
        <div className={`overflow-hidden ${featured ? 'h-48' : 'h-40'}`}>
          <img 
            src={news.image} 
            alt={news.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              news.category === 'Child' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-amber-100 text-amber-800'
            }`}>
              {news.category}
            </span>
            {featured && (
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                Featured
              </span>
            )}
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(news.date)}</span>
          </div>
        </div>
        
        <h2 className={`font-bold text-gray-900 mb-3 ${
          featured ? 'text-xl' : 'text-lg'
        }`}>
          {news.title}
        </h2>
        
        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
          {news.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <User className="w-4 h-4" />
            <span className="text-xs">{news.author}</span>
          </div>
          <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
            <span>Read More</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Community News</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and announcements 
            from our Minds and Actions programs for children and seniors.
          </p>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured News</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredNews.map(news => (
                <NewsCard key={news.id} news={news} featured={true} />
              ))}
            </div>
          </section>
        )}

        {/* Category Toggle */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-1 bg-white rounded-xl p-1 shadow-sm max-w-sm mx-auto">
            <button
              onClick={() => setSelectedCategory('Child')}
              className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedCategory === 'Child'
                  ? 'bg-green-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Child Programs
            </button>
            <button
              onClick={() => setSelectedCategory('Seniors')}
              className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedCategory === 'Seniors'
                  ? 'bg-amber-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Senior Programs
            </button>
          </div>
        </div>

        {/* Category News */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedCategory === 'Child' ? 'Child Programs News' : 'Senior Programs News'}
          </h2>
          
          {categoryNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryNews.map(news => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No news items available for {selectedCategory === 'Child' ? 'Child Programs' : 'Senior Programs'} at this time.
              </p>
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        
      </div>
    </div>
  );
};

export default News; 