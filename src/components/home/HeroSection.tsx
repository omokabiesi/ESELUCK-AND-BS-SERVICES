import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import heroBanner from '@/assets/uploads/hero-banner.jpg';
import QuoteModal from '@/components/ui/QuoteModal';

export default function HeroSection() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <>
      <section data-ev-id="ev_b0ac674bfa" className="pt-20 lg:pt-24 bg-forest relative">
        {/* Full Image - No Cropping, Fully Responsive */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}>

          <img data-ev-id="ev_58e814da5e"
          src={heroBanner}
          alt="ESELUCK & BS Nigeria Limited - Feeding Growth, Powering Livelihoods - Premium feedstock, bio feeds and nutritional solutions for agriculture"
          className="w-full h-auto block" />

        </motion.div>

        {/* CTA Buttons Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row gap-3 z-10">

          <button data-ev-id="ev_12bacd3a35"
          onClick={() => setQuoteModalOpen(true)}
          className="px-6 py-3 bg-gradient-to-r from-gold to-gold-light text-forest font-semibold rounded-xl hover:shadow-gold transition-all hover:scale-105 whitespace-nowrap">

            Request Quote
          </button>
          <Link
            to="/register"
            className="px-6 py-3 bg-forest border-2 border-gold text-gold font-semibold rounded-xl hover:bg-gold hover:text-forest transition-all whitespace-nowrap text-center">

            Register as Distributor
          </Link>
        </motion.div>
      </section>

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>);

}