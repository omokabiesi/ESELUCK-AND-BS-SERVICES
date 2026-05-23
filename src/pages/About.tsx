import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Globe, ArrowRight, Check } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

const values = [
{
  icon: Award,
  title: 'Excellence',
  description: 'We pursue the highest standards in every product we source and deliver.'
},
{
  icon: Heart,
  title: 'Integrity',
  description: 'Honesty and transparency guide all our business relationships.'
},
{
  icon: Users,
  title: 'Partnership',
  description: 'We grow together with our clients, supporting their success at every step.'
},
{
  icon: Globe,
  title: 'Innovation',
  description: 'Continuously improving our products and services through research.'
}];


const milestones = [
{ year: '2008', title: 'Company Founded', description: 'Started operations in Lagos with a vision to transform Nigerian agriculture.' },
{ year: '2012', title: 'Nationwide Expansion', description: 'Expanded distribution network to cover all 36 states.' },
{ year: '2016', title: 'International Partnerships', description: 'Established direct sourcing relationships with global suppliers.' },
{ year: '2020', title: 'Quality Certification', description: 'Achieved ISO 9001 and NAFDAC certifications.' },
{ year: '2024', title: '500+ Partners', description: 'Reached milestone of serving over 500 partner farms and mills.' }];


const team = [
{
  name: 'Chief Emeka Okafor',
  role: 'Founder & CEO',
  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face'
},
{
  name: 'Mrs. Adaeze Nwosu',
  role: 'Chief Operations Officer',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face'
},
{
  name: 'Dr. Ibrahim Musa',
  role: 'Head of Nutrition',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
},
{
  name: 'Engr. Chioma Eze',
  role: 'Logistics Director',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face'
}];


