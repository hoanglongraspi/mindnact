import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { newsItems, getCategoryColor, formatDate } from '../data/newsData';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = newsItems.find(n => n.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl text-gray-600 mb-4">News article not found.</h1>
        <Link to="/news" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to News
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to="/news" className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to News</span>
          </Link>
        </div>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {article.image && (
            <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
                style={{ objectPosition: article.imagePosition || 'center' }}
              />
            </div>
          )}
          
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
              <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                {article.category}
              </span>
              <div className="flex items-center space-x-2 text-gray-500">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(article.date)}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center space-x-2 text-gray-600 mb-10 pb-6 border-b border-gray-100">
              <User className="w-5 h-5" />
              <span className="font-medium">By {article.author}</span>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl text-gray-600 mb-8 italic">
                {article.excerpt}
              </p>
              
              <div className="whitespace-pre-wrap">
                {article.content}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default NewsDetail;
