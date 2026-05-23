import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';

const categories = ['All', 'Industry News', 'Nutrition Tips', 'Farm Management', 'Product Updates'];

const blogPosts = [
{
  id: 1,
  title: 'The Future of Aquaculture in Nigeria: Trends and Opportunities',
  excerpt: 'Explore the growing aquaculture sector in Nigeria and learn how modern feed solutions are driving unprecedented growth in fish farming.',
  image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop',
  category: 'Industry News',
  author: 'Dr. Ibrahim Musa',
  date: 'December 15, 2024',
  readTime: '8 min read',
  featured: true
},
{
  id: 2,
  title: 'Understanding Feed Conversion Ratio: A Guide for Poultry Farmers',
  excerpt: 'Learn how to optimize your feed conversion ratio and reduce costs while improving bird health and productivity.',
  image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&h=500&fit=crop',
  category: 'Nutrition Tips',
  author: 'Mrs. Adaeze Nwosu',
  date: 'December 10, 2024',
  readTime: '6 min read',
  featured: false
},
{
  id: 3,
  title: 'New Product Launch: Premium Catfish Floating Pellets',
  excerpt: 'Introducing our latest innovation in aqua feed – designed for superior growth rates and optimal feed conversion.',
  image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=800&h=500&fit=crop',
  category: 'Product Updates',
  author: 'Marketing Team',
  date: 'December 5, 2024',
  readTime: '4 min read',
  featured: false
},
{
  id: 4,
  title: 'Managing Livestock During Harmattan Season',
  excerpt: 'Essential tips for protecting your cattle, goats, and sheep during the dry season with proper nutrition and care.',
  image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&h=500&fit=crop',
  category: 'Farm Management',
  author: 'Dr. Grace Adekunle',
  date: 'November 28, 2024',
  readTime: '7 min read',
  featured: false
},
{
  id: 5,
  title: 'How to Choose the Right Feed for Your Layers',
  excerpt: 'A comprehensive guide to selecting the optimal layer feed for maximum egg production and bird health.',
  image: 'https://images.unsplash.com/photo-1569288063643-5d29ad64df09?w=800&h=500&fit=crop',
  category: 'Nutrition Tips',
  author: 'Dr. Ibrahim Musa',
  date: 'November 20, 2024',
  readTime: '5 min read',
  featured: false
},
{
  id: 6,
  title: 'ESELUCK & BS Partners with 50 New Distributors in 2024',
  excerpt: 'Our distribution network continues to grow as we welcome new partners across Northern Nigeria.',
  image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop',
  category: 'Industry News',
  author: 'Marketing Team',
  date: 'November 15, 2024',
  readTime: '3 min read',
  featured: false
}];


