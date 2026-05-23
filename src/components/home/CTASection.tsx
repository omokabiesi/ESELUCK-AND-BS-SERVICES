import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section data-ev-id="ev_be3e7fe0ae" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div data-ev-id="ev_4cf4c14437" className="absolute inset-0 bg-gradient-to-br from-gold via-gold-light to-gold" />
      
      {/* Pattern Overlay */}
      <div data-ev-id="ev_a43f409cae"
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230D2818' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />


      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-20 w-32 h-32 bg-forest/10 rounded-full blur-2xl" />

      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-20 w-40 h-40 bg-forest/10 rounded-full blur-2xl" />


      <div data-ev-id="ev_060d5c6656" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-ev-id="ev_38cc143c22" className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>

            <h2 data-ev-id="ev_30dfdff731" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight mb-6">
              Ready to Scale Your
              <br data-ev-id="ev_6682b21f4b" />
              Agricultural Business?
            </h2>
            <p data-ev-id="ev_330fd4552f" className="text-forest/70 text-lg leading-relaxed mb-8 max-w-lg">
              Partner with Nigeria's most trusted feed solutions provider. Whether
              you're a farm, feed mill, or distributor, we have the products and
              support to help you grow.
            </p>

            <div data-ev-id="ev_c061771b6c" className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="secondary" size="lg" icon>
                Request a Quote
              </Button>
              <Button href="/partnership" variant="outline" size="lg" icon className="border-forest text-forest hover:bg-forest hover:text-gold">
                Become a Partner
              </Button>
            </div>
          </motion.div>

          {/* Right - Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4">

            {[
            {
              icon: Phone,
              title: 'Call Us',
              value: '+234 801 234 5678',
              description: 'Speak with our sales team'
            },
            {
              icon: Mail,
              title: 'Email Us',
              value: 'sales@eseluck.com',
              description: 'Get a response within 24 hours'
            },
            {
              icon: Clock,
              title: 'Business Hours',
              value: 'Mon - Sat: 8AM - 6PM',
              description: 'We\'re here when you need us'
            }].
            map((item, index) =>
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-4 p-6 bg-forest rounded-2xl group hover:bg-forest-dark transition-colors">

                <div data-ev-id="ev_6998e2028e" className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                  <item.icon size={28} className="text-gold" />
                </div>
                <div data-ev-id="ev_19dcd1986d">
                  <p data-ev-id="ev_cb8649630c" className="text-gold/70 text-sm">{item.title}</p>
                  <p data-ev-id="ev_fa89f1f897" className="text-white font-semibold text-lg">{item.value}</p>
                  <p data-ev-id="ev_9f125bc1d8" className="text-white/50 text-sm">{item.description}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>);

}