import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { NewsItem, NewsCategory, newsItems, getCategoryColor, formatDate } from '../data/newsData';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>('All');

  const categoryNews = newsItems.filter(item => selectedCategory === 'All' || item.category === selectedCategory);

  const NewsCard: React.FC<{ news: NewsItem; featured?: boolean }> = ({ news, featured = false }) => (
    <article className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full relative group`}>
      {news.image && (
        <div className={`overflow-hidden ${featured ? 'h-64' : 'h-48'} shrink-0`}>
          <img 
            src={news.image} 
            alt={news.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            style={{ objectPosition: news.imagePosition || 'center' }}
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(news.category)}`}>
              {news.category}
            </span>
            {featured && (
              <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
                Latest
              </span>
            )}
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(news.date)}</span>
          </div>
        </div>
        
        <h2 className={`font-bold text-gray-900 mb-3 ${
          featured ? 'text-2xl' : 'text-lg'
        }`}>
          {news.title}
        </h2>
        
        <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-grow">
          {news.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <User className="w-4 h-4" />
            <span className="text-xs">{news.author}</span>
          </div>
          <Link 
            to={`/news/${news.id}`} 
            className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors before:absolute before:inset-0"
          >
            <span>Read More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Minds & Actions News</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and announcements 
            from our Labs spreading across the community.
          </p>
        </div>

        {/* Category Toggle */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 bg-white rounded-xl p-2 shadow-sm max-w-3xl mx-auto">
            {['All', 'Together Lab', 'AgeWell Lab', 'Community Lab'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as NewsCategory)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Category News */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedCategory === 'All' ? 'Recent News' : `${selectedCategory} News`}
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
                No news items available for {selectedCategory} at this time.
              </p>
            </div>
          )}
        </section>
        
      </div>
    </div>
  );
};

export default News; 