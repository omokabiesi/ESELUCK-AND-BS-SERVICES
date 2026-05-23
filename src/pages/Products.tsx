import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Check, ArrowRight, ShoppingCart } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const categories = [
{ id: 'all', name: 'All Products' },
{ id: 'poultry', name: 'Poultry Feed' },
{ id: 'fish', name: 'Fish Feed' },
{ id: 'livestock', name: 'Livestock Feed' },
{ id: 'raw', name: 'Raw Materials' }];


const products = [
{
  id: 1,
  name: 'Broiler Starter Feed',
  category: 'poultry',
  description: 'High-protein starter feed for day-old chicks up to 3 weeks.',
  image: 'https://images.unsplash.com/photo-1569288063643-5d29ad64df09?w=600&h=400&fit=crop',
  features: ['23% Crude Protein', 'Essential Amino Acids', 'Vitamin Fortified'],
  price: 'Contact for pricing',
  badge: 'Best Seller'
},
{
  id: 2,
  name: 'Layer Mash Premium',
  category: 'poultry',
  description: 'Complete nutrition for laying hens for optimal egg production.',
  image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&h=400&fit=crop',
  features: ['16.5% Protein', 'Calcium Enriched', 'Omega-3 Enhanced'],
  price: 'Contact for pricing',
  badge: null
},
{
  id: 3,
  name: 'Broiler Finisher',
  category: 'poultry',
  description: 'Final-stage feed for maximum weight gain before market.',
  image: 'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=600&h=400&fit=crop',
  features: ['20% Protein', 'High Energy', 'Growth Promoters'],
  price: 'Contact for pricing',
  badge: null
},
{
  id: 4,
  name: 'Catfish Floating Pellets',
  category: 'fish',
  description: 'Premium floating feed for catfish with excellent FCR.',
  image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
  features: ['42% Protein', 'Slow Sinking', 'High Digestibility'],
  price: 'Contact for pricing',
  badge: 'Popular'
},
{
  id: 5,
  name: 'Tilapia Grower Feed',
  category: 'fish',
  description: 'Balanced nutrition for tilapia grow-out phase.',
  image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=400&fit=crop',
  features: ['35% Protein', 'Floating Type', 'Color Enhancer'],
  price: 'Contact for pricing',
  badge: null
},
{
  id: 6,
  name: 'Fish Fry Starter',
  category: 'fish',
  description: 'Micro-pellet feed for fish fry and fingerlings.',
  image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=600&h=400&fit=crop',
  features: ['50% Protein', 'Micro Pellets', 'Immune Boosters'],
  price: 'Contact for pricing',
  badge: null
},
{
  id: 7,
  name: 'Cattle Feed Concentrate',
  category: 'livestock',
  description: 'Energy-rich concentrate for dairy and beef cattle.',
  image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&h=400&fit=crop',
  features: ['18% Protein', 'Mineral Mix', 'Rumen Friendly'],
  price: 'Contact for pricing',
  badge: null
},
{
  id: 8,
  name: 'Pig Grower Pellets',
  category: 'livestock',
  description: 'Complete feed for growing pigs 25-60kg live weight.',
  image: 'https://images.unsplash.com/photo-1516569422572-d9e8a94d9c32?w=600&h=400&fit=crop',
  features: ['16% Protein', 'Lysine Added', 'Pelleted Form'],
  price: 'Contact for pricing',
  badge: null
},
{
  id: 9,
  name: 'Soybean Meal (46%)',
  category: 'raw',
  description: 'High-quality soybean meal for feed formulation.',
  image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop',
  features: ['46% Protein', 'Low Fiber', 'Imported'],
  price: 'Contact for pricing',
  badge: 'Premium'
},
{
  id: 10,
  name: 'Fish Meal (65%)',
  category: 'raw',
  description: 'Premium fish meal for high-protein feed production.',
  image: 'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?w=600&h=400&fit=crop',
  features: ['65% Protein', 'Low Ash', 'Fresh Quality'],
  price: 'Contact for pricing',
  badge: null
},
{
  id: 11,
  name: 'Corn Gluten Meal',
  category: 'raw',
  description: 'High-energy corn byproduct for feed formulation.',
  image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&h=400&fit=crop',
  features: ['60% Protein', 'Energy Dense', 'Yellow Pigment'],
  price: 'Contact for pricing',
  badge: null
},
{
  id: 12,
  name: 'Vitamin Premix',
  category: 'raw',
  description: 'Complete vitamin and mineral premix for all species.',
  image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop',
  features: ['All Vitamins', 'Trace Minerals', 'Stable Formula'],
  price: 'Contact for pricing',
  badge: null
}];


