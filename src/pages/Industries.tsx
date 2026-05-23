import { motion } from 'framer-motion';
import { ArrowRight, Check, Bird, Fish, Beef, Factory, Wheat, Truck } from 'lucide-react';
import { Link } from 'react-router';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const industries = [
{
  id: 'poultry',
  name: 'Poultry Farming',
  icon: Bird,
  description: 'Complete nutrition solutions for broilers, layers, breeders, and turkey operations of all sizes.',
  image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&h=600&fit=crop',
  stats: ['200+ Partner Farms', '15M Birds Fed Annually', '99.5% Survival Rate'],
  solutions: ['Starter Feeds', 'Grower Feeds', 'Layer Mash', 'Breeder Feeds', 'Broiler Finisher'],
  color: 'from-amber-500 to-orange-600'
},
{
  id: 'aquaculture',
  name: 'Aquaculture',
  icon: Fish,
  description: 'Premium aqua feeds for catfish, tilapia, and other freshwater species with optimal FCR.',
  image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
  stats: ['100+ Fish Farms', '5000 Tonnes/Year', 'Best FCR Rates'],
  solutions: ['Floating Pellets', 'Sinking Pellets', 'Fry Feed', 'Broodstock Nutrition'],
  color: 'from-blue-500 to-cyan-600'
},
{
  id: 'livestock',
  name: 'Livestock Farming',
  icon: Beef,
  description: 'Balanced feeds and supplements for cattle, pigs, goats, and sheep production.',
  image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&h=600&fit=crop',
  stats: ['50+ Ranches', 'All Species Covered', 'Mineral Premixes'],
  solutions: ['Cattle Concentrate', 'Pig Feed', 'Goat Feed', 'Mineral Licks', 'Calf Starter'],
  color: 'from-green-500 to-emerald-600'
},
{
  id: 'feedmills',
  name: 'Feed Mills',
  icon: Factory,
  description: 'Quality raw materials and ingredients for feed manufacturers and processors.',
  image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop',
  stats: ['30+ Mill Partners', 'Bulk Supply', 'Consistent Quality'],
  solutions: ['Soybean Meal', 'Fish Meal', 'Corn Gluten', 'Wheat Bran', 'Premixes'],
  color: 'from-purple-500 to-violet-600'
},
{
  id: 'distributors',
  name: 'Agro Distributors',
  icon: Truck,
  description: 'Partnership opportunities for retailers and distributors across Nigeria.',
  image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
  stats: ['100+ Distributors', '36 States', 'Exclusive Territories'],
  solutions: ['Wholesale Pricing', 'Marketing Support', 'Training Programs', 'Territory Protection'],
  color: 'from-gold to-gold-light'
},
{
  id: 'research',
  name: 'Agricultural Research',
  icon: Wheat,
  description: 'Supporting universities and research institutions with quality feed materials.',
  image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
  stats: ['10+ Institutions', 'Custom Formulations', 'Technical Support'],
  solutions: ['Research Quantities', 'Custom Specs', 'Lab Analysis', 'Documentation'],
  color: 'from-teal-500 to-cyan-600'
}];


