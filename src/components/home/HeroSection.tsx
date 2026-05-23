import { motion } from 'framer-motion';
import heroBanner from '@/assets/uploads/hero-banner.jpg';

export default function HeroSection() {
  return (
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
    </section>);

}