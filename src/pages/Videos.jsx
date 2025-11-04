// src/pages/Videos.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaYoutube, FaSearch, FaFilter, FaClock, FaEye } from 'react-icons/fa';

const Videos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'SIP & Mutual Funds', 'Tax Planning', 'Insurance', 'Retirement Planning', 'Market Analysis'];

  const videos = [
    {
      id: 1,
      title: "Understanding SIP: Your Path to Wealth Creation",
      description: "Learn how Systematic Investment Plans can help you build long-term wealth with disciplined investing. Perfect for beginners looking to start their investment journey.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Replace with actual
      videoId: "dQw4w9WgXcQ",
      duration: "12:45",
      views: "15K",
      category: "SIP & Mutual Funds",
      uploadDate: "2 weeks ago"
    },
    {
      id: 2,
      title: "Tax Saving Strategies for FY 2024-25",
      description: "Discover smart tax-saving techniques using ELSS, PPF, and other investment options. Maximize your savings while building wealth.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ",
      duration: "18:30",
      views: "22K",
      category: "Tax Planning",
      uploadDate: "1 month ago"
    },
    {
      id: 3,
      title: "Why Term Insurance is Essential for Every Family",
      description: "Complete guide to term insurance - coverage amount, premium calculation, and choosing the right policy for your family's financial security.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ",
      duration: "15:20",
      views: "18K",
      category: "Insurance",
      uploadDate: "3 weeks ago"
    },
    {
      id: 4,
      title: "Retirement Planning: Start Early, Retire Rich",
      description: "How to plan your retirement corpus using various investment instruments. Calculate how much you need and how to achieve it.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ",
      duration: "20:15",
      views: "12K",
      category: "Retirement Planning",
      uploadDate: "2 months ago"
    },
    {
      id: 5,
      title: "Market Volatility: How to Stay Calm and Invest",
      description: "Understanding market cycles and how to make volatility work in your favor. Tips for long-term investors during market ups and downs.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ",
      duration: "14:50",
      views: "25K",
      category: "Market Analysis",
      uploadDate: "1 week ago"
    },
    {
      id: 6,
      title: "Lumpsum vs SIP: Which is Better?",
      description: "Detailed comparison between lumpsum and SIP investments. Learn when to use which strategy for maximum returns.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ",
      duration: "16:40",
      views: "20K",
      category: "SIP & Mutual Funds",
      uploadDate: "3 weeks ago"
    }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-orange-50 via-white to-yellow-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl mb-4 shadow-warm">
            <FaYoutube className="text-white text-2xl" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            WeCare Investment <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">Videos</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
            Watch our comprehensive video library covering investment strategies, tax planning, insurance, and wealth management tips from our expert financial advisors.
          </p>

          <div className="flex items-center justify-center mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-orange-500 rounded"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded mx-2"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-transparent rounded"></div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 bg-white rounded-2xl p-6 shadow-warm border-2 border-orange-100"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400" />
              <input
                type="text"
                placeholder="Search videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <FaFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 pointer-events-none" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-12 pr-8 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-white cursor-pointer appearance-none min-w-[200px]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23f97316'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1rem'
                }}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-warm border-2 border-orange-100 hover:border-orange-300 hover:shadow-warm-lg transition-all duration-300 group"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-warm-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <FaPlay className="text-white text-xl ml-1" />
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center">
                  <FaClock className="mr-1" />
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                  {video.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                  {video.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {video.description}
                </p>

                {/* Video Stats */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                    <FaEye className="mr-1" />
                    {video.views} views
                  </div>
                  <span>{video.uploadDate}</span>
                </div>

                {/* Watch Button */}
                <a
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center"
                >
                  <FaPlay className="mr-2" />
                  Watch Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredVideos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaYoutube className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No Videos Found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </motion.div>
        )}

        {/* Subscribe CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 text-center shadow-warm-lg"
        >
          <FaYoutube className="text-white text-4xl mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Subscribe to Our YouTube Channel
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg">
            Get the latest videos on investment tips, market analysis, and financial planning delivered directly to your inbox.
          </p>
          <a
            href="https://www.youtube.com/@wecarefreedomwealth"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
          >
            <FaYoutube className="mr-2" />
            Subscribe Now
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Videos;
