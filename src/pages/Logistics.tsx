import { motion } from 'framer-motion';
import { Globe, Ship, Truck, Warehouse, FileCheck, Clock, Shield, TrendingUp, MapPin, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

const importProcess = [
{
  step: 1,
  icon: Globe,
  title: 'Global Sourcing',
  description: 'We identify and partner with the world\'s most reliable suppliers of raw materials and finished feeds.'
},
{
  step: 2,
  icon: FileCheck,
  title: 'Quality Verification',
  description: 'Every shipment undergoes rigorous quality testing at source before shipping to ensure standards are met.'
},
{
  step: 3,
  icon: Ship,
  title: 'Shipping & Customs',
  description: 'Efficient freight management and customs clearance through Nigeria\'s major ports.'
},
{
  step: 4,
  icon: Warehouse,
  title: 'Warehousing',
  description: 'Strategic warehouse locations across Nigeria for optimal storage and distribution.'
},
{
  step: 5,
  icon: Truck,
  title: 'Last-Mile Delivery',
  description: 'Reliable delivery to your farm, mill, or distribution point anywhere in Nigeria.'
}];


const capabilities = [
{
  icon: Clock,
  title: 'Fast Turnaround',
  description: 'Optimized supply chain for minimum lead times from order to delivery.',
  stat: '2-4 Weeks'
},
{
  icon: Shield,
  title: 'Quality Assured',
  description: 'Every product batch is certified and traceable to source.',
  stat: '100% Certified'
},
{
  icon: TrendingUp,
  title: 'Competitive Pricing',
  description: 'Direct relationships with suppliers for the best market rates.',
  stat: 'Best Prices'
},
{
  icon: Warehouse,
  title: 'Bulk Capacity',
  description: 'Large-scale import capacity to meet industrial demands.',
  stat: '10K+ Tonnes'
}];


const sourceCountries = [
{ name: 'Brazil', flag: '🇧🇷', products: 'Soybean Meal, Corn' },
{ name: 'Argentina', flag: '🇦🇷', products: 'Soybean Meal, Wheat' },
{ name: 'Peru', flag: '🇵🇪', products: 'Fish Meal, Fish Oil' },
{ name: 'USA', flag: '🇺🇸', products: 'Corn Gluten, DDGS' },
{ name: 'India', flag: '🇮🇳', products: 'Rice Bran, Groundnut Cake' },
{ name: 'China', flag: '🇨🇳', products: 'Amino Acids, Vitamins' },
{ name: 'Netherlands', flag: '🇳🇱', products: 'Premixes, Additives' },
{ name: 'Denmark', flag: '🇩🇰', products: 'Enzymes, Probiotics' }];


export default function Logistics() {
  return (
    <Layout>
      {/* Hero Section */}
      <section data-ev-id="ev_c93621aec4" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-forest via-forest-dark to-charcoal overflow-hidden">
        <div data-ev-id="ev_a5b45ab67f" className="absolute inset-0">
          <div data-ev-id="ev_eaf1ec2628"
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(196, 160, 82, 0.3) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(196, 160, 82, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

        </div>

        <div data-ev-id="ev_9f1b386747" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto">

            <div data-ev-id="ev_a7e78aa081" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <span data-ev-id="ev_0c701c4b03" className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span data-ev-id="ev_b5f6a77024" className="text-gold text-sm font-medium tracking-wide uppercase">Import & Logistics</span>
            </div>
            <h1 data-ev-id="ev_900b9648b3" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Global Sourcing,
              <span data-ev-id="ev_a6c8e7a6d9" className="text-gold"> Local Delivery</span>
            </h1>
            <p data-ev-id="ev_5e02f6b845" className="text-xl text-white/70 leading-relaxed">
              Our world-class import and logistics infrastructure ensures you receive
              premium products from global suppliers, delivered reliably to your doorstep.
            </p>
          </motion.div>
        </div>

        {/* Wave */}
        <div data-ev-id="ev_7f22a66314" className="absolute bottom-0 left-0 right-0">
          <svg data-ev-id="ev_fe6e5c2277" viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
            <path data-ev-id="ev_8520dd8d6c"
            d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H0Z"
            fill="#FAF9F6" />

          </svg>
        </div>
      </section>

      {/* Import Process */}
      <section data-ev-id="ev_6289475014" className="py-20 lg:py-28 bg-cream">
        <div data-ev-id="ev_82839db933" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Process"
            title="From Source to Your Farm"
            subtitle="A streamlined import process that ensures quality, efficiency, and reliability at every step." />


          <div data-ev-id="ev_13080718e6" className="relative">
            {/* Connection Line */}
            <div data-ev-id="ev_8f25da7ba8" className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />

            <div data-ev-id="ev_655ce5c264" className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {importProcess.map((item, index) =>
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center">

                  {/* Step Number */}
                  <div data-ev-id="ev_24cf3b6ef7" className="relative z-10 w-12 h-12 mx-auto mb-4 rounded-full bg-gold flex items-center justify-center text-forest font-bold text-lg">
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div data-ev-id="ev_1993b460f4" className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                    <item.icon size={32} className="text-forest" />
                  </div>

                  <h3 data-ev-id="ev_44abcc21cb" className="font-display text-lg font-bold text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p data-ev-id="ev_10c3c94e8a" className="text-slate text-sm">{item.description}</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section data-ev-id="ev_f12f6b5e98" className="py-20 lg:py-28 bg-forest">
        <div data-ev-id="ev_3baba4fc8c" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Capabilities"
            title="Why Choose Our Logistics"
            subtitle="Industry-leading capabilities that set us apart in agricultural imports."
            light />


          <div data-ev-id="ev_ed4f6f6ffc" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) =>
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors">

                <div data-ev-id="ev_f08bc7c87a" className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold/10 flex items-center justify-center">
                  <cap.icon size={28} className="text-gold" />
                </div>
                <div data-ev-id="ev_eb16e91f68" className="text-gold font-bold text-2xl mb-2">{cap.stat}</div>
                <h3 data-ev-id="ev_67f78385ec" className="font-display text-lg font-semibold text-white mb-2">
                  {cap.title}
                </h3>
                <p data-ev-id="ev_0b4ba5875e" className="text-white/60 text-sm">{cap.description}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Global Sources */}
      <section data-ev-id="ev_c95b28ed3e" className="py-20 lg:py-28 bg-cream">
        <div data-ev-id="ev_78761e84d8" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Global Network"
            title="Where We Source From"
            subtitle="Direct partnerships with suppliers in key agricultural exporting countries." />


          <div data-ev-id="ev_af9addf162" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sourceCountries.map((country, index) =>
            <motion.div
              key={country.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">

                <span data-ev-id="ev_39243258c7" className="text-4xl">{country.flag}</span>
                <div data-ev-id="ev_007af6b2f8">
                  <h4 data-ev-id="ev_8186542b76" className="font-semibold text-charcoal">{country.name}</h4>
                  <p data-ev-id="ev_b955976ba7" className="text-slate text-sm">{country.products}</p>
                </div>
              </motion.div>
            )}
          </div>

          {/* World Map Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 relative h-64 lg:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-forest to-forest-dark">

            <div data-ev-id="ev_a189980150" className="absolute inset-0 flex items-center justify-center">
              <div data-ev-id="ev_a31c2e4167" className="text-center">
                <Globe size={80} className="text-gold/30 mx-auto mb-4" />
                <h3 data-ev-id="ev_d58c4e32c8" className="font-display text-2xl font-bold text-white mb-2">
                  Global Reach, Local Impact
                </h3>
                <p data-ev-id="ev_ffa1cd471a" className="text-white/60 max-w-md mx-auto">
                  Connected to the world's best agricultural suppliers,
                  delivering quality to every corner of Nigeria.
                </p>
              </div>
            </div>

            {/* Animated Dots */}
            {[...Array(8)].map((_, i) =>
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity
              }}
              className="absolute w-3 h-3 bg-gold rounded-full"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`
              }} />

            )}
          </motion.div>
        </div>
      </section>

      {/* Warehouses */}
      <section data-ev-id="ev_2597129b90" className="py-20 lg:py-28 bg-white">
        <div data-ev-id="ev_d7583f41d8" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Infrastructure"
            title="Strategic Warehouse Locations"
            subtitle="Modern storage facilities positioned for optimal nationwide distribution." />


          <div data-ev-id="ev_d5e975b701" className="grid md:grid-cols-3 gap-6">
            {[
            { city: 'Lagos', region: 'South-West Hub', capacity: '5,000 MT', address: 'Apapa Industrial Area' },
            { city: 'Kano', region: 'Northern Hub', capacity: '3,000 MT', address: 'Sharada Industrial Estate' },
            { city: 'Port Harcourt', region: 'South-South Hub', capacity: '2,000 MT', address: 'Trans Amadi Industrial Layout' }].
            map((warehouse, index) =>
            <motion.div
              key={warehouse.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>

                <GlassCard className="p-6">
                  <div data-ev-id="ev_2469e96c77" className="flex items-start gap-4">
                    <div data-ev-id="ev_1c2a9607af" className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <MapPin size={24} className="text-gold" />
                    </div>
                    <div data-ev-id="ev_99d829f411">
                      <h3 data-ev-id="ev_f9886517ed" className="font-display text-xl font-bold text-charcoal mb-1">
                        {warehouse.city}
                      </h3>
                      <p data-ev-id="ev_5a96744623" className="text-gold text-sm font-medium mb-2">{warehouse.region}</p>
                      <p data-ev-id="ev_f5ca915dff" className="text-slate text-sm mb-1">Capacity: {warehouse.capacity}</p>
                      <p data-ev-id="ev_14f4f03e0b" className="text-slate text-sm">{warehouse.address}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-ev-id="ev_8202e9bdae" className="py-20 lg:py-28 bg-gradient-to-r from-gold to-gold-light">
        <div data-ev-id="ev_4e7d075ec0" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>

            <h2 data-ev-id="ev_4bd4b1b261" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest mb-6">
              Need to Import Raw Materials?
            </h2>
            <p data-ev-id="ev_337b8ee669" className="text-forest/70 text-lg mb-8 max-w-2xl mx-auto">
              Let us handle the complex logistics while you focus on your business.
              Get a quote for your import requirements today.
            </p>
            <div data-ev-id="ev_f8414005fa" className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg" icon>
                Request Import Quote
              </Button>
              <Button href="/products" variant="outline" size="lg" icon className="border-forest text-forest hover:bg-forest hover:text-gold">
                View Products
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>);

}