export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section data-ev-id="ev_4239bb358d" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-forest via-forest-dark to-charcoal overflow-hidden">
        <div data-ev-id="ev_0073e88dd3" className="absolute inset-0">
          <div data-ev-id="ev_d8b69cb341"
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(196, 160, 82, 0.3) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(196, 160, 82, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

        </div>

        <div data-ev-id="ev_a9ea8cdbf6" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl">

            <div data-ev-id="ev_333bbd2f34" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <span data-ev-id="ev_168b0926be" className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span data-ev-id="ev_87a32cf13d" className="text-gold text-sm font-medium tracking-wide uppercase">About Us</span>
            </div>
            <h1 data-ev-id="ev_6bcf9f4c36" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Building Nigeria's
              <span data-ev-id="ev_ca594054fc" className="text-gold"> Agricultural Future</span>
            </h1>
            <p data-ev-id="ev_32fc1ecf11" className="text-xl text-white/70 leading-relaxed">
              For over 15 years, ESELUCK & BS Nigeria Limited has been at the forefront
              of agricultural innovation, connecting Nigerian farmers with world-class
              feed solutions and nutrition products.
            </p>
          </motion.div>
        </div>

        {/* Wave */}
        <div data-ev-id="ev_a319cb2250" className="absolute bottom-0 left-0 right-0">
          <svg data-ev-id="ev_5282990e7e" viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
            <path data-ev-id="ev_3ead781214"
            d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H0Z"
            fill="#FAF9F6" />

          </svg>
        </div>
      </section>

      {/* Mission & Vision */}
      <section data-ev-id="ev_3b765f8ede" className="py-20 lg:py-28 bg-cream">
        <div data-ev-id="ev_f942450f73" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-ev-id="ev_5ea9e66eaf" className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}>

              <GlassCard className="h-full p-8 lg:p-10">
                <div data-ev-id="ev_1ac7d4d0a9" className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-6">
                  <Target size={32} className="text-forest" />
                </div>
                <h3 data-ev-id="ev_b427d5bd16" className="font-display text-2xl font-bold text-charcoal mb-4">Our Mission</h3>
                <p data-ev-id="ev_add68362c9" className="text-slate leading-relaxed">
                  To empower Nigerian farmers and agribusinesses with premium-quality feed
                  solutions and reliable supply chains, driving sustainable growth and
                  food security across the nation.
                </p>
              </GlassCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}>

              <GlassCard className="h-full p-8 lg:p-10">
                <div data-ev-id="ev_6daebee4bc" className="w-16 h-16 rounded-2xl bg-gradient-to-br from-forest to-forest-light flex items-center justify-center mb-6">
                  <Eye size={32} className="text-white" />
                </div>
                <h3 data-ev-id="ev_5ace576e5a" className="font-display text-2xl font-bold text-charcoal mb-4">Our Vision</h3>
                <p data-ev-id="ev_587e08ba6d" className="text-slate leading-relaxed">
                  To be Africa's most trusted agricultural input company, recognized for
                  excellence in quality, innovation in nutrition science, and commitment
                  to farmer success.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section data-ev-id="ev_6a22a31016" className="py-20 lg:py-28 bg-white">
        <div data-ev-id="ev_f9661b5058" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-ev-id="ev_ebe3023f70" className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>

              <SectionHeading
                badge="Our Story"
                title="From Humble Beginnings to Industry Leadership"
                centered={false} />

              <div data-ev-id="ev_1c6c70280a" className="flex flex-col gap-6 text-slate leading-relaxed">
                <p data-ev-id="ev_97a9ac3d87">
                  ESELUCK & BS Nigeria Limited was founded in 2008 by a team of agricultural
                  enthusiasts who saw a gap in Nigeria's feed industry. What started as a
                  small import operation in Lagos has grown into a nationwide network
                  serving hundreds of farms and feed mills.
                </p>
                <p data-ev-id="ev_9d06151467">
                  Our founders understood that quality nutrition is the foundation of
                  successful livestock and aquaculture operations. They built relationships
                  with the world's best raw material suppliers and invested in understanding
                  the unique needs of Nigerian farmers.
                </p>
                <p data-ev-id="ev_97e9447ce2">
                  Today, we continue to innovate, bringing the latest in animal nutrition
                  science to our products while maintaining the personal touch and commitment
                  to service that has defined us from day one.
                </p>
              </div>
              <div data-ev-id="ev_04b78a69e8" className="mt-8">
                <Button href="/contact" variant="primary" icon>
                  Partner With Us
                </Button>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative">

              <div data-ev-id="ev_f80b7765aa" className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/50 to-transparent" />
              <div data-ev-id="ev_df83736aca" className="flex flex-col gap-8">
                {milestones.map((milestone, index) =>
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20">

                    <div data-ev-id="ev_430f8ad6b8" className="absolute left-4 w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                      <div data-ev-id="ev_85a4aec149" className="w-3 h-3 rounded-full bg-forest" />
                    </div>
                    <div data-ev-id="ev_5b7f4b5233" className="text-gold font-bold text-sm mb-1">{milestone.year}</div>
                    <h4 data-ev-id="ev_b84bfc3f5b" className="font-display text-lg font-semibold text-charcoal mb-1">
                      {milestone.title}
                    </h4>
                    <p data-ev-id="ev_482161fbc9" className="text-slate text-sm">{milestone.description}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section data-ev-id="ev_30348ea751" className="py-20 lg:py-28 bg-forest">
        <div data-ev-id="ev_ad92dfb4b3" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="The Principles That Guide Us"
            subtitle="These core values shape every decision we make and every relationship we build."
            light />


          <div data-ev-id="ev_a9c495d06c" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) =>
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors">

                <div data-ev-id="ev_15aa2075e7" className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold/10 flex items-center justify-center">
                  <value.icon size={28} className="text-gold" />
                </div>
                <h3 data-ev-id="ev_41140f30f6" className="font-display text-xl font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p data-ev-id="ev_80ee3d1db8" className="text-white/60 text-sm">{value.description}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section data-ev-id="ev_cf5fa49bd5" className="py-20 lg:py-28 bg-cream">
        <div data-ev-id="ev_cd37233647" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Leadership"
            title="Meet Our Team"
            subtitle="Experienced professionals dedicated to agricultural excellence." />


          <div data-ev-id="ev_f2a32f04e1" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) =>
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group">

                <div data-ev-id="ev_70982bed26" className="relative mb-4 rounded-2xl overflow-hidden">
                  <img data-ev-id="ev_043d6f3b07"
                src={member.image}
                alt={member.name}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy" />

                  <div data-ev-id="ev_6ca21b3744" className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 data-ev-id="ev_044f7880c4" className="font-display text-lg font-semibold text-charcoal">{member.name}</h3>
                <p data-ev-id="ev_61d8534f2f" className="text-gold text-sm">{member.role}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-ev-id="ev_050d5e5b6d" className="py-20 lg:py-28 bg-gradient-to-r from-gold to-gold-light">
        <div data-ev-id="ev_35bee994e7" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>

            <h2 data-ev-id="ev_3512dc223f" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest mb-6">
              Ready to Partner With Us?
            </h2>
            <p data-ev-id="ev_e275a2dc6a" className="text-forest/70 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of successful farms and agribusinesses who trust ESELUCK & BS
              for their feed solutions.
            </p>
            <div data-ev-id="ev_5fcc1d5d3a" className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg" icon>
                Contact Us Today
              </Button>
              <Button href="/products" variant="outline" size="lg" icon className="border-forest text-forest hover:bg-forest hover:text-gold">
                Explore Products
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>);

}