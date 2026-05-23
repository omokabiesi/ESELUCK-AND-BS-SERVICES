import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const testimonials = [
{
  name: 'Chief Adebayo Okonkwo',
  role: 'Managing Director, Sunrise Farms Ltd',
  location: 'Ibadan, Oyo State',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  quote:
  "ESELUCK & BS has transformed our poultry operation. Their consistent quality feed has improved our bird mortality rate by 40% and boosted egg production significantly. The technical support team is always available.",
  rating: 5
},
{
  name: 'Mrs. Fatima Ibrahim',
  role: 'CEO, AquaGold Fish Farm',
  location: 'Kano, Kano State',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
  quote:
  "We've been sourcing fish feed from ESELUCK for 5 years now. Their floating pellets give us the best feed conversion ratio in the region. The delivery is always on time, even to our northern location.",
  rating: 5
},
{
  name: 'Mr. Emmanuel Nwachukwu',
  role: 'Operations Manager, Delta Feed Mills',
  location: 'Asaba, Delta State',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
  quote:
  "As a feed mill, quality raw materials are everything. ESELUCK provides us with premium soybean meal and fish meal that consistently meets our specifications. Their import logistics are impeccable.",
  rating: 5
},
{
  name: 'Dr. Grace Adekunle',
  role: 'Veterinary Consultant, AgriCare Nigeria',
  location: 'Lagos, Lagos State',
  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
  quote:
  "I recommend ESELUCK products to all my clients. Their feeds are formulated with the right nutritional balance, and you can see the difference in livestock health and productivity.",
  rating: 5
}];


export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section data-ev-id="ev_98d48a9e2e" className="relative py-24 lg:py-32 bg-forest overflow-hidden">
      {/* Background */}
      <div data-ev-id="ev_c8636733fd" className="absolute inset-0">
        <div data-ev-id="ev_ffdeea46d3" className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div data-ev-id="ev_bd8e41c16b" className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div data-ev-id="ev_9a398bee32" className="absolute bottom-1/4 right-0 w-80 h-80 bg-forest-light/30 rounded-full blur-3xl" />
      </div>

      <div data-ev-id="ev_fcadbc61a2" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="Trusted by Industry Leaders"
          subtitle="Hear from farmers, feed mills, and agricultural businesses across Nigeria who have partnered with us."
          light />


        <div data-ev-id="ev_9f93cb9360" className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative">

              <div data-ev-id="ev_a9fa5b18c1" className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 lg:p-12">
                {/* Quote Icon */}
                <div data-ev-id="ev_d9494d8992" className="absolute -top-6 left-8 w-12 h-12 bg-gold rounded-2xl flex items-center justify-center">
                  <Quote size={24} className="text-forest" />
                </div>

                {/* Rating */}
                <div data-ev-id="ev_97316e45af" className="flex items-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) =>
                  <Star key={i} size={20} className="text-gold fill-gold" />
                  )}
                </div>

                {/* Quote */}
                <blockquote data-ev-id="ev_ad6488ed1c" className="font-display text-xl lg:text-2xl text-white leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Author */}
                <div data-ev-id="ev_e57d36cb89" className="flex items-center gap-4">
                  <img data-ev-id="ev_3dcf8c3793"
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold/30" />

                  <div data-ev-id="ev_8f9696831f">
                    <p data-ev-id="ev_c3fb3ad478" className="font-display text-lg font-semibold text-white">
                      {testimonials[currentIndex].name}
                    </p>
                    <p data-ev-id="ev_c385e3b512" className="text-gold text-sm">{testimonials[currentIndex].role}</p>
                    <p data-ev-id="ev_327cab673a" className="text-white/50 text-sm">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div data-ev-id="ev_60c2d6367e" className="flex items-center justify-center gap-4 mt-8">
            <button data-ev-id="ev_41d1b2fdce"
            onClick={prev}
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:text-forest hover:border-gold transition-all"
            aria-label="Previous testimonial">

              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div data-ev-id="ev_0894383fed" className="flex items-center gap-2">
              {testimonials.map((_, index) =>
              <button data-ev-id="ev_4ca92a1309"
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex ?
              'bg-gold w-8' :
              'bg-white/30 hover:bg-white/50'}`
              }
              aria-label={`Go to testimonial ${index + 1}`} />

              )}
            </div>

            <button data-ev-id="ev_713d826648"
            onClick={next}
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:text-forest hover:border-gold transition-all"
            aria-label="Next testimonial">

              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>);

}