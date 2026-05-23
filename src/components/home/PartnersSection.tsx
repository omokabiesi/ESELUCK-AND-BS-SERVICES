import { motion } from 'framer-motion';

const partners = [
{ name: 'AgriCorp', logo: 'AC' },
{ name: 'FeedMax', logo: 'FM' },
{ name: 'AquaLife', logo: 'AL' },
{ name: 'GreenGrow', logo: 'GG' },
{ name: 'LiveStock Pro', logo: 'LP' },
{ name: 'NutriFeed', logo: 'NF' }];


export default function PartnersSection() {
  return (
    <section data-ev-id="ev_3dbee63b8d" className="py-16 lg:py-20 bg-cream border-y border-gold/10">
      <div data-ev-id="ev_35eff7f744" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate text-sm uppercase tracking-widest mb-10">

          Trusted by leading agricultural businesses
        </motion.p>

        <div data-ev-id="ev_c7be089c32" className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {partners.map((partner, index) =>
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group">

              <div data-ev-id="ev_a51f86dd4f" className="w-24 h-16 lg:w-32 lg:h-20 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all group-hover:shadow-md group-hover:border-gold/20">
                <span data-ev-id="ev_035eddeb86" className="font-display text-2xl lg:text-3xl font-bold text-charcoal/30 group-hover:text-gold transition-colors">
                  {partner.logo}
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}