export default function Industries() {
  return (
    <Layout>
      {/* Hero Section */}
      <section data-ev-id="ev_290a66a44b" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-forest via-forest-dark to-charcoal overflow-hidden">
        <div data-ev-id="ev_6f6dc8060f" className="absolute inset-0">
          <div data-ev-id="ev_44e84b5df3"
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(196, 160, 82, 0.3) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(196, 160, 82, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

        </div>

        <div data-ev-id="ev_60d8b0e1d9" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto">

            <div data-ev-id="ev_7c4429aafe" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <span data-ev-id="ev_78e037e6b8" className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span data-ev-id="ev_bb2fb1650a" className="text-gold text-sm font-medium tracking-wide uppercase">Industries We Serve</span>
            </div>
            <h1 data-ev-id="ev_6ae2dba596" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Powering Every Sector of
              <span data-ev-id="ev_b96ef79349" className="text-gold"> Nigerian Agriculture</span>
            </h1>
            <p data-ev-id="ev_97d1a95457" className="text-xl text-white/70 leading-relaxed">
              From small-scale farms to industrial feed mills, we provide tailored
              solutions that drive growth and productivity across all agricultural sectors.
            </p>
          </motion.div>
        </div>

        {/* Wave */}
        <div data-ev-id="ev_4f20aa10d5" className="absolute bottom-0 left-0 right-0">
          <svg data-ev-id="ev_66f87d684a" viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
            <path data-ev-id="ev_f56533ef23"
            d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H0Z"
            fill="#FAF9F6" />

          </svg>
        </div>
      </section>

      {/* Industries Grid */}
      <section data-ev-id="ev_cfde6a9e4f" className="py-20 lg:py-28 bg-cream">
        <div data-ev-id="ev_5a65e684a1" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-ev-id="ev_b6034ea77d" className="flex flex-col gap-16">
            {industries.map((industry, index) =>
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`
              }>

                {/* Image */}
                <div data-ev-id="ev_163ecbb0d1" className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div data-ev-id="ev_67fe787e4d" className="relative rounded-3xl overflow-hidden shadow-elevation">
                    <img data-ev-id="ev_ae8648a6d7"
                  src={industry.image}
                  alt={industry.name}
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy" />

                    <div data-ev-id="ev_38e98aadcc" className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                    
                    {/* Floating Stats */}
                    <div data-ev-id="ev_56717409c3" className="absolute bottom-6 left-6 right-6">
                      <div data-ev-id="ev_05f9170019" className="flex flex-wrap gap-3">
                        {industry.stats.map((stat) =>
                      <span data-ev-id="ev_20a179bfa7"
                      key={stat}
                      className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium">

                            {stat}
                          </span>
                      )}
                      </div>
                    </div>
                  </div>

                  {/* Icon Badge */}
                  <div data-ev-id="ev_8015f66f50"
                className={`absolute -top-4 ${index % 2 === 1 ? '-left-4' : '-right-4'} w-20 h-20 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-lg`}>

                    <industry.icon size={40} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div data-ev-id="ev_d44456f669" className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 data-ev-id="ev_4ca0852f14" className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                    {industry.name}
                  </h2>
                  <p data-ev-id="ev_59fd15d75f" className="text-slate text-lg leading-relaxed mb-6">
                    {industry.description}
                  </p>

                  {/* Solutions */}
                  <div data-ev-id="ev_724b49537a" className="mb-8">
                    <h4 data-ev-id="ev_24eebf39c3" className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                      Our Solutions
                    </h4>
                    <div data-ev-id="ev_576f010475" className="grid sm:grid-cols-2 gap-3">
                      {industry.solutions.map((solution) =>
                    <div data-ev-id="ev_3fb05dec68"
                    key={solution}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm">

                          <div data-ev-id="ev_d6d75154c7" className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                            <Check size={16} className="text-gold" />
                          </div>
                          <span data-ev-id="ev_e73cc987f8" className="text-charcoal font-medium">{solution}</span>
                        </div>
                    )}
                    </div>
                  </div>

                  <Button href="/contact" variant="primary" icon>
                    Get Started
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-ev-id="ev_bd9f6f3dc4" className="py-20 lg:py-28 bg-forest">
        <div data-ev-id="ev_0614d5d04b" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>

            <h2 data-ev-id="ev_737479db15" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Don't See Your Industry?
            </h2>
            <p data-ev-id="ev_b5f9a44534" className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              We serve diverse agricultural operations. Contact us to discuss your
              specific needs and how we can support your business.
            </p>
            <div data-ev-id="ev_2ac7dee89b" className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg" icon>
                Contact Our Team
              </Button>
              <Button href="/products" variant="outline" size="lg" icon>
                View All Products
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>);

}