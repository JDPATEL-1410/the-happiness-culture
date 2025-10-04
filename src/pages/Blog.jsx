import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBook, 
  FaSearch, 
  FaCalendarAlt, 
  FaUser, 
  FaArrowRight,
  FaPlay,
  FaDownload,
  FaTags,
  FaClock
} from 'react-icons/fa';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'SIP & Mutual Funds', 'Tax Planning', 'Insurance', 'Retirement', 'Market Insights'];

  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to SIP Investment in 2025",
      excerpt: "Everything you need to know about starting your SIP journey, from basics to advanced strategies.",
      category: "SIP & Mutual Funds",
      author: "Rahul Mehta",
      date: "2025-09-28",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400",
      featured: true,
      tags: ["SIP", "Mutual Funds", "Investment", "Beginner Guide"]
    },
    {
      id: 2,
      title: "Tax Saving Strategies for Salaried Employees",
      excerpt: "Maximize your tax savings while building wealth through smart investment choices under Section 80C.",
      category: "Tax Planning",
      author: "Sneha Gupta",
      date: "2025-09-25",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400",
      tags: ["Tax Saving", "ELSS", "80C", "Salary"]
    },
    {
      id: 3,
      title: "How Much Life Insurance Do You Really Need?",
      excerpt: "Calculate your ideal life insurance cover based on your family's financial needs and future goals.",
      category: "Insurance",
      author: "Vikash Sharma",
      date: "2025-09-22",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400",
      tags: ["Life Insurance", "Term Plan", "Financial Planning"]
    },
    {
      id: 4,
      title: "Retirement Planning in Your 30s: A Complete Roadmap",
      excerpt: "Start early and retire wealthy. Learn how to build a retirement corpus that ensures financial freedom.",
      category: "Retirement",
      author: "Rahul Mehta",
      date: "2025-09-20",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400",
      tags: ["Retirement Planning", "Pension", "Long-term Investment"]
    },
    {
      id: 5,
      title: "Market Volatility: Friend or Foe for SIP Investors?",
      excerpt: "Understand how market fluctuations actually benefit long-term SIP investors through rupee cost averaging.",
      category: "Market Insights",
      author: "Vikash Sharma",
      date: "2025-09-18",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400",
      tags: ["Market Volatility", "SIP", "Investment Strategy"]
    },
    {
      id: 6,
      title: "Building Your Child's Education Fund: A Step-by-Step Guide",
      excerpt: "Secure your child's educational future with smart financial planning and the right investment vehicles.",
      category: "SIP & Mutual Funds",
      author: "Sneha Gupta",
      date: "2025-09-15",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400",
      tags: ["Child Education", "Goal Planning", "SIP"]
    }
  ];

  const videos = [
    {
      title: "SIP vs Lump Sum: Which is Better?",
      duration: "12:45",
      views: "15K views",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400"
    },
    {
      title: "Tax Saving Made Simple",
      duration: "8:30",
      views: "22K views",
      thumbnail: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400"
    },
    {
      title: "Mutual Fund Categories Explained",
      duration: "15:20",
      views: "18K views",
      thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400"
    }
  ];

  const resources = [
    {
      title: "SIP Investment Guide 2025",
      type: "PDF",
      size: "2.5 MB",
      downloads: "5.2K"
    },
    {
      title: "Tax Planning Checklist",
      type: "PDF",
      size: "1.8 MB",
      downloads: "3.8K"
    },
    {
      title: "Retirement Calculator Spreadsheet",
      type: "Excel",
      size: "850 KB",
      downloads: "2.1K"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-success-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                <FaBook className="text-3xl" />
              </div>
              <h1 className="text-5xl font-bold">Knowledge Hub</h1>
            </div>
            
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
              Stay informed with our latest insights on financial planning, investment strategies, and market trends. Knowledge is indeed the new happy rich!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, videos, resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="bg-success-100 text-success-700 px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center">
                      <FaClock className="mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                        {featuredPost.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{featuredPost.author}</p>
                        <p className="text-sm text-gray-500">{new Date(featuredPost.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    
                    <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center">
                      Read More <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-3 text-xs text-gray-500 mb-3">
                    <div className="flex items-center">
                      <FaUser className="mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <FaClock className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="text-primary-500 font-semibold hover:text-success-500 transition-colors duration-300 flex items-center">
                    Read Article <FaArrowRight className="ml-2 text-sm" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Educational Videos</h2>
            <p className="text-xl text-gray-600">Learn from our experts through engaging video content</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-all duration-300">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaPlay className="text-primary-500 text-xl ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary-500 transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{video.views}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Free Resources</h2>
            <p className="text-xl text-gray-600">Download our comprehensive guides and tools</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                    <FaDownload className="text-white text-lg" />
                  </div>
                  <span className="bg-success-100 text-success-700 px-3 py-1 rounded-full text-sm font-medium">
                    {resource.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary-500 transition-colors duration-300">
                  {resource.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{resource.size}</span>
                  <span>{resource.downloads} downloads</span>
                </div>
                
                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                  <FaDownload className="mr-2" />
                  Download Free
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
