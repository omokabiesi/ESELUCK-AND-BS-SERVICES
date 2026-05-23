import { motion } from 'framer-motion';
import {
  Leaf,
  FlaskConical,
  Truck,
  Shield,
  Users,
  TrendingUp,
  ArrowRight } from
'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

const features = [
{
  icon: Leaf,
  title: 'Premium Bio Feeds',
  description:
  'Sustainably sourced, nutrient-rich bio feeds designed for optimal livestock health and growth performance.',
  color: 'from-green-500 to-emerald-600'
},
{
  icon: FlaskConical,
  title: 'Quality Assurance',
  description:
  'Rigorous testing and quality control at every stage, from sourcing to delivery, ensuring consistent excellence.',
  color: 'from-blue-500 to-cyan-600'
},
{
  icon: Truck,
  title: 'Nationwide Logistics',
  description:
  'Efficient distribution network covering all 36 states, delivering to your doorstep with speed and reliability.',
  color: 'from-orange-500 to-amber-600'
},
{
  icon: Shield,
  title: 'Certified Products',
  description:
  'All products meet international standards with proper certifications and regulatory compliance.',
  color: 'from-purple-500 to-violet-600'
},
{
  icon: Users,
  title: 'Expert Support',
  description:
  'Dedicated team of nutritionists and agronomists providing technical guidance and consultation.',
  color: 'from-pink-500 to-rose-600'
},
{
  icon: TrendingUp,
  title: 'Business Growth',
  description:
  'Partnership programs designed to help distributors and farmers scale their operations profitably.',
  color: 'from-gold to-gold-light'
}];


export default function FeaturesSection() {
  return (
    <section data-ev-id="ev_1de5e52b18" className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      {/* Background Decorations */}
      <div data-ev-id="ev_a9d623b984" className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-gold/5 to-transparent rounded-full blur-3xl" />
      <div data-ev-id="ev_76df0cbef6" className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-forest/5 to-transparent rounded-full blur-3xl" />

      <div data-ev-id="ev_3764c986b0" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Us"
          title="Excellence in Every Grain"
          subtitle="We combine global sourcing expertise with local market understanding to deliver unmatched value to Nigeria's agricultural sector." />


        <div data-ev-id="ev_555c9cb6ef" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) =>
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>

              <GlassCard className="h-full p-6 lg:p-8 group cursor-pointer">
                {/* Icon */}
                <div data-ev-id="ev_30811b9a18"
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>

                  <feature.icon size={28} className="text-white" />
                </div>

                {/* Content */}
                <h3 data-ev-id="ev_2b5e51d079" className="font-display text-xl font-bold text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p data-ev-id="ev_068ed4b6b1" className="text-slate leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Link */}
                <div data-ev-id="ev_d190fc856d" className="flex items-center gap-2 text-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span data-ev-id="ev_d024998a1c">Learn more</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </GlassCard>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}