export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  const filteredPosts = regularPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section data-ev-id="ev_cf7d9beca5" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-forest via-forest-dark to-charcoal overflow-hidden">
        <div data-ev-id="ev_12c9429996" className="absolute inset-0">
          <div data-ev-id="ev_097de5f640"
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(196, 160, 82, 0.3) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(196, 160, 82, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

        </div>

        <div data-ev-id="ev_466e0e1675" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto">

            <div data-ev-id="ev_7d499ca159" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <span data-ev-id="ev_c06fda93e3" className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span data-ev-id="ev_712d71300f" className="text-gold text-sm font-medium tracking-wide uppercase">Our Blog</span>
            </div>
            <h1 data-ev-id="ev_d303dab9b2" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Insights &
              <span data-ev-id="ev_94230dcc12" className="text-gold"> Knowledge</span>
            </h1>
            <p data-ev-id="ev_16793f98d5" className="text-xl text-white/70 leading-relaxed">
              Stay updated with the latest news, tips, and insights from Nigeria's
              agricultural industry and our expert team.
            </p>
          </motion.div>
        </div>

        {/* Wave */}
        <div data-ev-id="ev_ebbf60e6f3" className="absolute bottom-0 left-0 right-0">
          <svg data-ev-id="ev_285c6101bd" viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
            <path data-ev-id="ev_b16d081489"
            d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H0Z"
            fill="#FAF9F6" />

          </svg>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost &&
      <section data-ev-id="ev_40b55b2db0" className="py-16 bg-cream">
          <div data-ev-id="ev_8a32b7a328" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative grid lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-elevation">

              <div data-ev-id="ev_bdfed84865" className="relative h-64 lg:h-full min-h-[300px]">
                <img data-ev-id="ev_fa61bfb70c"
              src={featuredPost.image}
              alt={featuredPost.title}
              className="absolute inset-0 w-full h-full object-cover" />

                <div data-ev-id="ev_f075efea4c" className="absolute top-4 left-4">
                  <span data-ev-id="ev_6699686f86" className="px-3 py-1 rounded-full bg-gold text-forest text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div data-ev-id="ev_52c3ac7093" className="p-8 lg:p-12">
                <div data-ev-id="ev_a6407318b4" className="flex items-center gap-4 mb-4">
                  <span data-ev-id="ev_fb40d7caa4" className="px-3 py-1 rounded-full bg-forest/10 text-forest text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span data-ev-id="ev_5ba497c0f3" className="text-slate text-sm flex items-center gap-1">
                    <Clock size={14} />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 data-ev-id="ev_f31b4df3c1" className="font-display text-2xl lg:text-3xl font-bold text-charcoal mb-4">
                  {featuredPost.title}
                </h2>
                <p data-ev-id="ev_cf15036814" className="text-slate mb-6">{featuredPost.excerpt}</p>
                <div data-ev-id="ev_5c6be3ac86" className="flex items-center justify-between">
                  <div data-ev-id="ev_351877a9d5" className="flex items-center gap-3">
                    <div data-ev-id="ev_792db8a83f" className="w-10 h-10 rounded-full bg-forest flex items-center justify-center">
                      <User size={20} className="text-white" />
                    </div>
                    <div data-ev-id="ev_6ce5655d36">
                      <p data-ev-id="ev_13b8500cde" className="text-charcoal font-medium text-sm">{featuredPost.author}</p>
                      <p data-ev-id="ev_a081a75d62" className="text-slate text-xs">{featuredPost.date}</p>
                    </div>
                  </div>
                  <Link
                  to={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all">

                    Read Article <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      }

      {/* Blog Posts */}
      <section data-ev-id="ev_6692520aaa" className="py-16 lg:py-24 bg-cream">
        <div data-ev-id="ev_c39ef540b5" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div data-ev-id="ev_06bc921e88" className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center mb-12">
            {/* Categories */}
            <div data-ev-id="ev_2972941955" className="flex flex-wrap gap-2">
              {categories.map((category) =>
              <button data-ev-id="ev_2aaf7c3aeb"
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeCategory === category ?
              'bg-forest text-white' :
              'bg-white text-slate hover:bg-forest/10'}`
              }>

                  {category}
                </button>
              )}
            </div>

            {/* Search */}
            <div data-ev-id="ev_142522acde" className="relative w-full lg:w-80">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate" />
              <input data-ev-id="ev_3cc502c5e9"
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" />

            </div>
          </div>

          {/* Posts Grid */}
          <div data-ev-id="ev_f445c4fdd9" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) =>
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group">

                <Link to={`/blog/${post.id}`} className="block">
                  <div data-ev-id="ev_d7d9b407d7" className="bg-white rounded-2xl overflow-hidden shadow-glass hover:shadow-elevation transition-all duration-500 hover:-translate-y-2">
                    <div data-ev-id="ev_62fb1463a8" className="relative h-48 overflow-hidden">
                      <img data-ev-id="ev_73e649b5e9"
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy" />

                      <div data-ev-id="ev_704729c26c" className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                      <span data-ev-id="ev_8af99ebaa4" className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-forest text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                    <div data-ev-id="ev_37c775b45d" className="p-6">
                      <div data-ev-id="ev_671b23853f" className="flex items-center gap-4 text-slate text-sm mb-3">
                        <span data-ev-id="ev_f9724cb201" className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                        <span data-ev-id="ev_30d6b82996" className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 data-ev-id="ev_519c472f5b" className="font-display text-lg font-bold text-charcoal mb-2 group-hover:text-gold transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p data-ev-id="ev_c9c9c95758" className="text-slate text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                      <div data-ev-id="ev_b717776918" className="flex items-center gap-2 text-gold font-medium text-sm">
                        Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            )}
          </div>

          {filteredPosts.length === 0 &&
          <div data-ev-id="ev_16a5880cc5" className="text-center py-16">
              <p data-ev-id="ev_c258fc8f77" className="text-slate text-lg">No articles found matching your criteria.</p>
            </div>
          }

          {/* Load More */}
          <div data-ev-id="ev_743732ebe7" className="text-center mt-12">
            <button data-ev-id="ev_caa36d8e19" className="px-8 py-3 bg-forest text-white font-semibold rounded-xl hover:bg-forest-light transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section data-ev-id="ev_87727d4738" className="py-20 bg-forest">
        <div data-ev-id="ev_9e06d2e9b7" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>

            <h2 data-ev-id="ev_e0a72a4993" className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p data-ev-id="ev_6d89115dc4" className="text-white/70 text-lg mb-8">
              Get the latest industry insights, tips, and product updates delivered to your inbox.
            </p>
            <div data-ev-id="ev_56d07c4dfc" className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input data-ev-id="ev_0c6378dfcf"
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50" />

              <button data-ev-id="ev_8277388f20" className="px-8 py-4 bg-gold text-forest font-semibold rounded-xl hover:bg-gold-light transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>);

}