export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section data-ev-id="ev_101f4558d3" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-forest via-forest-dark to-charcoal overflow-hidden">
        <div data-ev-id="ev_ff89520eb0" className="absolute inset-0">
          <div data-ev-id="ev_d64adb6dca"
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(196, 160, 82, 0.3) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(196, 160, 82, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

        </div>

        <div data-ev-id="ev_cdecf24c5c" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto">

            <div data-ev-id="ev_2d065871c4" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <span data-ev-id="ev_340302fc1f" className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span data-ev-id="ev_b777cf051b" className="text-gold text-sm font-medium tracking-wide uppercase">Our Products</span>
            </div>
            <h1 data-ev-id="ev_02f5972f2c" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Premium Feed
              <span data-ev-id="ev_3ffa53b857" className="text-gold"> Solutions</span>
            </h1>
            <p data-ev-id="ev_e9ccdae511" className="text-xl text-white/70 leading-relaxed">
              Explore our comprehensive range of bio feeds, raw materials, and
              nutrition solutions designed for optimal livestock performance.
            </p>
          </motion.div>
        </div>

        {/* Wave */}
        <div data-ev-id="ev_15d80536f9" className="absolute bottom-0 left-0 right-0">
          <svg data-ev-id="ev_22eb4b3779" viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
            <path data-ev-id="ev_c0602eefd9"
            d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H0Z"
            fill="#FAF9F6" />

          </svg>
        </div>
      </section>

      {/* Products Section */}
      <section data-ev-id="ev_1120f940dd" className="py-16 lg:py-24 bg-cream">
        <div data-ev-id="ev_edbeedc9fc" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div data-ev-id="ev_5663fd87da" className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center mb-12">
            {/* Categories */}
            <div data-ev-id="ev_fe528d170b" className="flex flex-wrap gap-2">
              {categories.map((category) =>
              <button data-ev-id="ev_134c485b30"
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeCategory === category.id ?
              'bg-forest text-white' :
              'bg-white text-slate hover:bg-forest/10'}`
              }>

                  {category.name}
                </button>
              )}
            </div>

            {/* Search */}
            <div data-ev-id="ev_602220a659" className="relative w-full lg:w-80">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate" />
              <input data-ev-id="ev_86f8513cf3"
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" />

            </div>
          </div>

          {/* Products Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) =>
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group">

                  <div data-ev-id="ev_cf03f0ce11" className="bg-white rounded-2xl overflow-hidden shadow-glass hover:shadow-elevation transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                    {/* Image */}
                    <div data-ev-id="ev_481373d2ec" className="relative h-48 overflow-hidden">
                      <img data-ev-id="ev_c66d8bee1c"
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy" />

                      <div data-ev-id="ev_7fd546ebc4" className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                      {product.badge &&
                    <span data-ev-id="ev_c4c15a9572" className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold text-forest text-sm font-semibold">
                          {product.badge}
                        </span>
                    }
                    </div>

                    {/* Content */}
                    <div data-ev-id="ev_4719722457" className="p-6 flex flex-col flex-1">
                      <div data-ev-id="ev_6440b9da78" className="text-xs text-gold font-semibold uppercase tracking-wider mb-2">
                        {categories.find((c) => c.id === product.category)?.name}
                      </div>
                      <h3 data-ev-id="ev_d70fd083e9" className="font-display text-xl font-bold text-charcoal mb-2">
                        {product.name}
                      </h3>
                      <p data-ev-id="ev_e7bc434c2f" className="text-slate text-sm mb-4 flex-1">{product.description}</p>

                      {/* Features */}
                      <div data-ev-id="ev_e7076cea18" className="flex flex-wrap gap-2 mb-4">
                        {product.features.map((feature) =>
                      <span data-ev-id="ev_ef1e338dbd"
                      key={feature}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-forest/5 text-forest text-xs">

                            <Check size={12} />
                            {feature}
                          </span>
                      )}
                      </div>

                      {/* Price & CTA */}
                      <div data-ev-id="ev_4332e7d15a" className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span data-ev-id="ev_57418237d3" className="text-gold font-semibold">{product.price}</span>
                        <button data-ev-id="ev_dbd9d532de" className="inline-flex items-center gap-2 text-forest font-medium hover:text-gold transition-colors">
                          Inquire <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 &&
          <div data-ev-id="ev_e53f9ec415" className="text-center py-16">
              <p data-ev-id="ev_ec96e6ab64" className="text-slate text-lg">No products found matching your criteria.</p>
            </div>
          }
        </div>
      </section>

      {/* CTA */}
      <section data-ev-id="ev_1a55d3a1eb" className="py-20 bg-forest">
        <div data-ev-id="ev_e42e58cb48" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>

            <h2 data-ev-id="ev_394aacd2a6" className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Need a Custom Feed Solution?
            </h2>
            <p data-ev-id="ev_7843fd0e3e" className="text-white/70 text-lg mb-8">
              Our nutrition experts can help you create a customized feeding program
              for your specific requirements.
            </p>
            <Button href="/contact" variant="primary" size="lg" icon>
              Request Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>);

}