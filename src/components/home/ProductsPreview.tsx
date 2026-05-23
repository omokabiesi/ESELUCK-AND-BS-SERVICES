import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import fishFeedImage from '@/assets/generated/nigerian-farmer-catfish-pond.jpg.png';

const products = [
{
  name: 'Poultry Feed Solutions',
  description: 'Complete nutrition for broilers, layers, and breeders with optimized growth formulas.',
  image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&h=400&fit=crop',
  features: ['Starter Feed', 'Grower Feed', 'Layer Mash', 'Broiler Finisher'],
  color: 'from-amber-500 to-orange-600'
},
{
  name: 'Fish Feed Range',
  description: 'High-protein aquaculture feeds for catfish, tilapia, and other species.',
  image: fishFeedImage,
  features: ['Floating Pellets', 'Sinking Pellets', 'Fry Feed', 'Broodstock Feed'],
  color: 'from-blue-500 to-cyan-600'
},
{
  name: 'Livestock Nutrition',
  description: 'Premium feeds for cattle, goats, sheep, and pigs with balanced minerals.',
  image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&h=400&fit=crop',
  features: ['Cattle Feed', 'Pig Feed', 'Goat Feed', 'Mineral Premix'],
  color: 'from-green-500 to-emerald-600'
},
{
  name: 'Raw Materials',
  description: 'Quality feedstock ingredients for feed mills and manufacturers.',
  image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop',
  features: ['Soybean Meal', 'Fish Meal', 'Corn Gluten', 'Wheat Bran'],
  color: 'from-gold to-gold-light'
}];


export default function ProductsPreview() {
  return (
    <section data-ev-id="ev_e3c554a940" className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      {/* Background */}
      <div data-ev-id="ev_8e73827313" className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-gold/5 to-transparent rounded-full blur-3xl" />

      <div data-ev-id="ev_a2ea3502de" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Products"
          title="Complete Feed Solutions"
          subtitle="From raw materials to finished feeds, we provide everything your livestock and aquaculture operations need to thrive." />


        <div data-ev-id="ev_50ff366156" className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) =>
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group">

              <div data-ev-id="ev_3e99ff9684" className="relative bg-white rounded-3xl overflow-hidden shadow-glass hover:shadow-elevation transition-all duration-500 hover:-translate-y-2">
                {/* Image */}
                <div data-ev-id="ev_24932914df" className="relative h-56 overflow-hidden">
                  <img data-ev-id="ev_c67f3846c3"
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy" />

                  <div data-ev-id="ev_f7786dd25c" className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  
                  {/* Badge */}
                  <div data-ev-id="ev_cfb15c0548"
                className={`absolute top-4 left-4 px-4 py-1.5 rounded-full bg-gradient-to-r ${product.color} text-white text-sm font-medium`}>

                    Premium Quality
                  </div>
                </div>

                {/* Content */}
                <div data-ev-id="ev_6461deb82b" className="p-6 lg:p-8">
                  <h3 data-ev-id="ev_0fa69a4cf7" className="font-display text-2xl font-bold text-charcoal mb-2">
                    {product.name}
                  </h3>
                  <p data-ev-id="ev_a77304b225" className="text-slate mb-6">{product.description}</p>

                  {/* Features */}
                  <div data-ev-id="ev_e42255f50a" className="grid grid-cols-2 gap-2 mb-6">
                    {product.features.map((feature) =>
                  <div data-ev-id="ev_8f52f6f79f" key={feature} className="flex items-center gap-2 text-sm text-slate">
                        <Check size={16} className="text-gold shrink-0" />
                        <span data-ev-id="ev_3939290e70">{feature}</span>
                      </div>
                  )}
                  </div>

                  {/* Link */}
                  <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all">

                    View Products
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12">

          <Button href="/products" variant="secondary" size="lg" icon>
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>);

}